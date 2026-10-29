import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const PortfolioBadge: React.FC = () => {
  return (
    <div className="bg-[#292B28] text-[#F7F6F2] py-2 px-4 text-xs border-b border-[#292B28]/20 flex items-center justify-between font-sans relative z-40">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#777A62] animate-pulse" />
        <span className="font-medium tracking-wider uppercase text-[11px] text-[#C9BBA6]">
          Project #09 — FORMA STUDIO
        </span>
        <span className="hidden md:inline text-white/40">&bull;</span>
        <span className="hidden md:inline text-white/70">
          Interior Architecture & Design Practice Portfolio
        </span>
      </div>

      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide uppercase text-white/80 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>All Projects</span>
      </Link>
    </div>
  );
};
