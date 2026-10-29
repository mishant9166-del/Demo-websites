import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Camera } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { CAFE_GALLERY } from '../../data/gallery';

export const AtmosphereGallery: React.FC = () => {
  // Show 6 curated images with varied aspects
  const previewImages = CAFE_GALLERY.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#F8F2E7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            tagline="Atmosphere & Craft"
            title="Glimpses of life inside Mellow & Bean."
            description="Baristas at work, warm morning croissants, sunlit wooden tables, and friends sharing long brunches."
            align="left"
            className="mb-0"
          />

          <Link
            to="/mellow-bean/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFEFA] text-[#382820] border border-[#EADFCF] hover:bg-[#F0D27A] hover:border-[#F0D27A] transition-all font-medium text-sm shadow-sm group whitespace-nowrap self-start md:self-auto"
          >
            <Camera className="w-4 h-4 text-[#B77A4A]" />
            <span>View Full Gallery ({CAFE_GALLERY.length} photos)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Varied Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewImages.map((img, index) => (
            <Link
              key={img.id}
              to="/mellow-bean/gallery"
              className={`group relative rounded-3xl overflow-hidden border border-[#EADFCF] bg-[#382820]/5 block shadow-sm hover:shadow-xl transition-all duration-300 ${
                index === 0 || index === 3 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#382820]/80 via-[#382820]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Floating Category Pill */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFEFA]/90 backdrop-blur-sm text-[#382820] shadow-sm">
                  {img.category}
                </span>

                {/* Hover overlay icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F0D27A] text-[#382820] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Caption bottom bar */}
                <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-lg font-serif font-bold text-[#FFFEFA] drop-shadow-sm">
                    {img.title}
                  </h4>
                  <p className="text-xs text-[#FFFEFA]/80 mt-1 line-clamp-1">
                    {img.caption}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
