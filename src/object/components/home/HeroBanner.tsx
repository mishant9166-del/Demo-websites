import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Play,
  ChevronUp,
  ChevronDown,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  X
} from 'lucide-react';

export const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev >= totalSlides ? 1 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev <= 1 ? totalSlides : prev - 1));
  };

  return (
    <>
      <section className="relative bg-[#FFFFFF] border-b border-[#EAEAE6] overflow-hidden selection:bg-[#2447E8] selection:text-white">
        
        {/* Main Hero Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* 1. Left Column: Editorial Content */}
            <div className="lg:col-span-5 z-20 flex flex-col justify-center">
              
              {/* Eyebrow Pill */}
              <div className="mb-6">
                <Link
                  to="/object/shop"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E2E4E9] shadow-2xs hover:border-[#2447E8] text-xs font-medium text-[#111111] transition-all group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#2447E8]" />
                  <span>Thoughtfully Designed</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#111111] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] font-black tracking-[-0.035em] text-[#111111] leading-[1.05] mb-5">
                Objects of <br />
                Utility. <br />
                <span className="text-[#2447E8]">Thoughtfully Formed.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-md font-normal mb-8">
                A curated collection of timeless design, modern utility and everyday essentials — for a better you.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
                <Link
                  to="/object/shop"
                  className="px-7 py-3.5 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-sm font-semibold rounded-full shadow-lg shadow-[#2447E8]/25 flex items-center gap-2 group transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center gap-3 text-sm font-bold text-[#111111] hover:text-[#2447E8] transition-colors group cursor-pointer"
                >
                  <span className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E2E4E9] shadow-sm flex items-center justify-center text-[#111111] group-hover:scale-105 group-hover:border-[#2447E8] transition-all">
                    <Play className="w-3.5 h-3.5 fill-[#111111] ml-0.5 group-hover:fill-[#2447E8] transition-colors" />
                  </span>
                  <span>Watch Video</span>
                </button>
              </div>

              {/* 50K+ Happy Customers Floating Glass Pill */}
              <div className="inline-flex items-center gap-3.5 p-2 pr-5 rounded-2xl bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E5E5E0] shadow-md w-fit">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Customer avatar"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Customer avatar"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                    alt="Customer avatar"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div>
                  <span className="font-extrabold text-[#111111] text-xs block leading-tight">50K+</span>
                  <span className="text-[11px] text-[#777872] block leading-tight">Happy Customers</span>
                </div>
              </div>

            </div>

            {/* 2. Right Column: 3D Architectural Chair Stage (Exactly Matching User Mockup) */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              
              {/* Blue 4-Point Sparkle Star floating in air */}
              <div className="absolute top-2 left-6 lg:left-12 z-20 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#2447E8] animate-pulse">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/>
                </svg>
              </div>

              {/* 3D Visual Stage Artwork */}
              <div className="relative w-full max-w-[620px] rounded-3xl overflow-hidden shadow-2xl border border-[#E5E5E0]/60 group">
                <img
                  src="/images/object-hero-stage.jpg"
                  alt="OBJECT & FORM Architectural Living Studio with Royal Cobalt Armchair"
                  className="w-full h-auto object-cover transform scale-[1.38] translate-x-[15%] translate-y-[2%] transition-transform duration-700 group-hover:scale-[1.42]"
                />

                {/* Floating Pebble Lamp Card (Top Right) */}
                <Link
                  to="/object/product/pebble-ceramic-ambient-lamp"
                  className="absolute top-5 right-5 sm:top-6 sm:right-8 z-30 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 pr-3.5 sm:pr-4 rounded-2xl border border-[#E5E5E0] shadow-xl flex items-center gap-3 hover:shadow-2xl hover:border-[#2447E8] transition-all group/card"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-[#F2F2EE] shrink-0 border border-[#E5E5E0]">
                    <img
                      src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=200&q=80"
                      alt="Pebble Lamp"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111111] group-hover/card:text-[#2447E8] transition-colors">
                      Pebble Lamp
                    </h4>
                    <span className="font-mono text-[11px] font-bold text-[#666666]">
                      ₹3,499
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#F4F4F6] group-hover/card:bg-[#2447E8] group-hover/card:text-white text-[#111111] flex items-center justify-center transition-colors ml-1">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>

                {/* Vertical Slider Pagination Controls (Right Side) */}
                <div className="absolute right-4 sm:right-6 bottom-16 sm:bottom-20 z-30 flex flex-col items-center gap-2 bg-white/90 backdrop-blur-md py-3 px-2 rounded-full border border-[#E5E5E0] shadow-lg">
                  <div className="text-center font-mono">
                    <span className="font-extrabold text-xs text-[#111111] block">
                      {String(currentSlide).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-[#888888] block">/ 04</span>
                  </div>
                  
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    aria-label="Previous Slide"
                    className="w-6 h-6 rounded-full bg-[#F4F4F6] hover:bg-[#2447E8] hover:text-white text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronUp className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextSlide}
                    aria-label="Next Slide"
                    className="w-6 h-6 rounded-full bg-[#F4F4F6] hover:bg-[#2447E8] hover:text-white text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 3. Bottom Features & Guarantees Strip (Exact Mockup Layout) */}
        <div className="relative border-t border-[#EAEAE6] bg-[#FFFFFF] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
              
              {/* Feature 1: Free Shipping */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#F7F7F4] border border-[#E5E5E0] flex items-center justify-center text-[#111111] shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-tight">
                    Free Shipping
                  </h4>
                  <p className="text-[11px] text-[#777872] mt-0.5">
                    On Orders Above ₹2,499
                  </p>
                </div>
              </div>

              {/* Feature 2: Secure Payments */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#F7F7F4] border border-[#E5E5E0] flex items-center justify-center text-[#111111] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-tight">
                    Secure Payments
                  </h4>
                  <p className="text-[11px] text-[#777872] mt-0.5">
                    100% Safe & Encrypted
                  </p>
                </div>
              </div>

              {/* Feature 3: Easy Returns */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#F7F7F4] border border-[#E5E5E0] flex items-center justify-center text-[#111111] shrink-0">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-tight">
                    Easy Returns
                  </h4>
                  <p className="text-[11px] text-[#777872] mt-0.5">
                    Within 7 Days
                  </p>
                </div>
              </div>

              {/* Feature 4: Dedicated Support */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#F7F7F4] border border-[#E5E5E0] flex items-center justify-center text-[#111111] shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-tight">
                    Dedicated Support
                  </h4>
                  <p className="text-[11px] text-[#777872] mt-0.5">
                    Always Here to Help
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Right Decorative Concentric Blue Arc Accent */}
          <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full border-[18px] border-[#2447E8] opacity-90 pointer-events-none hidden md:block" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full border-[2px] border-[#2447E8]/30 pointer-events-none hidden md:block" />
        </div>

      </section>

      {/* Video Modal (when "Watch Video" is clicked) */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video flex flex-col justify-center items-center text-white"
            >
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-[#2447E8] flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
                <h3 className="text-xl font-bold mb-2">OBJECT & FORM: Studio Craft Film</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Exploring the architectural journey from Kyoto ceramic studios to Jaipur duck canvas looms.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
