import React from 'react';
import { Leaf, Users } from 'lucide-react';
import { cn } from '../../utils/cn';

interface BadgeIconProps {
  type: 'clean-energy' | 'sustainable-future' | 'stronger-together';
  className?: string;
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({ type, className }) => {
  if (type === 'clean-energy') {
    return (
      <div
        className={cn(
          'w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110',
          className
        )}
      >
        <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-[#10B981] stroke-[1.8]" />
      </div>
    );
  }

  if (type === 'sustainable-future') {
    return (
      <div
        className={cn(
          'w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110',
          className
        )}
      >
        <div className="flex items-baseline font-extrabold text-[#094792] tracking-tighter leading-none select-none">
          <span className="text-2xl sm:text-3xl">H</span>
          <span className="text-base sm:text-lg -ml-0.5">2</span>
        </div>
      </div>
    );
  }

  // Stronger Together
  return (
    <div
      className={cn(
        'w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110',
        className
      )}
    >
      <Users className="w-7 h-7 sm:w-8 sm:h-8 text-[#10B981] stroke-[1.8]" />
    </div>
  );
};

export default BadgeIcon;

