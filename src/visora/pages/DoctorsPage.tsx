import { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, UserCheck, AlertCircle } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import DoctorCard from '../components/doctors/DoctorCard';
import { doctors } from '../data/doctors';

const SPECIALTY_FILTERS = [
  'All',
  'Refractive Precision',
  'Dry Eye Therapy',
  'Pediatric Vision',
  'Specialty Contact Lenses',
];

export function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const matchesSearch =
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.areasOfExpertise.some((area) =>
          area.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesFilter =
        selectedFilter === 'All' || doc.specialty.includes(selectedFilter);

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedFilter('All');
  };

  return (
    <div className="py-12 sm:py-16 bg-[#F7F5EF] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="CLINICAL FACULTY"
            title="Our Dedicated Optometrists &amp;"
            italicWord="Vision Scientists."
            subtitle="Meet our fictional clinical team committed to thorough diagnostic evaluations, corneal mapping, pediatric screening, and unhurried patient care."
          />
        </div>

        {/* Fictional Portfolio Disclaimer */}
        <div className="mb-8 p-4 rounded-2xl bg-white border border-[#E4E4DE] flex items-start gap-3 shadow-xs">
          <UserCheck className="w-5 h-5 text-[#5C9995] shrink-0 mt-0.5" />
          <p className="text-xs text-[#687581] leading-relaxed">
            <span className="font-semibold text-[#15263B]">Demonstration Notice:</span> All practitioner profiles, names, biographies, and specialties are fictional models designed to demonstrate healthcare UX design. In accordance with clinical ethical guidelines, no real medical endorsements or licensing numbers are simulated.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-6 rounded-3xl bg-white border border-[#E4E4DE] shadow-xs mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#687581] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search specialists by name, clinical focus, or area of expertise..."
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

            {(searchTerm || selectedFilter !== 'All') && (
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

          <div className="mt-5 pt-4 border-t border-[#E4E4DE] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold text-[#687581] mr-2 flex items-center gap-1.5 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#5C9995]" />
              Specialty:
            </span>
            {SPECIALTY_FILTERS.map((spec) => (
              <button
                key={spec}
                type="button"
                onClick={() => setSelectedFilter(spec)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedFilter === spec
                    ? 'bg-[#15263B] text-white shadow-xs font-semibold'
                    : 'bg-[#F7F5EF] text-[#687581] hover:text-[#15263B] hover:bg-[#E4E4DE] border border-[#E4E4DE]'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs font-medium text-[#687581]">
            Showing <span className="font-bold text-[#15263B]">{filteredDoctors.length}</span> of {doctors.length} practitioners
          </p>
        </div>

        {/* Doctors Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-white border border-[#E4E4DE] max-w-lg mx-auto my-8 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg text-[#15263B]">
              No specialists found
            </h3>
            <p className="text-xs text-[#687581] mt-2 leading-relaxed">
              We couldn't locate any practitioners matching "{searchTerm}". Try resetting your search filters.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorsPage;
