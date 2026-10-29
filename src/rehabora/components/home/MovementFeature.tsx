import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Shield, Activity } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export function MovementFeature() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#285A49] text-white overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#72A88A]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#193D32]/80 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#193D32] text-[#D4E5D9] border border-[#72A88A]/40 mb-4">
              <Activity className="w-3.5 h-3.5 text-[#D8A66A]" />
              PHYSICAL EMPOWERMENT &amp; RESILIENCE
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Small steps.
              <br />
              <span className="text-[#D4E5D9]">Meaningful movement.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              Discover general movement and rehabilitation services designed around individual needs and goals. Whether rebuilding mobility after rest or refining movement efficiency for daily tasks, steady consistency creates lasting change.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#193D32]/60 border border-[#72A88A]/30">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                  <Compass className="w-4 h-4 text-[#D8A66A]" />
                  Goal-Oriented Pathways
                </div>
                <p className="text-xs text-white/70">
                  Focusing on practical life activities — climbing stairs, gardening, sport, or walking with ease.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#193D32]/60 border border-[#72A88A]/30">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                  <Shield className="w-4 h-4 text-[#D8A66A]" />
                  Clinician-Supervised
                </div>
                <p className="text-xs text-white/70">
                  Safe progression calibrated to joint tolerance and tissue recovery timelines.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/rehabora/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold bg-white text-[#285A49] hover:bg-[#FAFBF8] transition-all shadow-md hover:-translate-y-0.5"
              >
                Browse Services Directory
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/rehabora/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-white hover:text-[#D4E5D9] transition-colors"
              >
                Read About Our Philosophy
              </Link>
            </div>

            <p className="mt-6 text-[11px] text-white/60">
              * Note: Movement programs are designed following professional clinical consultation and are not generic medical prescriptions.
            </p>
          </motion.div>

          {/* Editorial Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5] bg-[#193D32]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
                alt="Patient performing supervised functional mobility movement in bright clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold text-[#D8A66A] tracking-wider uppercase block">
                  Movement Confidence
                </span>
                <p className="font-heading text-lg font-bold text-white mt-1">
                  Active guidance tailored to your natural pace
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MovementFeature;
