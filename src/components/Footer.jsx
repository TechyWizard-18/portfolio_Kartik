import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone,
  FaHeart,
  FaArrowUp,
  FaCode
} from 'react-icons/fa';
import { personal, socials, navigation } from '../data.js';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSocialIcon = (iconName) => {
    const icons = {
      FaGithub: FaGithub,
      FaLinkedin: FaLinkedin,
      FaEnvelope: FaEnvelope,
      FaPhone: FaPhone
    };
    return icons[iconName] || FaEnvelope;
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main Footer Content */}
        <div className="footer__content">
          {/* About Section */}
          <motion.div
            className="footer__section footer__about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer__logo">
              <span className="footer__logo-text">KG</span>
            </div>
            <h3>{personal.name}</h3>
            <p>{personal.title}</p>
            <p className="footer__description">
              Passionate about creating scalable backend solutions and learning new technologies. 
              Let's build something amazing together!
            </p>
            
            <div className="footer__social">
              {socials.map((social, index) => {
                const IconComponent = getSocialIcon(social.icon);
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : '_self'}
                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="footer__social-link"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer__section footer__links"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul className="footer__nav">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="footer__nav-link"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services/Skills */}
          <motion.div
            className="footer__section footer__services"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Services</h4>
            <ul className="footer__services-list">
              <li>Backend Development</li>
              <li>REST API Design</li>
              <li>Database Architecture</li>
              <li>Microservices</li>
              <li>System Design</li>
              <li>Code Review</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="footer__section footer__contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Get in Touch</h4>
            <div className="footer__contact-info">
              <a href={`mailto:${personal.email}`} className="footer__contact-item">
                <FaEnvelope />
                <span>{personal.email}</span>
              </a>
              <a href={`tel:${personal.phone}`} className="footer__contact-item">
                <FaPhone />
                <span>{personal.phone}</span>
              </a>
              <div className="footer__contact-item">
                <span>{personal.location}</span>
              </div>
            </div>
            
            <div className="footer__availability">
              <div className="availability-status">
                <span className="status-indicator"></span>
                <span>Available for opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer__bottom-content">
            <div className="footer__copyright">
              <p>
                © {currentYear} {personal.name}. Made with{' '}
                <FaHeart className="footer__heart" /> and <FaCode className="footer__code" />.
              </p>
              <p className="footer__rights">All rights reserved.</p>
            </div>

            <div className="footer__tech">
              <p>Built with React, Vite & Framer Motion</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          className="footer__scroll-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>

        {/* Background Elements */}
        <div className="footer__bg-elements">
          <motion.div
            className="footer__bg-circle footer__bg-circle--1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="footer__bg-circle footer__bg-circle--2"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;