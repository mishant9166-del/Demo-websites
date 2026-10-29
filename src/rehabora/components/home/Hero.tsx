import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, CheckCircle2, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-[#FAFBF8]">
      {/* Subtle organic background decoration */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#E8F2EC]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#D4E5D9]/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E8F2EC] text-[#285A49] border border-[#D4E5D9] w-fit mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D8A66A]" />
              PERSONALIZED PHYSIOTHERAPY &amp; REHABILITATION
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#242C28] tracking-tight leading-[1.12]"
            >
              <span className="text-[#285A49]">Move With Confidence.</span>
              <br />
              Live Without Limits.
            </motion.h1>

            {/* Supporting paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-[#727C75] max-w-2xl leading-relaxed"
            >
              Discover personalized rehabilitation and movement-focused care designed to support your journey toward greater strength, mobility, and confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/rehabora/services"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/rehabora/practitioners"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-white text-[#242C28] hover:text-[#285A49] border border-[#E1E8E2] hover:border-[#72A88A] transition-all hover:-translate-y-0.5"
              >
                <Users className="w-4 h-4 text-[#72A88A]" />
                Meet Our Team
              </Link>
            </motion.div>

            {/* 3 Compact Value Statements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-[#E1E8E2] grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8F2EC] flex items-center justify-center text-[#285A49] shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#242C28]">Individualized Care</h4>
                  <p className="text-[11px] text-[#727C75]">Assessment-led plans</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8F2EC] flex items-center justify-center text-[#285A49] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#242C28]">Movement-Focused</h4>
                  <p className="text-[11px] text-[#727C75]">Functional progression</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8F2EC] flex items-center justify-center text-[#285A49] shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#242C28]">Supportive Space</h4>
                  <p className="text-[11px] text-[#727C75]">Reassuring guidance</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual with Clipping & Floating Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative accent frames */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#72A88A]/20 via-[#D4E5D9]/30 to-[#FAFBF8] -rotate-1 -z-10" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] bg-[#E8F2EC]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                  alt="Supervised rehabilitation exercise session at Rehabora"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Label / Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-5 sm:-bottom-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#E1E8E2] rounded-2xl p-4 shadow-xl max-w-[260px] sm:max-w-[280px]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#285A49] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Sparkles className="w-4 h-4 text-[#D8A66A]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#72A88A] block">
                      Welcome to Rehabora
                    </span>
                    <p className="text-xs font-bold text-[#242C28] mt-0.5 leading-snug">
                      Your Movement Journey Starts Here
                    </p>
                    <span className="text-[11px] text-[#727C75] mt-1 block">
                      Evidence-informed practice
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
