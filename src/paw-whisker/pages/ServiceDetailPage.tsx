import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { VET_SERVICES } from '../data/services';
import { ServiceCard } from '../components/services/ServiceCard';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = VET_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4 space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#F0D9CA] text-[#C76F52] flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="font-fraunces text-3xl font-bold text-[#343D30]">
          Service Not Found
        </h1>
        <p className="text-sm text-[#343D30]/80">
          The veterinary service you are looking for does not exist or has been renamed.
        </p>
        <Link
          to="/paw-whisker/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#C76F52] text-white text-sm font-semibold hover:bg-[#b05d42] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Services</span>
        </Link>
      </div>
    );
  }

  // Related services (exclude current)
  const relatedServices = VET_SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back navigation & Category */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            to="/paw-whisker/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#82947A] hover:text-[#343D30] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#82947A]/15 text-[#343D30] border border-[#82947A]/30">
            {service.category}
          </span>
        </div>

        {/* Hero Section of the Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-[#343D30] tracking-tight leading-tight">
              {service.name}
            </h1>
            <p className="text-base sm:text-lg text-[#343D30]/85 font-normal leading-relaxed">
              {service.shortDescription}
            </p>

            {/* Quick Specs Pill */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#343D30]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#E8DFD1]">
                <Clock className="w-4 h-4 text-[#82947A]" />
                <span>Appointment Duration: <strong>{service.duration}</strong></span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#E8DFD1]">
                <Sparkles className="w-4 h-4 text-[#C76F52]" />
                <span>Recommended: <strong>{service.recommendedFor}</strong></span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/paw-whisker/book-visit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#C76F52] text-white text-sm font-bold shadow-sm hover:bg-[#b05d42] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment for {service.name}</span>
              </Link>
              <Link
                to="/paw-whisker/new-patients"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-[#343D30] border border-[#E8DFD1] text-sm font-semibold hover:bg-[#F0D9CA]/30 transition-colors"
              >
                <span>First Visit Info</span>
              </Link>
            </div>
          </div>

          {/* Service Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[4/3] bg-white">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-[#343D30]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                Fear-Free Gentle Exam
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections: Overview, What to Expect, Preparation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {/* Detailed Description */}
            <div className="bg-white p-8 rounded-3xl border border-[#E8DFD1] space-y-4">
              <h2 className="font-fraunces text-2xl font-bold text-[#343D30]">
                Overview &amp; Clinical Approach
              </h2>
              <p className="text-sm sm:text-base text-[#343D30]/85 leading-relaxed font-normal">
                {service.detailedDescription}
              </p>
            </div>

            {/* What to Expect Step-by-Step */}
            <div className="bg-white p-8 rounded-3xl border border-[#E8DFD1] space-y-6">
              <h2 className="font-fraunces text-2xl font-bold text-[#343D30] flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#82947A]" />
                What to Expect During Your Visit
              </h2>
              <div className="space-y-4">
                {service.whatToExpect.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#FBF5EA] border border-[#E8DFD1]/80">
                    <span className="w-7 h-7 rounded-full bg-[#82947A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm text-[#343D30]/85 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Guidance */}
            <div className="bg-[#F0D9CA]/40 p-8 rounded-3xl border border-[#E8DFD1] space-y-4">
              <h2 className="font-fraunces text-xl font-bold text-[#343D30] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C76F52]" />
                How to Prepare Your Pet
              </h2>
              <p className="text-sm text-[#343D30]/85 leading-relaxed">
                {service.preparation}
              </p>
            </div>

            {/* Frequently Asked Questions */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-[#E8DFD1] space-y-6">
                <h2 className="font-fraunces text-2xl font-bold text-[#343D30] flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#C76F52]" />
                  Common Questions About {service.name}
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#FBF5EA] border border-[#E8DFD1] space-y-2">
                      <h4 className="font-fraunces text-base font-bold text-[#343D30]">
                        {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#343D30]/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Booking card & Clinic Reassurances */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#343D30] text-[#FBF5EA] space-y-6 sticky top-28">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#82947A]">
                  Ready to book?
                </span>
                <h3 className="font-fraunces text-2xl font-bold text-white">
                  Schedule this consultation
                </h3>
                <p className="text-xs text-[#FBF5EA]/80 leading-relaxed">
                  Choose a preferred date and time slot. Our team will review your companion’s history and ensure calm handling.
                </p>
              </div>

              <div className="space-y-3 border-t border-[#82947A]/30 pt-4 text-xs text-[#FBF5EA]/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C76F52]" />
                  <span>No rushed handling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C76F52]" />
                  <span>Upfront estimates before diagnostics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C76F52]" />
                  <span>Treat rewards &amp; positive reinforcement</span>
                </div>
              </div>

              <Link
                to="/paw-whisker/book-visit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#C76F52] text-white text-sm font-bold shadow-md hover:bg-[#b05d42] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Visit</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="pt-8 border-t border-[#E8DFD1] space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-fraunces text-2xl font-bold text-[#343D30]">
              Related Veterinary Services
            </h3>
            <Link
              to="/paw-whisker/services"
              className="text-xs font-bold text-[#C76F52] flex items-center gap-1 hover:underline"
            >
              <span>View all services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <ServiceCard key={rel.id} service={rel} variant="compact" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
