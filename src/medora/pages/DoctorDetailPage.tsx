import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  ArrowLeft,
  Award,
  MapPin,
  Clock,
  Mail,
  CheckCircle2,
  Building2,
  AlertCircle,
} from 'lucide-react';
import { doctors } from '../data/doctors';
import { departments } from '../data/departments';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { DoctorCard } from '../components/doctors/DoctorCard';

export function DoctorDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return <Navigate to="/medora/doctors" replace />;
  }

  const department = departments.find((dept) => dept.slug === doctor.departmentSlug);

  // Other doctors in the directory
  const otherDoctors = doctors
    .filter((d) => d.slug !== doctor.slug)
    .slice(0, 3);

  return (
    <div className="py-10 sm:py-16 bg-[#F8FBFD] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7E8E]">
          <Link
            to="/medora/doctors"
            className="hover:text-[#1769AA] flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Doctors Directory</span>
          </Link>
          <span>/</span>
          <span className="text-[#1769AA]">{doctor.name}</span>
        </div>

        {/* Doctor Header Banner Card */}
        <div className="bg-white rounded-3xl border border-[#E1EAF0] overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
          {/* Portrait Image (4 cols) */}
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#E1EAF0] shadow-xs bg-[#EAF5FC]">
            <ImageWithFallback
              src={doctor.portrait}
              alt={doctor.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-[#1769AA] uppercase tracking-wider border border-[#E1EAF0] shadow-xs flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#18A9A0]" />
              <span>{doctor.experienceYears} Years Clinical Exp</span>
            </div>
          </div>

          {/* Details (8 cols) */}
          <div className="lg:col-span-8 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#EAF5FC] text-[#1769AA] text-xs font-bold uppercase tracking-wider border border-[#1769AA]/15">
                {doctor.specialty}
              </span>
              {department && (
                <Link
                  to={`/medora/departments/${department.slug}`}
                  className="px-3 py-1 rounded-full bg-[#F8FBFD] hover:bg-[#EAF5FC] text-[#18A9A0] text-xs font-bold uppercase tracking-wider border border-[#E1EAF0] transition-colors"
                >
                  {department.name}
                </Link>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102B46] tracking-tight leading-tight">
              {doctor.name}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-[#1769AA]">
              {doctor.title}
            </p>

            <p className="text-sm sm:text-base text-[#6B7E8E] leading-relaxed max-w-2xl">
              {doctor.bio}
            </p>

            {/* Practical Consultation Details Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F8FBFD] border border-[#E1EAF0] text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E1EAF0] text-[#1769AA] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#6B7E8E] block">Location</span>
                  <strong className="text-[#102B46]">{doctor.roomNumber}</strong>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E1EAF0] text-[#1769AA] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#6B7E8E] block">Consultation Days</span>
                  <strong className="text-[#102B46]">{doctor.availableDays.join(', ')}</strong>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E1EAF0] text-[#1769AA] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#6B7E8E] block">Clinical Inquiries</span>
                  <span className="text-[#102B46] font-medium truncate block max-w-[140px]">{doctor.contactEmail}</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={`/medora/appointment?doctor=${doctor.slug}&dept=${doctor.departmentSlug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1769AA] hover:bg-[#125388] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment with {doctor.name}</span>
              </Link>

              {department && (
                <Link
                  to={`/medora/departments/${department.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F8FBFD] hover:bg-[#EAF5FC] text-[#102B46] hover:text-[#1769AA] text-sm font-bold border border-[#E1EAF0] transition-colors"
                >
                  <Building2 className="w-4 h-4 text-[#18A9A0]" />
                  <span>Explore {department.name}</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Areas of Practice & Clinical Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Areas of Practice (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E1EAF0] shadow-2xs space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#102B46]">
              Clinical Areas of Practice
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7E8E] leading-relaxed">
              Dr. {doctor.name.split(' ').slice(1).join(' ')} accepts patient consultations for the following diagnostic and therapeutic conditions:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {doctor.areasOfPractice.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FBFD] border border-[#E1EAF0] text-xs font-semibold text-[#183047]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#18A9A0] shrink-0 mt-0.5" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-[#EAF5FC] border border-[#1769AA]/15 text-xs text-[#183047]/90 leading-relaxed flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
              <span>
                Demonstration Profile: Doctor profiles on Medora are fictional prototypes showcasing healthcare directory architecture. Specific appointment dates and times are subject to demonstration availability.
              </span>
            </div>
          </div>

          {/* Associated Department Overview Card (5 cols) */}
          {department && (
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E1EAF0] shadow-2xs space-y-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#18A9A0] block">
                AFFILIATED DEPARTMENT
              </span>
              <h3 className="text-xl font-bold text-[#102B46]">
                {department.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7E8E] leading-relaxed">
                {department.shortDesc}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#E1EAF0]">
                <span className="text-xs font-bold text-[#102B46] block">Department Capabilities:</span>
                {department.services.slice(0, 3).map((s) => (
                  <div key={s} className="text-xs text-[#6B7E8E] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18A9A0]"></span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to={`/medora/departments/${department.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769AA] hover:text-[#18A9A0] transition-colors"
                >
                  <span>Explore full department services</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Other Specialists */}
        <div className="pt-8 border-t border-[#E1EAF0]">
          <div className="mb-8">
            <span className="text-xs font-bold text-[#18A9A0] uppercase tracking-wider">
              MORE SPECIALISTS
            </span>
            <h3 className="text-2xl font-bold text-[#102B46] mt-1">
              Explore Other Medical Faculty
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
