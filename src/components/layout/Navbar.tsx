import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import Logo from '../common/Logo';
import Button from '../common/Button';
import Container from './Container';
import MobileNav from './MobileNav';
import { cn } from '../../utils/cn';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(() => {
    return typeof window !== 'undefined' ? window.scrollY > 20 : false;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(() => {
    return typeof window !== 'undefined' && window.location.hash
      ? window.location.hash
      : '#home';
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Top of page
      if (scrollY < 120) {
        setActiveSection('#home');
        return;
      }

      // Bottom of page: activate last available section
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
        const lastExisting = [...navigationItems].reverse().find((item) => {
          const id = item.href.replace('#', '');
          return document.getElementById(id);
        });
        if (lastExisting) {
          setActiveSection(lastExisting.href);
          return;
        }
      }

      // Check section bounding rects with navbar offset
      const navThreshold = 140;
      for (const item of navigationItems) {
        const id = item.href.replace('#', '');
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= navThreshold && rect.bottom > navThreshold) {
          setActiveSection(item.href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const rafId = requestAnimationFrame(handleScroll);

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveSection(window.location.hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,box-shadow,padding] duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-100 py-2 sm:py-2.5'
          : 'bg-transparent border-transparent shadow-none py-3 sm:py-4'
      )}
    >
      <Container size="xl">
        <div className="flex items-center justify-between">
          {/* Brand Logo: Hidden on desktop when at scroll 0, smoothly fades in when scrolled */}
          <a
            href="#home"
            onClick={() => setActiveSection('#home')}
            className={cn(
              'focus:outline-none focus:ring-2 focus:ring-[#094792] rounded-lg group transition-all duration-300 ease-out',
              isScrolled
                ? 'opacity-100 translate-x-0 pointer-events-auto'
                : 'opacity-100 pointer-events-auto lg:opacity-0 lg:-translate-x-3 lg:pointer-events-none'
            )}
            aria-label="H2 Lanka Homepage"
          >
            <Logo layout="horizontal" size="sm" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}
                  className={cn(
                    'relative text-sm xl:text-base font-semibold transition-colors duration-200 py-1',
                    isActive
                      ? 'text-[#083870] font-bold'
                      : 'text-slate-700 hover:text-[#094792]'
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#094792] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="primary"
              size="md"
              href="#contact"
              onClick={() => setActiveSection('#contact')}
              className="text-sm px-6 py-2.5 font-medium"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#094792] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#094792]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        navItems={navigationItems}
        activeSection={activeSection}
        onClose={() => setIsMobileMenuOpen(false)}
        onSelectSection={(href) => setActiveSection(href)}
      />
    </motion.header>
  );
};

export default Navbar;
