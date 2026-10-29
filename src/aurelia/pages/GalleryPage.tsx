import React, { useState } from 'react';
import { Camera, Maximize2, Compass } from 'lucide-react';
import { AURELIA_GALLERY } from '../data/gallery';
import { ImageLightbox } from '../components/common/ImageLightbox';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const categories = [
    'All',
    'Resorts',
    'Rooms & Suites',
    'Dining',
    'Wellness & Pools',
    'Experiences',
  ];

  const filteredImages =
    selectedCategory === 'All'
      ? AURELIA_GALLERY
      : AURELIA_GALLERY.filter((item) => item.category === selectedCategory);

  const imageSrcs = filteredImages.map((item) => item.image);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* Header */}
      <section className="bg-[#173D32] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5BE91] mb-3">
            <Camera className="w-4 h-4" />
            <span>Visual Anthology</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F8F5EF] leading-tight max-w-3xl mb-4">
            Sanctuary in Photography
          </h1>
          <p className="text-base sm:text-lg text-[#F8F5EF]/80 font-light max-w-2xl leading-relaxed">
            Immerse yourself in the textures, spaces, and quiet moments that define the Aurelia Retreats experience across our six properties.
          </p>

          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#D5BE91] text-[#173D32]'
                    : 'bg-white/10 hover:bg-white/20 text-[#F8F5EF] border border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative cursor-pointer bg-white rounded-xs border border-[#D5BE91]/30 overflow-hidden shadow-xs hover:shadow-xl transition-all"
            >
              <div className="aspect-4/3 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4" />

                <span className="absolute top-3 left-3 bg-[#173D32]/85 text-[#D5BE91] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-xs backdrop-blur-xs">
                  {item.category}
                </span>

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-serif text-sm font-semibold text-[#F8F5EF] leading-snug">
                    {item.title}
                  </h3>
                  {item.stayName && (
                    <span className="text-[11px] text-[#D5BE91] flex items-center gap-1 mt-0.5">
                      <Compass className="w-3 h-3" />
                      {item.stayName}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        images={imageSrcs}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % imageSrcs.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + imageSrcs.length) % imageSrcs.length)}
        title={filteredImages[lightboxIndex]?.title}
      />
    </div>
  );
};
