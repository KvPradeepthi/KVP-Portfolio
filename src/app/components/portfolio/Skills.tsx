import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'C', 'C++', 'JavaScript'],
      color: 'blue',
    },
    {
      category: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'indigo',
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Server-side Logic'],
      color: 'purple',
    },
    {
      category: 'Database',
      skills: ['MySQL', 'MongoDB'],
      color: 'pink',
    },
    {
      category: 'Machine Learning',
      skills: ['Regression', 'Classification', 'KNN', 'Decision Trees', 'Model Evaluation'],
      color: 'rose',
    },
    {
      category: 'ML Libraries & Tools',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'],
      color: 'orange',
    },
    {
      category: 'Data Visualization',
      skills: ['Power BI', 'Tableau (Basics)', 'Excel'],
      color: 'amber',
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'REST APIs'],
      color: 'emerald',
    },
    {
      category: 'Core Concepts',
      skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Statistics Basics'],
      color: 'teal',
    },
    {
      category: 'Soft Skills',
      skills: ['Problem-solving', 'Team collaboration', 'Effective communication', 'Time management'],
      color: 'cyan',
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            Skills & Expertise
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="skill-category"
            >
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`skill-tag skill-tag-${category.color}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
