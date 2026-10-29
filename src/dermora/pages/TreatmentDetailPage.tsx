import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { treatments } from '../data/treatments';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export function TreatmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    return <Navigate to="/dermora/treatments" replace />;
  }

  // Related treatments in the same category or overall
  const relatedTreatments = treatments
    .filter((t) => t.slug !== treatment.slug && t.category === treatment.category)
    .slice(0, 3);

  return (
    <div className="py-10 sm:py-16 bg-[#FAF7F2] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-sans font-medium text-[#77766F]">
          <Link
            to="/dermora/treatments"
            className="hover:text-[#38473A] flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Treatments</span>
          </Link>
          <span>/</span>
          <span className="text-[#38473A]">{treatment.title}</span>
        </div>

        {/* Hero Banner Card */}
        <div className="bg-white rounded-3xl border border-[#E4DED4] overflow-hidden shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
          {/* Details (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E9DF] text-[#38473A] text-xs font-sans font-semibold uppercase tracking-wider border border-[#E4DED4]">
              <span>{treatment.category}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#292A27] tracking-tight leading-tight">
              {treatment.title}
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#77766F] leading-relaxed">
              {treatment.shortDesc}
            </p>

            <div className="flex items-center gap-6 py-2 text-xs font-sans text-[#77766F]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B77962]" />
                <span>Typical Duration: <strong className="text-[#292A27]">{treatment.durationMinutes}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#9BAA96]" />
                <span>Suitable for: <strong className="text-[#292A27]">{treatment.suitableFor}</strong></span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={`/dermora/appointment?treatment=${treatment.slug}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#38473A] hover:bg-[#292A27] text-white text-xs sm:text-sm font-sans font-medium shadow-xs hover:shadow-sm transition-all"
              >
                <Calendar className="w-4 h-4 text-[#9BAA96]" />
                <span>Request Consultation for This Treatment</span>
              </Link>
            </div>
          </div>

          {/* Image (5 cols) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#E4DED4] shadow-xs bg-[#F0E9DF]">
            <ImageWithFallback
              src={treatment.heroImage}
              alt={treatment.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Overview & What Consultation Involves */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E4DED4] shadow-2xs space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#292A27]">
                Clinical Overview
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#77766F] leading-relaxed">
                {treatment.overview}
              </p>
            </div>

            {/* Common Reasons */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E4DED4] shadow-2xs space-y-4">
              <h2 className="font-serif text-2xl font-normal text-[#292A27] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#B77962]" />
                Common Reasons for Seeking Consultation
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-sans">
                {treatment.commonReasons.map((reason) => (
                  <div
                    key={reason}
                    className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E4DED4] text-xs font-medium text-[#292A27] flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B77962] shrink-0 mt-1.5" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Questions to Ask */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E4DED4] shadow-2xs space-y-4">
              <h2 className="font-serif text-2xl font-normal text-[#292A27] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#9BAA96]" />
                Questions to Ask Your Dermatologist
              </h2>
              <ul className="space-y-2.5 font-sans pt-2">
                {treatment.questionsToAsk.map((q) => (
                  <li
                    key={q}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F0E9DF]/40 border border-[#E4DED4] text-xs sm:text-sm text-[#292A27]"
                  >
                    <span className="font-serif italic font-bold text-[#38473A] text-sm shrink-0">Q.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Medical Disclaimer */}
            <div className="p-5 rounded-2xl bg-[#F0E9DF] border border-[#E4DED4] flex items-start gap-3.5 font-sans text-xs sm:text-sm text-[#292A27]/90 leading-relaxed">
              <AlertCircle className="w-5 h-5 text-[#B77962] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#38473A] font-bold mb-1">
                  General Educational Notice
                </strong>
                The information provided regarding this treatment is educational in nature. Individual skin suitability, barrier resilience, and treatment frequency must always be evaluated in person by a qualified dermatologist.
              </div>
            </div>
          </div>

          {/* Right Column: What Consultation Includes (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E4DED4] shadow-2xs font-sans space-y-5">
              <h3 className="font-serif text-xl sm:text-2xl text-[#292A27]">
                What Your Consultation Involves
              </h3>
              <p className="text-xs text-[#77766F] leading-relaxed">
                During this appointment, your dermatologist will conduct the following clinical assessments:
              </p>

              <ul className="space-y-3 pt-2">
                {treatment.consultationIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E4DED4] text-xs sm:text-sm font-medium text-[#292A27]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#9BAA96] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-[#E4DED4]">
                <Link
                  to={`/dermora/appointment?treatment=${treatment.slug}`}
                  className="w-full py-3.5 px-4 rounded-full bg-[#38473A] hover:bg-[#292A27] text-white font-medium text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#9BAA96]" />
                  <span>Book Initial Assessment</span>
                </Link>
              </div>
            </div>

            {/* Department FAQs if available */}
            {treatment.faqs && treatment.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E4DED4] shadow-2xs space-y-4">
                <h3 className="font-serif text-xl text-[#292A27]">
                  Treatment FAQs
                </h3>
                <div className="space-y-3 font-sans">
                  {treatment.faqs.map((faq) => (
                    <div key={faq.question} className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E4DED4]">
                      <h4 className="text-xs font-semibold text-[#292A27] mb-1">{faq.question}</h4>
                      <p className="text-[11px] text-[#77766F] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Treatments */}
        {relatedTreatments.length > 0 && (
          <div className="pt-8 border-t border-[#E4DED4]">
            <h3 className="font-serif text-2xl font-normal text-[#292A27] mb-6">
              Related Clinical Treatments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedTreatments.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/dermora/treatments/${rel.slug}`}
                  className="p-5 rounded-3xl bg-white border border-[#E4DED4] hover:border-[#9BAA96] shadow-2xs transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#B77962]">
                      {rel.category}
                    </span>
                    <h4 className="font-serif text-xl text-[#292A27] group-hover:text-[#38473A] transition-colors mt-1">
                      {rel.title}
                    </h4>
                    <p className="font-sans text-xs text-[#77766F] line-clamp-2 mt-1">{rel.shortDesc}</p>
                  </div>
                  <span className="font-sans text-xs font-medium text-[#38473A] mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore details</span>
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
