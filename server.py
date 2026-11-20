import http.server
import socketserver
import json
import os
import re
import time
import urllib.request
import urllib.error
import smtplib
from collections import defaultdict
from email.message import EmailMessage

PORT = int(os.environ.get('PORT', 3000))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def load_env():
    """Load key=value pairs from .env if present"""
    env_path = os.path.join(DIRECTORY, '.env')
    if os.path.exists(env_path):
        try:
            with open(env_path, 'r', encoding='utf-8') as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith('#') and '=' in line:
                        k, v = line.split('=', 1)
                        os.environ[k.strip()] = v.strip().strip('"').strip("'")
        except Exception as e:
            print("Error reading .env:", e)

# Initial environment load
load_env()

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
CONFIGURED_RECIPIENT = "deepthikamichetty336@gmail.com"

# In-memory IP rate limiter: max 5 requests per 60 seconds per IP
RATE_LIMIT_STORE = defaultdict(list)
RATE_LIMIT_WINDOW = 60  # seconds
RATE_LIMIT_MAX = 5     # requests

class PortfolioHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == '/api/contact':
            self.handle_contact_form()
        else:
            self.send_response(404)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Endpoint not found'}).encode('utf-8'))

    def check_rate_limit(self, client_ip):
        now = time.time()
        timestamps = RATE_LIMIT_STORE[client_ip]
        # Keep only timestamps within window
        RATE_LIMIT_STORE[client_ip] = [t for t in timestamps if now - t < RATE_LIMIT_WINDOW]
        if len(RATE_LIMIT_STORE[client_ip]) >= RATE_LIMIT_MAX:
            return False
        RATE_LIMIT_STORE[client_ip].append(now)
        return True

    def handle_contact_form(self):
        # Dynamically refresh .env to pick up newly added API keys without restart
        load_env()

        # Check rate limit per client IP
        client_ip = self.client_address[0] if self.client_address else 'unknown'
        if not self.check_rate_limit(client_ip):
            self.respond_json(429, {
                'success': False,
                'error': 'Too many contact requests. Please wait a moment before trying again.',
                'retry_after_seconds': 60
            })
            return

        content_length = int(self.headers.get('Content-Length', 0))
        if content_length == 0:
            self.respond_json(400, {'success': False, 'error': 'Empty request body'})
            return

        try:
            body = self.rfile.read(content_length).decode('utf-8')
            data = json.loads(body)
        except Exception:
            self.respond_json(400, {'success': False, 'error': 'Invalid JSON in request body'})
            return

        # Spam honeypot check: automated bots fill this hidden field
        if data.get('honeypot', '').strip():
            self.respond_json(400, {'success': False, 'error': 'Spam submission detected.'})
            return

        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        subject = data.get('subject', '').strip()
        message = data.get('message', '').strip()

        # Strict field validation
        errors = {}
        if not name:
            errors['name'] = 'Name is required and cannot be empty.'
        elif len(name) < 2:
            errors['name'] = 'Name must be at least 2 characters.'
        elif len(name) > 100:
            errors['name'] = 'Name must not exceed 100 characters.'

        if not email:
            errors['email'] = 'Email is required and cannot be empty.'
        elif not EMAIL_REGEX.match(email):
            errors['email'] = 'Please provide a valid email address.'
        elif len(email) > 100:
            errors['email'] = 'Email must not exceed 100 characters.'

        if not subject:
            errors['subject'] = 'Subject is required and cannot be empty.'
        elif len(subject) < 3:
            errors['subject'] = 'Subject must be at least 3 characters.'
        elif len(subject) > 150:
            errors['subject'] = 'Subject must not exceed 150 characters.'

        if not message:
            errors['message'] = 'Message is required and cannot be empty.'
        elif len(message) < 5:
            errors['message'] = 'Message must be at least 5 characters.'
        elif len(message) > 3000:
            errors['message'] = 'Message must not exceed 3000 characters.'

        if errors:
            self.respond_json(400, {
                'success': False,
                'error': 'Validation failed. Please correct the highlighted errors.',
                'validation_errors': errors
            })
            return

        # Attempt sending email via Resend API
        resend_api_key = os.environ.get('RESEND_API_KEY', '').strip()
        smtp_host = os.environ.get('SMTP_HOST', '').strip()

        if resend_api_key:
            success, msg, dispatch_id = self.send_via_resend(resend_api_key, name, email, subject, message)
            if success:
                self.respond_json(200, {
                    'success': True,
                    'message': "Your message has been sent successfully! I'll get back to you soon.",
                    'dispatch_id': dispatch_id,
                    'recipient': CONFIGURED_RECIPIENT
                })
            else:
                self.respond_json(502, {
                    'success': False,
                    'error': f'Failed to dispatch email via Resend: {msg}',
                    'details': 'Resend rejected the request. Please check that RESEND_API_KEY is valid and SENDER_EMAIL is permitted.'
                })
            return

        # Optional SMTP fallback
        if smtp_host:
            success, msg = self.send_via_smtp(smtp_host, name, email, subject, message)
            if success:
                self.respond_json(200, {
                    'success': True,
                    'message': 'Your message has been successfully delivered via SMTP!',
                    'recipient': CONFIGURED_RECIPIENT
                })
            else:
                self.respond_json(502, {
                    'success': False,
                    'error': f'Failed to dispatch email via SMTP: {msg}'
                })
            return

        # Honest failure: Resend credentials missing
        self.respond_json(503, {
            'success': False,
            'error': 'Resend email service is currently not configured on this server.',
            'details': 'Missing RESEND_API_KEY in server environment variables or .env file.',
            'instructions': 'To activate automated email delivery: Add RESEND_API_KEY="re_..." into a .env file in the portfolio directory.',
            'recipient': CONFIGURED_RECIPIENT
        })

    def send_via_resend(self, api_key, name, email, subject, message):
        sender_email = os.environ.get('SENDER_EMAIL', 'Portfolio Contact <onboarding@resend.dev>')
        recipient = os.environ.get('RECIPIENT_EMAIL', CONFIGURED_RECIPIENT)
        
        # HTML formatting for clean rendering in email client
        html_body = f"""
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff;">
          <div style="border-bottom: 2px solid #C5F36A; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #0f172a; margin: 0 0 6px 0; font-size: 20px;">New Portfolio Inquiry</h2>
            <p style="color: #64748b; margin: 0; font-size: 14px;">Received via K. V. Pradeepthi's Developer Portfolio</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 90px; font-weight: 600;">From:</td>
              <td style="padding: 8px 0; color: #0f172a;">{name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Reply-To:</td>
              <td style="padding: 8px 0; color: #0284c7;"><a href="mailto:{email}" style="color: #0284c7; text-decoration: none;">{email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Subject:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">{subject}</td>
            </tr>
          </table>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-bottom: 24px;">
            <h4 style="margin: 0 0 8px 0; color: #334155; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</h4>
            <div style="color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">{message}</div>
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin: 0; text-align: center;">
            Direct reply will be sent to: {email}
          </p>
        </div>
        """

        payload = {
            'from': sender_email,
            'to': [recipient],
            'reply_to': email,
            'subject': f'[Portfolio Contact] {subject}',
            'text': f"New message from {name} ({email}):\n\nSubject: {subject}\n\nMessage:\n{message}",
            'html': html_body
        }
        
        headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json',
            'User-Agent': 'PradeepthiPortfolio/2.0'
        }
        
        try:
            req = urllib.request.Request(
                'https://api.resend.com/emails',
                data=json.dumps(payload).encode('utf-8'),
                headers=headers,
                method='POST'
            )
            with urllib.request.urlopen(req, timeout=12) as resp:
                resp_body = resp.read().decode('utf-8')
                try:
                    resp_json = json.loads(resp_body)
                    dispatch_id = resp_json.get('id', 'delivered')
                except Exception:
                    dispatch_id = 'delivered'
                    
                if resp.status in (200, 201):
                    return True, "Delivered", dispatch_id
                return False, f"Resend API returned status {resp.status}", None
        except urllib.error.HTTPError as e:
            try:
                err_body = e.read().decode('utf-8')
                try:
                    err_json = json.loads(err_body)
                    msg = err_json.get('message', err_body)
                except Exception:
                    msg = err_body
                return False, f"HTTP {e.code}: {msg}", None
            except Exception:
                return False, f"HTTP error {e.code}", None
        except Exception as e:
            return False, str(e), None

    def send_via_smtp(self, host, name, email, subject, message):
        port = int(os.environ.get('SMTP_PORT', 587))
        user = os.environ.get('SMTP_USER', '')
        password = os.environ.get('SMTP_PASS', '')
        msg = EmailMessage()
        msg['Subject'] = f'[Portfolio Contact] {subject}'
        msg['From'] = user if user else email
        msg['To'] = CONFIGURED_RECIPIENT
        msg['Reply-To'] = email
        msg.set_content(f"Name: {name}\nEmail: {email}\nSubject: {subject}\n\nMessage:\n{message}")

        try:
            server = smtplib.SMTP(host, port, timeout=10)
            server.starttls()
            if user and password:
                server.login(user, password)
            server.send_message(msg)
            server.quit()
            return True, "Delivered"
        except Exception as e:
            return False, str(e)

    def respond_json(self, status, payload):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(payload, indent=2).encode('utf-8'))

if __name__ == '__main__':
    # Use ThreadingHTTPServer for fast, concurrent request handling
    server_address = ('0.0.0.0', PORT)
    httpd = http.server.ThreadingHTTPServer(server_address, PortfolioHandler)
    print(f"Portfolio HTTP & API Server running on port {PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()
