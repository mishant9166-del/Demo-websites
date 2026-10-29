import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { Lightbox } from '../components/gallery/Lightbox';

const CATEGORIES = ['All Spaces', 'Clinic Interior', 'Treatment Rooms', 'Skincare Aesthetics'];

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Spaces');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'All Spaces') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="pt-8 pb-20">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-6xl mb-12">
        <SectionHeading
          eyebrow="FACILITIES & SPACES"
          title="Inside the"
          highlight="DERMORA Clinic"
          subtitle="Explore our thoughtfully designed clinic spaces, serene consultation rooms, and modern aesthetic environments created with your comfort in mind."
          align="center"
        />

        {/* Filter categories */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#38473A] text-white shadow-sm'
                  : 'bg-white text-[#292A27] border border-[#E4DED4] hover:bg-[#F0E9DF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-Style Gallery Grid */}
      <section className="container mx-auto px-6 max-w-6xl">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => {
            // Find global index in galleryItems for lightbox navigation
            const globalIndex = galleryItems.findIndex((g) => g.id === item.id);

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveImageIndex(globalIndex)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#E4DED4] bg-white shadow-sm hover:shadow-md transition-all aspect-[4/3]"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay with details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292A27]/80 via-[#292A27]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#9BAA96] font-semibold block mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-white text-base font-normal">
                        {item.title}
                      </h4>
                      <p className="text-white/80 text-xs mt-1 font-light line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center shrink-0">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <Lightbox
          items={galleryItems}
          currentIndex={activeImageIndex}
          onClose={() => setActiveImageIndex(null)}
          onSelectIndex={(newIndex: number) => setActiveImageIndex(newIndex)}
        />
      )}

      {/* Disclaimer */}
      <section className="container mx-auto px-6 max-w-4xl mt-16 text-center">
        <p className="text-xs text-[#77766F] italic">
          Note: Photographs represent illustrative clinic interior design and aesthetic environments created for portfolio presentation.
        </p>
      </section>
    </div>
  );
};

export default GalleryPage;
