import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { medoraConfig } from '../../config/site';

export function HomeCta() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-[#102B46] via-[#1769AA] to-[#102B46] text-white">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#18A9A0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#1769AA]/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#18A9A0] text-xs font-bold tracking-wider uppercase mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>TAKE THE FIRST STEP</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
          Your Health Matters.{' '}
          <span className="text-[#18A9A0]">Start Here.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#EAF5FC]/90 max-w-2xl mx-auto leading-relaxed mb-10">
          Whether you need a routine health audit, a specialist consultation, or comprehensive diagnostic imaging, our compassionate clinical team is ready to care for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/medora/appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#EAF5FC] text-[#102B46] text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5 text-[#1769AA]" />
            <span>Book Appointment</span>
          </Link>

          <Link
            to="/medora/departments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-base font-bold border border-white/30 backdrop-blur-md transition-all duration-200"
          >
            <span>Explore Departments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#EAF5FC]/70">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#18A9A0]" />
            <span>General Inquiry: {medoraConfig.contact.generalPhone}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#18A9A0]"></span>
            <span>Emergency & Trauma: 24/7 Priority Bay</span>
          </div>
        </div>
      </div>
    </section>
  );
}
