import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { dentalConfig } from '../config/site';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject for your inquiry.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message or question.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F6F2] text-[#0D9488] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Building2 className="w-3.5 h-3.5" />
            GET IN TOUCH
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#152B32] tracking-tight mb-4"
          >
            We're Here to Help.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#687A80] leading-relaxed"
          >
            Have questions regarding our treatments, general care, or scheduling? Reach out directly to our friendly front desk team or send us an inquiry below.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Map Placeholder (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3ECE9] shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-[#152B32] pb-2 border-b border-[#E3ECE9]">
                Clinic Contact Details
              </h2>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#687A80] mb-0.5">Phone Inquiries</div>
                  <a 
                    href={`tel:${dentalConfig.clinic.phone.replace(/[^0-9+]/g, '')}`} 
                    className="text-base font-semibold text-[#152B32] hover:text-[#0D9488] transition-colors"
                  >
                    {dentalConfig.clinic.phone}
                  </a>
                  <p className="text-xs text-[#687A80] mt-0.5">Concierge and emergency call desk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#687A80] mb-0.5">Direct Email</div>
                  <a 
                    href={`mailto:${dentalConfig.clinic.email}`} 
                    className="text-base font-semibold text-[#152B32] hover:text-[#0D9488] transition-colors"
                  >
                    {dentalConfig.clinic.email}
                  </a>
                  <p className="text-xs text-[#687A80] mt-0.5">Response typically within one business day</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#687A80] mb-0.5">Physical Practice</div>
                  <p className="text-sm font-semibold text-[#152B32]">
                    {dentalConfig.clinic.address}
                  </p>
                  <p className="text-xs text-[#687A80] mt-0.5">{dentalConfig.clinic.state}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#687A80] mb-0.5">Consultation Hours</div>
                  <p className="text-sm font-medium text-[#152B32] leading-snug">
                    {dentalConfig.clinic.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Map-Style Visual Placeholder */}
            <div className="bg-white rounded-3xl p-6 border border-[#E3ECE9] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0D9488]" />
                  <span className="text-sm font-bold text-[#152B32]">Clinic Location Blueprint</span>
                </div>
                <span className="text-[11px] font-semibold bg-[#F0F8F6] text-[#0D9488] px-2.5 py-1 rounded-full border border-[#E3ECE9]">
                  Placeholder Map
                </span>
              </div>

              <div className="relative h-48 sm:h-56 rounded-2xl bg-[#F0F8F6] border border-[#E3ECE9] overflow-hidden flex flex-col items-center justify-center text-center p-6">
                {/* Visual grid pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0D9488_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Decorative Pin */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#0D9488] text-white flex items-center justify-center shadow-md mb-3 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                
                <p className="relative z-10 text-sm font-bold text-[#152B32]">
                  Healthcare Square • Ground Floor
                </p>
                <p className="relative z-10 text-xs text-[#687A80] max-w-xs mt-1">
                  Ample valet parking available on-site with step-free wheelchair access.
                </p>
                <p className="relative z-10 text-[10px] text-[#0D9488] font-semibold uppercase tracking-wider mt-3">
                  Interactive GPS coordinates loaded upon clinic confirmation
                </p>
              </div>
            </div>

            {/* Quick Link to FAQs */}
            <div className="bg-gradient-to-br from-[#E6F6F2] to-[#F0F8F6] rounded-3xl p-6 border border-[#0D9488]/20 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white text-[#0D9488] flex items-center justify-center shadow-sm shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#152B32]">Looking for quick answers?</h3>
                  <p className="text-xs text-[#687A80]">Check our frequently asked dental questions.</p>
                </div>
              </div>
              <Link
                to="/dental/faq"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-xs font-semibold text-[#0D9488] hover:bg-[#0D9488] hover:text-white transition-all shadow-sm shrink-0"
              >
                View FAQs
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E3ECE9] shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12 px-4">
                  <div className="w-16 h-16 rounded-full bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <span className="inline-block px-3 py-1 rounded-full bg-[#E6F6F2] text-[#0D9488] text-xs font-semibold uppercase tracking-wider mb-2">
                    DEMO SIMULATION COMPLETED
                  </span>

                  <h3 className="text-2xl font-bold text-[#152B32] mb-3">
                    Thank You, {formData.name}!
                  </h3>
                  
                  <p className="text-sm text-[#687A80] max-w-md mx-auto mb-6 leading-relaxed">
                    Demo message validated. This frontend preview does not send emails to a server or store user inquiries. In a live deployment, this form dispatches directly to the clinic front desk.
                  </p>

                  <div className="p-4 bg-[#FAFCFB] rounded-2xl border border-[#E3ECE9] max-w-sm mx-auto text-left text-xs text-[#687A80] mb-8 space-y-1.5">
                    <div><strong className="text-[#152B32]">Subject:</strong> {formData.subject}</div>
                    <div><strong className="text-[#152B32]">Email:</strong> {formData.email}</div>
                    <div><strong className="text-[#152B32]">Message Length:</strong> {formData.message.length} characters</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0D9488] text-white text-sm font-semibold hover:bg-[#115E59] transition-colors"
                    >
                      Send Another Demo Message
                    </button>
                    <Link
                      to="/dental/appointment"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E6F6F2] text-[#0D9488] text-sm font-semibold hover:bg-[#d6f0ea] transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Book Consultation
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#152B32]">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-[#687A80] mt-1">
                      Fill out the form below and our staff will respond to your clinical or administrative question promptly.
                    </p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#152B32] mb-1.5">
                      Full Name <span className="text-[#0D9488]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAFCFB] border text-sm text-[#152B32] placeholder-[#687A80]/60 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E3ECE9]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Email & Subject grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#152B32] mb-1.5">
                        Email Address <span className="text-[#0D9488]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="eleanor@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAFCFB] border text-sm text-[#152B32] placeholder-[#687A80]/60 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E3ECE9]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-[#152B32] mb-1.5">
                        Inquiry Subject <span className="text-[#0D9488]">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Clear Aligner Pricing"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAFCFB] border text-sm text-[#152B32] placeholder-[#687A80]/60 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all ${
                          errors.subject ? 'border-red-400 bg-red-50/20' : 'border-[#E3ECE9]'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#152B32] mb-1.5">
                      Your Message <span className="text-[#0D9488]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share any specific dental concerns, questions regarding sedation options, or preferred contact times..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAFCFB] border text-sm text-[#152B32] placeholder-[#687A80]/60 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all resize-none ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#E3ECE9]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submission note & submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0D9488] text-white text-sm font-semibold hover:bg-[#115E59] active:scale-[0.99] transition-all shadow-md shadow-[#0D9488]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Validating Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-2 border-t border-[#E3ECE9] flex items-center gap-2 text-xs text-[#687A80]">
                    <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>
                      Demo mode: Your inputs are validated client-side only. No server transmission occurs.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
