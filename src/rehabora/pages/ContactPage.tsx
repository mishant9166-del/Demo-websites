import { useState } from 'react';
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
  ArrowRight,
  Info,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { siteConfig } from '../config/site';
import type { ContactFormData } from '../types/rehabora';

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter an inquiry subject';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or question';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }, 700);
  };

  return (
    <div className="py-12 sm:py-16 bg-[#FAFBF8] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="CONNECT WITH OUR CLINIC"
            title="We're Here to Help You Get Started."
            subtitle="Have questions regarding our rehabilitation programs, appointment booking, or initial consultation process? Reach out to our team."
          />
        </div>

        {/* Honest Demo Notice Banner */}
        <div className="mb-10 p-4 rounded-2xl bg-[#E8F2EC] border border-[#D4E5D9] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#285A49] shrink-0 mt-0.5" />
          <p className="text-xs text-[#285A49] leading-relaxed">
            <span className="font-bold">Portfolio Demonstration Notice:</span> Contact details, phone numbers, and physical clinic locations shown below are placeholder defaults. Form submissions execute locally on your browser and will not dispatch email to a real clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#E1E8E2] shadow-xs space-y-6">
              <h3 className="font-heading text-lg font-bold text-[#242C28]">
                Clinic Information
              </h3>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#242C28]">Clinic Location</h4>
                  <p className="text-xs text-[#727C75] mt-1 leading-relaxed">
                    {siteConfig.contact.address.street}
                    <br />
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E1E8E2]">
                <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#242C28]">Direct Telephone</h4>
                  <p className="text-xs text-[#727C75] mt-1">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E1E8E2]">
                <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#242C28]">Clinical Inquiries</h4>
                  <p className="text-xs text-[#727C75] mt-1">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#E1E8E2] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#242C28]">
                  Clinic Opening Hours
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#E1E8E2]/60">
                  <span className="text-[#727C75]">Monday – Friday</span>
                  <span className="font-semibold text-[#242C28]">
                    {siteConfig.contact.hours.weekdays}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E1E8E2]/60">
                  <span className="text-[#727C75]">Saturday</span>
                  <span className="font-semibold text-[#242C28]">
                    {siteConfig.contact.hours.saturday}
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#727C75]">Sunday &amp; Public Holidays</span>
                  <span className="font-semibold text-[#72A88A]">
                    {siteConfig.contact.hours.sunday}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 rounded-3xl bg-[#FAFBF8] border border-[#E1E8E2] flex flex-col gap-3">
              <Link
                to="/rehabora/services"
                className="text-xs font-bold text-[#285A49] hover:text-[#193D32] flex items-center justify-between"
              >
                <span>Browse Clinical Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/rehabora/practitioners"
                className="text-xs font-bold text-[#285A49] hover:text-[#193D32] flex items-center justify-between"
              >
                <span>View Practitioner Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E8E2] shadow-xs">
              <h3 className="font-heading text-2xl font-bold text-[#242C28] mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[#727C75] mb-6">
                Have a general question regarding treatment options or clinic accessibility? Complete the form below.
              </p>

              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-[#242C28] mb-2"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#FAFBF8] border ${
                          errors.name ? 'border-red-400' : 'border-[#E1E8E2]'
                        } focus:outline-hidden focus:border-[#285A49] transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contactEmail"
                        className="block text-xs font-bold uppercase tracking-wider text-[#242C28] mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#FAFBF8] border ${
                          errors.email ? 'border-red-400' : 'border-[#E1E8E2]'
                        } focus:outline-hidden focus:border-[#285A49] transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-bold uppercase tracking-wider text-[#242C28] mb-2"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Question about initial assessment preparation"
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#FAFBF8] border ${
                          errors.subject ? 'border-red-400' : 'border-[#E1E8E2]'
                        } focus:outline-hidden focus:border-[#285A49] transition-colors`}
                      />
                      {errors.subject && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contactMessage"
                        className="block text-xs font-bold uppercase tracking-wider text-[#242C28] mb-2"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contactMessage"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="How can our clinical team assist you?"
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#FAFBF8] border ${
                          errors.message ? 'border-red-400' : 'border-[#E1E8E2]'
                        } focus:outline-hidden focus:border-[#285A49] transition-colors`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors shadow-xs disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending locally...
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center bg-[#FAFBF8] rounded-2xl border border-[#72A88A]"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E8F2EC] text-[#285A49] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-[#242C28]">
                      Demo Message Processed
                    </h4>
                    <p className="text-xs text-[#727C75] mt-2 leading-relaxed max-w-md mx-auto">
                      Thank you for submitting a test inquiry. Since this is an interactive frontend demo, no real message was transmitted to a clinic email inbox.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSent(false)}
                      className="mt-6 px-5 py-2.5 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors"
                    >
                      Send Another Demo Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
