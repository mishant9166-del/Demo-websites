import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { VET_SERVICES } from '../../data/services';
import { SectionHeading } from '../common/SectionHeading';
import { ServiceCard } from '../services/ServiceCard';

export const ServicesOverview: React.FC = () => {
  // Show 6 curated services on homepage with varied layout
  const featuredServices = VET_SERVICES.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#FBF5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            badge="Compassionate Care"
            badgeVariant="terracotta"
            alignment="left"
            title="Complete veterinary care, tailored for every stage."
            subtitle="From energetic kittens and puppies to wise senior companions, we deliver gentle diagnostics, preventive medicine, and attentive medical care."
          />
          <Link
            to="/paw-whisker/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-[#E8DFD1] text-sm font-semibold text-[#343D30] hover:bg-[#F0D9CA]/40 transition-colors shadow-xs shrink-0 self-start md:self-auto"
          >
            <span>View All 8 Services</span>
            <ArrowRight className="w-4 h-4 text-[#C76F52]" />
          </Link>
        </div>

        {/* Varied Grid: Top 2 large featured cards, followed by 4 standard cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              variant={index < 2 ? 'featured' : 'compact'}
            />
          ))}
        </div>

        {/* Bottom Banner callout for urgent triage */}
        <div className="p-6 rounded-3xl bg-[#82947A]/15 border border-[#82947A]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-fraunces text-lg font-bold text-[#343D30]">
              Looking for something specific or an emergency concern?
            </h3>
            <p className="text-xs sm:text-sm text-[#343D30]/80 mt-0.5">
              We provide full diagnostic bloodwork, digital radiography, microchipping, and wellness plans.
            </p>
          </div>
          <Link
            to="/paw-whisker/emergency-care"
            className="shrink-0 px-4 py-2 rounded-xl bg-[#343D30] text-white text-xs font-semibold hover:bg-[#232920] transition-colors"
          >
            Check Emergency Guide
          </Link>
        </div>
      </div>
    </section>
  );
};
