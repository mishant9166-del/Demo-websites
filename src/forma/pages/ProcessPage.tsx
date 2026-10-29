import React from 'react';
import { Link } from 'react-router-dom';
import { FORMA_PROCESS } from '../data/process';
import { HairlineDivider } from '../components/common/HairlineDivider';
import { Check, Clock, FileText, ArrowRight } from 'lucide-react';

export const ProcessPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#F7F6F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Editorial Header */}
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#777A62] block">
            Our Working Method &bull; 7 Disciplined Phases
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#292B28] leading-[1.08] tracking-tight">
            How we translate lived habits into architectural permanence.
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-[#292B28]/85 leading-relaxed pt-2">
            “True architectural quiet is not an accident. It is the result of an exhaustive, phased methodology that balances mathematical planning, material chemistry, and honest craftsmanship.”
          </p>
        </div>

        <HairlineDivider />

        {/* Overview Timeline Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
          <div className="border-l-2 border-[#777A62] pl-4 space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#777A62] block font-mono">01 / STAGES</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#292B28]">7 Distinct Steps</span>
            <p className="text-xs text-[#292B28]/70">From initial dialogue to final handover</p>
          </div>
          <div className="border-l-2 border-[#777A62] pl-4 space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#777A62] block font-mono">02 / TIMEFRAME</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#292B28]">16 – 24 Wks</span>
            <p className="text-xs text-[#292B28]/70">Typical design & detailing period</p>
          </div>
          <div className="border-l-2 border-[#777A62] pl-4 space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#777A62] block font-mono">03 / PRECISION</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#292B28]">1:1 Samples</span>
            <p className="text-xs text-[#292B28]/70">Quarry visits & mockups before build</p>
          </div>
          <div className="border-l-2 border-[#777A62] pl-4 space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#777A62] block font-mono">04 / RIGOUR</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#292B28]">Millimeter CAD</span>
            <p className="text-xs text-[#292B28]/70">Zero ambiguity for artisans on site</p>
          </div>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="space-y-24 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-ml-px before:w-0.5 before:bg-[#E2DDD5] before:hidden lg:before:block">
          {FORMA_PROCESS.map((stage, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={stage.step}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Visual Image / Composition */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E9E4DA] border border-[#E2DDD5] shadow-sm">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 border border-[#E2DDD5] flex items-center gap-2 text-xs font-mono text-[#292B28]">
                      <Clock className="w-3.5 h-3.5 text-[#777A62]" />
                      <span>{stage.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content Dossier */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#777A62] bg-[#E9E4DA] px-2.5 py-1 font-bold">
                        Phase {stage.step}
                      </span>
                      <span className="text-xs font-mono text-[#292B28]/60">
                        {stage.duration}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#292B28] leading-tight">
                      {stage.title}
                    </h2>
                    <p className="text-sm font-serif italic text-[#777A62]">
                      {stage.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#292B28]/80 font-sans leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Stage Deliverables */}
                  <div className="bg-white border border-[#E2DDD5] p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#292B28]">
                      <FileText className="w-4 h-4 text-[#777A62]" />
                      <span>Tangible Deliverables</span>
                    </div>
                    <ul className="space-y-2">
                      {stage.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292B28]/85"
                        >
                          <span className="mt-1 w-4 h-4 rounded-full bg-[#E9E4DA] flex items-center justify-center text-[#777A62] shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stage Architect Quote */}
                  {stage.quote && (
                    <blockquote className="border-l-2 border-[#777A62] pl-4 text-xs sm:text-sm font-serif italic text-[#292B28]/80">
                      {stage.quote}
                    </blockquote>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <HairlineDivider />

        {/* Quality Commitment Section */}
        <div className="bg-white border border-[#E2DDD5] p-8 sm:p-14 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] uppercase tracking-[0.24em] font-sans font-semibold text-[#777A62] block">
              Execution Integrity
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#292B28]">
              Why Phased Detailing Protects Your Investment
            </h3>
            <p className="text-xs sm:text-sm text-[#292B28]/80 leading-relaxed font-sans">
              Interior architecture projects frequently exceed budgets or timelines when contractors are asked to estimate based on rough mood boards. Forma Studio produces exhaustive millimeter joinery packs and material schedules so every contractor quotes on unambiguous drawings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-4 bg-[#F7F6F2] border border-[#E2DDD5] space-y-2">
              <h4 className="font-serif font-bold text-lg text-[#292B28]">Transparent Fee Structure</h4>
              <p className="text-xs text-[#292B28]/75 leading-relaxed">
                Design fees are indexed strictly by built area and scope, never hidden markups on furniture or material purchases.
              </p>
            </div>
            <div className="p-4 bg-[#F7F6F2] border border-[#E2DDD5] space-y-2">
              <h4 className="font-serif font-bold text-lg text-[#292B28]">Direct Quarry Sourcing</h4>
              <p className="text-xs text-[#292B28]/75 leading-relaxed">
                We connect clients directly to regional stone quarries and artisanal workshops to ensure authenticity and fair trade value.
              </p>
            </div>
            <div className="p-4 bg-[#F7F6F2] border border-[#E2DDD5] space-y-2">
              <h4 className="font-serif font-bold text-lg text-[#292B28]">Post-Handover Care</h4>
              <p className="text-xs text-[#292B28]/75 leading-relaxed">
                Every completed home receives a customized stone and timber maintenance dossier with annual wax and oil protocols.
              </p>
            </div>
          </div>
        </div>

        {/* Process CTA */}
        <div className="p-8 sm:p-14 bg-[#E9E4DA] border border-[#D8D2C7] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#292B28]">
              Ready to begin Phase 01?
            </h3>
            <p className="text-xs sm:text-sm text-[#292B28]/75">
              Share your floorplan, site location, and aspirations for an introductory dialogue.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/forma/consultation"
              className="px-6 py-3.5 bg-[#292B28] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#292B28]/90 transition-all flex items-center gap-2"
            >
              <span>Initiate Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
