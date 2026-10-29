import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';
import type { SellerEnquiryFormData, PropertyType, ListingPurpose } from '../types/property';

const PROPERTY_TYPES: PropertyType[] = [
  'Apartment',
  'Villa',
  'Penthouse',
  'Townhouse',
  'Family Home',
  'Commercial Office',
  'Retail Space',
];

export const SellPropertyPage: React.FC = () => {
  const [formData, setFormData] = useState<SellerEnquiryFormData>({
    ownerName: '',
    email: '',
    phone: '',
    propertyLocation: '',
    city: 'Mumbai',
    propertyType: 'Apartment',
    purpose: 'buy',
    approxAreaSqFt: '2,500 – 4,000 sq ft',
    bedrooms: '3 Bedrooms',
    expectedPriceINR: '₹8.50 Crores',
    timeframe: 'Ready to list within 30 days',
    additionalDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<SellerEnquiryFormData | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.ownerName.trim()) errs.ownerName = 'Owner name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email address is required.';
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Valid telephone number is required.';
    }
    if (!formData.propertyLocation.trim()) {
      errs.propertyLocation = 'Property location / address is required.';
    }
    if (!formData.additionalDetails.trim() || formData.additionalDetails.trim().length < 15) {
      errs.additionalDetails = 'Please provide a brief description of the property (min 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const existing = JSON.parse(localStorage.getItem('haven_demo_seller_submissions') || '[]');
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('haven_demo_seller_submissions', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      ownerName: '',
      email: '',
      phone: '',
      propertyLocation: '',
      city: 'Mumbai',
      propertyType: 'Apartment',
      purpose: 'buy',
      approxAreaSqFt: '2,500 – 4,000 sq ft',
      bedrooms: '3 Bedrooms',
      expectedPriceINR: '₹8.50 Crores',
      timeframe: 'Ready to list within 30 days',
      additionalDetails: '',
    });
    setErrors({});
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#899687] font-semibold block">
            Exclusive Representation &bull; Property Sellers & Landlords
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292D2A]">
            List Your Property with Haven & Key
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-[#254D3C] leading-relaxed">
            “Positioning distinguished homes to qualified private buyers with discretion and architectural clarity.”
          </p>
        </div>

        {/* 4-Step Listing Process Explanation */}
        <div className="bg-white border border-[#E7DDCE] p-8 sm:p-10 space-y-6">
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#292D2A]">
            The 4-Step Representation Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="space-y-1 border-l-2 border-[#254D3C] pl-3">
              <span className="font-mono text-xs text-[#899687] font-bold">STAGE 01</span>
              <h4 className="font-serif font-bold text-base text-[#292D2A]">Share Details</h4>
              <p className="text-xs text-[#292D2A]/70 font-sans">
                Submit basic asset facts, location, and preferred timeline through our intake dossier.
              </p>
            </div>

            <div className="space-y-1 border-l-2 border-[#254D3C] pl-3">
              <span className="font-mono text-xs text-[#899687] font-bold">STAGE 02</span>
              <h4 className="font-serif font-bold text-base text-[#292D2A]">Private Inspection</h4>
              <p className="text-xs text-[#292D2A]/70 font-sans">
                A regional advisor visits the home to assess daylight, finishes, and title paperwork.
              </p>
            </div>

            <div className="space-y-1 border-l-2 border-[#254D3C] pl-3">
              <span className="font-mono text-xs text-[#899687] font-bold">STAGE 03</span>
              <h4 className="font-serif font-bold text-base text-[#292D2A]">Marketing Strategy</h4>
              <p className="text-xs text-[#292D2A]/70 font-sans">
                We agree on public editorial features or confidential off-market matchmaking.
              </p>
            </div>

            <div className="space-y-1 border-l-2 border-[#254D3C] pl-3">
              <span className="font-mono text-xs text-[#899687] font-bold">STAGE 04</span>
              <h4 className="font-serif font-bold text-base text-[#292D2A]">Qualified Showings</h4>
              <p className="text-xs text-[#292D2A]/70 font-sans">
                We facilitate private viewings exclusively with pre-vetted prospective clients.
              </p>
            </div>
          </div>
        </div>

        {/* Submission Confirmation OR Form */}
        {isSubmitted && submittedData ? (
          <div className="bg-white border border-[#E7DDCE] p-8 sm:p-12 space-y-8 animate-fadeIn">
            <div className="flex items-center gap-4 text-[#254D3C]">
              <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E7DDCE] flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-[#254D3C]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-mono text-[#899687] block">
                  Demonstration Submission Saved
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#292D2A]">
                  Property Intake Recorded
                </h2>
              </div>
            </div>

            {/* Crucial Required Disclaimer */}
            <div className="p-5 bg-[#FAF9F5] border border-[#E7DDCE] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#292D2A]">
                <ShieldCheck className="w-4 h-4 text-[#254D3C]" />
                <span>Seller Portfolio Disclaimer</span>
              </div>
              <p className="text-sm font-serif italic text-[#254D3C] leading-relaxed">
                “Your demo property submission has been saved in this browser. It has not been sent to an agency and your property has not been listed.”
              </p>
              <p className="text-xs text-[#292D2A]/70 font-sans">
                This website is a demonstration portfolio prototype for Haven & Key. No real valuation or property listing has been initiated.
              </p>
            </div>

            {/* Summary */}
            <div className="border border-[#E7DDCE] p-5 space-y-3 bg-[#FAF9F5]/50 text-xs font-sans">
              <h4 className="font-mono text-[#899687] uppercase tracking-wider text-[11px]">
                Submitted Parameters:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#292D2A]">
                <div>
                  <span className="text-[#899687] block">Owner:</span>
                  <span className="font-semibold">{submittedData.ownerName}</span>
                </div>
                <div>
                  <span className="text-[#899687] block">Contact:</span>
                  <span className="font-semibold">{submittedData.email} &bull; {submittedData.phone}</span>
                </div>
                <div>
                  <span className="text-[#899687] block">Location & Type:</span>
                  <span className="font-semibold">{submittedData.propertyLocation}, {submittedData.city} ({submittedData.propertyType})</span>
                </div>
                <div>
                  <span className="text-[#899687] block">Expected Price:</span>
                  <span className="font-semibold">{submittedData.expectedPriceINR}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 border border-[#254D3C] text-[#254D3C] text-xs uppercase tracking-widest font-semibold hover:bg-[#254D3C] hover:text-white transition-all flex items-center gap-2 rounded-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Submit Another Listing Note</span>
              </button>

              <Link
                to="/haven/properties"
                className="px-6 py-3 bg-[#254D3C] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#1E3F31] transition-all rounded-xs"
              >
                Browse Current Properties
              </Link>
            </div>
          </div>
        ) : (
          /* Intake Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white border border-[#E7DDCE] p-8 sm:p-12 space-y-10"
          >
            {/* Owner Particulars */}
            <div className="space-y-4">
              <div className="border-b border-[#E7DDCE] pb-2">
                <span className="text-xs uppercase tracking-wider font-mono text-[#899687] font-semibold">
                  01 / Owner Contact Particulars
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                    Owner Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="e.g. Rameshwar Goenka"
                    className={`w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border focus:outline-none focus:border-[#254D3C] ${
                      errors.ownerName ? 'border-red-600' : 'border-[#E7DDCE]'
                    }`}
                  />
                  {errors.ownerName && (
                    <span className="text-[11px] text-red-600 pt-0.5 block">{errors.ownerName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                    Email Address <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rameshwar@domain.com"
                    className={`w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border focus:outline-none focus:border-[#254D3C] ${
                      errors.email ? 'border-red-600' : 'border-[#E7DDCE]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-600 pt-0.5 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                    Phone Number <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98200 00000"
                    className={`w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border focus:outline-none focus:border-[#254D3C] ${
                      errors.phone ? 'border-red-600' : 'border-[#E7DDCE]'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-600 pt-0.5 block">{errors.phone}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Property Parameters */}
            <div className="space-y-4">
              <div className="border-b border-[#E7DDCE] pb-2">
                <span className="text-xs uppercase tracking-wider font-mono text-[#899687] font-semibold">
                  02 / Asset Details
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                    Location & Landmark <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.propertyLocation}
                    onChange={(e) => setFormData({ ...formData, propertyLocation: e.target.value })}
                    placeholder="e.g. Bandra West, Carter Road"
                    className={`w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border focus:outline-none focus:border-[#254D3C] ${
                      errors.propertyLocation ? 'border-red-600' : 'border-[#E7DDCE]'
                    }`}
                  />
                  {errors.propertyLocation && (
                    <span className="text-[11px] text-red-600 pt-0.5 block">{errors.propertyLocation}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                    Property Category
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) =>
                      setFormData({ ...formData, propertyType: e.target.value as PropertyType })
                    }
                    className="w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] focus:outline-none focus:border-[#254D3C]"
                  >
                    {PROPERTY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                    Representation Goal
                  </label>
                  <select
                    value={formData.purpose}
                    onChange={(e) =>
                      setFormData({ ...formData, purpose: e.target.value as ListingPurpose })
                    }
                    className="w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] focus:outline-none focus:border-[#254D3C]"
                  >
                    <option value="buy">Sale (Freehold Transfer)</option>
                    <option value="rent">Executive Lease (Long-Term)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                    Approximate Built Area
                  </label>
                  <input
                    type="text"
                    value={formData.approxAreaSqFt}
                    onChange={(e) => setFormData({ ...formData, approxAreaSqFt: e.target.value })}
                    placeholder="e.g. 3,500 sq ft"
                    className="w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] focus:outline-none focus:border-[#254D3C]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                    Bedrooms
                  </label>
                  <input
                    type="text"
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                    placeholder="e.g. 4 Bedrooms"
                    className="w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] focus:outline-none focus:border-[#254D3C]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1.5">
                    Expected Selling Price (INR)
                  </label>
                  <input
                    type="text"
                    value={formData.expectedPriceINR}
                    onChange={(e) => setFormData({ ...formData, expectedPriceINR: e.target.value })}
                    placeholder="e.g. ₹12.50 Crores"
                    className="w-full px-4 py-2.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] focus:outline-none focus:border-[#254D3C]"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div className="border-b border-[#E7DDCE] pb-2">
                <label className="block text-xs uppercase tracking-wider font-mono text-[#899687] font-semibold">
                  03 / Asset Architectural Details & Features <span className="text-red-700">*</span>
                </label>
              </div>

              <textarea
                rows={4}
                value={formData.additionalDetails}
                onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                placeholder="Mention views (e.g. sea view, park facing), ceiling heights, parking bays, society name, or off-market privacy preferences..."
                className={`w-full p-4 text-xs bg-[#FAF9F5] border focus:outline-none focus:border-[#254D3C] ${
                  errors.additionalDetails ? 'border-red-600' : 'border-[#E7DDCE]'
                }`}
              />
              {errors.additionalDetails && (
                <span className="text-[11px] text-red-600 block">{errors.additionalDetails}</span>
              )}
            </div>

            {/* Honest Demo Disclaimer Notice */}
            <div className="p-4 bg-[#FAF9F5] border border-[#E7DDCE] flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#254D3C] shrink-0 mt-0.5" />
              <p className="text-xs text-[#292D2A]/75 leading-relaxed font-sans">
                <strong>Demo Submission Notice:</strong> Haven & Key is an illustrative frontend demonstration. Your details will be stored in your browser session only. No real estate broker or external entity will contact you.
              </p>
            </div>

            {/* Submit */}
            <div className="pt-2 flex items-center justify-between border-t border-[#E7DDCE]">
              <span className="text-xs text-[#899687] font-mono hidden sm:inline">
                All fields marked (*) are required
              </span>
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#254D3C] text-white text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#1E3F31] transition-all flex items-center gap-2 rounded-xs shadow-xs"
              >
                <span>Submit Property Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SellPropertyPage;
