import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { siteConfig } from '../config/site';
import type { ContactFormData } from '../types/visora';

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide your inquiry message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Inquiry must be at least 10 characters long';
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
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }, 700);
  };

  return (
    <div className="py-12 sm:py-16 bg-[#F7F5EF] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="CONNECT WITH OUR CONCIERGE"
            title="We're Here to Guide Your"
            italicWord="Vision Experience."
            subtitle="Have questions about specialty lens options, corporate screen ergonomics, or scheduling private eyewear styling? Reach out to our atelier concierge."
          />
        </div>

        {/* Honest Demo Notice Banner */}
        <div className="mb-10 p-4 rounded-2xl bg-white border border-[#E4E4DE] flex items-start gap-3 shadow-xs">
          <ShieldCheck className="w-5 h-5 text-[#5C9995] shrink-0 mt-0.5" />
          <p className="text-xs text-[#687581] leading-relaxed">
            <span className="font-semibold text-[#15263B]">Demonstration Notice:</span> Contact details, addresses, and phone numbers shown below are placeholder defaults. Form submissions execute locally on your browser and will not dispatch email to a real clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards & Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#E4E4DE] shadow-xs space-y-6">
              <h3 className="font-display text-xl text-[#15263B]">
                Studio Location &amp; Concierge
              </h3>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center shrink-0 border border-[#E4E4DE]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#15263B]">Atelier Address</h4>
                  <p className="text-xs text-[#687581] mt-1 leading-relaxed">
                    {siteConfig.contact.address.line1}
                    <br />
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E4E4DE]">
                <div className="w-9 h-9 rounded-xl bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center shrink-0 border border-[#E4E4DE]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#15263B]">Telephone Desk</h4>
                  <p className="text-xs text-[#687581] mt-1">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E4E4DE]">
                <div className="w-9 h-9 rounded-xl bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center shrink-0 border border-[#E4E4DE]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#15263B]">Concierge Inquiries</h4>
                  <p className="text-xs text-[#687581] mt-1">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#E4E4DE] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center shrink-0 border border-[#E4E4DE]">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-display text-xl text-[#15263B]">
                  Studio Opening Hours
                </h3>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#E4E4DE]/60">
                  <span className="text-[#687581]">Monday – Friday</span>
                  <span className="font-semibold text-[#15263B]">
                    {siteConfig.contact.hours.weekdays}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E4E4DE]/60">
                  <span className="text-[#687581]">Saturday</span>
                  <span className="font-semibold text-[#15263B]">
                    {siteConfig.contact.hours.saturday}
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#687581]">Sunday</span>
                  <span className="font-semibold text-[#5C9995]">
                    {siteConfig.contact.hours.sunday}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 rounded-3xl bg-white border border-[#E4E4DE] flex flex-col gap-3">
              <Link
                to="/visora/services"
                className="text-xs font-semibold text-[#15263B] hover:text-[#5C9995] flex items-center justify-between"
              >
                <span>Browse Clinical Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/visora/eyewear"
                className="text-xs font-semibold text-[#15263B] hover:text-[#5C9995] flex items-center justify-between"
              >
                <span>Explore Curated Eyewear</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E4E4DE] shadow-xs">
              <h3 className="font-display text-2xl text-[#15263B] mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs text-[#687581] mb-6">
                Have a question regarding lens types, custom tints, or corporate vision programs? Leave a note below.
              </p>

              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-xs font-bold uppercase tracking-wider text-[#15263B] mb-2"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Maya Sterling"
                      className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#F7F5EF] border ${
                        errors.fullName ? 'border-red-400' : 'border-[#E4E4DE]'
                      } focus:outline-hidden focus:border-[#5C9995] text-[#15263B] transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contactEmail"
                        className="block text-xs font-bold uppercase tracking-wider text-[#15263B] mb-2"
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
                        placeholder="e.g. maya@example.com"
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#F7F5EF] border ${
                          errors.email ? 'border-red-400' : 'border-[#E4E4DE]'
                        } focus:outline-hidden focus:border-[#5C9995] text-[#15263B] transition-colors`}
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
                        htmlFor="contactPhone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#15263B] mb-2"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. +1 (503) 012-3456"
                        className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#F7F5EF] border border-[#E4E4DE] focus:outline-hidden focus:border-[#5C9995] text-[#15263B] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contactSubject"
                      className="block text-xs font-bold uppercase tracking-wider text-[#15263B] mb-2"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contactSubject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Question about polarized sunglass glazing"
                      className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#F7F5EF] border ${
                        errors.subject ? 'border-red-400' : 'border-[#E4E4DE]'
                      } focus:outline-hidden focus:border-[#5C9995] text-[#15263B] transition-colors`}
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
                      className="block text-xs font-bold uppercase tracking-wider text-[#15263B] mb-2"
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
                      placeholder="How may our optical studio assist you?"
                      className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#F7F5EF] border ${
                        errors.message ? 'border-red-400' : 'border-[#E4E4DE]'
                      } focus:outline-hidden focus:border-[#5C9995] text-[#15263B] transition-colors`}
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
                      className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors shadow-xs disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending demo note...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Inquiry Note</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-8 text-center bg-[#FAF7F2] rounded-2xl border border-[#5C9995]/50">
                  <div className="w-12 h-12 rounded-full bg-white text-[#5C9995] flex items-center justify-center mx-auto mb-4 border border-[#E4E4DE]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg text-[#15263B]">
                    Demo Inquiry Processed Locally
                  </h4>
                  <p className="text-xs text-[#687581] mt-2 leading-relaxed max-w-md mx-auto">
                    Thank you for submitting a test message. Since this is an interactive frontend portfolio demo, no real email was transmitted to an actual clinic.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSent(false)}
                    className="mt-6 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors"
                  >
                    Send Another Demo Note
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
