import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, SlidersHorizontal, ArrowUpDown, AlertCircle } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import EyewearCard from '../components/eyewear/EyewearCard';
import { eyewearCollection } from '../data/eyewear';
import type { EyewearCategory } from '../types/visora';

const CATEGORIES: ('All' | EyewearCategory)[] = [
  'All',
  'Lightweight Titanium',
  'Acetate Classics',
  'Optical Frames',
  'Sunglasses',
];

export function EyewearPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as EyewearCategory) || 'All';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | EyewearCategory>(
    CATEGORIES.includes(initialCategory) ? initialCategory : 'All'
  );
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredAndSortedFrames = useMemo(() => {
    const filtered = eyewearCollection.filter((frame) => {
      const matchesSearch =
        frame.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        frame.frameShape.toLowerCase().includes(searchTerm.toLowerCase()) ||
        frame.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
        frame.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat =
        selectedCategory === 'All' || frame.category === selectedCategory;

      return matchesSearch && matchesCat;
    });

    if (sortBy === 'price-asc') {
      return [...filtered].sort((a, b) => a.priceINR - b.priceINR);
    }
    if (sortBy === 'price-desc') {
      return [...filtered].sort((a, b) => b.priceINR - a.priceINR);
    }
    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortBy('featured');
  };

  return (
    <div className="py-12 sm:py-16 bg-[#F7F5EF] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="CURATED EYEWEAR ATELIER"
            title="Sculpted Optical Frames &amp;"
            italicWord="Handcrafted Sunglasses."
            subtitle="Explore our curated collection of featherweight Japanese titanium wire, cured Italian organic bio-acetate, and polarized mineral sun lenses."
          />
        </div>

        {/* Filter, Search & Sort Bar */}
        <div className="p-6 rounded-3xl bg-white border border-[#E4E4DE] shadow-xs mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#687581] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search frames by name, shape (e.g. round, panto), or material..."
                className="w-full pl-10 pr-10 py-3 rounded-full text-xs sm:text-sm bg-[#F7F5EF] border border-[#E4E4DE] focus:outline-hidden focus:border-[#5C9995] text-[#15263B] placeholder-[#687581] transition-colors"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#687581] hover:text-[#15263B]"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 shrink-0">
              <ArrowUpDown className="w-4 h-4 text-[#5C9995]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-3 px-4 rounded-full text-xs sm:text-sm bg-[#F7F5EF] border border-[#E4E4DE] text-[#15263B] focus:outline-hidden focus:border-[#5C9995]"
              >
                <option value="featured">Sort: Featured Atelier</option>
                <option value="price-asc">Price: Low to High (INR)</option>
                <option value="price-desc">Price: High to Low (INR)</option>
              </select>
            </div>

            {/* Reset button if any filter active */}
            {(searchTerm || selectedCategory !== 'All' || sortBy !== 'featured') && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-[#687581] hover:text-[#15263B] hover:bg-[#F7F5EF] transition-colors border border-transparent hover:border-[#E4E4DE]"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="mt-5 pt-4 border-t border-[#E4E4DE] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold text-[#687581] mr-2 flex items-center gap-1.5 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#5C9995]" />
              Category:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#15263B] text-white shadow-xs font-semibold'
                    : 'bg-[#F7F5EF] text-[#687581] hover:text-[#15263B] hover:bg-[#E4E4DE] border border-[#E4E4DE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Counter and Status */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs font-medium text-[#687581]">
            Showing <span className="font-bold text-[#15263B]">{filteredAndSortedFrames.length}</span> of {eyewearCollection.length} curated frames
          </p>
          {selectedCategory !== 'All' && (
            <span className="text-xs font-semibold text-[#15263B] bg-white px-3 py-1 rounded-full border border-[#E4E4DE]">
              Category: {selectedCategory}
            </span>
          )}
        </div>

        {/* Eyewear Grid */}
        {filteredAndSortedFrames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredAndSortedFrames.map((frame) => (
              <EyewearCard key={frame.id} item={frame} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-white border border-[#E4E4DE] max-w-lg mx-auto my-8 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg text-[#15263B]">
              No optical frames found
            </h3>
            <p className="text-xs text-[#687581] mt-2 leading-relaxed">
              We couldn't locate any eyewear matching "{searchTerm}" under the selected category. Try clearing your filters to explore our full collection.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Fitting Notice */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-[#E4E4DE] text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#687581] leading-relaxed">
            <span className="font-semibold text-[#15263B]">Custom Optical Glazing:</span> All frames displayed in our collection can be custom-surfaced with single-vision, progressive, digital blue-filter, or transition lenses in our on-site laboratory following your in-studio consultation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EyewearPage;
