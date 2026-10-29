import React from 'react';
import { Link } from 'react-router-dom';
import { HAVEN_PROPERTIES } from '../../data/properties';
import { PropertyCard } from '../properties/PropertyCard';
import { ArrowRight } from 'lucide-react';

export const FeaturedProperties: React.FC = () => {
  const featured = HAVEN_PROPERTIES.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-[#E7DDCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#899687] font-semibold block">
              Curated Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#292D2A]">
              Featured Residencies & Assets
            </h2>
            <p className="text-sm text-[#292D2A]/75 font-sans leading-relaxed">
              Exclusively represented architectural homes, sea-facing penthouses, and prime commercial floors.
            </p>
          </div>

          <Link
            to="/haven/properties"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-bold text-[#254D3C] hover:text-[#1E3F31] transition-colors shrink-0"
          >
            <span>View All Properties ({HAVEN_PROPERTIES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Featured Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((prop) => (
            <PropertyCard key={prop.id} property={prop} viewMode="grid" />
          ))}
        </div>
      </div>
    </section>
  );
};
