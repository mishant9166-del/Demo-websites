import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const PortfolioBadge: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <Link
        to="/"
        className="flex items-center gap-2 bg-[#382820] text-[#FFFEFA] hover:bg-[#251a14] px-4 py-2.5 rounded-full shadow-xl border border-[#F0D27A]/40 text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95 group"
        title="Return to Main Portfolio Dashboard"
      >
        <ArrowLeft className="w-4 h-4 text-[#F0D27A] group-hover:-translate-x-0.5 transition-transform" />
        <span className="font-semibold text-white">Project 08</span>
        <span className="hidden sm:inline text-[#EADFCF]/70">| All Demos</span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F0D27A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F0D27A]"></span>
        </span>
      </Link>
    </div>
  );
};
