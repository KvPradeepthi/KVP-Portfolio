import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Full Stack Development Intern',
      subtitle: 'Backend Development',
      company: 'Technical Hub',
      location: 'Remote',
      period: 'May 2025 – June 2025',
      responsibilities: [
        'Developed backend features and integrated REST APIs',
        'Debugged applications and improved performance in a team environment',
        'Collaborated with cross-functional teams to deliver high-quality solutions',
        'Implemented authentication and server-side logic',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            Work Experience
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="experience-container">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="experience-card"
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <Briefcase size={24} />
                </div>
                <div className="experience-details">
                  <h3 className="experience-title">
                    {exp.title}
                  </h3>
                  <p className="experience-subtitle">{exp.subtitle}</p>
                  <div className="experience-meta">
                    <div className="experience-meta-item">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="experience-meta-item">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="experience-meta-item">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <motion.li
                    key={respIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + respIndex * 0.1 }}
                    className="experience-responsibility"
                  >
                    <div className="responsibility-bullet"></div>
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
