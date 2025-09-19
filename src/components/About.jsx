import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaAward } from 'react-icons/fa';
import { personal, achievements } from '../data.js';
import './About.css';

const About = () => {
  const stats = [
    {
      icon: FaCode,
      number: "2+",
      label: "Years Learning",
      description: "Continuous learning and development"
    },
    {
      icon: FaServer,
      number: "10+",
      label: "Projects Built",
      description: "Backend applications and APIs"
    },
    {
      icon: FaDatabase,
      number: "5+",
      label: "Technologies",
      description: "Backend technologies mastered"
    },
    {
      icon: FaAward,
      number: "Top 10",
      label: "Hackathon Rank",
      description: "KR Mangalam University"
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="about__container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="about__title">About Me</h2>
          <div className="about__title-line"></div>
        </motion.div>

        <div className="about__content">
          {/* Profile Section */}
          <motion.div
            className="about__profile"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="about__image" variants={itemVariants}>
              <div className="about__image-container">
                <img 
                  src={personal.photo} 
                  alt={personal.name}
                  className="about__image-photo"
                  onError={(e) => {
                    // Fallback to initials if photo not found
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="about__image-placeholder" style={{ display: 'none' }}>
                  KG
                </div>
                <div className="about__image-glow"></div>
              </div>
            </motion.div>

            <motion.div className="about__info" variants={itemVariants}>
              <h3 className="about__name">{personal.name}</h3>
              <p className="about__role">{personal.title}</p>
              <p className="about__location">{personal.location}</p>
              
              <div className="about__description">
                <p>
                  {personal.description}
                </p>
                <p>
                  I am passionate about creating robust, scalable backend solutions 
                  and have experience working with modern Java frameworks, particularly 
                  Spring Boot. My journey in software development has been driven by 
                  curiosity and a commitment to continuous learning.
                </p>
                <p>
                  When I'm not coding, I enjoy participating in hackathons, learning 
                  new technologies, and contributing to open-source projects. I believe 
                  in writing clean, maintainable code and following best practices.
                </p>
              </div>

              <motion.div 
                className="about__highlights"
                variants={itemVariants}
              >
                <h4>Key Highlights:</h4>
                <ul>
                  {achievements.map((achievement, index) => (
                    <li key={index}>
                      <strong>{achievement.title}</strong> - {achievement.description}
                    </li>
                  ))}
                  <li>
                    <strong>Certified Developer</strong> - Java with DSA and System Design from PW Skills
                  </li>
                  <li>
                    <strong>Problem Solver</strong> - Strong foundation in Data Structures and Algorithms
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="about__stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="about__stat"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0, 212, 255, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="about__stat-icon">
                    <IconComponent />
                  </div>
                  <div className="about__stat-content">
                    <h3 className="about__stat-number">{stat.number}</h3>
                    <h4 className="about__stat-label">{stat.label}</h4>
                    <p className="about__stat-description">{stat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Personal Interests */}
          <motion.div
            className="about__interests"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Beyond Coding</h4>
            <div className="about__interests-grid">
              <div className="interest-item">
                <span className="interest-emoji">🏆</span>
                <span>Competitive Programming</span>
              </div>
              <div className="interest-item">
                <span className="interest-emoji">🚀</span>
                <span>System Design</span>
              </div>
              <div className="interest-item">
                <span className="interest-emoji">🤝</span>
                <span>Open Source</span>
              </div>
              <div className="interest-item">
                <span className="interest-emoji">📚</span>
                <span>Continuous Learning</span>
              </div>
              <div className="interest-item">
                <span className="interest-emoji">🎯</span>
                <span>Problem Solving</span>
              </div>
              <div className="interest-item">
                <span className="interest-emoji">💡</span>
                <span>Innovation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;