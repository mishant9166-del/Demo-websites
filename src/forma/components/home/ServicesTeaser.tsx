import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FORMA_SERVICES } from '../../data/services';

export const ServicesTeaser: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2DDD5] pb-6">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.28em] font-sans font-semibold text-[#777A62] block">
              Disciplines
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#292B28] tracking-tight">
              Design Services
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#292B28]/70 max-w-md font-sans">
            From comprehensive structural interior architecture to fine bespoke furniture curation, each discipline is executed with meticulous technical rigour.
          </p>
        </div>

        {/* 6 Services List / Accordion-style Grid */}
        <div className="divide-y divide-[#E2DDD5]">
          {FORMA_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="py-8 sm:py-10 group grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline transition-colors hover:bg-[#E9E4DA]/40 px-2 sm:px-4"
            >
              <div className="md:col-span-1 text-xs font-mono text-[#777A62]">
                {serv.number}
              </div>

              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292B28]">
                  <Link
                    to={`/forma/services/${serv.slug}`}
                    className="hover:text-[#777A62] transition-colors"
                  >
                    {serv.title}
                  </Link>
                </h3>
                <span className="text-xs text-[#777A62] block mt-1">
                  {serv.tagline}
                </span>
              </div>

              <div className="md:col-span-5">
                <p className="text-xs sm:text-sm text-[#292B28]/75 font-sans leading-relaxed">
                  {serv.shortDescription}
                </p>
              </div>

              <div className="md:col-span-2 text-left md:text-right">
                <Link
                  to={`/forma/services/${serv.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-medium text-[#292B28] group-hover:text-[#777A62] transition-colors"
                >
                  <span>Explore Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
