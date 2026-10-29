import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative bg-[#FFFFFF] border-b border-[#E5E5E0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[82vh] items-stretch">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2447E8]/10 text-[#2447E8] text-[11px] font-mono uppercase tracking-widest font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>2026 Studio Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#252525] leading-[1.05] mb-6">
                Everyday objects. <br />
                <span className="text-[#2447E8] font-normal italic">Exceptionally</span> chosen.
              </h1>

              <p className="text-base sm:text-lg text-[#777872] max-w-lg font-light leading-relaxed mb-8">
                A considered collection of timeless carry, tactile ceramics, architectural illumination, and precision workstation instruments crafted for a lifetime of use.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/object/shop"
                  className="px-8 py-4 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-xs uppercase tracking-widest font-bold rounded-xs shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Shop The Collection</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/object/shop?filter=new"
                  className="px-8 py-4 bg-[#FFFFFF] hover:bg-[#F7F7F4] text-[#252525] border border-[#E5E5E0] text-xs uppercase tracking-widest font-bold rounded-xs transition-all text-center"
                >
                  New Arrivals
                </Link>
              </div>

              {/* Bottom Metrics / Guarantees */}
              <div className="pt-6 border-t border-[#E5E5E0] grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="font-mono font-bold text-[#252525] block text-sm">26</span>
                  <span className="text-[11px] text-[#777872] uppercase tracking-wider">Curated Objects</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#252525] block text-sm">100%</span>
                  <span className="text-[11px] text-[#777872] uppercase tracking-wider">Circular Materials</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#2447E8] block text-sm">₹2,499+</span>
                  <span className="text-[11px] text-[#777872] uppercase tracking-wider">Free Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full bg-[#F7F7F4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=85"
              alt="OBJECT & FORM Arc Everyday Tote and minimal lifestyle objects"
              className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02]"
            />

            {/* Floating Product Spotlight Badge */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xs border border-[#E5E5E0] shadow-xl max-w-xs hidden sm:block">
              <span className="text-[10px] uppercase font-bold text-[#2447E8] tracking-widest block mb-0.5">
                Featured Object
              </span>
              <h4 className="text-xs font-bold text-[#252525]">Arc Everyday Waxed Tote</h4>
              <p className="text-[11px] text-[#777872] line-clamp-1 mb-2">18oz organic duck canvas with copper rivets</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#252525]">₹1,899</span>
                <Link
                  to="/object/product/arc-everyday-tote"
                  className="text-[11px] uppercase font-bold text-[#2447E8] hover:underline"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
