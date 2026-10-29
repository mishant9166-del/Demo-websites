import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  CheckCircle2,
} from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { doctors } from '../data/doctors';

export function DoctorDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return <Navigate to="/visora/doctors" replace />;
  }

  return (
    <div className="bg-[#F7F5EF] min-h-screen pb-20">
      {/* Breadcrumb Header */}
      <div className="border-b border-[#E4E4DE] bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#687581]">
            <Link to="/visora" className="hover:text-[#15263B]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/visora/doctors" className="hover:text-[#15263B]">
              Clinical Specialists
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-[#15263B] truncate">
              {doctor.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Profile Banner */}
      <section className="pt-10 pb-14 bg-white border-b border-[#E4E4DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Portrait Card */}
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-[#E4E4DE] aspect-[4/5] bg-[#F7F5EF] max-w-sm mx-auto lg:max-w-none">
                <ImageWithFallback
                  src={doctor.portrait}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-[#15263B] shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#5C9995]" />
                    {doctor.roomNumber}
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Intro */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-medium uppercase tracking-wider bg-[#F7F5EF] text-[#15263B] border border-[#E4E4DE] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5C9995]" />
                {doctor.specialty}
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#15263B] tracking-tight">
                {doctor.name}
              </h1>

              <p className="text-sm font-semibold text-[#5C9995] mt-1">
                {doctor.role}
              </p>
              <p className="text-xs text-[#687581] mt-0.5">
                {doctor.qualificationsDisplay}
              </p>

              <p className="mt-5 text-base text-[#687581] font-sans leading-relaxed">
                {doctor.bio}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6 pt-6 border-t border-[#E4E4DE]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#15263B]">
                  <Clock className="w-4 h-4 text-[#5C9995]" />
                  <span>Atelier Availability: {doctor.availability}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/visora/book-appointment"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-[#5C9995]" />
                  <span>Request Consultation with {doctor.name.split(' ')[1]}</span>
                </Link>
                <Link
                  to="/visora/doctors"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-[#687581] hover:text-[#15263B] bg-[#F7F5EF] border border-[#E4E4DE] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>All Specialists</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Consultation Approach */}
            <div className="bg-white rounded-3xl p-8 border border-[#E4E4DE] shadow-xs">
              <h2 className="font-display text-2xl font-normal text-[#15263B] mb-3">
                Consultation Philosophy
              </h2>
              <blockquote className="text-base text-[#15263B] italic font-display leading-relaxed border-l-2 border-[#5C9995] pl-4 py-1">
                {doctor.consultationApproach}
              </blockquote>
            </div>

            {/* Areas of Expertise */}
            <div className="bg-white rounded-3xl p-8 border border-[#E4E4DE] shadow-xs">
              <h2 className="font-display text-2xl font-normal text-[#15263B] mb-4">
                Primary Areas of Clinical Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {doctor.areasOfExpertise.map((area, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E4E4DE] flex items-center gap-2.5 text-xs font-semibold text-[#15263B]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#5C9995] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Notice */}
            <div className="p-6 rounded-2xl bg-white border border-[#E4E4DE] flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#5C9995] shrink-0 mt-0.5" />
              <div className="text-xs text-[#687581] leading-relaxed">
                <span className="font-semibold text-[#15263B]">Demonstration Notice:</span> {doctor.name} is a fictional persona for portfolio design evaluation. No real clinical registration number, regulatory body membership, or hospital endorsement is simulated.
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E4E4DE] shadow-sm sticky top-28">
              <h3 className="font-display text-xl text-[#15263B]">
                Reserve Consultation
              </h3>
              <p className="mt-2 text-xs text-[#687581] leading-relaxed">
                Book a comprehensive eye examination or specialized contact lens consultation with {doctor.name}.
              </p>

              <div className="mt-5 space-y-2.5 pt-4 border-t border-[#E4E4DE] text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#687581]">Practitioner:</span>
                  <span className="font-bold text-[#15263B]">{doctor.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#687581]">Location:</span>
                  <span className="font-bold text-[#15263B]">{doctor.roomNumber}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#687581]">Schedule:</span>
                  <span className="font-bold text-[#5C9995]">{doctor.availability}</span>
                </div>
              </div>

              <Link
                to="/visora/book-appointment"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors shadow-xs"
              >
                <span>Book With Specialist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetailPage;
