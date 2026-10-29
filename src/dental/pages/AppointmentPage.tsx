import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, ChevronRight, Info, Home, ArrowRight } from 'lucide-react';
import { services } from '../data/services';

export function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  // Get current date string formatted as YYYY-MM-DD for min attribute
  const today = new Date().toISOString().split('T')[0];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceSlug, setServiceSlug] = useState(preselectedService);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '02:00 PM',
    '03:30 PM',
    '04:30 PM',
    '05:30 PM'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!phone.trim()) {
      errs.phone = 'Phone number is required for appointment confirmation';
    } else if (phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!serviceSlug) errs.serviceSlug = 'Please select a preferred dental service';
    if (!preferredDate) {
      errs.preferredDate = 'Please select an appointment date';
    } else if (preferredDate < today) {
      errs.preferredDate = 'Appointment date cannot be in the past';
    }
    if (!preferredTime) errs.preferredTime = 'Please select a preferred time slot';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1100);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setServiceSlug('');
    setPreferredDate('');
    setPreferredTime('10:00 AM');
    setMessage('');
    setErrors({});
  };

  const selectedServiceName = services.find((s) => s.slug === serviceSlug)?.name || 'General Consultation';

  return (
    <div className="py-12 sm:py-16 bg-[#FAFCFB] text-[#152B32]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#687A80] mb-8">
          <Link to="/dental" className="hover:text-[#0D9488] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[#152B32] font-semibold">Book an Appointment</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D9488] block mb-2">
            ONLINE CONSULTATION REQUEST
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#152B32]">
            Let's Plan Your Visit.
          </h1>
          <p className="text-sm sm:text-base text-[#687A80] mt-3 leading-relaxed">
            Share your preferred appointment details and the service you would like to discuss.
          </p>
        </div>

        {/* Main Appointment Card */}
        <div className="bg-white border border-[#E3ECE9] rounded-3xl p-6 sm:p-10 shadow-xs">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#E6F6F2] border border-[#0D9488]/30 text-[#0D9488] flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#152B32]">
                    Appointment Request Simulated
                  </h3>
                  <p className="text-sm text-[#687A80] mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#152B32]">{fullName}</strong>. Your requested session for <strong className="text-[#0D9488]">{selectedServiceName}</strong> on <strong className="text-[#152B32]">{preferredDate}</strong> at <strong className="text-[#152B32]">{preferredTime}</strong> has been logged in frontend state.
                  </p>
                </div>

                {/* Explicit Mandatory Demo Notice */}
                <div className="p-4 bg-[#FAFCFB] border border-[#E3ECE9] rounded-2xl text-xs text-[#687A80] text-left max-w-lg mx-auto space-y-2">
                  <div className="flex items-center gap-2 text-[#0D9488] font-bold">
                    <Info className="w-4 h-4" />
                    <span>Frontend Demonstration Only</span>
                  </div>
                  <p className="leading-relaxed">
                    Demo request completed. This frontend preview does not send appointment requests to a clinic. No real patient data is stored or transmitted.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] transition-colors cursor-pointer"
                  >
                    Schedule Another Visit
                  </button>

                  <Link
                    to="/dental"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F0F8F6] text-[#152B32] text-xs font-bold uppercase tracking-wider hover:bg-[#E3ECE9] transition-colors"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Return to Homepage</span>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#152B32] mb-2">
                      Full Name <span className="text-[#0D9488]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Radhika Kapoor"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full bg-[#FAFCFB] border rounded-xl px-4 py-3 text-xs sm:text-sm text-[#152B32] focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-[#E3ECE9] focus:border-[#0D9488]'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-500 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#152B32] mb-2">
                      Email Address <span className="text-[#0D9488]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="radhika@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full bg-[#FAFCFB] border rounded-xl px-4 py-3 text-xs sm:text-sm text-[#152B32] focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-[#E3ECE9] focus:border-[#0D9488]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-500 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#152B32] mb-2">
                      Phone Number <span className="text-[#0D9488]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full bg-[#FAFCFB] border rounded-xl px-4 py-3 text-xs sm:text-sm text-[#152B32] focus:outline-none transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-[#E3ECE9] focus:border-[#0D9488]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-rose-500 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Preferred Service Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#152B32] mb-2">
                      Treatment of Interest <span className="text-[#0D9488]">*</span>
                    </label>
                    <select
                      value={serviceSlug}
                      onChange={(e) => setServiceSlug(e.target.value)}
                      className={`w-full bg-[#FAFCFB] border rounded-xl px-4 py-3 text-xs sm:text-sm text-[#152B32] focus:outline-none transition-colors cursor-pointer ${
                        errors.serviceSlug ? 'border-rose-500' : 'border-[#E3ECE9] focus:border-[#0D9488]'
                      }`}
                    >
                      <option value="">Select a dental treatment...</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.slug}>
                          {s.name} ({s.category})
                        </option>
                      ))}
                    </select>
                    {errors.serviceSlug && (
                      <span className="text-[11px] text-rose-500 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.serviceSlug}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Preferred Date (Min set to today) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#152B32] mb-2">
                      Preferred Date <span className="text-[#0D9488]">*</span>
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`w-full bg-[#FAFCFB] border rounded-xl px-4 py-3 text-xs sm:text-sm text-[#152B32] focus:outline-none transition-colors ${
                        errors.preferredDate ? 'border-rose-500' : 'border-[#E3ECE9] focus:border-[#0D9488]'
                      }`}
                    />
                    {errors.preferredDate && (
                      <span className="text-[11px] text-rose-500 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                      </span>
                    )}
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#152B32] mb-2">
                      Preferred Time Slot <span className="text-[#0D9488]">*</span>
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-[#FAFCFB] border border-[#E3ECE9] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#152B32] focus:outline-none focus:border-[#0D9488] transition-colors cursor-pointer"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Notes or Medical Context */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#152B32] mb-2">
                    Additional Notes or Sensitivities <span className="text-[#687A80] font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us if you experience dental sensitivity, have questions regarding specific procedures, or have timing constraints..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#FAFCFB] border border-[#E3ECE9] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#152B32] focus:outline-none focus:border-[#0D9488] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#0D9488]/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Appointment Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
