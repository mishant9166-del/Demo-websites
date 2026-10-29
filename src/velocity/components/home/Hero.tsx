import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, ShieldCheck, FileText, UserCheck } from 'lucide-react';
import { formatCompactINR } from '../../lib/formatters';
import { vehicles } from '../../data/vehicles';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function Hero() {
  // Use the premier featured sports car for the floating spotlight panel
  const featuredVehicle = vehicles[0]; // Porsche 911 GT3 RS

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#080A0B] text-[#F5F7F7]">
      {/* Cinematic Background Image with Zoom Motion */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 7, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        {/* High-res cinematic sports car dusk roadway image */}
        <img
          src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=2000&q=85"
          alt="Cinematic sports car on dusk mountain road"
          className="w-full h-full object-cover object-center filter brightness-[0.68]"
        />

        {/* Sophisticated Multi-Layer Gradient Overlays for Supreme Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0B]/95 via-[#080A0B]/70 to-[#080A0B]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0B] via-transparent to-[#080A0B]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(#C8FF45_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      </motion.div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-36 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-8 max-w-2xl">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#171B1E]/80 border border-white/15 backdrop-blur-md mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF45] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#F5F7F7] font-bold">
                DRIVE SOMETHING EXCEPTIONAL
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] mb-6"
            >
              Find the car <br />
              that <span className="text-[#C8FF45] relative inline-block">
                moves you.
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.7, ease: 'circOut' }}
                  className="absolute bottom-1 left-0 h-[3px] bg-[#C8FF45]/60 rounded-full"
                />
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              className="text-sm sm:text-base lg:text-lg text-[#A0A7AC] leading-relaxed mb-8 max-w-xl font-normal"
            >
              Discover a carefully selected collection of performance, luxury, electric, and everyday vehicles designed around the way you drive.
            </motion.p>

            {/* Primary & Secondary Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                to="/velocity/inventory"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm bg-[#C8FF45] text-[#080A0B] text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[#b5eb3b] hover:shadow-[0_0_30px_rgba(200,255,69,0.35)] transition-all duration-300 group"
              >
                <span>Explore Inventory</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/velocity/about"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm bg-[#171B1E]/80 border border-white/20 text-[#F5F7F7] text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300"
              >
                <span>Discover Our Story</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Floating Featured Vehicle Spotlight Panel */}
          {featuredVehicle && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
              className="lg:col-span-4"
            >
              <div className="bg-[#101315]/90 border border-white/15 rounded-lg p-5 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#C8FF45]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-[#C8FF45] uppercase font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Spotlight Vehicle
                  </span>
                  <span className="text-[10px] font-mono text-[#A0A7AC]">
                    {featuredVehicle.year} Model
                  </span>
                </div>

                <div className="relative h-32 rounded overflow-hidden mb-3 border border-white/10 bg-[#171B1E]">
                  <ImageWithFallback
                    src={featuredVehicle.images[0]}
                    alt={featuredVehicle.model}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[9px] font-mono text-white/90">
                    {featuredVehicle.horsepower} BHP • {featuredVehicle.acceleration}
                  </div>
                </div>

                <div className="mb-3">
                  <h3 className="text-base font-bold text-[#F5F7F7] group-hover:text-[#C8FF45] transition-colors leading-tight">
                    {featuredVehicle.make} {featuredVehicle.model}
                  </h3>
                  <span className="text-[11px] text-[#A0A7AC] block mt-0.5">
                    {featuredVehicle.category} • {featuredVehicle.powertrain}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <span className="text-[9px] font-mono text-[#A0A7AC] uppercase block">
                      Starting Offer
                    </span>
                    <span className="text-sm font-extrabold text-[#F5F7F7]">
                      {formatCompactINR(featuredVehicle.price)}
                    </span>
                  </div>

                  <Link
                    to={`/velocity/vehicle/${featuredVehicle.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#C8FF45] hover:underline"
                  >
                    <span>Explore Vehicle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Information Row & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 w-full">
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A0A7AC]">
          {/* 3 Pillars from Requirements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full md:w-auto">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C8FF45] shrink-0" />
              <span className="text-xs font-medium text-[#F5F7F7]/90">
                Carefully Selected Vehicles
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-[#C8FF45] shrink-0" />
              <span className="text-xs font-medium text-[#F5F7F7]/90">
                Transparent Vehicle Information
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <UserCheck className="w-4 h-4 text-[#C8FF45] shrink-0" />
              <span className="text-xs font-medium text-[#F5F7F7]/90">
                Personalized Buying Assistance
              </span>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="hidden lg:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#A0A7AC]/80"
          >
            <span>Scroll To Browse</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#C8FF45]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
