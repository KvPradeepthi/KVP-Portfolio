import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, ExternalLink, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:deepthikamichetty336@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'deepthikamichetty336@gmail.com',
      link: 'mailto:deepthikamichetty336@gmail.com',
      color: 'blue',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 93902 40204',
      link: 'tel:+919390240204',
      color: 'emerald',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'pradeepthi-kamichetty',
      link: 'https://www.linkedin.com/in/pradeepthi-kamichetty-bbb064295/',
      color: 'blue',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'KvPradeepthi',
      link: 'https://github.com/KvPradeepthi',
      color: 'blue',
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      value: 'portfolio-kvp.netlify.app',
      link: 'https://portfolio-kvp.netlify.app/',
      color: 'purple',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: '#',
      color: 'rose',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            Get In Touch
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            I'm always open to discussing new projects, opportunities, or partnerships.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form-card"
          >
            <h3 className="contact-form-title">Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="form-submit"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h3 className="contact-info-title">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className={`contact-info-item skill-tag-${info.color}`}
                style={{ borderColor: 'inherit' }}
              >
                <div className={`contact-info-icon skill-tag-${info.color}`} style={{ borderColor: 'inherit' }}>
                  <info.icon size={24} />
                </div>
                <div className="contact-info-text">
                  <div className="contact-info-label">{info.label}</div>
                  <div>{info.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="footer"
      >
        <div className="footer-divider"></div>
        <p className="footer-text">
          © 2026 K.V. Pradeepthi. Built with React & CSS.
        </p>
        <p className="footer-text">
          Designed with passion and dedication to excellence.
        </p>
      </motion.div>
    </section>
  );
}
