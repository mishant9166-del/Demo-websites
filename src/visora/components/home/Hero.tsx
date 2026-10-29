import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Glasses, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#F7F5EF]">
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E4E4DE_1px,transparent_1px),linear-gradient(to_bottom,#E4E4DE_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-sans font-medium tracking-[0.16em] uppercase bg-white text-[#15263B] border border-[#E4E4DE] w-fit mb-6 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#5C9995]" />
              VISION CARE &amp; CURATED OPTICAL ATELIER
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#15263B] tracking-tight leading-[1.12]"
            >
              See the world in a{' '}
              <span className="italic text-[#5C9995]">different light.</span>
            </motion.h1>

            {/* Supporting paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-[#687581] font-sans leading-relaxed max-w-xl"
            >
              Thoughtful eye care, advanced vision testing, and eyewear chosen to fit the way you see and live. Crafted for clarity, comfort, and enduring character.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/visora/book-appointment"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide bg-[#15263B] text-white hover:bg-[#5C9995] transition-all shadow-md hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-[#5C9995]" />
                <span>Book an Eye Test</span>
              </Link>

              <Link
                to="/visora/eyewear"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide bg-white text-[#15263B] hover:text-[#5C9995] border border-[#E4E4DE] hover:border-[#5C9995] transition-all shadow-xs hover:-translate-y-0.5"
              >
                <Glasses className="w-4 h-4 text-[#5C9995]" />
                <span>Explore Eyewear</span>
              </Link>
            </motion.div>

            {/* Three Understated Trust Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-[#E4E4DE] grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E4E4DE] text-[#15263B] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#5C9995]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#15263B]">
                    Comprehensive Exams
                  </h4>
                  <p className="text-[11px] text-[#687581] mt-0.5">
                    50-minute clinical refractions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E4E4DE] text-[#15263B] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#5C9995]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#15263B]">
                    Specialist Team
                  </h4>
                  <p className="text-[11px] text-[#687581] mt-0.5">
                    Licensed vision clinicians
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E4E4DE] text-[#15263B] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#5C9995]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#15263B]">
                    Curated Optical
                  </h4>
                  <p className="text-[11px] text-[#687581] mt-0.5">
                    Titanium &amp; bio-acetate
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Visual Asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Refined editorial framing */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=80"
                  alt="Adult wearing modern handcrafted optical frames in soft natural studio light"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15263B]/60 via-transparent to-transparent" />

                {/* Overlaid caption */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#5C9995] block">
                    Atelier Spotlight
                  </span>
                  <p className="font-display text-lg text-white mt-0.5 leading-snug">
                    Pure Japanese Titanium &amp; Organic Acetate
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    Precision glazed to your unique corneal geometry.
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-5 sm:-bottom-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#E4E4DE] rounded-2xl p-4 shadow-xl max-w-[240px] sm:max-w-[260px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#15263B] text-white flex items-center justify-center shrink-0">
                    <Glasses className="w-4 h-4 text-[#5C9995]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#5C9995] block">
                      Digital Eye Ergonomics
                    </span>
                    <p className="text-xs font-semibold text-[#15263B] leading-tight">
                      Blue-Defense &amp; Occupational Optics
                    </p>
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
