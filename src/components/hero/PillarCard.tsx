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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'group relative flex items-center gap-4 sm:gap-5 p-4 sm:p-6 lg:p-7 rounded-2xl transition-all duration-300',
        hasDivider && 'lg:border-r lg:border-slate-100'
      )}
    >
      {/* Icon Badge */}
      <BadgeIcon type={pillar.badgeType} />

      {/* Content */}
      <div className="flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold text-[#083870] group-hover:text-[#094792] transition-colors duration-200">
          {pillar.title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
          {pillar.description}
        </p>
      </div>
    </motion.div>
  );
};

export default PillarCard;

