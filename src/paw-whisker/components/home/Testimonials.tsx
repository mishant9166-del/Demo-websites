import React from 'react';
import { Heart, Info, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';
import { SectionHeading } from '../common/SectionHeading';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Sample Family Experiences"
          badgeVariant="terracotta"
          title="Stories from companions who walk in with confidence."
          subtitle="A glimpse into how low-stress handling and attentive veterinarians transform clinic visits for pets and pet parents."
        />

        {/* Honest Demonstration label */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E8DFD1] text-xs text-[#343D30]/80 shadow-xs">
            <Info className="w-4 h-4 text-[#C76F52]" />
            <span>Illustrative demonstration testimonials from fictional pet parents</span>
          </div>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD1] shadow-xs flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#F0D9CA] fill-current" />
                <p className="text-sm text-[#343D30]/85 italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DFD1] flex items-center justify-between">
                <div>
                  <div className="font-fraunces font-bold text-sm text-[#343D30]">
                    {item.ownerName}
                  </div>
                  <div className="text-xs text-[#82947A] flex items-center gap-1.5 mt-0.5">
                    <Heart className="w-3 h-3 text-[#C76F52] fill-current" />
                    <span>Parent to {item.petName} ({item.petType})</span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#FBF5EA] text-[#343D30]/70 border border-[#E8DFD1]">
                  {item.visitType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
