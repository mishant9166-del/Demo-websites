import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Shield,
  ArrowRight,
  CalendarCheck,
} from 'lucide-react';
import { treatments } from '../data/treatments';
import { specialists } from '../data/specialists';
import { SectionHeading } from '../components/common/SectionHeading';

const TIME_SLOTS = [
  'Morning (09:00 - 12:00)',
  'Early Afternoon (12:00 - 15:00)',
  'Late Afternoon (15:00 - 18:00)',
];

export const AppointmentPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedTreatment = searchParams.get('treatment') || '';
  const preselectedSpecialist = searchParams.get('specialist') || '';

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [treatmentSlug, setTreatmentSlug] = useState(preselectedTreatment);
  const [specialistSlug, setSpecialistSlug] = useState(preselectedSpecialist);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState(TIME_SLOTS[0]);
  const [message, setMessage] = useState('');

  // UI state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [demoConfirmationCode, setDemoConfirmationCode] = useState('');

  // Calculate tomorrow's date for min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  useEffect(() => {
    if (preselectedTreatment) {
      setTreatmentSlug(preselectedTreatment);
    }
    if (preselectedSpecialist) {
      setSpecialistSlug(preselectedSpecialist);
    }
  }, [preselectedTreatment, preselectedSpecialist]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address (e.g., name@example.com).';
    }

    if (!preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    } else if (new Date(preferredDate) < new Date(minDateStr)) {
      newErrors.preferredDate = 'Please select a future date.';
    }

    if (!treatmentSlug) {
      newErrors.treatmentSlug = 'Please select a consultation category.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate local validation & processing without external transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setDemoConfirmationCode(`DERM-${Math.floor(10000 + Math.random() * 90000)}`);

      // Clear form inputs immediately to satisfy privacy & security prompt criteria
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setDemoConfirmationCode('');
    setErrors({});
  };

  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading
          eyebrow="CONSULTATION INQUIRY"
          title="Let's Begin With a"
          highlight="Consultation."
          subtitle="Share your preferred appointment details and the type of consultation you would like to discuss with our team."
          align="center"
        />

        <div className="mt-12 bg-white rounded-3xl border border-[#E4DED4] p-6 sm:p-10 md:p-12 shadow-sm">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="appointment-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Section 1: Contact Details */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#77766F] mb-4 pb-2 border-b border-[#E4DED4] flex items-center gap-2">
                    <User className="w-4 h-4 text-[#38473A]" />
                    1. Your Contact Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#292A27] mb-2">
                        Full Name <span className="text-[#B77962]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Jordan Miller"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        className={`w-full px-4 py-3 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] border transition focus:outline-none ${
                          errors.fullName
                            ? 'border-[#B77962] focus:border-[#B77962]'
                            : 'border-[#E4DED4] focus:border-[#38473A]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-[#B77962] flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.fullName}
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
                        placeholder="jordan@example.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-4 py-3 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] border transition focus:outline-none ${
                          errors.email
                            ? 'border-[#B77962] focus:border-[#B77962]'
                            : 'border-[#E4DED4] focus:border-[#38473A]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-[#B77962] flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number (Optional) */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-[#292A27] mb-2">
                        Phone Number <span className="text-xs font-normal text-[#77766F]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 234-5678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] border border-[#E4DED4] focus:border-[#38473A] focus:outline-none transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Consultation Details */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#77766F] mb-4 pb-2 border-b border-[#E4DED4] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#38473A]" />
                    2. Service & Specialist Preferences
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Consultation Category */}
                    <div>
                      <label className="block text-xs font-semibold text-[#292A27] mb-2">
                        Consultation Type <span className="text-[#B77962]">*</span>
                      </label>
                      <select
                        value={treatmentSlug}
                        onChange={(e) => {
                          setTreatmentSlug(e.target.value);
                          if (errors.treatmentSlug) setErrors({ ...errors, treatmentSlug: '' });
                        }}
                        className={`w-full px-4 py-3 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] border transition focus:outline-none ${
                          errors.treatmentSlug
                            ? 'border-[#B77962] focus:border-[#B77962]'
                            : 'border-[#E4DED4] focus:border-[#38473A]'
                        }`}
                      >
                        <option value="">Select a consultation category...</option>
                        {treatments.map((t) => (
                          <option key={t.id} value={t.slug}>
                            {t.title} ({t.category})
                          </option>
                        ))}
                      </select>
                      {errors.treatmentSlug && (
                        <p className="mt-1.5 text-xs text-[#B77962] flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.treatmentSlug}
                        </p>
                      )}
                    </div>

                    {/* Specialist preference (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold text-[#292A27] mb-2">
                        Preferred Specialist <span className="text-xs font-normal text-[#77766F]">(Optional)</span>
                      </label>
                      <select
                        value={specialistSlug}
                        onChange={(e) => setSpecialistSlug(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] border border-[#E4DED4] focus:border-[#38473A] focus:outline-none transition"
                      >
                        <option value="">First Available Specialist</option>
                        {specialists.map((s) => (
                          <option key={s.id} value={s.slug}>
                            {s.name} — {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-semibold text-[#292A27] mb-2">
                        Preferred Date <span className="text-[#B77962]">*</span>
                      </label>
                      <input
                        type="date"
                        min={minDateStr}
                        value={preferredDate}
                        onChange={(e) => {
                          setPreferredDate(e.target.value);
                          if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                        }}
                        className={`w-full px-4 py-3 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] border transition focus:outline-none ${
                          errors.preferredDate
                            ? 'border-[#B77962] focus:border-[#B77962]'
                            : 'border-[#E4DED4] focus:border-[#38473A]'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="mt-1.5 text-xs text-[#B77962] flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    {/* Preferred Time Window */}
                    <div>
                      <label className="block text-xs font-semibold text-[#292A27] mb-2">
                        Preferred Time of Day
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] border border-[#E4DED4] focus:border-[#38473A] focus:outline-none transition"
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Notes / Questions */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#77766F] mb-4 pb-2 border-b border-[#E4DED4] flex items-center gap-2">
                    <User className="w-4 h-4 text-[#38473A]" />
                    3. Additional Notes (Optional)
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-[#292A27] mb-2">
                      Briefly describe what you would like to discuss:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Inquiring about a personalized skin barrier routine or evaluating seasonal sensitivity..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF7F2] rounded-xl text-sm text-[#292A27] border border-[#E4DED4] focus:border-[#38473A] focus:outline-none transition resize-none"
                    />
                    <p className="mt-1.5 text-[11px] text-[#77766F]">
                      Please do not submit sensitive medical records or confidential health data through this demo form.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#77766F]">
                    <Shield className="w-4 h-4 text-[#9BAA96] shrink-0" />
                    <span>Frontend demo mode · No real transmission occurs</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#38473A] text-white text-xs font-semibold rounded-full hover:bg-[#292A27] disabled:opacity-50 transition shadow-sm flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Validating Details...</span>
                      </>
                    ) : (
                      <>
                        <CalendarCheck className="w-4 h-4" />
                        <span>Request Consultation</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success State Card */
              <motion.div
                key="appointment-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-[#9BAA96]/20 text-[#38473A] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <span className="text-xs uppercase tracking-widest font-semibold text-[#B77962] block mb-2">
                  DEMO REQUEST COMPLETED
                </span>

                <h3 className="font-serif text-3xl text-[#292A27] font-normal mb-3">
                  Consultation Request Preview Received
                </h3>

                <p className="text-sm text-[#77766F] max-w-lg mx-auto leading-relaxed mb-6 font-light">
                  Demo request completed. This preview does not send appointment requests to a real clinic. In a production environment, our coordination desk would contact you to confirm timing.
                </p>

                {/* Reference badge */}
                <div className="inline-block bg-[#FAF7F2] border border-[#E4DED4] rounded-2xl px-6 py-3 mb-8">
                  <span className="text-xs text-[#77766F] block">Demo Reference Code</span>
                  <span className="font-mono text-base font-bold text-[#38473A] tracking-wider">
                    {demoConfirmationCode}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#FAF7F2] text-[#292A27] border border-[#E4DED4] text-xs font-semibold rounded-full hover:bg-[#F0E9DF] transition"
                  >
                    Submit Another Request
                  </button>
                  <Link
                    to="/dermora/treatments"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-[#38473A] text-white text-xs font-semibold rounded-full hover:bg-[#292A27] transition"
                  >
                    <span>Browse Treatments</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
