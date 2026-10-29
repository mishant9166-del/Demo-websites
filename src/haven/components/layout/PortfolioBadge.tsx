import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export const PortfolioBadge: React.FC = () => {
  return (
    <div className="bg-[#254D3C] text-white py-2 px-4 border-b border-[#1E3F31] text-xs font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#E7DDCE]" />
          <span className="font-semibold text-[#FAF9F5]">Project #10: HAVEN & KEY</span>
          <span className="hidden sm:inline text-white/60">&bull; Real Estate & Property Discovery</span>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Agency Dashboard</span>
        </Link>
      </div>
    </div>
  );
};
