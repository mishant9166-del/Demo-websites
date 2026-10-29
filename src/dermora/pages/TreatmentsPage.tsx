import { useState, useMemo } from 'react';
import { Search, X, Layers } from 'lucide-react';
import { treatments } from '../data/treatments';
import { TreatmentCard } from '../components/treatments/TreatmentCard';
import { SectionHeading } from '../components/common/SectionHeading';
import type { TreatmentCategory } from '../types/dermora';

export function TreatmentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Skin Health',
    'Cosmetic Dermatology',
    'Hair & Scalp',
    'General Dermatology',
  ];

  const filteredTreatments = useMemo(() => {
    return treatments.filter((t) => {
      const matchSearch =
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.commonReasons.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchCategory =
        selectedCategory === 'All' || t.category === (selectedCategory as TreatmentCategory);

      return matchSearch && matchCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12 sm:py-20 bg-[#FAF7F2] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          eyebrow="OUR CLINICAL TREATMENTS"
          title="Care for a range of skin and hair"
          highlight="concerns."
          subtitle="Explore thoughtful dermatological consultations and evidence-based treatments designed to nurture skin health, manage chronic concerns, and celebrate your natural vitality."
          align="center"
        />

        {/* Filter and Search Bar */}
        <div className="mt-8 mb-12 bg-white rounded-3xl p-4 sm:p-5 border border-[#E4DED4] shadow-2xs space-y-4 font-sans">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="w-5 h-5 text-[#38473A] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treatments by concern, procedure, or category..."
                className="w-full pl-12 pr-10 py-3 bg-[#FAF7F2] border border-[#E4DED4] rounded-2xl text-sm text-[#292A27] placeholder-[#77766F] focus:outline-hidden focus:border-[#38473A] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#77766F] hover:text-[#292A27]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Reset Action */}
            {(searchQuery || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-3 rounded-2xl border border-[#E4DED4] bg-white text-xs font-semibold text-[#77766F] hover:text-[#292A27] hover:bg-[#F0E9DF] transition-colors shrink-0"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E4DED4]">
            <span className="text-xs font-semibold text-[#77766F] uppercase tracking-wider mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-[#B77962]" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#38473A] text-white shadow-2xs'
                    : 'bg-[#FAF7F2] text-[#77766F] hover:bg-[#F0E9DF] hover:text-[#292A27] border border-[#E4DED4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Counter Strip */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#77766F] font-sans">
          <span>
            Showing <strong className="text-[#292A27]">{filteredTreatments.length}</strong> of{' '}
            <strong className="text-[#292A27]">{treatments.length}</strong> clinical treatments
          </span>
          {selectedCategory !== 'All' && (
            <span className="bg-[#F0E9DF] text-[#38473A] px-2.5 py-0.5 rounded-md font-medium">
              Filter: {selectedCategory}
            </span>
          )}
        </div>

        {/* Treatments Grid */}
        {filteredTreatments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTreatments.map((t) => (
              <TreatmentCard key={t.id} treatment={t} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-3xl border border-[#E4DED4] p-8 max-w-xl mx-auto shadow-2xs font-sans">
            <div className="w-16 h-16 rounded-full bg-[#F0E9DF] text-[#38473A] flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#292A27] mb-2">No treatments found</h3>
            <p className="text-sm text-[#77766F] mb-6">
              We couldn't find any clinical treatments matching your current search &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-2.5 rounded-full bg-[#38473A] text-white text-xs font-medium hover:bg-[#292A27] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
