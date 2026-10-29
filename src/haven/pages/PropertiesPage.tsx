import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HAVEN_PROPERTIES } from '../data/properties';
import { PropertyCard } from '../components/properties/PropertyCard';
import { PropertySearchFilter } from '../components/properties/PropertySearchFilter';
import type { PropertyFilterParams, PropertyType, ListingPurpose } from '../types/property';
import { Building2, RotateCcw } from 'lucide-react';

export const PropertiesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Parse filters from URL search params
  const filters: PropertyFilterParams = useMemo(() => {
    const purpose = searchParams.get('purpose') as ListingPurpose | 'all' | null;
    const type = searchParams.get('type') as PropertyType | 'all' | null;
    const bedrooms = searchParams.get('bedrooms');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const query = searchParams.get('query') || '';
    const sortBy = searchParams.get('sortBy') as PropertyFilterParams['sortBy'] || 'newest';

    return {
      purpose: purpose || 'all',
      type: type || 'all',
      bedrooms: bedrooms ? (bedrooms === 'all' ? 'all' : Number(bedrooms)) : 'all',
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      query,
      sortBy,
    };
  }, [searchParams]);

  const updateFilters = (updated: Partial<PropertyFilterParams>) => {
    const next = new URLSearchParams(searchParams);

    Object.entries(updated).forEach(([key, val]) => {
      if (val === undefined || val === 'all' || val === '') {
        next.delete(key);
      } else {
        next.set(key, String(val));
      }
    });

    setSearchParams(next);
  };

  const resetFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  // Filter & sort property listings
  const filteredProperties = useMemo(() => {
    return HAVEN_PROPERTIES.filter((prop) => {
      // Purpose (buy / rent)
      if (filters.purpose && filters.purpose !== 'all' && prop.purpose !== filters.purpose) {
        return false;
      }
      // Property Type
      if (filters.type && filters.type !== 'all' && prop.type !== filters.type) {
        return false;
      }
      // Bedrooms
      if (filters.bedrooms && filters.bedrooms !== 'all') {
        const requiredBeds = Number(filters.bedrooms);
        if (prop.bedrooms < requiredBeds) return false;
      }
      // Min Price
      if (filters.minPrice && prop.price < filters.minPrice) {
        return false;
      }
      // Max Price
      if (filters.maxPrice && prop.price > filters.maxPrice) {
        return false;
      }
      // Query search across title, location, neighborhood, city, description
      if (filters.query && filters.query.trim()) {
        const q = filters.query.toLowerCase().trim();
        const matchesTitle = prop.title.toLowerCase().includes(q);
        const matchesLoc = prop.location.toLowerCase().includes(q);
        const matchesCity = prop.city.toLowerCase().includes(q);
        const matchesDesc = prop.description.toLowerCase().includes(q);
        const matchesAmenity = prop.amenities.some((a) => a.toLowerCase().includes(q));
        if (!matchesTitle && !matchesLoc && !matchesCity && !matchesDesc && !matchesAmenity) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'area-desc') return b.areaSqFt - a.areaSqFt;
      // 'newest' default: featured first, then new
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filters]);

  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#899687] font-semibold block">
            The Property Registry &bull; Verified Listings
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292D2A]">
            Explore Available Properties
          </h1>
          <p className="text-sm sm:text-base text-[#292D2A]/75 font-sans leading-relaxed">
            Browse contemporary apartments, independent villas, skyline penthouses, and commercial spaces across Mumbai, Delhi, Bengaluru, and Goa.
          </p>
        </div>

        {/* Functional Search Filter Console */}
        <PropertySearchFilter
          filters={filters}
          onFilterChange={updateFilters}
          onReset={resetFilters}
          totalResults={filteredProperties.length}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {/* Results Render */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white border border-[#E7DDCE] p-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E7DDCE] flex items-center justify-center mx-auto text-[#899687]">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#292D2A]">
              No matching properties found
            </h3>
            <p className="text-xs text-[#292D2A]/70 max-w-md mx-auto font-sans leading-relaxed">
              We couldn’t find any properties matching your exact search criteria. Try broadening your price budget or clearing specific filters.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={resetFilters}
                className="px-6 py-2.5 bg-[#254D3C] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#1E3F31] transition-colors inline-flex items-center gap-2 rounded-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          </div>
        ) : (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-6'
            }
          >
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} viewMode={viewMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;
