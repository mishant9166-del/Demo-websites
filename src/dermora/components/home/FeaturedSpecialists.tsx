import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { specialists } from '../../data/specialists';
import { SpecialistCard } from '../specialists/SpecialistCard';
import { SectionHeading } from '../common/SectionHeading';

export function FeaturedSpecialists() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E4DED4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="OUR CLINICAL SPECIALISTS"
            title="Dermatologists dedicated to"
            highlight="thoughtful care."
            subtitle="Meet our team of licensed physicians specializing in medical dermatology, regenerative aesthetics, and hair health."
            className="mb-0"
          />

          <Link
            to="/dermora/specialists"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F0E9DF] text-[#38473A] text-xs sm:text-sm font-sans font-medium border border-[#E4DED4] shadow-2xs hover:shadow-xs transition-all shrink-0 self-start md:self-auto"
          >
            <Users className="w-4 h-4 text-[#9BAA96]" />
            <span>Meet All Specialists</span>
            <ArrowRight className="w-4 h-4 text-[#B77962]" />
          </Link>
        </div>

        {/* 4 Specialists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {specialists.map((spec) => (
            <SpecialistCard key={spec.id} specialist={spec} />
          ))}
        </div>
      </div>
    </section>
  );
}
