import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Maximize2, Tag } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Lightbox from '../components/gallery/Lightbox';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { galleryItems } from '../data/gallery';

const CATEGORIES = [
  'All',
  'Treatment Rooms',
  'Rehabilitation Exercises',
  'Sports Recovery',
  'Mobility & Balance',
  'Clinic Interior',
];

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="py-12 sm:py-16 bg-[#FAFBF8] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <SectionHeading
            badge="CLINICAL ENVIRONMENT &amp; PRACTICE"
            title="A glimpse into our rehabilitation spaces."
            subtitle="Explore our modern private consultation suites, active exercise gym, treatment amenities, and supportive recovery environment."
          />
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs font-bold text-[#727C75] mr-2 flex items-center gap-1.5 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#285A49]" />
            Spaces:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#285A49] text-white shadow-xs font-bold'
                  : 'bg-white text-[#727C75] hover:text-[#242C28] hover:bg-[#E8F2EC] border border-[#E1E8E2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#E1E8E2] shadow-sm hover:shadow-md cursor-pointer transition-all aspect-[4/3]"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5 text-white" />

              {/* Category pill on image */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#285A49] shadow-xs backdrop-blur-xs">
                  <Tag className="w-3 h-3 text-[#72A88A]" />
                  {item.category}
                </span>
              </div>

              {/* Hover expand icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description caption on hover */}
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h4 className="font-heading text-sm font-bold">{item.title}</h4>
                <p className="text-[11px] text-white/80 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Component */}
        <Lightbox
          items={filteredItems}
          currentIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onNavigate={(index) => setActiveLightboxIndex(index)}
        />

        {/* Portfolio note */}
        <div className="mt-16 text-center">
          <p className="text-[11px] text-[#727C75]">
            * Gallery photographs depict modern physiotherapy settings and authentic rehabilitation exercises for demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
