import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Users,
  Building2,
  ShieldAlert,
} from 'lucide-react';
import { departments } from '../data/departments';
import { doctors } from '../data/doctors';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { DoctorCard } from '../components/doctors/DoctorCard';

export function DepartmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const department = departments.find((d) => d.slug === slug);

  if (!department) {
    return <Navigate to="/medora/departments" replace />;
  }

  // Find doctors associated with this department
  const departmentDoctors = doctors.filter(
    (doc) => doc.departmentSlug === department.slug || department.doctorSlugs.includes(doc.slug)
  );

  // Other related departments in the same or complementary category
  const relatedDepartments = departments
    .filter((d) => d.slug !== department.slug && d.category === department.category)
    .slice(0, 3);

  return (
    <div className="py-10 sm:py-16 bg-[#F8FBFD] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Back Link & Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7E8E]">
          <Link
            to="/medora/departments"
            className="hover:text-[#1769AA] flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Departments</span>
          </Link>
          <span>/</span>
          <span className="text-[#1769AA]">{department.name}</span>
        </div>

        {/* Hero Header Section */}
        <div className="bg-white rounded-3xl border border-[#E1EAF0] overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
          {/* Details (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FC] text-[#1769AA] text-xs font-bold uppercase tracking-wider border border-[#1769AA]/15">
              <span>{department.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102B46] tracking-tight leading-tight">
              {department.name}
            </h1>

            <p className="text-base sm:text-lg text-[#6B7E8E] leading-relaxed">
              {department.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={`/medora/appointment?dept=${department.slug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1769AA] hover:bg-[#125388] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation in {department.name}</span>
              </Link>

              <Link
                to="/medora/doctors"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F8FBFD] hover:bg-[#EAF5FC] text-[#102B46] hover:text-[#1769AA] text-sm font-bold border border-[#E1EAF0] transition-colors"
              >
                <Users className="w-4 h-4 text-[#18A9A0]" />
                <span>View Department Specialists</span>
              </Link>
            </div>
          </div>

          {/* Image (5 cols) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#E1EAF0] shadow-xs">
            <ImageWithFallback
              src={department.heroImage}
              alt={department.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Department Overview & Services Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: Overview & Conditions Treated (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1EAF0] shadow-2xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#102B46] mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#1769AA]" />
                About {department.name}
              </h2>
              <p className="text-sm sm:text-base text-[#6B7E8E] leading-relaxed">
                {department.overview}
              </p>
            </div>

            {/* Conditions Treated */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1EAF0] shadow-2xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#102B46] mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#18A9A0]" />
                Conditions Commonly Treated
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {department.conditions.map((condition) => (
                  <div
                    key={condition}
                    className="p-3.5 rounded-xl bg-[#F8FBFD] border border-[#E1EAF0] text-xs font-semibold text-[#183047] flex items-center gap-2.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#18A9A0] shrink-0"></span>
                    <span>{condition}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Disclaimer Notice */}
            <div className="p-5 rounded-2xl bg-[#EAF5FC] border border-[#1769AA]/20 flex items-start gap-3 text-xs sm:text-sm text-[#183047]/90 leading-relaxed">
              <AlertCircle className="w-5 h-5 text-[#1769AA] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1769AA] mb-1 font-bold">
                  General Healthcare Notice
                </strong>
                The clinical information provided on this page is for general health education purposes and does not substitute for an in-person medical evaluation, diagnosis, or personalized treatment plan by a qualified physician.
              </div>
            </div>
          </div>

          {/* Right: Key Services Checklist (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1EAF0] shadow-2xs">
              <h3 className="text-lg sm:text-xl font-bold text-[#102B46] mb-4">
                Clinical Services & Diagnostics
              </h3>
              <p className="text-xs text-[#6B7E8E] mb-6">
                Our department offers the following diagnostic tests, therapeutic procedures, and follow-up clinics:
              </p>
              <ul className="space-y-3">
                {department.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FBFD] border border-[#E1EAF0]/60 text-xs sm:text-sm font-medium text-[#183047]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#18A9A0] shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#E1EAF0]">
                <Link
                  to={`/medora/appointment?dept=${department.slug}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#1769AA] hover:bg-[#125388] text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request an Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Department Doctors Section */}
        {departmentDoctors.length > 0 && (
          <div className="pt-8 border-t border-[#E1EAF0]">
            <div className="mb-8">
              <span className="text-xs font-bold text-[#18A9A0] uppercase tracking-wider">
                CLINICAL FACULTY
              </span>
              <h3 className="text-2xl font-bold text-[#102B46] mt-1">
                Specialists in {department.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentDoctors.map((doc) => (
                <DoctorCard key={doc.id} doctor={doc} />
              ))}
            </div>
          </div>
        )}

        {/* Department-Specific FAQs */}
        {department.faqs && department.faqs.length > 0 && (
          <div className="pt-8 border-t border-[#E1EAF0]">
            <div className="mb-8">
              <span className="text-xs font-bold text-[#1769AA] uppercase tracking-wider">
                COMMON INQUIRIES
              </span>
              <h3 className="text-2xl font-bold text-[#102B46] mt-1 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#1769AA]" />
                Frequently Asked Questions — {department.name}
              </h3>
            </div>

            <div className="space-y-4 max-w-4xl">
              {department.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E1EAF0] shadow-2xs"
                >
                  <h4 className="text-base font-bold text-[#102B46] mb-2">{faq.question}</h4>
                  <p className="text-xs sm:text-sm text-[#6B7E8E] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Specialties */}
        {relatedDepartments.length > 0 && (
          <div className="pt-8 border-t border-[#E1EAF0]">
            <h3 className="text-lg font-bold text-[#102B46] mb-6">Related Medical Departments</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedDepartments.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/medora/departments/${rel.slug}`}
                  className="p-5 rounded-2xl bg-white border border-[#E1EAF0] hover:border-[#1769AA] shadow-2xs transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#18A9A0]">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-[#102B46] group-hover:text-[#1769AA] transition-colors mt-1">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-[#6B7E8E] line-clamp-2 mt-1">{rel.shortDesc}</p>
                  </div>
                  <span className="text-xs font-bold text-[#1769AA] mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
