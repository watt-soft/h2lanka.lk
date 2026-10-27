import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/hero/Hero';
import NationalEconomyVision from '../components/home/NationalEconomyVision';
import StrategicGateways from '../components/home/StrategicGateways';
import LeadershipSection from '../components/home/LeadershipSection';
import HomeContact from '../components/home/HomeContact';

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
      className="w-full max-w-full overflow-x-clip space-y-16 sm:space-y-24"
    >
      {/* 1. Hero Section with 3D Headline, Landscape Visual, and Value Pillars */}
      <Hero />

      {/* 2. National Green Hydrogen Economy Vision Banner (Web sample 2.jpeg) */}
      <NationalEconomyVision />

      {/* 3. Strategic Gateway Portals to Inner Pages */}
      <StrategicGateways />

      {/* 4. Leadership & Strategic Advisory */}
      <LeadershipSection />

      {/* 5. Contact & Corporate Inquiries Section (Kept on Home Page as requested) */}
      <HomeContact />
    </motion.div>
  );
};

export default HomePage;
