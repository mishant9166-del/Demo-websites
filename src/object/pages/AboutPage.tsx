import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Material Honesty',
      description:
        'We believe objects should be made from what they appear to be. Unbleached duck cotton, full-grain vegetable-tanned leather, lead-free naval brass, and wheel-thrown clay.',
    },
    {
      title: 'Ergonomic Permanence',
      description:
        'We reject design that exists merely to look striking in a studio render. Every product must fit comfortably in human hands and withstand real years of daily friction.',
    },
    {
      title: 'Sensory Quietude',
      description:
        'In an environment inundated with flashing screens and loud marketing slogans, our objects possess acoustic calm, soothing neutral textures, and minimal visual noise.',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Editorial Header */}
      <section className="bg-[#252525] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF704F] mb-4">
            <Sparkles className="w-4 h-4" />
            <span>The Studio Manifesto</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight max-w-4xl mb-6">
            We believe the objects you touch every day should be exceptional.
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
            OBJECT & FORM was founded to bridge the gap between architectural restraint and everyday utility. We make and curate things that bring quiet satisfaction to modern routines.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-mono font-bold text-[#2447E8] tracking-widest block">
              01 &bull; Origin Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#252525] leading-tight">
              An antidote to the culture of the disposable.
            </h2>
            <p className="text-base text-[#777872] font-light leading-relaxed">
              Every morning begins with objects: the thermal flask you fill with dark roast coffee, the canvas tote you pack your laptop into, the weighted brass pen on your drafting desk, the ambient lamp you switch on at twilight.
            </p>
            <p className="text-base text-[#777872] font-light leading-relaxed">
              Yet most consumer goods today are designed for obsolescence—constructed from synthetic plastics disguised with superficial coatings that peel within months. We decided to create a home for objects that develop a richer patina the longer you own them.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-4/3 rounded-xs overflow-hidden border border-[#E5E5E0] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"
                alt="Object and Form studio crafting canvas and leather"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#E5E5E0]">
          {values.map((val, idx) => (
            <div
              key={val.title}
              className="p-8 bg-[#F7F7F4] rounded-xs border border-[#E5E5E0] space-y-3"
            >
              <span className="font-mono text-xs text-[#2447E8] font-bold">0{idx + 1}</span>
              <h3 className="text-xl font-black text-[#252525]">{val.title}</h3>
              <p className="text-xs sm:text-sm text-[#777872] font-light leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Craft Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="aspect-4/3 rounded-xs overflow-hidden border border-[#E5E5E0] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80"
                alt="Ceramics and raw materials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2" id="materials">
            <span className="text-xs uppercase font-mono font-bold text-[#2447E8] tracking-widest block">
              02 &bull; Sourcing Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#252525] leading-tight">
              Ethical sourcing across artisan ateliers.
            </h2>
            <p className="text-base text-[#777872] font-light leading-relaxed">
              We partner with independent ceramic studios in Auroville, brass founders in Moradabad, and canvas weavers in Rajasthan. By working directly with master craftspeople, we champion regional trades and ensure fair compensation throughout our supply chain.
            </p>
            <div className="pt-2">
              <Link
                to="/object/shop"
                className="px-8 py-3.5 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-xs uppercase font-bold tracking-widest rounded-xs shadow-md transition-colors inline-flex items-center gap-2"
              >
                <span>Shop The Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer */}
        <div className="p-4 bg-[#F7F7F4] rounded-xs border border-[#E5E5E0] flex items-center gap-3">
          <ShieldCheck className="w-4 h-4 text-[#2447E8] shrink-0" />
          <p className="text-xs text-[#777872]">
            OBJECT & FORM is a conceptual e-commerce store built for frontend engineering demonstration.
          </p>
        </div>
      </section>
    </div>
  );
};
