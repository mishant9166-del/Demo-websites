import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Activity,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Info,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { services } from '../data/services';
import type { AppointmentFormData } from '../types/rehabora';

export function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  // Get tomorrow's date for date picker min limit
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceSlug: preselectedService || services[0]?.slug || '',
    preferredDate: minDateString,
    preferredTime: 'Morning (08:00 - 12:00)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<AppointmentFormData | null>(null);
  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    if (preselectedService && services.some((s) => s.slug === preselectedService)) {
      setFormData((prev) => ({ ...prev, serviceSlug: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.serviceSlug) {
      errs.serviceSlug = 'Please select a preferred service';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please choose a preferred consultation date';
    } else if (formData.preferredDate < minDateString) {
      errs.preferredDate = 'Appointments cannot be requested for past dates';
    }

    if (!formData.preferredTime) {
      errs.preferredTime = 'Please pick a time preference';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate local processing
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmationCode(`REHAB-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmittedData({ ...formData });

      // Clear form inputs
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceSlug: services[0]?.slug || '',
        preferredDate: minDateString,
        preferredTime: 'Morning (08:00 - 12:00)',
        message: '',
      });
      setErrors({});
    }, 800);
  };

  const selectedServiceObj = services.find((s) => s.slug === (submittedData?.serviceSlug || formData.serviceSlug));

  return (
    <div className="py-12 sm:py-16 bg-[#FAFBF8] min-h-[85vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionHeading
            align="center"
            badge="CONSULTATION REQUEST"
            title="Let's Take the Next Step Together."
            subtitle="Tell us how you would like to connect with our rehabilitation team. We will review your request and schedule your initial movement evaluation."
          />
        </div>

        {/* Demo Notice Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-[#E8F2EC] border border-[#D4E5D9] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#285A49] shrink-0 mt-0.5" />
          <p className="text-xs text-[#285A49] leading-relaxed">
            <span className="font-bold">Honest Demo Notice:</span> This is a frontend-only portfolio demonstration. Submissions are processed entirely in your browser. No medical record is stored and no actual appointment will be dispatched.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!submittedData ? (
            /* Form view */
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E8E2] shadow-sm space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-[#242C28] mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#727C75] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Jordan Cooper"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#FAFBF8] border ${
                        errors.fullName ? 'border-red-400' : 'border-[#E1E8E2]'
                      } focus:outline-hidden focus:border-[#285A49] transition-colors`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#242C28] mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#727C75] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. jordan.cooper@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#FAFBF8] border ${
                        errors.email ? 'border-red-400' : 'border-[#E1E8E2]'
                      } focus:outline-hidden focus:border-[#285A49] transition-colors`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold uppercase tracking-wider text-[#242C28] mb-2"
                  >
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#727C75] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. +1 (555) 019-2834"
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#FAFBF8] border border-[#E1E8E2] focus:outline-hidden focus:border-[#285A49] transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="serviceSlug"
                    className="block text-xs font-bold uppercase tracking-wider text-[#242C28] mb-2"
                  >
                    Preferred Service <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Activity className="w-4 h-4 text-[#727C75] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="serviceSlug"
                      value={formData.serviceSlug}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceSlug: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#FAFBF8] border border-[#E1E8E2] focus:outline-hidden focus:border-[#285A49] transition-colors text-[#242C28]"
                    >
                      {services.map((srv) => (
                        <option key={srv.slug} value={srv.slug}>
                          {srv.title} ({srv.category})
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.serviceSlug && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.serviceSlug}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-xs font-bold uppercase tracking-wider text-[#242C28] mb-2"
                  >
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#727C75] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="preferredDate"
                      type="date"
                      min={minDateString}
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate: e.target.value })
                      }
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#FAFBF8] border ${
                        errors.preferredDate ? 'border-red-400' : 'border-[#E1E8E2]'
                      } focus:outline-hidden focus:border-[#285A49] transition-colors`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                {/* Preferred Time Window */}
                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-xs font-bold uppercase tracking-wider text-[#242C28] mb-2"
                  >
                    Time Preference <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#727C75] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredTime: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#FAFBF8] border border-[#E1E8E2] focus:outline-hidden focus:border-[#285A49] transition-colors text-[#242C28]"
                    >
                      <option value="Morning (08:00 - 12:00)">Morning (08:00 - 12:00)</option>
                      <option value="Early Afternoon (12:00 - 15:00)">Early Afternoon (12:00 - 15:00)</option>
                      <option value="Late Afternoon (15:00 - 18:00)">Late Afternoon (15:00 - 18:00)</option>
                      <option value="First Available Slot">First Available Slot</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message / Symptoms Notes */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-[#242C28] mb-2"
                >
                  General Goal or Notes (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#727C75] absolute left-3.5 top-3.5" />
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly describe your movement goal or reasons for seeking assessment (e.g. running knee discomfort, post-operative shoulder recovery)..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#FAFBF8] border border-[#E1E8E2] focus:outline-hidden focus:border-[#285A49] transition-colors text-[#242C28]"
                  />
                </div>
                <p className="text-[11px] text-[#727C75] mt-1">
                  Please do not include sensitive medical records or confidential health data.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full text-xs sm:text-sm font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Validating &amp; Recording Demo Request...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#D8A66A]" />
                      Submit Consultation Request
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            /* Success confirmation view */
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-[#72A88A] shadow-md text-center max-w-2xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-[#E8F2EC] text-[#285A49] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#285A49]" />
              </div>

              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F2EC] text-[#285A49] mb-3">
                Confirmation #{confirmationCode}
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#242C28]">
                Demo Request Confirmed Locally
              </h3>

              {/* Explicit required prompt quote */}
              <div className="my-6 p-4 rounded-2xl bg-[#FAFBF8] border border-[#E1E8E2] text-xs text-[#242C28] leading-relaxed">
                <strong>Important Notice:</strong> Your demo request has been completed locally. No appointment has been booked or sent to a real clinic.
              </div>

              <div className="bg-[#FAFBF8] p-5 rounded-2xl border border-[#E1E8E2] text-left text-xs space-y-2 mb-8">
                <div className="flex justify-between">
                  <span className="text-[#727C75]">Patient:</span>
                  <span className="font-bold text-[#242C28]">{submittedData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#727C75]">Service:</span>
                  <span className="font-bold text-[#285A49]">{selectedServiceObj?.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#727C75]">Preferred Date:</span>
                  <span className="font-bold text-[#242C28]">{submittedData.preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#727C75]">Time Window:</span>
                  <span className="font-bold text-[#242C28]">{submittedData.preferredTime}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold bg-[#FAFBF8] text-[#242C28] hover:text-[#285A49] border border-[#E1E8E2] transition-colors"
                >
                  Submit Another Demo Request
                </button>
                <Link
                  to="/rehabora"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors"
                >
                  Return to Homepage
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AppointmentPage;
