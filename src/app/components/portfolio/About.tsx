import { motion } from 'motion/react';
import { Code2, Database, Brain, Server } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Proficient in React, Node.js, Express.js, and modern web technologies',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Experience with ML models, data analysis, and predictive analytics',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Skilled in MySQL, MongoDB, and database design',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'REST APIs, authentication, and server-side logic',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            About Me
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Third-year B.Tech IT student with a stellar CGPA of 9.56/10, passionate about building
            innovative solutions through code. I have strong foundations in Machine Learning, Python,
            Data Structures, Backend Development, and Full-Stack Development. Academic topper from
            1st to 6th semester, I combine technical excellence with leadership skills gained as
            Class Representative.
          </p>
        </motion.div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="highlight-card"
            >
              <div className="highlight-icon">
                <item.icon size={24} />
              </div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
