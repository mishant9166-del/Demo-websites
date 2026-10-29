import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LayoutGrid, List, SlidersHorizontal } from 'lucide-react';
import { STORE_PRODUCTS } from '../data/products';
import type { ProductCategory } from '../types/product';
import { ProductGrid } from '../components/products/ProductGrid';
import { FilterDrawer, type FilterState } from '../components/products/FilterDrawer';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initial params
  const initialCategory = (searchParams.get('category') as ProductCategory) || 'all';
  const initialFilter = searchParams.get('filter'); // 'new' | 'sale'

  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    priceRange: 'all',
    availability: 'all',
    color: 'all',
    sortBy: 'featured',
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleResetFilters = () => {
    setFilters({
      category: 'all',
      priceRange: 'all',
      availability: 'all',
      color: 'all',
      sortBy: 'featured',
    });
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    return STORE_PRODUCTS.filter((prod) => {
      // Category filter
      if (filters.category !== 'all' && prod.category !== filters.category) {
        return false;
      }
      // Special URL filters
      if (initialFilter === 'new' && !prod.isNew) {
        return false;
      }
      if (initialFilter === 'sale' && !prod.isSale) {
        return false;
      }
      // Price range
      if (filters.priceRange === 'under1000' && prod.priceINR >= 1000) return false;
      if (filters.priceRange === '1000to2500' && (prod.priceINR < 1000 || prod.priceINR > 2500))
        return false;
      if (filters.priceRange === 'above2500' && prod.priceINR <= 2500) return false;

      // Availability
      if (filters.availability === 'inStock' && !prod.inStock) return false;

      // Color
      if (filters.color !== 'all') {
        const hasColor = prod.colors.some((c) =>
          c.name.toLowerCase().includes(filters.color.toLowerCase())
        );
        if (!hasColor) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-low') return a.priceINR - b.priceINR;
      if (filters.sortBy === 'price-high') return b.priceINR - a.priceINR;
      if (filters.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [filters, initialFilter]);

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#F7F7F4] border-b border-[#E5E5E0] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-[#2447E8] block mb-2">
            The Complete Inventory
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#252525] mb-3">
            {initialFilter === 'new'
              ? 'New Arrivals'
              : initialFilter === 'sale'
              ? 'Special Offers & Archive'
              : 'Shop All Objects'}
          </h1>
          <p className="text-xs sm:text-sm text-[#777872] max-w-xl font-light leading-relaxed">
            Everyday carry, desktop instruments, tactile homewares, and thermal vessels. Filter by department, price, and materials.
          </p>
        </div>
      </section>

      {/* Main Catalog View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-start gap-10">
          {/* Filter Sidebar (Desktop) + Filter Drawer (Mobile) */}
          <FilterDrawer
            filters={filters}
            onChange={setFilters}
            onReset={handleResetFilters}
            isOpen={mobileFilterOpen}
            onClose={() => setMobileFilterOpen(false)}
            totalResults={filteredProducts.length}
          />

          {/* Main Product Column */}
          <div className="flex-1 min-w-0 space-y-6">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5E5E0]">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden px-3.5 py-2 bg-[#F7F7F4] border border-[#E5E5E0] text-xs font-bold text-[#252525] rounded-xs flex items-center gap-1.5"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#2447E8]" />
                  <span>Filters</span>
                </button>

                <span className="text-xs font-mono text-[#777872]">
                  Showing <strong className="text-[#252525]">{filteredProducts.length}</strong> of{' '}
                  {STORE_PRODUCTS.length} objects
                </span>
              </div>

              {/* Sorting & View Toggle */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <label className="text-[11px] uppercase font-bold tracking-wider text-[#777872] hidden sm:inline">
                    Sort:
                  </label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        sortBy: e.target.value as FilterState['sortBy'],
                      })
                    }
                    className="px-3 py-1.5 bg-[#F7F7F4] border border-[#E5E5E0] rounded-xs text-xs font-semibold text-[#252525] focus:outline-none focus:border-[#2447E8]"
                  >
                    <option value="featured">Featured Collection</option>
                    <option value="newest">Newest Arrivals</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>

                {/* Grid / List Switcher */}
                <div className="hidden sm:flex items-center border border-[#E5E5E0] rounded-xs bg-[#F7F7F4] p-0.5">
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    aria-label="Grid view"
                    className={`p-1.5 rounded-xs transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-white text-[#2447E8] shadow-xs'
                        : 'text-[#777872] hover:text-[#252525]'
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    aria-label="List view"
                    className={`p-1.5 rounded-xs transition-colors ${
                      viewMode === 'list'
                        ? 'bg-white text-[#2447E8] shadow-xs'
                        : 'text-[#777872] hover:text-[#252525]'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filter Chips */}
            {(filters.category !== 'all' ||
              filters.priceRange !== 'all' ||
              filters.color !== 'all' ||
              filters.availability !== 'all' ||
              initialFilter) && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[11px] font-mono text-[#777872]">Active Filters:</span>
                {filters.category !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#2447E8]/10 text-[#2447E8] text-xs font-semibold rounded-xs">
                    Category: {filters.category}
                  </span>
                )}
                {filters.priceRange !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#2447E8]/10 text-[#2447E8] text-xs font-semibold rounded-xs">
                    Price: {filters.priceRange}
                  </span>
                )}
                {filters.color !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#2447E8]/10 text-[#2447E8] text-xs font-semibold rounded-xs">
                    Color: {filters.color}
                  </span>
                )}
                {initialFilter && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FF704F]/10 text-[#FF704F] text-xs font-semibold rounded-xs">
                    Tag: {initialFilter}
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-[#777872] hover:text-[#252525] underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Product Grid View */}
            <ProductGrid
              products={filteredProducts}
              columns={3}
              viewMode={viewMode}
              emptyMessage="No products match your active filter criteria. Try resetting your price range or category filter."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
