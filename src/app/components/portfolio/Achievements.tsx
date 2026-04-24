import { motion } from 'motion/react';
import { Trophy, Star, Users } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Academic topper from 1st semester to 6th semester in B.Tech IT with CGPA 9.56/10',
      icon: Trophy,
      gradient: 'gradient-orange-red',
      stats: [
        { label: 'CGPA', value: '9.56/10' },
        { label: 'Semesters', value: '6' },
        { label: 'Rank', value: '1st' },
      ],
    },
    {
      title: 'Leadership Excellence',
      description: 'Served as Class Representative during first year, demonstrating leadership and coordination skills',
      icon: Users,
      gradient: 'gradient-blue-cyan',
      stats: [
        { label: 'Position', value: 'Class Rep' },
        { label: 'Year', value: '1st Year' },
        { label: 'Team Size', value: '60+' },
      ],
    },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            Achievements
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Recognition and accomplishments that showcase dedication and excellence
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="achievement-card"
            >
              <div className={`achievement-color-bar ${achievement.gradient}`}></div>
              <div className="achievement-content">
                <div className={`achievement-icon-wrapper ${achievement.gradient}`}>
                  <achievement.icon size={32} />
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-stats">
                  {achievement.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="achievement-stat">
                      <div className="achievement-stat-value" style={{
                        background: achievement.gradient === 'gradient-orange-red'
                          ? 'linear-gradient(to right, #f97316, #ef4444)'
                          : 'linear-gradient(to right, #3b82f6, #06b6d4)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        {stat.value}
                      </div>
                      <div className="achievement-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="achievement-summary"
        >
          <div className="summary-stats">
            <div className="summary-stat">
              <Star size={32} />
              <div className="summary-stat-value">9.56</div>
              <div className="summary-stat-label">CGPA</div>
            </div>
            <div className="summary-stat">
              <Trophy size={32} />
              <div className="summary-stat-value">1st</div>
              <div className="summary-stat-label">Rank</div>
            </div>
            <div className="summary-stat">
              <Star size={32} />
              <div className="summary-stat-value">6</div>
              <div className="summary-stat-label">Semesters</div>
            </div>
            <div className="summary-stat">
              <Users size={32} />
              <div className="summary-stat-value">100%</div>
              <div className="summary-stat-label">Consistency</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
