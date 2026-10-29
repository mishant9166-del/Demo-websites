import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Share2, Heart, Check, X } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { useFavorites } from '../../hooks/useFavorites';

interface VehicleGalleryProps {
  images: string[];
  vehicleId: string;
  vehicleName: string;
}

export function VehicleGallery({ images, vehicleId, vehicleName }: VehicleGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  const favorited = isFavorite(vehicleId);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevImage, nextImage]);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `Velocity Automotive — ${vehicleName}`,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 3000);
      }
    } catch {
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 3000);
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Image Showcase */}
      <div className="relative h-[340px] sm:h-[480px] lg:h-[540px] w-full rounded-lg overflow-hidden bg-[#101315] border border-white/10 group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={images[currentIndex]}
              alt={`${vehicleName} view ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Top Floating Controls */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="px-3 py-1 rounded bg-black/70 backdrop-blur-md text-xs font-mono text-[#F5F7F7] border border-white/10">
            <span>{currentIndex + 1}</span>
            <span className="text-[#A0A7AC] mx-1">/</span>
            <span className="text-[#A0A7AC]">{images.length}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white hover:text-[#C8FF45] border border-white/10 transition-colors cursor-pointer"
              aria-label="Share vehicle"
              title="Share or copy link"
            >
              {copiedShare ? <Check className="w-4 h-4 text-[#C8FF45]" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => toggleFavorite(vehicleId)}
              className={`p-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 transition-colors cursor-pointer ${
                favorited ? 'text-rose-400' : 'text-white hover:text-rose-400'
              }`}
              aria-label="Save vehicle to favorites"
            >
              <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white hover:text-[#C8FF45] border border-white/10 transition-colors cursor-pointer"
              aria-label="Open fullscreen gallery"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Arrow Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 hover:text-white hover:bg-black/90 border border-white/10 transition-all opacity-0 group-hover:opacity-100 cursor-pointer focus:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 hover:text-white hover:bg-black/90 border border-white/10 transition-all opacity-0 group-hover:opacity-100 cursor-pointer focus:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Bottom Quick Toast when URL copied */}
        {copiedShare && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded bg-[#C8FF45] text-[#080A0B] text-xs font-bold font-mono tracking-wider shadow-lg">
            Direct Link Copied to Clipboard
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-20 sm:h-24 rounded overflow-hidden border transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'border-[#C8FF45] ring-2 ring-[#C8FF45]/30 opacity-100 scale-[1.02]'
                  : 'border-white/10 opacity-60 hover:opacity-100'
              }`}
              aria-label={`View photo ${idx + 1}`}
            >
              <ImageWithFallback
                src={img}
                alt={`${vehicleName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8">
            <div className="flex items-center justify-between text-[#F5F7F7] z-10">
              <span className="font-bold text-sm tracking-wide">{vehicleName}</span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-[#A0A7AC] hover:text-white transition-colors cursor-pointer"
                aria-label="Close fullscreen view"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative flex items-center justify-center flex-grow py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-[82vh] max-w-6xl w-full h-full flex items-center justify-center"
                >
                  <img
                    src={images[currentIndex]}
                    alt={`${vehicleName} expanded`}
                    className="max-h-full max-w-full object-contain rounded"
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            <div className="text-center font-mono text-xs text-[#A0A7AC]">
              {currentIndex + 1} of {images.length} • Use Arrow Keys to navigate • ESC to close
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
