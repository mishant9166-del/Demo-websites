import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HairlineDivider } from '../components/common/HairlineDivider';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { CheckCircle2, ShieldCheck, ArrowRight, RefreshCw } from 'lucide-react';
import type { ConsultationFormData } from '../types/interior';

const PROPERTY_TYPES = [
  'Residential Villa',
  'Apartment / Penthouse',
  'Boutique Hospitality',
  'Full-Home Renovation',
  'Commercial Office',
] as const;

const APPROX_SIZES = [
  'Under 2,000 sq ft',
  '2,000 – 4,000 sq ft',
  '4,000 – 7,500 sq ft',
  '7,500 – 12,000 sq ft',
  'Above 12,000 sq ft',
];

const AVAILABLE_SERVICES = [
  'Full Architectural Interior Design',
  'Complete Renovation & Remodelling',
  'Spatial Planning & Partition Reconfiguration',
  'Custom Joinery & Millwork Detailing',
  'Quarry Stone & Finish Selection',
  'Furniture Curation & Bespoke Styling',
  'Lighting Engineering & Control Schematics',
  'Boutique Hospitality Concept',
];

const TIMELINES = [
  'Immediate (Ready for Site Synthesis)',
  'Within 1 – 3 months',
  'Within 3 – 6 months',
  'Planning stage / 6+ months away',
];

const BUDGET_RANGES_INR = [
  '₹40 Lakhs – ₹75 Lakhs',
  '₹75 Lakhs – ₹1.5 Crores',
  '₹1.5 Crores – ₹3 Crores',
  '₹3 Crores – ₹5 Crores+',
];

