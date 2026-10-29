import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const EnquiryBanner: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#292B28] text-[#F7F6F2] relative overflow-hidden">
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <span className="text-[11px] uppercase tracking-[0.28em] font-sans font-semibold text-[#C9BBA6] block">
          Initiate a Dialogue
        </span>

        <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#F7F6F2] leading-tight tracking-tight">
          Have a space in mind?
        </h2>

        <p className="text-base sm:text-lg text-[#F7F6F2]/75 max-w-2xl mx-auto font-sans leading-relaxed">
          Whether you are planning a private villa from the ground up, reimagining a high-floor urban apartment, or creating an intimate hospitality retreat, we invite you to share your location, timeline, and aspirations.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-5">
          <Link
            to="/forma/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F7F6F2] text-[#292B28] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E9E4DA] transition-all group"
          >
            <span>Discuss a Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            to="/forma/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#F7F6F2]/30 text-[#F7F6F2] text-xs uppercase tracking-[0.18em] font-medium hover:bg-white/10 transition-colors"
          >
            <span>Explore Portfolio</span>
          </Link>
        </div>

        <p className="text-[11px] text-[#F7F6F2]/40 pt-4">
          * Consultations are conducted in our New Delhi atelier or digitally for interstate and international commissions.
        </p>
      </div>
    </section>
  );
};
