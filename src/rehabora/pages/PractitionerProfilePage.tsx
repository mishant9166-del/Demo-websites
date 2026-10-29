import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  UserCheck,
  CheckCircle2,
} from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';
import ServiceCard from '../components/services/ServiceCard';
import { practitioners } from '../data/practitioners';
import { services } from '../data/services';

export function PractitionerProfilePage() {
  const { slug } = useParams<{ slug: string }>();
  const practitioner = practitioners.find((p) => p.slug === slug);

  if (!practitioner) {
    return <Navigate to="/rehabora/practitioners" replace />;
  }

  // Find relevant services
  const relevantServices = services.filter((s) =>
    practitioner.associatedServiceSlugs.includes(s.slug)
  );

  return (
    <div className="bg-[#FAFBF8] min-h-screen pb-20">
      {/* Breadcrumb Header */}
      <div className="border-b border-[#E1E8E2] bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#727C75]">
            <Link to="/rehabora" className="hover:text-[#285A49]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/rehabora/practitioners" className="hover:text-[#285A49]">
              Practitioners
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-[#285A49] truncate">
              {practitioner.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Profile Banner */}
      <section className="pt-10 pb-14 bg-white border-b border-[#E1E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Portrait Card */}
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-[#E1E8E2] aspect-[4/5] bg-[#E8F2EC] max-w-sm mx-auto lg:max-w-none">
                <ImageWithFallback
                  src={practitioner.portrait}
                  alt={practitioner.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-[#285A49] shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#72A88A]" />
                    {practitioner.suiteNumber}
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Intro */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F2EC] text-[#285A49] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#72A88A]" />
                {practitioner.specialty}
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242C28] tracking-tight">
                {practitioner.name}
              </h1>

              <p className="text-sm font-semibold text-[#72A88A] mt-1">
                {practitioner.title}
              </p>

              <p className="mt-4 text-base text-[#727C75] leading-relaxed">
                {practitioner.bio}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6 pt-6 border-t border-[#E1E8E2]">
                <div className="flex items-center gap-2 text-xs font-medium text-[#242C28]">
                  <Clock className="w-4 h-4 text-[#D8A66A]" />
                  <span>Clinic Availability: {practitioner.availability}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#242C28]">
                  <UserCheck className="w-4 h-4 text-[#285A49]" />
                  <span>One-on-One Guided Care</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/rehabora/appointment"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#D8A66A]" />
                  Request Consultation with {practitioner.name.split(' ')[0]}
                </Link>
                <Link
                  to="/rehabora/practitioners"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-[#727C75] hover:text-[#285A49] bg-[#FAFBF8] border border-[#E1E8E2] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  All Clinicians
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-12">
            {/* Professional Approach */}
            <div className="bg-white rounded-3xl p-8 border border-[#E1E8E2] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#242C28]">
                  Clinical Philosophy &amp; Approach
                </h2>
              </div>
              <p className="text-sm text-[#727C75] leading-relaxed">
                {practitioner.professionalApproach}
              </p>
            </div>

            {/* General Areas of Interest */}
            <div className="bg-white rounded-3xl p-8 border border-[#E1E8E2] shadow-xs">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#242C28] mb-4">
                Areas of Focus &amp; Clinical Interests
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {practitioner.areasOfInterest.map((interest, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#FAFBF8] border border-[#E1E8E2] flex items-center gap-2.5 text-xs font-semibold text-[#285A49]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#72A88A] shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fictional Portfolio Disclaimer */}
            <div className="p-6 rounded-2xl bg-[#E8F2EC]/60 border border-[#D4E5D9] flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#285A49] shrink-0 mt-0.5" />
              <div className="text-xs text-[#242C28] leading-relaxed">
                <span className="font-bold">Portfolio Demonstration Disclaimer:</span> {practitioner.name} is a fictional persona created for portfolio evaluation. In accordance with strict ethical healthcare web design principles, no real clinical registration number, regulatory body membership, or verified medical history is simulated.
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E1E8E2] shadow-sm sticky top-28">
              <h3 className="font-heading text-lg font-bold text-[#242C28]">
                Request a Session
              </h3>
              <p className="mt-2 text-xs text-[#727C75] leading-relaxed">
                Consult with our team to discuss your goals and begin your rehabilitation pathway.
              </p>

              <div className="mt-5 space-y-2.5 pt-4 border-t border-[#E1E8E2]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#727C75]">Clinician:</span>
                  <span className="font-bold text-[#242C28]">{practitioner.name}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#727C75]">Specialty:</span>
                  <span className="font-bold text-[#285A49] text-right">{practitioner.specialty}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#727C75]">Location:</span>
                  <span className="font-bold text-[#242C28]">{practitioner.suiteNumber}</span>
                </div>
              </div>

              <Link
                to="/rehabora/appointment"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors shadow-xs"
              >
                Book Consultation
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Associated Services */}
        {relevantServices.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#E1E8E2]">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#72A88A]">
                PRACTITIONER SERVICES
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#242C28] mt-1">
                Services Delivered by {practitioner.name.split(' ')[0]}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantServices.map((srv, idx) => (
                <ServiceCard key={srv.id} service={srv} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PractitionerProfilePage;
