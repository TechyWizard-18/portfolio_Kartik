import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaStar } from 'react-icons/fa';
import { projects } from '../data.js';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['all', 'featured', 'backend', 'fullstack'];
  
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    if (filter === 'backend') return project.technologies.some(tech => 
      ['Spring Boot', 'Java', 'REST API', 'MySQL', 'PostgreSQL'].includes(tech)
    );
    if (filter === 'fullstack') return project.technologies.some(tech => 
      ['JavaScript', 'React', 'Node.js'].includes(tech)
    );
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getTechIcon = (tech) => {
    const techIcons = {
      'Spring Boot': FaServer,
      'Java': FaCode,
      'REST API': FaServer,
      'MySQL': FaDatabase,
      'PostgreSQL': FaDatabase,
      'MongoDB': FaDatabase
    };
    return techIcons[tech] || FaCode;
  };

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="projects__title">Featured Projects</h2>
          <div className="projects__title-line"></div>
          <p className="projects__subtitle">
            A showcase of my technical skills and problem-solving abilities
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`projects__filter ${filter === category ? 'projects__filter--active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              {category === 'featured' && <FaStar className="filter-icon" />}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={filter} // Re-trigger animation when filter changes
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="projects__card"
                variants={projectVariants}
                layout
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
                }}
                onClick={() => setSelectedProject(project)}
              >
                {project.featured && (
                  <div className="projects__card-badge">
                    <FaStar />
                    Featured
                  </div>
                )}

                <div className="projects__card-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="projects__card-placeholder" style={{ display: 'none' }}>
                    <FaCode />
                  </div>
                  <div className="projects__card-overlay">
                    <button className="projects__card-view">
                      View Details
                    </button>
                  </div>
                </div>

                <div className="projects__card-content">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-description">
                    {project.description.length > 120 
                      ? `${project.description.substring(0, 120)}...` 
                      : project.description
                    }
                  </p>

                  <div className="projects__card-tech">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        <span key={techIndex} className="tech-tag">
                          <IconComponent className="tech-icon" />
                          {tech}
                        </span>
                      );
                    })}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag tech-tag--more">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="projects__card-actions">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                        Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-link projects__card-link--primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="projects__empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCode className="projects__empty-icon" />
            <h3>No projects found</h3>
            <p>Try selecting a different filter category.</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="projects__cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Interested in my work?</h3>
          <p>
            I'm always working on new projects and exploring innovative solutions. 
            Check out my GitHub for more repositories and contributions.
          </p>
          <a 
            href="https://github.com/kartik-gupta" 
            target="_blank" 
            rel="noopener noreferrer"
            className="projects__cta-button"
          >
            <FaGithub />
            View All Projects
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="projects__modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="projects__modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="projects__modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <div className="projects__modal-image">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="projects__modal-placeholder" style={{ display: 'none' }}>
                  <FaCode />
                </div>
              </div>

              <div className="projects__modal-content">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>

                <div className="projects__modal-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projects__modal-actions">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__modal-link"
                    >
                      <FaGithub />
                      View Code
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__modal-link projects__modal-link--primary"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;