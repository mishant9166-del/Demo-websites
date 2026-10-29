import React from 'react';
import { Link } from 'react-router-dom';
import { HAVEN_NEIGHBORHOODS } from '../data/neighborhoods';
import { HAVEN_PROPERTIES } from '../data/properties';
import { ArrowUpRight, MapPin, ShieldCheck } from 'lucide-react';

export const NeighborhoodsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#899687] font-semibold block">
            Regional Enclave Directory
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292D2A]">
            Neighborhood Guides
          </h1>
          <p className="text-sm sm:text-base text-[#292D2A]/75 font-sans leading-relaxed">
            A property decision is fundamentally a choice of daily lifestyle rhythm. Explore our curated editorial guides to the architectural character, cafe avenues, and residential communities of India’s most coveted postal codes.
          </p>
        </div>

        {/* 4 Neighborhood Full Cards */}
        <div className="space-y-16">
          {HAVEN_NEIGHBORHOODS.map((neigh, index) => {
            const count = HAVEN_PROPERTIES.filter(
              (p) => p.neighborhoodSlug === neigh.slug
            ).length;

            return (
              <div
                key={neigh.id}
                className="bg-white border border-[#E7DDCE] overflow-hidden group shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Visual Image */}
                <div
                  className={`lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#E7DDCE] ${
                    index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={neigh.heroImage}
                    alt={neigh.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-xs font-mono font-bold text-[#254D3C] border border-[#E7DDCE] uppercase tracking-wider">
                    {neigh.city}
                  </div>
                </div>

                {/* Content Dossier */}
                <div
                  className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6 ${
                    index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#899687]">
                      <MapPin className="w-3.5 h-3.5 text-[#254D3C]" />
                      <span>{neigh.city}, India</span>
                      <span>&bull;</span>
                      <span>{count} Represented Properties</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#292D2A] group-hover:text-[#254D3C] transition-colors">
                      <Link to={`/haven/neighborhoods/${neigh.slug}`}>{neigh.name}</Link>
                    </h2>

                    <p className="font-serif italic text-base text-[#254D3C]">
                      “{neigh.tagline}”
                    </p>

                    <p className="text-xs sm:text-sm text-[#292D2A]/80 font-sans leading-relaxed line-clamp-3">
                      {neigh.overview}
                    </p>

                    {/* Vibe & Popular types */}
                    <div className="pt-2 border-t border-[#E7DDCE] space-y-2 text-xs font-sans">
                      <div>
                        <span className="font-mono text-[10px] text-[#899687] uppercase tracking-wider block">
                          Atmosphere & Vibe:
                        </span>
                        <span className="text-[#292D2A]/90 font-medium">{neigh.vibe}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E7DDCE] flex items-center justify-between">
                    <span className="text-xs text-[#899687] font-mono">
                      {neigh.popularPropertyTypes.slice(0, 2).join(' &bull; ')}
                    </span>

                    <Link
                      to={`/haven/neighborhoods/${neigh.slug}`}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] font-bold text-[#254D3C] hover:text-[#1E3F31]"
                    >
                      <span>Explore Guide</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="p-4 bg-white border border-[#E7DDCE] flex items-center gap-3 text-xs text-[#292D2A]/70 font-sans">
          <ShieldCheck className="w-4 h-4 text-[#899687] shrink-0" />
          <span>
            <strong>Illustrative Content:</strong> Neighborhood guides represent architectural and cultural observations for demonstration purposes. They do not constitute official municipal zoning or school catchment certifications.
          </span>
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodsPage;
