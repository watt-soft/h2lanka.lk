import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  children,
  className,
  href,
  onClick,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none cursor-pointer group';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm sm:text-base px-6 py-2.5 sm:py-3 gap-2',
    lg: 'text-base sm:text-lg px-8 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#094792] hover:bg-[#073770] text-white shadow-md shadow-[#094792]/20 hover:shadow-lg hover:shadow-[#094792]/30 focus:ring-[#094792]',
    secondary:
      'bg-white hover:bg-slate-50 text-[#083870] border border-[#094792] shadow-sm hover:shadow-md focus:ring-[#094792]',
    outline:
      'bg-transparent hover:bg-white/10 text-white border border-white/60 focus:ring-white',
    ghost:
      'bg-transparent hover:bg-slate-100 text-[#083870] focus:ring-slate-300',
  };

  const content = (
    <>
      <span className="tracking-wide">{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={props.type || 'button'}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={props.disabled}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
    >
      {content}
    </motion.button>
  );
};

export default Button;
