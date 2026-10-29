import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Calendar, Sparkles, Heart } from 'lucide-react';
import { VETERINARIANS } from '../data/vets';
import { SectionHeading } from '../components/common/SectionHeading';
import { VetCard } from '../components/vets/VetCard';

export const VetsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionHeading
            badge="Our Clinical Team"
            badgeVariant="sage"
            title="Gentle doctors with big hearts for companion animals."
            subtitle="Meet our dedicated veterinarians who combine clinical rigor with low-stress handling, Fear-Free certification, and compassionate communication."
          />

          {/* Honest Demo notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0D9CA]/50 text-xs text-[#343D30]/80 border border-[#E8DFD1]">
            <Info className="w-4 h-4 text-[#C76F52] shrink-0" />
            <span>Fictional demonstration team. All doctor profiles, bios, and schedules are illustrative portfolio content.</span>
          </div>
        </div>

        {/* 4 Veterinarians Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VETERINARIANS.map((vet) => (
            <VetCard key={vet.id} vet={vet} />
          ))}
        </div>

        {/* Our Approach to Gentle Care banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8DFD1] space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C76F52]">
              The Paw &amp; Whisker Difference
            </span>
            <h3 className="font-fraunces text-2xl sm:text-3xl font-bold text-[#343D30]">
              Every companion deserves to be treated at their own speed.
            </h3>
            <p className="text-sm sm:text-base text-[#343D30]/80 leading-relaxed font-normal">
              Whether your pet is an outgoing pup or an introverted indoor cat, our doctors tailor their physical exam style to minimize anxiety. We offer separate exam rooms, pheromone diffusers, lick mats, and low exam tables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8DFD1]">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#82947A] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-fraunces font-bold text-sm text-[#343D30]">
                  Pheromone Diffusion
                </h4>
                <p className="text-xs text-[#343D30]/75 mt-0.5">
                  Natural feline &amp; canine calming scents diffused throughout clinical spaces.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-[#C76F52] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-fraunces font-bold text-sm text-[#343D30]">
                  Floor-Level Examinations
                </h4>
                <p className="text-xs text-[#343D30]/75 mt-0.5">
                  We get down on cozy yoga mats so large or timid dogs never feel trapped high in the air.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#82947A] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-fraunces font-bold text-sm text-[#343D30]">
                  Preferred Doctor Booking
                </h4>
                <p className="text-xs text-[#343D30]/75 mt-0.5">
                  Request your preferred veterinarian each visit for seamless continuity of care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment CTA */}
        <div className="p-8 rounded-3xl bg-[#C76F52] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-fraunces text-2xl font-bold">
              Ready to introduce your companion?
            </h4>
            <p className="text-sm text-white/90">
              Schedule a visit with any of our veterinarians for personalized preventive health care.
            </p>
          </div>
          <Link
            to="/paw-whisker/book-visit"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-[#C76F52] font-bold text-sm hover:bg-[#FBF5EA] transition-colors shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Appointment</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
