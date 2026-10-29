import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Info } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#E3ECE9] text-[#152B32]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D9488] block mb-2">
            PATIENT EXPERIENCES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Real People. Real Smiles.
          </h2>
          <p className="text-xs text-[#687A80] mt-2 flex items-center justify-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Illustrative sample feedback created for website demonstration.</span>
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-[#FAFCFB] border border-[#E3ECE9] rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="absolute top-6 right-6 text-[#E6F6F2]">
            <Quote className="w-12 h-12" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-base sm:text-xl font-medium text-[#152B32] leading-relaxed">
                "{current.comment}"
              </blockquote>

              {/* Author & Treatment */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#E3ECE9]">
                {current.avatar && (
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#0D9488]/20 bg-[#E6F6F2] shrink-0">
                    <ImageWithFallback
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-bold text-[#152B32]">{current.name}</h4>
                  <span className="text-xs text-[#0D9488] font-semibold">
                    {current.treatment}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#E3ECE9]/60">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-[#0D9488]' : 'w-2 bg-[#E3ECE9]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-full bg-white border border-[#E3ECE9] text-[#152B32] hover:bg-[#F0F8F6] hover:text-[#0D9488] transition-colors cursor-pointer shadow-2xs"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextSlide}
                className="p-2.5 rounded-full bg-white border border-[#E3ECE9] text-[#152B32] hover:bg-[#F0F8F6] hover:text-[#0D9488] transition-colors cursor-pointer shadow-2xs"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
