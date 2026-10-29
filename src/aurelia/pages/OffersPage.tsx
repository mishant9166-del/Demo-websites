import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, Shield, CalendarCheck } from 'lucide-react';
import { AURELIA_OFFERS } from '../data/offers';
import { AURELIA_STAYS } from '../data/stays';

export const OffersPage: React.FC = () => {
  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* Editorial Header */}
      <section className="bg-[#173D32] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5BE91] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Curated Escapes & Inclusions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F8F5EF] leading-tight max-w-3xl mb-4">
            Special Retreat Offers & Journeys
          </h1>
          <p className="text-base sm:text-lg text-[#F8F5EF]/80 font-light max-w-2xl leading-relaxed">
            Thoughtfully packaged stays pairing boutique accommodation with our most sought-after spa therapies, dining rituals, and destination experiences.
          </p>
        </div>
      </section>

      {/* Offers Catalog */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {AURELIA_OFFERS.map((offer, idx) => {
            const applicableStayItems = AURELIA_STAYS.filter((s) =>
              offer.applicableStays.includes(s.slug)
            );
            const isEven = idx % 2 === 1;

            return (
              <div
                key={offer.slug}
                className="bg-white rounded-xs border border-[#D5BE91]/35 overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Photo Column */}
                  <div className={`lg:col-span-6 relative min-h-[350px] lg:min-h-[480px] ${isEven ? 'lg:order-2' : ''}`}>
                    <img
                      src={offer.heroImage}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#173D32]/90 backdrop-blur-xs text-[#D5BE91] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-xs border border-[#D5BE91]/30">
                      {offer.discountBadge}
                    </div>
                  </div>

                  {/* Body Column */}
                  <div className={`lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="text-xs text-[#B8B0A2] uppercase tracking-wider font-medium mb-2">
                        {applicableStayItems.map((s) => s.name).join(' & ')}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-serif text-[#173D32] mb-2 leading-snug">
                        {offer.title}
                      </h2>

                      <p className="text-xs uppercase tracking-wider text-[#D5BE91] font-semibold mb-4">
                        {offer.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#292B27]/80 font-light leading-relaxed mb-6">
                        {offer.packageDescription}
                      </p>

                      {/* Package Inclusions */}
                      <div className="space-y-2 mb-6">
                        <span className="text-[10px] uppercase font-bold text-[#173D32] tracking-wider block mb-2">
                          Package Inclusions:
                        </span>
                        {offer.inclusions.map((inc, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#292B27]/85">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#173D32] shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>

                      {/* Clear Terms */}
                      <div className="p-3 bg-[#F8F5EF] rounded-xs text-[11px] text-[#292B27]/65 space-y-1">
                        <span className="font-semibold text-[#173D32] uppercase tracking-wider block text-[10px]">
                          Package Terms:
                        </span>
                        {offer.terms.map((term, tIdx) => (
                          <div key={tIdx}>&bull; {term}</div>
                        ))}
                      </div>
                    </div>

                    {/* Footer / Actions */}
                    <div className="pt-6 border-t border-[#D5BE91]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
                      <div>
                        <span className="text-[10px] uppercase text-[#B8B0A2] block">
                          Indicative Demo Rate
                        </span>
                        <span className="text-xl font-serif font-bold text-[#173D32]">
                          {offer.indicativePriceFormatted}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          to={`/aurelia/booking?staySlug=${offer.applicableStays[0]}`}
                          className="px-6 py-2.5 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs transition-colors flex items-center gap-2"
                        >
                          <CalendarCheck className="w-3.5 h-3.5 text-[#D5BE91]" />
                          <span>Book This Package</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Transparency Notice */}
        <div className="mt-16 p-6 bg-white rounded-xs border border-[#D5BE91]/30 flex items-start gap-3">
          <Shield className="w-5 h-5 text-[#173D32] shrink-0 mt-0.5" />
          <p className="text-xs text-[#292B27]/70 font-light leading-relaxed">
            All Aurelia packages and rates presented here are illustrative demonstration models designed to showcase luxury guest journeys. No false scarcity countdowns, fake timer tickers, or deceptive claims are used anywhere on this website.
          </p>
        </div>
      </section>
    </div>
  );
};
