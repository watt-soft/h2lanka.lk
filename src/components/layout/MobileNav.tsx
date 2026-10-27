import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavItem } from '../../types';
import Button from '../common/Button';
import { prefetchRoute } from '../../utils/prefetchRoutes';

interface MobileNavProps {
  isOpen: boolean;
  navItems: NavItem[];
  currentRoute?: string;
  onClose: () => void;
  onContactClick?: () => void;
  onSelectSection?: (href: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  navItems,
  currentRoute = 'home',
  onClose,
  onContactClick,
  onSelectSection,
}) => {
  const handleItemClick = (href: string) => {
    onSelectSection?.(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl overflow-hidden"
        >
          <div className="px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const isActive = item.routeKey === currentRoute;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleItemClick(item.href)}
                    onTouchStart={() => prefetchRoute(item.href)}
                    onMouseEnter={() => prefetchRoute(item.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative flex items-center justify-between text-base font-semibold py-2.5 px-3.5 rounded-xl transition-all duration-200 ${isActive
                        ? 'text-[#083870] bg-blue-50/90 font-bold shadow-xs'
                        : 'text-slate-700 hover:text-[#094792] hover:bg-slate-50'
                      }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeMobileNavIndicator"
                        className="w-1.5 h-5 bg-[#094792] rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </nav>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                href="#/contact"
                className="w-full justify-center"
                onClick={() => {
                  onSelectSection?.('#/contact');
                  onClose();
                  onContactClick?.();
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
