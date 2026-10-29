import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { FORMA_SERVICES } from '../data/services';
import { FORMA_PROJECTS } from '../data/projects';
import { HairlineDivider } from '../components/common/HairlineDivider';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = FORMA_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-24 max-w-xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-serif font-bold text-[#292B28]">
          Service Not Found
        </h2>
        <p className="text-sm text-[#292B28]/70">
          The design discipline you requested does not exist.
        </p>
        <Link
          to="/forma/services"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#292B28] text-white text-xs uppercase tracking-[0.2em]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Services</span>
        </Link>
      </div>
    );
  }

  // Find related projects
  const relatedProjects = FORMA_PROJECTS.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );

  return (
    <div className="py-12 sm:py-20 bg-[#F7F6F2] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back Link */}
        <div className="border-b border-[#E2DDD5] pb-4 flex items-center justify-between text-xs font-sans text-[#292B28]/60">
          <Link
            to="/forma/services"
            className="inline-flex items-center gap-2 hover:text-[#292B28] transition-colors uppercase tracking-[0.16em]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>

          <span className="font-mono text-[11px] text-[#777A62]">
            DISCIPLINE {service.number}
          </span>
        </div>

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.26em] font-sans font-semibold text-[#777A62]">
            Architectural Capability
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292B28] tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-lg sm:text-xl font-serif italic text-[#777A62]">
            {service.tagline}
          </p>
        </div>

        {/* Hero Photo */}
        <div className="aspect-[16/9] w-full overflow-hidden bg-[#E9E4DA] border border-[#E2DDD5]">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scope Overview & Suitability */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.24em] font-bold text-[#292B28] border-b border-[#E2DDD5] pb-2">
              Scope of Service
            </h3>
            <p className="text-base sm:text-lg text-[#292B28]/85 font-sans leading-relaxed">
              {service.fullDescription}
            </p>
            <p className="text-sm text-[#292B28]/75 font-sans leading-relaxed">
              {service.shortDescription}
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#E2DDD5] p-6 sm:p-8 space-y-4">
            <h4 className="font-serif font-bold text-xl text-[#292B28]">
              Who This Service Is For
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#292B28]/80 font-sans">
              {service.suitableFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#777A62] font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <HairlineDivider />

        {/* Typical Project Stages */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.24em] font-sans font-semibold text-[#777A62] block">
              Methodology
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#292B28]">
              Typical Project Stages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.keyStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2DDD5] p-6 space-y-2 relative"
              >
                <span className="text-xs font-mono text-[#777A62] block">
                  STAGE 0{idx + 1}
                </span>
                <h4 className="font-serif font-bold text-lg text-[#292B28]">
                  {stage.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#292B28]/75 font-sans leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <HairlineDivider />

        {/* Expected Deliverables */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.24em] font-sans font-semibold text-[#777A62] block">
              Documentation
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#292B28]">
              Expected Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.deliverables.map((d, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white p-4 border border-[#E2DDD5]"
              >
                <Check className="w-4 h-4 text-[#777A62] shrink-0 mt-0.5" />
                <span className="text-xs text-[#292B28]/85 font-sans leading-relaxed">
                  {d}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Example Projects */}
        {relatedProjects.length > 0 && (
          <>
            <HairlineDivider />
            <div className="space-y-8">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-[0.24em] font-sans font-semibold text-[#777A62] block">
                  Portfolio Proof
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#292B28]">
                  Relevant Case Studies
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {relatedProjects.map((p) => (
                  <Link
                    key={p.id}
                    to={`/forma/projects/${p.slug}`}
                    className="group block bg-white border border-[#E2DDD5] p-5 space-y-3"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-[#E9E4DA]">
                      <img
                        src={p.heroImage}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#777A62]">
                      <span>{p.location}</span>
                      <span>{p.type}</span>
                    </div>
                    <h4 className="font-serif font-bold text-xl text-[#292B28] group-hover:text-[#777A62] transition-colors">
                      {p.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Enquire Block */}
        <div className="p-8 sm:p-14 bg-[#292B28] text-white text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-serif font-bold">
            Ready to discuss {service.title}?
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto font-sans leading-relaxed">
            Reach out with your property address, approximate floorplan, and desired commencement date.
          </p>
          <div className="pt-2">
            <Link
              to="/forma/consultation"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#292B28] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E9E4DA] transition-all"
            >
              <span>Submit Project Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
