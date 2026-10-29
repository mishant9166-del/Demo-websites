import React from 'react';
import { Link } from 'react-router-dom';
import { HAVEN_AGENTS } from '../data/agents';
import { ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-6">
          <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#899687] font-semibold block">
            The Advisory &bull; Established Mumbai 2016
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292D2A] leading-tight">
            An independent property advisory built on transparency and architectural sensibility.
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-[#254D3C] leading-relaxed">
            “We believe finding a home is not a transactional search; it is an intimate transition into a new chapter of living.”
          </p>
        </div>

        {/* Brand Story Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E7DDCE] border border-[#E7DDCE]">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
            alt="Haven and Key advisory desk meeting in Mumbai"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-white px-3 py-1.5 text-xs font-mono">
            Haven & Key Nariman Point Advisory &bull; Mumbai Headquarters
          </div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-[#E7DDCE] p-8 space-y-3">
            <span className="font-mono text-xs text-[#254D3C] font-bold">01 / DIGNITY IN CURATION</span>
            <h3 className="font-serif font-bold text-xl text-[#292D2A]">Zero Duplicate Listings</h3>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 font-sans leading-relaxed">
              We decline 65% of potential properties. We only list homes with clear structural provenance, natural light orientation, and verified encumbrance-free titles.
            </p>
          </div>

          <div className="bg-white border border-[#E7DDCE] p-8 space-y-3">
            <span className="font-mono text-xs text-[#254D3C] font-bold">02 / CONFIDENTIAL PRIVACY</span>
            <h3 className="font-serif font-bold text-xl text-[#292D2A]">Discreet Representation</h3>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 font-sans leading-relaxed">
              Whether advising prominent family offices or first-time luxury apartment buyers, we safeguard client identities and pricing strategies with uncompromising rigor.
            </p>
          </div>

          <div className="bg-white border border-[#E7DDCE] p-8 space-y-3">
            <span className="font-mono text-xs text-[#254D3C] font-bold">03 / END-TO-END TITLE DUE DILIGENCE</span>
            <h3 className="font-serif font-bold text-xl text-[#292D2A]">Legal Proofing</h3>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 font-sans leading-relaxed">
              Our in-house legal counsel conducts 30-year search reports, society NOC verification, and municipal sanction audit before signing.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-mono text-[#899687]">
              Advisory Partners
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#292D2A]">
              Meet Our Senior Property Specialists
            </h2>
            <p className="text-xs sm:text-sm text-[#292D2A]/70 max-w-xl font-sans">
              Experienced real estate advisors with deep, long-standing relationships across regional micro-markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HAVEN_AGENTS.map((agent) => (
              <div
                key={agent.id}
                className="bg-white border border-[#E7DDCE] p-5 space-y-4 shadow-2xs group"
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-[#E7DDCE]">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-xl text-[#292D2A]">
                    <Link to={`/haven/agents/${agent.slug}`} className="hover:text-[#254D3C]">
                      {agent.name}
                    </Link>
                  </h4>
                  <span className="text-xs text-[#899687] block font-sans">{agent.role}</span>
                  <span className="text-[11px] text-[#254D3C] font-mono block">
                    {agent.experienceYears} Years Market Experience
                  </span>
                  <p className="text-xs text-[#292D2A]/75 leading-relaxed pt-2 line-clamp-3">
                    {agent.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-14 bg-[#254D3C] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-xs">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Schedule a Confidential Property Dialogue
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-sans max-w-md">
              Visit our headquarters in Nariman Point or connect with a regional desk advisor.
            </p>
          </div>
          <Link
            to="/haven/contact"
            className="px-6 py-3.5 bg-white text-[#254D3C] text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#FAF9F5] transition-all shrink-0 flex items-center gap-2 rounded-xs"
          >
            <span>Contact Advisory Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
