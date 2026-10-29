import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { AURELIA_CONFIG } from '../config/retreatConfig';
import { AURELIA_DESTINATIONS } from '../data/destinations';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialEnquiry = searchParams.get('enquiry') || '';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('general');
  const [message, setMessage] = useState(
    initialEnquiry ? `I am inquiring about: ${initialEnquiry}` : ''
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* Editorial Header */}
      <section className="bg-[#173D32] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5BE91] mb-3">
            <Compass className="w-4 h-4" />
            <span>Concierge & Reservations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F8F5EF] leading-tight max-w-3xl mb-4">
            Connect with the Atelier
          </h1>
          <p className="text-base sm:text-lg text-[#F8F5EF]/80 font-light max-w-2xl leading-relaxed">
            Whether inquiring about bespoke itineraries, private dining experiences, or sanctuary buyouts, our retreat advisory team is at your service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-xs border border-[#D5BE91]/40 p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#173D32] text-[#D5BE91] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-[#173D32]">Demo Message Received</h3>
                <p className="text-sm text-[#292B27]/75 max-w-md mx-auto font-light leading-relaxed">
                  Thank you for testing our demonstration contact console. Your inquiry has been processed locally in this browser.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-[#173D32] text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold rounded-xs"
                  >
                    Submit Another Demo Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-serif text-[#173D32] mb-1">
                    Send a Demonstration Inquiry
                  </h2>
                  <p className="text-xs text-[#292B27]/70 font-light">
                    Complete the fields below to simulate a guest consultation request.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alistair Sterling"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alistair@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98000 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1">
                      Destination of Interest
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                    >
                      <option value="general">General Portfolio Inquiry</option>
                      {AURELIA_DESTINATIONS.map((d) => (
                        <option key={d.slug} value={d.slug}>
                          {d.name} ({d.state})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase font-semibold text-[#173D32] tracking-wider block mb-1">
                    Your Message or Special Request *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your upcoming travel intentions, ideal travel dates, or special retreat requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#D5BE91]/40 rounded-xs text-xs font-medium text-[#292B27] focus:outline-none focus:border-[#173D32]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold rounded-xs shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#D5BE91]" />
                  <span>Send Demonstration Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office & Atelier Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-xs border border-[#D5BE91]/40 p-8 shadow-xs space-y-6">
              <h3 className="text-xl font-serif text-[#173D32] border-b border-[#D5BE91]/20 pb-3">
                Central Concierge Atelier
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#173D32] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#173D32] block">Demo Atelier Address</span>
                    <span className="text-[#292B27]/75 font-light">
                      {AURELIA_CONFIG.concierge.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#173D32] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#173D32] block">Telephone</span>
                    <span className="text-[#292B27]/75 font-mono">
                      {AURELIA_CONFIG.concierge.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#173D32] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#173D32] block">Direct Electronic Mail</span>
                    <span className="text-[#292B27]/75 font-mono">
                      {AURELIA_CONFIG.concierge.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#173D32] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#173D32] block">Service Availability</span>
                    <span className="text-[#292B27]/75 font-light">
                      {AURELIA_CONFIG.concierge.hours}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D5BE91]/20">
                <Link
                  to="/aurelia/booking"
                  className="w-full py-3 bg-[#173D32] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold text-center block rounded-xs hover:bg-[#122A22] transition-colors"
                >
                  Plan A Stay Online &rarr;
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 bg-white rounded-xs border border-[#D5BE91]/30">
              <span className="text-[10px] uppercase font-bold text-[#173D32] tracking-wider block mb-3">
                Explore The Brand
              </span>
              <div className="space-y-2 text-xs">
                <Link
                  to="/aurelia/destinations"
                  className="flex items-center justify-between py-1 text-[#292B27]/80 hover:text-[#173D32]"
                >
                  <span>Our 4 Destination Collections</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/aurelia/stays"
                  className="flex items-center justify-between py-1 text-[#292B27]/80 hover:text-[#173D32]"
                >
                  <span>All 6 Retreat Sanctuaries</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/aurelia/faq"
                  className="flex items-center justify-between py-1 text-[#292B27]/80 hover:text-[#173D32]"
                >
                  <span>Frequently Asked Questions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-[#FAF7F2] rounded-xs border-l-4 border-[#173D32] flex items-start gap-3">
              <Shield className="w-4 h-4 text-[#173D32] shrink-0 mt-0.5" />
              <p className="text-xs text-[#292B27]/70 font-light leading-relaxed">
                Aurelia Retreats is a fictional luxury hospitality demo. Inquiries submitted through this form will not be answered by a real business entity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
