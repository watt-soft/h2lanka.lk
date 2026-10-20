import React from 'react';
import { motion } from 'framer-motion';
import type { ValuePillarItem } from '../../types';
import BadgeIcon from '../common/BadgeIcon';
import { cn } from '../../utils/cn';

interface PillarCardProps {
  pillar: ValuePillarItem;
  hasDivider?: boolean;
}

export const PillarCard: React.FC<PillarCardProps> = ({ pillar, hasDivider = false }) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'group relative flex items-center gap-3 sm:gap-4 md:gap-3 lg:gap-3.5 p-3.5 sm:p-5 md:py-2 md:px-3 lg:py-2.5 lg:px-4 rounded-xl md:rounded-2xl transition-all duration-300',
        hasDivider && 'md:border-r md:border-slate-100'
      )}
    >
      {/* Icon Badge */}
      <BadgeIcon type={pillar.badgeType} />

      {/* Content */}
      <div className="flex flex-col min-w-0">
        <h3 className="text-base sm:text-lg md:text-xs lg:text-sm font-bold text-[#083870] group-hover:text-[#094792] transition-colors duration-200 leading-snug">
          {pillar.title}
        </h3>
        <p className="mt-0.5 text-xs md:text-[11px] lg:text-xs text-slate-600 leading-relaxed max-w-xs line-clamp-2">
          {pillar.description}
        </p>
      </div>
    </motion.div>
  );
};

export default PillarCard;

