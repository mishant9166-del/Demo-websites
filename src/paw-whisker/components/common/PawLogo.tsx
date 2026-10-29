import React from 'react';
import { Link } from 'react-router-dom';

interface PawLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const PawLogo: React.FC<PawLogoProps> = ({
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
    <Link to="/paw-whisker" className="group flex items-center gap-3 select-none">
      {/* Handcrafted Paw + Leaf / Heart icon */}
      <div
        className={`${iconSizes[size]} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300 ${
          isLight ? 'bg-white text-[#C76F52]' : 'bg-[#C76F52] text-white shadow-sm'
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 transition-transform group-hover:rotate-6 duration-300"
          aria-hidden="true"
        >
          {/* Main paw pad */}
          <ellipse cx="12" cy="15" rx="4" ry="3.5" />
          {/* 4 toe pads */}
          <circle cx="7.5" cy="9.5" r="2" />
          <circle cx="10.5" cy="6.5" r="1.8" />
          <circle cx="13.5" cy="6.5" r="1.8" />
          <circle cx="16.5" cy="9.5" r="2" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-fraunces font-bold tracking-tight leading-none ${textSizes[size]} ${
            isLight ? 'text-white' : 'text-[#343D30]'
          }`}
        >
          PAW &amp; WHISKER
        </span>
        {showTagline && (
          <span
            className={`text-[10px] tracking-wider uppercase font-medium mt-1 ${
              isLight ? 'text-[#F0D9CA]' : 'text-[#82947A]'
            }`}
          >
            Veterinary Care &amp; Wellness
          </span>
        )}
      </div>
    </Link>
  );
};
