import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Sparkles } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-md w-full text-center bg-white border border-[#E4DED4] rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#F0E9DF] text-[#38473A] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 stroke-[1.5]" />
        </div>

        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B77962] block mb-2">
          PAGE NOT FOUND · 404
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#292A27] font-normal mb-3">
          This path has drifted.
        </h1>

        <p className="text-xs sm:text-sm text-[#77766F] leading-relaxed mb-8 font-light">
          The page or consultation record you are searching for does not exist or has been relocated within the DERMORA clinic experience.
        </p>

        <div className="space-y-3">
          <Link
            to="/dermora"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#38473A] text-white text-xs font-semibold rounded-full hover:bg-[#292A27] transition shadow-sm"
          >
            <Home className="w-4 h-4" />
            Return to DERMORA Home
          </Link>

          <Link
            to="/dermora/treatments"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#FAF7F2] text-[#292A27] border border-[#E4DED4] text-xs font-semibold rounded-full hover:bg-[#F0E9DF] transition"
          >
            <Sparkles className="w-4 h-4 text-[#B77962]" />
            Explore All Treatments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
