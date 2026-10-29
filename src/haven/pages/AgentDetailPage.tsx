import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { HAVEN_AGENTS } from '../data/agents';
import { HAVEN_PROPERTIES } from '../data/properties';
import { PropertyCard } from '../components/properties/PropertyCard';
import { ArrowLeft, Phone, Mail } from 'lucide-react';

export const AgentDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const agent = useMemo(() => {
    return HAVEN_AGENTS.find((a) => a.slug === slug);
  }, [slug]);

  const assignedProperties = useMemo(() => {
    if (!agent) return [];
    return HAVEN_PROPERTIES.filter((p) => p.assignedAgentId === agent.id);
  }, [agent]);

  if (!agent) {
    return <Navigate to="/haven/agents" replace />;
  }

  return (
    <div className="py-8 sm:py-16 bg-[#FAF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            to="/haven/agents"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#899687] hover:text-[#254D3C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Advisors</span>
          </Link>
        </div>

        {/* Profile Card */}
        <div className="bg-white border border-[#E7DDCE] p-8 sm:p-12 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Portrait */}
          <div className="md:col-span-4 aspect-[3/4] w-full overflow-hidden bg-[#E7DDCE] border border-[#E7DDCE] rounded-xs">
            <img src={agent.photo} alt={agent.name} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div className="md:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#254D3C] bg-[#FAF9F5] px-2.5 py-1 border border-[#E7DDCE] inline-block font-semibold">
                {agent.experienceYears} Years Market Experience
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#292D2A]">
                {agent.name}
              </h1>
              <p className="text-sm font-sans text-[#899687] font-medium">{agent.role}</p>
            </div>

            <p className="text-sm sm:text-base text-[#292D2A]/85 font-sans leading-relaxed">
              {agent.bio}
            </p>

            {/* Specializations & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E7DDCE] text-xs font-sans">
              <div>
                <span className="font-mono text-[#899687] uppercase tracking-wider block text-[10px] mb-1">
                  Advisory Specializations
                </span>
                <ul className="space-y-1 text-[#292D2A]/90">
                  {agent.specialization.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#254D3C] rounded-full" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-mono text-[#899687] uppercase tracking-wider block text-[10px] mb-1">
                  Languages Spoken
                </span>
                <p className="text-[#292D2A]/90">{agent.languages.join(', ')}</p>

                <span className="font-mono text-[#899687] uppercase tracking-wider block text-[10px] mt-3 mb-1">
                  Regional Focus
                </span>
                <p className="text-[#292D2A]/90">{agent.areasOfFocus.join(', ')}</p>
              </div>
            </div>

            {/* Contact Placeholders */}
            <div className="pt-4 border-t border-[#E7DDCE] flex flex-wrap items-center gap-6 text-xs font-mono text-[#254D3C]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#899687]" />
                <span>{agent.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#899687]" />
                <span>{agent.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Assigned Properties */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#292D2A]">
              Properties Represented by {agent.name} ({assignedProperties.length})
            </h3>
            <Link
              to="/haven/properties"
              className="text-xs uppercase tracking-widest text-[#254D3C] font-semibold hover:underline"
            >
              All Registry Listings &rarr;
            </Link>
          </div>

          {assignedProperties.length === 0 ? (
            <div className="p-8 bg-white border border-[#E7DDCE] text-center text-xs text-[#899687]">
              No active listings currently assigned to this advisor.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {assignedProperties.map((p) => (
                <PropertyCard key={p.id} property={p} viewMode="grid" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentDetailPage;
