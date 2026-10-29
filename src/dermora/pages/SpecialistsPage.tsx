import React, { useState, useMemo } from 'react';
import { Search, Filter, UserCheck, HeartHandshake, ShieldCheck } from 'lucide-react';
import { specialists } from '../data/specialists';
import { SpecialistCard } from '../components/specialists/SpecialistCard';
import { SectionHeading } from '../components/common/SectionHeading';

const SPECIALTIES = [
  'All Specialties',
  'General & Medical Dermatology',
  'Cosmetic Dermatology & Laser Therapies',
  'Hair & Scalp Health Care',
];

export const SpecialistsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');

  const filteredSpecialists = useMemo(() => {
    return specialists.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.areasOfInterest.some((a) => a.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesSpecialty =
        selectedSpecialty === 'All Specialties' || s.specialty === selectedSpecialty;

      return matchesSearch && matchesSpecialty;
    });
  }, [searchTerm, selectedSpecialty]);

  return (
    <div className="pt-8 pb-20">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-6xl mb-12">
        <SectionHeading
          eyebrow="DERMATOLOGY DIRECTORY"
          title="Meet Our Fictional"
          highlight="Specialists"
          subtitle="Experienced professionals dedicated to personalized consultations, thoughtful skin care, and clear patient guidance in a calm environment."
          align="center"
        />

        {/* Search & Filter Bar */}
        <div className="mt-10 bg-white p-5 rounded-2xl border border-[#E4DED4] shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#77766F]" />
            <input
              type="text"
              placeholder="Search by name, focus, or interest..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] placeholder:text-[#77766F] border border-[#E4DED4] focus:outline-none focus:border-[#38473A]"
            />
          </div>

          {/* Specialty filter buttons */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {SPECIALTIES.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedSpecialty === spec
                    ? 'bg-[#38473A] text-white shadow-sm'
                    : 'bg-[#F0E9DF] text-[#292A27] hover:bg-[#E4DED4]'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Result counter */}
        <div className="flex items-center justify-between mt-4 px-1 text-xs text-[#77766F]">
          <span>Showing {filteredSpecialists.length} of {specialists.length} specialists</span>
          {(searchTerm || selectedSpecialty !== 'All Specialties') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('All Specialties');
              }}
              className="text-[#B77962] hover:underline font-medium"
            >
              Reset filters
            </button>
          )}
        </div>
      </section>

      {/* Directory Grid */}
      <section className="container mx-auto px-6 max-w-6xl">
        {filteredSpecialists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSpecialists.map((specialist) => (
              <SpecialistCard key={specialist.id} specialist={specialist} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#E4DED4] p-12 text-center max-w-md mx-auto">
            <Filter className="w-10 h-10 text-[#77766F] mx-auto mb-3 stroke-[1.5]" />
            <h3 className="font-serif text-xl text-[#292A27] mb-1">No specialists match your criteria</h3>
            <p className="text-xs text-[#77766F] mb-4">
              Try adjusting your search terms or select "All Specialties" to view all professionals.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('All Specialties');
              }}
              className="px-4 py-2 bg-[#38473A] text-white text-xs rounded-full hover:bg-[#292A27] transition"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Consultation Philosophy Callout */}
      <section className="container mx-auto px-6 max-w-6xl mt-20">
        <div className="bg-[#F0E9DF] border border-[#E4DED4] rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-[#38473A] shadow-sm">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#292A27] font-semibold mb-1">Listening-First Care</h4>
                <p className="text-xs text-[#77766F] leading-relaxed">
                  Every consultation begins by listening to your specific skin story, lifestyle, and goals before any plan is proposed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-[#38473A] shadow-sm">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#292A27] font-semibold mb-1">Collaborative Decisions</h4>
                <p className="text-xs text-[#77766F] leading-relaxed">
                  We explain options clearly without pressure, empowering you to make informed decisions for your skin health.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-[#38473A] shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#292A27] font-semibold mb-1">Demonstration Notice</h4>
                <p className="text-xs text-[#77766F] leading-relaxed">
                  All profiles and clinical titles shown are illustrative portfolio concepts. No real medical practitioner records are represented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialistsPage;
