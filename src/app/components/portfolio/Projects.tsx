import { motion } from 'motion/react';
import { Github, ExternalLink, Brain, Shield, Database, Layout } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Customer Churn Prediction',
      description: 'Built a machine learning model to predict customer churn using customer data. Implemented using Python, Pandas, and Scikit-learn with comprehensive data analysis and model evaluation.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
      icon: Brain,
      github: 'https://github.com/KvPradeepthi/customer-churn-prediction',
      gradient: 'gradient-blue-cyan',
    },
    {
      title: 'Online Payment Spam Detection',
      description: 'Developed a machine learning model to detect fraudulent or spam online payment transactions. Features include data preprocessing, feature engineering, and model optimization.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Classification'],
      icon: Shield,
      github: 'https://github.com/KvPradeepthi/Online_Payment_SpamDetection',
      gradient: 'gradient-purple-pink',
    },
    {
      title: 'Smart Resource Platform',
      description: 'Developed comprehensive backend functionalities, REST APIs, and database operations for resource management. Live production application with full CRUD operations.',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'REST APIs'],
      icon: Database,
      github: 'https://github.com/KvPradeepthi/SmartResourcePlatform',
      live: 'https://github.com/KvPradeepthi/SmartResourcePlatform',
      gradient: 'gradient-emerald-teal',
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and deployed a responsive personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies and best practices.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      icon: Layout,
      github: 'https://github.com/KvPradeepthi',
      live: 'https://portfolio-kvp.netlify.app/',
      gradient: 'gradient-orange-red',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            Featured Projects
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A collection of my recent work in Machine Learning, Full Stack Development, and Web Applications
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="project-card"
            >
              <div className={`project-color-bar ${project.gradient}`}></div>
              <div className="project-content">
                <div className={`project-icon-wrapper ${project.gradient}`}>
                  <project.icon size={24} />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="project-tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-code"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-live"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
