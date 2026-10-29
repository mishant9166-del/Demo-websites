import React from 'react';
import { Link } from 'react-router-dom';
import { useSavedProperties } from '../context/SavedPropertiesContext';
import { PropertyCard } from '../components/properties/PropertyCard';
import { Trash2, Heart, ArrowRight } from 'lucide-react';

export const SavedPropertiesPage: React.FC = () => {
  const { savedProperties, savedCount, removeSaved, clearAll } = useSavedProperties();

  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E7DDCE] pb-6">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#899687] font-semibold block">
              Private Client Shortlist &bull; Browser Stored
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292D2A]">
              Saved Properties ({savedCount})
            </h1>
            <p className="text-sm text-[#292D2A]/75 font-sans">
              Compare architectural specifications, floor areas, and pricing across your shortlisted homes.
            </p>
          </div>

          {savedCount > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#E7DDCE] text-xs font-mono text-red-700 bg-white hover:bg-red-50 transition-colors rounded-xs"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Entire Shortlist</span>
            </button>
          )}
        </div>

        {savedCount === 0 ? (
          /* Empty State */
          <div className="bg-white border border-[#E7DDCE] p-16 text-center space-y-5 rounded-xs">
            <div className="w-16 h-16 rounded-full bg-[#FAF9F5] border border-[#E7DDCE] flex items-center justify-center mx-auto text-[#899687]">
              <Heart className="w-8 h-8" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h2 className="font-serif font-bold text-2xl text-[#292D2A]">
                Your Shortlist is Empty
              </h2>
              <p className="text-xs sm:text-sm text-[#292D2A]/70 font-sans leading-relaxed">
                As you browse the registry, click the heart icon on any listing card or detail view to curate your private shortlist.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/haven/properties"
                className="px-6 py-3 bg-[#254D3C] text-white text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#1E3F31] transition-all inline-flex items-center gap-2 rounded-xs"
              >
                <span>Browse Property Registry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Quick Fact Comparison Matrix Table */}
            <div className="bg-white border border-[#E7DDCE] overflow-x-auto shadow-2xs">
              <div className="p-5 border-b border-[#E7DDCE] bg-[#FAF9F5]">
                <h3 className="font-serif font-bold text-xl text-[#292D2A]">
                  Side-by-Side Comparison Matrix
                </h3>
              </div>

              <table className="w-full text-left text-xs font-sans min-w-[700px]">
                <thead>
                  <tr className="border-b border-[#E7DDCE] bg-white text-[#899687] font-mono uppercase text-[10px] tracking-wider">
                    <th className="p-4">Property</th>
                    <th className="p-4">Location</th>
                    <th className="p-4">Type</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Bed / Bath</th>
                    <th className="p-4">Super Area</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DDCE]">
                  {savedProperties.map((p) => (
                    <tr key={p.id} className="hover:bg-[#FAF9F5] transition-colors">
                      <td className="p-4 font-serif font-bold text-sm text-[#292D2A]">
                        <Link to={`/haven/properties/${p.slug}`} className="hover:text-[#254D3C]">
                          {p.title}
                        </Link>
                      </td>
                      <td className="p-4 text-[#292D2A]/80">{p.location}</td>
                      <td className="p-4">
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#FAF9F5] border border-[#E7DDCE]">
                          {p.type}
                        </span>
                      </td>
                      <td className="p-4 font-serif font-bold text-[#254D3C] text-sm">
                        {p.priceFormatted}
                      </td>
                      <td className="p-4 text-[#292D2A]/80">
                        {p.bedrooms > 0 ? `${p.bedrooms} Beds` : 'Studio'} &bull; {p.bathrooms} Baths
                      </td>
                      <td className="p-4 font-mono">{p.areaFormatted}</td>
                      <td className="p-4 text-right">
                        <button
                          type="button"
                          onClick={() => removeSaved(p.id)}
                          className="text-red-700 hover:text-red-900 font-mono text-[11px] underline"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Property Cards Grid */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#292D2A]">
                Shortlisted Listing Dossiers
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedProperties.map((prop) => (
                  <PropertyCard key={prop.id} property={prop} viewMode="grid" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedPropertiesPage;
