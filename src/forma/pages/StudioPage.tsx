import React from 'react';
import { Link } from 'react-router-dom';
import { FORMA_TEAM } from '../data/team';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { HairlineDivider } from '../components/common/HairlineDivider';

export const StudioPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#F7F6F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Studio Manifesto Header */}
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#777A62] block">
            The Practice &bull; Established 2018
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#292B28] leading-[1.08] tracking-tight">
            An architecture practice shaped by restraint, material honesty, and light.
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-[#292B28]/85 leading-relaxed pt-2">
            “{STUDIO_CONFIG.manifesto}”
          </p>
        </div>

        {/* Large Studio Atelier Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E9E4DA] border border-[#E2DDD5]">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
            alt="Forma Studio interior architecture practice atelier in Dhan Mill New Delhi"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-[#F7F6F2]/90 backdrop-blur-sm p-4 border border-[#E2DDD5] text-xs text-[#292B28] flex justify-between items-center">
            <span>The Atelier & Materials Library &bull; Dhan Mill Compound, New Delhi</span>
            <span className="hidden sm:inline text-[#777A62]">By Appointment Only</span>
          </div>
        </div>

        {/* Philosophy & Craftsmanship Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.24em] font-sans font-semibold text-[#777A62] block">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#292B28]">
              Material Authenticity over Surface Spectacle
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#292B28]/80 font-sans leading-relaxed">
            <p>
              Founded in 2018 by Kabir Mehta, Forma Studio arose out of a reaction against decorative excess and fast-paced commercial trends. We observed that contemporary Indian luxury homes were increasingly filled with imported glossy composites that chipped within months and felt disconnected from their climate.
            </p>
            <p>
              Our response has been to cultivate deep, direct partnerships with regional stone quarries in Rajasthan and Madhya Pradesh, heritage lime-slaking artisans, and generational wood joiners. We design every junction with structural honesty, allowing raw materials to age and develop a noble patina alongside the residents.
            </p>
          </div>
        </div>

        <HairlineDivider />

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-sm text-[#292B28]/80 font-sans leading-relaxed">
          <div className="bg-white p-8 border border-[#E2DDD5] space-y-3">
            <span className="text-xs font-mono text-[#777A62] block">01 / PROPORTION</span>
            <h3 className="font-serif font-bold text-xl text-[#292B28]">Vedic Spatial Flow</h3>
            <p>
              We study sightlines, thresholds, and cross-ventilation so movement through the home feels effortless and deeply grounded in its compass orientation.
            </p>
          </div>

          <div className="bg-white p-8 border border-[#E2DDD5] space-y-3">
            <span className="text-xs font-mono text-[#777A62] block">02 / ACOUSTICS</span>
            <h3 className="font-serif font-bold text-xl text-[#292B28]">Quiet Permanence</h3>
            <p>
              Silence is an architectural specification. We deploy acoustic plaster, heavy linen drapes, and dense limestone floors that eliminate echo and external road hum.
            </p>
          </div>

          <div className="bg-white p-8 border border-[#E2DDD5] space-y-3">
            <span className="text-xs font-mono text-[#777A62] block">03 / LONGEVITY</span>
            <h3 className="font-serif font-bold text-xl text-[#292B28]">Generational Dignity</h3>
            <p>
              We design homes intended to look better thirty years from now than on handover day. No plastic films, no fake veneers, no temporary fads.
            </p>
          </div>
        </div>

        <HairlineDivider />

        {/* The Team Profiles */}
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.24em] font-sans font-semibold text-[#777A62] block">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#292B28]">
              The Studio Partners & Specialists
            </h2>
            <p className="text-xs sm:text-sm text-[#292B28]/70 max-w-xl font-sans">
              A tight-knit collective of architects, interior architects, and materials specialists collaborating on every commission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FORMA_TEAM.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-[#E2DDD5] p-5 space-y-4 shadow-2xs"
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-[#E9E4DA]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-xl text-[#292B28]">
                    {member.name}
                  </h4>
                  <span className="text-xs text-[#777A62] block font-medium">
                    {member.role}
                  </span>
                  <span className="text-[10px] text-[#292B28]/50 block font-mono pt-0.5">
                    {member.education}
                  </span>
                  <p className="text-xs text-[#292B28]/75 leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Studio CTA */}
        <div className="p-8 sm:p-14 bg-[#E9E4DA] border border-[#D8D2C7] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-2xl text-[#292B28]">
              Visit Our Atelier in New Delhi
            </h3>
            <p className="text-xs sm:text-sm text-[#292B28]/75">
              We welcome prospective clients by appointment to explore material samples, mock-ups, and portfolio folios.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/forma/projects"
              className="px-6 py-3 border border-[#292B28] text-[#292B28] text-xs uppercase tracking-[0.18em] font-medium hover:bg-white transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/forma/consultation"
              className="px-6 py-3 bg-[#292B28] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#292B28]/90 transition-all"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioPage;
