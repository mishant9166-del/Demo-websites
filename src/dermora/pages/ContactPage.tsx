import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { siteConfig } from '../config/site';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your name.';
    if (!email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!subject.trim()) errs.subject = 'Please enter a message subject.';
    if (!message.trim()) errs.message = 'Please include a message for our team.';

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
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 700);
  };

  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="We'd Be Happy to"
          highlight="Hear From You."
          subtitle="Have questions about our consultation process or clinic facilities? Reach out using the form below or contact our reception desk."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Clinic Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F0E9DF] border border-[#E4DED4] rounded-3xl p-6 sm:p-8">
              <h3 className="font-serif text-2xl text-[#292A27] font-normal mb-6">
                Clinic Location & Hours
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white text-[#38473A] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#77766F] block">
                      Address
                    </span>
                    <p className="text-xs text-[#292A27] font-medium mt-0.5">
                      {siteConfig.contact.address.street}
                    </p>
                    <p className="text-xs text-[#77766F]">
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode}
                    </p>
                    <span className="inline-block mt-1 text-[10px] text-[#B77962] font-medium">
                      (Fictional location for demonstration)
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white text-[#38473A] flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#77766F] block">
                      Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-xs text-[#292A27] font-medium mt-0.5 block hover:text-[#B77962]"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <span className="text-[11px] text-[#77766F]">General inquiries & reception</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white text-[#38473A] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#77766F] block">
                      Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs text-[#292A27] font-medium mt-0.5 block hover:text-[#B77962]"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <span className="text-[11px] text-[#77766F]">Consultation questions</span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-[#E4DED4]">
                  <div className="w-10 h-10 rounded-full bg-white text-[#38473A] flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div className="w-full">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#77766F] block mb-1">
                      Consultation Hours
                    </span>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between text-[#292A27]">
                        <span>Monday – Friday:</span>
                        <span className="font-medium">{siteConfig.contact.hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between text-[#292A27]">
                        <span>Saturday:</span>
                        <span className="font-medium">{siteConfig.contact.hours.saturday}</span>
                      </div>
                      <div className="flex justify-between text-[#77766F]">
                        <span>Sunday:</span>
                        <span>{siteConfig.contact.hours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-white border border-[#E4DED4] rounded-2xl p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#292A27] mb-3">
                Quick Navigation
              </h4>
              <div className="space-y-2">
                <Link
                  to="/dermora/treatments"
                  className="flex items-center justify-between text-xs text-[#77766F] hover:text-[#38473A] py-1"
                >
                  <span>Explore all treatments</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/dermora/specialists"
                  className="flex items-center justify-between text-xs text-[#77766F] hover:text-[#38473A] py-1"
                >
                  <span>Meet our specialists</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/dermora/faq"
                  className="flex items-center justify-between text-xs text-[#77766F] hover:text-[#38473A] py-1"
                >
                  <span>Frequently asked questions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E4DED4] p-6 sm:p-10 shadow-sm">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-2xl text-[#292A27] font-normal mb-2">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-[#77766F] mb-6 font-light">
                    Have a non-urgent question regarding treatments, appointment logistics, or clinic protocols? Drop us a note.
                  </p>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292A27] mb-2">
                      Your Name <span className="text-[#B77962]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Taylor Morgan"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] border transition focus:outline-none ${
                        errors.name ? 'border-[#B77962]' : 'border-[#E4DED4] focus:border-[#38473A]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-[#B77962] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292A27] mb-2">
                      Email Address <span className="text-[#B77962]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="taylor@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] border transition focus:outline-none ${
                        errors.email ? 'border-[#B77962]' : 'border-[#E4DED4] focus:border-[#38473A]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#B77962] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292A27] mb-2">
                      Subject <span className="text-[#B77962]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Inquiry regarding sensitive skin consultation"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] border transition focus:outline-none ${
                        errors.subject ? 'border-[#B77962]' : 'border-[#E4DED4] focus:border-[#38473A]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-[#B77962] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292A27] mb-2">
                      Message <span className="text-[#B77962]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Your inquiry details..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] border transition focus:outline-none resize-none ${
                        errors.message ? 'border-[#B77962]' : 'border-[#E4DED4] focus:border-[#38473A]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-[#B77962] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-[#77766F] flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-[#9BAA96]" />
                      Demo mode: no real transmission
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3 bg-[#38473A] text-white text-xs font-semibold rounded-full hover:bg-[#292A27] transition shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Validating...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#9BAA96]/20 text-[#38473A] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#292A27] font-normal mb-2">
                    Inquiry Preview Completed
                  </h3>
                  <p className="text-xs text-[#77766F] max-w-md mx-auto leading-relaxed mb-6 font-light">
                    Demo validation successful. This is a frontend demonstration and does not deliver messages to a live inbox.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-[#FAF7F2] border border-[#E4DED4] text-[#292A27] text-xs font-semibold rounded-full hover:bg-[#F0E9DF] transition"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
