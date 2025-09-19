import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, 
  FaJs, 
  FaPython, 
  FaDatabase, 
  FaServer, 
  FaCode,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaLinux
} from 'react-icons/fa';
import { 
  SiSpring, 
  SiSpringboot, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis,
  SiIntellijidea,
  SiPostman
} from 'react-icons/si';
import { skills } from '../data.js';
import './Skills.css';

const Skills = () => {
  // Icon mapping for technologies
  const iconMap = {
    'Java': FaJava,
    'JavaScript': FaJs,
    'Python': FaPython,
    'SQL': FaDatabase,
    'Spring Boot': SiSpringboot,
    'Spring Security': SiSpring,
    'REST APIs': FaServer,
    'Microservices': FaCode,
    'MySQL': SiMysql,
    'PostgreSQL': SiPostgresql,
    'MongoDB': SiMongodb,
    'Redis': SiRedis,
    'Git': FaGitAlt,
    'Docker': FaDocker,
    'Maven': FaCode,
    'Postman': SiPostman,
    'IntelliJ IDEA': SiIntellijidea,
    'AWS': FaAws,
    'Linux': FaLinux,
    'CI/CD': FaCode,
    'Data Structures & Algorithms': FaCode,
    'System Design': FaServer,
    'Problem Solving': FaCode
  };

  const getIcon = (skill) => {
    return iconMap[skill] || FaCode;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="skills__title">Skills & Technologies</h2>
          <div className="skills__title-line"></div>
          <p className="skills__subtitle">
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          className="skills__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skills__category"
              variants={categoryVariants}
            >
              <h3 className="skills__category-title">{category.category}</h3>
              
              <ul className="skills__list">
                {category.items.map((skill, skillIndex) => {
                  const IconComponent = getIcon(skill);
                  
                  return (
                    <motion.li
                      key={skillIndex}
                      className="skills__item"
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 10px 25px rgba(0, 212, 255, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="skills__item-icon">
                        <IconComponent />
                      </div>
                      <span className="skills__item-name">{skill}</span>
                      
                      {/* Skill level indicator */}
                      <div className="skills__item-level">
                        <div className="skills__level-bar">
                          <motion.div
                            className="skills__level-fill"
                            initial={{ width: 0 }}
                            whileInView={{ 
                              width: getSkillLevel(skill)
                            }}
                            transition={{ 
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          className="skills__additional"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Currently Learning</h3>
          <div className="skills__learning">
            <div className="learning-item">
              <span className="learning-emoji">🚀</span>
              <span>Advanced System Design</span>
            </div>
            <div className="learning-item">
              <span className="learning-emoji">☁️</span>
              <span>Cloud Architecture</span>
            </div>
            <div className="learning-item">
              <span className="learning-emoji">🔧</span>
              <span>DevOps Practices</span>
            </div>
            <div className="learning-item">
              <span className="learning-emoji">📊</span>
              <span>Performance Optimization</span>
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="skills__summary"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="skills__summary-content">
            <h4>My Approach</h4>
            <p>
              I believe in continuous learning and staying updated with the latest 
              technologies. My focus is on writing clean, maintainable code and 
              building scalable solutions that solve real-world problems.
            </p>
            
            <div className="skills__principles">
              <div className="principle-item">
                <strong>Clean Code</strong>
                <span>Write readable and maintainable code</span>
              </div>
              <div className="principle-item">
                <strong>Best Practices</strong>
                <span>Follow industry standards and patterns</span>
              </div>
              <div className="principle-item">
                <strong>Performance</strong>
                <span>Optimize for speed and efficiency</span>
              </div>
              <div className="principle-item">
                <strong>Security</strong>
                <span>Implement robust security measures</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Function to determine skill level (for demonstration)
const getSkillLevel = (skill) => {
  const skillLevels = {
    'Java': '90%',
    'Spring Boot': '85%',
    'REST APIs': '90%',
    'MySQL': '80%',
    'Git': '85%',
    'Spring Security': '75%',
    'Microservices': '70%',
    'JavaScript': '75%',
    'Python': '65%',
    'PostgreSQL': '70%',
    'MongoDB': '65%',
    'Docker': '60%',
    'AWS': '55%',
    'Data Structures & Algorithms': '85%',
    'System Design': '70%',
    'Problem Solving': '90%'
  };
  
  return skillLevels[skill] || '60%';
};

export default Skills;