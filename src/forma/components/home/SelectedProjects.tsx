import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { FORMA_PROJECTS } from '../../data/projects';
import { HairlineDivider } from '../common/HairlineDivider';

export const SelectedProjects: React.FC = () => {
  // Show 4 featured projects with varied compositions
  const featured = FORMA_PROJECTS.slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2DDD5] pb-6">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.28em] font-sans font-semibold text-[#777A62] block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#292B28] tracking-tight">
              Selected Works
            </h2>
          </div>

          <Link
            to="/forma/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#292B28] hover:text-[#777A62] transition-colors group"
          >
            <span>View Complete Archive (6 Projects)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Varied Project Compositions */}
        <div className="space-y-24 sm:space-y-32">
          {/* Project 1: Wide Bleed Hero Plate */}
          {featured[0] && (
            <div className="group space-y-6">
              <Link to={`/forma/projects/${featured[0].slug}`} className="block relative overflow-hidden bg-[#E9E4DA]">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={featured[0].heroImage}
                    alt={featured[0].title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline pt-2">
                <div className="md:col-span-5 space-y-1">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-sans text-[#777A62]">
                    <span>{featured[0].type}</span>
                    <span>&bull;</span>
                    <span>{featured[0].location}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#292B28]">
                    <Link to={`/forma/projects/${featured[0].slug}`} className="hover:text-[#777A62] transition-colors">
                      {featured[0].title}
                    </Link>
                  </h3>
                </div>

                <div className="md:col-span-5">
                  <p className="text-sm text-[#292B28]/75 font-sans leading-relaxed">
                    {featured[0].overview}
                  </p>
                </div>

                <div className="md:col-span-2 text-left md:text-right">
                  <Link
                    to={`/forma/projects/${featured[0].slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-medium text-[#292B28] hover:text-[#777A62] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          <HairlineDivider />

          {/* Project 2 & 3: Asymmetrical Pair */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Pair Item (Large Portrait) */}
            {featured[1] && (
              <div className="lg:col-span-7 group space-y-6">
                <Link to={`/forma/projects/${featured[1].slug}`} className="block relative overflow-hidden bg-[#E9E4DA]">
                  <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                    <img
                      src={featured[1].heroImage}
                      alt={featured[1].title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-sans text-[#777A62]">
                    <span>{featured[1].type}</span>
                    <span>&bull;</span>
                    <span>{featured[1].location}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#292B28]">
                    <Link to={`/forma/projects/${featured[1].slug}`} className="hover:text-[#777A62] transition-colors">
                      {featured[1].title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#292B28]/75 font-sans leading-relaxed max-w-xl">
                    {featured[1].overview}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={`/forma/projects/${featured[1].slug}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-medium text-[#292B28] hover:text-[#777A62] transition-colors"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Right Pair Item (Offset Stack) */}
            {featured[2] && (
              <div className="lg:col-span-5 group space-y-6 lg:pt-16">
                <Link to={`/forma/projects/${featured[2].slug}`} className="block relative overflow-hidden bg-[#E9E4DA]">
                  <div className="aspect-[3/4] w-full overflow-hidden">
                    <img
                      src={featured[2].heroImage}
                      alt={featured[2].title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-sans text-[#777A62]">
                    <span>{featured[2].type}</span>
                    <span>&bull;</span>
                    <span>{featured[2].location}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#292B28]">
                    <Link to={`/forma/projects/${featured[2].slug}`} className="hover:text-[#777A62] transition-colors">
                      {featured[2].title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#292B28]/75 font-sans leading-relaxed">
                    {featured[2].overview}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={`/forma/projects/${featured[2].slug}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-medium text-[#292B28] hover:text-[#777A62] transition-colors"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <HairlineDivider />

          {/* Project 4: Full-Width Architectural Split */}
          {featured[3] && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 group">
                <Link to={`/forma/projects/${featured[3].slug}`} className="block relative overflow-hidden bg-[#E9E4DA]">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={featured[3].heroImage}
                      alt={featured[3].title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </Link>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-sans text-[#777A62]">
                  <span>{featured[3].type}</span>
                  <span>&bull;</span>
                  <span>{featured[3].location}</span>
                  <span>&bull;</span>
                  <span>{featured[3].year}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#292B28]">
                  <Link to={`/forma/projects/${featured[3].slug}`} className="hover:text-[#777A62] transition-colors">
                    {featured[3].title}
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-[#292B28]/80 font-sans leading-relaxed">
                  {featured[3].overview}
                </p>

                <div className="pt-2">
                  <Link
                    to={`/forma/projects/${featured[3].slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#292B28] text-[#FFFFFF] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#292B28]/90 transition-all group"
                  >
                    <span>Explore Hospitality Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
