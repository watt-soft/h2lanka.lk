import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'gradient'
  | 'emerald'
  | 'outline'
  | 'glass'
  | 'dark'
  | 'ghost';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  showArrow?: boolean;
  fullWidth?: boolean | 'mobile';
  mobileText?: string;
  children: React.ReactNode;
  className?: string;
}

type MotionAnchorProps = Omit<HTMLMotionProps<'a'>, keyof BaseButtonProps | 'href'>;
type MotionButtonProps = Omit<HTMLMotionProps<'button'>, keyof BaseButtonProps>;

export type ButtonProps = BaseButtonProps &
  (
    | ({ href: string } & MotionAnchorProps)
    | ({ href?: undefined } & MotionButtonProps)
  );

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  showArrow = false,
  fullWidth = false,
  mobileText,
  children,
  className = '',
  href,
  ...restProps
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none cursor-pointer group whitespace-nowrap active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles: Record<ButtonSize, string> = {
    xs: 'text-[11px] sm:text-xs px-3.5 py-1.5 gap-1.5',
    sm: 'text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 gap-1.5',
    md: 'text-xs sm:text-sm md:text-base px-5 sm:px-6 py-2.5 sm:py-3 gap-2',
    lg: 'text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-3.5 gap-2.5',
  };

  const widthStyles =
    fullWidth === true
      ? 'w-full'
      : fullWidth === 'mobile'
        ? 'w-full sm:w-auto'
        : 'w-auto';

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-[#094792] hover:bg-[#073770] text-white shadow-md shadow-[#094792]/20 hover:shadow-lg hover:shadow-[#094792]/30 focus:ring-[#094792] border border-[#094792]',
    secondary:
      'bg-white hover:bg-slate-50 text-[#083870] border border-[#094792] shadow-xs hover:shadow-md focus:ring-[#094792]',
    gradient:
      'bg-gradient-to-r from-[#094792] via-[#0284C7] to-[#00B4D8] hover:from-[#083870] hover:via-[#0275B1] hover:to-[#38BDF8] text-white shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 border-0 focus:ring-cyan-400',
    emerald:
      'bg-gradient-to-r from-emerald-600 via-teal-600 to-[#00B4D8] hover:from-emerald-500 hover:via-teal-500 hover:to-[#38BDF8] text-white shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 border-0 focus:ring-emerald-400',
    glass:
      'bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/40 text-white backdrop-blur-md shadow-sm hover:shadow-md focus:ring-white',
    dark:
      'bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-100 hover:text-white shadow-sm hover:shadow-md focus:ring-slate-500',
    outline:
      'bg-transparent hover:bg-white/10 text-white border border-white/60 hover:border-white focus:ring-white',
    ghost:
      'bg-transparent hover:bg-slate-100 text-[#083870] focus:ring-slate-300',
  };

  const renderedContent = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="shrink-0 flex items-center">{icon}</span>
      )}

      {mobileText ? (
        <>
          <span className="hidden sm:inline tracking-wide">{children}</span>
          <span className="sm:hidden tracking-wide">{mobileText}</span>
        </>
      ) : (
        <span className="tracking-wide">{children}</span>
      )}

      {icon && iconPosition === 'right' && (
        <span className="shrink-0 flex items-center">{icon}</span>
      )}

      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0 ml-0.5" />
      )}
    </>
  );

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    widthStyles,
    className
  );

  if (href !== undefined) {
    const anchorProps = restProps as MotionAnchorProps;
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClasses}
        {...anchorProps}
      >
        {renderedContent}
      </motion.a>
    );
  }

  const buttonProps = restProps as MotionButtonProps;
  return (
    <motion.button
      type={buttonProps.type || 'button'}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      {...buttonProps}
    >
      {renderedContent}
    </motion.button>
  );
};

export default Button;
