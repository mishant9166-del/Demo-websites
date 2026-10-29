import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { HAVEN_NEIGHBORHOODS } from '../data/neighborhoods';
import { HAVEN_PROPERTIES } from '../data/properties';
import { PropertyCard } from '../components/properties/PropertyCard';
import { ArrowLeft, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export const NeighborhoodDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const neighborhood = useMemo(() => {
    return HAVEN_NEIGHBORHOODS.find((n) => n.slug === slug);
  }, [slug]);

  const relatedProperties = useMemo(() => {
    if (!neighborhood) return [];
    return HAVEN_PROPERTIES.filter(
      (p) => p.neighborhoodSlug === neighborhood.slug || p.city === neighborhood.city
    );
  }, [neighborhood]);

  if (!neighborhood) {
    return <Navigate to="/haven/neighborhoods" replace />;
  }

  return (
    <div className="py-8 sm:py-16 bg-[#FAF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            to="/haven/neighborhoods"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#899687] hover:text-[#254D3C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Neighborhood Guides</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#899687]">
            <MapPin className="w-3.5 h-3.5 text-[#254D3C]" />
            <span>{neighborhood.city}, India</span>
            <span>&bull;</span>
            <span className="bg-[#E7DDCE] text-[#254D3C] px-2 py-0.5 font-bold uppercase tracking-wider text-[10px]">
              Signature Postal Code
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292D2A]">
            {neighborhood.name}
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#254D3C] leading-relaxed">
            “{neighborhood.tagline}”
          </p>
        </div>

        {/* Large Hero Landscape */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E7DDCE] border border-[#E7DDCE] shadow-sm">
          <img
            src={neighborhood.heroImage}
            alt={neighborhood.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-white px-3 py-1.5 text-xs font-mono">
            {neighborhood.name} &bull; {neighborhood.city}
          </div>
        </div>

        {/* 2-Column Editorial Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Overview, Lifestyle, Highlights */}
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white border border-[#E7DDCE] p-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#292D2A]">
                The Neighborhood Narrative
              </h2>
              <p className="text-sm sm:text-base text-[#292D2A]/85 font-sans leading-relaxed">
                {neighborhood.overview}
              </p>
            </div>

            <div className="bg-white border border-[#E7DDCE] p-8 space-y-4">
              <h3 className="text-2xl font-serif font-bold text-[#292D2A]">
                Daily Living Rhythm & Atmosphere
              </h3>
              <p className="text-sm sm:text-base text-[#292D2A]/85 font-sans leading-relaxed">
                {neighborhood.lifestyleDescription}
              </p>
            </div>

            {/* Neighborhood Highlights */}
            <div className="bg-white border border-[#E7DDCE] p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292D2A]">
                Enclave Highlights & Landmarks
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {neighborhood.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292D2A]/85">
                    <span className="mt-1 w-4 h-4 rounded-full bg-[#E7DDCE] text-[#254D3C] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Key Facts, Amenities, Ideal For */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E7DDCE] p-6 space-y-5">
              <h4 className="font-serif font-bold text-lg text-[#292D2A]">
                Enclave Snapshot
              </h4>

              <div className="space-y-3 text-xs font-sans">
                <div>
                  <span className="font-mono text-[#899687] uppercase tracking-wider block text-[10px]">
                    Prevailing Architecture
                  </span>
                  <ul className="space-y-1 pt-1 text-[#292D2A]/85 font-medium">
                    {neighborhood.popularPropertyTypes.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#254D3C] rounded-full" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-[#E7DDCE]">
                  <span className="font-mono text-[#899687] uppercase tracking-wider block text-[10px]">
                    Neighborhood Amenities
                  </span>
                  <ul className="space-y-1 pt-1 text-[#292D2A]/85">
                    {neighborhood.amenitiesOverview.map((a, idx) => (
                      <li key={idx}>&bull; {a}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-[#E7DDCE]">
                  <span className="font-mono text-[#899687] uppercase tracking-wider block text-[10px]">
                    Ideal Buyer Profile
                  </span>
                  <ul className="space-y-1 pt-1 text-[#292D2A]/85">
                    {neighborhood.idealFor.map((p, idx) => (
                      <li key={idx}>&bull; {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Illustrative Disclaimer */}
            <div className="p-4 bg-white border border-[#E7DDCE] flex items-start gap-2.5 text-xs text-[#292D2A]/70">
              <ShieldCheck className="w-4 h-4 text-[#899687] shrink-0 mt-0.5" />
              <p className="font-sans leading-relaxed">
                Neighborhood descriptions are curated editorial profiles for web demonstration.
              </p>
            </div>
          </div>
        </div>

        {/* Related Properties in this Enclave */}
        <div className="space-y-6 pt-8 border-t border-[#E7DDCE]">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#292D2A]">
              Available Properties in {neighborhood.name} & Surrounds ({relatedProperties.length})
            </h3>
            <Link
              to={`/haven/properties?query=${encodeURIComponent(neighborhood.name)}`}
              className="text-xs uppercase tracking-widest font-bold text-[#254D3C] hover:underline"
            >
              Filter in Registry &rarr;
            </Link>
          </div>

          {relatedProperties.length === 0 ? (
            <div className="p-8 bg-white border border-[#E7DDCE] text-center text-xs text-[#899687]">
              No direct listings in this enclave at present. Explore all properties.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProperties.map((p) => (
                <PropertyCard key={p.id} property={p} viewMode="grid" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodDetailPage;
