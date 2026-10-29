import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, ArrowRight, Sun, Sparkles } from 'lucide-react';
import { AURELIA_DESTINATIONS } from '../data/destinations';
import { AURELIA_STAYS } from '../data/stays';
import type { DestinationType } from '../types/hospitality';

export const DestinationsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');

  const types: ('All' | DestinationType)[] = ['All', 'Mountains', 'Coastal', 'Rainforest', 'Heritage'];

  const filteredDestinations =
    selectedType === 'All'
      ? AURELIA_DESTINATIONS
      : AURELIA_DESTINATIONS.filter((d) => d.type === selectedType);

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* Editorial Header */}
      <section className="bg-[#173D32] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5BE91] mb-4">
            <Compass className="w-4 h-4" />
            <span>Extraordinary Geographies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F8F5EF] leading-tight max-w-3xl mb-6">
            Sanctuaries shaped by the <span className="italic font-normal text-[#D5BE91]">earth.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F8F5EF]/85 font-light max-w-2xl leading-relaxed">
            From the crisp elevations of the Himalayas to the warm coastal breakers of the Konkan, explore our four distinct geographic collections across India.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-10">
            {types.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all ${
                  selectedType === type
                    ? 'bg-[#D5BE91] text-[#173D32]'
                    : 'bg-white/10 hover:bg-white/20 text-[#F8F5EF] border border-white/20'
                }`}
              >
                {type === 'All' ? 'All Collections' : type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {filteredDestinations.map((dest, idx) => {
            const relatedStays = AURELIA_STAYS.filter((s) => s.destinationSlug === dest.slug);
            const isEven = idx % 2 === 1;

            return (
              <div
                key={dest.slug}
                className="bg-white rounded-xs border border-[#D5BE91]/30 overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-7 relative min-h-[380px] lg:min-h-[500px] ${isEven ? 'lg:order-2' : ''}`}>
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#173D32]/90 backdrop-blur-xs text-[#D5BE91] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-xs">
                      {dest.type}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#B8B0A2] uppercase tracking-wider font-medium mb-2">
                        <MapPin className="w-3.5 h-3.5 text-[#173D32]" />
                        <span>{dest.region}, {dest.state}</span>
                      </div>

                      <h2 className="text-3xl font-serif text-[#173D32] mb-3">
                        {dest.name}
                      </h2>

                      <p className="text-xs uppercase tracking-wider text-[#D5BE91] font-semibold mb-4">
                        {dest.tagline}
                      </p>

                      <p className="text-sm text-[#292B27]/80 font-light leading-relaxed mb-6">
                        {dest.description}
                      </p>

                      <div className="space-y-3 pt-4 border-t border-[#D5BE91]/25 text-xs">
                        <div className="flex items-start gap-2">
                          <Sun className="w-4 h-4 text-[#173D32] shrink-0 mt-0.5" />
                          <span className="text-[#292B27]/75 font-light">
                            <strong className="font-medium text-[#173D32]">Seasonality:</strong> {dest.bestTimeToVisit}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-[#D5BE91] shrink-0 mt-0.5" />
                          <span className="text-[#292B27]/75 font-light">
                            <strong className="font-medium text-[#173D32]">Featured:</strong> {dest.featuredExperiences[0]}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-[#D5BE91]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#B8B0A2] block">
                          Properties Available
                        </span>
                        <span className="text-sm font-serif font-semibold text-[#173D32]">
                          {relatedStays.length} Boutique {relatedStays.length === 1 ? 'Sanctuary' : 'Sanctuaries'}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          to={`/aurelia/destinations/${dest.slug}`}
                          className="px-5 py-2.5 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center gap-1.5"
                        >
                          <span>Explore Region</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
