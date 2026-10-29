import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, Cpu, Heart, Sparkles } from 'lucide-react';
import { ToothIcon } from '../common/ToothIcon';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative w-full lg:h-[calc(100vh-76px)] min-h-[580px] lg:min-h-0 bg-[#FAFCFB] overflow-hidden flex flex-col justify-center py-8 lg:py-2">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 right-0 w-[460px] h-[460px] bg-[#E6F6F2]/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[#F0F8F6]/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F6F2] border border-[#0D9488]/20 text-[#0D9488]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-wider">
                HEALTHY SMILES · BRIGHTER FUTURES
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem] font-extrabold text-[#152B32] tracking-tight leading-[1.14]"
            >
              Modern Dental Care for a Healthier,{' '}
              <span className="text-[#0D9488] relative inline-block">
                Brighter Smile.
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.6, duration: 0.6, ease: 'circOut' }}
                  className="absolute bottom-1 left-0 h-2.5 bg-[#E6F6F2] -z-10 rounded-sm"
                />
              </span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-sm sm:text-base lg:text-[1.05rem] text-[#5E7379] leading-relaxed max-w-xl font-normal"
            >
              We provide comprehensive dental care with modern technology, experienced professionals, and a gentle approach to keeping your smile healthy and beautiful.
            </motion.p>

            {/* Primary & Secondary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <Link
                to="/dental/appointment"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-[#0D9488] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#115E59] shadow-md shadow-[#0D9488]/20 transition-all duration-300 group"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/dental/services"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white border border-[#E3ECE9] text-[#152B32] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#F0F8F6] hover:border-[#0D9488]/30 shadow-xs transition-all duration-300"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* 3 Small Benefits Under Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-4 sm:pt-5 border-t border-[#E3ECE9] grid grid-cols-1 sm:grid-cols-3 gap-3.5"
            >
              <div className="flex items-center gap-2.5 text-xs text-[#152B32] font-semibold">
                <div className="w-7 h-7 rounded-full bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Experienced Dental Specialists</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#152B32] font-semibold">
                <div className="w-7 h-7 rounded-full bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <span>Modern Digital Technology</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#152B32] font-semibold">
                <div className="w-7 h-7 rounded-full bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <span>Comfortable & Gentle Care</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Patient Photography with Floating Cards */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
              className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none w-full"
            >
              {/* Main Visual Frame with Soft Mint Backdrop Shape */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[340px] sm:h-[400px] lg:h-[450px] xl:h-[480px] w-full bg-[#E6F6F2]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                  alt="Smiling patient receiving gentle modern dental care"
                  className="w-full h-full object-cover"
                />

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#152B32]/35 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge Card 1 (Top Left): "Your Smile, Our Priority" */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-3.5 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md border border-[#E3ECE9] rounded-2xl py-2.5 px-3.5 shadow-xl flex items-center gap-2.5 z-10"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0D9488] text-white flex items-center justify-center shadow-xs shrink-0">
                  <ToothIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#0D9488] block leading-none">
                    Our Promise
                  </span>
                  <span className="text-xs font-extrabold text-[#152B32] mt-0.5 block">
                    Your Smile, Our Priority.
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge Card 2 (Bottom Right): Gentle Approach */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="absolute -bottom-3.5 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#E3ECE9] rounded-2xl py-2.5 px-3.5 shadow-xl flex items-center gap-2.5 z-10"
              >
                <div className="w-8 h-8 rounded-full bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-[#0D9488]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#687A80] block leading-none">
                    Patient Experience
                  </span>
                  <span className="text-xs font-bold text-[#152B32] mt-0.5 block">
                    Fear-Free Gentle Techniques
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
