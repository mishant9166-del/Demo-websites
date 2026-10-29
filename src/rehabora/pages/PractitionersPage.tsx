import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, SlidersHorizontal, AlertCircle, Info } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import PractitionerCard from '../components/practitioners/PractitionerCard';
import { practitioners } from '../data/practitioners';

const SPECIALTIES = [
  'All',
  'Musculoskeletal Physiotherapy',
  'Sports Injury Rehabilitation',
  'Mobility, Gait & Balance',
  'Post-Operative Orthopedics',
];

export function PractitionersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const filteredPractitioners = useMemo(() => {
    return practitioners.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.areasOfInterest.some((area) =>
          area.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesSpec =
        selectedSpecialty === 'All' || p.specialty === selectedSpecialty;

      return matchesSearch && matchesSpec;
    });
  }, [searchTerm, selectedSpecialty]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSpecialty('All');
  };

  return (
    <div className="py-12 sm:py-16 bg-[#FAFBF8] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="CLINICAL DIRECTORY"
            title="Dedicated to your movement &amp; recovery."
            subtitle="Meet our fictional clinical team specializing in joint health, active sports rehabilitation, post-operative support, and functional mobility."
          />
        </div>

        {/* Fictional Portfolio Disclaimer Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-[#E8F2EC] border border-[#D4E5D9] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#285A49] shrink-0 mt-0.5" />
          <p className="text-xs text-[#285A49] leading-relaxed">
            <span className="font-bold">Portfolio Demonstration:</span> All practitioner profiles, names, biographies, and specialties presented on this site are fictional examples crafted to showcase modern clinic website design. No real healthcare licenses, registration numbers, or clinical credentials are represented.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="p-6 rounded-3xl bg-white border border-[#E1E8E2] shadow-xs mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#727C75] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search practitioners by name, focus area, or clinical interest..."
                className="w-full pl-10 pr-10 py-3 rounded-full text-xs sm:text-sm bg-[#FAFBF8] border border-[#E1E8E2] focus:outline-hidden focus:border-[#285A49] transition-colors text-[#242C28] placeholder-[#727C75]"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#727C75] hover:text-[#242C28]"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {(searchTerm || selectedSpecialty !== 'All') && (
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

          <div className="mt-5 pt-4 border-t border-[#E1E8E2] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-[#727C75] mr-2 flex items-center gap-1.5 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#285A49]" />
              Specialty:
            </span>
            {SPECIALTIES.map((spec) => (
              <button
                key={spec}
                type="button"
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedSpecialty === spec
                    ? 'bg-[#285A49] text-white shadow-xs font-bold'
                    : 'bg-[#FAFBF8] text-[#727C75] hover:text-[#242C28] hover:bg-[#E8F2EC] border border-[#E1E8E2]'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs font-medium text-[#727C75]">
            Showing <span className="font-bold text-[#242C28]">{filteredPractitioners.length}</span> of {practitioners.length} clinicians
          </p>
        </div>

        {/* Directory Grid */}
        <AnimatePresence mode="popLayout">
          {filteredPractitioners.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {filteredPractitioners.map((practitioner, index) => (
                <PractitionerCard
                  key={practitioner.id}
                  practitioner={practitioner}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
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
                No matching clinicians found
              </h3>
              <p className="text-xs text-[#727C75] mt-2 leading-relaxed">
                We couldn't find any practitioners matching "{searchTerm}". Try clearing your filters to see all available specialists.
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
      </div>
    </div>
  );
}

export default PractitionersPage;
