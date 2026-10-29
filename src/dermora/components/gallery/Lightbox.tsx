import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../../types/dermora';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function Lightbox({ items, currentIndex, onClose, onSelectIndex }: LightboxProps) {
  const isOpen = currentIndex !== null;
  const currentItem = isOpen ? items[currentIndex] : null;

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex! - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex! + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, items.length, onClose, onSelectIndex]);

  if (!isOpen || !currentItem) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % items.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#292A27]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E4DED4] overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Controls */}
          <div className="p-4 sm:p-5 border-b border-[#E4DED4] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#B77962]" />
              <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B77962]">
                {currentItem.category}
              </span>
              <span className="text-[#77766F] text-xs">·</span>
              <span className="text-xs font-sans text-[#77766F]">
                {currentIndex + 1} of {items.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#F0E9DF] hover:bg-[#38473A] hover:text-white text-[#292A27] flex items-center justify-center transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Photo & Description Area */}
          <div className="flex-grow overflow-y-auto">
            <div className="relative bg-[#292A27] flex items-center justify-center min-h-[300px] sm:min-h-[460px]">
              <ImageWithFallback
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover max-h-[520px]"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-[#38473A] hover:text-white text-[#292A27] flex items-center justify-center backdrop-blur-xs transition-colors shadow-md"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-[#38473A] hover:text-white text-[#292A27] flex items-center justify-center backdrop-blur-xs transition-colors shadow-md"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Description Info */}
            <div className="p-6 sm:p-8 bg-[#FAF7F2] text-left">
              <h3 className="font-serif text-2xl font-normal text-[#292A27] mb-2">
                {currentItem.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#77766F] leading-relaxed">
                {currentItem.description}
              </p>
            </div>
          </div>

          {/* Bottom Thumbnails */}
          <div className="p-3 bg-[#F0E9DF] border-t border-[#E4DED4] overflow-x-auto flex items-center gap-2.5">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => onSelectIndex(idx)}
                className={`relative w-14 h-11 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-[#B77962] scale-105 shadow-xs'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
