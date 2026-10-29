import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, CheckCircle2, Sparkles, Building2, Filter, Layers } from 'lucide-react';
import { facilities } from '../data/facilities';
import { SectionHeading } from '../components/common/SectionHeading';
import { FacilityLightbox } from '../components/facilities/FacilityLightbox';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export function FacilitiesPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Patient Accommodation', 'Diagnostic Facilities', 'Surgical Infrastructure', 'Emergency Care', 'Patient Support Areas', 'Critical Care', 'Women & Children'];

  const filteredFacilities = facilities.filter(
    (fac) => selectedCategory === 'All' || fac.category === selectedCategory
  );

  return (
    <div className="py-12 sm:py-20 bg-[#F8FBFD] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Header */}
        <SectionHeading
          eyebrow="CAMPUS & CLINICAL ARCHITECTURE"
          title="Modern Infrastructure."
          highlight="Better Outcomes."
          subtitle="Engineered to the highest international healthcare specifications, our hospital facilities combine advanced medical technology with restorative patient spaces."
          align="center"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-bold text-[#6B7E8E] uppercase tracking-wider mr-2 hidden sm:inline-flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter by Area:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1769AA] text-white shadow-xs'
                  : 'bg-white text-[#6B7E8E] hover:bg-[#EAF5FC] hover:text-[#1769AA] border border-[#E1EAF0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Responsive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => {
            const originalIndex = facilities.findIndex((f) => f.id === facility.id);
            return (
              <motion.div
                key={facility.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedIdx(originalIndex)}
                className="bg-white rounded-3xl border border-[#E1EAF0] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#1769AA]/40 transition-all flex flex-col cursor-pointer group"
              >
                {/* Photo with Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF5FC]">
                  <ImageWithFallback
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#102B46]/20 group-hover:bg-[#102B46]/40 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-[#1769AA] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 shadow-xl">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#1769AA] uppercase tracking-wider border border-[#E1EAF0] shadow-xs">
                    {facility.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#102B46] group-hover:text-[#1769AA] transition-colors leading-snug mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B7E8E] leading-relaxed mb-4 line-clamp-3">
                      {facility.description}
                    </p>

                    {/* Features Snippet */}
                    <ul className="space-y-1.5 mb-4">
                      {facility.features.slice(0, 2).map((feature) => (
                        <li key={feature} className="text-xs text-[#183047] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#18A9A0] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#E1EAF0] flex items-center justify-between text-xs font-bold text-[#1769AA]">
                    <span className="group-hover:text-[#18A9A0] transition-colors">
                      Open Lightbox & Specifications
                    </span>
                    <Sparkles className="w-4 h-4 text-[#18A9A0]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Accessibility & Environmental Standards Strip */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E1EAF0] shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5FC] text-[#1769AA] flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#102B46]">Full Accessibility Standards</h4>
              <p className="text-xs text-[#6B7E8E] leading-relaxed">
                Ramp access, braille signage, audio-assisted elevators, wide hospital corridors, and ADA-compliant recovery bathrooms.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5FC] text-[#1769AA] flex items-center justify-center mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#102B46]">Infection Control & Air Purity</h4>
              <p className="text-xs text-[#6B7E8E] leading-relaxed">
                HEPA-filtered laminar airflow in all surgical and intensive care suites with positive and negative pressure isolation chambers.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5FC] text-[#1769AA] flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#102B46]">Biophilic Healing Design</h4>
              <p className="text-xs text-[#6B7E8E] leading-relaxed">
                Spacious skylight atriums, natural botanical accents, and noise-dampening acoustic ceilings to ease patient stress.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <FacilityLightbox
        facilities={facilities}
        currentIndex={selectedIdx}
        onClose={() => setSelectedIdx(null)}
        onSelectIndex={(idx) => setSelectedIdx(idx)}
      />
    </div>
  );
}
