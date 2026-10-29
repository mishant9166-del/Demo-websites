import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export const PortfolioBadge: React.FC = () => {
  return (
    <div className="bg-[#1C1C1C] text-[#F7F7F4] py-2 px-4 border-b border-[#2C2C2C] text-xs font-mono z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#2447E8]" />
          <span className="font-semibold text-[#FFFFFF]">Project #12: OBJECT & FORM</span>
          <span className="hidden sm:inline text-[#777872]">&bull; Premium Lifestyle & Design Store</span>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[#2447E8] hover:text-[#FFFFFF] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Showcase Index</span>
        </Link>
      </div>
    </div>
  );
};
