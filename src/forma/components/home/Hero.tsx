import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-[#F7F6F2] pt-8 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Editorial Top Headline Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-4 sm:pt-8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.28em] font-sans font-semibold text-[#777A62] block">
              Forma Studio &bull; Selected Works
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#292B28] leading-[1.08] tracking-tight">
              Designing spaces that feel like they belong.
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <p className="font-sans text-base sm:text-lg text-[#292B28]/75 leading-relaxed">
              Considered interiors, natural materials, and a quieter approach to contemporary living.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                to="/forma/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#292B28] text-[#FFFFFF] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#292B28]/90 transition-all group"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                to="/forma/studio"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#292B28]/30 text-[#292B28] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#E9E4DA] transition-colors"
              >
                <span>About the Studio</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Full-Bleed Architectural Photograph with Metadata */}
        <div className="relative">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#E9E4DA] border border-[#E2DDD5]">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
              alt="Sunlit minimalist interior with raw stone table, linen sofa, and warm natural light"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#292B28]/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Understated Architectural Metadata Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-[#292B28]/70 border-b border-[#E2DDD5] pb-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#777A62]" />
              <span className="uppercase tracking-[0.2em] text-[11px] font-semibold text-[#292B28]">
                Interior Architecture &bull; Residential &bull; Hospitality
              </span>
            </div>

            <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase text-[#292B28]/60">
              <span>Plate 01: The Quiet House</span>
              <span>Dehradun Foothills</span>
              <span className="font-mono">2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
