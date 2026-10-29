import { useState, useMemo } from 'react';
import { Search, X, Layers } from 'lucide-react';
import { departments } from '../data/departments';
import { DepartmentCard } from '../components/departments/DepartmentCard';
import { SectionHeading } from '../components/common/SectionHeading';

export function DepartmentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Internal Medicine', 'Surgical Specialties', 'Women & Children', 'Diagnostics & Other'];

  const filteredDepartments = useMemo(() => {
    return departments.filter((dept) => {
      const matchesSearch =
        dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.services.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        dept.conditions.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || dept.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12 sm:py-20 bg-[#F8FBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          eyebrow="MEDICAL DISCIPLINES & CENTERS OF EXCELLENCE"
          title="Specialized Care Across Multiple"
          highlight="Departments."
          subtitle="Explore our comprehensive medical specialties, from routine family health to advanced surgical and diagnostic departments."
          align="center"
        />

        {/* Search & Filter Bar */}
        <div className="mt-8 mb-12 bg-white rounded-2xl p-4 sm:p-5 border border-[#E1EAF0] shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="w-5 h-5 text-[#1769AA] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search departments, clinical procedures, or conditions..."
                className="w-full pl-12 pr-10 py-3 bg-[#F8FBFD] border border-[#E1EAF0] rounded-xl text-sm text-[#183047] placeholder-[#6B7E8E] focus:outline-hidden focus:border-[#1769AA] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6B7E8E] hover:text-[#183047]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Clear filters if any */}
            {(searchQuery || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-3 rounded-xl border border-[#E1EAF0] bg-white text-xs font-bold text-[#6B7E8E] hover:text-[#102B46] hover:bg-[#EAF5FC] transition-colors shrink-0"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E1EAF0]">
            <span className="text-xs font-bold text-[#6B7E8E] uppercase tracking-wider mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1769AA] text-white shadow-xs'
                    : 'bg-[#F8FBFD] text-[#6B7E8E] hover:bg-[#EAF5FC] hover:text-[#1769AA] border border-[#E1EAF0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#6B7E8E] font-medium">
          <span>
            Showing <strong className="text-[#102B46]">{filteredDepartments.length}</strong> of{' '}
            <strong className="text-[#102B46]">{departments.length}</strong> medical departments
          </span>
          {selectedCategory !== 'All' && (
            <span className="bg-[#EAF5FC] text-[#1769AA] px-2.5 py-0.5 rounded-md font-semibold">
              Filter: {selectedCategory}
            </span>
          )}
        </div>

        {/* Department Grid */}
        {filteredDepartments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepartments.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} showImage={true} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-3xl border border-[#E1EAF0] p-8 max-w-xl mx-auto shadow-2xs">
            <div className="w-16 h-16 rounded-full bg-[#EAF5FC] text-[#1769AA] flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#102B46] mb-2">No departments found</h3>
            <p className="text-sm text-[#6B7E8E] mb-6">
              No medical departments matched your search for &ldquo;{searchQuery}&rdquo;. Try another term or reset your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-2.5 rounded-full bg-[#1769AA] text-white text-xs font-bold hover:bg-[#125388] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
