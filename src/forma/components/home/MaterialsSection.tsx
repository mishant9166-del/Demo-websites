import React from 'react';
import { FORMA_MATERIALS } from '../../data/materials';

export const MaterialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#E9E4DA] text-[#292B28] border-t border-[#D8D2C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#292B28]/15 pb-6">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.28em] font-sans font-semibold text-[#777A62] block">
              Materiality & Craft
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#292B28] tracking-tight">
              Honest Matter & Tactile Surfaces
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#292B28]/75 max-w-md font-sans">
            Every material in our palette is selected for its mineral honesty, weight, acoustic absorption, and capacity to age gracefully.
          </p>
        </div>

        {/* 6 Close-up Material Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FORMA_MATERIALS.map((mat, i) => (
            <div
              key={i}
              className="group space-y-4 bg-[#F7F6F2] p-4 border border-[#D8D2C7] transition-all hover:border-[#292B28]/40"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E9E4DA]">
                <img
                  src={mat.image}
                  alt={mat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.24em] font-sans font-semibold text-[#777A62] block">
                  {mat.category}
                </span>
                <h4 className="font-serif font-bold text-lg text-[#292B28]">
                  {mat.name}
                </h4>
                <p className="text-xs text-[#292B28]/75 font-sans leading-relaxed pt-1">
                  {mat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
