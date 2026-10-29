import React from 'react';
import { Link } from 'react-router-dom';
import { KeyRound } from 'lucide-react';

interface HavenLogoProps {
  className?: string;
  isDark?: boolean;
}

export const HavenLogo: React.FC<HavenLogoProps> = ({ className = '', isDark = false }) => {
  return (
    <Link
      to="/haven"
      className={`inline-flex items-center gap-2.5 group transition-transform duration-200 ${className}`}
    >
      <div
        className={`w-9 h-9 rounded-sm flex items-center justify-center transition-colors ${
          isDark
            ? 'bg-[#254D3C] text-white group-hover:bg-[#1E3F31]'
            : 'bg-[#254D3C] text-white group-hover:bg-[#1E3F31]'
        }`}
      >
        <KeyRound className="w-4 h-4 stroke-[2.2]" />
      </div>
      <div className="flex flex-col text-left">
        <span
          className={`font-serif text-lg tracking-wider font-bold leading-none ${
            isDark ? 'text-white' : 'text-[#254D3C]'
          }`}
        >
          HAVEN & KEY
        </span>
        <span
          className={`text-[9px] uppercase tracking-[0.24em] font-sans font-semibold pt-0.5 ${
            isDark ? 'text-white/60' : 'text-[#899687]'
          }`}
        >
          Property &bull; Living &bull; Investment
        </span>
      </div>
    </Link>
  );
};
