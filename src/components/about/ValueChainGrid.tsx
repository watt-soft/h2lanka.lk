import React from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  FlaskConical,
  Sun,
  FileText,
  Leaf,
  Truck,
  Building2,
  Globe,
  LineChart,
  Compass,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { expertiseData } from '../../data/about';
import type { ExpertiseItem } from '../../types/about';
import { cn } from '../../utils/cn';

export const ValueChainGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 transition-transform duration-300 group-hover:scale-110' };
    switch (iconName) {
      case 'Atom':
        return <Atom {...props} />;
      case 'FlaskConical':
        return <FlaskConical {...props} />;
      case 'Sun':
        return <Sun {...props} />;
      case 'FileText':
        return <FileText {...props} />;
      case 'Leaf':
        return <Leaf {...props} />;
      case 'Truck':
        return <Truck {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Globe':
        return <Globe {...props} />;
      case 'LineChart':
        return <LineChart {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const col1 = expertiseData.slice(0, 5);
  const col2 = expertiseData.slice(5, 10);

  const renderCard = (item: ExpertiseItem, index: number) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400/80 shadow-xs hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-default min-h-[76px] sm:min-h-[84px]"
    >
      {/* Subtle Left Accent Highlight on Hover */}
      <div
        className={cn(
          'absolute left-0 top-0 bottom-0 w-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b rounded-l-2xl',
          item.accentGradient
        )}
      />

      {/* Subtle Ambient Hover Glow */}
      <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Left Section: Icon, Number & Title */}
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-3">
        {/* Icon Container */}
        <div
          className={cn(
            'w-11 h-11 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs',
            item.iconBg,
            item.hoverBg
          )}
        >
          {getIcon(item.iconName)}
        </div>

        {/* Index Number */}
        <span className="font-mono text-xs sm:text-sm font-bold text-slate-300 group-hover:text-cyan-700 transition-colors shrink-0">
          {item.number}
        </span>

        {/* Title */}
        <h4 className="text-sm sm:text-base font-bold text-[#062A56] group-hover:text-[#094792] transition-colors leading-snug">
          {item.title}
        </h4>
      </div>

      {/* Right Section: Arrow Indicator */}
      <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-cyan-50 group-hover:text-[#094792] group-hover:border-cyan-200 transition-all duration-200 shrink-0">
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-8 sm:space-y-10" id="expertise">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight leading-tight">
          Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0284C7] to-[#10B981]">
            Expertise
          </span>
        </h3>
      </div>

      {/* 2-Column List Layout: 5 items in Column 1, 5 items in Column 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
        <div className="space-y-3.5 sm:space-y-4">
          {col1.map((item, index) => renderCard(item, index))}
        </div>
        <div className="space-y-3.5 sm:space-y-4">
          {col2.map((item, index) => renderCard(item, index + 5))}
        </div>
      </div>
    </div>
  );
};

export default ValueChainGrid;

