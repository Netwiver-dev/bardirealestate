import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import '../../assets/css/components/HeroSection.css';

const backgrounds = [
  '../assets/images/pages/home/estate4.jpeg',
  '../assets/images/pages/home/estate5.jpeg',
  
];

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      {backgrounds.map((bg, index) => (
        <motion.div
          key={index}
          className="hero-background"
          style={{ backgroundImage: `url(${bg})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentBg ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover Your Dream Home
        </motion.h1>
        <motion.p 
          className="hero-description"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Unlock the door to your perfect home with our exclusive selection of premium properties.
        </motion.p>
        <motion.a
          href="https://wa.me/+2347050543276"
          target="_blank"
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Get In Touch
          <ChevronRight className="cta-icon" />
        </motion.a>
      </div>
      <div className="feature-icons">
        <motion.div 
          className="icon-container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: '🏠', text: "Homes" },
            { icon: '🔑', text: "Properties" },
            { icon: '❤️', text: "Real Estates" }
          ].map(({ icon, text }, index) => (
            <motion.div 
              key={index}
              className="icon-item"
              whileHover={{ scale: 1.1 }}
            >
              <span className="icon">{icon}</span>
              <span className="icon-text">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;