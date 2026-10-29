import React from 'react';
import { Search, RotateCcw, LayoutGrid, List } from 'lucide-react';
import type { PropertyFilterParams, PropertyType } from '../../types/property';

interface PropertySearchFilterProps {
  filters: PropertyFilterParams;
  onFilterChange: (updated: Partial<PropertyFilterParams>) => void;
  onReset: () => void;
  totalResults: number;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  showPurposeTabs?: boolean;
}

const PROPERTY_TYPES: (PropertyType | 'all')[] = [
  'all',
  'Apartment',
  'Villa',
  'Penthouse',
  'Townhouse',
  'Family Home',
  'Commercial Office',
  'Retail Space',
];

export const PropertySearchFilter: React.FC<PropertySearchFilterProps> = ({
  filters,
  onFilterChange,
  onReset,
  totalResults,
  viewMode,
  onViewModeChange,
  showPurposeTabs = true,
}) => {
  const hasActiveFilters =
    Boolean(filters.query) ||
    (filters.purpose && filters.purpose !== 'all') ||
    (filters.type && filters.type !== 'all') ||
    (filters.bedrooms && filters.bedrooms !== 'all') ||
    Boolean(filters.minPrice) ||
    Boolean(filters.maxPrice);

  return (
    <div className="bg-white border border-[#E7DDCE] p-5 sm:p-6 space-y-6 shadow-2xs">
      {/* Top Row: Purpose Tabs & Search Input */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Buy / Rent / All Selector */}
        {showPurposeTabs && (
          <div className="flex items-center border border-[#E7DDCE] rounded-sm p-1 bg-[#FAF9F5] shrink-0">
            {(['all', 'buy', 'rent'] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => onFilterChange({ purpose: p })}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors ${
                  filters.purpose === p
                    ? 'bg-[#254D3C] text-white shadow-xs'
                    : 'text-[#292D2A]/70 hover:text-[#254D3C]'
                }`}
              >
                {p === 'all' ? 'All Properties' : p === 'buy' ? 'For Sale' : 'For Rent'}
              </button>
            ))}
          </div>
        )}

        {/* Search Keyword Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#899687] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={filters.query || ''}
            onChange={(e) => onFilterChange({ query: e.target.value })}
            placeholder="Search by city, neighborhood, or keyword (e.g. Bandra, Pool, Sea Face)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] placeholder-[#292D2A]/40 focus:outline-none focus:border-[#254D3C]"
          />
        </div>
      </div>

      {/* Middle Row: Multi-Dropdown Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Property Type Dropdown */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider font-mono text-[#899687] mb-1.5">
            Property Type
          </label>
          <select
            value={filters.type || 'all'}
            onChange={(e) =>
              onFilterChange({
                type: e.target.value as PropertyType | 'all',
              })
            }
            className="w-full px-3 py-2 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] focus:outline-none focus:border-[#254D3C]"
          >
            <option value="all">All Types</option>
            {PROPERTY_TYPES.filter((t) => t !== 'all').map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms Dropdown */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider font-mono text-[#899687] mb-1.5">
            Bedrooms
          </label>
          <select
            value={filters.bedrooms || 'all'}
            onChange={(e) =>
              onFilterChange({
                bedrooms: e.target.value === 'all' ? 'all' : Number(e.target.value),
              })
            }
            className="w-full px-3 py-2 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] focus:outline-none focus:border-[#254D3C]"
          >
            <option value="all">Any Bedrooms</option>
            <option value="1">1+ Bedrooms</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
            <option value="5">5+ Bedrooms</option>
          </select>
        </div>

        {/* Min Price Dropdown */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider font-mono text-[#899687] mb-1.5">
            Min Price
          </label>
          <select
            value={filters.minPrice || ''}
            onChange={(e) =>
              onFilterChange({
                minPrice: e.target.value ? Number(e.target.value) : undefined,
              })
            }
            className="w-full px-3 py-2 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] focus:outline-none focus:border-[#254D3C]"
          >
            <option value="">No Minimum</option>
            <option value="50000">₹50,000 / mo</option>
            <option value="100000">₹1.00 Lakh / mo</option>
            <option value="200000">₹2.00 Lakh / mo</option>
            <option value="30000000">₹3.00 Crores</option>
            <option value="50000000">₹5.00 Crores</option>
            <option value="100000000">₹10.00 Crores</option>
          </select>
        </div>

        {/* Max Price Dropdown */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider font-mono text-[#899687] mb-1.5">
            Max Price
          </label>
          <select
            value={filters.maxPrice || ''}
            onChange={(e) =>
              onFilterChange({
                maxPrice: e.target.value ? Number(e.target.value) : undefined,
              })
            }
            className="w-full px-3 py-2 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] focus:outline-none focus:border-[#254D3C]"
          >
            <option value="">No Maximum</option>
            <option value="150000">₹1.50 Lakh / mo</option>
            <option value="300000">₹3.00 Lakh / mo</option>
            <option value="50000000">₹5.00 Crores</option>
            <option value="100000000">₹10.00 Crores</option>
            <option value="200000000">₹20.00 Crores</option>
            <option value="300000000">₹30.00 Crores</option>
          </select>
        </div>
      </div>

      {/* Bottom Bar: Results Count, Sort, Reset, View Mode */}
      <div className="pt-4 border-t border-[#E7DDCE] flex flex-wrap items-center justify-between gap-4">
        {/* Results Count & Reset Button */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-serif font-bold text-[#292D2A]">
            Showing <span className="text-[#254D3C]">{totalResults}</span> {totalResults === 1 ? 'Property' : 'Properties'}
          </span>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-[#254D3C] bg-[#FAF9F5] border border-[#E7DDCE] hover:bg-[#E7DDCE] transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Sort & Grid/List View Controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-sans">
            <span className="text-[#899687] text-[11px] uppercase tracking-wider font-mono">Sort:</span>
            <select
              value={filters.sortBy || 'newest'}
              onChange={(e) =>
                onFilterChange({
                  sortBy: e.target.value as PropertyFilterParams['sortBy'],
                })
              }
              className="px-2.5 py-1.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] focus:outline-none focus:border-[#254D3C]"
            >
              <option value="newest">Featured & Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="area-desc">Largest Area (Sq Ft)</option>
            </select>
          </div>

          {/* Grid vs List View Buttons */}
          <div className="flex items-center border border-[#E7DDCE] rounded-sm bg-[#FAF9F5] p-0.5">
            <button
              type="button"
              onClick={() => onViewModeChange('grid')}
              aria-label="Grid View"
              className={`p-1.5 rounded-xs transition-colors ${
                viewMode === 'grid' ? 'bg-[#254D3C] text-white shadow-xs' : 'text-[#899687] hover:text-[#292D2A]'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange('list')}
              aria-label="List View"
              className={`p-1.5 rounded-xs transition-colors ${
                viewMode === 'list' ? 'bg-[#254D3C] text-white shadow-xs' : 'text-[#899687] hover:text-[#292D2A]'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
