import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Navigation,
} from 'lucide-react';
import { CLINIC_INFO } from '../config/site';
import { SectionHeading } from '../components/common/SectionHeading';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <SectionHeading
            badge="Find &amp; Contact Us"
            badgeVariant="sage"
            title="We’d love to hear from you and your companion."
            subtitle="Have a question about preventive vaccines, transferring records, or our Fear-Free handling philosophy? Reach out to our friendly front desk team."
          />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0D9CA]/50 text-xs text-[#343D30]/80 border border-[#E8DFD1]">
            <AlertCircle className="w-4 h-4 text-[#C76F52] shrink-0" />
            <span>Demonstration contact information. Fictional address &amp; phone for portfolio purposes.</span>
          </div>
        </div>

        {/* 2 Columns: Contact Form & Clinic Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFD1] shadow-xs space-y-6">
            <h3 className="font-fraunces text-2xl font-bold text-[#343D30]">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#82947A]/15 border border-[#82947A]/30 space-y-3 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#82947A] mx-auto" />
                <h4 className="font-fraunces text-xl font-bold text-[#343D30]">
                  Message Received (Demo Mode)
                </h4>
                <p className="text-xs sm:text-sm text-[#343D30]/80">
                  Thank you, <strong>{form.name}</strong>. In a live clinic environment, our veterinary front-desk would reply to <strong>{form.email}</strong> within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C76F52] text-white text-xs font-semibold hover:bg-[#b05d42]"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contactName" className="block text-xs font-semibold text-[#343D30]">
                      Your Name <span className="text-[#C76F52]">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border border-[#E8DFD1] text-sm text-[#343D30] focus:outline-none focus:ring-2 focus:ring-[#C76F52]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contactEmail" className="block text-xs font-semibold text-[#343D30]">
                      Email Address <span className="text-[#C76F52]">*</span>
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border border-[#E8DFD1] text-sm text-[#343D30] focus:outline-none focus:ring-2 focus:ring-[#C76F52]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contactSubject" className="block text-xs font-semibold text-[#343D30]">
                    Inquiry Subject
                  </label>
                  <input
                    id="contactSubject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="e.g. Vaccination query, records transfer, puppy advice"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border border-[#E8DFD1] text-sm text-[#343D30] focus:outline-none focus:ring-2 focus:ring-[#C76F52]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contactMsg" className="block text-xs font-semibold text-[#343D30]">
                    Your Message <span className="text-[#C76F52]">*</span>
                  </label>
                  <textarea
                    id="contactMsg"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can our clinical team help you and your companion today?"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border border-[#E8DFD1] text-sm text-[#343D30] focus:outline-none focus:ring-2 focus:ring-[#C76F52]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#C76F52] text-white font-bold text-sm hover:bg-[#b05d42] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>

                  <Link
                    to="/paw-whisker/book-visit"
                    className="text-xs font-semibold text-[#82947A] hover:text-[#343D30] underline"
                  >
                    Looking to book an appointment instead?
                  </Link>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Address, Hours, Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#FBF5EA] border border-[#E8DFD1] space-y-6">
              <h3 className="font-fraunces text-2xl font-bold text-[#343D30]">
                Clinic Information
              </h3>

              <ul className="space-y-4 text-sm text-[#343D30]/85">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C76F52] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#343D30]">Willow Creek Practice</div>
                    <div>{CLINIC_INFO.address.street}</div>
                    <div>{CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}</div>
                    <div className="text-xs text-[#82947A] mt-1 flex items-center gap-1">
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Dedicated patient parking behind clinic building</span>
                    </div>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#82947A] shrink-0" />
                  <div>
                    <div className="font-bold text-[#343D30]">Telephone</div>
                    <div>{CLINIC_INFO.phone}</div>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#82947A] shrink-0" />
                  <div>
                    <div className="font-bold text-[#343D30]">Email</div>
                    <div>{CLINIC_INFO.email}</div>
                  </div>
                </li>

                <li className="flex items-start gap-3 pt-2 border-t border-[#E8DFD1]">
                  <Clock className="w-5 h-5 text-[#C76F52] shrink-0 mt-0.5" />
                  <div className="w-full">
                    <div className="font-bold text-[#343D30] mb-1">Hours of Care</div>
                    <div className="flex justify-between text-xs py-0.5">
                      <span>Mon – Fri:</span>
                      <span className="font-medium text-[#343D30]">{CLINIC_INFO.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between text-xs py-0.5">
                      <span>Saturday:</span>
                      <span className="font-medium text-[#343D30]">{CLINIC_INFO.hours.saturday}</span>
                    </div>
                    <div className="flex justify-between text-xs py-0.5">
                      <span>Sunday:</span>
                      <span className="font-semibold text-[#C76F52]">{CLINIC_INFO.hours.sunday}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Stylized Illustrated Location / Map Placeholder */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8DFD1] space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#343D30]">
                <span>Willow Creek Neighbourhood Map</span>
                <span className="text-[#82947A]">Interactive Map Simulation</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#82947A]/15 border border-[#E8DFD1] flex flex-col items-center justify-center text-center p-4">
                <MapPin className="w-8 h-8 text-[#C76F52] animate-bounce" />
                <span className="font-fraunces font-bold text-[#343D30] mt-1 text-sm">
                  142 Willow Creek Lane
                </span>
                <span className="text-[11px] text-[#343D30]/70">
                  Corner of Elm &amp; Willow • Opposite Riverview Dog Park
                </span>
              </div>
            </div>

            {/* Book Visit Callout */}
            <div className="p-6 rounded-3xl bg-[#343D30] text-white flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="font-fraunces font-bold text-base">Ready for an exam?</div>
                <div className="text-xs text-[#FBF5EA]/80">Schedule an appointment online in minutes.</div>
              </div>
              <Link
                to="/paw-whisker/book-visit"
                className="shrink-0 px-4 py-2.5 rounded-xl bg-[#C76F52] text-white text-xs font-bold hover:bg-[#b05d42]"
              >
                Book Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