export const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectLocation: '',
    propertyType: 'Residential Villa',
    approxSize: '2,000 – 4,000 sq ft',
    servicesRequired: ['Full Architectural Interior Design'],
    timeline: 'Within 1 – 3 months',
    budgetRange: '₹75 Lakhs – ₹1.5 Crores',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<ConsultationFormData | null>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Please provide a valid telephone number with area code.';
    }

    if (!formData.projectLocation.trim()) {
      errs.projectLocation = 'Please state city or neighborhood (e.g., Dehradun, South Delhi, Alibaug).';
    }

    if (formData.servicesRequired.length === 0) {
      errs.servicesRequired = 'Please select at least one required service.';
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 20) {
      errs.projectDescription = 'Please provide a brief description of the space and aspirations (min 20 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const existing = JSON.parse(localStorage.getItem('forma_demo_enquiries') || '[]');
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('forma_demo_enquiries', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(service);
      return {
        ...prev,
        servicesRequired: exists
          ? prev.servicesRequired.filter((s) => s !== service)
          : [...prev.servicesRequired, service],
      };
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectLocation: '',
      propertyType: 'Residential Villa',
      approxSize: '2,000 – 4,000 sq ft',
      servicesRequired: ['Full Architectural Interior Design'],
      timeline: 'Within 1 – 3 months',
      budgetRange: '₹75 Lakhs – ₹1.5 Crores',
      projectDescription: '',
    });
    setErrors({});
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F7F6F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Heading */}
        <div className="max-w-3xl space-y-6">
          <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#777A62] block">
            Phase 01 &bull; Consultation & Project Dialogue
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292B28] leading-[1.08] tracking-tight">
            Discuss your space with Forma Studio.
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-[#292B28]/85 leading-relaxed pt-2">
            “We take on a limited number of residential and boutique hospitality commissions each year to preserve the singular attention each project demands.”
          </p>
        </div>

        <HairlineDivider />

        {isSubmitted && submittedData ? (
          /* Submission Confirmation Card */
          <div className="bg-white border border-[#E2DDD5] p-8 sm:p-14 space-y-8 animate-fadeIn">
            <div className="flex items-center gap-4 text-[#777A62]">
              <div className="w-12 h-12 rounded-full bg-[#E9E4DA] flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-[#777A62]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-mono text-[#777A62] block">
                  Demonstration Submission Recorded
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#292B28]">
                  Consultation Enquiry Logged
                </h2>
              </div>
            </div>

            {/* Crucial Required Disclaimer */}
            <div className="p-4 sm:p-6 bg-[#E9E4DA]/60 border border-[#D8D2C7] rounded-none space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#292B28]">
                <ShieldCheck className="w-4 h-4 text-[#777A62]" />
                <span>Client Portfolio Notice</span>
              </div>
              <p className="text-sm font-serif italic text-[#292B28] leading-relaxed">
                “Your demo enquiry has been saved in this browser. It has not been sent to a real design studio.”
              </p>
              <p className="text-xs text-[#292B28]/70 font-sans">
                This website is a demonstration portfolio prototype for Forma Studio. No real transmission occurred over external networks.
              </p>
            </div>

            {/* Summary of submitted data */}
            <div className="border border-[#E2DDD5] bg-[#F7F6F2] p-6 space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-mono text-[#777A62]">
                Enquiry Summary Recorded in LocalStorage:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <div>
                  <span className="text-[#777A62] block">Client Name:</span>
                  <span className="font-semibold text-[#292B28]">{submittedData.fullName}</span>
                </div>
                <div>
                  <span className="text-[#777A62] block">Email & Phone:</span>
                  <span className="font-semibold text-[#292B28]">{submittedData.email} &bull; {submittedData.phone}</span>
                </div>
                <div>
                  <span className="text-[#777A62] block">Location & Type:</span>
                  <span className="font-semibold text-[#292B28]">{submittedData.projectLocation} ({submittedData.propertyType})</span>
                </div>
                <div>
                  <span className="text-[#777A62] block">Scale & Budget:</span>
                  <span className="font-semibold text-[#292B28]">{submittedData.approxSize} &bull; {submittedData.budgetRange}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[#777A62] block">Services Requested:</span>
                  <span className="font-semibold text-[#292B28]">{submittedData.servicesRequired.join(', ')}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[#777A62] block">Aspirations:</span>
                  <p className="text-[#292B28]/85 pt-1 italic">{submittedData.projectDescription}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 border border-[#292B28] text-[#292B28] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#292B28] hover:text-white transition-all flex items-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Submit Another Demo Enquiry</span>
              </button>
              <Link
                to="/forma/projects"
                className="px-6 py-3 bg-[#292B28] text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#292B28]/90 transition-all flex items-center gap-2"
              >
                <span>Browse Project Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          /* Consultation Enquiry Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white border border-[#E2DDD5] p-8 sm:p-14 space-y-12"
          >
            {/* Section 1: Contact Details */}
            <div className="space-y-6">
              <div className="border-b border-[#E2DDD5] pb-2">
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#777A62] font-semibold">
                  01 / Client Particulars
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-2"
                  >
                    Full Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ananya Singhania"
                    className={`w-full px-4 py-2.5 text-xs bg-[#F7F6F2] border focus:outline-none focus:border-[#292B28] ${
                      errors.fullName ? 'border-red-600' : 'border-[#E2DDD5]'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-600 pt-1 block">{errors.fullName}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-2"
                  >
                    Email Address <span className="text-red-700">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ananya@domain.com"
                    className={`w-full px-4 py-2.5 text-xs bg-[#F7F6F2] border focus:outline-none focus:border-[#292B28] ${
                      errors.email ? 'border-red-600' : 'border-[#E2DDD5]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-600 pt-1 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-2"
                  >
                    Telephone / Mobile <span className="text-red-700">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98110 00000"
                    className={`w-full px-4 py-2.5 text-xs bg-[#F7F6F2] border focus:outline-none focus:border-[#292B28] ${
                      errors.phone ? 'border-red-600' : 'border-[#E2DDD5]'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-600 pt-1 block">{errors.phone}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Section 2: Property & Scope */}
            <div className="space-y-6">
              <div className="border-b border-[#E2DDD5] pb-2">
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#777A62] font-semibold">
                  02 / Property & Scale
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="projectLocation"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-2"
                  >
                    Site Location & City <span className="text-red-700">*</span>
                  </label>
                  <input
                    id="projectLocation"
                    type="text"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    placeholder="e.g. Civil Lines, Jaipur or Alibaug"
                    className={`w-full px-4 py-2.5 text-xs bg-[#F7F6F2] border focus:outline-none focus:border-[#292B28] ${
                      errors.projectLocation ? 'border-red-600' : 'border-[#E2DDD5]'
                    }`}
                  />
                  {errors.projectLocation && (
                    <span className="text-[11px] text-red-600 pt-1 block">{errors.projectLocation}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="propertyType"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-2"
                  >
                    Property Category
                  </label>
                  <select
                    id="propertyType"
                    value={formData.propertyType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        propertyType: e.target.value as ConsultationFormData['propertyType'],
                      })
                    }
                    className="w-full px-4 py-2.5 text-xs bg-[#F7F6F2] border border-[#E2DDD5] focus:outline-none focus:border-[#292B28]"
                  >
                    {PROPERTY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="approxSize"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-2"
                  >
                    Approximate Built Area
                  </label>
                  <select
                    id="approxSize"
                    value={formData.approxSize}
                    onChange={(e) => setFormData({ ...formData, approxSize: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-[#F7F6F2] border border-[#E2DDD5] focus:outline-none focus:border-[#292B28]"
                  >
                    {APPROX_SIZES.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Services Required */}
            <div className="space-y-4">
              <div className="border-b border-[#E2DDD5] pb-2 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#777A62] font-semibold">
                  03 / Disciplines Required
                </span>
                {errors.servicesRequired && (
                  <span className="text-[11px] text-red-600">{errors.servicesRequired}</span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {AVAILABLE_SERVICES.map((service) => {
                  const checked = formData.servicesRequired.includes(service);
                  return (
                    <label
                      key={service}
                      className={`flex items-center gap-3 p-3.5 border cursor-pointer transition-colors text-xs font-sans ${
                        checked
                          ? 'bg-[#E9E4DA] border-[#292B28] text-[#292B28] font-medium'
                          : 'bg-[#F7F6F2] border-[#E2DDD5] text-[#292B28]/80 hover:border-[#777A62]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleServiceToggle(service)}
                        className="rounded-none accent-[#292B28] w-4 h-4"
                      />
                      <span>{service}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Section 4: Budget in INR & Timeline */}
            <div className="space-y-6">
              <div className="border-b border-[#E2DDD5] pb-2">
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#777A62] font-semibold">
                  04 / Investment & Schedule
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="budgetRange"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-2"
                  >
                    Approximate Interior Investment (INR)
                  </label>
                  <select
                    id="budgetRange"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-[#F7F6F2] border border-[#E2DDD5] focus:outline-none focus:border-[#292B28]"
                  >
                    {BUDGET_RANGES_INR.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-[#292B28]/60 pt-1 font-mono">
                    Includes civil masonry, architectural joinery, stone, and loose furnishings.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#292B28] mb-2"
                  >
                    Target Initiation Timeline
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-[#F7F6F2] border border-[#E2DDD5] focus:outline-none focus:border-[#292B28]"
                  >
                    {TIMELINES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Section 5: Project Description */}
            <div className="space-y-4">
              <div className="border-b border-[#E2DDD5] pb-2">
                <label
                  htmlFor="projectDescription"
                  className="block text-xs uppercase tracking-[0.2em] font-mono text-[#777A62] font-semibold"
                >
                  05 / Project Aspirations & Brief <span className="text-red-700">*</span>
                </label>
              </div>

              <textarea
                id="projectDescription"
                rows={5}
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                placeholder="Describe your family rhythms, preferred materials (e.g. natural stone, dark oak, linen), whether the space is under construction or an existing home, and any architectural goals..."
                className={`w-full p-4 text-xs bg-[#F7F6F2] border focus:outline-none focus:border-[#292B28] leading-relaxed font-sans ${
                  errors.projectDescription ? 'border-red-600' : 'border-[#E2DDD5]'
                }`}
              />
              {errors.projectDescription && (
                <span className="text-[11px] text-red-600 block">{errors.projectDescription}</span>
              )}
            </div>

            {/* Honest Demo Disclaimer Notice */}
            <div className="p-4 bg-[#F7F6F2] border border-[#E2DDD5] flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#777A62] shrink-0 mt-0.5" />
              <p className="text-xs text-[#292B28]/75 leading-relaxed font-sans">
                <strong>Demonstration Practice:</strong> Forma Studio is a portfolio showcase. Submitting this form saves your parameters to browser memory for testing. No real communication or financial transaction will occur.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E2DDD5]">
              <span className="text-xs text-[#292B28]/60 font-mono hidden sm:inline">
                All fields marked (*) are mandatory
              </span>
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#292B28] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#292B28]/90 transition-all flex items-center gap-2"
              >
                <span>Submit Consultation Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

        {/* Contact info card */}
        <div className="p-8 bg-[#E9E4DA] border border-[#D8D2C7] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#292B28]">
          <div className="space-y-1">
            <span className="font-mono text-[#777A62] uppercase tracking-wider block font-semibold">
              The Atelier
            </span>
            <p className="font-serif text-sm font-semibold">{STUDIO_CONFIG.contact.address.full}</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[#777A62] uppercase tracking-wider block font-semibold">
              Direct Enquiry
            </span>
            <p className="font-mono text-sm">{STUDIO_CONFIG.contact.email}</p>
            <p className="text-[11px] text-[#292B28]/70">{STUDIO_CONFIG.contact.phone}</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[#777A62] uppercase tracking-wider block font-semibold">
              Atelier Hours
            </span>
            <p>{STUDIO_CONFIG.contact.visitingHours}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
