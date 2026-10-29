import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  Sparkles,
  AlertCircle,
  ArrowRight,
  Info,
  RotateCcw,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { VETERINARIANS } from '../data/vets';

interface FormState {
  ownerName: string;
  email: string;
  phone: string;
  petName: string;
  petType: 'Dog' | 'Cat' | 'Other';
  preferredVet: string;
  reason: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

interface FormErrors {
  ownerName?: string;
  email?: string;
  phone?: string;
  petName?: string;
  reason?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export const BookVisitPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedVet = searchParams.get('vet') || '';

  // Today's date in YYYY-MM-DD for date-picker min constraint
  const todayDate = new Date().toISOString().split('T')[0];

  const initialFormState: FormState = {
    ownerName: '',
    email: '',
    phone: '',
    petName: '',
    petType: 'Dog',
    preferredVet: preselectedVet,
    reason: 'Routine Wellness Checkup',
    preferredDate: '',
    preferredTime: 'Morning (8:30 AM – 11:30 AM)',
    notes: '',
  };

  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  useEffect(() => {
    if (preselectedVet) {
      setFormData((prev) => ({ ...prev, preferredVet: preselectedVet }));
    }
  }, [preselectedVet]);

  const reasons = [
    'Routine Wellness Checkup',
    'Vaccinations & Booster Shots',
    'Dental Assessment & Cleaning',
    'Puppy / Kitten First Exam',
    'Senior Pet Care & Mobility',
    'Diagnostic Testing / Bloodwork',
    'Nutrition & Weight Guidance',
    'Minor Illness / Skin / Ear Check',
    'Other General Consultation',
  ];

  const timeSlots = [
    'Morning (8:30 AM – 11:30 AM)',
    'Midday (11:30 AM – 2:00 PM)',
    'Afternoon (2:00 PM – 4:30 PM)',
    'Late Afternoon (4:30 PM – 6:00 PM)',
    'Quiet Feline Window (Tuesday 1:30 PM – 3:30 PM)',
  ];

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.ownerName.trim()) {
      errs.ownerName = "Please enter the pet parent's name.";
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number with area code.';
    }

    if (!formData.petName.trim()) {
      errs.petName = "Please enter your companion's name.";
    }

    if (!formData.reason) {
      errs.reason = 'Please select a reason for the visit.';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred appointment date.';
    } else if (formData.preferredDate < todayDate) {
      errs.preferredDate = 'Appointment date cannot be in the past.';
    }

    if (!formData.preferredTime) {
      errs.preferredTime = 'Please select a preferred time slot.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Save demo booking in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('paw_whisker_bookings') || '[]');
      const newBooking = { ...formData, id: Date.now(), timestamp: new Date().toISOString() };
      localStorage.setItem('paw_whisker_bookings', JSON.stringify([newBooking, ...existing]));
    } catch {
      // Fallback
    }

