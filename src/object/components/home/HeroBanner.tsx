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

interface SlideData {
  id: number;
  numberString: string;
  heroImage: string;
  headlineMain: string;
  headlineAccent: string;
  subtitle: string;
  // Floating Card on top-right (Next Object)
  floatingNext: {
    name: string;
    price: string;
    thumbnail: string;
    slug: string;
    targetSlide: number;
  };
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    numberString: '01',
    heroImage: '/images/slide-1-chair.jpg',
    headlineMain: 'Objects of\nUtility.',
    headlineAccent: 'Thoughtfully Formed.',
    subtitle: 'A curated collection of timeless design, modern utility and everyday essentials — for a better you.',
    floatingNext: {
      name: 'Pebble Lamp',
      price: '₹3,499',
      thumbnail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=200&q=80',
      slug: 'pebble-ceramic-ambient-lamp',
      targetSlide: 2,
    },
  },
  {
    id: 2,
    numberString: '02',
    heroImage: '/images/slide-2-lamp.jpg',
    headlineMain: 'Ambient Light.\nQuiet Forms.',
    headlineAccent: 'Warmly Sculpted.',
    subtitle: 'Tactile stoneware and mouth-blown glass crafted to create serene, intentional living atmospheres.',
    floatingNext: {
      name: 'Arc Waxed Tote',
      price: '₹1,899',
      thumbnail: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=200&q=80',
      slug: 'arc-everyday-tote',
      targetSlide: 3,
    },
  },
  {
    id: 3,
    numberString: '03',
    heroImage: '/images/slide-3-tote.jpg',
    headlineMain: 'Timeless Carry.\nOrganic Canvas.',
    headlineAccent: 'Built for Motion.',
    subtitle: 'Heavyweight 18oz beeswaxed cotton duck canvas reinforced with solid copper rivets for decades of use.',
    floatingNext: {
      name: 'Orbit Organizer',
      price: '₹2,699',
      thumbnail: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=200&q=80',
      slug: 'orbit-precision-desk-organizer',
      targetSlide: 4,
    },
  },
  {
    id: 4,
    numberString: '04',
    heroImage: '/images/slide-4-desk.jpg',
    headlineMain: 'Instruments of\nPrecision.',
    headlineAccent: 'Workplace Clarity.',
    subtitle: 'Aerospace-grade anodized aluminum trays and solid brass anchors engineered for the focused workstation.',
    floatingNext: {
      name: 'Cobalt Armchair',
      price: '₹18,999',
      thumbnail: '/images/slide-1-chair.jpg',
      slug: 'shop',
      targetSlide: 1,
    },
  },
];

