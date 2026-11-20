# K. V. Pradeepthi — Personal Developer Portfolio

> **Full Stack Developer | Backend Systems Engineer | AI Application Developer**  
> B.Tech Information Technology, Aditya University (2023–2027) · CGPA: 9.51/10  
> GitHub: [@KvPradeepthi](https://github.com/KvPradeepthi) · LinkedIn: [pradeepthi-kamichetty-bbb064295](https://www.linkedin.com/in/pradeepthi-kamichetty-bbb064295/)

An Awwwards-inspired, high-performance personal developer portfolio engineered with dark futuristic aesthetics, editorial typography, deep architecture dossiers, dynamic GitHub repository discovery, and an authenticated Resend email delivery backend.

---

## 🚀 Live Demo & Architecture

- **Frontend:** Vanilla HTML5, CSS3 Custom Properties (BEM-inspired), Vanilla ES6+ JavaScript.
- **Backend:** Lightweight, zero-dependency Python HTTP & REST API service ([`server.py`](server.py)) with in-memory IP rate limiting and Resend API v1 email dispatch.
- **Color System:** Dark Canvas (`#101116`), Surface (`#191B22`), Electric Lime (`#C5F36A`), Electric Violet (`#A78BFA`), Typography (`#F4F4F0`).
- **Typography:** Space Grotesk, Inter, JetBrains Mono.

---

## 🛠️ Features

1. **Hero Introduction:** Asymmetric two-column layout highlighting core engineering focus, verified academic achievements (9.51 CGPA, 900+ DSA problems solved), and original portrait.
2. **Featured Projects:** Deep architecture modals with technical metrics, database schema design, and production challenges for:
   - *LateComers Attendance & Visitor System* (MERN, MongoDB compound indexing, scheduled cron jobs)
   - *Syllabus-AI* (Gemini 2.5 Flash API with schema-locked JSON extraction)
   - *Multi-Tenant SaaS Platform* (Row-level isolation, JWT, PostgreSQL)
   - *PEC.UP Community Platform* (Event hubs, interactive technical resources)
   - *ArdorTrip DevOps Automation* (CI/CD pipelines, container orchestration)
   - *Real-Time Sports Commentary Service* (WebSockets, microservice telemetry)
3. **Interactive Skills Matrix:** Categorized technical competencies spanning Languages, Frameworks, Databases & Cloud, and Developer Tools.
4. **Dynamic GitHub Repository Explorer:** Real-time client-side repository search, programming language filtering (TypeScript, Python, JavaScript, Java), sorting, and responsive pagination.
5. **Production Contact System:**
   - Multi-layer validation (field regex, honeypot anti-spam, duplicate submission prevention).
   - Server-side email delivery via **Resend REST API**.
   - Visitor reply-to header configured for direct Gmail response.

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KvPradeepthi/KVP-Portfolio.git
   cd KVP-Portfolio
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Add your Resend API credentials to `.env`:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   RECIPIENT_EMAIL=deepthikamichetty336@gmail.com
   SENDER_EMAIL=Portfolio Contact <onboarding@resend.dev>
   PORT=3000
   ```

3. **Start the local server:**
   ```bash
   python server.py
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Render

This repository includes [`render.yaml`](render.yaml) for 1-click Render Blueprint deployment:

1. Sign up / log in to [render.com](https://render.com).
2. Click **New +** → **Blueprint** (or **Web Service**).
3. Connect your GitHub repository `KVP-Portfolio`.
4. Render will automatically detect `render.yaml`, set runtime to Python, and configure `python server.py`.
5. Under **Environment Variables**, provide your `RESEND_API_KEY`.
6. Click **Apply** / **Deploy**.

---

## 📄 License

MIT © 2026 K. V. Pradeepthi. All rights reserved.
