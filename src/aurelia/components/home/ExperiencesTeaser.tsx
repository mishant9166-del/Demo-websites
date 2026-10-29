import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock, Compass } from 'lucide-react';
import { AURELIA_EXPERIENCES } from '../../data/experiences';

export const ExperiencesTeaser: React.FC = () => {
  const experiences = AURELIA_EXPERIENCES.slice(0, 3);

  return (
    <section className="py-24 bg-[#173D32] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5BE91] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Resort Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F8F5EF] leading-tight">
              Moments created to <span className="italic font-normal text-[#D5BE91]">linger.</span>
            </h2>
            <p className="mt-4 text-base text-[#F8F5EF]/80 font-light leading-relaxed">
              Beyond accommodation, an Aurelia retreat is an invitation to experience rare local traditions, restorative wellness rituals, and transformative nature encounters.
            </p>
          </div>

          <Link
            to="/aurelia/experiences"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#D5BE91] hover:text-[#FFFFFF] border-b border-[#D5BE91]/50 pb-1 self-start md:self-end group transition-all"
          >
            <span>Explore All Experiences</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Experiences Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <Link
              key={exp.slug}
              to={`/aurelia/experiences/${exp.slug}`}
              className="group flex flex-col bg-[#122A22] rounded-xs overflow-hidden border border-[#D5BE91]/25 hover:border-[#D5BE91] transition-all duration-300"
            >
              {/* Photo Frame */}
              <div className="aspect-16/10 overflow-hidden relative">
                <img
                  src={exp.heroImage}
                  alt={exp.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                />
                <span className="absolute top-3 left-3 bg-[#173D32]/90 backdrop-blur-xs text-[#D5BE91] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-xs border border-[#D5BE91]/30">
                  {exp.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-[#D5BE91] font-mono mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-[#F8F5EF] group-hover:text-[#D5BE91] transition-colors mb-2 leading-snug">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F8F5EF]/75 font-light line-clamp-2 leading-relaxed mb-4">
                    {exp.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#D5BE91] font-medium tracking-wide">
                  <span className="flex items-center gap-1 text-[11px] text-[#B8B0A2]">
                    <Compass className="w-3 h-3 text-[#D5BE91]" />
                    {exp.locationNote.split('&bull;')[0]}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
