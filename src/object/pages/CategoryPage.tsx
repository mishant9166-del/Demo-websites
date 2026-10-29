import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import { STORE_CATEGORIES } from '../data/categories';
import { STORE_PRODUCTS } from '../data/products';
import type { ProductCategory } from '../types/product';
import { ProductGrid } from '../components/products/ProductGrid';
import { FilterDrawer, type FilterState } from '../components/products/FilterDrawer';

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const currentCategory = STORE_CATEGORIES.find((c) => c.slug === categorySlug);

  const [filters, setFilters] = useState<FilterState>({
    category: (categorySlug as ProductCategory) || 'all',
    priceRange: 'all',
    availability: 'all',
    color: 'all',
    sortBy: 'featured',
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // If category changes in URL, update filter
  React.useEffect(() => {
    if (categorySlug) {
      setFilters((prev) => ({ ...prev, category: categorySlug as ProductCategory }));
    }
  }, [categorySlug]);

  const handleResetFilters = () => {
    setFilters({
      category: (categorySlug as ProductCategory) || 'all',
      priceRange: 'all',
      availability: 'all',
      color: 'all',
      sortBy: 'featured',
    });
  };

  const matchingProducts = useMemo(() => {
    return STORE_PRODUCTS.filter((prod) => {
      // Must match this category
      if (prod.category !== categorySlug) return false;

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
      return 0;
    });
  }, [categorySlug, filters]);

  if (!currentCategory) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F7F7F4] px-4 text-center">
        <h2 className="text-2xl font-bold text-[#252525] mb-2">Category Not Found</h2>
        <p className="text-xs text-[#777872] mb-6">
          The requested product department does not exist in our catalog.
        </p>
        <Link
          to="/object/shop"
          className="px-6 py-2.5 bg-[#2447E8] text-white text-xs uppercase font-bold rounded-xs"
        >
          &larr; Return to All Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Category Hero Banner with Specific Imagery */}
      <section className="relative min-h-[40vh] sm:min-h-[48vh] flex items-end bg-[#252525] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={currentCategory.heroImage}
            alt={currentCategory.name}
            className="w-full h-full object-cover filter brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
          <Link
            to="/object/shop"
            className="inline-flex items-center gap-1.5 text-xs uppercase font-mono tracking-wider font-semibold text-[#FF704F] hover:text-white mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Departments</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
            {currentCategory.name}
          </h1>

          <p className="text-sm sm:text-base text-white/85 font-light max-w-2xl leading-relaxed">
            {currentCategory.description}
          </p>
        </div>
      </section>

      {/* Products & Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-start gap-10">
          <FilterDrawer
            filters={filters}
            onChange={setFilters}
            onReset={handleResetFilters}
            isOpen={mobileFilterOpen}
            onClose={() => setMobileFilterOpen(false)}
            totalResults={matchingProducts.length}
          />

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
                  Showing <strong className="text-[#252525]">{matchingProducts.length}</strong> {currentCategory.name.toLowerCase()} objects
                </span>
              </div>

              {/* Sorting & View Toggle */}
              <div className="flex items-center gap-3">
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

            {/* Product Grid */}
            <ProductGrid
              products={matchingProducts}
              columns={3}
              viewMode={viewMode}
              emptyMessage={`No ${currentCategory.name} products match the selected filters.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