export const HeroBanner: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const current = SLIDES[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToSlide = (slideNum: number) => {
    setCurrentSlideIndex(slideNum - 1);
  };

  return (
    <>
      <section className="relative bg-[#FFFFFF] border-b border-[#EAEAE6] overflow-hidden selection:bg-[#2447E8] selection:text-white">
        
        {/* Background Decorative Sweeping Arc Line (Matching Mockup) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <svg
            className="w-full h-full opacity-60"
            viewBox="0 0 1440 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M 620 20 C 780 120, 1100 80, 1380 280"
              stroke="#2447E8"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.35"
            />
            <path
              d="M 680 -50 C 860 140, 1180 180, 1420 400"
              stroke="#2447E8"
              strokeWidth="1.5"
              opacity="0.25"
            />
          </svg>
        </div>

        {/* Main Content Area: Seamless Unified Stage (NO Card Box/Border) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14 pb-10 sm:pb-14 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* 1. Left Editorial Typography & Actions (5 Cols) */}
            <div className="lg:col-span-5 z-20 flex flex-col justify-center">
              
              {/* Eyebrow Pill */}
              <div className="mb-5 sm:mb-6">
                <Link
                  to="/object/shop"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E4E9] shadow-2xs hover:border-[#2447E8] text-xs font-medium text-[#111111] transition-all group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#2447E8]" />
                  <span>Thoughtfully Designed</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#111111] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Dynamic Headline with Smooth Transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-black tracking-[-0.035em] text-[#111111] leading-[1.05] mb-4 whitespace-pre-line">
                    {current.headlineMain} <br />
                    <span className="text-[#2447E8]">{current.headlineAccent}</span>
                  </h1>

                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-md font-normal mb-8">
                    {current.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
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
                  <span className="w-10 h-10 rounded-full bg-white border border-[#E2E4E9] shadow-sm flex items-center justify-center text-[#111111] group-hover:scale-105 group-hover:border-[#2447E8] transition-all">
                    <Play className="w-3.5 h-3.5 fill-[#111111] ml-0.5 group-hover:fill-[#2447E8] transition-colors" />
                  </span>
                  <span>Watch Video</span>
                </button>
              </div>

              {/* 50K+ Happy Customers Floating Glass Pill (Aligned in front of the scene) */}
              <div className="inline-flex items-center gap-3.5 p-2 pr-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E5E0] shadow-md w-fit">
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

            {/* 2. Right Stage: Seamless 3D Studio Environment (7 Cols) */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              
              {/* Blue 4-Point Sparkle Star floating in air */}
              <div className="absolute top-2 left-6 lg:left-10 z-20 pointer-events-none">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[#2447E8] animate-pulse">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/>
                </svg>
              </div>

              {/* Seamless Studio Stage Visual (NO Card Box / NO Thick Frame) */}
              <div className="relative w-full overflow-hidden rounded-3xl lg:rounded-none lg:overflow-visible">
                
                {/* 3D Render Image with smooth left-edge blend */}
                <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current.id}
                      src={current.heroImage}
                      alt={current.headlineMain}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="w-full h-full object-cover lg:object-contain object-center select-none"
                    />
                  </AnimatePresence>

                  {/* Gentle left blend gradient so it merges seamlessly into the left white background on large screens */}
                  <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10" />
                </div>

                {/* Floating Next Product Card (Top Right - Matches user image 2 exactly) */}
                <button
                  type="button"
                  onClick={() => goToSlide(current.floatingNext.targetSlide)}
                  className="absolute top-3 right-3 sm:top-5 sm:right-6 z-30 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 pr-3.5 sm:pr-4 rounded-2xl border border-[#E5E5E0] shadow-xl flex items-center gap-3 hover:shadow-2xl hover:border-[#2447E8] transition-all group/card cursor-pointer"
                  title={`Switch to ${current.floatingNext.name}`}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-[#F2F2EE] shrink-0 border border-[#E5E5E0]">
                    <img
                      src={current.floatingNext.thumbnail}
                      alt={current.floatingNext.name}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-[#111111] group-hover/card:text-[#2447E8] transition-colors">
                      {current.floatingNext.name}
                    </h4>
                    <span className="font-mono text-[11px] font-bold text-[#666666]">
                      {current.floatingNext.price}
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#F4F4F6] group-hover/card:bg-[#2447E8] group-hover/card:text-white text-[#111111] flex items-center justify-center transition-colors ml-1">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>

                {/* Vertical Slider Pagination Controls (Matches user image 1 exactly) */}
                <div className="absolute right-3 sm:right-5 bottom-8 sm:bottom-12 z-30 flex flex-col items-center gap-2 bg-white/95 backdrop-blur-md py-3 px-2 rounded-full border border-[#E5E5E0] shadow-lg">
                  <div className="text-center font-mono">
                    <span className="font-black text-xs text-[#111111] block">
                      {current.numberString}
                    </span>
                    <span className="text-[10px] text-[#888888] block">/ 04</span>
                  </div>
                  
                  {/* Up button */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                    className="w-7 h-7 rounded-full bg-[#F4F4F6] hover:bg-[#2447E8] hover:text-white text-[#111111] flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>

                  {/* Down button - Active blue circle as seen in user reference image */}
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next Slide"
                    className="w-7 h-7 rounded-full bg-[#2447E8] hover:bg-[#1D3BC5] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 3. Bottom Guarantees Strip (Seamlessly Integrated) */}
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

          {/* Bottom Right Decorative Concentric Blue Arc Accent (Matching Mockup) */}
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
