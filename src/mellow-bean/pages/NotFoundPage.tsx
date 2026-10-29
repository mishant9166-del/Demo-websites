import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ArrowLeft, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-32 bg-[#F8F2E7] min-h-[75vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-8 sm:p-12 shadow-sm text-center space-y-6">
        {/* Coffee cup illustration */}
        <div className="relative mx-auto w-24 h-24 rounded-full bg-[#F0D27A]/25 border border-[#F0D27A] flex items-center justify-center text-[#382820]">
          <Coffee className="w-12 h-12 text-[#382820]" />
          <span className="absolute -bottom-1 -right-1 bg-[#382820] text-[#F0D27A] text-[10px] font-bold px-2 py-0.5 rounded-full">
            404
          </span>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B77A4A]">
            Page Not Found
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#382820]">
            Spilled Coffee?
          </h1>
          <p className="text-xs sm:text-sm text-[#382820]/75 leading-relaxed">
            The page you are looking for seems to have vanished or been moved off our counter. Let’s get you back to a warm cup.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            to="/mellow-bean"
            className="w-full py-3.5 px-6 rounded-full bg-[#382820] text-[#FFFEFA] font-medium text-xs sm:text-sm hover:bg-[#382820]/90 transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 text-[#F0D27A]" />
            <span>Return to Café Homepage</span>
          </Link>

          <Link
            to="/mellow-bean/menu"
            className="w-full py-3.5 px-6 rounded-full bg-[#F8F2E7] text-[#382820] border border-[#EADFCF] font-medium text-xs sm:text-sm hover:bg-[#F0D27A] hover:border-[#F0D27A] transition-all flex items-center justify-center gap-2"
          >
            <Coffee className="w-4 h-4 text-[#B77A4A]" />
            <span>Explore The Menu</span>
          </Link>
        </div>

        <div className="pt-2 border-t border-[#EADFCF]/60">
          <Link
            to="/"
            className="text-xs text-[#382820]/60 hover:text-[#382820] transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Portfolio Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
