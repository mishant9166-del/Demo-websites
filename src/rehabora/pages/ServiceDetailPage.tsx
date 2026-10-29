import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  Activity,
  CheckCircle2,
  Calendar,
  ArrowRight,
  HelpCircle,
  ShieldAlert,
  ArrowLeft,
  ChevronRight,
  ListChecks,
  Sparkles,
} from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';
import ServiceCard from '../components/services/ServiceCard';
import { services } from '../data/services';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/rehabora/services" replace />;
  }

  // Related services (exclude current)
  const relatedServices = services
    .filter((s) => s.id !== service.id && s.category === service.category)
    .concat(services.filter((s) => s.id !== service.id && s.category !== service.category))
    .slice(0, 3);

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
            <Link to="/rehabora/services" className="hover:text-[#285A49]">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-[#285A49] truncate max-w-xs sm:max-w-md">
              {service.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="pt-10 pb-14 bg-white border-b border-[#E1E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Title & Metadata */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F2EC] text-[#285A49] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#72A88A]" />
                {service.category}
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242C28] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#727C75] leading-relaxed">
                {service.overview}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-[#E1E8E2]">
                <div className="flex items-center gap-2 text-xs font-medium text-[#242C28]">
                  <Clock className="w-4 h-4 text-[#D8A66A]" />
                  <span>Session: {service.durationMinutes}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#242C28]">
                  <Activity className="w-4 h-4 text-[#285A49]" />
                  <span>Format: {service.sessionFormat}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to={`/rehabora/appointment?service=${service.slug}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#D8A66A]" />
                  Book Initial Assessment
                </Link>
                <Link
                  to="/rehabora/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-[#727C75] hover:text-[#285A49] bg-[#FAFBF8] border border-[#E1E8E2] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  All Services
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-[#E1E8E2] aspect-[4/3] bg-[#E8F2EC]">
                <ImageWithFallback
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Detailed Information */}
          <div className="lg:col-span-8 space-y-12">
            {/* Common Reasons for Seeking an Assessment */}
            <div className="bg-white rounded-3xl p-8 border border-[#E1E8E2] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center">
                  <ListChecks className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#242C28]">
                  Common Reasons for Seeking an Assessment
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#727C75] mb-6">
                Patients frequently consult our clinic for {service.title.toLowerCase()} when experiencing:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.commonReasons.map((reason, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#FAFBF8] border border-[#E1E8E2] flex items-start gap-2.5 text-xs text-[#242C28]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#285A49] shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What an Initial Consultation Involves */}
            <div className="bg-white rounded-3xl p-8 border border-[#E1E8E2] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#242C28]">
                  What Your Initial Consultation Involves
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#727C75] mb-6">
                Our initial sessions are focused on establishing a thorough, evidence-guided baseline:
              </p>
              <div className="space-y-3">
                {service.initialConsultationSteps.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFBF8] border border-[#E1E8E2]"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#285A49] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#242C28] leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* General Rehabilitation Approaches */}
            <div className="bg-[#FAFBF8] rounded-3xl p-8 border border-[#D4E5D9]">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#242C28] mb-4">
                Rehabilitation Approaches &amp; Modalities
              </h2>
              <p className="text-xs sm:text-sm text-[#727C75] mb-6">
                Depending on physical findings and tolerance levels, treatment modalities may incorporate:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.rehabilitationApproaches.map((approach, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-[#E1E8E2] text-xs font-medium text-[#285A49] flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#D8A66A] shrink-0" />
                    <span>{approach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Questions to Ask Your Physiotherapist */}
            <div className="bg-white rounded-3xl p-8 border border-[#E1E8E2] shadow-xs">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#242C28] mb-4">
                Helpful Questions to Ask During Your Visit
              </h2>
              <div className="space-y-2.5">
                {service.questionsToAsk.map((q, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#FAFBF8] border border-[#E1E8E2] text-xs text-[#242C28] flex items-center gap-2.5"
                  >
                    <HelpCircle className="w-4 h-4 text-[#72A88A] shrink-0" />
                    <span>"{q}"</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Specific FAQs */}
            {service.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-8 border border-[#E1E8E2] shadow-xs">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#242C28] mb-6">
                  Service FAQs
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#FAFBF8] border border-[#E1E8E2]">
                      <h4 className="font-heading text-sm font-bold text-[#242C28] mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-xs text-[#727C75] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Sidebar with CTA & Medical Disclaimer */}
          <div className="lg:col-span-4 space-y-6">
            {/* Consultation Request Box */}
            <div className="p-6 rounded-3xl bg-white border border-[#E1E8E2] shadow-sm sticky top-28">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F2EC] text-[#285A49] mb-3">
                Ready to take the next step?
              </span>
              <h3 className="font-heading text-lg font-bold text-[#242C28]">
                Request an Initial Evaluation
              </h3>
              <p className="mt-2 text-xs text-[#727C75] leading-relaxed">
                Connect with our clinical team to discuss your goals and begin your personalized rehabilitation pathway.
              </p>

              <div className="mt-5 space-y-2.5 pt-4 border-t border-[#E1E8E2]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#727C75]">Format:</span>
                  <span className="font-bold text-[#242C28]">{service.sessionFormat}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#727C75]">Duration:</span>
                  <span className="font-bold text-[#242C28]">{service.durationMinutes}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#727C75]">Referral:</span>
                  <span className="font-bold text-[#285A49]">Not Mandatory</span>
                </div>
              </div>

              <Link
                to={`/rehabora/appointment?service=${service.slug}`}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors shadow-xs"
              >
                Request Appointment
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Ethical Medical Disclaimer */}
              <div className="mt-6 p-4 rounded-xl bg-[#FAFBF8] border border-[#E1E8E2] flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-[#D8A66A] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#727C75] leading-relaxed">
                  <span className="font-semibold text-[#242C28]">Medical Disclaimer:</span> This page is for educational portfolio demonstration. No online content replaces direct clinical assessment by an appropriately qualified physiotherapist.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-20 pt-12 border-t border-[#E1E8E2]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#72A88A]">
                EXPLORE FURTHER
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#242C28] mt-1">
                Related Services
              </h3>
            </div>
            <Link
              to="/rehabora/services"
              className="text-xs font-bold text-[#285A49] hover:underline"
            >
              View All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel, idx) => (
              <ServiceCard key={rel.id} service={rel} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailPage;
