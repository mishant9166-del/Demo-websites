import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { FORMA_SERVICES } from '../data/services';

export const ServicesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#F7F6F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] uppercase tracking-[0.28em] font-sans font-semibold text-[#777A62] block">
            Disciplines & Practice
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292B28] tracking-tight">
            Design Services
          </h1>
          <p className="text-sm sm:text-base text-[#292B28]/75 font-sans leading-relaxed pt-1">
            Our studio provides comprehensive interior architecture services structured across six core capabilities. We guide clients through every phase from structural spatial exploration to custom joinery, material procurement, and fine art curation.
          </p>
        </div>

        {/* 6 Services Deep Showcases */}
        <div className="space-y-20">
          {FORMA_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bg-white border border-[#E2DDD5] p-8 sm:p-12 shadow-2xs space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left: Info & Stages */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#777A62]">
                      DISCIPLINE {serv.number}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#292B28]">
                      {serv.title}
                    </h2>
                    <p className="text-sm font-serif italic text-[#777A62]">
                      {serv.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#292B28]/80 font-sans leading-relaxed">
                    {serv.fullDescription}
                  </p>

                  {/* Suitable For */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-[#292B28] block">
                      Suitable For
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#292B28]/75 font-sans">
                      {serv.suitableFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#777A62] font-bold">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-[#292B28] block">
                      Key Deliverables
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#292B28]/75 font-sans">
                      {serv.deliverables.slice(0, 4).map((d, i) => (
                        <div key={i} className="flex items-start gap-2 bg-[#F7F6F2] p-2.5 border border-[#E2DDD5]">
                          <Check className="w-3.5 h-3.5 text-[#777A62] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/forma/services/${serv.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#292B28] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#292B28]/90 transition-all group"
                    >
                      <span>Explore Service Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      to="/forma/consultation"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium text-[#777A62] hover:text-[#292B28] transition-colors"
                    >
                      <span>Inquire About This Service &rarr;</span>
                    </Link>
                  </div>
                </div>

                {/* Right: Architectural Photograph */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden bg-[#E9E4DA] border border-[#E2DDD5]">
                    <img
                      src={serv.heroImage}
                      alt={serv.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4 bg-[#F7F6F2] border border-[#E2DDD5] text-xs text-[#292B28]/70 space-y-1">
                    <strong className="text-[#292B28] block uppercase tracking-wider text-[10px]">
                      Typical Duration:
                    </strong>
                    <span>8 to 20 weeks depending on structural scale and site conditions.</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-12 bg-[#E9E4DA] border border-[#D8D2C7] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-2xl text-[#292B28]">
              Uncertain which scope fits your property?
            </h3>
            <p className="text-xs sm:text-sm text-[#292B28]/75">
              We conduct initial project feasibility assessments to recommend the appropriate architectural package.
            </p>
          </div>
          <Link
            to="/forma/consultation"
            className="px-6 py-3 bg-[#292B28] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#292B28]/90 transition-all shrink-0"
          >
            Schedule Assessment &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
