import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'MongoDB Associate Developer Certificate',
      issuer: 'MongoDB',
      category: 'Database',
      color: 'emerald',
    },
    {
      title: 'Oracle Database Foundations Associate',
      issuer: 'Oracle',
      category: 'Database',
      color: 'red',
    },
    {
      title: 'Generative AI Professional',
      issuer: 'Oracle',
      category: 'Artificial Intelligence',
      color: 'purple',
    },
    {
      title: 'OCI Foundations Associate',
      issuer: 'Oracle',
      category: 'Cloud Computing',
      color: 'orange',
    },
    {
      title: 'Machine Learning with AI',
      issuer: 'Internshala Trainings',
      category: 'Machine Learning',
      color: 'blue',
    },
    {
      title: 'HTML Essentials Certificate',
      issuer: 'Cisco',
      category: 'Web Development',
      color: 'cyan',
    },
    {
      title: 'CSS Essentials Certificate',
      issuer: 'Cisco',
      category: 'Web Development',
      color: 'indigo',
    },
    {
      title: 'JavaScript-1 Essentials Certificate',
      issuer: 'Cisco',
      category: 'Web Development',
      color: 'yellow',
    },
    {
      title: 'JavaScript-2 Essentials Certificate',
      issuer: 'Cisco',
      category: 'Web Development',
      color: 'amber',
    },
  ];

  const getColorClass = (color: string) => {
    return `skill-tag-${color}`;
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            Certifications
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Professional certifications demonstrating expertise across various technologies
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const colorClass = getColorClass(cert.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`certification-card ${colorClass}`}
                style={{ borderColor: 'var(--border-color)' }}
              >
                <div className="certification-header">
                  <CheckCircle2 size={24} />
                  <div>
                    <h3 className="certification-title">{cert.title}</h3>
                    <p className="certification-issuer">{cert.issuer}</p>
                  </div>
                </div>
                <div>
                  <span className={`certification-category ${colorClass}`} style={{ borderColor: 'inherit' }}>
                    {cert.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cert-stats"
        >
          <div className="cert-stat-card" style={{ borderColor: 'var(--blue-100)' }}>
            <div className="cert-stat-icon gradient-blue-cyan">
              <Award size={24} />
            </div>
            <div className="cert-stat-value" style={{
              background: 'linear-gradient(to right, var(--blue-600), var(--indigo-600))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              9+
            </div>
            <div className="cert-stat-label">Professional Certifications</div>
          </div>
          <div className="cert-stat-card" style={{ borderColor: '#f3e8ff' }}>
            <div className="cert-stat-icon gradient-purple-pink">
              <Award size={24} />
            </div>
            <div className="cert-stat-value" style={{
              background: 'linear-gradient(to right, #9333ea, #ec4899)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              5+
            </div>
            <div className="cert-stat-label">Technology Domains</div>
          </div>
          <div className="cert-stat-card" style={{ borderColor: '#d1fae5' }}>
            <div className="cert-stat-icon gradient-emerald-teal">
              <Award size={24} />
            </div>
            <div className="cert-stat-value" style={{
              background: 'linear-gradient(to right, #10b981, #14b8a6)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              4+
            </div>
            <div className="cert-stat-label">Industry Leaders</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
