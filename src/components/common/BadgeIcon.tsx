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
          'w-12 h-12 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110',
          className
        )}
      >
        <Leaf className="w-6 h-6 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 text-[#10B981] stroke-[1.8]" />
      </div>
    );
  }

  if (type === 'sustainable-future') {
    return (
      <div
        className={cn(
          'w-12 h-12 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110',
          className
        )}
      >
        <div className="flex items-baseline font-extrabold text-[#094792] tracking-tighter leading-none select-none">
          <span className="text-xl md:text-lg lg:text-xl">H</span>
          <span className="text-sm md:text-xs lg:text-sm -ml-0.5">2</span>
        </div>
      </div>
    );
  }

  // Stronger Together
  return (
    <div
      className={cn(
        'w-12 h-12 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110',
        className
      )}
    >
      <Users className="w-6 h-6 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 text-[#10B981] stroke-[1.8]" />
    </div>
  );
};

export default BadgeIcon;

