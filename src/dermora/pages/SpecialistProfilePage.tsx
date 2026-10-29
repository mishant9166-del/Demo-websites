import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Sparkles, CheckCircle2, Info, User, ArrowRight } from 'lucide-react';
import { specialists } from '../data/specialists';
import { treatments } from '../data/treatments';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { TreatmentCard } from '../components/treatments/TreatmentCard';

export const SpecialistProfilePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const specialist = specialists.find((s) => s.slug === slug);

  if (!specialist) {
    return <Navigate to="/dermora/specialists" replace />;
  }

  // Get related treatments for this specialist
  const relatedTreatments = treatments.filter((t) =>
    specialist.associatedTreatmentSlugs.includes(t.slug)
  );

  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back navigation */}
        <Link
          to="/dermora/specialists"
          className="inline-flex items-center gap-2 text-xs font-medium text-[#77766F] hover:text-[#38473A] mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          Back to Specialists Directory
        </Link>

        {/* Profile Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#E4DED4] shadow-sm bg-white aspect-[4/5]">
              <ImageWithFallback
                src={specialist.portrait}
                alt={specialist.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-[#E4DED4] shadow-sm">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#B77962] block mb-1">
                  {specialist.specialty}
                </span>
                <p className="text-xs text-[#292A27] font-medium">
                  {specialist.title} · {specialist.roomNumber}
                </p>
                <div className="mt-2 pt-2 border-t border-[#E4DED4] flex items-center justify-between text-[11px] text-[#77766F]">
                  <span>Availability:</span>
                  <span className="font-medium text-[#38473A]">By Appointment · Mon-Fri</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Card */}
            <div className="mt-6 bg-[#F0E9DF] border border-[#E4DED4] rounded-2xl p-6 text-center">
              <h4 className="font-serif text-lg text-[#292A27] font-semibold mb-2">
                Consult with {specialist.name}
              </h4>
              <p className="text-xs text-[#77766F] mb-4">
                Schedule a personalized consultation to discuss your skin and hair concerns in a calm, attentive setting.
              </p>
              <Link
                to={`/dermora/appointment?specialist=${specialist.slug}`}
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-[#38473A] text-white text-xs font-semibold rounded-full hover:bg-[#292A27] transition shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Request Consultation
              </Link>
            </div>
          </div>

          {/* Right Column: Bio and Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B77962] mb-2 block">
                SPECIALIST PROFILE
              </span>
              <h1 className="font-serif text-4xl lg:text-5xl text-[#292A27] font-normal leading-tight">
                {specialist.name}
              </h1>
              <p className="text-lg text-[#38473A] font-serif italic mt-2">
                {specialist.title}
              </p>
            </div>

            {/* Biography */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E4DED4] shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#77766F] mb-4 flex items-center gap-2">
                <User className="w-4 h-4 text-[#38473A]" />
                Professional Background
              </h3>
              <p className="text-[#292A27] text-sm md:text-base leading-relaxed whitespace-pre-line font-light">
                {specialist.bio}
              </p>
            </div>

            {/* Consultation Approach */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E4DED4] shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#77766F] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B77962]" />
                Consultation Approach
              </h3>
              <p className="text-[#292A27] text-sm md:text-base leading-relaxed font-light">
                {specialist.consultationApproach}
              </p>
            </div>

            {/* Areas of Interest */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E4DED4] shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#77766F] mb-4">
                Clinical Focus & Areas of Interest
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialist.areasOfInterest.map((area, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#292A27]">
                    <CheckCircle2 className="w-4 h-4 text-[#9BAA96] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fictional disclaimer notice */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E4DED4] text-xs text-[#77766F] flex items-start gap-3">
              <Info className="w-4 h-4 text-[#77766F] shrink-0 mt-0.5" />
              <p>
                <strong>Portfolio Concept:</strong> This profile represents a fictional specialist designed for demo purposes. Credentials, names, and titles are illustrative and do not depict real practitioners.
              </p>
            </div>
          </div>
        </div>

        {/* Related Treatments Section */}
        {relatedTreatments.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E4DED4]">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#B77962] block mb-2">
                  SERVICES OFFERED
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-[#292A27]">
                  Treatments with {specialist.name}
                </h2>
              </div>
              <Link
                to="/dermora/treatments"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#38473A] hover:text-[#B77962]"
              >
                View all treatments
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialistProfilePage;
