import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export const PortfolioBadge: React.FC = () => {
  return (
    <div className="bg-[#122A22] text-[#F8F5EF] py-2 px-4 border-b border-[#1A382E] text-xs font-mono z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-[#D5BE91]" />
          <span className="font-semibold text-[#FFFFFF]">Project #11: AURELIA RETREATS</span>
          <span className="hidden sm:inline text-[#B8B0A2]">&bull; Boutique Hotels & Luxury Stays</span>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[#D5BE91] hover:text-[#FFFFFF] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Showcase Index</span>
        </Link>
      </div>
    </div>
  );
};
