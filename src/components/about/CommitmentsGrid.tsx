import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Lightbulb, Users, ShieldCheck, Award } from 'lucide-react';
import { commitmentsData } from '../../data/about';
import type { CommitmentItem } from '../../types/about';

export const CommitmentsGrid: React.FC = () => {
  const getCommitmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf': return <Leaf className="w-5 h-5 text-emerald-600" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-amber-500" />;
      case 'Users': return <Users className="w-5 h-5 text-[#094792]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
      case 'Award': return <Award className="w-5 h-5 text-[#00B4D8]" />;
      default: return <Leaf className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Subheader */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide">
          <span>ETHOS & GOVERNANCE</span>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight">
          Our Enduring Commitments
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Guiding every techno-economic study, cross-border alliance, and physical facility deployment with absolute integrity.
        </p>
      </div>

      {/* 5-Item Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
        {commitmentsData.map((item: CommitmentItem, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                {getCommitmentIcon(item.iconName)}
              </div>

              <h4 className="text-base font-bold text-[#062A56] group-hover:text-[#094792] transition-colors">
                {item.title}
              </h4>

              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Core Principle</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommitmentsGrid;

