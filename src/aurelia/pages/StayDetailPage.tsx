import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Compass,
  MapPin,
  ArrowLeft,
  Utensils,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Maximize2,
  CalendarCheck,
  CheckCircle2,
} from 'lucide-react';
import { AURELIA_STAYS } from '../data/stays';
import { AURELIA_ROOMS } from '../data/rooms';
import { AURELIA_FAQS } from '../data/faq';
import { ImageLightbox } from '../components/common/ImageLightbox';

export const StayDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const stay = AURELIA_STAYS.find((s) => s.slug === slug);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Accordion state for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!stay) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F8F5EF] px-4 text-center">
        <Compass className="w-12 h-12 text-[#173D32] mb-4 stroke-1" />
        <h1 className="text-3xl font-serif text-[#173D32] mb-2">Sanctuary Not Found</h1>
        <p className="text-sm text-[#292B27]/70 mb-6">
          The requested retreat property is not in our active collection.
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

  // Find rooms belonging to this stay
  const matchingRooms = AURELIA_ROOMS.filter(
    (r) => r.stayId === stay.id || stay.roomSlugs.includes(r.slug)
  );

  // Similar stays
  const similarStays = AURELIA_STAYS.filter((s) => s.slug !== stay.slug).slice(0, 2);

  // Combine hero and gallery images for lightbox
  const allImages = [stay.heroImage, ...(stay.galleryImages || [])];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* 1. Hero Photographic Header */}
      <div className="relative min-h-[65vh] flex items-end bg-[#173D32] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={stay.heroImage}
            alt={stay.name}
            className="w-full h-full object-cover filter brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#122A22] via-[#173D32]/40 to-black/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <Link
            to="/aurelia/stays"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#D5BE91] hover:text-white mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Stays & Retreats</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#D5BE91] mb-3">
            <span className="px-2.5 py-0.5 bg-[#173D32]/80 backdrop-blur-xs rounded-xs border border-[#D5BE91]/30">
              {stay.propertyType}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {stay.location}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F8F5EF] mb-3">
            {stay.name}
          </h1>

          <p className="text-base sm:text-lg text-[#F8F5EF]/90 font-light max-w-3xl italic">
            &ldquo;{stay.tagline}&rdquo;
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => handleOpenLightbox(0)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-[#F8F5EF] backdrop-blur-xs border border-white/30 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center gap-2"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#D5BE91]" />
              <span>View Image Gallery ({allImages.length})</span>
            </button>
            <Link
              to={`/aurelia/booking?staySlug=${stay.slug}`}
              className="px-6 py-2 bg-[#D5BE91] hover:bg-[#E3D0A8] text-[#173D32] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center gap-2"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Reserve Sanctuary</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview */}
            <div>
              <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#173D32] mb-2">
                Sanctuary Overview
              </div>
              <h2 className="text-3xl font-serif text-[#173D32] mb-6">
                Refined solitude immersed in native terroir.
              </h2>
              <p className="text-base text-[#292B27]/85 font-light leading-relaxed mb-6">
                {stay.fullDescription}
              </p>
            </div>

            {/* Photo Gallery Grid with Lightbox Triggers */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-serif text-[#173D32]">Sanctuary Gallery</h3>
                <span className="text-xs text-[#B8B0A2] uppercase tracking-wider">
                  Click any image to expand
                </span>
              </div>
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
                      alt={`${stay.name} photograph ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white p-1 rounded-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Room and Suite Listings */}
            <div>
              <div className="mb-6">
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#173D32] mb-1">
                  Private Accommodations
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#173D32]">
                  Suites, Villas & Pavilions
                </h3>
              </div>

              <div className="space-y-6">
                {matchingRooms.length > 0 ? (
                  matchingRooms.map((room) => (
                    <div
                      key={room.slug}
                      className="bg-white rounded-xs border border-[#D5BE91]/40 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row"
                    >
                      <div className="md:w-5/12 relative min-h-[220px]">
                        <img
                          src={room.heroImage}
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-3 left-3 bg-[#173D32]/90 text-[#D5BE91] text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-xs">
                          {room.category}
                        </span>
                      </div>

                      <div className="md:w-7/12 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-xl font-serif text-[#173D32]">{room.name}</h4>
                            <span className="text-xs font-serif font-bold text-[#173D32]">
                              {room.priceFormatted}
                            </span>
                          </div>
                          <p className="text-xs text-[#292B27]/70 font-light mb-3">
                            {room.tagline}
                          </p>

                          <div className="flex flex-wrap gap-4 text-xs text-[#292B27]/70 py-2 border-y border-[#D5BE91]/20 mb-3">
                            <span>{room.bedConfig}</span>
                            <span>&bull;</span>
                            <span>{room.areaSqFt} sq ft</span>
                            <span>&bull;</span>
                            <span>Max {room.maxOccupancy} Guests</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <Link
                            to={`/aurelia/rooms/${room.slug}`}
                            className="text-xs uppercase tracking-wider font-semibold text-[#173D32] hover:text-[#D5BE91] transition-colors"
                          >
                            Suite Details &rarr;
                          </Link>
                          <Link
                            to={`/aurelia/booking?staySlug=${stay.slug}&roomSlug=${room.slug}`}
                            className="px-4 py-2 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold rounded-xs"
                          >
                            Reserve Room
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 bg-white rounded-xs border border-[#D5BE91]/30 text-xs text-[#292B27]/70">
                    Bespoke suites available on enquiry. Please contact the concierge desk or proceed to the booking console.
                  </div>
                )}
              </div>
            </div>

            {/* Amenities and Facilities */}
            <div>
              <h3 className="text-2xl font-serif text-[#173D32] mb-6">Signature Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stay.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-white rounded-xs border border-[#D5BE91]/30 flex items-center gap-2.5 text-xs text-[#292B27]/85"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#173D32] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dining Experiences */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#173D32] mb-2">
                <Utensils className="w-4 h-4 text-[#D5BE91]" />
                <span>Culinary Program</span>
              </div>
              <h3 className="text-2xl font-serif text-[#173D32] mb-6">Estate Dining & Bars</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stay.diningOptions.map((dining, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white rounded-xs border border-[#D5BE91]/30 shadow-xs space-y-2"
                  >
                    <span className="text-[10px] uppercase font-semibold text-[#B8B0A2] tracking-wider block">
                      {dining.cuisine}
                    </span>
                    <h4 className="text-lg font-serif font-bold text-[#173D32]">{dining.name}</h4>
                    <p className="text-xs text-[#292B27]/75 font-light leading-relaxed">
                      {dining.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Wellness & Recreation */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#173D32] mb-2">
                <Sparkles className="w-4 h-4 text-[#D5BE91]" />
                <span>Restoration</span>
              </div>
              <h3 className="text-2xl font-serif text-[#173D32] mb-6">Wellness & Local Trails</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xs border border-[#D5BE91]/30">
                  <h4 className="text-base font-serif font-bold text-[#173D32] mb-3">
                    Spa & Hydrotherapy
                  </h4>
                  <ul className="space-y-2 text-xs text-[#292B27]/80">
                    {stay.wellnessFeatures.map((w, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#173D32]" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-white rounded-xs border border-[#D5BE91]/30">
                  <h4 className="text-base font-serif font-bold text-[#173D32] mb-3">
                    Guided Regional Activities
                  </h4>
                  <ul className="space-y-2 text-xs text-[#292B27]/80">
                    {stay.localActivities.map((a, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D5BE91]" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div>
              <h3 className="text-2xl font-serif text-[#173D32] mb-6">
                Sanctuary Information & FAQs
              </h3>
              <div className="space-y-3">
                {AURELIA_FAQS.slice(0, 4).map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xs border border-[#D5BE91]/30 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between text-sm font-medium text-[#173D32] hover:bg-[#F8F5EF]/50 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#B8B0A2] transition-transform ${
                          openFaq === idx ? 'rotate-180 text-[#173D32]' : ''
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 pt-0 text-xs text-[#292B27]/75 font-light leading-relaxed border-t border-[#D5BE91]/15">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Sticky Reservation Summary Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-xs border border-[#D5BE91]/50 p-6 sm:p-8 shadow-md space-y-6">
              <div className="border-b border-[#D5BE91]/25 pb-4">
                <span className="text-[10px] uppercase font-semibold text-[#B8B0A2] tracking-widest block mb-1">
                  Indicative Demo Pricing
                </span>
                <div className="text-3xl font-serif text-[#173D32] font-bold">
                  {stay.startingPriceFormatted}
                </div>
                <span className="text-xs text-[#292B27]/60 block mt-1">
                  Includes regional breakfast & botanical tea tasting
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-[#292B27]/80">
                  <span className="text-[#B8B0A2] uppercase tracking-wider">Destination</span>
                  <span className="font-semibold text-[#173D32]">{stay.destinationName}</span>
                </div>
                <div className="flex items-center justify-between text-[#292B27]/80">
                  <span className="text-[#B8B0A2] uppercase tracking-wider">Guest Capacity</span>
                  <span className="font-semibold text-[#173D32]">{stay.guestCapacity}</span>
                </div>
                <div className="flex items-center justify-between text-[#292B27]/80">
                  <span className="text-[#B8B0A2] uppercase tracking-wider">Property Style</span>
                  <span className="font-semibold text-[#173D32]">{stay.propertyType}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={`/aurelia/booking?staySlug=${stay.slug}`}
                  className="w-full py-3.5 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold text-center block rounded-xs shadow-md transition-all"
                >
                  Plan Your Stay Here &rarr;
                </Link>
              </div>

              <p className="text-[11px] text-[#292B27]/60 text-center font-light leading-relaxed">
                * Demonstration portfolio stay. Saves local booking parameters without real payment processing.
              </p>
            </div>
          </div>
        </div>

        {/* Similar Stays */}
        <div className="mt-20 pt-12 border-t border-[#D5BE91]/30">
          <h3 className="text-2xl font-serif text-[#173D32] mb-8">Other Aurelia Sanctuaries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {similarStays.map((sim) => (
              <div
                key={sim.slug}
                className="bg-white rounded-xs border border-[#D5BE91]/30 overflow-hidden shadow-xs flex flex-col sm:flex-row"
              >
                <div className="sm:w-5/12 aspect-4/3 relative">
                  <img src={sim.heroImage} alt={sim.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-7/12 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-[#B8B0A2] uppercase tracking-wider block mb-1">
                      {sim.destinationName}
                    </span>
                    <h4 className="text-xl font-serif text-[#173D32] mb-2">{sim.name}</h4>
                    <p className="text-xs text-[#292B27]/70 line-clamp-2">{sim.shortDescription}</p>
                  </div>
                  <div className="pt-4 border-t border-[#D5BE91]/20 flex items-center justify-between">
                    <span className="text-xs font-serif font-bold text-[#173D32]">
                      {sim.startingPriceFormatted}
                    </span>
                    <Link
                      to={`/aurelia/stays/${sim.slug}`}
                      className="text-xs uppercase font-semibold text-[#173D32] flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={allImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
        title={stay.name}
      />
    </div>
  );
};
