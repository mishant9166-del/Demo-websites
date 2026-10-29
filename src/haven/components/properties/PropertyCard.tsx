import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Bed, Bath, Maximize2, MapPin, ArrowUpRight } from 'lucide-react';
import type { PropertyItem } from '../../types/property';
import { useSavedProperties } from '../../context/SavedPropertiesContext';

interface PropertyCardProps {
  property: PropertyItem;
  viewMode?: 'grid' | 'list';
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, viewMode = 'grid' }) => {
  const { isSaved, toggleSave } = useSavedProperties();
  const saved = isSaved(property.id);

  if (viewMode === 'list') {
    return (
      <div className="bg-white border border-[#E7DDCE] hover:border-[#254D3C] transition-all duration-300 flex flex-col md:flex-row overflow-hidden group shadow-xs">
        {/* List Image */}
        <div className="relative md:w-2/5 aspect-[16/10] md:aspect-auto overflow-hidden bg-[#FAF9F5]">
          <img
            src={property.heroImage}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span
              className={`px-2.5 py-1 text-[11px] font-sans font-bold uppercase tracking-wider ${
                property.purpose === 'buy'
                  ? 'bg-[#254D3C] text-white'
                  : 'bg-[#899687] text-white'
              }`}
            >
              {property.purpose === 'buy' ? 'For Sale' : 'For Rent'}
            </span>
            {property.featured && (
              <span className="bg-[#FAF9F5] text-[#254D3C] border border-[#254D3C]/30 px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold">
                Featured
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleSave(property.id);
            }}
            aria-label={saved ? 'Remove from saved shortlist' : 'Save to shortlist'}
            className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              saved
                ? 'bg-[#254D3C] text-white shadow-md'
                : 'bg-white/90 text-[#292D2A] hover:bg-white hover:text-red-600'
            }`}
          >
            <Heart className={`w-4 h-4 ${saved ? 'fill-current text-white' : ''}`} />
          </button>
        </div>

        {/* List Content */}
        <div className="p-6 md:w-3/5 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#899687]">
                {property.type} &bull; {property.city}
              </span>
              <span className="text-xl font-serif font-bold text-[#254D3C]">
                {property.priceFormatted}
              </span>
            </div>

            <h3 className="text-xl font-serif font-bold text-[#292D2A] group-hover:text-[#254D3C] transition-colors leading-snug">
              <Link to={`/haven/properties/${property.slug}`}>{property.title}</Link>
            </h3>

            <p className="flex items-center gap-1.5 text-xs text-[#292D2A]/70 font-sans">
              <MapPin className="w-3.5 h-3.5 text-[#254D3C] shrink-0" />
              <span>{property.location}</span>
            </p>

            <p className="text-xs text-[#292D2A]/75 font-sans leading-relaxed line-clamp-2 pt-1">
              {property.description}
            </p>
          </div>

          {/* Key Facts bar */}
          <div className="pt-4 border-t border-[#E7DDCE] flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs font-sans text-[#292D2A]/80">
              {property.bedrooms > 0 && (
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4 text-[#899687]" />
                  <span>{property.bedrooms} Beds</span>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4 text-[#899687]" />
                  <span>{property.bathrooms} Baths</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#899687]" />
                <span>{property.areaFormatted}</span>
              </div>
            </div>

            <Link
              to={`/haven/properties/${property.slug}`}
              className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.16em] font-bold text-[#254D3C] hover:text-[#1E3F31]"
            >
              <span>View Property</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default Grid Layout
  return (
    <div className="bg-white border border-[#E7DDCE] hover:border-[#254D3C] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-2xs">
      <div>
        {/* Card Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF9F5]">
          <img
            src={property.heroImage}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span
              className={`px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider ${
                property.purpose === 'buy'
                  ? 'bg-[#254D3C] text-white'
                  : 'bg-[#899687] text-white'
              }`}
            >
              {property.purpose === 'buy' ? 'For Sale' : 'For Rent'}
            </span>
            {property.featured && (
              <span className="bg-[#FAF9F5] text-[#254D3C] border border-[#254D3C]/30 px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold">
                Featured
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleSave(property.id);
            }}
            aria-label={saved ? 'Remove from saved shortlist' : 'Save to shortlist'}
            className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              saved
                ? 'bg-[#254D3C] text-white shadow-md'
                : 'bg-white/90 text-[#292D2A] hover:bg-white hover:text-red-600'
            }`}
          >
            <Heart className={`w-4 h-4 ${saved ? 'fill-current text-white' : ''}`} />
          </button>
        </div>

        {/* Card Content */}
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#899687]">
              {property.type}
            </span>
            <span className="text-lg font-serif font-bold text-[#254D3C]">
              {property.priceFormatted}
            </span>
          </div>

          <h3 className="font-serif font-bold text-lg text-[#292D2A] group-hover:text-[#254D3C] transition-colors leading-snug line-clamp-1">
            <Link to={`/haven/properties/${property.slug}`}>{property.title}</Link>
          </h3>

          <p className="flex items-center gap-1.5 text-xs text-[#292D2A]/70 font-sans">
            <MapPin className="w-3.5 h-3.5 text-[#254D3C] shrink-0" />
            <span className="truncate">{property.location}</span>
          </p>

          <p className="text-xs text-[#292D2A]/75 font-sans leading-relaxed line-clamp-2">
            {property.tagline}
          </p>
        </div>
      </div>

      {/* Facts Footer */}
      <div className="p-5 pt-3 border-t border-[#E7DDCE]/70 flex items-center justify-between bg-[#FAF9F5]/40">
        <div className="flex items-center gap-3 text-[11px] font-sans text-[#292D2A]/80">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1" title={`${property.bedrooms} Bedrooms`}>
              <Bed className="w-3.5 h-3.5 text-[#899687]" />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1" title={`${property.bathrooms} Bathrooms`}>
              <Bath className="w-3.5 h-3.5 text-[#899687]" />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-1" title="Built Area">
            <Maximize2 className="w-3 h-3 text-[#899687]" />
            <span>{property.areaSqFt} sq ft</span>
          </div>
        </div>

        <Link
          to={`/haven/properties/${property.slug}`}
          className="text-xs font-bold uppercase tracking-[0.16em] text-[#254D3C] hover:text-[#1E3F31] shrink-0"
        >
          View &rarr;
        </Link>
      </div>
    </div>
  );
};
