import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764263996452-d8498c9b0ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kJTIwYmx1ZXxlbnwxfHx8fDE3NzY5NDk3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="hero-bg-image"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="section-container hero-content">
        <div style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              <span className="hero-gradient-text">
                K.V. Pradeepthi
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="hero-subtitle">
              Full Stack Developer & ML Enthusiast
            </p>
            <p className="hero-meta">
              B.Tech IT Student • CGPA 9.56/10
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-social-links"
          >
            <a
              href="https://github.com/KvPradeepthi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link social-link-github"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pradeepthi-kamichetty-bbb064295/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link social-link-linkedin"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://portfolio-kvp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link social-link-portfolio"
            >
              <ExternalLink size={20} />
              <span>Old Portfolio</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-cta-buttons"
          >
            <button
              onClick={scrollToContact}
              className="btn-primary"
            >
              Get In Touch
            </button>
            <a
              href="/src/imports/KVPresume..pdf"
              download
              className="btn-secondary"
            >
              <FileText size={20} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hero-contact-info"
          >
            <a href="mailto:deepthikamichetty336@gmail.com" className="contact-item">
              <Mail size={20} />
              <span>deepthikamichetty336@gmail.com</span>
            </a>
            <div className="contact-item">
              <span>📱 +91 93902 40204</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
        className="scroll-indicator"
      >
        <div className="scroll-indicator-inner">
          <div className="scroll-indicator-dot"></div>
        </div>
      </motion.div>
    </section>
  );
}
