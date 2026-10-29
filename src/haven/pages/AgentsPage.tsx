import React from 'react';
import { Link } from 'react-router-dom';
import { HAVEN_AGENTS } from '../data/agents';
import { HAVEN_PROPERTIES } from '../data/properties';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export const AgentsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#899687] font-semibold block">
            Advisory Council &bull; Micro-Market Leads
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292D2A]">
            Our Real Estate Advisors
          </h1>
          <p className="text-sm sm:text-base text-[#292D2A]/75 font-sans leading-relaxed">
            Every Haven & Key advisor brings specialized knowledge of specific city micro-markets, building codes, and community nuances. Connect directly for discreet guidance.
          </p>
        </div>

        {/* 4 Advisors Detailed Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HAVEN_AGENTS.map((agent) => {
            const assignedCount = HAVEN_PROPERTIES.filter(
              (p) => p.assignedAgentId === agent.id
            ).length;

            return (
              <div
                key={agent.id}
                className="bg-white border border-[#E7DDCE] p-8 flex flex-col justify-between space-y-6 group hover:border-[#254D3C] transition-all shadow-2xs"
              >
                <div className="space-y-6">
                  {/* Portrait & Role Row */}
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-[#E7DDCE] shrink-0 border border-[#E7DDCE]">
                      <img
                        src={agent.photo}
                        alt={agent.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#254D3C] bg-[#FAF9F5] px-2 py-0.5 border border-[#E7DDCE] inline-block font-semibold">
                        {agent.experienceYears} Years Advisory
                      </span>
                      <h3 className="font-serif font-bold text-2xl text-[#292D2A] group-hover:text-[#254D3C] transition-colors">
                        <Link to={`/haven/agents/${agent.slug}`}>{agent.name}</Link>
                      </h3>
                      <p className="text-xs text-[#899687] font-sans font-medium">{agent.role}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-[#292D2A]/80 font-sans leading-relaxed">
                    {agent.bio}
                  </p>

                  {/* Areas of Focus */}
                  <div className="space-y-1.5 pt-2 border-t border-[#E7DDCE]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#899687] block">
                      Core Enclaves & Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {agent.areasOfFocus.map((area, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-[#FAF9F5] border border-[#E7DDCE] text-[11px] font-sans text-[#292D2A]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-4 border-t border-[#E7DDCE] flex items-center justify-between">
                  <div className="text-xs font-mono text-[#899687]">
                    <span>{assignedCount} Represented Listings</span>
                  </div>

                  <Link
                    to={`/haven/agents/${agent.slug}`}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.16em] font-bold text-[#254D3C] hover:text-[#1E3F31]"
                  >
                    <span>View Advisor Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fictional demo notice */}
        <div className="p-4 bg-white border border-[#E7DDCE] flex items-center gap-3 text-xs text-[#292D2A]/70 font-sans">
          <ShieldCheck className="w-4 h-4 text-[#899687] shrink-0" />
          <span>
            <strong>Demonstration Personnel:</strong> Agent profiles represent illustrative demo personas crafted for frontend UI demonstration. No real licenses or broker registrations are implied.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;
