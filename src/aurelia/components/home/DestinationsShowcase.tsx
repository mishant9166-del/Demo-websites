import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { AURELIA_DESTINATIONS } from '../../data/destinations';

export const DestinationsShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#173D32] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D5BE91]" />
              <span>Destination Collections</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#173D32] leading-tight">
              Landscapes curated for <span className="italic font-normal">reconnection.</span>
            </h2>
            <p className="mt-4 text-base text-[#292B27]/75 font-light leading-relaxed">
              From pine-scented Himalayan ridges to sun-bleached coastal sanctuaries, each Aurelia retreat is deeply rooted in the spirit of its geography.
            </p>
          </div>

          <Link
            to="/aurelia/destinations"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#173D32] hover:text-[#122A22] border-b border-[#D5BE91] pb-1 self-start md:self-end group transition-all"
          >
            <span>View All 4 Destinations</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Distinct Destination Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {AURELIA_DESTINATIONS.map((dest, idx) => (
            <Link
              key={dest.slug}
              to={`/aurelia/destinations/${dest.slug}`}
              className="group relative block overflow-hidden rounded-xs bg-[#173D32] shadow-md transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image Frame */}
              <div className="aspect-16/10 overflow-hidden relative">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.85] group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122A22] via-[#173D32]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge for Type */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#173D32] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-xs border border-[#D5BE91]/40">
                  {dest.type}
                </span>

                <span className="absolute top-4 right-4 bg-[#173D32]/80 backdrop-blur-xs text-[#D5BE91] text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-xs">
                  0{idx + 1}
                </span>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8 bg-[#173D32] text-white">
                <div className="flex items-center gap-1.5 text-xs text-[#D5BE91] uppercase tracking-wider mb-2 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{dest.region}, {dest.state}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#F8F5EF] group-hover:text-[#D5BE91] transition-colors mb-3">
                  {dest.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#F8F5EF]/80 font-light line-clamp-2 mb-6">
                  {dest.tagline}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#D5BE91] font-semibold uppercase tracking-wider">
                  <span>Explore Sanctuary & Stays</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
