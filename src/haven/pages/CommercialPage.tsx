import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HAVEN_PROPERTIES } from '../data/properties';
import { PropertyCard } from '../components/properties/PropertyCard';
import { ArrowRight } from 'lucide-react';

export const CommercialPage: React.FC = () => {
  const [viewMode] = useState<'grid' | 'list'>('grid');

  const commercialProperties = useMemo(() => {
    return HAVEN_PROPERTIES.filter(
      (p) => p.type === 'Commercial Office' || p.type === 'Retail Space'
    );
  }, []);

  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#899687] font-semibold block">
            Institutional Assets & Urban Flagships
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#292D2A]">
            Commercial Real Estate
          </h1>
          <p className="text-sm sm:text-base text-[#292D2A]/75 font-sans leading-relaxed">
            Grade-A full floorplate corporate workplaces in South Mumbai financial enclaves and high-visibility luxury design retail studios in Bengaluru CBD.
          </p>
        </div>

        {/* Commercial Highlights Bar */}
        <div className="bg-white border border-[#E7DDCE] p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#292D2A] font-sans">
          <div className="space-y-1">
            <span className="font-mono text-[#254D3C] uppercase tracking-wider block font-bold">
              01 / Yield Modeling
            </span>
            <p className="text-[#292D2A]/75">
              Comprehensive rental yield forecasts, capitalization benchmarks, and institutional tenancy advisory.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[#254D3C] uppercase tracking-wider block font-bold">
              02 / LEED & ESG Due Diligence
            </span>
            <p className="text-[#292D2A]/75">
              We exclusively represent commercial assets with high energy ratings, triple-redundant power, and optical telecom feeds.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[#254D3C] uppercase tracking-wider block font-bold">
              03 / Creative Adaptive Use
            </span>
            <p className="text-[#292D2A]/75">
              Flagship retail spaces, architecture studios, and private family office headquarters.
            </p>
          </div>
        </div>

        {/* Commercial Listings Grid */}
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-6'
          }
        >
          {commercialProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} viewMode={viewMode} />
          ))}
        </div>

        {/* Commercial Advisory Lead Banner */}
        <div className="p-8 sm:p-12 bg-[#254D3C] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-xs">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-2xl text-white">
              Institutional Commercial Advisory
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-sans max-w-xl">
              Connect with Dev Sinha, Head of Commercial Investments, for confidential asset acquisition briefs and corporate floorplate leasing.
            </p>
          </div>
          <Link
            to="/haven/contact"
            className="px-6 py-3.5 bg-white text-[#254D3C] text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#FAF9F5] transition-all shrink-0 flex items-center gap-2 rounded-xs"
          >
            <span>Consult Commercial Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommercialPage;
