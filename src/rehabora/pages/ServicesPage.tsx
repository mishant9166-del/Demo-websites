import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, SlidersHorizontal, AlertCircle } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/services/ServiceCard';
import { services } from '../data/services';
import type { ServiceCategory } from '../types/rehabora';

const CATEGORIES: ('All' | ServiceCategory)[] = [
  'All',
  'Pain and Mobility',
  'Sports Rehabilitation',
  'Post-Operative Care',
  'Balance and Walking',
  'General Physiotherapy',
];

export function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | ServiceCategory>('All');

  const filteredServices = useMemo(() => {
    return services.filter((srv) => {
      const matchesSearch =
        srv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        srv.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        srv.overview.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat =
        selectedCategory === 'All' || srv.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <div className="py-12 sm:py-16 bg-[#FAFBF8] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="CLINICAL SERVICES"
            title="Evidence-informed rehabilitation &amp; physiotherapy."
            subtitle="Explore our comprehensive range of movement therapy, rehabilitation programs, and preventative physical health consultations."
          />
        </div>

        {/* Search and Filter Controls */}
        <div className="p-6 rounded-3xl bg-white border border-[#E1E8E2] shadow-xs mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#727C75] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search services by condition, focus, or approach..."
                className="w-full pl-10 pr-10 py-3 rounded-full text-xs sm:text-sm bg-[#FAFBF8] border border-[#E1E8E2] focus:outline-hidden focus:border-[#285A49] transition-colors text-[#242C28] placeholder-[#727C75]"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#727C75] hover:text-[#242C28]"
                  aria-label="Clear search text"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Clear filters trigger if any filter active */}
            {(searchTerm || selectedCategory !== 'All') && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-[#727C75] hover:text-[#285A49] hover:bg-[#E8F2EC] transition-colors border border-transparent hover:border-[#D4E5D9]"
              >
                <X className="w-3.5 h-3.5" />
                Reset Filters
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="mt-5 pt-4 border-t border-[#E1E8E2] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-[#727C75] mr-2 flex items-center gap-1.5 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#285A49]" />
              Categories:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#285A49] text-white shadow-xs font-bold'
                    : 'bg-[#FAFBF8] text-[#727C75] hover:text-[#242C28] hover:bg-[#E8F2EC] border border-[#E1E8E2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs font-medium text-[#727C75]">
            Showing <span className="font-bold text-[#242C28]">{filteredServices.length}</span> of {services.length} services
          </p>
          {selectedCategory !== 'All' && (
            <span className="text-xs font-semibold text-[#285A49] bg-[#E8F2EC] px-2.5 py-0.5 rounded-full">
              Category: {selectedCategory}
            </span>
          )}
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="popLayout">
          {filteredServices.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="p-12 text-center rounded-3xl bg-white border border-[#E1E8E2] max-w-lg mx-auto my-8 shadow-xs"
            >
              <div className="w-12 h-12 rounded-full bg-[#E8F2EC] text-[#285A49] flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#242C28]">
                No matching clinical services found
              </h3>
              <p className="text-xs text-[#727C75] mt-2 leading-relaxed">
                We couldn't find any services matching "{searchTerm}" under the selected category. Try clearing your filters or exploring our full list.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 px-5 py-2.5 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors"
              >
                Clear Search &amp; Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Disclaimer Note */}
        <div className="mt-16 p-6 rounded-2xl bg-[#FAFBF8] border border-[#E1E8E2] text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#727C75] leading-relaxed">
            <span className="font-bold text-[#242C28]">Clinical Disclaimer:</span> Information presented across all service descriptions is provided strictly for educational and portfolio demonstration purposes. Appropriate rehabilitation approaches are determined by a qualified physiotherapist following a personalized physical examination.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
