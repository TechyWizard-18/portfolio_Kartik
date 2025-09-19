import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt, FaEye } from 'react-icons/fa';
import { personal } from '../data.js';
import './ResumeDownload.css';

const ResumeDownload = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personal.resumeUrl;
    link.download = 'Kartik_Gupta_Resume.pdf';
    link.click();
  };

  const handleViewResume = () => {
    window.open(personal.resumeUrl, '_blank');
  };

  return (
    <section className="resume-download">
      <div className="resume-download__container">
        <motion.div
          className="resume-download__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="resume-download__icon">
            <FaFileAlt />
          </div>
          
          <h3 className="resume-download__title">Download My Resume</h3>
          <p className="resume-download__description">
            Get a comprehensive overview of my skills, experience, and achievements in PDF format.
          </p>

          <div className="resume-download__actions">
            <motion.button
              className="resume-download__btn resume-download__btn--primary"
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume
            </motion.button>

            <motion.button
              className="resume-download__btn resume-download__btn--secondary"
              onClick={handleViewResume}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEye />
              View Online
            </motion.button>
          </div>

          <div className="resume-download__features">
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Detailed Work Experience</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Technical Skills Overview</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Project Highlights</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Education & Certifications</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeDownload;