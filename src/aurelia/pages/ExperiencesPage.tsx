import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Clock, Users, ArrowRight, Sparkles } from 'lucide-react';
import { AURELIA_EXPERIENCES } from '../data/experiences';
import type { ExperienceItem } from '../types/hospitality';

export const ExperiencesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Wellness & Spa',
    'Private Dining',
    'Nature & Trails',
    'Cultural Discovery',
    'Excursions',
  ];

  const filtered =
    selectedCategory === 'All'
      ? AURELIA_EXPERIENCES
      : AURELIA_EXPERIENCES.filter((e) => e.category === selectedCategory);

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* Editorial Header */}
      <section className="bg-[#173D32] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5BE91] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Curated Guest Encounters</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F8F5EF] leading-tight max-w-3xl mb-4">
            Experiences designed around the <span className="italic font-normal text-[#D5BE91]">spirit of the land.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F8F5EF]/80 font-light max-w-2xl leading-relaxed">
            From moonlit sandbar dinners to guided bioluminescent rainforest night treks, discover bespoke moments curated exclusively for our guests.
          </p>

          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#D5BE91] text-[#173D32]'
                    : 'bg-white/10 hover:bg-white/20 text-[#F8F5EF] border border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of Experiences */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((exp: ExperienceItem) => (
            <div
              key={exp.slug}
              className="bg-white rounded-xs border border-[#D5BE91]/30 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-16/10 relative overflow-hidden">
                  <img
                    src={exp.heroImage}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#173D32]/90 backdrop-blur-xs text-[#D5BE91] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-xs">
                    {exp.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#B8B0A2] font-mono mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#173D32]" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#173D32]" />
                      {exp.suitableFor.split(',')[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-[#173D32] group-hover:text-[#122A22] mb-2 leading-snug">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#292B27]/75 font-light line-clamp-3 mb-4 leading-relaxed">
                    {exp.overview}
                  </p>

                  <div className="pt-3 border-t border-[#D5BE91]/20 text-[11px] text-[#B8B0A2] font-medium flex items-center gap-1.5">
                    <Compass className="w-3 h-3 text-[#173D32]" />
                    <span>{exp.locationNote}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#D5BE91]/20">
                <Link
                  to={`/aurelia/experiences/${exp.slug}`}
                  className="text-xs uppercase tracking-wider font-semibold text-[#173D32] hover:text-[#D5BE91] transition-colors flex items-center gap-1"
                >
                  <span>Experience Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to={`/aurelia/contact?enquiry=${encodeURIComponent(exp.title)}`}
                  className="px-3.5 py-1.5 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-[11px] uppercase tracking-wider font-semibold rounded-xs"
                >
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
