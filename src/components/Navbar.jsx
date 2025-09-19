import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { navigation } from '../data.js';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const iconMap = {
    FaHome: FaHome,
    FaUser: FaUser,
    FaCode: FaCode,
    FaProjectDiagram: FaProjectDiagram,
    FaBriefcase: FaBriefcase,
    FaEnvelope: FaEnvelope
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigation.map(nav => nav.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar__container">
          {/* Logo */}
          <motion.div
            className="navbar__logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" onClick={() => handleNavClick('#home')}>
              <span className="logo-text">KG</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="navbar__nav navbar__nav--desktop">
            {navigation.map((item) => {
              const IconComponent = iconMap[item.icon];
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <IconComponent className="navbar__icon" />
                  <span className="navbar__text">{item.name}</span>
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="navbar__toggle"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="navbar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              className="navbar__mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="navbar__mobile-header">
                <span className="navbar__mobile-title">Navigation</span>
                <button
                  className="navbar__close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <FaTimes />
                </button>
              </div>
              
              <nav className="navbar__mobile-nav">
                {navigation.map((item) => {
                  const IconComponent = iconMap[item.icon];
                  const isActive = activeSection === item.href.substring(1);
                  
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="navbar__mobile-icon" />
                      <span className="navbar__mobile-text">{item.name}</span>
                    </motion.a>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;