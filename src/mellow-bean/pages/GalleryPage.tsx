import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';
import { CAFE_GALLERY } from '../data/gallery';
import type { CafeGalleryImage } from '../types/cafe';
import { SectionHeading } from '../components/common/SectionHeading';

const CATEGORIES = [
  'All',
  'Café Spaces',
  'Coffee & Drinks',
  'Artisan Bakery',
  'Brunch Plates',
] as const;

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === 'All'
      ? CAFE_GALLERY
      : CAFE_GALLERY.filter((img) => img.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveImageIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : (prev as number) - 1
    );
  }, [activeImageIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : (prev as number) + 1
    );
  }, [activeImageIndex, filteredImages.length]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') {
        handleCloseLightbox();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handlePrev, handleNext]);

  // Prevent scroll when lightbox open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeImageIndex]);

  const currentImage: CafeGalleryImage | null =
    activeImageIndex !== null ? filteredImages[activeImageIndex] : null;

  return (
    <div className="py-12 sm:py-20 bg-[#F8F2E7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionHeading
            badge="Visual Chronicle"
            title="A Window Into Our Daily Ritual"
            subtitle="Moments of craft, golden morning crusts, steam dancing over pour-overs, and the warmth of community in Indiranagar."
            className="mb-0"
          />
          <p className="font-handwriting text-2xl text-[#B77A4A]">
            “Real light, honest coffee, and quiet corners.”
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveImageIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#382820] text-[#FFFEFA] shadow-md'
                  : 'bg-[#FFFEFA] text-[#382820] border border-[#EADFCF] hover:bg-[#F0D27A] hover:border-[#F0D27A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative rounded-3xl overflow-hidden border border-[#EADFCF] bg-[#382820]/5 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#382820]/80 via-[#382820]/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Top Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FFFEFA]/90 backdrop-blur-sm text-[#382820]">
                    {img.category}
                  </span>

                  {/* Expand icon on hover */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F0D27A] text-[#382820] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom title & caption */}
                  <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-serif font-bold text-lg text-[#FFFEFA]">
                      {img.title}
                    </h3>
                    <p className="text-xs text-[#FFFEFA]/80 mt-1 line-clamp-2">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {currentImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#382820]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={handleCloseLightbox}
            >
              {/* Top Controls */}
              <div
                className="absolute top-5 right-5 sm:top-8 sm:right-8 flex items-center gap-3 z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-xs text-[#FFFEFA]/70 px-3 py-1.5 rounded-full bg-[#FFFEFA]/10">
                  {(activeImageIndex as number) + 1} / {filteredImages.length}
                </span>
                <button
                  type="button"
                  onClick={handleCloseLightbox}
                  className="w-10 h-10 rounded-full bg-[#FFFEFA]/10 hover:bg-[#FFFEFA]/20 text-[#FFFEFA] flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Close image lightbox (Escape)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FFFEFA]/15 hover:bg-[#F0D27A] hover:text-[#382820] text-[#FFFEFA] flex items-center justify-center transition-all z-50 shadow-xl"
                aria-label="Previous image (Left arrow)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FFFEFA]/15 hover:bg-[#F0D27A] hover:text-[#382820] text-[#FFFEFA] flex items-center justify-center transition-all z-50 shadow-xl"
                aria-label="Next image (Right arrow)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Center Content Box */}
              <div
                className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#FFFEFA]/20 max-h-[65vh]">
                  <img
                    src={currentImage.image}
                    alt={currentImage.title}
                    className="max-w-full max-h-[65vh] object-contain mx-auto"
                  />
                </div>

                {/* Caption Bar */}
                <div className="text-center mt-4 max-w-xl px-4 space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F0D27A]">
                    {currentImage.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FFFEFA]">
                    {currentImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFFEFA]/80">
                    {currentImage.caption}
                  </p>
                  <p className="text-[11px] text-[#FFFEFA]/50 pt-2">
                    Tip: Use Left/Right arrow keys to navigate &bull; Esc to close
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryPage;
