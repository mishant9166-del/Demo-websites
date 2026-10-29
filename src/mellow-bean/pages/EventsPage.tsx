import React, { useState } from 'react';
import {
  Clock,
  CheckCircle,
  AlertCircle,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { PriceTag } from '../components/common/PriceTag';
import { CAFE_EVENTS } from '../data/events';
import type { EventInquiryData } from '../types/cafe';

export const EventsPage: React.FC = () => {
  const [formData, setFormData] = useState<EventInquiryData>({
    name: '',
    email: '',
    phone: '',
    eventType: CAFE_EVENTS[0].title,
    date: '',
    estimatedGuests: 12,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter at least 10 digits.';
    }
    if (!formData.date) errs.date = 'Please pick a proposed date for your gathering.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setInquiryRef(`MB-EVT-${Math.floor(1000 + Math.random() * 9000)}`);
    setIsSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F8F2E7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionHeading
            badge="Gatherings & Workshops"
            title="Celebrate Slow Moments Together"
            subtitle="From intimate garden brunches and bridal celebrations to barista coffee cuppings and sourdough masterclasses, host your special occasion in our sunlit café."
            className="mb-0"
          />
          <p className="font-handwriting text-2xl text-[#B77A4A]">
            “Laughter, warm loaves, and shared tables.”
          </p>
        </div>

        {/* 3 Event Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAFE_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] overflow-hidden shadow-sm flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#FFFEFA]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#382820]">
                  {event.capacity}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-[#382820]">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#382820]/75 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#EADFCF]/60">
                  <div className="flex items-center gap-2 text-xs text-[#382820]/70">
                    <Clock className="w-4 h-4 text-[#B77A4A]" />
                    <span>{event.duration || event.timing}</span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B77A4A] block">
                      Includes:
                    </span>
                    <ul className="space-y-1 text-xs text-[#382820]/80">
                      {(event.includes || event.features || []).map((inc: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#777B5A] font-bold">&bull;</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-[#382820]/60 block">Price Guide</span>
                      <PriceTag price={event.pricePerPerson} size="md" suffix="/ person" />
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, eventType: event.title });
                        const el = document.getElementById('inquiry-form');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-4 py-2 rounded-full bg-[#382820] text-[#FFFEFA] text-xs font-semibold hover:bg-[#382820]/90 transition-all"
                    >
                      Enquire &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Inquiry Form Section */}
        <div id="inquiry-form" className="max-w-3xl mx-auto">
          <div className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-8 sm:p-12 shadow-sm space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B77A4A]">
                Host With Us
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#382820]">
                Private Gathering & Workshop Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#382820]/75">
                Tell us about your proposed event and our team will get in touch with availability and tailored menus.
              </p>
            </div>

            {/* Honest Demo Notification */}
            <div className="p-4 rounded-2xl bg-[#F0D27A]/25 border border-[#F0D27A]/50 flex items-start gap-3 text-xs text-[#382820]">
              <ShieldAlert className="w-4 h-4 text-[#B77A4A] shrink-0 mt-0.5" />
              <p>
                <strong>Demonstration Form:</strong> Submissions are processed locally in your browser. No emails or event requests will be sent to a real venue.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#777B5A]/20 text-[#777B5A] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#382820]">
                  Thank you for your inquiry, {formData.name}!
                </h4>
                <p className="text-xs sm:text-sm text-[#382820]/80 max-w-md mx-auto">
                  We have recorded your demo request for <strong>{formData.eventType}</strong> on{' '}
                  <strong>{formData.date}</strong> for ~{formData.estimatedGuests} guests.
                </p>
                <p className="text-xs text-[#382820]/60">
                  Demo Reference: <span className="font-mono font-bold">{inquiryRef}</span>
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#382820] text-[#FFFEFA] text-xs font-semibold hover:bg-[#382820]/90 transition-all shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
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
                      placeholder="e.g. Tanvi Kulkarni"
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
                      placeholder="tanvi@example.com"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98200 45678"
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
                    <label className="block text-xs font-semibold text-[#382820] mb-1">
                      Event Package
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
                    >
                      {CAFE_EVENTS.map((evt) => (
                        <option key={evt.id} value={evt.title}>
                          {evt.title}
                        </option>
                      ))}
                      <option value="Bespoke Private Café Gathering">
                        Bespoke Private Café Gathering
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1">
                      Target Date *
                    </label>
                    <input
                      type="date"
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
                    <label className="block text-xs font-semibold text-[#382820] mb-1">
                      Estimated Guests
                    </label>
                    <input
                      type="number"
                      min={4}
                      max={40}
                      value={formData.estimatedGuests}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          estimatedGuests: parseInt(e.target.value, 10) || 10,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#382820] mb-1">
                    Details, Menu Preferences or Dietary Considerations
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the occasion, vibe, and any specific items you'd love on the menu..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#382820] text-[#FFFEFA] font-medium text-sm hover:bg-[#382820]/90 transition-all shadow-md flex items-center justify-center gap-2 group"
                  >
                    <span>Send Demo Event Inquiry</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
