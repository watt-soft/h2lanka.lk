import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Preloader from './components/common/Preloader';

export const App: React.FC = () => {
  const [, setIsLoading] = useState(true);

  return (
    <>
      {/* Branded Green Hydrogen Loading Page (Preloader) */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Main Page Content with Subtle Cinematic Entrance */}
      <motion.div
        initial={{ opacity: 0.85, scale: 0.985 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        }}
        className="relative min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#094792] selection:text-white"
      >
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Hero Section */}
        <main className="relative pb-8 md:pb-16 lg:pb-20">
          <Hero />
        </main>
      </motion.div>
    </>
  );
};

export default App;
