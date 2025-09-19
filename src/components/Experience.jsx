import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaCertificate, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { experience, education, achievements, certifications } from '../data.js';
import './Experience.css';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const TimelineItem = ({ item, type, index }) => {
    const getIcon = () => {
      switch (type) {
        case 'work': return FaBriefcase;
        case 'education': return FaGraduationCap;
        case 'achievement': return FaTrophy;
        case 'certification': return FaCertificate;
        default: return FaBriefcase;
      }
    };

    const IconComponent = getIcon();

    return (
      <motion.div
        className={`timeline-item timeline-item--${type}`}
        variants={itemVariants}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <div className="timeline-item__marker">
          <div className="timeline-item__icon">
            <IconComponent />
          </div>
          <div className="timeline-item__line"></div>
        </div>

        <div className="timeline-item__content">
          <div className="timeline-item__header">
            <h3 className="timeline-item__title">
              {item.title || item.degree || item.name}
            </h3>
            
            {type === 'work' && (
              <div className="timeline-item__meta">
                <span className="timeline-item__company">{item.company}</span>
                <div className="timeline-item__details">
                  <span className="timeline-item__duration">
                    <FaCalendarAlt />
                    {item.duration}
                  </span>
                  {item.location && (
                    <span className="timeline-item__location">
                      <FaMapMarkerAlt />
                      {item.location}
                    </span>
                  )}
                </div>
              </div>
            )}

            {type === 'education' && (
              <div className="timeline-item__meta">
                <span className="timeline-item__institution">{item.institution}</span>
                <div className="timeline-item__details">
                  <span className="timeline-item__duration">
                    <FaCalendarAlt />
                    {item.duration}
                  </span>
                  {item.grade && (
                    <span className="timeline-item__grade">
                      Grade: {item.grade}
                    </span>
                  )}
                </div>
              </div>
            )}

            {type === 'achievement' && (
              <div className="timeline-item__meta">
                <div className="timeline-item__details">
                  <span className="timeline-item__category">{item.category}</span>
                  <span className="timeline-item__date">
                    <FaCalendarAlt />
                    {item.date}
                  </span>
                </div>
              </div>
            )}

            {type === 'certification' && (
              <div className="timeline-item__meta">
                <span className="timeline-item__issuer">{item.issuer}</span>
                <div className="timeline-item__details">
                  <span className="timeline-item__date">
                    <FaCalendarAlt />
                    {item.date}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="timeline-item__description">
            {Array.isArray(item.description) ? (
              <ul className="timeline-item__list">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            ) : (
              <p>{item.description}</p>
            )}
          </div>

          {item.technologies && (
            <div className="timeline-item__technologies">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {item.url && (
            <a 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="timeline-item__link"
            >
              View Certificate
            </a>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="experience__title">Experience & Journey</h2>
          <div className="experience__title-line"></div>
          <p className="experience__subtitle">
            My professional journey, education, and achievements in software development
          </p>
        </motion.div>

        <div className="experience__content">
          {/* Work Experience */}
          {experience.length > 0 && (
            <motion.div
              className="experience__section"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="experience__section-title">
                <FaBriefcase />
                Professional Experience
              </h3>
              <div className="timeline">
                {experience.map((exp, index) => (
                  <TimelineItem 
                    key={index}
                    item={exp}
                    type="work"
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <motion.div
              className="experience__section"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="experience__section-title">
                <FaGraduationCap />
                Education & Learning
              </h3>
              <div className="timeline">
                {education.map((edu, index) => (
                  <TimelineItem 
                    key={index}
                    item={edu}
                    type="education"
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <motion.div
              className="experience__section"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="experience__section-title">
                <FaTrophy />
                Key Achievements
              </h3>
              <div className="timeline">
                {achievements.map((achievement, index) => (
                  <TimelineItem 
                    key={index}
                    item={achievement}
                    type="achievement"
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <motion.div
              className="experience__section"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="experience__section-title">
                <FaCertificate />
                Certifications
              </h3>
              <div className="timeline">
                {certifications.map((cert, index) => (
                  <TimelineItem 
                    key={index}
                    item={cert}
                    type="certification"
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Career Goals */}
        <motion.div
          className="experience__goals"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Career Goals & Vision</h3>
          <div className="goals-grid">
            <div className="goal-item">
              <div className="goal-icon">🎯</div>
              <div className="goal-content">
                <h4>Short Term</h4>
                <p>Secure a backend developer role and contribute to scalable applications using Spring Boot and microservices architecture.</p>
              </div>
            </div>
            <div className="goal-item">
              <div className="goal-icon">🚀</div>
              <div className="goal-content">
                <h4>Medium Term</h4>
                <p>Become a full-stack developer with expertise in modern frameworks and cloud technologies, leading development projects.</p>
              </div>
            </div>
            <div className="goal-item">
              <div className="goal-icon">💡</div>
              <div className="goal-content">
                <h4>Long Term</h4>
                <p>Architect enterprise-level systems and mentor other developers while staying current with emerging technologies.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;