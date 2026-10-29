import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Bed, Users } from 'lucide-react';
import { AURELIA_STAYS } from '../../data/stays';

export const StaysShowcase: React.FC = () => {
  const featuredStays = AURELIA_STAYS.slice(0, 3);

  return (
    <section className="py-24 bg-white border-y border-[#D5BE91]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#173D32] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D5BE91]" />
            <span>Curated Sanctuaries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#173D32] leading-tight">
            Exceptional sanctuaries, <span className="italic font-normal">individual character.</span>
          </h2>
          <p className="mt-4 text-base text-[#292B27]/75 font-light leading-relaxed">
            Every property in the Aurelia collection is architecturally bespoke—designed with local craft, sustainable regional stone, and intuitive hospitality.
          </p>
        </div>

        {/* Featured Stays Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredStays.map((stay) => (
            <div
              key={stay.slug}
              className="group flex flex-col bg-[#F8F5EF] rounded-xs overflow-hidden border border-[#D5BE91]/30 hover:border-[#D5BE91] transition-all duration-300 hover:shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={stay.heroImage}
                  alt={stay.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#173D32]/90 backdrop-blur-xs text-[#D5BE91] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-xs border border-[#D5BE91]/30">
                  {stay.propertyType}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#173D32] text-xs font-serif font-bold px-3 py-1 rounded-xs shadow-xs">
                  {stay.startingPriceFormatted}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-[#B8B0A2] uppercase tracking-wider font-medium mb-1">
                    {stay.location}
                  </div>
                  <h3 className="text-2xl font-serif text-[#173D32] group-hover:text-[#122A22] mb-2">
                    {stay.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292B27]/80 font-light line-clamp-2 mb-4 leading-relaxed">
                    {stay.shortDescription}
                  </p>

                  <div className="flex items-center gap-4 py-3 border-t border-b border-[#D5BE91]/20 text-xs text-[#292B27]/70 font-medium mb-4">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#173D32]" />
                      {stay.guestCapacity}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-[#173D32]" />
                      Boutique Suites
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    to={`/aurelia/stays/${stay.slug}`}
                    className="text-xs uppercase tracking-wider font-semibold text-[#173D32] hover:text-[#D5BE91] transition-colors flex items-center gap-1"
                  >
                    <span>View Property</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/aurelia/booking?staySlug=${stay.slug}`}
                    className="px-4 py-2 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-[11px] uppercase tracking-wider font-semibold rounded-xs transition-colors"
                  >
                    Reserve Stay
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to see all stays */}
        <div className="mt-14 text-center">
          <Link
            to="/aurelia/stays"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#173D32] text-[#F8F5EF] hover:bg-[#122A22] text-xs uppercase tracking-[0.2em] font-semibold rounded-xs shadow-md transition-all group"
          >
            <span>Explore All 6 Stays & Suites</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#D5BE91]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
