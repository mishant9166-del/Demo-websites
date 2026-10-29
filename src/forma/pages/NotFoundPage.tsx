import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-32 bg-[#F7F6F2] min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.28em] text-[#777A62] block">
            Error 404 &bull; Unmapped Architectural Coordinate
          </span>
          <h1 className="text-5xl sm:text-7xl font-serif font-bold text-[#292B28] leading-tight">
            Space Not Found.
          </h1>
          <p className="font-serif text-lg sm:text-xl text-[#292B28]/80 leading-relaxed max-w-lg mx-auto italic">
            “The room, elevation, or journal article you are searching for does not exist within the current Forma Studio archive.”
          </p>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/forma"
            className="px-6 py-3 bg-[#292B28] text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#292B28]/90 transition-all inline-flex items-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Studio</span>
          </Link>

          <Link
            to="/forma/projects"
            className="px-6 py-3 border border-[#292B28] text-[#292B28] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-white transition-all inline-flex items-center gap-2"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Browse Portfolio</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-[#E2DDD5] text-xs font-mono text-[#777A62]">
          FORMA STUDIO &bull; Interior Architecture & Design
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
