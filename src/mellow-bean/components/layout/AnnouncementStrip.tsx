import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export const AnnouncementStrip: React.FC = () => {
  return (
    <div className="bg-[#F0D27A] text-[#382820] text-xs sm:text-sm py-2 px-4 border-b border-[#E5C76E]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-center font-medium">
        <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px]">
          <Sparkles className="w-3.5 h-3.5" />
          Morning Batch:
        </span>
        <span>Warm croissants and sourdough baked fresh daily at 8:00 AM &amp; 2:30 PM.</span>
        <Link
          to="/mellow-bean/menu"
          className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:opacity-80 transition-opacity ml-1"
        >
          Explore Morning Menu
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
