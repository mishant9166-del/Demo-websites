import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const PortfolioBadge: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <Link
        to="/"
        className="flex items-center gap-2 bg-[#343D30] text-[#FBF5EA] hover:bg-[#252c22] px-4 py-2.5 rounded-full shadow-lg border border-[#82947A]/30 text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95 group"
        title="Return to Main Portfolio Hub"
      >
        <ArrowLeft className="w-4 h-4 text-[#82947A] group-hover:-translate-x-0.5 transition-transform" />
        <span className="font-semibold text-white">Project 07</span>
        <span className="hidden sm:inline text-[#E8DFD1]/70">| All Demos</span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C76F52] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C76F52]"></span>
        </span>
      </Link>
    </div>
  );
};
