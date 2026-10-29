import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { STORE_PRODUCTS } from '../data/products';
import { ProductGrid } from '../components/products/ProductGrid';
import { FilterDrawer, type FilterState } from '../components/products/FilterDrawer';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    priceRange: 'all',
    availability: 'all',
    color: 'all',
    sortBy: 'featured',
  });
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync state if URL query changes
  React.useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    } else {
      setSearchParams({});
    }
  };

  const popularSearches = ['Tote', 'Lamp', 'Flask', 'Desk', 'Leather', 'Canvas', 'Backpack'];

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return STORE_PRODUCTS.filter((prod) => {
      const matchesSearch =
        prod.name.toLowerCase().includes(q) ||
        prod.description.toLowerCase().includes(q) ||
        prod.categoryLabel.toLowerCase().includes(q) ||
        prod.tags.some((t) => t.toLowerCase().includes(q));

      if (!matchesSearch) return false;

      // Filter Drawer checks
      if (filters.category !== 'all' && prod.category !== filters.category) return false;
      if (filters.priceRange === 'under1000' && prod.priceINR >= 1000) return false;
      if (filters.priceRange === '1000to2500' && (prod.priceINR < 1000 || prod.priceINR > 2500))
        return false;
      if (filters.priceRange === 'above2500' && prod.priceINR <= 2500) return false;
      if (filters.availability === 'inStock' && !prod.inStock) return false;
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
      return 0;
    });
  }, [query, filters]);

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Header Search Box */}
      <section className="bg-[#F7F7F4] border-b border-[#E5E5E0] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-[#2447E8] block">
            Store Search
          </span>
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-[#777872] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search across all 26 design objects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-[#E5E5E0] rounded-xs text-sm font-medium text-[#252525] focus:outline-none focus:border-[#2447E8] shadow-xs"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-xs uppercase font-bold tracking-wider rounded-xs transition-colors"
            >
              Search
            </button>
          </form>

          {/* Quick Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
            <span className="text-[#777872] font-mono text-[11px]">Popular:</span>
            {popularSearches.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term);
                  setSearchParams({ q: term });
                }}
                className="px-2.5 py-1 bg-white border border-[#E5E5E0] hover:border-[#2447E8] text-[#252525] rounded-xs text-[11px]"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {query.trim() === '' ? (
          <div className="py-20 text-center space-y-4 max-w-md mx-auto">
            <Search className="w-12 h-12 text-[#E5E5E0] mx-auto stroke-1" />
            <h3 className="text-xl font-bold text-[#252525]">Search the Object Archive</h3>
            <p className="text-xs text-[#777872]">
              Type a term above or choose a department to explore our curated design collection.
            </p>
            <div className="pt-2">
              <Link
                to="/object/shop"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#2447E8] hover:underline"
              >
                <span>Browse Entire Shop</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-10">
            {searchResults.length > 0 && (
              <FilterDrawer
                filters={filters}
                onChange={setFilters}
                onReset={() =>
                  setFilters({
                    category: 'all',
                    priceRange: 'all',
                    availability: 'all',
                    color: 'all',
                    sortBy: 'featured',
                  })
                }
                isOpen={mobileFilterOpen}
                onClose={() => setMobileFilterOpen(false)}
                totalResults={searchResults.length}
              />
            )}

            <div className="flex-1 min-w-0 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E0]">
                <div>
                  <h2 className="text-xl font-black text-[#252525]">
                    Results for &ldquo;{query}&rdquo;
                  </h2>
                  <span className="text-xs font-mono text-[#777872]">
                    {searchResults.length} {searchResults.length === 1 ? 'object' : 'objects'} found
                  </span>
                </div>

                {searchResults.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setMobileFilterOpen(true)}
                    className="lg:hidden px-3.5 py-1.5 bg-[#F7F7F4] border border-[#E5E5E0] text-xs font-bold text-[#252525] rounded-xs flex items-center gap-1.5"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#2447E8]" />
                    <span>Filter</span>
                  </button>
                )}
              </div>

              {searchResults.length > 0 ? (
                <ProductGrid products={searchResults} columns={3} />
              ) : (
                <div className="py-20 text-center space-y-3 bg-[#F7F7F4] rounded-xs border border-[#E5E5E0] p-8">
                  <h4 className="text-base font-bold text-[#252525]">
                    No objects match &ldquo;{query}&rdquo;
                  </h4>
                  <p className="text-xs text-[#777872] max-w-sm mx-auto">
                    Check your spelling or search for broader keywords like canvas, bag, desk, lamp, or mug.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/object/shop"
                      className="px-5 py-2.5 bg-[#2447E8] text-white text-xs uppercase font-bold rounded-xs inline-block"
                    >
                      View All Products
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
