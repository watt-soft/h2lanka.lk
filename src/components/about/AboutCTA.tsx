import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Button from '../common/Button';

export const AboutCTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-6 sm:p-10 lg:p-14 bg-gradient-to-r from-[#062A56] via-[#083870] to-[#041E40] text-white shadow-2xl border border-slate-700/60 overflow-hidden"
    >
      {/* Background Radial Glow Blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] sm:text-xs font-semibold tracking-wide max-w-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">POWERING THE FUTURE WITH GREEN HYDROGEN</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Connecting Renewable Energy, Hydrogen Technology & a Sustainable Future
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            By combining Sri Lanka’s renewable energy potential with advanced hydrogen technologies and international expertise, H2 Lanka is dedicated to creating a cleaner, more resilient, and energy-secure future.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
          <Button
            variant="emerald"
            size="md"
            href="#/our-focus"
            fullWidth="mobile"
            showArrow
          >
            Explore Our Solutions
          </Button>

          <Button
            variant="glass"
            size="md"
            href="#/partners"
            fullWidth="mobile"
            showArrow
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCTA;

