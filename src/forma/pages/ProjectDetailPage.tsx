import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Maximize2 } from 'lucide-react';
import { FORMA_PROJECTS } from '../data/projects';
import { HairlineDivider } from '../components/common/HairlineDivider';
import { ImageLightbox } from '../components/common/ImageLightbox';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = FORMA_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-24 max-w-xl mx-auto px-4 text-center space-y-6">
        <span className="text-[11px] uppercase tracking-[0.28em] font-sans text-[#777A62] block">
          Error 404
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#292B28]">
          Case Study Not Found
        </h2>
        <p className="text-sm text-[#292B28]/70">
          The project file you requested does not exist or has been archived from public review.
        </p>
        <Link
          to="/forma/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#292B28] text-white text-xs uppercase tracking-[0.2em] font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Archive</span>
        </Link>
      </div>
    );
  }

  // Related projects
  const relatedProjects = FORMA_PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="py-10 sm:py-16 bg-[#F7F6F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Breadcrumb & Back Link */}
        <div className="flex items-center justify-between text-xs font-sans text-[#292B28]/60 border-b border-[#E2DDD5] pb-4">
          <Link
            to="/forma/projects"
            className="inline-flex items-center gap-2 hover:text-[#292B28] transition-colors uppercase tracking-[0.16em]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <span className="uppercase tracking-[0.2em] text-[10px] text-[#777A62]">
            {project.type} &bull; {project.year}
          </span>
        </div>

        {/* Project Header Title & Metadata */}
        <div className="space-y-6 max-w-4xl">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.26em] font-sans font-semibold text-[#777A62]">
              Case Study &bull; {project.location}
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292B28] leading-[1.08] tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-serif italic text-[#777A62] pt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Metadata Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[#E2DDD5] text-xs font-sans">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#777A62] block mb-1">
                Typology
              </span>
              <span className="font-semibold text-[#292B28]">{project.type}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#777A62] block mb-1">
                Location
              </span>
              <span className="font-semibold text-[#292B28]">{project.location}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#777A62] block mb-1">
                Footprint
              </span>
              <span className="font-semibold text-[#292B28]">{project.area}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#777A62] block mb-1">
                Completed
              </span>
              <span className="font-semibold text-[#292B28]">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Hero Full-Bleed Photograph */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#E9E4DA] border border-[#E2DDD5]">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overview & Design Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-4">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.24em] font-sans font-semibold text-[#777A62] block">
              Overview
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#292B28] leading-relaxed">
              “{project.overview}”
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 text-sm sm:text-base text-[#292B28]/80 font-sans leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.24em] font-bold text-[#292B28] border-b border-[#E2DDD5] pb-2">
                The Client Brief
              </h3>
              <p>{project.brief}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.24em] font-bold text-[#292B28] border-b border-[#E2DDD5] pb-2">
                Architectural Approach
              </h3>
              <p>{project.approach}</p>
            </div>
          </div>
        </div>

        <HairlineDivider />

        {/* Material Palette Grid */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.26em] font-sans font-semibold text-[#777A62] block">
              Materiality
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#292B28]">
              Primary Material Palette
            </h2>
            <p className="text-xs sm:text-sm text-[#292B28]/70 max-w-xl font-sans">
              Specifying tactile honesty and regional minerals that age with dignity under daily human use.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.materials.map((mat, i) => (
              <div key={i} className="bg-white border border-[#E2DDD5] p-4 space-y-3">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#E9E4DA]">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#777A62]">
                    {mat.category}
                  </span>
                  <h4 className="font-serif font-bold text-base text-[#292B28]">
                    {mat.name}
                  </h4>
                  <p className="text-xs text-[#292B28]/70 leading-relaxed pt-0.5">
                    {mat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <HairlineDivider />

        {/* Image Gallery with Lightbox Interaction */}
        <div className="space-y-6">
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.26em] font-sans font-semibold text-[#777A62] block">
                Visual Documentation
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#292B28]">
                Spatial Gallery
              </h2>
            </div>
            <span className="text-xs text-[#777A62] font-sans">
              Click any plate to expand (Keyboard accessible)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {project.galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] overflow-hidden bg-[#E9E4DA] border border-[#E2DDD5] cursor-pointer"
              >
                <img
                  src={img}
                  alt={`${project.title} photograph ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#292B28]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#292B28] flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <HairlineDivider />

        {/* Related Projects */}
        <div className="space-y-8">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.26em] font-sans font-semibold text-[#777A62] block">
              Related Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#292B28]">
              Parallel Explorations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                to={`/forma/projects/${rel.slug}`}
                className="group block bg-white border border-[#E2DDD5] p-5 space-y-4 shadow-2xs hover:shadow-md transition-all"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#E9E4DA]">
                  <img
                    src={rel.heroImage}
                    alt={rel.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#777A62]">
                    <span>{rel.type}</span>
                    <span>{rel.location}</span>
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#292B28] group-hover:text-[#777A62] transition-colors">
                    {rel.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Consultation Call to Action */}
        <div className="p-8 sm:p-14 bg-[#292B28] text-[#F7F6F2] text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-serif font-bold">
            Considering a similar commission?
          </h3>
          <p className="text-sm sm:text-base text-[#F7F6F2]/75 max-w-xl mx-auto font-sans leading-relaxed">
            We collaborate with clients across India and internationally. Schedule an introductory conversation with our partners to discuss your brief.
          </p>
          <div className="pt-2">
            <Link
              to="/forma/consultation"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F7F6F2] text-[#292B28] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E9E4DA] transition-all"
            >
              <span>Initiate Project Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Lightbox Component */}
        <ImageLightbox
          isOpen={lightboxOpen}
          images={project.galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
          title={project.title}
        />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
