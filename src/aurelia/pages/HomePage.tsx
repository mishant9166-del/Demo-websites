import React from 'react';
import { HeroBookingSearch } from '../components/home/HeroBookingSearch';
import { DestinationsShowcase } from '../components/home/DestinationsShowcase';
import { StaysShowcase } from '../components/home/StaysShowcase';
import { ExperiencesTeaser } from '../components/home/ExperiencesTeaser';
import { PhilosophySection } from '../components/home/PhilosophySection';
import { Link } from 'react-router-dom';
import { Sparkles, CalendarCheck, Shield } from 'lucide-react';
import { AURELIA_OFFERS } from '../data/offers';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#F8F5EF]">
      {/* 1. Hero with integrated booking search */}
      <HeroBookingSearch />

      {/* 2. Destination Collections Showcase */}
      <DestinationsShowcase />

      {/* 3. Featured Stays Showcase */}
      <StaysShowcase />

      {/* 4. Special Offers Highlight Banner */}
      <section className="py-20 bg-[#122A22] text-[#F8F5EF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5BE91] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curated Escapes & Inclusions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F8F5EF] leading-snug">
                Seasonal Journeys & Special Retreat Packages
              </h2>
              <p className="mt-3 text-sm text-[#F8F5EF]/80 font-light leading-relaxed">
                Enjoy complimentary dining credits, private dhow sails, and personalized Ayurvedic consultations with our bespoke retreat offers.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/aurelia/offers"
                className="px-6 py-3.5 bg-[#D5BE91] text-[#173D32] hover:bg-[#E3D0A8] font-semibold text-xs uppercase tracking-[0.2em] rounded-xs shadow-md transition-all flex items-center gap-2"
              >
                <span>View All {AURELIA_OFFERS.length} Offers</span>
                <span>&rarr;</span>
              </Link>
              <Link
                to="/aurelia/booking"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-[#F8F5EF] border border-white/25 font-semibold text-xs uppercase tracking-[0.2em] rounded-xs transition-all flex items-center gap-2"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-[#D5BE91]" />
                <span>Reserve Directly</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Resort Experiences Showcase */}
      <ExperiencesTeaser />

      {/* 6. Philosophy & Architectural Integrity */}
      <PhilosophySection />

      {/* 7. Reassurance / Portfolio Demonstration Disclaimer */}
      <section className="py-12 bg-[#FAF7F2] border-t border-[#D5BE91]/25">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-[#173D32] font-semibold uppercase tracking-wider mb-2">
            <Shield className="w-4 h-4 text-[#D5BE91]" />
            <span>Demonstration Portfolio Guarantee</span>
          </div>
          <p className="text-xs text-[#292B27]/70 font-light leading-relaxed">
            AURELIA RETREATS is a fictional boutique hospitality brand designed for frontend engineering demonstration.
            Dates, mock stays, room configurations, and local experiences are presented for visual and functional portfolio purposes.
          </p>
        </div>
      </section>
    </div>
  );
};
