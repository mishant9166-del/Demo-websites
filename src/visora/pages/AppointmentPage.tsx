import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Eye,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { eyeServices } from '../data/services';
import type { AppointmentFormData } from '../types/visora';

export function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  // Calculate tomorrow's date for min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    appointmentType: preselectedService || eyeServices[0]?.slug || '',
    preferredDate: minDateString,
    preferredTime: 'Morning (09:30 – 12:30)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<AppointmentFormData | null>(null);
  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    if (preselectedService && eyeServices.some((s) => s.slug === preselectedService)) {
      setFormData((prev) => ({ ...prev, appointmentType: preselectedService }));
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
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for appointment confirmation';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }

    if (!formData.appointmentType) {
      errs.appointmentType = 'Please select an appointment type';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date';
    } else if (formData.preferredDate < minDateString) {
      errs.preferredDate = 'Consultation dates cannot be scheduled in the past';
    }

    if (!formData.preferredTime) {
      errs.preferredTime = 'Please select a preferred time slot';
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
      setConfirmationCode(`VIS-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmittedData({ ...formData });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        appointmentType: eyeServices[0]?.slug || '',
        preferredDate: minDateString,
        preferredTime: 'Morning (09:30 – 12:30)',
        message: '',
      });
      setErrors({});
    }, 800);
  };

  const selectedServiceObj = eyeServices.find(
    (s) => s.slug === (submittedData?.appointmentType || formData.appointmentType)
  );

  return (
    <div className="py-12 sm:py-16 bg-[#F7F5EF] min-h-[85vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionHeading
            align="center"
            badge="ATELIER RESERVATION"
            title="Book an Eye Test or"
            italicWord="Private Styling Session."
            subtitle="Choose a convenient time for your comprehensive eye examination, contact lens fitting, or private frame selection in our quiet Portland vision suites."
          />
        </div>

        {/* Honest Demo Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-white border border-[#E4E4DE] flex items-start gap-3 shadow-xs">
          <ShieldCheck className="w-5 h-5 text-[#5C9995] shrink-0 mt-0.5" />
          <p className="text-xs text-[#687581] leading-relaxed">
            <span className="font-semibold text-[#15263B]">Demonstration Notice:</span> This appointment form validates and simulates reservations locally on your browser. No medical record is stored and no actual appointment has been sent to a real clinic.
          </p>
        </div>

        {!submittedData ? (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E4E4DE] shadow-sm space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-bold uppercase tracking-wider text-[#15263B] mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#687581] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Julian Avery"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#F7F5EF] border ${
                      errors.fullName ? 'border-red-400' : 'border-[#E4E4DE]'
                    } focus:outline-hidden focus:border-[#5C9995] text-[#15263B] transition-colors`}
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
                  className="block text-xs font-bold uppercase tracking-wider text-[#15263B] mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#687581] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. julian.avery@example.com"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#F7F5EF] border ${
                      errors.email ? 'border-red-400' : 'border-[#E4E4DE]'
                    } focus:outline-hidden focus:border-[#5C9995] text-[#15263B] transition-colors`}
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
                  className="block text-xs font-bold uppercase tracking-wider text-[#15263B] mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#687581] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="e.g. +1 (503) 555-0194"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#F7F5EF] border ${
                      errors.phone ? 'border-red-400' : 'border-[#E4E4DE]'
                    } focus:outline-hidden focus:border-[#5C9995] text-[#15263B] transition-colors`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Appointment Type */}
              <div>
                <label
                  htmlFor="appointmentType"
                  className="block text-xs font-bold uppercase tracking-wider text-[#15263B] mb-2"
                >
                  Appointment Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Eye className="w-4 h-4 text-[#687581] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    id="appointmentType"
                    value={formData.appointmentType}
                    onChange={(e) =>
                      setFormData({ ...formData, appointmentType: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#F7F5EF] border border-[#E4E4DE] focus:outline-hidden focus:border-[#5C9995] text-[#15263B]"
                  >
                    {eyeServices.map((srv) => (
                      <option key={srv.slug} value={srv.slug}>
                        {srv.title} ({srv.durationMinutes})
                      </option>
                    ))}
                    <option value="private-eyewear-styling">
                      Private Eyewear Styling &amp; Custom Fitting (45 mins)
                    </option>
                  </select>
                </div>
                {errors.appointmentType && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.appointmentType}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-xs font-bold uppercase tracking-wider text-[#15263B] mb-2"
                >
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#687581] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="preferredDate"
                    type="date"
                    min={minDateString}
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredDate: e.target.value })
                    }
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#F7F5EF] border ${
                      errors.preferredDate ? 'border-red-400' : 'border-[#E4E4DE]'
                    } focus:outline-hidden focus:border-[#5C9995] text-[#15263B] transition-colors`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.preferredDate}
                  </p>
                )}
              </div>

              {/* Preferred Time */}
              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-xs font-bold uppercase tracking-wider text-[#15263B] mb-2"
                >
                  Time Slot <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-[#687581] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredTime: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#F7F5EF] border border-[#E4E4DE] focus:outline-hidden focus:border-[#5C9995] text-[#15263B]"
                  >
                    <option value="Morning (09:30 – 12:30)">Morning (09:30 – 12:30)</option>
                    <option value="Early Afternoon (12:30 – 15:00)">Early Afternoon (12:30 – 15:00)</option>
                    <option value="Late Afternoon (15:00 – 17:30)">Late Afternoon (15:00 – 17:30)</option>
                    <option value="Evening (17:30 – 18:30)">Evening (17:30 – 18:30)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Optional message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold uppercase tracking-wider text-[#15263B] mb-2"
              >
                Visual Goals or Symptoms (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-[#687581] absolute left-3.5 top-3.5" />
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="e.g. Updating prescription, evaluating digital screen eye strain, looking for lightweight titanium frames..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm bg-[#F7F5EF] border border-[#E4E4DE] focus:outline-hidden focus:border-[#5C9995] text-[#15263B]"
                />
              </div>
              <p className="text-[11px] text-[#687581] mt-1">
                Please do not submit confidential medical diagnoses or health card records online.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#15263B] text-white hover:bg-[#5C9995] transition-all shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing Demo Request...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-[#5C9995]" />
                    <span>Request Vision Consultation</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Honest Confirmation State */
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#5C9995] shadow-md text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center mx-auto mb-6 border border-[#E4E4DE]">
              <CheckCircle2 className="w-8 h-8 text-[#5C9995]" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F7F5EF] text-[#5C9995] mb-3 border border-[#E4E4DE]">
              Demo Receipt #{confirmationCode}
            </span>

            <h3 className="font-display text-2xl sm:text-3xl text-[#15263B]">
              Appointment Request Confirmed Locally
            </h3>

            {/* Explicit required prompt statement */}
            <div className="my-6 p-4 rounded-2xl bg-[#F7F5EF] border border-[#E4E4DE] text-xs text-[#15263B] leading-relaxed">
              <strong>Demo Notice:</strong> Demo request received in this browser. No appointment has been sent to a real clinic.
            </div>

            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E4E4DE] text-left text-xs space-y-2.5 mb-8">
              <div className="flex justify-between">
                <span className="text-[#687581]">Patient Name:</span>
                <span className="font-semibold text-[#15263B]">{submittedData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#687581]">Consultation:</span>
                <span className="font-semibold text-[#5C9995]">
                  {selectedServiceObj?.title || 'Private Eyewear Styling'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#687581]">Scheduled Date:</span>
                <span className="font-semibold text-[#15263B]">{submittedData.preferredDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#687581]">Time Slot:</span>
                <span className="font-semibold text-[#15263B]">{submittedData.preferredTime}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setSubmittedData(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold bg-[#F7F5EF] text-[#15263B] hover:text-[#5C9995] border border-[#E4E4DE] transition-colors"
              >
                Submit Another Request
              </button>
              <Link
                to="/visora"
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors"
              >
                Return to Studio Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentPage;
