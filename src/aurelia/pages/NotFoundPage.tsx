import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F8F5EF] px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#173D32] text-[#D5BE91] flex items-center justify-center mx-auto shadow-md">
          <Compass className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#173D32] block">
          404 &bull; Sanctuary Out of Range
        </span>

        <h1 className="text-3xl sm:text-4xl font-serif text-[#173D32]">
          You have wandered off the marked trail.
        </h1>

        <p className="text-xs sm:text-sm text-[#292B27]/75 font-light leading-relaxed">
          The retreat suite or page you are looking for does not exist or has been relocated to another sanctuary sanctuary.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/aurelia"
            className="w-full sm:w-auto px-6 py-3 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold rounded-xs shadow-xs transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5 text-[#D5BE91]" />
            <span>Retreat Homepage</span>
          </Link>

          <Link
            to="/aurelia/stays"
            className="w-full sm:w-auto px-6 py-3 bg-white border border-[#D5BE91]/40 text-[#173D32] hover:bg-[#F8F5EF] text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors flex items-center justify-center gap-2"
          >
            <span>Explore Stays</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
