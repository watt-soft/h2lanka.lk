import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import About from '../components/about/About';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | H2 Lanka (Pvt) Ltd';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="pt-16 sm:pt-20 lg:pt-24"
    >
      <About />
    </motion.div>
  );
};

export default AboutPage;

