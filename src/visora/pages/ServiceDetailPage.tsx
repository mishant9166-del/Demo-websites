import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldAlert,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Cpu,
  Layers,
  HelpCircle,
} from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';
import ServiceCard from '../components/services/ServiceCard';
import { eyeServices } from '../data/services';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = eyeServices.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/visora/services" replace />;
  }

  const relatedServices = eyeServices
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

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
            <Link to="/visora/services" className="hover:text-[#15263B]">
              Eye Care Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-[#15263B] truncate max-w-xs sm:max-w-md">
              {service.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="pt-10 pb-14 bg-white border-b border-[#E4E4DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Title & Metadata */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-medium uppercase tracking-wider bg-[#F7F5EF] text-[#15263B] border border-[#E4E4DE] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5C9995]" />
                {service.category}
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#15263B] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="mt-4 text-base text-[#687581] font-sans leading-relaxed">
                {service.overview}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-[#E4E4DE]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#15263B]">
                  <Clock className="w-4 h-4 text-[#5C9995]" />
                  <span>Duration: {service.durationMinutes}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#15263B]">
                  <Layers className="w-4 h-4 text-[#5C9995]" />
                  <span>Cadence: {service.recommendedFrequency}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to={`/visora/book-appointment?service=${service.slug}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-[#5C9995]" />
                  <span>Book This Consultation</span>
                </Link>
                <Link
                  to="/visora/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-[#687581] hover:text-[#15263B] bg-[#F7F5EF] border border-[#E4E4DE] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>All Services</span>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-[#E4E4DE] aspect-[4/3] bg-[#F7F5EF]">
                <ImageWithFallback
                  src={service.image}
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
          {/* Left Column: Clinical Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* What to Expect */}
            <div className="bg-white rounded-3xl p-8 border border-[#E4E4DE] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center border border-[#E4E4DE]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="font-display text-2xl font-normal text-[#15263B]">
                  What Your Consultation Involves
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#687581] mb-6">
                Our examination suites are equipped for unhurried, comfortable testing tailored to your daily focal habits:
              </p>
              <div className="space-y-3">
                {service.whatToExpect.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F5EF] border border-[#E4E4DE]"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#15263B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#15263B] leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnostic Technology */}
            <div className="bg-white rounded-3xl p-8 border border-[#E4E4DE] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center border border-[#E4E4DE]">
                  <Cpu className="w-5 h-5" />
                </div>
                <h2 className="font-display text-2xl font-normal text-[#15263B]">
                  Diagnostic Instrumentation Utilized
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {service.diagnosticTechnology.map((tech, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E4E4DE] text-xs font-semibold text-[#15263B] flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#5C9995] shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable For */}
            <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#E4E4DE]">
              <h2 className="font-display text-2xl font-normal text-[#15263B] mb-4">
                Recommended For
              </h2>
              <div className="space-y-2.5">
                {service.suitableFor.map((aud, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white border border-[#E4E4DE] text-xs text-[#15263B] flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#5C9995] shrink-0" />
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Specific FAQs */}
            {service.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-8 border border-[#E4E4DE] shadow-xs">
                <h2 className="font-display text-2xl font-normal text-[#15263B] mb-6">
                  Common Questions Regarding This Service
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E4E4DE]">
                      <h4 className="font-display text-base text-[#15263B] mb-2 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#5C9995]" />
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-xs text-[#687581] leading-relaxed">
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
            <div className="p-6 rounded-3xl bg-white border border-[#E4E4DE] shadow-sm sticky top-28">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F7F5EF] text-[#5C9995] mb-3 border border-[#E4E4DE]">
                Private Suite Reservation
              </span>
              <h3 className="font-display text-xl text-[#15263B]">
                Schedule This Assessment
              </h3>
              <p className="mt-2 text-xs text-[#687581] leading-relaxed">
                Connect with our clinical desk to choose a time that fits your schedule in our quiet vision suites.
              </p>

              <div className="mt-5 space-y-2.5 pt-4 border-t border-[#E4E4DE] text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#687581]">Examination Time:</span>
                  <span className="font-bold text-[#15263B]">{service.durationMinutes}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#687581]">Referral Required:</span>
                  <span className="font-bold text-[#5C9995]">No Referral Needed</span>
                </div>
              </div>

              <Link
                to={`/visora/book-appointment?service=${service.slug}`}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors shadow-xs"
              >
                <span>Request Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Ethical Disclaimer */}
              <div className="mt-6 p-4 rounded-xl bg-[#F7F5EF] border border-[#E4E4DE] flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-[#5C9995] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#687581] leading-relaxed">
                  <span className="font-semibold text-[#15263B]">Portfolio Disclaimer:</span> Online service content does not substitute for licensed diagnostic evaluation by an optometrist or ophthalmologist.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-20 pt-12 border-t border-[#E4E4DE]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5C9995]">
                COMPREHENSIVE VISION CARE
              </span>
              <h3 className="font-display text-2xl text-[#15263B] mt-1">
                Other Eye Care Consultations
              </h3>
            </div>
            <Link
              to="/visora/services"
              className="text-xs font-semibold text-[#15263B] hover:text-[#5C9995]"
            >
              All Services →
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
