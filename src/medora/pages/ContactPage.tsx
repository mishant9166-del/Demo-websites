import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Navigation,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { medoraConfig } from '../config/site';
import { departments } from '../data/departments';
import type { ContactFormData } from '../types/medora';

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please select or provide an inquiry subject';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSent(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F8FBFD] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Header */}
        <SectionHeading
          eyebrow="HOSPITAL DIRECTORY & HELP DESK"
          title="Get in Touch with"
          highlight="Medora."
          subtitle="Our patient desk, administrative staff, and emergency triage team are available to answer inquiries, coordinate care, and assist with hospital visits."
          align="center"
        />

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-[#E1EAF0] shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5FC] text-[#1769AA] flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#102B46] mb-1">Phone Inquiries</h4>
            <p className="text-xs text-[#6B7E8E] mb-3">General hospital assistance</p>
            <p className="text-sm font-bold text-[#1769AA]">{medoraConfig.contact.generalPhone}</p>
            <span className="text-[11px] text-[#6B7E8E] block mt-1">Emergency: {medoraConfig.contact.emergencyPhone}</span>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E1EAF0] shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5FC] text-[#1769AA] flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#102B46] mb-1">Email Inquiries</h4>
            <p className="text-xs text-[#6B7E8E] mb-3">Patient inquiries & feedback</p>
            <p className="text-sm font-bold text-[#1769AA]">{medoraConfig.contact.email}</p>
            <span className="text-[11px] text-[#6B7E8E] block mt-1">Typical response within 24 business hours</span>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E1EAF0] shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5FC] text-[#1769AA] flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#102B46] mb-1">Hospital Campus</h4>
            <p className="text-xs text-[#6B7E8E] mb-3">Central medical pavilion</p>
            <p className="text-xs sm:text-sm font-bold text-[#102B46] leading-snug">{medoraConfig.contact.address}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E1EAF0] shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5FC] text-[#1769AA] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#102B46] mb-1">Visiting Hours</h4>
            <p className="text-xs text-[#6B7E8E] mb-3">Outpatient consultations</p>
            <p className="text-xs font-bold text-[#102B46]">{medoraConfig.contact.opdHours}</p>
            <span className="text-[11px] font-bold text-[#18A9A0] block mt-1">Emergency Care: 24/7 Priority</span>
          </div>
        </div>

        {/* Form and Campus Map Vector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E1EAF0] shadow-2xs">
            <h3 className="text-xl font-bold text-[#102B46] mb-2">Send an Online Inquiry</h3>
            <p className="text-xs sm:text-sm text-[#6B7E8E] mb-6">
              Have a question regarding medical departments, inpatient stays, or administrative requests? Send us a message below.
            </p>

            {isSent ? (
              <div className="p-8 rounded-2xl bg-[#EAF5FC] border border-[#1769AA]/20 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#18A9A0] mx-auto" />
                <h4 className="text-lg font-bold text-[#102B46]">Demo message sent successfully.</h4>
                <p className="text-xs sm:text-sm text-[#6B7E8E] max-w-md mx-auto">
                  Thank you for trying this demonstration form! In a live hospital deployment, this message is routed to the corresponding department help desk.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-6 py-2 rounded-full bg-[#1769AA] text-white text-xs font-bold hover:bg-[#125388] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contactName" className="block text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#183047] placeholder-[#6B7E8E] focus:outline-hidden transition-colors ${
                        errors.name
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E1EAF0] bg-[#F8FBFD] focus:border-[#1769AA]'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#183047] placeholder-[#6B7E8E] focus:outline-hidden transition-colors ${
                        errors.email
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E1EAF0] bg-[#F8FBFD] focus:border-[#1769AA]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contactSubject" className="block text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
                    Inquiry Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contactSubject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#183047] bg-[#F8FBFD] focus:outline-hidden transition-colors ${
                      errors.subject
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-[#E1EAF0] focus:border-[#1769AA]'
                    }`}
                  >
                    <option value="">— Select Subject Category —</option>
                    <option value="General Outpatient Inquiries">General Outpatient Inquiries</option>
                    <option value="Department Specific Information">Department Specific Information</option>
                    <option value="Facilities & Accommodation">Facilities & Accommodation</option>
                    <option value="Diagnostic Imaging Inquiries">Diagnostic Imaging Inquiries</option>
                    <option value="Feedback & Patient Experience">Feedback & Patient Experience</option>
                  </select>
                  {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our clinical or administrative team assist you today?"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#183047] placeholder-[#6B7E8E] focus:outline-hidden transition-colors ${
                      errors.message
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-[#E1EAF0] bg-[#F8FBFD] focus:border-[#1769AA]'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1769AA] hover:bg-[#125388] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message (Demo)</span>
                </button>
              </form>
            )}
          </div>

          {/* Interactive Campus Map Placeholder (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E1EAF0] shadow-2xs space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Navigation className="w-5 h-5 text-[#18A9A0]" />
                <h3 className="text-lg font-bold text-[#102B46]">Hospital Campus Locator</h3>
              </div>
              <p className="text-xs text-[#6B7E8E]">
                Metropolis Medical District, Health City (Illustrative Vector Campus Map)
              </p>
            </div>

            {/* Styled SVG Vector Map Locator */}
            <div className="relative aspect-[4/3] rounded-2xl bg-[#EAF5FC] border border-[#E1EAF0] overflow-hidden p-6 flex flex-col justify-between">
              {/* Grid Lines Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1769AA08_1px,transparent_1px),linear-gradient(to_bottom,#1769AA08_1px,transparent_1px)] bg-[size:24px_24px]" />

              {/* Vector Campus Blocks */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#E1EAF0] text-[10px] shadow-2xs">
                  <strong className="text-[#102B46] block">North Wing</strong>
                  <span className="text-[#6B7E8E]">Emergency & Trauma</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#E1EAF0] text-[10px] shadow-2xs">
                  <strong className="text-[#102B46] block">East Pavilion</strong>
                  <span className="text-[#6B7E8E]">Diagnostic Radiology</span>
                </div>
              </div>

              {/* Central Hospital Marker */}
              <div className="relative z-10 my-auto text-center">
                <div className="w-14 h-14 rounded-full bg-[#1769AA] text-white flex items-center justify-center mx-auto shadow-lg border-2 border-white animate-bounce">
                  <Building2 className="w-7 h-7" />
                </div>
                <div className="mt-2 inline-block bg-[#102B46] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  Medora Central Atrium
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-end">
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#E1EAF0] text-[10px] shadow-2xs">
                  <strong className="text-[#102B46] block">South Wing</strong>
                  <span className="text-[#6B7E8E]">Outpatient Clinics</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#E1EAF0] text-[10px] shadow-2xs">
                  <strong className="text-[#102B46] block">Parking</strong>
                  <span className="text-[#6B7E8E]">Underground 400+ Bays</span>
                </div>
              </div>
            </div>

            {/* Quick Department Link Shortcuts */}
            <div className="pt-2 border-t border-[#E1EAF0]">
              <span className="text-xs font-bold text-[#102B46] block mb-2">Direct Department Directory:</span>
              <div className="flex flex-wrap gap-1.5">
                {departments.slice(0, 6).map((dept) => (
                  <Link
                    key={dept.id}
                    to={`/medora/departments/${dept.slug}`}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#F8FBFD] hover:bg-[#EAF5FC] text-[#1769AA] border border-[#E1EAF0] transition-colors"
                  >
                    {dept.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
