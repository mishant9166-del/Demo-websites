import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { dermoraConfig } from '../../config/site';

export function HomeCta() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#F0E9DF] text-[#292A27] border-b border-[#E4DED4]">
      {/* Subtle organic background shapes */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#9BAA96]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#B77962]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DED4] text-[#38473A] text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-6 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#B77962]" />
          <span>YOUR SKIN JOURNEY</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#292A27] leading-[1.12] mb-6">
          Make space for <span className="italic text-[#B77962]">better</span> skin care.
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#77766F] max-w-2xl mx-auto leading-relaxed mb-10">
          Explore the services, discover the approach, and prepare for a conversation with a qualified skin-care professional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/dermora/appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#38473A] hover:bg-[#292A27] text-white text-sm font-sans font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-[#9BAA96]" />
            <span>Request a Consultation</span>
          </Link>

          <Link
            to="/dermora/treatments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#FAF7F2] text-[#292A27] text-sm font-sans font-medium border border-[#E4DED4] shadow-2xs transition-all duration-200"
          >
            <span>Explore Treatments</span>
            <ArrowRight className="w-4 h-4 text-[#B77962]" />
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E4DED4]/70 flex flex-wrap items-center justify-center gap-6 text-xs text-[#77766F] font-sans">
          <span>In-Person Consultations by Appointment</span>
          <span>•</span>
          <span>Phone: {dermoraConfig.contact.phone}</span>
          <span>•</span>
          <span>Evidence-Based Dermatology</span>
        </div>
      </div>
    </section>
  );
}
