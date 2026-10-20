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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
          {/* Brand Logo */}
          <a
            href="#home"
            className="focus:outline-none focus:ring-2 focus:ring-[#094792] rounded-lg group"
            aria-label="H2 Lanka Homepage"
          >
            <Logo layout="horizontal" size="sm" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'relative text-sm xl:text-base font-semibold transition-colors duration-200 py-1',
                  item.isActive
                    ? 'text-[#083870] font-bold'
                    : 'text-slate-700 hover:text-[#094792]'
                )}
              >
                {item.name}
                {item.isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#094792] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="primary"
              size="md"
              href="#contact"
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
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </motion.header>
  );
};

export default Navbar;
