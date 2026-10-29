import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Compass,
  ArrowLeft,
  Users,
  Bed,
  Maximize2,
  CheckCircle2,
  CalendarCheck,
  Eye,
  Sparkles,
} from 'lucide-react';
import { AURELIA_ROOMS } from '../data/rooms';
import { AURELIA_STAYS } from '../data/stays';
import { ImageLightbox } from '../components/common/ImageLightbox';

export const RoomDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const room = AURELIA_ROOMS.find((r) => r.slug === slug);

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!room) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F8F5EF] px-4 text-center">
        <Compass className="w-12 h-12 text-[#173D32] mb-4 stroke-1" />
        <h1 className="text-3xl font-serif text-[#173D32] mb-2">Suite or Room Not Found</h1>
        <p className="text-sm text-[#292B27]/70 mb-6">
          The requested suite category does not exist in our demo collection.
        </p>
        <Link
          to="/aurelia/stays"
          className="px-6 py-2.5 bg-[#173D32] text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold rounded-xs"
        >
          &larr; Return to All Stays
        </Link>
      </div>
    );
  }

  // Find related stay
  const relatedStay = AURELIA_STAYS.find(
    (s) => s.id === room.stayId || s.roomSlugs.includes(room.slug)
  );

  const allImages = [room.heroImage, ...(room.galleryImages || [])];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* Hero Photographic Header */}
      <div className="relative min-h-[60vh] flex items-end bg-[#173D32] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={room.heroImage}
            alt={room.name}
            className="w-full h-full object-cover filter brightness-[0.78]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#122A22] via-[#173D32]/40 to-black/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          {relatedStay ? (
            <Link
              to={`/aurelia/stays/${relatedStay.slug}`}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#D5BE91] hover:text-white mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to {relatedStay.name}</span>
            </Link>
          ) : (
            <Link
              to="/aurelia/stays"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#D5BE91] hover:text-white mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Stays</span>
            </Link>
          )}

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#D5BE91] mb-2">
            <span className="px-2.5 py-0.5 bg-[#173D32]/80 backdrop-blur-xs rounded-xs border border-[#D5BE91]/30">
              {room.category}
            </span>
            <span>{room.stayName}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F8F5EF] mb-3">
            {room.name}
          </h1>

          <p className="text-base sm:text-lg text-[#F8F5EF]/85 font-light max-w-3xl italic">
            &ldquo;{room.tagline}&rdquo;
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => handleOpenLightbox(0)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-[#F8F5EF] backdrop-blur-xs border border-white/30 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center gap-2"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#D5BE91]" />
              <span>View Gallery ({allImages.length})</span>
            </button>
            <Link
              to={`/aurelia/booking?roomSlug=${room.slug}${
                relatedStay ? `&staySlug=${relatedStay.slug}` : ''
              }`}
              className="px-6 py-2 bg-[#D5BE91] hover:bg-[#E3D0A8] text-[#173D32] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center gap-2"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Reserve This Suite</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Room Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white rounded-xs border border-[#D5BE91]/40 shadow-xs">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#B8B0A2] tracking-wider block mb-1">
                  Space Area
                </span>
                <span className="text-base font-serif font-bold text-[#173D32]">
                  {room.areaSqFt} sq ft
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#B8B0A2] tracking-wider block mb-1">
                  Max Occupancy
                </span>
                <div className="flex items-center gap-1.5 text-[#173D32]">
                  <Users className="w-4 h-4 text-[#D5BE91]" />
                  <span className="text-sm font-semibold">{room.maxOccupancy} Guests</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#B8B0A2] tracking-wider block mb-1">
                  Bed Configuration
                </span>
                <div className="flex items-center gap-1.5 text-[#173D32]">
                  <Bed className="w-4 h-4 text-[#D5BE91]" />
                  <span className="text-xs font-medium">{room.bedConfig}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#B8B0A2] tracking-wider block mb-1">
                  Scenic Outlook
                </span>
                <div className="flex items-center gap-1.5 text-[#173D32]">
                  <Eye className="w-4 h-4 text-[#D5BE91]" />
                  <span className="text-xs font-medium">{room.view}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-serif text-[#173D32] mb-4">Architectural Design & Space</h2>
              <p className="text-base text-[#292B27]/80 font-light leading-relaxed mb-6">
                {room.description}
              </p>
            </div>

            {/* Distinct Features */}
            {room.features && room.features.length > 0 && (
              <div>
                <h3 className="text-xl font-serif text-[#173D32] mb-4">Suite Highlights</h3>
                <div className="space-y-2.5">
                  {room.features.map((feature, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-white rounded-xs border border-[#D5BE91]/30 flex items-start gap-3 text-xs text-[#292B27]/85"
                    >
                      <Sparkles className="w-4 h-4 text-[#D5BE91] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* In-Suite Amenities */}
            <div>
              <h3 className="text-xl font-serif text-[#173D32] mb-4">In-Suite Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white rounded-xs border border-[#D5BE91]/25 flex items-center gap-2.5 text-xs text-[#292B27]/85"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#173D32] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {allImages.length > 1 && (
              <div>
                <h3 className="text-xl font-serif text-[#173D32] mb-4">Visual Details</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleOpenLightbox(idx)}
                      className="aspect-4/3 rounded-xs overflow-hidden relative group focus:outline-none"
                    >
                      <img
                        src={img}
                        alt={`${room.name} frame ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Pricing & Booking Panel */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-xs border border-[#D5BE91]/50 p-6 sm:p-8 shadow-md space-y-6">
              <div className="border-b border-[#D5BE91]/25 pb-4">
                <span className="text-[10px] uppercase font-semibold text-[#B8B0A2] tracking-widest block mb-1">
                  Indicative Nightly Demo Rate
                </span>
                <div className="text-3xl font-serif text-[#173D32] font-bold">
                  {room.priceFormatted}
                </div>
                <span className="text-xs text-[#292B27]/60 block mt-1">
                  Taxes & curated morning breakfast included
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-[#292B27]/80">
                  <span className="text-[#B8B0A2] uppercase tracking-wider">Property</span>
                  <span className="font-semibold text-[#173D32]">{room.stayName}</span>
                </div>
                <div className="flex items-center justify-between text-[#292B27]/80">
                  <span className="text-[#B8B0A2] uppercase tracking-wider">Category</span>
                  <span className="font-semibold text-[#173D32]">{room.category}</span>
                </div>
                <div className="flex items-center justify-between text-[#292B27]/80">
                  <span className="text-[#B8B0A2] uppercase tracking-wider">Occupancy</span>
                  <span className="font-semibold text-[#173D32]">Up to {room.maxOccupancy} Guests</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={`/aurelia/booking?roomSlug=${room.slug}${
                    relatedStay ? `&staySlug=${relatedStay.slug}` : ''
                  }`}
                  className="w-full py-3.5 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold text-center block rounded-xs shadow-md transition-all"
                >
                  Reserve This Suite &rarr;
                </Link>
              </div>

              {relatedStay && (
                <div className="pt-3 border-t border-[#D5BE91]/20 text-center">
                  <Link
                    to={`/aurelia/stays/${relatedStay.slug}`}
                    className="text-xs text-[#173D32] font-semibold hover:text-[#D5BE91] transition-colors"
                  >
                    View All {relatedStay.name} Suites &rarr;
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={allImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % allImages.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
        title={room.name}
      />
    </div>
  );
};
