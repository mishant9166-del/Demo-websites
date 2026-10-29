import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#F0D9CA] border-b border-[#E8DFD1] text-[#343D30] text-xs sm:text-sm py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-center font-medium">
        <span className="inline-flex items-center gap-1.5 font-semibold text-[#C76F52]">
          <Sparkles className="w-3.5 h-3.5" />
          First-Time Visits:
        </span>
        <span>New to our clinic? We&apos;d love to meet your companion.</span>
        <Link
          to="/paw-whisker/new-patients"
          className="inline-flex items-center gap-1 font-bold text-[#C76F52] hover:text-[#a8583e] underline underline-offset-2 transition-colors ml-1"
        >
          First-visit guide
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
