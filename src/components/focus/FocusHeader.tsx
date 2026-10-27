import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import type { FocusClusterId } from '../../types/focus';
import { cn } from '../../utils/cn';

interface FocusHeaderProps {
  selectedCluster: FocusClusterId;
  onSelectCluster: (cluster: FocusClusterId) => void;
}

export const FocusHeader: React.FC<FocusHeaderProps> = ({
  selectedCluster,
  onSelectCluster,
}) => {
  const clusterTabs: { id: FocusClusterId; label: string; count: number }[] = [
    { id: 'all', label: 'All Focus Areas', count: 10 },
    { id: 'production', label: 'Production & Grid', count: 3 },
    { id: 'downstream', label: 'Applications & P2X', count: 3 },
    { id: 'validation', label: 'Validation & Research', count: 2 },
    { id: 'ecosystem', label: 'Ecosystem & Alliances', count: 2 },
  ];

  return (
    <div className="relative max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
      {/* Eyebrow Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-[#083870] text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide shadow-xs max-w-full"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
        </span>
        <Target className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" />
        <span className="sm:hidden whitespace-nowrap">OUR STRATEGIC FOCUS</span>
        <span className="hidden sm:inline whitespace-nowrap">OUR STRATEGIC FOCUS • CLEAN ENERGY SOLUTIONS</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#062A56] tracking-tight leading-[1.12]"
      >
        Accelerating Clean{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0284C7] to-[#10B981]">
          Hydrogen & Renewable
        </span>{' '}
        Deployment
      </motion.h2>

      {/* Narrative Lead */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-normal"
      >
        At <strong className="font-semibold text-[#083870]">H2 Lanka (Pvt) Ltd.</strong>, our focus is on accelerating the development and deployment of green hydrogen and renewable energy technologies that deliver practical, scalable, and economically viable solutions for Sri Lanka and international markets.
      </motion.p>

      {/* Interactive Cluster Filter Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
      >
        {clusterTabs.map((tab) => {
          const isSelected = selectedCluster === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectCluster(tab.id)}
              className={cn(
                'relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#094792] cursor-pointer',
                isSelected
                  ? 'bg-[#062A56] text-white shadow-md shadow-slate-900/15'
                  : 'bg-white text-slate-600 hover:text-[#062A56] hover:bg-slate-100/80 border border-slate-200/90'
              )}
            >
              <span>{tab.label}</span>
              <span
                className={cn(
                  'px-1.5 py-0.2 rounded-full text-[11px] font-bold',
                  isSelected
                    ? 'bg-cyan-400 text-slate-950'
                    : 'bg-slate-100 text-slate-500'
                )}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FocusHeader;

