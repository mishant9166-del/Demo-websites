import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSearch } from '../components/home/HeroSearch';
import { FeaturedProperties } from '../components/home/FeaturedProperties';
import { NeighborhoodsTeaser } from '../components/home/NeighborhoodsTeaser';
import { AgencyMetrics } from '../components/home/AgencyMetrics';
import { PlusCircle, CheckCircle2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroSearch />
      <FeaturedProperties />
      <NeighborhoodsTeaser />
      <AgencyMetrics />

      {/* Seller Lead-Gen Banner */}
      <section className="py-20 sm:py-28 bg-[#254D3C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#E7DDCE] font-semibold block">
                Property Representation
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                Thinking of selling or leasing your property?
              </h2>
              <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed max-w-2xl">
                We represent exceptional homes to a curated international network of qualified buyers and corporate tenants. Gain confidential market valuations, tailored architectural photography, and discreet advisory.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#E7DDCE] font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#899687]" />
                  <span>Confidential Advisory</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#899687]" />
                  <span>Curated Network</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#899687]" />
                  <span>Zero Public Spam</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/haven/sell-your-property"
                className="px-8 py-4 bg-[#FAF9F5] text-[#254D3C] text-xs uppercase tracking-[0.18em] font-bold hover:bg-white transition-all shadow-md flex items-center gap-2 rounded-xs"
              >
                <PlusCircle className="w-4 h-4" />
                <span>List Your Property</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
