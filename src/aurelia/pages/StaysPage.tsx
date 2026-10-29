import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Compass, Users, ArrowRight, RotateCcw, Calendar } from 'lucide-react';
import { AURELIA_STAYS } from '../data/stays';
import { AURELIA_DESTINATIONS } from '../data/destinations';

export const StaysPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read URL query params if user came from HeroBookingSearch
  const initialDestination = searchParams.get('destination') || 'all';
  const initialGuests = searchParams.get('guests') ? Number(searchParams.get('guests')) : 0;
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');

  const [selectedDestination, setSelectedDestination] = useState<string>(initialDestination);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedGuests, setSelectedGuests] = useState<number>(initialGuests);
  const [sortBy, setSortBy] = useState<string>('default');

  const propertyTypes = [
    'all',
    'Mountain Resort',
    'Oceanfront Sanctuary',
    'Forest Estate',
    'Heritage Palace',
    'Private Villa',
  ];

  const handleResetFilters = () => {
    setSelectedDestination('all');
    setSelectedType('all');
    setSelectedGuests(0);
    setSortBy('default');
    setSearchParams({});
  };

  const filteredStays = useMemo(() => {
    return AURELIA_STAYS.filter((stay) => {
      if (selectedDestination !== 'all' && stay.destinationSlug !== selectedDestination) {
        return false;
      }
      if (selectedType !== 'all' && stay.propertyType !== selectedType) {
        return false;
      }
      if (selectedGuests > 0) {
        // e.g. "Up to 4 guests" -> parse number
        const match = stay.guestCapacity.match(/\d+/);
        if (match && Number(match[0]) < selectedGuests) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        return a.startingPriceINR - b.startingPriceINR;
      }
      if (sortBy === 'price-high') {
        return b.startingPriceINR - a.startingPriceINR;
      }
      return 0;
    });
  }, [selectedDestination, selectedType, selectedGuests, sortBy]);

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* Editorial Header */}
      <section className="bg-[#173D32] text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5BE91] mb-3">
            <Compass className="w-4 h-4" />
            <span>The Aurelia Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#F8F5EF] leading-tight max-w-3xl mb-4">
            Our Hotels, Resorts & Private Estates
          </h1>
          <p className="text-base text-[#F8F5EF]/80 font-light max-w-2xl leading-relaxed">
            Discover six distinct luxury sanctuaries across India. From cloud-swathed mountain lodges to tranquil beachfront estates, explore our curated spaces.
          </p>

          {checkIn && checkOut && (
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xs rounded-xs border border-[#D5BE91]/40 text-xs text-[#D5BE91]">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                Search Criteria Preserved: {checkIn} &rarr; {checkOut}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="bg-white border-b border-[#D5BE91]/30 py-6 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Destination Filter */}
            <div>
              <label className="text-[10px] uppercase tracking-wider font-semibold text-[#173D32] block mb-1">
                Destination
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
              >
                <option value="all">All Destinations</option>
                {AURELIA_DESTINATIONS.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name} ({d.state})
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type Filter */}
            <div>
              <label className="text-[10px] uppercase tracking-wider font-semibold text-[#173D32] block mb-1">
                Property Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t === 'all' ? 'All Stay Styles' : t}
                  </option>
                ))}
              </select>
            </div>

            {/* Guest Capacity Filter */}
            <div>
              <label className="text-[10px] uppercase tracking-wider font-semibold text-[#173D32] block mb-1">
                Guest Capacity
              </label>
              <select
                value={selectedGuests}
                onChange={(e) => setSelectedGuests(Number(e.target.value))}
                className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
              >
                <option value={0}>Any Capacity</option>
                <option value={2}>At least 2 Guests</option>
                <option value={4}>At least 4 Guests</option>
              </select>
            </div>

            {/* Price Sorting & Reset */}
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <label className="text-[10px] uppercase tracking-wider font-semibold text-[#173D32] block mb-1">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                >
                  <option value="default">Featured Collection</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {(selectedDestination !== 'all' ||
                selectedType !== 'all' ||
                selectedGuests !== 0 ||
                sortBy !== 'default') && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="self-end p-2 bg-[#F8F5EF] hover:bg-[#D5BE91]/20 text-[#173D32] rounded-xs border border-[#D5BE91]/40 transition-colors"
                  title="Reset Filters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredStays.length === 0 ? (
          <div className="py-24 text-center bg-white rounded-xs border border-[#D5BE91]/30 p-8">
            <Compass className="w-10 h-10 text-[#173D32] mx-auto mb-3 stroke-1" />
            <h3 className="text-xl font-serif text-[#173D32] mb-2">No Stays Match Criteria</h3>
            <p className="text-xs text-[#292B27]/70 max-w-md mx-auto mb-6">
              Try adjusting your destination, guest capacity, or property type filter to discover other retreats.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-[#173D32] text-[#F8F5EF] text-xs uppercase font-semibold rounded-xs"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredStays.map((stay, idx) => {
              // Alternate layout style for rhythm
              const isHeroStyle = idx === 0 || idx === 3;

              if (isHeroStyle) {
                return (
                  <div
                    key={stay.slug}
                    className="bg-white rounded-xs border border-[#D5BE91]/35 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[460px]">
                        <img
                          src={stay.heroImage}
                          alt={stay.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-[#173D32]/90 backdrop-blur-xs text-[#D5BE91] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-xs border border-[#D5BE91]/30">
                          {stay.propertyType}
                        </div>
                      </div>

                      <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                        <div>
                          <div className="text-xs text-[#B8B0A2] uppercase tracking-wider mb-2 font-medium">
                            {stay.destinationName} &bull; {stay.location}
                          </div>
                          <h2 className="text-3xl font-serif text-[#173D32] mb-3">{stay.name}</h2>
                          <p className="text-xs uppercase tracking-wider text-[#D5BE91] font-semibold mb-3">
                            {stay.tagline}
                          </p>
                          <p className="text-xs sm:text-sm text-[#292B27]/80 font-light leading-relaxed mb-6">
                            {stay.shortDescription}
                          </p>

                          <div className="grid grid-cols-2 gap-2 text-xs text-[#292B27]/75 pt-4 border-t border-[#D5BE91]/20 mb-6">
                            <span className="flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5 text-[#173D32]" />
                              {stay.guestCapacity}
                            </span>
                            <span className="text-[#173D32] font-semibold">
                              {stay.amenities[0]}
                            </span>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-[#D5BE91]/20 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] uppercase text-[#B8B0A2] block">
                              Indicative Demo Rate
                            </span>
                            <span className="text-xl font-serif font-bold text-[#173D32]">
                              {stay.startingPriceFormatted}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <Link
                              to={`/aurelia/stays/${stay.slug}`}
                              className="px-5 py-2.5 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center gap-1"
                            >
                              <span>Explore Stay</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Standard Card Style
              return (
                <div
                  key={stay.slug}
                  className="bg-white rounded-xs border border-[#D5BE91]/35 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row items-stretch"
                >
                  <div className="md:w-5/12 relative min-h-[260px]">
                    <img
                      src={stay.heroImage}
                      alt={stay.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#173D32]/90 text-[#D5BE91] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-xs">
                      {stay.propertyType}
                    </div>
                  </div>

                  <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-[#B8B0A2] uppercase tracking-wider mb-1">
                        {stay.destinationName}
                      </div>
                      <h3 className="text-2xl font-serif text-[#173D32] mb-2">{stay.name}</h3>
                      <p className="text-xs sm:text-sm text-[#292B27]/75 font-light line-clamp-2 mb-4 leading-relaxed">
                        {stay.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-[#173D32] font-medium mb-4">
                        <Users className="w-3.5 h-3.5" />
                        <span>{stay.guestCapacity}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#D5BE91]/20 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase text-[#B8B0A2] block">Demo Rate</span>
                        <span className="text-lg font-serif font-bold text-[#173D32]">
                          {stay.startingPriceFormatted}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          to={`/aurelia/stays/${stay.slug}`}
                          className="text-xs uppercase tracking-wider font-semibold text-[#173D32] flex items-center gap-1 hover:text-[#D5BE91]"
                        >
                          <span>Details</span>
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
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
