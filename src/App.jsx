import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { personal } from './data.js';

// Import Components
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ResumeDownload from './components/ResumeDownload';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import Global Styles
import './styles/global.css';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(personal.enableSplashAnimation);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set theme on app load
    document.documentElement.setAttribute('data-theme', personal.preferredTheme || 'dark');
    
    // Handle initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Don't render anything while initially loading
  if (isLoading) {
    return (
      <div className="app-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      {/* Main Application */}
      {!showSplash && (
        <>
          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="main-content">
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Skills Section */}
            <Skills />

            {/* Projects Section */}
            <Projects />

            {/* Experience Section */}
            <Experience />

            {/* Resume Download Section */}
            <ResumeDownload />

            {/* Contact Section */}
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Background Elements */}
          <div className="app-background">
            <div className="bg-gradient bg-gradient--1"></div>
            <div className="bg-gradient bg-gradient--2"></div>
            <div className="bg-gradient bg-gradient--3"></div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;