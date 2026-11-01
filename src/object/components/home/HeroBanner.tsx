import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, MoveRight, Eye, ShieldCheck, Check } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  // Interactive featured object tab (allows user to switch between 3 curated objects)
  const [activeSpotlight, setActiveSpotlight] = useState<0 | 1 | 2>(0);

  const spotlights = [
    {
      id: 'lamp',
      title: 'Pebble Ceramic Ambient Lamp',
      category: 'Home & Living',
      tagline: 'Hand-thrown textured stoneware with dimmable warm 2700K diffusion.',
      price: '₹3,899',
      slug: 'pebble-ceramic-ambient-lamp',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=85',
      badge: 'Bestseller 01',
      material: 'Raw Sandstone Stoneware',
    },
    {
      id: 'tote',
      title: 'Arc Everyday Waxed Tote',
      category: 'Bags & Carry',
      tagline: '18oz organic duck canvas reinforced with solid copper saddle rivets.',
      price: '₹1,899',
      slug: 'arc-everyday-tote',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=85',
      badge: 'Studio Signature',
      material: 'Beeswaxed Duck Canvas',
    },
    {
      id: 'desk',
      title: 'Orbit Precision Desk Organizer',
      category: 'Desk & Work',
      tagline: 'CNC-machined aerospace-grade aluminum with magnetic dock channels.',
      price: '₹2,699',
      slug: 'orbit-precision-desk-organizer',
      image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=1400&q=85',
      badge: 'New Arrival',
      material: 'Anodized 6061 Aluminum',
    },
  ];

  const current = spotlights[activeSpotlight];

  return (
    <section className="relative bg-[#FAF9F5] border-b border-[#E5E5E0] overflow-hidden pt-4 pb-10 sm:pb-14 lg:pb-16">
      {/* Background architectural grid and ambient glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E5E040_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E040_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2447E8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Editorial Ticker Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-2.5 mb-6 sm:mb-8 border-b border-[#E5E5E0]/70 text-xs text-[#777872]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2447E8] animate-pulse" />
            <span className="font-mono font-bold tracking-widest text-[#252525] uppercase text-[10px]">
              Studio Edition 2026
            </span>
            <span className="text-[#D0D0CA]">•</span>
            <span className="hidden sm:inline text-[11px]">26 Considered Everyday Objects</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-medium">
            <span className="hidden md:inline text-[#777872]">Curated in Kyoto & Jaipur</span>
            <span className="hidden md:inline text-[#D0D0CA]">•</span>
            <Link
              to="/object/shop"
              className="text-[#2447E8] hover:text-[#1D3BC5] font-semibold flex items-center gap-1 group"
            >
              <span>Explore All Objects</span>
              <MoveRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Refined Editorial Typography & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Collection Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E0] shadow-2xs w-fit mb-5">
              <Sparkles className="w-3 h-3 text-[#2447E8]" />
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#2447E8]">
                Minimalist Design Practice
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-[-0.035em] text-[#252525] leading-[1.08] mb-4">
              Objects of utility. <br />
              <span className="font-serif italic font-normal text-[#2447E8] pr-1">Thoughtfully</span>
              formed.
            </h1>

            {/* Supporting description */}
            <p className="text-sm sm:text-base text-[#686963] leading-relaxed max-w-lg mb-6 sm:mb-8 font-normal">
              A considered collection of timeless carry, tactile ceramics, architectural illumination, and precision workstation instruments crafted for an enduring lifetime.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link
                to="/object/shop"
                className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-xs uppercase tracking-widest font-bold rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 group active:scale-[0.98]"
              >
                <span>Shop Catalog (26)</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/object/category/home-living"
                className="px-5 sm:px-6 py-3 sm:py-3.5 bg-white hover:bg-[#F2F2EE] text-[#252525] border border-[#E5E5E0] text-xs uppercase tracking-widest font-bold rounded-lg transition-all text-center hover:border-[#252525]/30 active:scale-[0.98]"
              >
                Living & Light
              </Link>
            </div>

            {/* Quick Interactive Switcher Tabs */}
            <div className="pt-5 border-t border-[#E5E5E0]/80">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#777872] block mb-2.5">
                Curator's Spotlight:
              </span>
              <div className="flex gap-2">
                {spotlights.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSpotlight(idx as 0 | 1 | 2)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-tight transition-all text-left flex items-center gap-1.5 ${
                      activeSpotlight === idx
                        ? 'bg-[#252525] text-white shadow-xs'
                        : 'bg-white hover:bg-[#EFEFEA] text-[#686963] border border-[#E5E5E0]'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${activeSpotlight === idx ? 'bg-[#2447E8]' : 'bg-[#D0D0CA]'}`} />
                    <span>{idx === 0 ? 'Ceramic Lamp' : idx === 1 ? 'Canvas Tote' : 'Desk Tray'}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Visual Stage (Compact & Responsive) */}
          <div className="lg:col-span-7">
            <div className="relative">
              
              {/* Main Showcase Visual Card */}
              <div className="relative h-[320px] sm:h-[400px] lg:h-[440px] w-full rounded-2xl overflow-hidden bg-[#EFEFEA] border border-[#E5E5E0] shadow-sm group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover filter brightness-[0.96] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Badge on image */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider text-[#252525] border border-white/40 shadow-xs">
                    {current.badge}
                  </span>
                  <span className="hidden sm:inline px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] text-white/90 font-medium border border-white/10">
                    {current.material}
                  </span>
                </div>

                {/* Bottom Overlay Card with Product Details and Instant Link */}
                <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#E5E5E0] shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#2447E8] tracking-widest block mb-0.5">
                      {current.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#252525] leading-tight">
                      {current.title}
                    </h3>
                    <p className="text-xs text-[#777872] line-clamp-1 mt-0.5 font-normal">
                      {current.tagline}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E5E5E0]">
                    <span className="font-mono text-base font-extrabold text-[#252525]">
                      {current.price}
                    </span>
                    <Link
                      to={`/object/product/${current.slug}`}
                      className="px-3.5 py-2 bg-[#252525] hover:bg-[#2447E8] text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shadow-2xs group/btn"
                    >
                      <span>View Object</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Complementary Floating Mini-Card (adds tactile editorial depth on md+ screens) */}
              <div className="hidden md:flex absolute -bottom-5 -left-6 z-20 bg-white p-3.5 rounded-xl border border-[#E5E5E0] shadow-xl items-center gap-3 max-w-xs animate-in fade-in duration-500">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#F2F2EE] shrink-0 border border-[#E5E5E0]">
                  <img
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=200&q=80"
                    alt="Daily Carry Arc Tote"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left pr-2">
                  <span className="text-[9px] font-mono uppercase font-bold text-[#2447E8] tracking-wider block">
                    Everyday Icon
                  </span>
                  <span className="text-xs font-bold text-[#252525] block truncate">
                    Arc Everyday Tote
                  </span>
                  <span className="text-[11px] font-mono text-[#777872] font-semibold">
                    ₹1,899 • Waxed Canvas
                  </span>
                </div>
                <Link
                  to="/object/product/arc-everyday-tote"
                  className="w-7 h-7 rounded-full bg-[#F5F5F0] hover:bg-[#2447E8] hover:text-white text-[#252525] flex items-center justify-center transition-colors shrink-0"
                  title="View Arc Tote"
                >
                  <Eye className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Feature Badges Bar */}
        <div className="mt-10 pt-6 border-t border-[#E5E5E0]/70 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#2447E8]/10 text-[#2447E8] flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-bold text-[#252525] block text-xs">100% Recycled & Natural</span>
              <span className="text-[11px] text-[#777872]">Zero single-use plastics</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#2447E8]/10 text-[#2447E8] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-bold text-[#252525] block text-xs">Lifetime Repair Care</span>
              <span className="text-[11px] text-[#777872]">Built for enduring utility</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#2447E8]/10 text-[#2447E8] flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-bold text-[#252525] block text-xs">Free Delivery on ₹2,499+</span>
              <span className="text-[11px] text-[#777872]">Pan-India insured transit</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#2447E8]/10 text-[#2447E8] flex items-center justify-center shrink-0">
              <span className="font-mono font-bold text-[11px]">26</span>
            </div>
            <div>
              <span className="font-bold text-[#252525] block text-xs">Curated Design Batch</span>
              <span className="text-[11px] text-[#777872]">Limited studio runs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
