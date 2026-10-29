import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FBF5EA] pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle organic background accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F0D9CA]/40 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#82947A]/10 rounded-full blur-3xl -z-10 pointer-events-none -translate-x-1/4 translate-y-1/4"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#82947A]/15 border border-[#82947A]/30 text-xs sm:text-sm font-semibold text-[#343D30]">
              <Sparkles className="w-4 h-4 text-[#C76F52]" />
              <span>Welcoming dogs, cats &amp; small companions in Portland</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#343D30] tracking-tight leading-[1.08]">
                Care that makes <br className="hidden sm:inline" />
                <span className="text-[#C76F52] italic font-serif">tails wag</span> and{' '}
                <span className="text-[#82947A]">purrs happen.</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#343D30]/85 font-normal max-w-xl leading-relaxed">
                From first puppy vaccinations to gentle senior pet wellness, our independent clinic treats every animal with patience, warmth, and low-stress care.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/paw-whisker/book-visit"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#C76F52] text-white text-base font-semibold shadow-sm hover:bg-[#b05d42] active:scale-[0.98] transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Visit</span>
              </Link>
              <Link
                to="/paw-whisker/our-vets"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white text-[#343D30] border border-[#E8DFD1] text-base font-semibold hover:bg-[#F0D9CA]/30 transition-all shadow-sm"
              >
                <span>Meet Our Vets</span>
                <ArrowRight className="w-4 h-4 text-[#82947A]" />
              </Link>
            </div>

            {/* Trust Details: Honest & Authentic */}
            <div className="pt-6 border-t border-[#E8DFD1] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#343D30]/85">
                <CheckCircle2 className="w-4 h-4 text-[#82947A] shrink-0" />
                <span>Fear-Free gentle handling</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#343D30]/85">
                <CheckCircle2 className="w-4 h-4 text-[#82947A] shrink-0" />
                <span>Separate cat &amp; dog areas</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#343D30]/85">
                <CheckCircle2 className="w-4 h-4 text-[#82947A] shrink-0" />
                <span>Clear, upfront treatment plans</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Natural Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative warm shape outline */}
              <div
                className="absolute inset-0 rounded-[2.5rem] bg-[#82947A]/20 transform rotate-2 translate-x-2 translate-y-2 -z-10"
                aria-hidden="true"
              />

              {/* Main Photo: Veterinarian examining gentle companion dog */}
              <div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl bg-white aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80"
                  alt="Veterinarian performing gentle health check on a relaxed golden dog"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Reassuring Pill */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-3xl border border-[#E8DFD1] shadow-lg max-w-[260px] hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F0D9CA] text-[#C76F52] flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="font-fraunces font-bold text-sm text-[#343D30]">
                    Thoughtful care
                  </div>
                  <div className="text-xs text-[#82947A] mt-0.5">
                    From nose to tail, every visit is at your pet’s pace.
                  </div>
                </div>
              </div>

              {/* Organic Badge on Top Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#343D30] text-[#FBF5EA] px-4 py-2.5 rounded-2xl shadow-md border border-[#82947A]/30 text-xs font-semibold">
                <span>Portland, OR • Est. 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
