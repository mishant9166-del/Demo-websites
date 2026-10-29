import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Building2 } from 'lucide-react';
import type { Facility } from '../../types/medora';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface FacilityLightboxProps {
  facilities: Facility[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function FacilityLightbox({
  facilities,
  currentIndex,
  onClose,
  onSelectIndex,
}: FacilityLightboxProps) {
  const isOpen = currentIndex !== null;
  const currentFacility = isOpen ? facilities[currentIndex] : null;

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex! - 1 + facilities.length) % facilities.length);
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex! + 1) % facilities.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, facilities.length, onClose, onSelectIndex]);

  if (!isOpen || !currentFacility) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + facilities.length) % facilities.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % facilities.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0C2237]/90 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl bg-[#102B46] text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Header Controls */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0C2237]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#18A9A0]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#18A9A0]">
                {currentFacility.category}
              </span>
              <span className="text-white/40 text-xs">·</span>
              <span className="text-xs text-[#EAF5FC]/80 font-medium">
                Photo {currentIndex + 1} of {facilities.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Visual & Info Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow overflow-y-auto">
            {/* Left: Image with Navigation Overlays (7 cols) */}
            <div className="lg:col-span-7 relative bg-black flex items-center justify-center min-h-[300px] sm:min-h-[420px]">
              <ImageWithFallback
                src={currentFacility.image}
                alt={currentFacility.title}
                className="w-full h-full object-cover max-h-[500px]"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#1769AA] text-white flex items-center justify-center backdrop-blur-xs transition-colors border border-white/20"
                aria-label="Previous Facility"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#1769AA] text-white flex items-center justify-center backdrop-blur-xs transition-colors border border-white/20"
                aria-label="Next Facility"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Right: Technical Specs & Description (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#102B46] text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {currentFacility.title}
                </h3>
                <p className="text-sm text-[#EAF5FC]/80 leading-relaxed mb-6">
                  {currentFacility.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#18A9A0] flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    Key Architectural & Clinical Features
                  </h4>
                  <ul className="space-y-2">
                    {currentFacility.features.map((feature) => (
                      <li key={feature} className="text-xs text-[#EAF5FC]/90 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#18A9A0] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 text-[11px] text-[#EAF5FC]/60">
                <span>Navigate using Left / Right arrow keys or select a thumbnail below.</span>
              </div>
            </div>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="p-3 bg-[#0C2237] border-t border-white/10 overflow-x-auto flex items-center gap-2.5">
            {facilities.map((fac, idx) => (
              <button
                key={fac.id}
                onClick={() => onSelectIndex(idx)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-[#18A9A0] scale-105 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={fac.image} alt={fac.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
