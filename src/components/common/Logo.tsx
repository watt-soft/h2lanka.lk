import React from 'react';
import { getAssetPath } from '../../utils/assetPath';
import { cn } from '../../utils/cn';

export interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'vertical';
  variant?: 'full' | 'mark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  layout = 'vertical',
  variant = 'full',
}) => {
  // Horizontal layout: Mark image on left + Typography on right
  if (layout === 'horizontal') {
    const markDimensions = {
      sm: { cls: 'h-10 w-10 sm:h-11 sm:w-11', px: 10, titleCls: 'text-lg sm:text-xl', subCls: 'text-[10px] sm:text-[11px]' },
      md: { cls: 'h-12 w-12 sm:h-14 sm:w-14', px: 56, titleCls: 'text-xl sm:text-2xl', subCls: 'text-xs sm:text-sm' },
      lg: { cls: 'h-16 w-16 sm:h-20 sm:w-20', px: 80, titleCls: 'text-2xl sm:text-3xl', subCls: 'text-sm sm:text-base' },
      xl: { cls: 'h-20 w-20 sm:h-24 sm:w-24', px: 96, titleCls: 'text-3xl sm:text-4xl', subCls: 'text-base sm:text-lg' },
    };

    const currentDim = markDimensions[size];

    return (
      <div
        className={cn(
          'inline-flex items-center gap-2.5 sm:gap-3 select-none transition-transform duration-300 hover:scale-105 group',
          className
        )}
      >
        <picture>
          <source srcSet={getAssetPath('/logo-mark.webp')} type="image/webp" />
          <img
            src={getAssetPath('/logo-mark.png')}
            alt="H2 Lanka Emblem"
            className={cn('object-contain drop-shadow-sm shrink-0', currentDim.cls)}
            width={currentDim.px}
            height={currentDim.px}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        <div className="flex flex-col leading-none">
          <span
            className={cn(
              'font-extrabold text-[#083870] tracking-tight transition-colors duration-200 group-hover:text-[#094792]',
              currentDim.titleCls
            )}
          >
            H2 Lanka
          </span>
          <span
            className={cn(
              'font-semibold text-slate-500 tracking-wider mt-0.5 sm:mt-1',
              currentDim.subCls
            )}
          >
            (Pvt) Ltd
          </span>
        </div>
      </div>
    );
  }

  // Vertical layout: Full logo graphic (Emblem + Text in high-res 3D graphic)
  const verticalDimensions = {
    sm: { cls: 'h-14 w-14', px: 56 },
    md: { cls: 'h-20 w-20 sm:h-24 sm:w-24', px: 96 },
    lg: { cls: 'h-28 w-28 sm:h-32 sm:w-32', px: 128 },
    xl: { cls: 'h-32 w-32 sm:h-40 sm:w-40 lg:h-44 lg:w-44', px: 176 },
  };

  const isMark = variant === 'mark';
  const webpSrc = getAssetPath(isMark ? '/logo-mark.webp' : '/logo.webp');
  const pngSrc = getAssetPath(isMark ? '/logo-mark.png' : '/logo.png');
  const currentDim = verticalDimensions[size];

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center select-none transition-transform duration-300 hover:scale-105',
        className
      )}
    >
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={pngSrc}
          alt="H2 Lanka (Pvt) Ltd"
          className={cn('object-contain drop-shadow-md', currentDim.cls)}
          width={currentDim.px}
          height={currentDim.px}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
    </div>
  );
};

export default Logo;
