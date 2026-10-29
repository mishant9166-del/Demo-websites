import React from 'react';
import { Link } from 'react-router-dom';
import { HAVEN_NEIGHBORHOODS } from '../../data/neighborhoods';
import { ArrowUpRight } from 'lucide-react';

export const NeighborhoodsTeaser: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#E7DDCE]/30 border-t border-[#E7DDCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#899687] font-semibold block">
              Where to Live & Invest
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#292D2A]">
              Explore Signature Enclaves
            </h2>
            <p className="text-sm text-[#292D2A]/75 font-sans leading-relaxed">
              In-depth guides to Mumbai’s coastal promenades, Delhi’s diplomatic green belts, Bengaluru’s tech corridors, and Goa’s tropical valleys.
            </p>
          </div>

          <Link
            to="/haven/neighborhoods"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-bold text-[#254D3C] hover:text-[#1E3F31] transition-colors shrink-0"
          >
            <span>All Neighborhood Guides</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Neighborhoods Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HAVEN_NEIGHBORHOODS.map((neigh) => (
            <Link
              key={neigh.id}
              to={`/haven/neighborhoods/${neigh.slug}`}
              className="bg-white border border-[#E7DDCE] hover:border-[#254D3C] transition-all duration-300 group overflow-hidden flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF9F5] relative">
                  <img
                    src={neigh.heroImage}
                    alt={neigh.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF9F5]/90 px-2.5 py-1 text-[10px] font-mono font-semibold text-[#254D3C] uppercase tracking-wider border border-[#E7DDCE]">
                    {neigh.city}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-bold text-xl text-[#292D2A] group-hover:text-[#254D3C] transition-colors">
                    {neigh.name}
                  </h3>
                  <p className="text-xs text-[#292D2A]/70 font-sans leading-relaxed line-clamp-2">
                    {neigh.tagline}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#E7DDCE]/60 mt-2 flex items-center justify-between text-xs text-[#254D3C] font-semibold uppercase tracking-wider">
                <span>View Enclave</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
