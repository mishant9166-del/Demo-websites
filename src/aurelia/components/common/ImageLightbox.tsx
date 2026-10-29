import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  title?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  title,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#173D32]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
    >
      {/* Lightbox Header */}
      <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full pt-2">
        <div className="space-y-0.5">
          <span className="text-xs uppercase tracking-widest text-[#D5BE91] font-mono block">
            Photograph {currentIndex + 1} of {images.length}
          </span>
          {title && <h4 className="text-sm font-serif font-medium text-white/90">{title}</h4>}
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full py-4">
        <img
          src={images[currentIndex]}
          alt={title || `Resort photograph ${currentIndex + 1}`}
          className="max-h-[82vh] max-w-full object-contain rounded-xs shadow-2xl transition-opacity duration-300"
        />

        {/* Prev Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous photograph"
            className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-all focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={onNext}
            aria-label="Next photograph"
            className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-all focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Thumbnails Footer */}
      <div className="max-w-3xl mx-auto w-full flex items-center justify-center gap-2 overflow-x-auto py-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              const diff = idx - currentIndex;
              if (diff > 0) {
                for (let i = 0; i < diff; i++) onNext();
              } else if (diff < 0) {
                for (let i = 0; i < Math.abs(diff); i++) onPrev();
              }
            }}
            className={`w-14 h-10 rounded-xs overflow-hidden shrink-0 border-2 transition-all ${
              idx === currentIndex
                ? 'border-[#D5BE91] scale-105'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt="thumb" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};
