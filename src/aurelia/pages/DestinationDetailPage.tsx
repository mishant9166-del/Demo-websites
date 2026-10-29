import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Compass, MapPin, ArrowLeft, Sun, Wind, Sparkles, ArrowRight } from 'lucide-react';
import { AURELIA_DESTINATIONS } from '../data/destinations';
import { AURELIA_STAYS } from '../data/stays';

export const DestinationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const destination = AURELIA_DESTINATIONS.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F8F5EF] px-4 text-center">
        <Compass className="w-12 h-12 text-[#173D32] mb-4 stroke-1" />
        <h1 className="text-3xl font-serif text-[#173D32] mb-2">Destination Not Found</h1>
        <p className="text-sm text-[#292B27]/70 mb-6">
          The requested retreat region could not be located in our collection.
        </p>
        <Link
          to="/aurelia/destinations"
          className="px-6 py-2.5 bg-[#173D32] text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold rounded-xs"
        >
          &larr; Return to All Destinations
        </Link>
      </div>
    );
  }

  const matchingStays = AURELIA_STAYS.filter((s) => s.destinationSlug === destination.slug);

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* Hero Header */}
      <div className="relative min-h-[60vh] flex items-end bg-[#173D32] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover filter brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#122A22] via-[#173D32]/40 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <Link
            to="/aurelia/destinations"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#D5BE91] hover:text-white mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Destination Collections</span>
          </Link>

          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D5BE91] mb-2">
            <MapPin className="w-4 h-4" />
            <span>{destination.region}, {destination.state}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F8F5EF] mb-3">
            {destination.name}
          </h1>

          <p className="text-lg text-[#F8F5EF]/85 font-light max-w-3xl italic">
            &ldquo;{destination.tagline}&rdquo;
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Editorial Section */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#173D32] mb-4">
                The Landscape & Atmosphere
              </h2>
              <p className="text-base text-[#292B27]/85 font-light leading-relaxed mb-6">
                {destination.description}
              </p>
              <div className="p-6 bg-white rounded-xs border-l-4 border-[#173D32] shadow-xs">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#173D32] mb-1">
                  <Wind className="w-4 h-4 text-[#D5BE91]" />
                  <span>Ambient Ecology</span>
                </div>
                <p className="text-sm text-[#292B27]/80 italic">
                  {destination.landscapeAtmosphere}
                </p>
              </div>
            </div>

            {/* Gallery Images of Destination */}
            {destination.galleryImages && destination.galleryImages.length > 0 && (
              <div>
                <h3 className="text-xl font-serif text-[#173D32] mb-4">Regional Perspective</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {destination.galleryImages.map((img, i) => (
                    <div key={i} className="aspect-16/10 rounded-xs overflow-hidden shadow-xs">
                      <img
                        src={img}
                        alt={`${destination.name} perspective ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Featured Experiences in this Region */}
            <div>
              <h3 className="text-2xl font-serif text-[#173D32] mb-4">
                Signature Regional Encounters
              </h3>
              <div className="space-y-3">
                {destination.featuredExperiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xs border border-[#D5BE91]/30 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-[#D5BE91]" />
                      <span className="text-sm font-medium text-[#173D32]">{exp}</span>
                    </div>
                    <span className="text-xs text-[#B8B0A2] uppercase tracking-wider">Demo Curated</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Details & Direct Reservation Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-xs border border-[#D5BE91]/40 shadow-sm space-y-6">
              <h3 className="text-lg font-serif text-[#173D32] border-b border-[#D5BE91]/20 pb-3">
                Visitor Intelligence
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-[#B8B0A2] uppercase tracking-wider block mb-1">
                    Ideal Visiting Season
                  </span>
                  <div className="flex items-start gap-2 text-[#292B27]/85 font-light">
                    <Sun className="w-4 h-4 text-[#173D32] shrink-0 mt-0.5" />
                    <span>{destination.bestTimeToVisit}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[#B8B0A2] uppercase tracking-wider block mb-1">
                    Geography Category
                  </span>
                  <span className="inline-block px-2.5 py-1 bg-[#173D32]/10 text-[#173D32] font-semibold uppercase rounded-xs">
                    {destination.type}
                  </span>
                </div>

                <div>
                  <span className="text-[#B8B0A2] uppercase tracking-wider block mb-1">
                    Available Stays
                  </span>
                  <span className="font-serif text-base text-[#173D32]">
                    {matchingStays.length} Sanctuary {matchingStays.length === 1 ? 'Location' : 'Locations'}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D5BE91]/20">
                <Link
                  to={`/aurelia/booking?destination=${destination.slug}`}
                  className="w-full py-3 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold text-center block rounded-xs shadow-xs"
                >
                  Plan Stay in {destination.name} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Available Stays in this Destination */}
        <div className="mt-20 pt-12 border-t border-[#D5BE91]/30">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#173D32] block mb-2">
              Sanctuary Accommodations
            </span>
            <h2 className="text-3xl font-serif text-[#173D32]">
              Stays in {destination.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {matchingStays.map((stay) => (
              <div
                key={stay.slug}
                className="bg-white rounded-xs border border-[#D5BE91]/30 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-16/9 relative overflow-hidden">
                    <img
                      src={stay.heroImage}
                      alt={stay.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/95 text-[#173D32] font-serif font-bold text-xs px-3 py-1 rounded-xs">
                      {stay.startingPriceFormatted}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-[#B8B0A2] uppercase tracking-wider mb-1 font-medium">
                      {stay.propertyType} &bull; {stay.location}
                    </div>
                    <h3 className="text-2xl font-serif text-[#173D32] mb-2">{stay.name}</h3>
                    <p className="text-xs sm:text-sm text-[#292B27]/75 font-light line-clamp-2 mb-4 leading-relaxed">
                      {stay.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#D5BE91]/20 flex items-center justify-between">
                  <Link
                    to={`/aurelia/stays/${stay.slug}`}
                    className="text-xs uppercase tracking-wider font-semibold text-[#173D32] flex items-center gap-1"
                  >
                    <span>View Property Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={`/aurelia/booking?staySlug=${stay.slug}`}
                    className="px-4 py-2 bg-[#173D32] text-white text-xs uppercase font-semibold rounded-xs"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
