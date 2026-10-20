import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'light',
}) => {
  // Dimension mapping for the logo mark
  const dimensionMap = {
    sm: { markW: 36, markH: 36, titleSize: 'text-base', subSize: 'text-[9px]' },
    md: { markW: 46, markH: 46, titleSize: 'text-xl', subSize: 'text-xs' },
    lg: { markW: 60, markH: 60, titleSize: 'text-2xl', subSize: 'text-sm' },
    xl: { markW: 84, markH: 84, titleSize: 'text-3xl', subSize: 'text-base' },
  };

  const { markW, markH, titleSize, subSize } = dimensionMap[size];

  const titleColor = variant === 'dark' ? 'text-white' : 'text-[#083870]';
  const subColor = variant === 'dark' ? 'text-slate-300' : 'text-[#64748B]';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Mark */}
      <svg
        width={markW}
        height={markH}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="H2 Lanka Logo"
      >
        <defs>
          {/* Blue gradient for 'H' */}
          <linearGradient id="hBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#007ACC" />
            <stop offset="100%" stopColor="#083870" />
          </linearGradient>

          {/* Green-to-Blue gradient for '2' */}
          <linearGradient id="num2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5BB82C" />
            <stop offset="60%" stopColor="#3F9B35" />
            <stop offset="100%" stopColor="#0866A5" />
          </linearGradient>

          {/* Cyan Flame Gradient */}
          <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0080D8" />
            <stop offset="60%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#48CAE4" />
          </linearGradient>

          {/* Inner Flame Highlight */}
          <linearGradient id="innerFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#CAF0F8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Letter 'H' with molecular bond crossbar */}
        <g id="letter-H">
          {/* Left Vertical Stem */}
          <path
            d="M 12 28 L 26 28 L 26 78 L 12 78 Z"
            fill="url(#hBlueGrad)"
          />
          {/* Right Vertical Stem */}
          <path
            d="M 44 28 L 58 28 L 58 78 L 44 78 Z"
            fill="url(#hBlueGrad)"
          />
          {/* Angled Crossbar */}
          <path
            d="M 26 47 L 44 43 L 44 58 L 26 62 Z"
            fill="url(#hBlueGrad)"
          />

          {/* Molecule connection in the crossbar */}
          <g id="molecule-nodes">
            {/* Bond lines */}
            <line
              x1="22"
              y1="54"
              x2="33"
              y2="57"
              stroke="#FFFFFF"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <line
              x1="33"
              y1="57"
              x2="47"
              y2="50"
              stroke="#FFFFFF"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Atom Nodes */}
            <circle cx="22" cy="54" r="4.2" fill="#FFFFFF" />
            <circle cx="33" cy="57" r="3.2" fill="#FFFFFF" />
            <circle cx="47" cy="50" r="3.8" fill="#FFFFFF" />
          </g>
        </g>

        {/* Numeral '2' */}
        <g id="numeral-2">
          <path
            d="M 62 44 
               C 62 35, 71 30, 81 30 
               C 92 30, 98 37, 98 44 
               C 98 52, 92 59, 81 67 
               L 66 78 
               L 98 78 
               L 98 70 
               L 79 70 
               C 88 62, 98 55, 98 44 
               C 98 31, 88 23, 77 23 
               C 65 23, 58 32, 58 41 
               Z"
            fill="url(#num2Grad)"
          />
          {/* Main solid fill of the 2 */}
          <path
            d="M 60 40 
               C 60 30, 70 25, 80 25 
               C 91 25, 97 32, 97 41 
               C 97 50, 89 58, 77 66 
               L 60 78 
               L 98 78 
               L 98 68 
               L 75 68 
               L 85 60 
               C 96 50, 100 42, 100 37 
               C 100 24, 90 17, 78 17 
               C 66 17, 57 25, 56 36 
               Z"
            fill="url(#num2Grad)"
            opacity="0.95"
          />
        </g>

        {/* Flame / Water droplet atop '2' */}
        <g id="flame-droplet" transform="translate(68, -4)">
          {/* Outer Cyan Flame */}
          <path
            d="M 12 28 
               C 7 26, 4 21, 5 15 
               C 6 9, 12 3, 14 0 
               C 16 4, 22 9, 23 15 
               C 24 22, 19 28, 12 28 Z"
            fill="url(#flameGrad)"
          />
          {/* Inner White Flame Core */}
          <path
            d="M 12 25 
               C 9 24, 8 20, 9 17 
               C 10 13, 13 8, 14 5 
               C 15 8, 18 13, 18 17 
               C 18 21, 16 25, 12 25 Z"
            fill="url(#innerFlameGrad)"
          />
        </g>
      </svg>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-extrabold tracking-tight ${titleSize} ${titleColor}`}>
            H2 Lanka
          </span>
          <span className={`font-semibold tracking-wider ${subSize} ${subColor} mt-0.5`}>
            (Pvt) Ltd
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;

