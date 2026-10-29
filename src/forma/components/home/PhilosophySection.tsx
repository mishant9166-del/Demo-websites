import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sun, Layers, Feather } from 'lucide-react';
import { HairlineDivider } from '../common/HairlineDivider';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#E9E4DA] text-[#292B28] border-y border-[#D8D2C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.28em] font-sans font-semibold text-[#777A62] block">
              Ethos & Practice
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#292B28] mt-2 leading-tight">
              A quieter approach to contemporary living.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#292B28]/85 font-sans text-base sm:text-lg leading-relaxed">
            <p>
              We do not treat interior design as surface decoration or transient staging. Instead, we approach each home as an architectural volume whose light, acoustics, circulation, and tactile surfaces directly influence the psychological wellbeing of those who dwell within.
            </p>
            <p className="text-sm sm:text-base text-[#292B28]/75">
              By paring away unnecessary visual noise and specifying honest, unpolished materials—such as regional limestone, solid oiled hardwoods, lime wash, and unbleached Belgian linen—we craft living environments that grow more dignified with time and wear.
            </p>
          </div>
        </div>

        <HairlineDivider dark />

        {/* 4 Architectural Cornerstones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="w-8 h-8 flex items-center justify-center text-[#777A62]">
              <Sun className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#292B28]">Choreographed Daylight</h4>
            <p className="text-xs sm:text-sm text-[#292B28]/75 leading-relaxed">
              Calibrating apertures and deep reveals so natural light illuminates softly without causing midday glare or thermal fatigue.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-8 h-8 flex items-center justify-center text-[#777A62]">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#292B28]">Honest Materiality</h4>
            <p className="text-xs sm:text-sm text-[#292B28]/75 leading-relaxed">
              Zero imitation veneers or synthetic tiles. We build with solid stone, breathable lime plasters, and timber that deepens in patina.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-8 h-8 flex items-center justify-center text-[#777A62]">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#292B28]">Spatial Proportions</h4>
            <p className="text-xs sm:text-sm text-[#292B28]/75 leading-relaxed">
              Prioritizing intuitive circulation, clean datum alignments, and generous ceiling heights over compartmentalized floorplans.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-8 h-8 flex items-center justify-center text-[#777A62]">
              <Feather className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#292B28]">Invisible Utility</h4>
            <p className="text-xs sm:text-sm text-[#292B28]/75 leading-relaxed">
              Full-height flush storage integrated seamlessly into architectural panelling to keep everyday living free from clutter.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-4 flex items-center gap-4">
          <Link
            to="/forma/studio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#292B28] hover:text-[#777A62] transition-colors group"
          >
            <span>Learn More About Our Studio & Team</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
