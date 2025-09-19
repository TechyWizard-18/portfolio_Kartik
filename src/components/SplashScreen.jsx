import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { themeConfig } from '../data.js';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      ? themeConfig.animations.reducedMotionDuration 
      : themeConfig.animations.splashDuration;

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / (duration / 100));
      });
    }, 100);

    // Auto complete after duration
    const timer = setTimeout(() => {
      handleComplete();
    }, duration);

    // Handle ESC key to skip
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        handleComplete();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500); // Wait for exit animation
  };

  const handleSkip = () => {
    handleComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={handleSkip}
        >
          <div className="splash-screen__background">
            <div className="splash-screen__particles"></div>
            <div className="splash-screen__glow"></div>
          </div>

          <div className="splash-screen__content">
            {/* Animated SVG Logo */}
            <motion.div 
              className="splash-screen__logo"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                className="logo-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="50%" stopColor="#8338ec" />
                    <stop offset="100%" stopColor="#ff006e" />
                  </linearGradient>
                </defs>
                
                {/* Outer Ring */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="55"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="3"
                  strokeDasharray="345"
                  strokeDashoffset="345"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                
                {/* Inner Design - Letter K */}
                <motion.path
                  d="M35 25 L35 95 M35 60 L75 25 M35 60 L75 95"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />
                
                {/* Center Dot */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="3"
                  fill="url(#logoGradient)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                />
              </svg>
            </motion.div>

            {/* Brand Text */}
            <motion.div
              className="splash-screen__text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h1 className="splash-screen__title">Kartik Gupta</h1>
              <p className="splash-screen__subtitle">Backend Developer</p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="splash-screen__progress"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <div className="progress-bar">
                <motion.div
                  className="progress-bar__fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="progress-text">{Math.round(progress)}%</span>
            </motion.div>

            {/* Skip Button */}
            <motion.button
              className="splash-screen__skip"
              onClick={handleSkip}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Skip animation"
            >
              Skip Animation (ESC)
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;