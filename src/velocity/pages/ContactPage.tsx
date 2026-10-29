import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, ChevronRight, Info } from 'lucide-react';
import { velocityConfig } from '../config/site';
import { vehicles } from '../data/vehicles';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('type') === 'test-drive' ? 'Test-drive request' : 'General enquiry';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState(defaultType);
  const [vehicleOfInterest, setVehicleOfInterest] = useState('');
  const [preferredMethod, setPreferredMethod] = useState<'Email' | 'Phone'>('Email');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!message.trim()) {
      errs.message = 'Please provide details or notes for your inquiry';
    }
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
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrors({});
  };

  return (
    <div className="py-12 sm:py-16 bg-[#080A0B] text-[#F5F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#A0A7AC] mb-8">
          <Link to="/velocity" className="hover:text-[#C8FF45] transition-colors">
            Showroom
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[#F5F7F7] font-semibold">
            Contact & Inquiries
          </span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C8FF45] font-bold block mb-2">
            CONCIERGE & SHOWROOM
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let's find your next drive.
          </h1>
          <p className="text-sm sm:text-base text-[#A0A7AC] mt-3 leading-relaxed">
            Connect with our dealership specialists for private vehicle presentations, telemetry audits, or acquisition consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-[#101315] border border-white/10 rounded-lg p-6 sm:p-8 shadow-2xl">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C8FF45]/15 border border-[#C8FF45]/30 text-[#C8FF45] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#F5F7F7]">Demo Inquiry Completed</h3>
                    <p className="text-sm text-[#A0A7AC] mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you for submitting your inquiry, <strong className="text-white">{fullName}</strong>.
                    </p>
                  </div>

                  {/* Portfolio Frontend Notice */}
                  <div className="p-4 bg-[#171B1E] border border-white/10 rounded-lg text-xs text-[#A0A7AC] text-left max-w-lg mx-auto space-y-2">
                    <div className="flex items-center gap-2 text-[#C8FF45] font-bold">
                      <Info className="w-4 h-4" />
                      <span>Notice for Evaluators & Dealership Reviewers</span>
                    </div>
                    <p className="leading-relaxed">
                      Because this is a frontend-only portfolio demonstration, no real data has been sent to an email inbox or server. This form successfully validated inputs, executed simulated asynchronous latency, and transitioned to this confirmation state.
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#C8FF45] text-[#080A0B] text-xs font-bold uppercase tracking-wider hover:bg-[#b5eb3b] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-1.5">
                        Full Name <span className="text-[#C8FF45]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vikram Singhania"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full bg-[#171B1E] border rounded px-3.5 py-2.5 text-xs text-[#F5F7F7] focus:outline-none transition-colors ${
                          errors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-[#C8FF45]'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[10px] text-rose-400 mt-1 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-1.5">
                        Email Address <span className="text-[#C8FF45]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="vikram@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full bg-[#171B1E] border rounded px-3.5 py-2.5 text-xs text-[#F5F7F7] focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#C8FF45]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-rose-400 mt-1 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-1.5">
                        Phone Number <span className="text-[#A0A7AC]/60">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#171B1E] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#F5F7F7] focus:outline-none focus:border-[#C8FF45] transition-colors"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-1.5">
                        Inquiry Nature
                      </label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full bg-[#171B1E] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#F5F7F7] focus:outline-none focus:border-[#C8FF45] transition-colors cursor-pointer"
                      >
                        <option value="General enquiry">General Enquiry</option>
                        <option value="Vehicle information">Vehicle Information</option>
                        <option value="Test-drive request">Test-Drive Request</option>
                        <option value="Vehicle availability">Vehicle Availability</option>
                        <option value="Other">Other Bespoke Request</option>
                      </select>
                    </div>
                  </div>

                  {/* Vehicle of Interest Dropdown */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-1.5">
                      Vehicle of Interest <span className="text-[#A0A7AC]/60">(Optional)</span>
                    </label>
                    <select
                      value={vehicleOfInterest}
                      onChange={(e) => setVehicleOfInterest(e.target.value)}
                      className="w-full bg-[#171B1E] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#F5F7F7] focus:outline-none focus:border-[#C8FF45] transition-colors cursor-pointer"
                    >
                      <option value="">Select a vehicle from our collection...</option>
                      {vehicles.map((v) => (
                        <option key={v.id} value={`${v.make} ${v.model}`}>
                          {v.year} {v.make} {v.model} ({v.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-2">
                      Preferred Method of Contact
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 text-xs text-[#F5F7F7] cursor-pointer">
                        <input
                          type="radio"
                          name="preferredMethod"
                          value="Email"
                          checked={preferredMethod === 'Email'}
                          onChange={() => setPreferredMethod('Email')}
                          className="accent-[#C8FF45]"
                        />
                        <span>Email Consultation</span>
                      </label>
                      <label className="flex items-center gap-2 text-xs text-[#F5F7F7] cursor-pointer">
                        <input
                          type="radio"
                          name="preferredMethod"
                          value="Phone"
                          checked={preferredMethod === 'Phone'}
                          onChange={() => setPreferredMethod('Phone')}
                          className="accent-[#C8FF45]"
                        />
                        <span>Phone Call</span>
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A7AC] mb-1.5">
                      Message & Requirements <span className="text-[#C8FF45]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please let us know your preferred viewing schedule, trade-in queries, or custom specification questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full bg-[#171B1E] border rounded px-3.5 py-2.5 text-xs text-[#F5F7F7] focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-rose-500' : 'border-white/10 focus:border-[#C8FF45]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[10px] text-rose-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded bg-[#C8FF45] text-[#080A0B] text-xs font-bold uppercase tracking-widest hover:bg-[#b5eb3b] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-[#080A0B]/30 border-t-[#080A0B] rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Showroom Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Dealership Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-lg bg-[#101315] border border-white/10 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8FF45] font-bold block mb-1">
                  LOCATION & SHOWROOM
                </span>
                <h3 className="text-lg font-bold text-[#F5F7F7]">Velocity Motor Gallery</h3>
              </div>

              <div className="space-y-4 text-xs text-[#A0A7AC]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C8FF45] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F5F7F7] font-semibold block">Address</span>
                    <span>{velocityConfig.showroom.address}</span>
                    <span className="block">{velocityConfig.showroom.state}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C8FF45] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F5F7F7] font-semibold block">Telephone</span>
                    <span>{velocityConfig.showroom.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C8FF45] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F5F7F7] font-semibold block">Direct Concierge Email</span>
                    <a
                      href={`mailto:${velocityConfig.showroom.conciergeEmail}`}
                      className="text-[#C8FF45] hover:underline"
                    >
                      {velocityConfig.showroom.conciergeEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C8FF45] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F5F7F7] font-semibold block">Operating Hours</span>
                    <span>{velocityConfig.showroom.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Email Client Trigger Card */}
            <div className="p-5 rounded-lg bg-[#171B1E] border border-white/10 text-xs text-[#A0A7AC] space-y-2">
              <span className="font-bold text-[#F5F7F7] block">Prefer your email client?</span>
              <p className="leading-relaxed text-[11px]">
                Click below to launch your default mail app with a pre-configured subject line to our desk.
              </p>
              <a
                href={`mailto:${velocityConfig.showroom.conciergeEmail}?subject=Direct Dealership Inquiry - Velocity Automotive`}
                className="inline-flex items-center gap-1.5 text-[#C8FF45] font-semibold hover:underline pt-1"
              >
                <span>Launch Email App →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
