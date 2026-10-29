import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowUpRight, RotateCcw } from 'lucide-react';
import { FORMA_PROJECTS } from '../data/projects';
import type { ProjectType } from '../types/interior';
import { HairlineDivider } from '../components/common/HairlineDivider';

const PROJECT_TYPES: ('All' | ProjectType)[] = [
  'All',
  'Residential',
  'Villa',
  'Apartment',
  'Hospitality',
  'Commercial',
];

export const ProjectsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'All' | ProjectType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    let list = [...FORMA_PROJECTS];

    if (selectedType !== 'All') {
      list = list.filter((p) => p.type === selectedType);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.materials.some((m) => m.name.toLowerCase().includes(q))
      );
    }

    return list;
  }, [selectedType, searchQuery]);

  const handleReset = () => {
    setSelectedType('All');
    setSearchQuery('');
  };

  const isFiltered = selectedType !== 'All' || searchQuery.trim() !== '';

  return (
    <div className="py-12 sm:py-20 bg-[#F7F6F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] uppercase tracking-[0.28em] font-sans font-semibold text-[#777A62] block">
            Archive (2022 – 2024)
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292B28] tracking-tight">
            Selected Architecture & Interiors
          </h1>
          <p className="text-sm sm:text-base text-[#292B28]/75 font-sans leading-relaxed pt-1">
            An ongoing body of work exploring the dialogue between natural light, regional mineral stone, honest joinery, and private living.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-[#E2DDD5] py-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {PROJECT_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-sans transition-all ${
                  selectedType === type
                    ? 'bg-[#292B28] text-white font-semibold'
                    : 'text-[#292B28]/70 hover:text-[#292B28] hover:bg-[#E9E4DA]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-[#292B28]/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-[#E9E4DA]/60 border border-[#E2DDD5] text-xs text-[#292B28] placeholder-[#292B28]/50 focus:outline-none focus:border-[#292B28]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-[#292B28]/50 hover:text-[#292B28]"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Count & Reset indicator */}
        <div className="flex items-center justify-between text-xs text-[#292B28]/60 font-sans">
          <span>
            Displaying <strong className="text-[#292B28]">{filteredProjects.length}</strong>{' '}
            {filteredProjects.length === 1 ? 'project' : 'projects'}
            {selectedType !== 'All' ? ` in ${selectedType}` : ''}
          </span>

          {isFiltered && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-[#777A62] hover:text-[#292B28] transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset filter</span>
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between space-y-4 bg-white border border-[#E2DDD5] p-5 shadow-2xs hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <Link
                  to={`/forma/projects/${project.slug}`}
                  className="block relative aspect-[4/3] w-full overflow-hidden bg-[#E9E4DA]"
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#292B28]/85 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-sans">
                    {project.type}
                  </div>
                </Link>

                {/* Metadata & Title */}
                <div className="space-y-2 flex-1 flex flex-col justify-between pt-1">
                  <div>
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#777A62] font-sans pb-1">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292B28]">
                      <Link
                        to={`/forma/projects/${project.slug}`}
                        className="hover:text-[#777A62] transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#292B28]/70 line-clamp-2 mt-1 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2DDD5]/60 flex items-center justify-between text-xs text-[#292B28]">
                    <span className="text-[11px] text-[#777A62] font-mono">{project.area}</span>
                    <Link
                      to={`/forma/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] font-medium text-[#292B28] group-hover:text-[#777A62] transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 bg-white border border-[#E2DDD5] p-8 max-w-lg mx-auto space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#292B28]">
              No Projects Found
            </h3>
            <p className="text-xs sm:text-sm text-[#292B28]/70">
              We could not find any projects matching "{searchQuery}". Try searching for stone, villa, or dehradun.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#292B28] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#292B28]/90 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        <HairlineDivider />

        {/* Bottom Consultation Link */}
        <div className="p-8 sm:p-12 bg-[#E9E4DA] border border-[#D8D2C7] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-2xl text-[#292B28]">
              Commission a Custom Space
            </h4>
            <p className="text-xs sm:text-sm text-[#292B28]/75">
              We accept a limited number of residential and boutique hospitality commissions each calendar year.
            </p>
          </div>
          <Link
            to="/forma/consultation"
            className="px-6 py-3 bg-[#292B28] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#292B28]/90 transition-all shrink-0"
          >
            Initiate Project Inquiry &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
