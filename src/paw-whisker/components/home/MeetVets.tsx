import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import { VETERINARIANS } from '../../data/vets';
import { SectionHeading } from '../common/SectionHeading';
import { VetCard } from '../vets/VetCard';

export const MeetVets: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            badge="Compassionate Doctors"
            badgeVariant="sage"
            alignment="left"
            title="The caring hands behind every tail wag."
            subtitle="Our veterinarians combine deep clinical expertise with a genuine love for companion animals. We take the time to know your pet by name and personality."
          />
          <Link
            to="/paw-whisker/our-vets"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#FBF5EA] border border-[#E8DFD1] text-sm font-semibold text-[#343D30] hover:bg-[#F0D9CA]/40 transition-colors shadow-xs shrink-0 self-start md:self-auto"
          >
            <span>Meet All Doctors</span>
            <ArrowRight className="w-4 h-4 text-[#C76F52]" />
          </Link>
        </div>

        {/* Demo Disclaimer notice */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F0D9CA]/40 border border-[#E8DFD1] text-xs text-[#343D30]/80">
          <Info className="w-4 h-4 text-[#C76F52] shrink-0" />
          <span>Fictional veterinary profiles created exclusively for demonstration purposes.</span>
        </div>

        {/* 4 Veterinarians Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VETERINARIANS.map((vet) => (
            <VetCard key={vet.id} vet={vet} />
          ))}
        </div>
      </div>
    </section>
  );
};
