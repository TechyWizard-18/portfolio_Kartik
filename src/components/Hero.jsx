import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { personal, socials } from '../data.js';
import ParticleBackground from './ParticleBackground';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ['Backend Developer', 'Spring Boot Expert', 'API Architect', 'Java Developer'];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % titles.length;
      const fullText = titles[current];

      setText(prev => 
        isDeleting 
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personal.resumeUrl;
    link.download = 'Kartik_Gupta_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSocialIcon = (iconName) => {
    const icons = {
      FaGithub: FaGithub,
      FaLinkedin: FaLinkedin,
      FaEnvelope: FaEnvelope
    };
    return icons[iconName] || FaEnvelope;
  };

  return (
    <section id="home" className="hero">
      <ParticleBackground />
      
      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Greeting */}
          <motion.p
            className="hero__greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {personal.name}
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            className="hero__title-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="hero__title-prefix">I'm a </span>
            <span className="hero__title-animated">
              {text}
              <span className="hero__cursor">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {personal.description}
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="hero__social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            {socials.slice(0, 3).map((social, index) => {
              const IconComponent = getSocialIcon(social.icon);
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="hero__social-link"
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  aria-label={social.name}
                >
                  <IconComponent />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <motion.button
              className="hero__btn hero__btn--primary"
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 212, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="hero__btn-icon" />
              Download Resume
            </motion.button>

            <motion.button
              className="hero__btn hero__btn--secondary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="hero__btn-icon" />
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile Image Placeholder */}
        <motion.div
          className="hero__image"
          initial={{ opacity: 0, x: 50, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="hero__image-container">
            <div className="hero__image-placeholder">
              <span className="hero__image-text">KG</span>
            </div>
            <div className="hero__image-glow"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>

      {/* Floating Elements */}
      <div className="hero__floating-elements">
        <motion.div
          className="floating-element floating-element--1"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          &lt;/&gt;
        </motion.div>
        
        <motion.div
          className="floating-element floating-element--2"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          { }
        </motion.div>
        
        <motion.div
          className="floating-element floating-element--3"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          API
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;