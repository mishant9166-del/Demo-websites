import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-32 bg-[#FAF9F5] min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.28em] text-[#899687] block">
            Error 404 &bull; Unregistered Property Coordinate
          </span>
          <h1 className="text-5xl sm:text-7xl font-serif font-bold text-[#292D2A] leading-tight">
            Listing Not Located.
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#292D2A]/80 leading-relaxed max-w-lg mx-auto">
            “The residential residence, neighborhood guide, or advisory dossier you requested does not exist within the current Haven & Key registry.”
          </p>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/haven"
            className="px-6 py-3 bg-[#254D3C] text-white text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#1E3F31] transition-all inline-flex items-center gap-2 rounded-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Haven & Key</span>
          </Link>

          <Link
            to="/haven/properties"
            className="px-6 py-3 border border-[#254D3C] text-[#254D3C] text-xs uppercase tracking-[0.18em] font-bold hover:bg-white transition-all inline-flex items-center gap-2 rounded-xs"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Browse Registry</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-[#E7DDCE] text-xs font-mono text-[#899687]">
          HAVEN & KEY &bull; Property &bull; Living &bull; Investment
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
