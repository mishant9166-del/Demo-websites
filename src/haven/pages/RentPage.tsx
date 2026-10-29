import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HAVEN_PROPERTIES } from '../data/properties';
import { PropertyCard } from '../components/properties/PropertyCard';
import { PropertySearchFilter } from '../components/properties/PropertySearchFilter';
import type { PropertyFilterParams } from '../types/property';
import { ArrowRight } from 'lucide-react';

export const RentPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<PropertyFilterParams>({
    purpose: 'rent',
    type: 'all',
    bedrooms: 'all',
    sortBy: 'newest',
  });

  const forRentProperties = useMemo(() => {
    return HAVEN_PROPERTIES.filter((p) => p.purpose === 'rent').filter((prop) => {
      if (filters.type && filters.type !== 'all' && prop.type !== filters.type) return false;
      if (filters.bedrooms && filters.bedrooms !== 'all') {
        if (prop.bedrooms < Number(filters.bedrooms)) return false;
      }
      if (filters.minPrice && prop.price < filters.minPrice) return false;
      if (filters.maxPrice && prop.price > filters.maxPrice) return false;
      if (filters.query && filters.query.trim()) {
        const q = filters.query.toLowerCase().trim();
        return (
          prop.title.toLowerCase().includes(q) ||
          prop.location.toLowerCase().includes(q) ||
          prop.city.toLowerCase().includes(q)
        );
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'area-desc') return b.areaSqFt - a.areaSqFt;
      return 0;
    });
  }, [filters]);

  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Tailored Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#899687] font-semibold block">
            Executive Leasing & Relocations &bull; Turn-Key Living
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292D2A]">
            Luxury Long-Term Rentals
          </h1>
          <p className="text-sm sm:text-base text-[#292D2A]/75 font-sans leading-relaxed">
            Curated fully furnished apartments, coastal garden villas, and urban penthouses designed for corporate relocations, remote entrepreneurs, and international families.
          </p>
        </div>

        {/* Filter Console without purpose tabs (locked to rent) */}
        <PropertySearchFilter
          filters={filters}
          onFilterChange={(updated) => setFilters((prev) => ({ ...prev, ...updated, purpose: 'rent' }))}
          onReset={() => setFilters({ purpose: 'rent', type: 'all', bedrooms: 'all', sortBy: 'newest' })}
          totalResults={forRentProperties.length}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          showPurposeTabs={false}
        />

        {/* Listings Grid */}
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-6'
          }
        >
          {forRentProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} viewMode={viewMode} />
          ))}
        </div>

        {/* Relocation Desk CTA */}
        <div className="p-8 sm:p-12 bg-white border border-[#E7DDCE] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-2xl text-[#292D2A]">
              Corporate & Expatriate Relocation Desk
            </h3>
            <p className="text-xs sm:text-sm text-[#292D2A]/75 font-sans">
              Need assistance structuring diplomatic leases, school catchment recommendations, or multi-year company contracts?
            </p>
          </div>
          <Link
            to="/haven/contact"
            className="px-6 py-3 bg-[#254D3C] text-white text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#1E3F31] transition-all shrink-0 flex items-center gap-2 rounded-xs"
          >
            <span>Contact Relocation Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RentPage;
