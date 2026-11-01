import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Plus, MoveRight, ShoppingBag, Eye, Layers } from 'lucide-react';

interface HotspotItem {
  id: string;
  name: string;
  category: string;
  price: string;
  slug: string;
  top: string;
  left: string;
  tagline: string;
  image: string;
  chipLabel: string;
}

const HOTSPOTS: HotspotItem[] = [
  {
    id: 'lamp',
    name: 'Pebble Ceramic Ambient Lamp',
    category: 'Home & Living',
    price: '₹3,899',
    slug: 'pebble-ceramic-ambient-lamp',
    top: '36%',
    left: '42%',
    tagline: 'Hand-thrown stoneware • 2700K Warm Glow',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80',
    chipLabel: '01 / Ambient Lamp',
  },
  {
    id: 'tray',
    name: 'Orbit Precision Desk Organizer',
    category: 'Desk & Work',
    price: '₹2,699',
    slug: 'orbit-precision-desk-organizer',
    top: '72%',
    left: '68%',
    tagline: 'Anodized 6061 Aluminum • Magnetic Dock',
    image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=400&q=80',
    chipLabel: '02 / Desk Organizer',
  },
  {
    id: 'tote',
    name: 'Arc Everyday Waxed Tote',
    category: 'Bags & Carry',
    price: '₹1,899',
    slug: 'arc-everyday-tote',
    top: '76%',
    left: '24%',
    tagline: '18oz Beeswax Duck Canvas • Solid Copper Rivets',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80',
    chipLabel: '03 / Waxed Tote',
  },
];

export const HeroBanner: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('lamp');
  const activeItem = HOTSPOTS.find((h) => h.id === activeId) || HOTSPOTS[0];

  return (
    <section className="relative bg-[#111215] text-white overflow-hidden selection:bg-[#2447E8] selection:text-white">
      
      {/* 1. Kinetic Ticker Ribbon */}
      <div className="bg-[#181A1F] border-b border-white/10 py-2.5 px-4 overflow-hidden text-[11px] font-mono tracking-widest uppercase text-[#9EA3AE]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2447E8] animate-pulse" />
            <span className="text-white font-bold tracking-wider">OBJECT & FORM</span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="hidden sm:inline">2026 STUDIO LOOKBOOK</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-white/60">Limited Batch Run: 26 Objects</span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="text-[#C8D1E6]">Pan-India Express Transit</span>
            <Link
              to="/object/shop"
              className="text-[#2447E8] hover:text-[#5B7BFF] font-bold inline-flex items-center gap-1 transition-colors group"
            >
              <span>Catalog</span>
              <MoveRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Hero Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        
        {/* Asymmetric Modern Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Hero Card: Typographic Statement & Quick Actions (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#181A20] border border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Ambient lighting inside card */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#2447E8]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#2447E8] font-bold mb-6">
                <Sparkles className="w-3 h-3 text-[#2447E8]" />
                <span>Next-Gen Design Studio</span>
              </div>

              {/* Big Punchy Modern Headline */}
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-[-0.04em] leading-[1.04] text-white mb-4">
                Form. <br />
                Purpose. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2447E8] via-[#6584FF] to-white">
                  Permanence.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#9EA3AE] leading-relaxed max-w-md font-normal mb-8">
                Tactile ceramics, architectural illumination, and precision workstation instruments crafted for living without clutter.
              </p>
            </div>

            <div className="relative z-10 space-y-6">
              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/object/shop"
                  className="px-6 py-3.5 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-[#2447E8]/25 flex items-center justify-center gap-2 group active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Explore 26 Objects</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/object/shop?filter=new"
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold uppercase tracking-widest rounded-xl transition-all text-center active:scale-95"
                >
                  New Arrivals (6)
                </Link>
              </div>

              {/* Category Quick Chips */}
              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#686E7D] block w-full mb-1">
                  Quick Filter by Domain:
                </span>
                {[
                  { label: 'Carry', slug: 'bags' },
                  { label: 'Living', slug: 'home-living' },
                  { label: 'Desk', slug: 'desk-work' },
                  { label: 'Drinkware', slug: 'drinkware' },
                ].map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/object/category/${cat.slug}`}
                    className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/15 border border-white/5 text-[11px] font-mono text-[#C8D1E6] hover:text-white transition-colors"
                  >
                    #{cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hero Card: Interactive Hotspot Lookbook Stage (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-4 sm:p-6 rounded-3xl bg-[#181A20] border border-white/10 shadow-2xl relative overflow-hidden">
            
            {/* Top Interactive Selector Chips */}
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-[#9EA3AE]">
                <Layers className="w-4 h-4 text-[#2447E8]" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-white font-bold">
                  Interactive Room Hotspots
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#686E7D]">Click pins to inspect</span>
            </div>

            {/* Interactive Image Canvas with Pulsing Radar Pins */}
            <div className="relative h-[280px] sm:h-[340px] lg:h-[380px] w-full rounded-2xl overflow-hidden bg-black border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1600&q=85"
                alt="OBJECT & FORM Architectural Living Space and Design Objects"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Hotspot Radar Pins */}
              {HOTSPOTS.map((spot) => {
                const isActive = activeId === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveId(spot.id)}
                    style={{ top: spot.top, left: spot.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin transition-transform duration-300 ${
                      isActive ? 'scale-125' : 'hover:scale-110'
                    }`}
                    aria-label={`Inspect ${spot.name}`}
                  >
                    {/* Outer animated radar ring */}
                    <span className="absolute -inset-2 rounded-full bg-[#2447E8]/50 animate-ping opacity-75" />
                    
                    {/* Inner glowing core */}
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center backdrop-blur-md shadow-lg transition-colors ${
                      isActive
                        ? 'bg-[#2447E8] border-white text-white'
                        : 'bg-black/60 border-[#2447E8] text-[#2447E8] hover:bg-[#2447E8] hover:text-white'
                    }`}>
                      <Plus className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-45' : 'group-hover/pin:rotate-90'}`} />
                    </div>
                  </button>
                );
              })}

              {/* Active Hotspot Floating Glassmorphism Drawer */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-3 left-3 right-3 z-30 p-3 sm:p-4 rounded-xl bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 shrink-0 border border-white/15">
                      <img
                        src={activeItem.image}
                        alt={activeItem.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#6584FF] font-bold block truncate">
                        {activeItem.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                        {activeItem.name}
                      </h4>
                      <p className="text-[11px] text-[#9EA3AE] truncate hidden sm:block">
                        {activeItem.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono text-sm sm:text-base font-black text-white">
                      {activeItem.price}
                    </span>
                    <Link
                      to={`/object/product/${activeItem.slug}`}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white hover:bg-[#2447E8] text-[#111215] hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 shadow-md shrink-0"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Inspect</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Quick Switcher Pills */}
            <div className="mt-4 pt-3 flex items-center justify-between gap-2 overflow-x-auto">
              <div className="flex items-center gap-2">
                {HOTSPOTS.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setActiveId(h.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeId === h.id
                        ? 'bg-[#2447E8] text-white font-bold shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-[#9EA3AE] border border-white/5'
                    }`}
                  >
                    <span>{h.chipLabel}</span>
                  </button>
                ))}
              </div>
              <span className="text-[11px] font-mono text-[#686E7D] hidden xl:inline">
                Tap pins on image
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
