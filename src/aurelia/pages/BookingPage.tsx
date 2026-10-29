import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  CalendarCheck,
  Calendar,
  Users,
  CheckCircle2,
  AlertCircle,
  FileText,
  Bed,
  Phone,
  Mail,
  User,
  Shield,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { AURELIA_STAYS } from '../data/stays';
import { AURELIA_ROOMS } from '../data/rooms';
import type { BookingRequestData } from '../types/hospitality';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Helper date formatters
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 1);
  const defaultCheckOut = new Date(defaultCheckIn);
  defaultCheckOut.setDate(defaultCheckIn.getDate() + 2);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  // URL Query Parameters prefill
  const queryStaySlug = searchParams.get('staySlug') || '';
  const queryRoomSlug = searchParams.get('roomSlug') || '';
  const queryCheckIn = searchParams.get('checkIn') || formatDate(defaultCheckIn);
  const queryCheckOut = searchParams.get('checkOut') || formatDate(defaultCheckOut);
  const queryGuests = searchParams.get('guests') ? Number(searchParams.get('guests')) : 2;
  const queryRooms = searchParams.get('rooms') ? Number(searchParams.get('rooms')) : 1;

  // Step state (1: Stay/Room, 2: Dates, 3: Guests, 4: Guest Details, 5: Review, 6: Confirmation)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [selectedStaySlug, setSelectedStaySlug] = useState<string>(
    queryStaySlug || AURELIA_STAYS[0].slug
  );
  const [selectedRoomSlug, setSelectedRoomSlug] = useState<string>(queryRoomSlug || '');
  const [checkInDate, setCheckInDate] = useState<string>(queryCheckIn);
  const [checkOutDate, setCheckOutDate] = useState<string>(queryCheckOut);
  const [adults, setAdults] = useState<number>(queryGuests > 0 ? queryGuests : 2);
  const [children, setChildren] = useState<number>(0);
  const [roomCount, setRoomCount] = useState<number>(queryRooms > 0 ? queryRooms : 1);

  // Guest Contact Information
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  // Validation Error
  const [formError, setFormError] = useState<string | null>(null);

  // Confirmation object
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRequestData | null>(null);

  // Selected Stay & Room references
  const currentStay = useMemo(
    () => AURELIA_STAYS.find((s) => s.slug === selectedStaySlug) || AURELIA_STAYS[0],
    [selectedStaySlug]
  );

  const availableRoomsForStay = useMemo(() => {
    return AURELIA_ROOMS.filter(
      (r) => r.stayId === currentStay.id || currentStay.roomSlugs.includes(r.slug)
    );
  }, [currentStay]);

  const currentRoom = useMemo(() => {
    if (!selectedRoomSlug) return null;
    return AURELIA_ROOMS.find((r) => r.slug === selectedRoomSlug) || null;
  }, [selectedRoomSlug]);

  // Night calculation
  const nights = useMemo(() => {
    if (!checkInDate || !checkOutDate) return 1;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }, [checkInDate, checkOutDate]);

  // Rates & Subtotal
  const nightlyRate = currentRoom ? currentRoom.pricePerNightINR : currentStay.startingPriceINR;
  const estimatedSubtotalINR = nightlyRate * nights * roomCount;

  // Step 1 Validation & Next
  const handleNextFromStay = () => {
    setFormError(null);
    setCurrentStep(2);
  };

  // Step 2 Validation & Next
  const handleNextFromDates = () => {
    setFormError(null);
    const inDate = new Date(checkInDate);
    const outDate = new Date(checkOutDate);
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (inDate < now) {
      setFormError('Check-in date cannot be in the past.');
      return;
    }
    if (outDate <= inDate) {
      setFormError('Check-out date must be strictly after the check-in date.');
      return;
    }
    setCurrentStep(3);
  };

  // Step 3 Next
  const handleNextFromGuests = () => {
    setFormError(null);
    setCurrentStep(4);
  };

  // Step 4 Validation & Next
  const handleNextFromDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setFormError('Please enter a valid contact phone number.');
      return;
    }

    setCurrentStep(5);
  };

  // Step 5: Final Submission -> Step 6 Confirmation
  const handleSubmitBooking = () => {
    const reference = 'AUR-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    const bookingRecord: BookingRequestData = {
      referenceId: reference,
      staySlug: currentStay.slug,
      stayName: currentStay.name,
      roomSlug: currentRoom ? currentRoom.slug : undefined,
      roomName: currentRoom ? currentRoom.name : 'Sanctuary Selected Suite',
      checkInDate,
      checkOutDate,
      nights,
      adults,
      children,
      roomCount,
      fullName,
      email,
      phone,
      specialRequests: specialRequests.trim() || undefined,
      nightlyRateEstimate: nightlyRate,
      estimatedSubtotalINR,
      submittedAt: new Date().toISOString(),
    };

    // Save to browser localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('aurelia_demo_bookings') || '[]');
      existing.unshift(bookingRecord);
      localStorage.setItem('aurelia_demo_bookings', JSON.stringify(existing));
    } catch {
      // Ignore localStorage errors
    }

    setConfirmedBooking(bookingRecord);
    setCurrentStep(6);
  };

  const handleStartNewBooking = () => {
    setConfirmedBooking(null);
    setCurrentStep(1);
    setSpecialRequests('');
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#173D32] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D5BE91]" />
            <span>Interactive Reservation Console</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#173D32]">
            Plan Your Sanctuary Stay
          </h1>
          <p className="text-xs sm:text-sm text-[#292B27]/70 font-light mt-2 max-w-xl mx-auto">
            A functional demonstration booking journey. Follow the steps below to calculate your demo stay itinerary.
          </p>
        </div>

        {/* Step Progress Indicator (Steps 1 to 5) */}
        {currentStep < 6 && (
          <div className="mb-10">
            <div className="grid grid-cols-5 gap-2 text-center text-xs">
              {[
                { num: 1, label: 'Stay' },
                { num: 2, label: 'Dates' },
                { num: 3, label: 'Guests' },
                { num: 4, label: 'Contact' },
                { num: 5, label: 'Review' },
              ].map((step) => (
                <div key={step.num} className="flex flex-col items-center">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs mb-1.5 transition-all ${
                      currentStep === step.num
                        ? 'bg-[#173D32] text-[#F8F5EF] ring-4 ring-[#D5BE91]/40'
                        : currentStep > step.num
                        ? 'bg-[#D5BE91] text-[#173D32]'
                        : 'bg-white text-[#B8B0A2] border border-[#D5BE91]/30'
                    }`}
                  >
                    {currentStep > step.num ? '✓' : step.num}
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-wider font-semibold ${
                      currentStep === step.num ? 'text-[#173D32]' : 'text-[#B8B0A2]'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-[#D5BE91]/25 h-1 mt-3 rounded-full overflow-hidden">
              <div
                className="bg-[#173D32] h-full transition-all duration-300"
                style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form Error Banner */}
        {formError && (
          <div className="mb-6 p-3.5 bg-red-50 border border-red-200 text-red-800 rounded-xs text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        {/* Main Step Cards */}
        <div className="bg-white rounded-xs border border-[#D5BE91]/40 shadow-sm p-6 sm:p-10">
          {/* STEP 1: SELECT STAY & ROOM */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="border-b border-[#D5BE91]/25 pb-4">
                <span className="text-[10px] uppercase font-bold text-[#D5BE91] tracking-widest block mb-1">
                  Step 1 of 5
                </span>
                <h2 className="text-2xl font-serif text-[#173D32]">
                  Select Retreat Property & Suite
                </h2>
                <p className="text-xs text-[#292B27]/70 font-light mt-1">
                  Choose your destination sanctuary from our six curated collections.
                </p>
              </div>

              {/* Stay Selector */}
              <div className="space-y-2">
                <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block">
                  Sanctuary Property:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {AURELIA_STAYS.map((stay) => (
                    <button
                      key={stay.slug}
                      type="button"
                      onClick={() => {
                        setSelectedStaySlug(stay.slug);
                        setSelectedRoomSlug('');
                      }}
                      className={`p-4 text-left rounded-xs border transition-all ${
                        selectedStaySlug === stay.slug
                          ? 'border-[#173D32] bg-[#173D32]/5 ring-1 ring-[#173D32]'
                          : 'border-[#D5BE91]/30 hover:border-[#D5BE91] bg-white'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-mono text-[#B8B0A2] block mb-1">
                        {stay.destinationName}
                      </span>
                      <h3 className="font-serif font-bold text-base text-[#173D32]">{stay.name}</h3>
                      <span className="text-xs text-[#173D32] font-semibold block mt-1">
                        {stay.startingPriceFormatted}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Room Category (Optional/Specific) */}
              {availableRoomsForStay.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-[#D5BE91]/20">
                  <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block">
                    Choose Suite or Villa Category (Optional):
                  </label>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setSelectedRoomSlug('')}
                      className={`w-full p-3 text-left rounded-xs border text-xs flex items-center justify-between transition-colors ${
                        selectedRoomSlug === ''
                          ? 'border-[#173D32] bg-[#173D32]/5 font-semibold text-[#173D32]'
                          : 'border-[#D5BE91]/30 hover:border-[#D5BE91] text-[#292B27]'
                      }`}
                    >
                      <span>Standard Curated Sanctuary Suite</span>
                      <span className="font-serif">{currentStay.startingPriceFormatted}</span>
                    </button>
                    {availableRoomsForStay.map((room) => (
                      <button
                        key={room.slug}
                        type="button"
                        onClick={() => setSelectedRoomSlug(room.slug)}
                        className={`w-full p-3 text-left rounded-xs border text-xs flex items-center justify-between transition-colors ${
                          selectedRoomSlug === room.slug
                            ? 'border-[#173D32] bg-[#173D32]/5 font-semibold text-[#173D32]'
                            : 'border-[#D5BE91]/30 hover:border-[#D5BE91] text-[#292B27]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Bed className="w-3.5 h-3.5 text-[#D5BE91]" />
                          <span>{room.name} ({room.areaSqFt} sq ft)</span>
                        </span>
                        <span className="font-serif">{room.priceFormatted}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Action */}
              <div className="pt-6 border-t border-[#D5BE91]/25 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextFromStay}
                  className="px-8 py-3 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold rounded-xs shadow-xs transition-colors"
                >
                  Continue to Dates &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SELECT DATES */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="border-b border-[#D5BE91]/25 pb-4">
                <span className="text-[10px] uppercase font-bold text-[#D5BE91] tracking-widest block mb-1">
                  Step 2 of 5
                </span>
                <h2 className="text-2xl font-serif text-[#173D32]">
                  Select Check-in & Check-out Dates
                </h2>
                <p className="text-xs text-[#292B27]/70 font-light mt-1">
                  Stay for at least one night to calibrate your restorative retreat.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D5BE91]" />
                    Check-in Date:
                  </label>
                  <input
                    type="date"
                    min={formatDate(today)}
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-sm font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D5BE91]" />
                    Check-out Date:
                  </label>
                  <input
                    type="date"
                    min={checkInDate || formatDate(today)}
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-sm font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                    required
                  />
                </div>
              </div>

              {/* Calculated Nights Preview */}
              <div className="p-4 bg-[#F8F5EF] rounded-xs border border-[#D5BE91]/30 flex items-center justify-between text-xs">
                <span className="text-[#292B27]/80">Duration of demo stay:</span>
                <span className="font-serif font-bold text-base text-[#173D32]">
                  {nights} {nights === 1 ? 'Night' : 'Nights'}
                </span>
              </div>

              {/* Navigation Action */}
              <div className="pt-6 border-t border-[#D5BE91]/25 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-2.5 bg-white border border-[#D5BE91]/40 text-[#173D32] text-xs uppercase tracking-wider font-semibold rounded-xs"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={handleNextFromDates}
                  className="px-8 py-3 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold rounded-xs shadow-xs transition-colors"
                >
                  Continue to Guests &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: GUESTS & ROOM COUNT */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="border-b border-[#D5BE91]/25 pb-4">
                <span className="text-[10px] uppercase font-bold text-[#D5BE91] tracking-widest block mb-1">
                  Step 3 of 5
                </span>
                <h2 className="text-2xl font-serif text-[#173D32]">
                  Guest Count & Room Allocation
                </h2>
                <p className="text-xs text-[#292B27]/70 font-light mt-1">
                  Specify traveling adults, children, and required rooms.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D5BE91]" />
                    Adults (18+):
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-sm font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Adult' : 'Adults'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D5BE91]" />
                    Children:
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-sm font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                  >
                    {[0, 1, 2, 3].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Child' : 'Children'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-[#D5BE91]" />
                    Number of Rooms:
                  </label>
                  <select
                    value={roomCount}
                    onChange={(e) => setRoomCount(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-sm font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                  >
                    {[1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Room' : 'Rooms'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Navigation Action */}
              <div className="pt-6 border-t border-[#D5BE91]/25 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-2.5 bg-white border border-[#D5BE91]/40 text-[#173D32] text-xs uppercase tracking-wider font-semibold rounded-xs"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={handleNextFromGuests}
                  className="px-8 py-3 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold rounded-xs shadow-xs transition-colors"
                >
                  Continue to Contact &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: GUEST DETAILS & CONTACT */}
          {currentStep === 4 && (
            <form onSubmit={handleNextFromDetails} className="space-y-6">
              <div className="border-b border-[#D5BE91]/25 pb-4">
                <span className="text-[10px] uppercase font-bold text-[#D5BE91] tracking-widest block mb-1">
                  Step 4 of 5
                </span>
                <h2 className="text-2xl font-serif text-[#173D32]">Guest Contact Details</h2>
                <p className="text-xs text-[#292B27]/70 font-light mt-1">
                  Your itinerary confirmation and retreat advisory will be prepared with these credentials.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#D5BE91]" />
                    Full Name:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rohini Sen"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-sm font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#D5BE91]" />
                    Email Address:
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rohini@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-sm font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#D5BE91]" />
                    Contact Telephone / WhatsApp:
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98200 12345"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-sm font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#D5BE91]" />
                    Special Requests or Dietary Preferences (Optional):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Dietary requirements (vegan, gluten-free), anniversary celebrations, arrival timing..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-sm font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                  />
                </div>
              </div>

              {/* Navigation Action */}
              <div className="pt-6 border-t border-[#D5BE91]/25 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-2.5 bg-white border border-[#D5BE91]/40 text-[#173D32] text-xs uppercase tracking-wider font-semibold rounded-xs"
                >
                  &larr; Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold rounded-xs shadow-xs transition-colors"
                >
                  Review Summary &rarr;
                </button>
              </div>
            </form>
          )}

          {/* STEP 5: REVIEW & SUMMARY */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="border-b border-[#D5BE91]/25 pb-4">
                <span className="text-[10px] uppercase font-bold text-[#D5BE91] tracking-widest block mb-1">
                  Step 5 of 5
                </span>
                <h2 className="text-2xl font-serif text-[#173D32]">
                  Review Demo Reservation Request
                </h2>
                <p className="text-xs text-[#292B27]/70 font-light mt-1">
                  Carefully review your demonstration itinerary details before saving to browser.
                </p>
              </div>

              {/* Calculation Summary Table */}
              <div className="bg-[#F8F5EF] p-6 rounded-xs border border-[#D5BE91]/40 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-[#D5BE91]/25">
                  <div>
                    <span className="text-[10px] uppercase text-[#B8B0A2] font-semibold block">
                      Property
                    </span>
                    <span className="font-serif font-bold text-lg text-[#173D32]">
                      {currentStay.name}
                    </span>
                    <span className="text-xs text-[#292B27]/70 block">{currentStay.location}</span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-[#B8B0A2] font-semibold block">
                      Accommodations
                    </span>
                    <span className="font-serif font-bold text-base text-[#173D32]">
                      {currentRoom ? currentRoom.name : 'Sanctuary Selected Suite'}
                    </span>
                    <span className="text-xs text-[#292B27]/70 block">
                      {roomCount} {roomCount === 1 ? 'Room' : 'Rooms'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs py-2">
                  <div>
                    <span className="text-[#B8B0A2] uppercase tracking-wider block">Check-in</span>
                    <span className="font-semibold text-[#173D32]">{checkInDate}</span>
                  </div>
                  <div>
                    <span className="text-[#B8B0A2] uppercase tracking-wider block">Check-out</span>
                    <span className="font-semibold text-[#173D32]">{checkOutDate}</span>
                  </div>
                  <div>
                    <span className="text-[#B8B0A2] uppercase tracking-wider block">Duration</span>
                    <span className="font-semibold text-[#173D32]">
                      {nights} {nights === 1 ? 'Night' : 'Nights'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#B8B0A2] uppercase tracking-wider block">Guests</span>
                    <span className="font-semibold text-[#173D32]">
                      {adults} Adults {children > 0 ? `, ${children} Children` : ''}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D5BE91]/25 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#292B27]/80">
                    <span>
                      Illustrative Demo Rate (₹{nightlyRate.toLocaleString('en-IN')} &times; {nights}{' '}
                      {nights === 1 ? 'night' : 'nights'} &times; {roomCount}{' '}
                      {roomCount === 1 ? 'room' : 'rooms'}):
                    </span>
                    <span className="font-mono">
                      ₹{estimatedSubtotalINR.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#292B27]/80">
                    <span>Applicable Taxes & Demonstrative Charges:</span>
                    <span className="font-mono text-emerald-800">Included in Demo Estimate</span>
                  </div>
                  <div className="pt-2 border-t border-[#D5BE91]/30 flex items-center justify-between">
                    <span className="font-serif font-bold text-base text-[#173D32]">
                      Estimated Demonstration Subtotal:
                    </span>
                    <span className="font-serif font-bold text-2xl text-[#173D32]">
                      ₹{estimatedSubtotalINR.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Guest Details Summary */}
              <div className="p-4 bg-white border border-[#D5BE91]/30 rounded-xs text-xs space-y-1">
                <span className="font-semibold uppercase tracking-wider text-[#173D32] block mb-1">
                  Guest Contact:
                </span>
                <div>
                  <strong className="text-[#173D32]">Name:</strong> {fullName}
                </div>
                <div>
                  <strong className="text-[#173D32]">Email:</strong> {email}
                </div>
                <div>
                  <strong className="text-[#173D32]">Phone:</strong> {phone}
                </div>
                {specialRequests && (
                  <div className="pt-1">
                    <strong className="text-[#173D32]">Special Requests:</strong> {specialRequests}
                  </div>
                )}
              </div>

              {/* Disclaimer Notice */}
              <div className="p-4 bg-[#FAF7F2] rounded-xs border-l-4 border-[#173D32] flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#173D32] shrink-0 mt-0.5" />
                <div className="text-xs text-[#292B27]/80 font-light leading-relaxed">
                  <strong>Notice:</strong> This is an interactive frontend demonstration. No real payment is collected, no credit card is required, and no live room inventory is decremented.
                </div>
              </div>

              {/* Navigation Action */}
              <div className="pt-6 border-t border-[#D5BE91]/25 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-2.5 bg-white border border-[#D5BE91]/40 text-[#173D32] text-xs uppercase tracking-wider font-semibold rounded-xs"
                >
                  &larr; Edit Details
                </button>
                <button
                  type="button"
                  onClick={handleSubmitBooking}
                  className="px-8 py-3.5 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold rounded-xs shadow-md transition-colors flex items-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4 text-[#D5BE91]" />
                  <span>Submit Demo Reservation Request</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: CONFIRMATION SCREEN */}
          {currentStep === 6 && confirmedBooking && (
            <div className="space-y-8 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#173D32] text-[#D5BE91] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#173D32] block mb-2">
                  Demo Booking Request Generated
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#173D32] mb-3">
                  Thank You, {confirmedBooking.fullName}
                </h2>
                <div className="inline-block px-4 py-2 bg-[#F8F5EF] border border-[#D5BE91]/50 rounded-xs font-mono text-sm text-[#173D32] font-semibold">
                  Reference: {confirmedBooking.referenceId}
                </div>
              </div>

              {/* Mandatory Statement required by prompt */}
              <div className="p-6 bg-[#FAF7F2] rounded-xs border border-[#D5BE91]/60 text-left max-w-xl mx-auto shadow-xs">
                <p className="text-sm font-serif font-medium text-[#173D32] leading-relaxed text-center">
                  &ldquo;Your demo booking request has been saved in this browser. No reservation has been made, no availability has been checked, and no payment has been processed.&rdquo;
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-6 bg-[#F8F5EF] rounded-xs border border-[#D5BE91]/40 text-left max-w-xl mx-auto space-y-3 text-xs">
                <div className="flex justify-between border-b border-[#D5BE91]/25 pb-2">
                  <span className="text-[#B8B0A2] uppercase">Sanctuary:</span>
                  <span className="font-semibold text-[#173D32]">{confirmedBooking.stayName}</span>
                </div>
                <div className="flex justify-between border-b border-[#D5BE91]/25 pb-2">
                  <span className="text-[#B8B0A2] uppercase">Dates:</span>
                  <span className="font-semibold text-[#173D32]">
                    {confirmedBooking.checkInDate} to {confirmedBooking.checkOutDate} (
                    {confirmedBooking.nights} Nights)
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#D5BE91]/25 pb-2">
                  <span className="text-[#B8B0A2] uppercase">Guests:</span>
                  <span className="font-semibold text-[#173D32]">
                    {confirmedBooking.adults} Adults
                    {confirmedBooking.children > 0 ? `, ${confirmedBooking.children} Children` : ''}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#D5BE91]/25 pb-2">
                  <span className="text-[#B8B0A2] uppercase">Accommodation:</span>
                  <span className="font-semibold text-[#173D32]">
                    {confirmedBooking.roomName} ({confirmedBooking.roomCount} Room)
                  </span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#B8B0A2] uppercase font-bold">Estimated Demo Subtotal:</span>
                  <span className="font-serif font-bold text-base text-[#173D32]">
                    ₹{confirmedBooking.estimatedSubtotalINR.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleStartNewBooking}
                  className="px-6 py-3 bg-[#173D32] text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs hover:bg-[#122A22] transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#D5BE91]" />
                  <span>Plan Another Demo Stay</span>
                </button>
                <Link
                  to="/aurelia/stays"
                  className="px-6 py-3 bg-white border border-[#D5BE91]/40 text-[#173D32] text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#F8F5EF] transition-colors"
                >
                  Browse More Stays
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
