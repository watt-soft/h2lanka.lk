import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Sun,
  Database,
  Truck,
  Factory,
  Sparkles,
  Layers,
  LineChart,
  Globe,
  Tag,
} from 'lucide-react';
import { valueChainData } from '../../data/about';
import type { ValueChainCategory, ValueChainItem } from '../../types/about';
import { cn } from '../../utils/cn';

export const ValueChainGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ValueChainCategory>('all');

  const filterTabs: { id: ValueChainCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Capabilities', count: 9 },
    { id: 'production', label: 'Production & Storage', count: 3 },
    { id: 'applications', label: 'Mobility & Industry', count: 3 },
    { id: 'consultancy', label: 'Advisory & Global', count: 3 },
  ];

  const filteredItems = selectedCategory === 'all'
    ? valueChainData
    : valueChainData.filter((item) => item.category === selectedCategory);

  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5' };
    switch (iconName) {
      case 'Zap': return <Zap {...props} className="w-5 h-5 text-emerald-600" />;
      case 'Sun': return <Sun {...props} className="w-5 h-5 text-amber-500" />;
      case 'Database': return <Database {...props} className="w-5 h-5 text-[#00B4D8]" />;
      case 'Truck': return <Truck {...props} className="w-5 h-5 text-[#094792]" />;
      case 'Factory': return <Factory {...props} className="w-5 h-5 text-indigo-600" />;
      case 'Sparkles': return <Sparkles {...props} className="w-5 h-5 text-cyan-600" />;
      case 'Layers': return <Layers {...props} className="w-5 h-5 text-emerald-700" />;
      case 'LineChart': return <LineChart {...props} className="w-5 h-5 text-[#083870]" />;
      case 'Globe': return <Globe {...props} className="w-5 h-5 text-teal-600" />;
      default: return <Sparkles {...props} className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Section Sub-header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide">
          <Tag className="w-3.5 h-3.5 text-[#094792]" />
          <span>WHAT WE DO • VALUE CHAIN CAPABILITIES</span>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight">
          Comprehensive Hydrogen Expertise
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          From solar and wind integration to high-pressure storage, industrial fuel substitution, and Power-to-X synthesis, H2 Lanka provides full-lifecycle engineering and project facilitation.
        </p>
      </div>

      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setSelectedCategory(tab.id)}
            className={cn(
              'relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 focus:outline-none focus:ring-2 focus:ring-[#094792] cursor-pointer whitespace-nowrap active:scale-95',
              selectedCategory === tab.id
                ? 'bg-[#062A56] text-white shadow-md shadow-slate-900/10'
                : 'bg-white text-slate-600 hover:text-[#062A56] hover:bg-slate-100/80 border border-slate-200/80'
            )}
          >
            <span>{tab.label}</span>
            <span
              className={cn(
                'px-1.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold',
                selectedCategory === tab.id
                  ? 'bg-emerald-400 text-slate-950'
                  : 'bg-slate-100 text-slate-500'
              )}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* 9-Card Responsive Grid with Motion Layout */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item: ValueChainItem) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-300 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Icon & Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Card Title */}
                <h4 className="text-lg sm:text-xl font-bold text-[#062A56] group-hover:text-[#094792] transition-colors leading-snug">
                  {item.title}
                </h4>

                {/* Card Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-slate-600 px-2.5 py-0.5 rounded-full bg-slate-100/80 group-hover:bg-cyan-50 group-hover:text-cyan-900 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ValueChainGrid;

