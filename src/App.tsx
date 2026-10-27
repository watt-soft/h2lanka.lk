import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/common/Preloader';
import { useHashRouter } from './hooks/useHashRouter';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const OurFocusPage = lazy(() => import('./pages/OurFocusPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));

export const App: React.FC = () => {
  const [, setIsLoading] = useState(true);
  const { currentRoute, navigate } = useHashRouter();

  const renderActivePage = () => {
    switch (currentRoute) {
      case 'about':
        return <AboutPage key="about" />;
      case 'our-focus':
        return <OurFocusPage key="our-focus" />;
      case 'partners':
        return <PartnersPage key="partners" />;
      case 'home':
      default:
        return <HomePage key="home" />;
    }
  };

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
        className="relative min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#094792] selection:text-white flex flex-col justify-between"
      >
        {/* Navigation Bar */}
        <Navbar currentRoute={currentRoute} onNavigate={navigate} />

        {/* Dynamic Multi-Page Content with Suspense and AnimatePresence */}
        <main className="relative flex-grow">
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin" />
              </div>
            }
          >
            <AnimatePresence mode="wait">
              {renderActivePage()}
            </AnimatePresence>
          </Suspense>
        </main>

        {/* Corporate Footer (Persistent across all pages) */}
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
