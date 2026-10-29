import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  ShieldAlert,
  ArrowRight,
  Compass,
} from 'lucide-react';
import { CAFE_CONFIG } from '../config/cafeConfig';
import { SectionHeading } from '../components/common/SectionHeading';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.message.trim()) errs.message = 'Please enter a message.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F8F2E7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionHeading
            badge="Get in Touch"
            title="We’d Love to Hear From You"
            subtitle="Whether you have questions regarding dietary allergens, private bookings, or simply want to know our fresh roast schedule."
            className="mb-0"
          />
          <p className="font-handwriting text-2xl text-[#B77A4A]">
            “Pop in for a chat or leave us a note below.”
          </p>
        </div>

        {/* Demo Notification Banner */}
        <div className="p-4 rounded-2xl bg-[#F0D27A]/25 border border-[#F0D27A]/50 flex items-start gap-3.5 max-w-3xl mx-auto text-xs sm:text-sm text-[#382820]">
          <ShieldAlert className="w-5 h-5 text-[#B77A4A] shrink-0 mt-0.5" />
          <p>
            <strong>Fictional Demo Environment:</strong> MELLOW & BEAN is an independent café portfolio concept. The location, phone, and contact form operate entirely on the frontend.
          </p>
        </div>

        {/* 3 Contact Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#FFFEFA] border border-[#EADFCF] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F0D27A]/30 text-[#382820] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#382820]">The Café Sanctum</h3>
            <p className="text-xs sm:text-sm text-[#382820]/80 leading-relaxed">
              {CAFE_CONFIG.address.street}
              <br />
              {CAFE_CONFIG.address.locality}
              <br />
              {CAFE_CONFIG.address.city}, {CAFE_CONFIG.address.postalCode}
            </p>
            <div className="pt-2 text-xs text-[#777B5A] flex items-center gap-1.5 font-medium">
              <Compass className="w-3.5 h-3.5" />
              <span>5 mins from 100ft Road Metro</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#FFFEFA] border border-[#EADFCF] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F0D27A]/30 text-[#382820] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#382820]">Kitchen & Bar Hours</h3>
            <div className="text-xs sm:text-sm text-[#382820]/80 space-y-1.5">
              <div className="flex justify-between border-b border-[#EADFCF]/60 pb-1">
                <span>Mon – Fri</span>
                <span className="font-semibold text-[#382820]">7:30 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#EADFCF]/60 pb-1">
                <span>Saturday</span>
                <span className="font-semibold text-[#382820]">8:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-[#382820]">8:00 AM – 10:30 PM</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#FFFEFA] border border-[#EADFCF] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F0D27A]/30 text-[#382820] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#382820]">Phone & Inquiries</h3>
            <div className="text-xs sm:text-sm text-[#382820]/80 space-y-1 leading-relaxed">
              <p>
                <strong className="text-[#382820]">Phone:</strong> {CAFE_CONFIG.contact.phone}
              </p>
              <p>
                <strong className="text-[#382820]">Email:</strong> {CAFE_CONFIG.contact.email}
              </p>
              <p className="text-[11px] text-[#382820]/60 pt-2">
                * Simulated numbers for design testing.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-8 sm:p-10 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-2xl text-[#382820] border-b border-[#EADFCF] pb-4">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#777B5A]/20 text-[#777B5A] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#382820]">
                  Thank you for reaching out, {formData.name}!
                </h4>
                <p className="text-xs sm:text-sm text-[#382820]/80 max-w-sm mx-auto">
                  Your demo message has been received. In a live environment, our team responds within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#382820] text-[#FFFEFA] text-xs font-semibold hover:bg-[#382820]/90 transition-all shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Siddharth Sen"
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
                    <label className="block text-xs font-semibold text-[#382820] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="siddharth@example.com"
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

                <div>
                  <label className="block text-xs font-semibold text-[#382820] mb-1">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Dietary & Allergen Question">Dietary & Allergen Question</option>
                    <option value="Whole Bean Sourcing">Whole Bean Sourcing & Retail</option>
                    <option value="Media & Press">Media & Collaborations</option>
                    <option value="Feedback">Café Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#382820] mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what's on your mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820] ${
                      errors.message ? 'border-red-400' : 'border-[#EADFCF]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#382820] text-[#FFFEFA] font-medium text-sm hover:bg-[#382820]/90 transition-all shadow-md flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 text-[#F0D27A]" />
                    <span>Send Demo Message</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Map & Direction Graphic */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-8 shadow-xs space-y-6">
              <h4 className="font-serif font-bold text-xl text-[#382820]">
                Finding Us in Indiranagar
              </h4>

              {/* Map Illustration Frame */}
              <div className="w-full h-64 rounded-2xl bg-[#EFE7D8] border border-[#EADFCF] relative overflow-hidden flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#382820_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute w-full h-3 bg-[#EADFCF] top-1/2 -rotate-6" />
                <div className="absolute h-full w-3 bg-[#EADFCF] left-1/3 rotate-12" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#382820] text-[#F0D27A] flex items-center justify-center shadow-lg border-2 border-[#FFFEFA]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="mt-2 bg-[#FFFEFA] px-3.5 py-1.5 rounded-xl shadow-md border border-[#EADFCF] text-center">
                    <p className="font-serif font-bold text-xs text-[#382820]">MELLOW & BEAN</p>
                    <p className="text-[10px] text-[#777B5A]">42 Bloom St, Indiranagar</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#382820]/80">
                <p>
                  Located just off 12th Main Road, our café sits beneath a canopy of gulmohar trees. Look for our brass bean insignia on the whitewashed brick wall.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    to="/mellow-bean/reservations"
                    className="w-full py-3 rounded-full bg-[#382820] text-[#FFFEFA] text-xs font-semibold hover:bg-[#382820]/90 transition-all text-center"
                  >
                    Book a Table
                  </Link>
                  <Link
                    to="/mellow-bean/menu"
                    className="w-full py-3 rounded-full bg-[#F0D27A] text-[#382820] text-xs font-semibold hover:bg-[#F0D27A]/90 transition-all text-center"
                  >
                    View Food & Coffee Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
