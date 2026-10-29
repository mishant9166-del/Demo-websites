import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { facilities } from '../../data/facilities';
import { SectionHeading } from '../common/SectionHeading';
import { FacilityLightbox } from '../facilities/FacilityLightbox';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function FacilitiesHighlight() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const previewFacilities = facilities.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#F8FBFD] border-b border-[#E1EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="WORLD-CLASS INFRASTRUCTURE"
            title="Modern Infrastructure."
            highlight="Better Outcomes."
            subtitle="Our clinical environments and diagnostic suites are designed to provide safe, comfortable, and efficient healthcare for patients and families."
            className="mb-0"
          />

          <Link
            to="/medora/facilities"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#EAF5FC] text-[#1769AA] text-sm font-bold border border-[#E1EAF0] shadow-2xs hover:shadow-sm transition-all shrink-0 self-start md:self-auto"
          >
            <span>Explore All Facilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewFacilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedIdx(index)}
              className="bg-white rounded-2xl border border-[#E1EAF0] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#1769AA]/40 transition-all flex flex-col cursor-pointer group text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAF5FC]">
                <ImageWithFallback
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#102B46]/20 group-hover:bg-[#102B46]/40 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#1769AA] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#1769AA] uppercase tracking-wider border border-[#E1EAF0]">
                  {facility.category}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#102B46] group-hover:text-[#1769AA] transition-colors leading-snug mb-2">
                    {facility.title}
                  </h4>
                  <p className="text-xs text-[#6B7E8E] line-clamp-2 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E1EAF0] mt-4 flex items-center justify-between text-xs font-semibold text-[#1769AA]">
                  <span>Click to view photos</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#18A9A0]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <FacilityLightbox
        facilities={facilities}
        currentIndex={selectedIdx}
        onClose={() => setSelectedIdx(null)}
        onSelectIndex={(idx) => setSelectedIdx(idx)}
      />
    </section>
  );
}
