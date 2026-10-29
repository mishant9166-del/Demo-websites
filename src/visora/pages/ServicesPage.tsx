import { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, AlertCircle } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/services/ServiceCard';
import { eyeServices } from '../data/services';

const SERVICE_CATEGORIES = [
  'All',
  'Diagnostic & Routine',
  'Specialist Consultation',
  'Pediatric & Vision',
];

export function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = useMemo(() => {
    return eyeServices.filter((srv) => {
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
    <div className="py-12 sm:py-16 bg-[#F7F5EF] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="CLINICAL SERVICES"
            title="Comprehensive Eye Care &amp;"
            italicWord="Vision Science."
            subtitle="Explore our advanced diagnostic evaluations, contact lens fittings, and dry eye protocols administered by licensed optometrists in private vision suites."
          />
        </div>

        {/* Filter & Search Bar */}
        <div className="p-6 rounded-3xl bg-white border border-[#E4E4DE] shadow-xs mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#687581] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search services by symptom, technology, or vision protocol..."
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

            {(searchTerm || selectedCategory !== 'All') && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-[#687581] hover:text-[#15263B] hover:bg-[#F7F5EF] transition-colors border border-transparent hover:border-[#E4E4DE]"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="mt-5 pt-4 border-t border-[#E4E4DE] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold text-[#687581] mr-2 flex items-center gap-1.5 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#5C9995]" />
              Discipline:
            </span>
            {SERVICE_CATEGORIES.map((cat) => (
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

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs font-medium text-[#687581]">
            Showing <span className="font-bold text-[#15263B]">{filteredServices.length}</span> of {eyeServices.length} clinical services
          </p>
          {selectedCategory !== 'All' && (
            <span className="text-xs font-semibold text-[#15263B] bg-white px-3 py-1 rounded-full border border-[#E4E4DE]">
              Filtered: {selectedCategory}
            </span>
          )}
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((srv, index) => (
              <ServiceCard key={srv.id} service={srv} index={index} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-white border border-[#E4E4DE] max-w-lg mx-auto my-8 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg text-[#15263B]">
              No clinical services matched your search
            </h3>
            <p className="text-xs text-[#687581] mt-2 leading-relaxed">
              We couldn't locate any eye examinations matching "{searchTerm}". Try clearing your filters or exploring our full clinical list.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors"
            >
              Clear Search &amp; Filters
            </button>
          </div>
        )}

        {/* Clinical Note */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-[#E4E4DE] text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#687581] leading-relaxed">
            <span className="font-semibold text-[#15263B]">Ethical Clinical Notice:</span> All eye care descriptions are provided for educational portfolio demonstration. Direct diagnosis and tailored optical prescriptions are determined by licensed clinicians following in-person biomicroscopy and wavefront testing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
