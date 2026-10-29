import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F7F7F4] px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#2447E8] text-white flex items-center justify-center mx-auto shadow-md">
          <ShoppingBag className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase font-mono tracking-[0.25em] font-bold text-[#FF704F] block">
          404 &bull; Object Not Located
        </span>

        <h1 className="text-3xl sm:text-4xl font-black text-[#252525]">
          This piece has moved or no longer exists.
        </h1>

        <p className="text-xs sm:text-sm text-[#777872] font-light leading-relaxed">
          The link you followed may be expired or the object has been archived from our studio catalog.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/object"
            className="w-full sm:w-auto px-6 py-3 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-xs uppercase font-bold tracking-widest rounded-xs shadow-xs transition-colors"
          >
            Store Homepage
          </Link>

          <Link
            to="/object/shop"
            className="w-full sm:w-auto px-6 py-3 bg-white border border-[#E5E5E0] hover:border-[#252525] text-[#252525] text-xs uppercase font-bold tracking-widest rounded-xs transition-colors flex items-center justify-center gap-2"
          >
            <span>Browse All Objects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
