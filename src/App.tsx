import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/common/Preloader';
import { useHashRouter } from './hooks/useHashRouter';
import HomePage from './pages/HomePage';

export const App: React.FC = () => {
  const [, setIsLoading] = useState(true);
  const { currentRoute, navigate } = useHashRouter();

  return (
    <>
      {/* Branded Green Hydrogen Loading Page (Preloader) */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Main Page Content */}
      <motion.div
        initial={{ opacity: 0.85, scale: 0.985 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        }}
        className="relative min-h-screen w-full max-w-full overflow-x-clip bg-white text-slate-900 font-sans antialiased selection:bg-[#094792] selection:text-white flex flex-col justify-between"
      >
        {/* Navigation Bar */}
        <Navbar currentRoute={currentRoute} onNavigate={navigate} />

        {/* Single-page content with section-based navigation */}
        <main className="relative flex-grow w-full max-w-full overflow-x-clip">
          <HomePage />
        </main>

        {/* Corporate Footer (Persistent across all pages) */}
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
