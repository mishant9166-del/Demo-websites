import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Coffee,
  RotateCcw,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import type { ReservationData } from '../types/cafe';

const TIME_SLOTS = [
  '08:00 AM (Early Light)',
  '09:00 AM (Breakfast Rush)',
  '10:30 AM (Morning Brew)',
  '11:45 AM (All-Day Brunch)',
  '01:00 PM (Lunch Spread)',
  '02:30 PM (Midday Quiet)',
  '04:30 PM (Filter & Pastry)',
  '06:00 PM (Sunset Ambient)',
  '07:30 PM (Evening Fare)',
  '08:45 PM (Night Cap)',
];

const SEATING_AREAS = [
  'Sunroom (Natural Morning Light & Potted Greens)',
  'Main Teak Counter (Close to the Grinder & Baristas)',
  'Garden Terrace (Open-Air, 100% Pet-Friendly)',
  'The Quiet Corner (Cozy Booth, Ideal for Reading)',
];

export const ReservationsPage: React.FC = () => {
  // Today's date string for min date (YYYY-MM-DD)
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: todayStr,
    time: TIME_SLOTS[2],
    guests: 2,
    seatingArea: SEATING_AREAS[0],
    occasion: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<ReservationData | null>(null);
  const [confirmationCode, setConfirmationCode] = useState('');

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address for reservation details.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter at least 10 digits.';
    }

    if (!formData.date) {
      errs.date = 'Please pick a preferred date.';
    } else if (formData.date < todayStr) {
      errs.date = 'Reservation date cannot be in the past.';
    }

    if (!formData.time) {
      errs.time = 'Please select an example time preference.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate demo confirmation reference
    const demoRef = `MB-RES-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmationCode(demoRef);
    setSubmittedData({ ...formData });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: todayStr,
      time: TIME_SLOTS[2],
      guests: 2,
      seatingArea: SEATING_AREAS[0],
      occasion: '',
      specialRequests: '',
    });
    setErrors({});
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F8F2E7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionHeading
            badge="Table Reservations"
            title="Book Your Pause at Mellow & Bean"
            subtitle="We keep a portion of our sunlit tables open for reservations each day, with walk-ins always warmly welcomed."
            className="mb-0"
          />
          <p className="font-handwriting text-2xl text-[#B77A4A]">
            “Your corner by the window is waiting.”
          </p>
        </div>

        {/* Demo Notification Banner */}
        <div className="p-4 rounded-2xl bg-[#F0D27A]/25 border border-[#F0D27A]/60 flex items-start gap-3.5 max-w-3xl mx-auto text-xs sm:text-sm text-[#382820]">
          <ShieldAlert className="w-5 h-5 text-[#B77A4A] shrink-0 mt-0.5" />
          <p>
            <strong>Interactive Frontend Demonstration:</strong> This reservation form simulates our booking interface. Preferred times are illustrative examples. No real booking request is sent to a café server.
          </p>
        </div>

        {submittedData ? (
          /* Confirmation Receipt View */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-8 sm:p-12 shadow-md max-w-2xl mx-auto space-y-8"
          >
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#777B5A]/15 text-[#777B5A] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B77A4A]">
                Demo Reservation Recorded
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#382820]">
                We look forward to seeing you, {submittedData.name}!
              </h2>
              <p className="text-xs text-[#382820]/70">
                Demo Reference: <span className="font-mono font-bold text-[#382820]">{confirmationCode}</span>
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="p-6 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] space-y-3 text-xs sm:text-sm text-[#382820]">
              <div className="flex justify-between border-b border-[#EADFCF] pb-2">
                <span className="text-[#382820]/70">Date:</span>
                <span className="font-semibold">{submittedData.date}</span>
              </div>
              <div className="flex justify-between border-b border-[#EADFCF] pb-2">
                <span className="text-[#382820]/70">Preferred Time:</span>
                <span className="font-semibold">{submittedData.time}</span>
              </div>
              <div className="flex justify-between border-b border-[#EADFCF] pb-2">
                <span className="text-[#382820]/70">Party Size:</span>
                <span className="font-semibold">{submittedData.guests} Guest(s)</span>
              </div>
              <div className="flex justify-between border-b border-[#EADFCF] pb-2">
                <span className="text-[#382820]/70">Seating Area:</span>
                <span className="font-semibold text-right max-w-xs">{submittedData.seatingArea}</span>
              </div>
              <div className="flex justify-between border-b border-[#EADFCF] pb-2">
                <span className="text-[#382820]/70">Contact:</span>
                <span className="font-semibold">{submittedData.phone} &bull; {submittedData.email}</span>
              </div>
              {submittedData.occasion && (
                <div className="flex justify-between border-b border-[#EADFCF] pb-2">
                  <span className="text-[#382820]/70">Occasion:</span>
                  <span className="font-semibold">{submittedData.occasion}</span>
                </div>
              )}
              {submittedData.specialRequests && (
                <div className="pt-1 text-xs">
                  <span className="text-[#382820]/70 block mb-0.5">Special Requests:</span>
                  <p className="italic text-[#382820]/90">"{submittedData.specialRequests}"</p>
                </div>
              )}
            </div>

            {/* Fictional demo notice */}
            <div className="p-4 rounded-xl bg-[#382820]/5 text-xs text-[#382820]/75 space-y-1">
              <strong>Notice:</strong> As this is a portfolio demonstration, no real reservation exists at 42 Bloom Street. Tables are held for 15 minutes during regular walk-in hours.
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 py-3.5 px-6 rounded-full bg-[#382820] text-[#FFFEFA] font-medium text-xs sm:text-sm hover:bg-[#382820]/90 transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Book Another Table Demo</span>
              </button>
              <Link
                to="/mellow-bean/menu"
                className="flex-1 py-3.5 px-6 rounded-full bg-[#F0D27A] text-[#382820] font-medium text-xs sm:text-sm hover:bg-[#F0D27A]/90 transition-all text-center flex items-center justify-center gap-1.5"
              >
                <span>Browse Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ) : (
          /* Booking Form & Policy Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8 bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-6 sm:p-10 shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-2xl text-[#382820] border-b border-[#EADFCF] pb-4">
                Table Preferences & Guest Details
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priyanshu Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820] ${
                        errors.name ? 'border-red-400' : 'border-[#EADFCF]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820] ${
                        errors.email ? 'border-red-400' : 'border-[#EADFCF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Party Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820] ${
                        errors.phone ? 'border-red-400' : 'border-[#EADFCF]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1.5">
                      Number of Guests (1–12) *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: parseInt(e.target.value, 10) })
                      }
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest (Solo Ritual)' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1.5">
                      Date (No past dates) *
                    </label>
                    <input
                      type="date"
                      min={todayStr}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820] ${
                        errors.date ? 'border-red-400' : 'border-[#EADFCF]'
                      }`}
                    />
                    {errors.date && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1.5">
                      Preferred Time Slot (Example Choice) *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Seating Area Preference */}
                <div>
                  <label className="block text-xs font-semibold text-[#382820] mb-1.5">
                    Seating Area Preference
                  </label>
                  <select
                    value={formData.seatingArea}
                    onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
                  >
                    {SEATING_AREAS.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Occasion & Special Requests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1.5">
                      Occasion (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Birthday brunch, Book club, Anniversary"
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1.5">
                      Dietary or Accessibility Needs
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. High-chair required, Wheelchair accessible table"
                      value={formData.specialRequests}
                      onChange={(e) =>
                        setFormData({ ...formData, specialRequests: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#382820] text-[#FFFEFA] font-medium text-sm hover:bg-[#382820]/90 transition-all shadow-md flex items-center justify-center gap-2 group"
                  >
                    <Calendar className="w-4 h-4 text-[#F0D27A]" />
                    <span>Confirm Demo Table Request</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[11px] text-[#382820]/60 text-center mt-2.5">
                    * This action generates a local demonstration confirmation. No live table is booked.
                  </p>
                </div>
              </form>
            </div>

            {/* Side Information Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Policies Card */}
              <div className="p-6 rounded-3xl bg-[#FFFEFA] border border-[#EADFCF] shadow-xs space-y-4">
                <h4 className="font-serif font-bold text-lg text-[#382820]">
                  Table Reservation Notes
                </h4>
                <div className="space-y-3 text-xs text-[#382820]/80 leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#B77A4A] shrink-0 mt-0.5" />
                    <p>
                      <strong>15-Minute Grace Period:</strong> We hold tables for 15 minutes past your reserved time before releasing them to walk-in guests.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Coffee className="w-4 h-4 text-[#B77A4A] shrink-0 mt-0.5" />
                    <p>
                      <strong>Seating Durations:</strong> Brunch seatings are leisurely, typically reserved for 90 minutes so you can enjoy your coffee and bakery spread without rush.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#B77A4A] shrink-0 mt-0.5" />
                    <p>
                      <strong>Pet Companions:</strong> Well-mannered dogs are warmly embraced in our garden terrace seating. Fresh water bowls provided!
                    </p>
                  </div>
                </div>
              </div>

              {/* Private Events Banner */}
              <div className="p-6 rounded-3xl bg-[#F0D27A]/30 border border-[#F0D27A]/50 shadow-xs space-y-3">
                <h4 className="font-serif font-bold text-base text-[#382820]">
                  Planning a Gathering for 12+?
                </h4>
                <p className="text-xs text-[#382820]/80 leading-relaxed">
                  For larger celebrations, corporate coffee cuppings, or bridal brunches, check out our private events packages.
                </p>
                <Link
                  to="/mellow-bean/events"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#382820] hover:underline pt-1"
                >
                  <span>Explore Private Events</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationsPage;
