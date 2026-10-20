import React from 'react';
import HydrogenBackground from '../common/HydrogenBackground';
import { cn } from '../../utils/cn';

export interface SectionBackgroundProps {
  className?: string;
  variant?: 'minimal' | 'subtle';
  children?: React.ReactNode;
}

/**
 * Reusable wrapper for future sections (About Us, Our Focus, Partners, Contact)
 * providing cohesive, non-distracting minimal live hydrogen motion in the background.
 */
export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  className = '',
  variant = 'minimal',
  children,
}) => {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Background Live Motion Layer */}
      <HydrogenBackground variant={variant} interactive={false} className="z-0" />

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionBackground;

