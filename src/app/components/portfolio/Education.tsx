import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'B.Tech, Information Technology',
      institution: 'Aditya University',
      period: '2023 – 2027',
      cgpa: '9.56/10',
      highlight: 'Academic topper from 1st to 6th semester',
      gradient: 'gradient-blue-cyan',
    },
    {
      degree: 'Intermediate',
      institution: 'Board of Intermediate Education',
      period: '2021 – 2023',
      cgpa: '98.6%',
      highlight: 'Distinction with honors',
      gradient: 'gradient-purple-pink',
    },
    {
      degree: 'SSC (Secondary School Certificate)',
      institution: 'Board of Secondary Education',
      period: '2020 – 2021',
      cgpa: '98.5%',
      highlight: 'Top performer',
      gradient: 'gradient-purple-pink',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            Education
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="education-container">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="education-card"
            >
              <div className="education-inner">
                <div className={`education-icon ${edu.gradient}`}>
                  <GraduationCap size={24} />
                </div>
                <div className="education-content">
                  <div className="education-top">
                    <div>
                      <h3 className="education-degree">
                        {edu.degree}
                      </h3>
                      <p className="education-institution">{edu.institution}</p>
                    </div>
                    <div className="education-stats">
                      <div className="education-period">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="education-cgpa">
                        <Award size={20} />
                        <span className={`education-cgpa-value ${edu.gradient}`} style={{
                          background: 'linear-gradient(to right, var(--blue-600), #06b6d4)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}>
                          {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="education-highlight">
                    <div className="highlight-dot"></div>
                    <span>{edu.highlight}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
