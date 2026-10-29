import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { ToothIcon } from '../common/ToothIcon';

export function CallToAction() {
  return (
    <section className="py-20 bg-[#FAFCFB] text-[#152B32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#115E59] to-[#0D9488] p-10 sm:p-16 text-white overflow-hidden shadow-xl">
          {/* Decorative Tooth Background Silhouette */}
          <div className="absolute -right-12 -bottom-12 text-white/5 pointer-events-none">
            <ToothIcon size={320} />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E6F6F2] block">
              SCHEDULE YOUR VISIT
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Your Healthier Smile Starts With a Conversation.
            </h2>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal">
              Explore our dental services and prepare your questions for a professional consultation with our caring clinicians.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/dental/appointment"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#115E59] text-xs font-bold uppercase tracking-wider hover:bg-[#E6F6F2] transition-colors shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>

              <Link
                to="/dental/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#115E59]/60 border border-white/30 text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] transition-colors"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
