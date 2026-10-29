import React from 'react';

export const AgencyMetrics: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#E7DDCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E7DDCE]">
          <div className="pt-4 sm:pt-0 sm:px-6 space-y-2">
            <span className="text-3xl sm:text-5xl font-serif font-bold text-[#254D3C] block">
              ₹1,400+ Cr
            </span>
            <span className="text-xs uppercase tracking-wider font-mono text-[#899687] block font-semibold">
              Advisory Volume
            </span>
            <p className="text-xs text-[#292D2A]/70 font-sans leading-relaxed">
              Confidential residential and commercial property acquisitions represented.
            </p>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-6 space-y-2">
            <span className="text-3xl sm:text-5xl font-serif font-bold text-[#254D3C] block">
              100%
            </span>
            <span className="text-xs uppercase tracking-wider font-mono text-[#899687] block font-semibold">
              Title Due Diligence
            </span>
            <p className="text-xs text-[#292D2A]/70 font-sans leading-relaxed">
              Every represented listing undergoes rigorous encumbrance and title verification.
            </p>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-6 space-y-2">
            <span className="text-3xl sm:text-5xl font-serif font-bold text-[#254D3C] block">
              4 Hubs
            </span>
            <span className="text-xs uppercase tracking-wider font-mono text-[#899687] block font-semibold">
              Regional Desks
            </span>
            <p className="text-xs text-[#292D2A]/70 font-sans leading-relaxed">
              Active on-ground advisors across Mumbai, New Delhi, Bengaluru, and North Goa.
            </p>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-6 space-y-2">
            <span className="text-3xl sm:text-5xl font-serif font-bold text-[#254D3C] block">
              18 Days
            </span>
            <span className="text-xs uppercase tracking-wider font-mono text-[#899687] block font-semibold">
              Average Match Speed
            </span>
            <p className="text-xs text-[#292D2A]/70 font-sans leading-relaxed">
              Targeted matchmaking connecting pre-qualified buyers to off-market homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
