import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/hero/Hero';
import NationalEconomyVision from '../components/home/NationalEconomyVision';
import StrategicGateways from '../components/home/StrategicGateways';
import About from '../components/about/About';
import OurFocus from '../components/focus/OurFocus';
import PartnersPage from './PartnersPage';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'H2 Lanka (Pvt) Ltd | Powering Sri Lanka’s Hydrogen Future';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-full overflow-x-clip"
    >
      {/* 1. Hero Section with 3D Headline, Landscape Visual, and Value Pillars */}
      <Hero />

      {/* 2. National Green Hydrogen Economy Vision Banner (Web sample 2.jpeg) */}
      <NationalEconomyVision />

      {/* 3. Strategic Gateway Portals to Inner Pages */}
      {/* <StrategicGateways /> */}

      {/* Main navigation destinations are sections on this page. */}
      <About />
      <OurFocus />
      <PartnersPage />
    </motion.div>
  );
};

export default HomePage;
