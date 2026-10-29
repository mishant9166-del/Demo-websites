import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('orders');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Header */}
      <section className="bg-[#252525] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-[#FF704F] block mb-2">
            Client Care & Studio Desk
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl leading-relaxed">
            Have questions about product specifications, materials, custom corporate gifting, or orders? Our studio team is here to help.
          </p>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#F7F7F4] p-8 sm:p-10 rounded-xs border border-[#E5E5E0]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#2447E8] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#252525]">Demo Message Logged</h3>
                <p className="text-xs sm:text-sm text-[#777872] max-w-md mx-auto leading-relaxed">
                  Thank you, {name}. Your inquiry has been received in this demonstration session.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-[#252525] text-white text-xs uppercase font-bold rounded-xs"
                  >
                    Send Another Demo Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-[#252525] mb-2">Send a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Rao"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E5E0] rounded-xs text-xs font-medium text-[#252525] focus:outline-none focus:border-[#2447E8]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E5E0] rounded-xs text-xs font-medium text-[#252525] focus:outline-none focus:border-[#2447E8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-1">
                      Inquiry Topic
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E5E0] rounded-xs text-xs font-medium text-[#252525] focus:outline-none focus:border-[#2447E8]"
                    >
                      <option value="orders">Simulated Order Status</option>
                      <option value="product">Product Materials & Care</option>
                      <option value="corporate">Corporate & Bulk Gifting</option>
                      <option value="press">Press & Architectural Collaborations</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Brief inquiry summary..."
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E5E0] rounded-xs text-xs font-medium text-[#252525] focus:outline-none focus:border-[#2447E8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us what you need assistance with..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E5E5E0] rounded-xs text-xs font-medium text-[#252525] focus:outline-none focus:border-[#2447E8]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-xs uppercase font-bold tracking-widest rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Demo Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F7F7F4] p-8 rounded-xs border border-[#E5E5E0] space-y-6">
              <h3 className="font-bold text-sm uppercase tracking-wider text-[#252525] pb-3 border-b border-[#E5E5E0]">
                Studio Coordinates
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#2447E8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#252525] block">Bengaluru Atelier</span>
                    <span className="text-[#777872]">{STORE_CONFIG.contact.studio}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#2447E8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#252525] block">Direct Telephone</span>
                    <span className="font-mono text-[#777872]">{STORE_CONFIG.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#2447E8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#252525] block">Client Care Email</span>
                    <span className="font-mono text-[#777872]">{STORE_CONFIG.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#2447E8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#252525] block">Operating Hours</span>
                    <span className="text-[#777872]">{STORE_CONFIG.contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Link to FAQs */}
            <div className="p-6 bg-white rounded-xs border border-[#E5E5E0] flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#252525]">Looking for immediate answers?</h4>
                <p className="text-[11px] text-[#777872]">Browse our shipping, returns, and ordering guide.</p>
              </div>
              <Link
                to="/object/faq"
                className="px-4 py-2 bg-[#252525] text-white text-xs uppercase font-bold rounded-xs hover:bg-[#2447E8] transition-colors flex items-center gap-1"
              >
                <span>FAQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-white rounded-xs border-l-4 border-[#2447E8] flex items-start gap-3 text-xs text-[#777872]">
              <Shield className="w-4 h-4 text-[#2447E8] shrink-0 mt-0.5" />
              <p>
                OBJECT & FORM is a frontend prototype. Messages submitted through this form are logged in browser memory only and will not reach an active commercial desk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
