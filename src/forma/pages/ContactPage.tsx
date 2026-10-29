import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HairlineDivider } from '../components/common/HairlineDivider';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Atelier Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter your message (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSent(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F7F6F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#777A62] block">
            Communication &bull; The New Delhi Atelier
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#292B28] leading-[1.08] tracking-tight">
            Connect with our architects and joinery studio.
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-[#292B28]/85 leading-relaxed pt-2">
            Whether inquiring about a residential commission, editorial feature, or visiting our stone library, we look forward to hearing from you.
          </p>
        </div>

        <HairlineDivider />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Atelier Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <span className="text-[11px] uppercase tracking-[0.24em] font-sans font-semibold text-[#777A62] block">
                Atelier Location
              </span>
              <div className="space-y-3 font-sans text-sm text-[#292B28]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#777A62] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#292B28]">
                      Forma Studio & Material Archive
                    </h3>
                    <p>{STUDIO_CONFIG.contact.address.line1}</p>
                    <p>{STUDIO_CONFIG.contact.address.precinct}</p>
                    <p>{STUDIO_CONFIG.contact.address.locality}</p>
                    <p>{STUDIO_CONFIG.contact.address.country} — {STUDIO_CONFIG.contact.address.postalCode}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <Phone className="w-4 h-4 text-[#777A62] shrink-0" />
                  <span className="font-mono text-xs">{STUDIO_CONFIG.contact.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#777A62] shrink-0" />
                  <span className="font-mono text-xs">{STUDIO_CONFIG.contact.email}</span>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock className="w-4 h-4 text-[#777A62] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-medium block text-[#292B28]">Atelier Hours</span>
                    <span className="text-[#292B28]/70">{STUDIO_CONFIG.contact.visitingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Atelier Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E9E4DA] border border-[#E2DDD5]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Forma Studio meeting table and stone archive in New Delhi"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#F7F6F2]/95 px-3 py-1 text-[11px] font-mono text-[#777A62] border border-[#E2DDD5]">
                Dhan Mill Compound Atelier
              </div>
            </div>

            {/* Fictional demo notice */}
            <div className="p-4 bg-[#E9E4DA]/60 border border-[#D8D2C7] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#292B28]">
                <ShieldCheck className="w-4 h-4 text-[#777A62]" />
                <span>Demonstration Notice</span>
              </div>
              <p className="text-xs text-[#292B28]/75 leading-relaxed font-sans">
                {STUDIO_CONFIG.disclaimer}
              </p>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-white border border-[#E2DDD5] p-8 sm:p-12">
            {isSent ? (
              <div className="py-8 space-y-6 text-center animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#E9E4DA] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#777A62]" />
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#292B28]">
                  Message Received in Demo Browser
                </h3>
                <p className="font-serif italic text-base text-[#292B28]/85 max-w-md mx-auto">
                  “Your demo enquiry has been saved in this browser. It has not been sent to a real design studio.”
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSent(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Atelier Enquiry',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 border border-[#292B28] text-xs uppercase tracking-widest text-[#292B28] hover:bg-[#292B28] hover:text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#292B28]">
                    Send a Direct Note
                  </h2>
                  <p className="text-xs text-[#292B28]/70 pt-1 font-sans">
                    For detailed architectural briefs, we encourage our comprehensive{' '}
                    <Link to="/forma/consultation" className="underline text-[#777A62] hover:text-[#292B28]">
                      Consultation Questionnaire &rarr;
                    </Link>
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-1.5"
                    >
                      Your Name <span className="text-red-700">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Seth"
                      className={`w-full px-4 py-2.5 text-xs bg-[#F7F6F2] border focus:outline-none focus:border-[#292B28] ${
                        errors.name ? 'border-red-600' : 'border-[#E2DDD5]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-600 pt-1 block">{errors.name}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contactEmail"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-1.5"
                      >
                        Email Address <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. vikram@domain.com"
                        className={`w-full px-4 py-2.5 text-xs bg-[#F7F6F2] border focus:outline-none focus:border-[#292B28] ${
                          errors.email ? 'border-red-600' : 'border-[#E2DDD5]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-600 pt-1 block">{errors.email}</span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contactPhone"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-1.5"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98110 00000"
                        className="w-full px-4 py-2.5 text-xs bg-[#F7F6F2] border border-[#E2DDD5] focus:outline-none focus:border-[#292B28]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contactSubject"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-1.5"
                    >
                      Subject
                    </label>
                    <select
                      id="contactSubject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-[#F7F6F2] border border-[#E2DDD5] focus:outline-none focus:border-[#292B28]"
                    >
                      <option value="General Atelier Enquiry">General Atelier Enquiry</option>
                      <option value="Residential Project Inquiry">Residential Project Inquiry</option>
                      <option value="Hospitality Collaboration">Hospitality Collaboration</option>
                      <option value="Press & Editorial Feature">Press & Editorial Feature</option>
                      <option value="Material Library Appointment">Material Library Appointment</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contactMessage"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-1.5"
                    >
                      Your Note <span className="text-red-700">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your question, project timeline, or appointment request..."
                      className={`w-full p-4 text-xs bg-[#F7F6F2] border focus:outline-none focus:border-[#292B28] ${
                        errors.message ? 'border-red-600' : 'border-[#E2DDD5]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-600 pt-1 block">{errors.message}</span>
                    )}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#292B28]/50 font-mono">
                    All demo messages stay in local browser state.
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#292B28] text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#292B28]/90 transition-all flex items-center gap-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

export default ContactPage;
