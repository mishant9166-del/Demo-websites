import React from 'react';
import { Link } from 'react-router-dom';

interface MellowLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const MellowLogo: React.FC<MellowLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <Link to="/mellow-bean" className="group flex items-center gap-2.5 sm:gap-3 select-none">
      {/* Handcrafted Coffee Bean & Steam Emblem */}
      <div
        className={`${iconSizes[size]} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300 ${
          isLight
            ? 'bg-[#F0D27A] text-[#382820]'
            : 'bg-[#382820] text-[#F0D27A] shadow-xs'
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 transition-transform group-hover:rotate-6 duration-300"
          aria-hidden="true"
        >
          {/* Coffee cup with saucer */}
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" fill="currentColor" fillOpacity="0.2" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-fraunces font-bold tracking-tight leading-none ${textSizes[size]} ${
            isLight ? 'text-[#FFFEFA]' : 'text-[#382820]'
          }`}
        >
          MELLOW &amp; BEAN
        </span>
        {showTagline && (
          <span
            className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-medium mt-1 font-sans ${
              isLight ? 'text-[#F0D27A]' : 'text-[#B77A4A]'
            }`}
          >
            Coffee · Brunch · Bakery
          </span>
        )}
      </div>
    </Link>
  );
};