    setSubmittedData(formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <SectionHeading
            badge="Appointment Request"
            badgeVariant="terracotta"
            title="Book a relaxed visit for your companion."
            subtitle="Tell us about your pet, your schedule preferences, and any comfort requests. We ensure every visit is unhurried and low-stress."
          />

          {/* Honest Demo notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0D9CA]/50 text-xs text-[#343D30]/80 border border-[#E8DFD1]">
            <Info className="w-4 h-4 text-[#C76F52] shrink-0" />
            <span>Interactive portfolio form simulation. Requests are stored locally in browser state.</span>
          </div>
        </div>

        {/* Success Confirmation Panel */}
        {isSubmitted && submittedData && (
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#82947A] shadow-lg space-y-8 animate-in fade-in duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#82947A]/20 text-[#343D30] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#82947A]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-fraunces text-2xl font-bold text-[#343D30]">
                  Appointment Request Summary
                </h3>
                <p className="text-sm text-[#343D30]/80">
                  Thank you, <strong>{submittedData.ownerName}</strong>! We have prepared a visit request for <strong>{submittedData.petName}</strong> ({submittedData.petType}).
                </p>
              </div>
            </div>

            {/* Strict Required Demo Disclaimer */}
            <div className="p-4 rounded-2xl bg-[#F0D9CA]/50 border border-[#C76F52]/30 text-xs sm:text-sm text-[#343D30] space-y-1">
              <div className="font-bold text-[#C76F52] flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>Demonstration Notice</span>
              </div>
              <p className="font-medium">
                Demo request saved in this browser. No real appointment has been created or sent to a clinic.
              </p>
            </div>

            {/* Request Summary Receipt */}
            <div className="p-6 rounded-2xl bg-[#FBF5EA] border border-[#E8DFD1] space-y-4">
              <div className="font-fraunces font-bold text-base text-[#343D30] border-b border-[#E8DFD1] pb-2">
                Simulated Booking Details
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-[#82947A] font-medium block">Companion Name:</span>
                  <span className="font-bold text-[#343D30]">{submittedData.petName} ({submittedData.petType})</span>
                </div>
                <div>
                  <span className="text-[#82947A] font-medium block">Reason for Visit:</span>
                  <span className="font-bold text-[#343D30]">{submittedData.reason}</span>
                </div>
                <div>
                  <span className="text-[#82947A] font-medium block">Preferred Date:</span>
                  <span className="font-bold text-[#343D30]">{submittedData.preferredDate}</span>
                </div>
                <div>
                  <span className="text-[#82947A] font-medium block">Time Window:</span>
                  <span className="font-bold text-[#343D30]">{submittedData.preferredTime}</span>
                </div>
                <div>
                  <span className="text-[#82947A] font-medium block">Preferred Doctor:</span>
                  <span className="font-bold text-[#343D30]">{submittedData.preferredVet || 'First Available Compassionate Doctor'}</span>
                </div>
                <div>
                  <span className="text-[#82947A] font-medium block">Contact Info:</span>
                  <span className="font-bold text-[#343D30]">{submittedData.phone} • {submittedData.email}</span>
                </div>
              </div>

              {submittedData.notes && (
                <div className="pt-2 border-t border-[#E8DFD1] text-xs">
                  <span className="text-[#82947A] font-medium block">Handling / Health Notes:</span>
                  <span className="text-[#343D30] italic">&ldquo;{submittedData.notes}&rdquo;</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#C76F52] text-white text-sm font-semibold hover:bg-[#b05d42] transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Submit Another Request</span>
              </button>
              <Link
                to="/paw-whisker/new-patients"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#FBF5EA] border border-[#E8DFD1] text-sm font-semibold text-[#343D30] hover:bg-[#F0D9CA]/40 transition-colors"
              >
                <span>Read First-Visit Guide</span>
                <ArrowRight className="w-4 h-4 text-[#82947A]" />
              </Link>
            </div>
          </div>
        )}

        {/* The Form */}
        {!isSubmitted && (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E8DFD1] shadow-sm space-y-8"
          >
            {/* Step 1: Owner Information */}
            <div className="space-y-4">
              <h3 className="font-fraunces text-xl font-bold text-[#343D30] flex items-center gap-2 border-b border-[#E8DFD1] pb-3">
                <Heart className="w-5 h-5 text-[#C76F52]" />
                1. Pet Parent Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1 sm:col-span-1">
                  <label htmlFor="ownerName" className="block text-xs font-semibold text-[#343D30]">
                    Your Full Name <span className="text-[#C76F52]">*</span>
                  </label>
                  <input
                    id="ownerName"
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border text-sm text-[#343D30] focus:outline-none focus:ring-2 focus:ring-[#C76F52] ${
                      errors.ownerName ? 'border-red-400 bg-red-50/50' : 'border-[#E8DFD1]'
                    }`}
                  />
                  {errors.ownerName && (
                    <p className="text-[11px] text-red-600 font-medium">{errors.ownerName}</p>
                  )}
                </div>

                <div className="space-y-1 sm:col-span-1">
                  <label htmlFor="email" className="block text-xs font-semibold text-[#343D30]">
                    Email Address <span className="text-[#C76F52]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border text-sm text-[#343D30] focus:outline-none focus:ring-2 focus:ring-[#C76F52] ${
                      errors.email ? 'border-red-400 bg-red-50/50' : 'border-[#E8DFD1]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 font-medium">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-1 sm:col-span-1">
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#343D30]">
                    Phone Number <span className="text-[#C76F52]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 019-2834"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border text-sm text-[#343D30] focus:outline-none focus:ring-2 focus:ring-[#C76F52] ${
                      errors.phone ? 'border-red-400 bg-red-50/50' : 'border-[#E8DFD1]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 font-medium">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Step 2: Pet Information */}
            <div className="space-y-4">
              <h3 className="font-fraunces text-xl font-bold text-[#343D30] flex items-center gap-2 border-b border-[#E8DFD1] pb-3">
                <Sparkles className="w-5 h-5 text-[#82947A]" />
                2. Companion Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="petName" className="block text-xs font-semibold text-[#343D30]">
                    Companion’s Name <span className="text-[#C76F52]">*</span>
                  </label>
                  <input
                    id="petName"
                    type="text"
                    value={formData.petName}
                    onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                    placeholder="e.g. Barnaby or Cleo"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border text-sm text-[#343D30] focus:outline-none focus:ring-2 focus:ring-[#C76F52] ${
                      errors.petName ? 'border-red-400 bg-red-50/50' : 'border-[#E8DFD1]'
                    }`}
                  />
                  {errors.petName && (
                    <p className="text-[11px] text-red-600 font-medium">{errors.petName}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-[#343D30]">
                    Pet Type <span className="text-[#C76F52]">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Dog', 'Cat', 'Other'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, petType: type })}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                          formData.petType === type
                            ? 'bg-[#343D30] text-white border-[#343D30]'
                            : 'bg-[#FBF5EA] text-[#343D30]/80 border-[#E8DFD1] hover:bg-[#F0D9CA]/40'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reason for Visit */}
              <div className="space-y-1">
                <label htmlFor="reason" className="block text-xs font-semibold text-[#343D30]">
                  Reason for Visit <span className="text-[#C76F52]">*</span>
                </label>
                <select
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border border-[#E8DFD1] text-sm text-[#343D30] focus:outline-none focus:ring-2 focus:ring-[#C76F52]"
                >
                  {reasons.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Veterinarian */}
              <div className="space-y-1">
                <label htmlFor="preferredVet" className="block text-xs font-semibold text-[#343D30]">
                  Preferred Veterinarian (Optional)
                </label>
                <select
                  id="preferredVet"
                  value={formData.preferredVet}
                  onChange={(e) => setFormData({ ...formData, preferredVet: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border border-[#E8DFD1] text-sm text-[#343D30] focus:outline-none focus:ring-2 focus:ring-[#C76F52]"
                >
                  <option value="">No preference — First available doctor</option>
                  {VETERINARIANS.map((v) => (
                    <option key={v.id} value={v.name}>
                      {v.name} ({v.role})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Date & Time Schedule */}
            <div className="space-y-4">
              <h3 className="font-fraunces text-xl font-bold text-[#343D30] flex items-center gap-2 border-b border-[#E8DFD1] pb-3">
                <Calendar className="w-5 h-5 text-[#C76F52]" />
                3. Preferred Date &amp; Time
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#343D30]">
                    Preferred Date <span className="text-[#C76F52]">*</span>
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    min={todayDate}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border text-sm text-[#343D30] focus:outline-none focus:ring-2 focus:ring-[#C76F52] ${
                      errors.preferredDate ? 'border-red-400 bg-red-50/50' : 'border-[#E8DFD1]'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-[11px] text-red-600 font-medium">{errors.preferredDate}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#343D30]">
                    Preferred Time Window <span className="text-[#C76F52]">*</span>
                  </label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border border-[#E8DFD1] text-sm text-[#343D30] focus:outline-none focus:ring-2 focus:ring-[#C76F52]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Special Handling / Temperament Notes */}
            <div className="space-y-2">
              <label htmlFor="notes" className="block text-xs font-semibold text-[#343D30]">
                Temperament, Special Handling, or Medical History Notes (Optional)
              </label>
              <textarea
                id="notes"
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Let us know if your pet is sensitive to other dogs, afraid of scales, has food allergies, or needs a quiet low-stimulation room..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#FBF5EA] border border-[#E8DFD1] text-sm text-[#343D30] placeholder-[#343D30]/50 focus:outline-none focus:ring-2 focus:ring-[#C76F52]"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-[#E8DFD1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#82947A]">
                <Clock className="w-3.5 h-3.5 inline mr-1" />
                Requests are reviewed within 2 hours during clinic business hours.
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C76F52] text-white font-bold text-base shadow-sm hover:bg-[#b05d42] active:scale-[0.98] transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Submit Appointment Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
