import React from 'react';
import { Link } from 'react-router-dom';

interface AureliaLogoProps {
  isDark?: boolean;
  className?: string;
}

export const AureliaLogo: React.FC<AureliaLogoProps> = ({ isDark = false, className = '' }) => {
  return (
    <Link
      to="/aurelia"
      className={`inline-flex items-center gap-2.5 group transition-transform duration-200 ${className}`}
    >
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors border ${
          isDark
            ? 'bg-[#173D32] border-[#D5BE91]/40 text-[#D5BE91]'
            : 'bg-[#173D32] border-[#D5BE91]/50 text-[#D5BE91]'
        }`}
      >
        <span className="font-serif text-base font-bold italic">A</span>
      </div>

      <div className="flex flex-col text-left">
        <span
          className={`font-serif text-lg tracking-[0.16em] font-bold leading-none ${
            isDark ? 'text-white' : 'text-[#173D32]'
          }`}
        >
          AURELIA
        </span>
        <span
          className={`text-[8.5px] uppercase tracking-[0.28em] font-sans font-semibold pt-0.5 ${
            isDark ? 'text-[#D5BE91]' : 'text-[#D5BE91]'
          }`}
        >
          Retreats &bull; Luxury Stays
        </span>
      </div>
    </Link>
  );
};
