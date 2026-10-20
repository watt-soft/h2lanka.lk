import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavItem } from '../../types';
import Button from '../common/Button';

interface MobileNavProps {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
  onContactClick?: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  navItems,
  onClose,
  onContactClick,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl overflow-hidden"
        >
          <div className="px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                    item.isActive
                      ? 'text-[#094792] bg-blue-50/70 font-bold'
                      : 'text-slate-700 hover:text-[#094792] hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => {
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
