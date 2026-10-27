import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/common/Preloader';
import RouteLoader from './components/common/RouteLoader';
import { useHashRouter, type RouteKey } from './hooks/useHashRouter';
import { prefetchAllRoutesIdle } from './utils/prefetchRoutes';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const OurFocusPage = lazy(() => import('./pages/OurFocusPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));

export const App: React.FC = () => {
  const [, setIsLoading] = useState(true);
  const { currentRoute, navigate } = useHashRouter();
  const [transitionRoute, setTransitionRoute] = useState<RouteKey | null>(null);
  const prevRouteRef = useRef<RouteKey>(currentRoute);
  const isInitialMountRef = useRef<boolean>(true);

  // Trigger RouteLoader when user navigates between tabs inside the app
  useEffect(() => {
    // Skip on initial webpage boot (Preloader handles initial boot)
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
      prevRouteRef.current = currentRoute;
      return;
    }

    if (prevRouteRef.current !== currentRoute) {
      prevRouteRef.current = currentRoute;
      setTransitionRoute(currentRoute);

      const timer = setTimeout(() => {
        setTransitionRoute(null);
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [currentRoute]);

  // Opportunistically prefetch lazy chunks during idle browser cycles
  useEffect(() => {
    prefetchAllRoutesIdle();
  }, []);

  const renderActivePage = () => {
    if (transitionRoute !== null) {
      return <RouteLoader key={`transition-${transitionRoute}`} currentRoute={transitionRoute} />;
    }

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
          <Suspense fallback={<RouteLoader currentRoute={currentRoute} />}>
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
