import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Calendar, Stethoscope } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 text-center">
      <div className="max-w-lg mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#F0D9CA] text-[#C76F52] flex items-center justify-center mx-auto shadow-sm">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
            aria-hidden="true"
          >
            <ellipse cx="12" cy="15" rx="4" ry="3.5" />
            <circle cx="7.5" cy="9.5" r="2" />
            <circle cx="10.5" cy="6.5" r="1.8" />
            <circle cx="13.5" cy="6.5" r="1.8" />
            <circle cx="16.5" cy="9.5" r="2" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C76F52]">
            Error 404 • Page Not Found
          </span>
          <h1 className="font-fraunces text-4xl sm:text-5xl font-bold text-[#343D30]">
            Looks like this trail wandered off.
          </h1>
          <p className="text-sm sm:text-base text-[#343D30]/80 max-w-md mx-auto leading-relaxed">
            We couldn&apos;t find the veterinary page or article you were looking for. Let&apos;s guide you back to familiar grounds.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/paw-whisker"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#C76F52] text-white text-sm font-bold shadow-sm hover:bg-[#b05d42] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Clinic Home</span>
          </Link>
          <Link
            to="/paw-whisker/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-[#E8DFD1] text-sm font-semibold text-[#343D30] hover:bg-[#F0D9CA]/40 transition-colors"
          >
            <Stethoscope className="w-4 h-4 text-[#82947A]" />
            <span>Our Services</span>
          </Link>
          <Link
            to="/paw-whisker/book-visit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#343D30] text-white text-sm font-semibold hover:bg-[#232920] transition-colors"
          >
            <Calendar className="w-4 h-4 text-[#F0D9CA]" />
            <span>Book Visit</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-[#E8DFD1]">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#82947A] hover:text-[#343D30]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
