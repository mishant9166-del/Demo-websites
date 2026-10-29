import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, LayoutGrid, List, X, Car } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import type { VehicleFilterState, VehicleSortOption, VehicleCategory } from '../types/vehicle';
import { VehicleFilters } from '../components/vehicles/VehicleFilters';
import { VehicleGrid } from '../components/vehicles/VehicleGrid';
import { EmptyState } from '../components/common/EmptyState';

const initialFilters: VehicleFilterState = {
  searchQuery: '',
  category: 'All',
  make: 'All',
  minPrice: 0,
  maxPrice: 60000000,
  fuelType: 'All',
  transmission: 'All',
  condition: 'All',
  year: 'All'
};

export function InventoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<VehicleFilterState>(() => {
    const categoryParam = searchParams.get('category');
    return {
      ...initialFilters,
      category: (categoryParam as VehicleCategory) || 'All'
    };
  });

  const [sortOption, setSortOption] = useState<VehicleSortOption>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync category param from URL if it changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setFilters((prev) => ({ ...prev, category: cat as VehicleCategory }));
    }
  }, [searchParams]);

  // Filter and Sort Engine
  const filteredVehicles = useMemo(() => {
    return vehicles
      .filter((vehicle) => {
        // Search query
        if (filters.searchQuery.trim()) {
          const q = filters.searchQuery.toLowerCase().trim();
          const matchSearch =
            vehicle.make.toLowerCase().includes(q) ||
            vehicle.model.toLowerCase().includes(q) ||
            vehicle.category.toLowerCase().includes(q) ||
            vehicle.fuelType.toLowerCase().includes(q) ||
            vehicle.description.toLowerCase().includes(q) ||
            vehicle.tagline?.toLowerCase().includes(q);
          if (!matchSearch) return false;
        }

        // Category
        if (filters.category !== 'All' && vehicle.category !== filters.category) {
          return false;
        }

        // Make
        if (filters.make !== 'All' && vehicle.make !== filters.make) {
          return false;
        }

        // Fuel Type
        if (filters.fuelType !== 'All' && vehicle.fuelType !== filters.fuelType) {
          return false;
        }

        // Condition
        if (filters.condition !== 'All' && vehicle.condition !== filters.condition) {
          return false;
        }

        // Model Year
        if (filters.year !== 'All' && vehicle.year !== filters.year) {
          return false;
        }

        // Price Range
        if (vehicle.price > filters.maxPrice || vehicle.price < filters.minPrice) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
        if (sortOption === 'year-desc') return b.year - a.year;
        if (sortOption === 'name-asc') return `${a.make} ${a.model}`.localeCompare(`${b.make} ${b.model}`);
        // Default: featured first, then year
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.year - a.year;
      });
  }, [filters, sortOption]);

  const activeChips = useMemo(() => {
    const chips: { label: string; onRemove: () => void }[] = [];
    if (filters.category !== 'All') {
      chips.push({
        label: `Category: ${filters.category}`,
        onRemove: () => setFilters((prev) => ({ ...prev, category: 'All' }))
      });
    }
    if (filters.make !== 'All') {
      chips.push({
        label: `Make: ${filters.make}`,
        onRemove: () => setFilters((prev) => ({ ...prev, make: 'All' }))
      });
    }
    if (filters.fuelType !== 'All') {
      chips.push({
        label: `Powertrain: ${filters.fuelType}`,
        onRemove: () => setFilters((prev) => ({ ...prev, fuelType: 'All' }))
      });
    }
    if (filters.condition !== 'All') {
      chips.push({
        label: `Condition: ${filters.condition}`,
        onRemove: () => setFilters((prev) => ({ ...prev, condition: 'All' }))
      });
    }
    if (filters.year !== 'All') {
      chips.push({
        label: `Year: ${filters.year}`,
        onRemove: () => setFilters((prev) => ({ ...prev, year: 'All' }))
      });
    }
    if (filters.maxPrice < 60000000) {
      chips.push({
        label: `Max Price: ₹${(filters.maxPrice / 10000000).toFixed(1)} Cr`,
        onRemove: () => setFilters((prev) => ({ ...prev, maxPrice: 60000000 }))
      });
    }
    if (filters.searchQuery) {
      chips.push({
        label: `Search: "${filters.searchQuery}"`,
        onRemove: () => setFilters((prev) => ({ ...prev, searchQuery: '' }))
      });
    }
    return chips;
  }, [filters]);

  const handleResetFilters = () => {
    setFilters(initialFilters);
    setSearchParams({});
  };

  return (
    <div className="py-12 sm:py-16 bg-[#080A0B] text-[#F5F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C8FF45] font-bold block mb-2">
            INVENTORY ROSTER
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Find your next vehicle.
          </h1>
          <p className="text-sm sm:text-base text-[#A0A7AC] mt-3 leading-relaxed">
            Browse the collection and narrow it down to what matters most to you.
          </p>
        </div>

        {/* Search & Utility Bar */}
        <div className="bg-[#101315] border border-white/10 rounded-lg p-3 sm:p-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-xl">
          {/* Working Search Field */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A7AC]" />
            <input
              type="text"
              placeholder="Search make, model, electric, power..."
              value={filters.searchQuery}
              onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
              className="w-full bg-[#171B1E] border border-white/10 rounded-sm pl-10 pr-4 py-2.5 text-xs text-[#F5F7F7] placeholder-[#A0A7AC]/60 focus:outline-none focus:border-[#C8FF45] transition-colors"
            />
            {filters.searchQuery && (
              <button
                onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#A0A7AC] hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Controls: Filter Drawer Toggle, Sort Dropdown & Grid/List View */}
          <div className="flex items-center justify-between md:justify-end gap-3 flex-wrap">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 px-3 py-2 rounded bg-[#171B1E] border border-white/15 text-xs font-semibold text-[#F5F7F7] hover:border-[#C8FF45]/50 cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C8FF45]" />
              <span>Filters ({filteredVehicles.length})</span>
            </button>

            {/* Sort Options Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase text-[#A0A7AC] hidden sm:inline">
                Sort:
              </span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as VehicleSortOption)}
                className="bg-[#171B1E] border border-white/10 rounded-sm px-3 py-2 text-xs text-[#F5F7F7] focus:outline-none focus:border-[#C8FF45] transition-colors cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="year-desc">Newest Model Year</option>
                <option value="name-asc">Vehicle Name (A–Z)</option>
              </select>
            </div>

            {/* View Mode Switcher (Grid vs List) */}
            <div className="flex items-center bg-[#171B1E] border border-white/10 rounded-sm p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-sm transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#C8FF45] text-[#080A0B]' : 'text-[#A0A7AC] hover:text-white'
                }`}
                title="Grid View"
                aria-label="Switch to grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>

              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-sm transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-[#C8FF45] text-[#080A0B]' : 'text-[#A0A7AC] hover:text-white'
                }`}
                title="List View"
                aria-label="Switch to list view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {activeChips.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-6">
            <span className="text-[11px] font-mono uppercase text-[#A0A7AC]">Active Filters:</span>
            {activeChips.map((chip, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#171B1E] border border-white/15 text-xs text-[#F5F7F7]"
              >
                <span>{chip.label}</span>
                <button
                  onClick={chip.onRemove}
                  className="hover:text-rose-400 transition-colors p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <button
              onClick={handleResetFilters}
              className="text-xs font-mono text-[#C8FF45] hover:underline ml-2"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Main Content Area: Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <VehicleFilters
            filters={filters}
            onChange={setFilters}
            onReset={handleResetFilters}
            isOpenMobile={isMobileFilterOpen}
            onCloseMobile={() => setIsMobileFilterOpen(false)}
            totalResults={filteredVehicles.length}
          />

          <div className="flex-grow w-full">
            {filteredVehicles.length === 0 ? (
              <EmptyState
                icon={Car}
                title="No vehicles match your criteria"
                description="Try loosening your filters or search terms to explore available automobiles."
                actionLabel="Reset All Filters"
                onActionClick={handleResetFilters}
              />
            ) : (
              <VehicleGrid vehicles={filteredVehicles} viewMode={viewMode} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
