import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Feather } from 'lucide-react';

export const EditorialStory: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Photography Collage */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-4/3 rounded-xs overflow-hidden border border-[#E5E5E0] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80"
                alt="Tactile stoneware ceramics and ambient lighting"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping Detail Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#252525] text-white p-5 rounded-xs shadow-2xl max-w-xs border border-[#383838] hidden sm:block">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF704F] block mb-1">
                Studio Ethos
              </span>
              <p className="text-xs font-light text-white/90 leading-relaxed">
                “Simplicity is not the lack of clutter, that’s a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object.”
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#2447E8] font-bold">
              <span>The Atelier Perspective</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#252525] leading-tight">
              Objects for a Better Everyday.
            </h2>

            <p className="text-base text-[#777872] font-light leading-relaxed">
              We live in a world saturated with ephemeral novelties and plastic disposability. At OBJECT & FORM, we curate objects that anchor you back to the tactile present.
            </p>

            <p className="text-sm text-[#777872] font-light leading-relaxed">
              From hand-thrown stoneware mugs that balance warm espresso to 18oz waxed duck canvas totes with copper rivets, every piece in our collection is rigorously evaluated for proportion, material integrity, and everyday emotional comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5E5E0]">
              <div className="space-y-1">
                <Feather className="w-4 h-4 text-[#2447E8]" />
                <h4 className="text-xs font-bold text-[#252525]">Material Honesty</h4>
                <p className="text-[11px] text-[#777872]">Vegetable leathers, French linen & brass.</p>
              </div>

              <div className="space-y-1">
                <Compass className="w-4 h-4 text-[#2447E8]" />
                <h4 className="text-xs font-bold text-[#252525]">Intuitive Utility</h4>
                <p className="text-[11px] text-[#777872]">Every curve serves an active purpose.</p>
              </div>

              <div className="space-y-1">
                <ShieldCheck className="w-4 h-4 text-[#2447E8]" />
                <h4 className="text-xs font-bold text-[#252525]">Designed to Age</h4>
                <p className="text-[11px] text-[#777872]">Gains character with daily wear.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/object/about"
                className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#2447E8] hover:text-[#1D3BC5] border-b-2 border-[#2447E8] pb-1 transition-all"
              >
                <span>Read The Full Studio Manifesto</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
