import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';
import { personal, socials, contactConfig } from '../data.js';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // TODO: Replace with actual form submission logic
      // This is a placeholder implementation
      
      // For demonstration, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Uncomment and configure based on your chosen email service:
      
      // Option 1: Formspree
      // const response = await fetch(contactConfig.formEndpoint, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Option 2: EmailJS
      // const response = await emailjs.send(
      //   contactConfig.emailJS.serviceId,
      //   contactConfig.emailJS.templateId,
      //   formData,
      //   contactConfig.emailJS.publicKey
      // );

      // Simulate success for demo
      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.'
      });
    }
    
    // Clear status after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 5000);
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
    <section id="contact" className="contact">
      <div className="contact__container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="contact__title">Get In Touch</h2>
          <div className="contact__title-line"></div>
          <p className="contact__subtitle">
            Let's discuss opportunities, projects, or just have a friendly chat about technology
          </p>
        </motion.div>

        <div className="contact__content">
          {/* Contact Information */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              or potential collaborations. Feel free to reach out!
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <FaEnvelope />
                </div>
                <div className="contact__detail-content">
                  <h4>Email</h4>
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <FaPhone />
                </div>
                <div className="contact__detail-content">
                  <h4>Phone</h4>
                  <a href={`tel:${personal.phone}`}>{personal.phone}</a>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact__detail-content">
                  <h4>Location</h4>
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact__social">
              <h4>Follow Me</h4>
              <div className="contact__social-links">
                {socials.map((social, index) => {
                  const IconComponent = getSocialIcon(social.icon);
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : '_self'}
                      rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="contact__social-link"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <IconComponent />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="contact__actions">
              <a 
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__action-btn"
                download="Kartik_Gupta_Resume.pdf"
              >
                Download Resume
              </a>
              <a 
                href={`mailto:${personal.email}`}
                className="contact__action-btn contact__action-btn--primary"
              >
                Send Email
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact__form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact__form-submit"
                disabled={formStatus.type === 'loading'}
              >
                {formStatus.type === 'loading' ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {/* Form Status */}
              {formStatus.message && (
                <motion.div
                  className={`contact__form-status contact__form-status--${formStatus.type}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formStatus.type === 'success' && <FaCheckCircle />}
                  {formStatus.type === 'error' && <FaExclamationTriangle />}
                  <span>{formStatus.message}</span>
                </motion.div>
              )}
            </form>

            {/* Form Note */}
            <div className="contact__form-note">
              <p>
                <strong>Note:</strong> This contact form is currently set up for demonstration. 
                To make it functional, please configure your preferred email service 
                (Formspree, EmailJS, etc.) in the contactConfig section of data.js.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;