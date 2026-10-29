import React from 'react';
import { Link } from 'react-router-dom';

interface FormaLogoProps {
  className?: string;
  light?: boolean;
}

export const FormaLogo: React.FC<FormaLogoProps> = ({ className = '', light = false }) => {
  return (
    <Link
      to="/forma"
      className={`inline-flex flex-col tracking-tight group no-underline ${className}`}
    >
      <span
        className={`font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] uppercase transition-colors ${
          light ? 'text-[#FFFFFF] group-hover:text-[#E9E4DA]' : 'text-[#292B28] group-hover:text-[#777A62]'
        }`}
      >
        FORMA STUDIO
      </span>
      <span
        className={`text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-sans font-medium transition-colors ${
          light ? 'text-[#FFFFFF]/60' : 'text-[#292B28]/60'
        }`}
      >
        Interior Architecture
      </span>
    </Link>
  );
};
