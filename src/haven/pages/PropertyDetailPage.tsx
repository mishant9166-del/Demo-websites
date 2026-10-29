import React, { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { HAVEN_PROPERTIES } from '../data/properties';
import { HAVEN_AGENTS } from '../data/agents';
import { HAVEN_NEIGHBORHOODS } from '../data/neighborhoods';
import { useSavedProperties } from '../context/SavedPropertiesContext';
import { ImageLightbox } from '../components/common/ImageLightbox';
import { PropertyCard } from '../components/properties/PropertyCard';
import {
  Heart,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  Car,
  MapPin,
  ArrowLeft,
  CheckCircle2,
  Share2,
  ShieldCheck,
  Phone,
  Mail,
  Send,
  Check,
} from 'lucide-react';
import type { PropertyEnquiryFormData } from '../types/property';

export const PropertyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isSaved, toggleSave } = useSavedProperties();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Enquiry Form State
  const [enquiry, setEnquiry] = useState<PropertyEnquiryFormData>({
    propertyId: '',
    propertyTitle: '',
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'phone',
    message: 'Hello, I am interested in scheduling an illustrative private viewing for this property.',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Find Property
  const property = useMemo(() => {
    return HAVEN_PROPERTIES.find((p) => p.slug === slug);
  }, [slug]);

  // Assigned Agent
  const agent = useMemo(() => {
    if (!property) return null;
    return HAVEN_AGENTS.find((a) => a.id === property.assignedAgentId) || HAVEN_AGENTS[0];
  }, [property]);

  // Neighborhood Info
  const neighborhood = useMemo(() => {
    if (!property) return null;
    return HAVEN_NEIGHBORHOODS.find((n) => n.slug === property.neighborhoodSlug);
  }, [property]);

  // Similar Properties
  const similarProperties = useMemo(() => {
    if (!property) return [];
    return HAVEN_PROPERTIES.filter(
      (p) => p.id !== property.id && (p.purpose === property.purpose || p.type === property.type)
    ).slice(0, 3);
  }, [property]);

  if (!property) {
    return <Navigate to="/haven/properties" replace />;
  }

  const saved = isSaved(property.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const validateEnquiry = () => {
    const errs: Record<string, string> = {};
    if (!enquiry.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!enquiry.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
      errs.email = 'Valid email is required.';
    }
    if (!enquiry.phone.trim() || enquiry.phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Valid phone number is required.';
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEnquiry()) return;

    try {
      const existing = JSON.parse(localStorage.getItem('haven_demo_enquiries') || '[]');
      existing.push({
        ...enquiry,
        propertyId: property.id,
        propertyTitle: property.title,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('haven_demo_enquiries', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    setIsSubmitted(true);
  };

  return (
    <div className="py-8 sm:py-16 bg-[#FAF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between">
          <Link
            to="/haven/properties"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#899687] hover:text-[#254D3C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Properties</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#292D2A] bg-white border border-[#E7DDCE] hover:border-[#254D3C] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#899687]" />
                  <span>Share Listing</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => toggleSave(property.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-colors border ${
                saved
                  ? 'bg-[#254D3C] text-white border-[#254D3C]'
                  : 'bg-white text-[#292D2A] border-[#E7DDCE] hover:border-[#254D3C]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
              <span>{saved ? 'Saved' : 'Save Property'}</span>
            </button>
          </div>
        </div>

        {/* Title & Price Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E7DDCE] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 text-xs font-sans font-bold uppercase tracking-wider ${
                  property.purpose === 'buy'
                    ? 'bg-[#254D3C] text-white'
                    : 'bg-[#899687] text-white'
                }`}
              >
                {property.purpose === 'buy' ? 'For Sale' : 'For Rent'}
              </span>
              <span className="text-xs uppercase tracking-widest font-mono text-[#899687]">
                {property.type} &bull; Ref #{property.id}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#292D2A]">
              {property.title}
            </h1>
            <p className="flex items-center gap-1.5 text-sm text-[#292D2A]/75 font-sans">
              <MapPin className="w-4 h-4 text-[#254D3C]" />
              <span>{property.location}, {property.city} — {property.pincode}</span>
            </p>
          </div>

          <div className="text-left md:text-right space-y-1">
            <span className="text-xs uppercase tracking-wider font-mono text-[#899687] block">
              Asking Price (Demo Rate)
            </span>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#254D3C]">
              {property.priceFormatted}
            </div>
            {property.pricePerSqFt && (
              <span className="text-xs text-[#292D2A]/60 font-mono block">
                {property.pricePerSqFt}
              </span>
            )}
          </div>
        </div>

        {/* High-Res Gallery Grid */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Primary Hero Stage */}
            <div
              onClick={() => {
                setCurrentImageIndex(0);
                setLightboxOpen(true);
              }}
              className="md:col-span-8 aspect-[16/10] bg-[#E7DDCE] overflow-hidden cursor-pointer relative group"
            >
              <img
                src={property.heroImage}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white px-3 py-1 text-xs font-mono rounded-xs">
                Click to expand gallery ({property.galleryImages.length + 1} photos)
              </div>
            </div>

            {/* Side Gallery Stacks */}
            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3">
              {property.galleryImages.slice(0, 2).map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setCurrentImageIndex(idx + 1);
                    setLightboxOpen(true);
                  }}
                  className="aspect-[16/10] bg-[#E7DDCE] overflow-hidden cursor-pointer relative group"
                >
                  <img
                    src={img}
                    alt={`${property.title} preview ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Specs Bar */}
        <div className="bg-white border border-[#E7DDCE] p-6 grid grid-cols-2 sm:grid-cols-5 gap-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-mono text-[#899687] block">
              Bedrooms
            </span>
            <div className="flex items-center gap-2 text-base sm:text-lg font-serif font-bold text-[#292D2A]">
              <Bed className="w-5 h-5 text-[#254D3C]" />
              <span>{property.bedrooms > 0 ? `${property.bedrooms} Beds` : 'Studio'}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-mono text-[#899687] block">
              Bathrooms
            </span>
            <div className="flex items-center gap-2 text-base sm:text-lg font-serif font-bold text-[#292D2A]">
              <Bath className="w-5 h-5 text-[#254D3C]" />
              <span>{property.bathrooms} Baths</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-mono text-[#899687] block">
              Super Built Area
            </span>
            <div className="flex items-center gap-2 text-base sm:text-lg font-serif font-bold text-[#292D2A]">
              <Maximize2 className="w-4 h-4 text-[#254D3C]" />
              <span>{property.areaFormatted}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-mono text-[#899687] block">
              Dedicated Parking
            </span>
            <div className="flex items-center gap-2 text-base sm:text-lg font-serif font-bold text-[#292D2A]">
              <Car className="w-5 h-5 text-[#254D3C]" />
              <span>{property.parkingSpaces} Stalls</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-mono text-[#899687] block">
              Listing Status
            </span>
            <div className="flex items-center gap-2 text-base sm:text-lg font-serif font-bold text-[#254D3C]">
              <Calendar className="w-4 h-4 text-[#254D3C]" />
              <span>{property.status}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Main Content & Sticky Advisory Enquiry Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Description, Highlights, Amenities, Floorplan */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview & Description */}
            <div className="bg-white border border-[#E7DDCE] p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#292D2A]">
                Property Overview
              </h2>
              <p className="font-serif italic text-lg text-[#254D3C]">
                “{property.tagline}”
              </p>
              <p className="text-sm sm:text-base text-[#292D2A]/80 leading-relaxed font-sans pt-2">
                {property.description}
              </p>
            </div>

            {/* Architectural Highlights */}
            <div className="bg-white border border-[#E7DDCE] p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292D2A]">
                Key Architectural Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {property.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292D2A]/85">
                    <span className="mt-1 w-4 h-4 rounded-full bg-[#E7DDCE] text-[#254D3C] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features & Amenities Checklist */}
            <div className="bg-white border border-[#E7DDCE] p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292D2A]">
                Amenities & Inclusions
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {property.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="p-3 bg-[#FAF9F5] border border-[#E7DDCE] text-xs font-sans text-[#292D2A] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#254D3C] rounded-full shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plan Placeholder Section */}
            <div className="bg-white border border-[#E7DDCE] p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292D2A]">
                  Architectural Floor Plan
                </h3>
                <span className="text-xs font-mono text-[#899687]">
                  Schematic Layout &bull; {property.areaFormatted}
                </span>
              </div>
              <p className="text-xs text-[#292D2A]/70 font-sans">
                Illustrative floor layout showing room relationships, natural light apertures, and circulation axes.
              </p>
              <div className="aspect-[16/9] w-full overflow-hidden bg-[#FAF9F5] border border-[#E7DDCE] flex items-center justify-center relative p-6">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-[#E7DDCE]/60 flex items-center justify-center mx-auto text-[#254D3C]">
                    <Maximize2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#292D2A]">
                    {property.title} &bull; Level Blueprint
                  </h4>
                  <p className="text-xs text-[#899687] max-w-sm font-sans">
                    Detailed CAD drawings and ceiling height sections available for prospective clients upon request.
                  </p>
                </div>
              </div>
            </div>

            {/* Neighborhood Spotlight */}
            {neighborhood && (
              <div className="bg-white border border-[#E7DDCE] p-8 space-y-4">
                <span className="text-[11px] uppercase tracking-wider font-mono text-[#899687]">
                  Enclave Spotlight
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#292D2A]">
                  About {neighborhood.name}, {neighborhood.city}
                </h3>
                <p className="text-xs sm:text-sm text-[#292D2A]/80 font-sans leading-relaxed">
                  {neighborhood.overview}
                </p>
                <div className="pt-2">
                  <Link
                    to={`/haven/neighborhoods/${neighborhood.slug}`}
                    className="text-xs uppercase tracking-wider font-bold text-[#254D3C] hover:underline"
                  >
                    Explore Complete {neighborhood.name} Neighborhood Guide &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Advisory Enquiry & Agent Card */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Agent Profile Box */}
            {agent && (
              <div className="bg-white border border-[#E7DDCE] p-6 space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#899687]">
                  Exclusive Listing Agent
                </span>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-[#E7DDCE] shrink-0 border border-[#E7DDCE]">
                    <img src={agent.photo} alt={agent.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#292D2A]">{agent.name}</h4>
                    <span className="text-xs text-[#899687] block font-sans">{agent.role}</span>
                    <span className="text-[11px] text-[#254D3C] font-mono block">
                      {agent.experienceYears} Years Market Experience
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E7DDCE] text-xs font-mono space-y-1 text-[#292D2A]/80">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#254D3C]" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#254D3C]" />
                    <span>{agent.email}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Property Enquiry Form */}
            <div className="bg-white border border-[#E7DDCE] p-6 space-y-6">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#292D2A]">
                  Request Property Dossier
                </h3>
                <p className="text-xs text-[#292D2A]/70 font-sans pt-1">
                  Connect with our advisory desk regarding {property.title}.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-5 bg-[#FAF9F5] border border-[#E7DDCE] text-center space-y-3 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-[#254D3C] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#292D2A]">
                    Demo Enquiry Recorded
                  </h4>
                  <p className="text-xs font-serif italic text-[#254D3C] leading-relaxed">
                    “This is a demo enquiry. No message has been sent to a real estate agency.”
                  </p>
                  <p className="text-[11px] text-[#292D2A]/60 font-sans">
                    Property: <strong>{property.title}</strong>
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs underline text-[#254D3C] font-semibold pt-2"
                  >
                    Submit another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} noValidate className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1">
                      Full Name <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      value={enquiry.fullName}
                      onChange={(e) => setEnquiry({ ...enquiry, fullName: e.target.value })}
                      placeholder="e.g. Vikram Singhania"
                      className={`w-full px-3 py-2 text-xs bg-[#FAF9F5] border focus:outline-none focus:border-[#254D3C] ${
                        formErrors.fullName ? 'border-red-600' : 'border-[#E7DDCE]'
                      }`}
                    />
                    {formErrors.fullName && (
                      <span className="text-[11px] text-red-600 pt-0.5 block">{formErrors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1">
                      Email Address <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="email"
                      value={enquiry.email}
                      onChange={(e) => setEnquiry({ ...enquiry, email: e.target.value })}
                      placeholder="e.g. vikram@domain.com"
                      className={`w-full px-3 py-2 text-xs bg-[#FAF9F5] border focus:outline-none focus:border-[#254D3C] ${
                        formErrors.email ? 'border-red-600' : 'border-[#E7DDCE]'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-red-600 pt-0.5 block">{formErrors.email}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1">
                      Phone Number <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="tel"
                      value={enquiry.phone}
                      onChange={(e) => setEnquiry({ ...enquiry, phone: e.target.value })}
                      placeholder="+91 98110 00000"
                      className={`w-full px-3 py-2 text-xs bg-[#FAF9F5] border focus:outline-none focus:border-[#254D3C] ${
                        formErrors.phone ? 'border-red-600' : 'border-[#E7DDCE]'
                      }`}
                    />
                    {formErrors.phone && (
                      <span className="text-[11px] text-red-600 pt-0.5 block">{formErrors.phone}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1">
                      Preferred Channel
                    </label>
                    <select
                      value={enquiry.preferredContact}
                      onChange={(e) =>
                        setEnquiry({
                          ...enquiry,
                          preferredContact: e.target.value as PropertyEnquiryFormData['preferredContact'],
                        })
                      }
                      className="w-full px-3 py-2 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] focus:outline-none focus:border-[#254D3C]"
                    >
                      <option value="phone">Direct Telephone Call</option>
                      <option value="email">Email Dossier</option>
                      <option value="whatsapp">WhatsApp Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#292D2A] mb-1">
                      Questions / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={enquiry.message}
                      onChange={(e) => setEnquiry({ ...enquiry, message: e.target.value })}
                      className="w-full p-3 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] focus:outline-none focus:border-[#254D3C]"
                    />
                  </div>

                  {/* Demo Notice */}
                  <div className="p-3 bg-[#FAF9F5] border border-[#E7DDCE] flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#899687] shrink-0 mt-0.5" />
                    <p className="text-[11px] text-[#292D2A]/70 font-sans leading-relaxed">
                      This is an illustrative demonstration form. No actual communication or viewing booking will be initiated.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#254D3C] text-white text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#1E3F31] transition-all flex items-center justify-center gap-2 rounded-xs shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Demo Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Similar Properties Showcase */}
        {similarProperties.length > 0 && (
          <div className="space-y-6 pt-12 border-t border-[#E7DDCE]">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-mono text-[#899687]">
                  Curated Matches
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#292D2A]">
                  Similar Properties You May Appreciate
                </h3>
              </div>
              <Link
                to="/haven/properties"
                className="text-xs uppercase tracking-widest text-[#254D3C] font-semibold hover:underline"
              >
                View Registry &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} viewMode="grid" />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <ImageLightbox
        images={[property.heroImage, ...property.galleryImages]}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setCurrentImageIndex((prev) => (prev + 1) % (property.galleryImages.length + 1))
        }
        onPrev={() =>
          setCurrentImageIndex((prev) =>
            prev === 0 ? property.galleryImages.length : prev - 1
          )
        }
        title={property.title}
      />
    </div>
  );
};

export default PropertyDetailPage;
