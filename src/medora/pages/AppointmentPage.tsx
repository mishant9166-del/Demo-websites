import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  User,
  Mail,
  Phone,
  Building2,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import { departments } from '../data/departments';
import { doctors } from '../data/doctors';
import { SectionHeading } from '../components/common/SectionHeading';
import type { AppointmentFormData } from '../types/medora';

export function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const initialDoctorSlug = searchParams.get('doctor') || '';
  const initialDeptSlug = searchParams.get('dept') || '';

  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    email: '',
    phone: '',
    departmentSlug: initialDeptSlug,
    doctorSlug: initialDoctorSlug,
    preferredDate: '',
    preferredTime: '',
    reason: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState<AppointmentFormData | null>(null);
  const [referenceCode, setReferenceCode] = useState('');

  // If a doctor query was passed, auto-select its department
  useEffect(() => {
    if (initialDoctorSlug) {
      const doc = doctors.find((d) => d.slug === initialDoctorSlug);
      if (doc) {
        setFormData((prev) => ({
          ...prev,
          doctorSlug: doc.slug,
          departmentSlug: doc.departmentSlug,
        }));
      }
    } else if (initialDeptSlug) {
      setFormData((prev) => ({
        ...prev,
        departmentSlug: initialDeptSlug,
      }));
    }
  }, [initialDoctorSlug, initialDeptSlug]);

  // Doctors filtered by selected department
  const availableDoctors = formData.departmentSlug
    ? doctors.filter(
        (doc) =>
          doc.departmentSlug === formData.departmentSlug ||
          departments.find((d) => d.slug === formData.departmentSlug)?.doctorSlugs.includes(doc.slug)
      )
    : doctors;

  // Minimum date allowed: tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  // Validation function
  const validateForm = () => {
    const newErrors: Partial<Record<keyof AppointmentFormData, string>> = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient full name is required';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (min 8 digits)';
    }

    if (!formData.departmentSlug) {
      newErrors.departmentSlug = 'Please select a medical department';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please choose a preferred appointment date';
    } else if (formData.preferredDate < minDateString) {
      newErrors.preferredDate = 'Appointment date cannot be in the past or today';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred consultation time window';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to top of form smoothly on error
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    // Generate demo reference code
    const randomCode = `MED-${Math.floor(10000 + Math.random() * 90000)}`;
    setReferenceCode(randomCode);
    setSubmittedSummary({ ...formData });
    setIsSubmitted(true);

    // Reset sensitive form state immediately per privacy requirements
    setFormData({
      patientName: '',
      email: '',
      phone: '',
      departmentSlug: '',
      doctorSlug: '',
      preferredDate: '',
      preferredTime: '',
      reason: '',
    });
    setErrors({});
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedSummary(null);
  };

  const selectedDepartmentName =
    departments.find((d) => d.slug === submittedSummary?.departmentSlug)?.name || 'Medical Department';
  const selectedDoctorName =
    doctors.find((doc) => doc.slug === submittedSummary?.doctorSlug)?.name || 'Next Available Specialist';

  return (
    <div className="py-12 sm:py-20 bg-[#F8FBFD] text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          eyebrow="OUTPATIENT CONSULTATION REQUEST"
          title="Your Health Matters."
          highlight="Book Your Appointment."
          subtitle="Select your preferred department, specialist, and date. Our outpatient triage team will assist you with consultation scheduling."
          align="center"
        />

        {/* Form or Success State */}
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="appointment-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-[#E1EAF0] shadow-sm p-6 sm:p-10 space-y-8"
              noValidate
            >
              {/* Patient Personal Details */}
              <div>
                <h3 className="text-base font-bold text-[#102B46] mb-4 flex items-center gap-2 border-b border-[#E1EAF0] pb-3">
                  <User className="w-4 h-4 text-[#1769AA]" />
                  Patient Identification
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label htmlFor="patientName" className="block text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
                      Patient Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="patientName"
                        type="text"
                        value={formData.patientName}
                        onChange={(e) => {
                          setFormData({ ...formData, patientName: e.target.value });
                          if (errors.patientName) setErrors({ ...errors, patientName: '' });
                        }}
                        placeholder="e.g. Johnathan Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#183047] placeholder-[#6B7E8E] focus:outline-hidden transition-colors ${
                          errors.patientName
                            ? 'border-red-500 bg-red-50/20'
                            : 'border-[#E1EAF0] bg-[#F8FBFD] focus:border-[#1769AA]'
                        }`}
                      />
                    </div>
                    {errors.patientName && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.patientName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#6B7E8E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="john@example.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#183047] placeholder-[#6B7E8E] focus:outline-hidden transition-colors ${
                          errors.email
                            ? 'border-red-500 bg-red-50/20'
                            : 'border-[#E1EAF0] bg-[#F8FBFD] focus:border-[#1769AA]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#6B7E8E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#183047] placeholder-[#6B7E8E] focus:outline-hidden transition-colors ${
                          errors.phone
                            ? 'border-red-500 bg-red-50/20'
                            : 'border-[#E1EAF0] bg-[#F8FBFD] focus:border-[#1769AA]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Clinical Appointment Details */}
              <div>
                <h3 className="text-base font-bold text-[#102B46] mb-4 flex items-center gap-2 border-b border-[#E1EAF0] pb-3">
                  <Building2 className="w-4 h-4 text-[#1769AA]" />
                  Department & Preferred Specialist
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Department Dropdown */}
                  <div>
                    <label htmlFor="departmentSelect" className="block text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
                      Department <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="departmentSelect"
                      value={formData.departmentSlug}
                      onChange={(e) => {
                        const newDept = e.target.value;
                        setFormData({
                          ...formData,
                          departmentSlug: newDept,
                          doctorSlug: '', // Reset doctor if department changed
                        });
                        if (errors.departmentSlug) setErrors({ ...errors, departmentSlug: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#183047] bg-[#F8FBFD] focus:outline-hidden transition-colors ${
                        errors.departmentSlug
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E1EAF0] focus:border-[#1769AA]'
                      }`}
                    >
                      <option value="">— Choose Medical Department —</option>
                      {departments.map((dept) => (
                        <option key={dept.slug} value={dept.slug}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                    {errors.departmentSlug && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.departmentSlug}</span>
                      </p>
                    )}
                  </div>

                  {/* Doctor Dropdown (Filtered by Department) */}
                  <div>
                    <label htmlFor="doctorSelect" className="block text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
                      Preferred Specialist <span className="text-[#6B7E8E] text-[10px] lowercase">(optional)</span>
                    </label>
                    <select
                      id="doctorSelect"
                      value={formData.doctorSlug}
                      onChange={(e) => setFormData({ ...formData, doctorSlug: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E1EAF0] text-sm text-[#183047] bg-[#F8FBFD] focus:outline-hidden focus:border-[#1769AA] transition-colors"
                    >
                      <option value="">— Any Available Specialist —</option>
                      {availableDoctors.map((doc) => (
                        <option key={doc.slug} value={doc.slug}>
                          {doc.name} ({doc.specialty})
                        </option>
                      ))}
                    </select>
                    <span className="text-[11px] text-[#6B7E8E] mt-1 block">
                      {formData.departmentSlug
                        ? `Filtered for ${availableDoctors.length} doctors in this department`
                        : 'Select a department to view specialists'}
                    </span>
                  </div>

                  {/* Date Input */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="preferredDate"
                        type="date"
                        min={minDateString}
                        value={formData.preferredDate}
                        onChange={(e) => {
                          setFormData({ ...formData, preferredDate: e.target.value });
                          if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#183047] bg-[#F8FBFD] focus:outline-hidden transition-colors ${
                          errors.preferredDate
                            ? 'border-red-500 bg-red-50/20'
                            : 'border-[#E1EAF0] focus:border-[#1769AA]'
                        }`}
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Time Window */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
                      Time Window <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredTime: e.target.value });
                        if (errors.preferredTime) setErrors({ ...errors, preferredTime: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#183047] bg-[#F8FBFD] focus:outline-hidden transition-colors ${
                        errors.preferredTime
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E1EAF0] focus:border-[#1769AA]'
                      }`}
                    >
                      <option value="">— Select Consultation Slot —</option>
                      <option value="Morning (09:00 AM – 12:00 PM)">Morning Slot (09:00 AM – 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM – 04:00 PM)">Afternoon Slot (12:00 PM – 04:00 PM)</option>
                      <option value="Evening (04:00 PM – 07:30 PM)">Evening Slot (04:00 PM – 07:30 PM)</option>
                    </select>
                    {errors.preferredTime && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.preferredTime}</span>
                      </p>
                    )}
                  </div>

                  {/* Reason for Visit (Optional) */}
                  <div className="sm:col-span-2">
                    <label htmlFor="reason" className="block text-xs font-bold text-[#102B46] uppercase tracking-wider mb-2">
                      Primary Symptoms or Reason for Visit <span className="text-[#6B7E8E] text-[10px] lowercase">(optional)</span>
                    </label>
                    <textarea
                      id="reason"
                      rows={3}
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      placeholder="Briefly describe your symptoms, relevant medical history, or specific questions..."
                      className="w-full px-4 py-3 rounded-xl border border-[#E1EAF0] bg-[#F8FBFD] text-sm text-[#183047] placeholder-[#6B7E8E] focus:outline-hidden focus:border-[#1769AA] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-[#E1EAF0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#6B7E8E]">
                  Fields marked with <span className="text-red-500 font-bold">*</span> are required.
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1769AA] hover:bg-[#125388] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Submit Appointment Request</span>
                </button>
              </div>
            </motion.form>
          ) : (
            /* Success State Animation */
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-[#E1EAF0] shadow-xl p-8 sm:p-12 text-center space-y-6"
            >
              {/* Checkmark Icon Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 15, delay: 0.1 }}
                className="w-20 h-20 rounded-full bg-[#18A9A0]/15 text-[#18A9A0] flex items-center justify-center mx-auto border-2 border-[#18A9A0]/30 shadow-inner"
              >
                <CheckCircle2 className="w-10 h-10" />
              </motion.div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#18A9A0] bg-[#EAF5FC] px-3.5 py-1 rounded-full border border-[#1769AA]/15 inline-block mb-3">
                  Preview Request Successful
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102B46]">
                  Demo Request Completed
                </h3>
                <p className="text-sm sm:text-base text-[#6B7E8E] max-w-lg mx-auto mt-2 leading-relaxed">
                  Demo request completed. This preview does not send appointment requests to a real hospital.
                </p>
              </div>

              {/* Demo Summary Box */}
              <div className="bg-[#F8FBFD] border border-[#E1EAF0] rounded-2xl p-6 max-w-lg mx-auto text-left space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-[#E1EAF0]">
                  <span className="text-[#6B7E8E]">Demo Reference Code:</span>
                  <span className="font-mono font-bold text-[#1769AA]">{referenceCode}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7E8E]">Department:</span>
                  <span className="font-bold text-[#102B46]">{selectedDepartmentName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7E8E]">Specialist:</span>
                  <span className="font-bold text-[#102B46]">{selectedDoctorName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7E8E]">Preferred Date:</span>
                  <span className="font-bold text-[#102B46]">{submittedSummary?.preferredDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7E8E]">Time Slot:</span>
                  <span className="font-bold text-[#102B46]">{submittedSummary?.preferredTime}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#EAF5FC] hover:bg-[#1769AA] text-[#1769AA] hover:text-white text-xs font-bold border border-[#1769AA]/20 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Book Another Demo Request</span>
                </button>

                <Link
                  to="/medora"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#102B46] hover:bg-[#1769AA] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <span>Return to Hospital Home</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
