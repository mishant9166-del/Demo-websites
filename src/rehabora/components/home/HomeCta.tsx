import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export function HomeCta() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFBF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#E8F2EC] via-[#D4E5D9]/70 to-[#E8F2EC] border border-[#D4E5D9] overflow-hidden p-8 sm:p-12 lg:p-16 shadow-sm">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/40 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[#72A88A]/20 blur-xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#285A49] shadow-xs mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#D8A66A]" />
                BEGIN YOUR RECOVERY
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242C28] tracking-tight leading-tight">
                Your next step starts with a{' '}
                <span className="text-[#285A49]">conversation.</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#242C28]/80 leading-relaxed max-w-xl">
                Explore our services and learn how a professional consultation can help you understand your options, establish baseline goals, and build movement confidence.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-[#242C28]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#285A49]" />
                  <span>No referral required for initial evaluation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#285A49]" />
                  <span>Comprehensive 45-60 min assessments</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/rehabora/appointment"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-all shadow-md hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-[#D8A66A]" />
                  Request a Consultation
                </Link>

                <Link
                  to="/rehabora/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold bg-white text-[#242C28] hover:text-[#285A49] border border-[#E1E8E2] hover:border-[#72A88A] transition-all shadow-xs hover:-translate-y-0.5"
                >
                  Explore Services
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Editorial Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[4/3] bg-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
                  alt="Adult performing supervised movement activity in wellness environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCta;
