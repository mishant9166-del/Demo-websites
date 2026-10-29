import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HAVEN_CONFIG } from '../config/agencyConfig';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: 'Buying a Residential Home',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please share your query (min 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#899687] font-semibold block">
            Advisory Desk &bull; Central Inquiries
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292D2A]">
            Contact Haven & Key
          </h1>
          <p className="text-sm sm:text-base text-[#292D2A]/75 font-sans leading-relaxed">
            Whether inquiring about prime residential acquisitions, confidential representation, or regional desk appointments, our senior partners are available for discreet counsel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Locations & Desks */}
          <div className="lg:col-span-5 space-y-8">
            {/* Headquarters Card */}
            <div className="bg-white border border-[#E7DDCE] p-8 space-y-5">
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#254D3C] bg-[#FAF9F5] px-2 py-0.5 border border-[#E7DDCE] inline-block font-semibold">
                Central Headquarters
              </span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-2xl text-[#292D2A]">
                  Nariman Point Advisory
                </h3>
                <p className="text-xs text-[#292D2A]/75 font-sans leading-relaxed">
                  {HAVEN_CONFIG.headquarters.fullAddress}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E7DDCE] space-y-2 text-xs font-mono text-[#292D2A]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#254D3C]" />
                  <span>{HAVEN_CONFIG.headquarters.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#254D3C]" />
                  <span>{HAVEN_CONFIG.headquarters.email}</span>
                </div>
                <div className="flex items-center gap-2 text-[#899687]">
                  <Clock className="w-4 h-4 text-[#254D3C]" />
                  <span>{HAVEN_CONFIG.headquarters.officeHours}</span>
                </div>
              </div>
            </div>

            {/* Regional Desks */}
            <div className="bg-white border border-[#E7DDCE] p-8 space-y-4">
              <h4 className="font-serif font-bold text-lg text-[#292D2A]">
                Regional Advisory Desks
              </h4>
              <div className="space-y-3 text-xs font-sans">
                {HAVEN_CONFIG.regionalDesks.map((desk, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 pb-2 border-b border-[#E7DDCE]/60 last:border-0 last:pb-0">
                    <MapPin className="w-3.5 h-3.5 text-[#254D3C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#292D2A] block">{desk.city}</span>
                      <span className="text-[#899687]">{desk.precinct}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#E7DDCE] border border-[#E7DDCE] flex items-center justify-center p-6 text-center">
              <div className="space-y-1">
                <MapPin className="w-6 h-6 text-[#254D3C] mx-auto" />
                <h5 className="font-serif font-bold text-sm text-[#292D2A]">
                  Marine Drive & Nariman Point Hub
                </h5>
                <p className="text-[11px] text-[#899687] font-mono">
                  Valet parking available at The Pavilion foyer.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#E7DDCE] p-8 sm:p-12">
            {isSubmitted ? (
              <div className="py-8 space-y-6 text-center animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#254D3C] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#292D2A]">
                  Demo Note Received in Browser
                </h3>
                <p className="font-serif italic text-base text-[#254D3C] max-w-md mx-auto leading-relaxed">
                  “This is a demo enquiry. No message has been sent to a real estate agency.”
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        interest: 'Buying a Residential Home',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 border border-[#254D3C] text-xs uppercase tracking-widest text-[#254D3C] hover:bg-[#254D3C] hover:text-white transition-colors rounded-xs"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#292D2A]">
                    Initiate Advisory Dialogue
                  </h2>
                  <p className="text-xs text-[#292D2A]/70 font-sans pt-1">
                    Looking to list an asset? You can also use our specialized{' '}
                    <Link to="/haven/sell-your-property" className="underline text-[#254D3C] font-semibold">
                      Seller Intake Form &rarr;
                    </Link>
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                      Your Name <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Anand Mahindra"
                      className={`w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border focus:outline-none focus:border-[#254D3C] ${
                        errors.fullName ? 'border-red-600' : 'border-[#E7DDCE]'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 pt-0.5 block">{errors.fullName}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                        Email Address <span className="text-red-700">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. anand@domain.com"
                        className={`w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border focus:outline-none focus:border-[#254D3C] ${
                          errors.email ? 'border-red-600' : 'border-[#E7DDCE]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-600 pt-0.5 block">{errors.email}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98200 00000"
                        className="w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] focus:outline-none focus:border-[#254D3C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                      Nature of Inquiry
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] focus:outline-none focus:border-[#254D3C]"
                    >
                      <option value="Buying a Residential Home">Buying a Residential Home</option>
                      <option value="Executive Long-Term Leasing">Executive Long-Term Leasing</option>
                      <option value="Commercial Office Acquisition">Commercial Office Acquisition</option>
                      <option value="Off-Market Confidential Search">Off-Market Confidential Search</option>
                      <option value="Listing a Prime Property">Listing a Prime Property</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                      Your Message <span className="text-red-700">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your preferred neighborhood, budget parameters, or timeframe..."
                      className={`w-full p-4 text-xs bg-[#FAF9F5] border focus:outline-none focus:border-[#254D3C] ${
                        errors.message ? 'border-red-600' : 'border-[#E7DDCE]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-600 pt-0.5 block">{errors.message}</span>
                    )}
                  </div>
                </div>

                <div className="p-3 bg-[#FAF9F5] border border-[#E7DDCE] flex items-start gap-2.5 text-xs text-[#292D2A]/70">
                  <ShieldCheck className="w-4 h-4 text-[#254D3C] shrink-0 mt-0.5" />
                  <span>
                    This is an illustrative portfolio contact form. Form inputs are recorded in local browser memory only.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#254D3C] text-white text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#1E3F31] transition-all flex items-center justify-center gap-2 rounded-xs shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Advisory Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
