import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, RotateCcw, Check } from 'lucide-react';
import type { VehicleCategory, FuelType, ConditionType, VehicleFilterState } from '../../types/vehicle';
import { vehicleMakes, vehicleCategories, fuelTypes } from '../../data/vehicles';
import { formatCompactINR } from '../../lib/formatters';

interface VehicleFiltersProps {
  filters: VehicleFilterState;
  onChange: (filters: VehicleFilterState) => void;
  onReset: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  totalResults: number;
}

export function VehicleFilters({
  filters,
  onChange,
  onReset,
  isOpenMobile,
  onCloseMobile,
  totalResults
}: VehicleFiltersProps) {
  const updateFilter = <K extends keyof VehicleFilterState>(key: K, value: VehicleFilterState[K]) => {
    onChange({ ...filters, [key]: value });
  };

  const hasActiveFilters = 
    filters.searchQuery !== '' ||
    filters.category !== 'All' ||
    filters.make !== 'All' ||
    filters.fuelType !== 'All' ||
    filters.condition !== 'All' ||
    filters.transmission !== 'All' ||
    filters.year !== 'All' ||
    filters.minPrice > 0 ||
    filters.maxPrice < 60000000;

  const content = (
    <div className="space-y-6 text-[#F5F7F7]">
      {/* Header with Results Count & Reset */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#C8FF45]" />
          <span className="text-xs font-mono uppercase tracking-widest font-bold">
            Filter Roster ({totalResults})
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-[11px] font-mono text-[#C8FF45] hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-2.5">
          Vehicle Category
        </label>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => updateFilter('category', 'All')}
            className={`px-3 py-1.5 rounded-sm text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              filters.category === 'All'
                ? 'bg-[#C8FF45] text-[#080A0B] font-bold shadow-sm'
                : 'bg-[#171B1E] text-[#A0A7AC] hover:text-white border border-white/10'
            }`}
          >
            All
          </button>
          {vehicleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', cat as VehicleCategory)}
              className={`px-3 py-1.5 rounded-sm text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                filters.category === cat
                  ? 'bg-[#C8FF45] text-[#080A0B] font-bold shadow-sm'
                  : 'bg-[#171B1E] text-[#A0A7AC] hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Make / Manufacturer */}
      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-2">
          Manufacturer
        </label>
        <select
          value={filters.make}
          onChange={(e) => updateFilter('make', e.target.value)}
          className="w-full bg-[#171B1E] border border-white/10 rounded-sm px-3 py-2 text-xs text-[#F5F7F7] focus:outline-none focus:border-[#C8FF45] transition-colors"
        >
          <option value="All">All Manufacturers</option>
          {vehicleMakes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      {/* Fuel / Powertrain Type */}
      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-2.5">
          Powertrain
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {['All', ...fuelTypes].map((fuel) => (
            <button
              key={fuel}
              onClick={() => updateFilter('fuelType', fuel as 'All' | FuelType)}
              className={`px-3 py-2 rounded-sm text-xs text-left font-medium transition-all flex items-center justify-between cursor-pointer ${
                filters.fuelType === fuel
                  ? 'bg-[#C8FF45]/15 border border-[#C8FF45] text-[#C8FF45] font-semibold'
                  : 'bg-[#171B1E] text-[#A0A7AC] hover:text-white border border-white/10'
              }`}
            >
              <span className="truncate">{fuel}</span>
              {filters.fuelType === fuel && <Check className="w-3.5 h-3.5 shrink-0" />}
            </button>
          ))}
        </div>
      </div>

      {/* Condition (New vs Certified Pre-Owned) */}
      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-2">
          Condition
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {(['All', 'Brand New', 'Certified Pre-Owned'] as const).map((cond) => (
            <button
              key={cond}
              onClick={() => updateFilter('condition', cond as 'All' | ConditionType)}
              className={`py-2 px-1 text-center rounded-sm text-xs font-medium transition-all cursor-pointer ${
                filters.condition === cond
                  ? 'bg-[#C8FF45] text-[#080A0B] font-bold'
                  : 'bg-[#171B1E] text-[#A0A7AC] hover:text-white border border-white/10'
              }`}
            >
              {cond === 'Certified Pre-Owned' ? 'Pre-Owned' : cond}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC]">
            Max Price
          </label>
          <span className="text-xs font-mono font-bold text-[#C8FF45]">
            {formatCompactINR(filters.maxPrice)}
          </span>
        </div>
        <input
          type="range"
          min="5000000"
          max="60000000"
          step="2500000"
          value={filters.maxPrice}
          onChange={(e) => updateFilter('maxPrice', Number(e.target.value))}
          className="w-full accent-[#C8FF45] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] font-mono text-[#A0A7AC]/60 mt-1">
          <span>₹50 Lakh</span>
          <span>₹6.0 Cr</span>
        </div>
      </div>

      {/* Model Year */}
      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-2">
          Model Year
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {(['All', 2024, 2023] as const).map((yr) => (
            <button
              key={yr}
              onClick={() => updateFilter('year', yr)}
              className={`py-2 px-2 text-center rounded-sm text-xs font-medium transition-all cursor-pointer ${
                filters.year === yr
                  ? 'bg-[#C8FF45] text-[#080A0B] font-bold'
                  : 'bg-[#171B1E] text-[#A0A7AC] hover:text-white border border-white/10'
              }`}
            >
              {yr}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 bg-[#101315] border border-white/10 rounded-lg p-5 self-start sticky top-24 shadow-xl">
        {content}
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpenMobile && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseMobile}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative w-full max-w-xs bg-[#101315] border-r border-white/10 h-full p-6 overflow-y-auto z-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <h3 className="font-bold text-base text-[#F5F7F7]">Filter Inventory</h3>
                  <button
                    onClick={onCloseMobile}
                    className="p-1.5 rounded-full hover:bg-white/10 text-[#A0A7AC]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {content}
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <button
                  onClick={onCloseMobile}
                  className="w-full py-3 bg-[#C8FF45] text-[#080A0B] text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#b5eb3b] transition-colors"
                >
                  Show {totalResults} Results
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
