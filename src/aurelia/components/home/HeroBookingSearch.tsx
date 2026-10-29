import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Calendar, Users, Home, Search, ArrowRight, AlertCircle } from 'lucide-react';
import { AURELIA_DESTINATIONS } from '../../data/destinations';

export const HeroBookingSearch: React.FC = () => {
  const navigate = useNavigate();

  // Today and Tomorrow in YYYY-MM-DD
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 2);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [destination, setDestination] = useState<string>('all');
  const [checkInDate, setCheckInDate] = useState<string>(formatDate(today));
  const [checkOutDate, setCheckOutDate] = useState<string>(formatDate(tomorrow));
  const [guests, setGuests] = useState<number>(2);
  const [rooms, setRooms] = useState<number>(1);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (checkIn < now) {
      setValidationError('Check-in date cannot be in the past.');
      return;
    }

    if (checkOut <= checkIn) {
      setValidationError('Check-out date must be after check-in date.');
      return;
    }

    const params = new URLSearchParams();
    if (destination && destination !== 'all') params.set('destination', destination);
    if (checkInDate) params.set('checkIn', checkInDate);
    if (checkOutDate) params.set('checkOut', checkOutDate);
    params.set('guests', guests.toString());
    params.set('rooms', rooms.toString());

    navigate(`/aurelia/stays?${params.toString()}`);
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center bg-[#173D32] text-white overflow-hidden">
      {/* Background Hero Image with atmospheric gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=90"
          alt="Aurelia Retreats luxury infinity pool at golden hour"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05] transform scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122A22] via-[#173D32]/40 to-black/35" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Subtle Brand Tagline */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D5BE91]/40 text-[#D5BE91] text-xs uppercase tracking-[0.25em] font-medium mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>Boutique Sanctuary Stays</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-[#F8F5EF] max-w-4xl leading-[1.1] mb-6">
          Find your own kind of <span className="italic text-[#D5BE91]">extraordinary.</span>
        </h1>

        {/* Supporting Editorial Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-[#F8F5EF]/85 max-w-2xl font-light leading-relaxed mb-10">
          Discover considered escapes, remarkable places, and stays designed around the way you want to feel.
        </p>

        {/* Primary & Secondary Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
          <button
            type="button"
            onClick={() => navigate('/aurelia/stays')}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#D5BE91] text-[#173D32] hover:bg-[#E3D0A8] font-semibold text-xs uppercase tracking-[0.2em] rounded-xs shadow-lg transition-all flex items-center justify-center gap-2 group"
          >
            <span>Explore Our Stays</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            type="button"
            onClick={() => navigate('/aurelia/destinations')}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-[#F8F5EF] border border-white/25 font-semibold text-xs uppercase tracking-[0.2em] rounded-xs backdrop-blur-sm transition-all"
          >
            Discover Destinations
          </button>
        </div>

        {/* Integrated Luxury Booking Search Panel */}
        <div className="w-full max-w-5xl bg-[#F8F5EF] text-[#292B27] rounded-sm p-4 sm:p-6 shadow-2xl border border-[#D5BE91]/50 text-left">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {/* Destination Selector */}
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#173D32] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#D5BE91]" />
                  Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                >
                  <option value="all">All Destinations</option>
                  {AURELIA_DESTINATIONS.map((d) => (
                    <option key={d.slug} value={d.slug}>
                      {d.name} ({d.state})
                    </option>
                  ))}
                </select>
              </div>

              {/* Check-in Date */}
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#173D32] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D5BE91]" />
                  Check-in
                </label>
                <input
                  type="date"
                  min={formatDate(today)}
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                  required
                />
              </div>

              {/* Check-out Date */}
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#173D32] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D5BE91]" />
                  Check-out
                </label>
                <input
                  type="date"
                  min={checkInDate || formatDate(today)}
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                  required
                />
              </div>

              {/* Guests Selector */}
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#173D32] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D5BE91]" />
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-3 py-2.5 bg-white border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                >
                  <option value={1}>1 Guest (Solo)</option>
                  <option value={2}>2 Guests (Couple)</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests (Family/Group)</option>
                  <option value={6}>6 Guests (Villa Stay)</option>
                </select>
              </div>

              {/* Rooms & Submit Button */}
              <div className="space-y-1 flex flex-col justify-end">
                <div className="flex items-center gap-2">
                  <div className="w-1/3">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#173D32] flex items-center gap-1">
                      <Home className="w-3 h-3 text-[#D5BE91]" />
                      Rooms
                    </label>
                    <select
                      value={rooms}
                      onChange={(e) => setRooms(Number(e.target.value))}
                      className="w-full px-2 py-2.5 bg-white border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                  </div>
                  <div className="w-2/3">
                    <label className="text-[11px] opacity-0 select-none hidden lg:block">Action</label>
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm border border-[#D5BE91]/30"
                    >
                      <Search className="w-3.5 h-3.5 text-[#D5BE91]" />
                      <span>Search Stays</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Validation Error Feedback */}
            {validationError && (
              <div className="flex items-center gap-2 p-2.5 bg-red-50 text-red-800 text-xs rounded-xs border border-red-200">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Honest Demo Subtext */}
            <div className="pt-2 border-t border-[#D5BE91]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-[#292B27]/60">
              <span>* Fictional demonstration rates & mock inventory. Check-in dates preserved in stays filter.</span>
              <span className="text-[#173D32] font-medium mt-1 sm:mt-0">All 6 boutique properties available for demo reservation</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
