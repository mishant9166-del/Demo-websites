import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, UserCheck, HeartPulse, Building2 } from 'lucide-react';

export function Hero() {
  const benefits = [
    {
      title: 'Professional Consultations',
      desc: 'In-depth diagnostic assessment by licensed dermatologists',
      icon: UserCheck,
    },
    {
      title: 'Personalized Care Plans',
      desc: 'Formulations tailored to your individual barrier needs',
      icon: HeartPulse,
    },
    {
      title: 'Modern Clinical Environment',
      desc: 'Calm, discreet, and light-filled consultation suites',
      icon: Building2,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-[#E4DED4]">
      {/* Subtle organic background glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#9BAA96]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#B77962]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0E9DF] border border-[#E4DED4] text-[#38473A] text-xs font-sans font-semibold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#B77962]" />
              <span>SKIN HEALTH · EXPERT CARE</span>
            </div>

            {/* Editorial Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#292A27] tracking-tight leading-[1.08]">
              Feel{' '}
              <span className="italic text-[#B77962] font-medium relative inline-block">
                confident
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2 text-[#B77962]/35"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="2.5" fill="transparent" />
                </svg>
              </span>{' '}
              in the skin you&apos;re in.
            </h1>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-[#77766F] leading-relaxed max-w-xl">
              Discover thoughtful dermatology and skin-care services designed around your individual needs, with a focus on professional guidance and personalized consultations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                to="/dermora/treatments"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#38473A] hover:bg-[#292A27] text-white text-sm font-sans font-medium shadow-2xs hover:shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#9BAA96]" />
              </Link>

              <Link
                to="/dermora/specialists"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#F0E9DF] text-[#292A27] text-sm font-sans font-medium border border-[#E4DED4] transition-all duration-200"
              >
                <span>Meet Our Specialists</span>
              </Link>
            </div>

            {/* 3 Compact Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E4DED4]/80">
              {benefits.map((b) => {
                const IconComponent = b.icon;
                return (
                  <div key={b.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F0E9DF] text-[#38473A] flex items-center justify-center shrink-0 border border-[#E4DED4]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-sans font-semibold text-[#292A27]">
                        {b.title}
                      </h4>
                      <p className="text-[11px] text-[#77766F] mt-0.5 leading-snug">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Editorial Portrait & Floating Tag (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Asymmetrical Image Frame with Decorative Border */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-xl border border-[#E4DED4] bg-white p-2">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80"
                  alt="Adult woman with natural skin texture and soft daylight"
                  className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292A27]/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Brand Label */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-[#E4DED4] flex items-center gap-3.5 max-w-xs z-20"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F0E9DF] border border-[#E4DED4] text-[#38473A] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#B77962]" />
              </div>
              <div className="text-left font-sans">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#77766F] block">
                  Clinical Philosophy
                </span>
                <span className="text-sm font-serif italic font-semibold text-[#292A27] block leading-tight">
                  Care That Begins With Listening
                </span>
              </div>
            </motion.div>

            {/* Top Right Decorative Tag */}
            <div className="hidden sm:flex absolute -top-3 -right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E4DED4] items-center gap-2 shadow-sm font-sans text-xs text-[#38473A] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#9BAA96]" />
              <span>Evidence-Based Skin Health</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
