import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Sun,
  ShieldCheck,
  Factory,
  Truck,
  Sparkles,
  Layers,
  LineChart,
  Globe,
  Compass,
} from 'lucide-react';
import { focusAreasData } from '../../data/focus';
import type { FocusClusterId, FocusAreaItem } from '../../types/focus';

interface FocusGridProps {
  selectedCluster: FocusClusterId;
}

export const FocusGrid: React.FC<FocusGridProps> = ({ selectedCluster }) => {
  const filteredAreas = selectedCluster === 'all'
    ? focusAreasData
    : focusAreasData.filter((area) => area.cluster === selectedCluster);

  const getFocusIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5' };
    switch (iconName) {
      case 'Zap': return <Zap {...props} className="w-5 h-5 text-emerald-600" />;
      case 'Sun': return <Sun {...props} className="w-5 h-5 text-amber-500" />;
      case 'ShieldCheck': return <ShieldCheck {...props} className="w-5 h-5 text-[#094792]" />;
      case 'Factory': return <Factory {...props} className="w-5 h-5 text-indigo-600" />;
      case 'Truck': return <Truck {...props} className="w-5 h-5 text-teal-600" />;
      case 'Sparkles': return <Sparkles {...props} className="w-5 h-5 text-[#00B4D8]" />;
      case 'Layers': return <Layers {...props} className="w-5 h-5 text-emerald-700" />;
      case 'LineChart': return <LineChart {...props} className="w-5 h-5 text-[#083870]" />;
      case 'Globe': return <Globe {...props} className="w-5 h-5 text-cyan-600" />;
      case 'Compass': return <Compass {...props} className="w-5 h-5 text-sky-600" />;
      default: return <Zap {...props} className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
    >
      <AnimatePresence mode="popLayout">
        {filteredAreas.map((area: FocusAreaItem) => (
          <motion.div
            layout
            key={area.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{
              contentVisibility: 'auto',
              containIntrinsicSize: 'auto 320px',
            }}
            className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400/80 shadow-xs hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Top Row: Icon Badge & Impact Metric */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                  {getFocusIcon(area.iconName)}
                </div>
                {area.impactMetric && (
                  <span className="text-[11px] font-bold text-emerald-700 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 tracking-wide">
                    {area.impactMetric}
                  </span>
                )}
              </div>

              {/* Title & Cluster Subtitle */}
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {area.clusterLabel}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-[#062A56] group-hover:text-[#094792] transition-colors leading-snug">
                {area.title}
              </h4>

              {/* Summary Description */}
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {area.summary}
              </p>
            </div>

            {/* Scope Tags */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
              {area.tags.map((tag) => (
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
  );
};

export default FocusGrid;

