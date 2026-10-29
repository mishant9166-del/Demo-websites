import React from 'react';
import { X, RotateCcw, Filter } from 'lucide-react';
import type { ProductCategory } from '../../types/product';
import { STORE_CATEGORIES } from '../../data/categories';

export interface FilterState {
  category: 'all' | ProductCategory;
  priceRange: 'all' | 'under1000' | '1000to2500' | 'above2500';
  availability: 'all' | 'inStock';
  color: 'all' | string;
  sortBy: 'featured' | 'newest' | 'price-low' | 'price-high' | 'rating';
}

interface FilterDrawerProps {
  filters: FilterState;
  onChange: (newFilters: FilterState) => void;
  onReset: () => void;
  isOpen: boolean;
  onClose: () => void;
  totalResults: number;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  filters,
  onChange,
  onReset,
  isOpen,
  onClose,
  totalResults,
}) => {
  const colorsList = [
    { label: 'All Colors', value: 'all' },
    { label: 'Cobalt Blue', value: 'Cobalt', hex: '#2447E8' },
    { label: 'Ink Black', value: 'Black', hex: '#252525' },
    { label: 'Sand & Ivory', value: 'Sand', hex: '#E5E0D5' },
    { label: 'Terracotta', value: 'Terracotta', hex: '#B25D43' },
    { label: 'Raw Brass', value: 'Brass', hex: '#D4AF37' },
  ];

  const content = (
    <div className="space-y-6 text-xs text-[#252525]">
      {/* Category Filter */}
      <div>
        <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-2.5">
          Category
        </label>
        <div className="space-y-1.5">
          <button
            type="button"
            onClick={() => onChange({ ...filters, category: 'all' })}
            className={`w-full text-left py-1.5 px-2 rounded-xs transition-colors flex items-center justify-between ${
              filters.category === 'all'
                ? 'bg-[#2447E8] text-white font-bold'
                : 'hover:bg-[#F7F7F4] text-[#252525]'
            }`}
          >
            <span>All Departments</span>
          </button>
          {STORE_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => onChange({ ...filters, category: cat.slug })}
              className={`w-full text-left py-1.5 px-2 rounded-xs transition-colors flex items-center justify-between ${
                filters.category === cat.slug
                  ? 'bg-[#2447E8] text-white font-bold'
                  : 'hover:bg-[#F7F7F4] text-[#252525]'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] opacity-75">({cat.itemCount})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="pt-4 border-t border-[#E5E5E0]">
        <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-2.5">
          Price Range (INR)
        </label>
        <div className="space-y-1.5">
          {[
            { id: 'all', label: 'All Prices' },
            { id: 'under1000', label: 'Under ₹1,000' },
            { id: '1000to2500', label: '₹1,000 – ₹2,500' },
            { id: 'above2500', label: 'Above ₹2,500' },
          ].map((tier) => (
            <button
              key={tier.id}
              type="button"
              onClick={() =>
                onChange({
                  ...filters,
                  priceRange: tier.id as FilterState['priceRange'],
                })
              }
              className={`w-full text-left py-1.5 px-2 rounded-xs transition-colors ${
                filters.priceRange === tier.id
                  ? 'bg-[#2447E8] text-white font-bold'
                  : 'hover:bg-[#F7F7F4] text-[#252525]'
              }`}
            >
              {tier.label}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="pt-4 border-t border-[#E5E5E0]">
        <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-2.5">
          Color Palette
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {colorsList.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => onChange({ ...filters, color: c.value })}
              className={`py-1.5 px-2 rounded-xs border text-left flex items-center gap-2 transition-all ${
                filters.color === c.value
                  ? 'border-[#2447E8] bg-[#2447E8]/5 font-bold text-[#2447E8]'
                  : 'border-[#E5E5E0] hover:border-[#252525] bg-white text-[#252525]'
              }`}
            >
              {c.hex && (
                <span
                  className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                  style={{ backgroundColor: c.hex }}
                />
              )}
              <span className="truncate">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div className="pt-4 border-t border-[#E5E5E0]">
        <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-2.5">
          Inventory
        </label>
        <div className="space-y-1.5">
          <button
            type="button"
            onClick={() => onChange({ ...filters, availability: 'all' })}
            className={`w-full text-left py-1.5 px-2 rounded-xs transition-colors ${
              filters.availability === 'all'
                ? 'bg-[#2447E8] text-white font-bold'
                : 'hover:bg-[#F7F7F4] text-[#252525]'
            }`}
          >
            All Inventory
          </button>
          <button
            type="button"
            onClick={() => onChange({ ...filters, availability: 'inStock' })}
            className={`w-full text-left py-1.5 px-2 rounded-xs transition-colors ${
              filters.availability === 'inStock'
                ? 'bg-[#2447E8] text-white font-bold'
                : 'hover:bg-[#F7F7F4] text-[#252525]'
            }`}
          >
            In Stock Only
          </button>
        </div>
      </div>

      {/* Reset Filter Button */}
      <div className="pt-4 border-t border-[#E5E5E0]">
        <button
          type="button"
          onClick={onReset}
          className="w-full py-2.5 bg-[#F7F7F4] hover:bg-[#E5E5E0] text-[#252525] border border-[#E5E5E0] font-semibold text-xs uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Filters</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 pr-6 border-r border-[#E5E5E0]">
        <div className="sticky top-28 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E0]">
            <span className="font-bold text-xs uppercase tracking-wider text-[#252525] flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#2447E8]" />
              Filter Catalog
            </span>
            <span className="text-[11px] font-mono text-[#777872]">
              {totalResults} items
            </span>
          </div>
          {content}
        </div>
      </aside>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 lg:hidden flex justify-end"
        >
          <div className="w-full max-w-xs bg-white h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-slideLeft">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E0] mb-6">
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#252525]">
                  Filter ({totalResults})
                </h3>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 text-[#777872] hover:text-[#252525]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {content}
            </div>

            <div className="pt-6 border-t border-[#E5E5E0] mt-6">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 bg-[#2447E8] text-white text-xs uppercase font-bold tracking-wider rounded-xs"
              >
                Apply & View ({totalResults}) Results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
