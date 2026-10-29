import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, MapPin, Building, Bed, ArrowRight, IndianRupee } from 'lucide-react';
import type { ListingPurpose } from '../../types/property';

export const HeroSearch: React.FC = () => {
  const navigate = useNavigate();

  const [purpose, setPurpose] = useState<ListingPurpose>('buy');
  const [query, setQuery] = useState('');
  const [propertyType, setPropertyType] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [bedrooms, setBedrooms] = useState<string>('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (purpose) params.set('purpose', purpose);
    if (query.trim()) params.set('query', query.trim());
    if (propertyType !== 'all') params.set('type', propertyType);
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (bedrooms !== 'all') params.set('bedrooms', bedrooms);

    navigate(`/haven/properties?${params.toString()}`);
  };

  return (
    <section className="relative bg-[#FAF9F5] pt-10 pb-20 sm:pb-28 overflow-hidden">
      {/* Background Architectural Backdrop Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Editorial Headline Block */}
        <div className="max-w-3xl space-y-5 pt-4 sm:pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#254D3C]/10 text-[#254D3C] border border-[#254D3C]/20 text-[11px] font-mono uppercase tracking-widest font-semibold">
            <span>Independent Real Estate Advisory &bull; Established Mumbai</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#292D2A] leading-[1.08] tracking-tight">
            Your next chapter starts at home.
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-[#292D2A]/85 leading-relaxed">
            Discover thoughtfully selected homes, apartments, and investment properties with guidance at every step.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/haven/properties"
              className="px-6 py-3.5 bg-[#254D3C] text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#1E3F31] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/haven/sell-your-property"
              className="px-6 py-3.5 bg-white border border-[#E7DDCE] text-[#292D2A] text-xs uppercase tracking-[0.18em] font-semibold hover:border-[#254D3C] transition-all"
            >
              List Your Property
            </Link>
          </div>
        </div>

        {/* Hero Visual & Integrated Functional Search Engine */}
        <div className="relative">
          {/* Main Architectural Hero Photograph */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#E7DDCE] border border-[#E7DDCE] shadow-md">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
              alt="Luxury modern Indian architectural residence at sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white text-xs font-mono bg-black/40 backdrop-blur-sm px-3.5 py-1.5 border border-white/20">
              The Horizon Residence &bull; Bandra West, Mumbai
            </div>
          </div>

          {/* Integrated Search Console Card Floating below Hero */}
          <div className="relative -mt-10 sm:-mt-14 max-w-5xl mx-auto z-10">
            <form
              onSubmit={handleSearch}
              className="bg-white border border-[#E7DDCE] shadow-xl p-5 sm:p-7 space-y-5 rounded-xs"
            >
              {/* Purpose Selector Tabs (Buy / Rent) */}
              <div className="flex items-center justify-between border-b border-[#E7DDCE] pb-3">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPurpose('buy')}
                    className={`pb-1 text-xs uppercase tracking-widest font-bold transition-all border-b-2 ${
                      purpose === 'buy'
                        ? 'border-[#254D3C] text-[#254D3C]'
                        : 'border-transparent text-[#292D2A]/60 hover:text-[#292D2A]'
                    }`}
                  >
                    Buy Property
                  </button>
                  <span className="text-[#E7DDCE]">&bull;</span>
                  <button
                    type="button"
                    onClick={() => setPurpose('rent')}
                    className={`pb-1 text-xs uppercase tracking-widest font-bold transition-all border-b-2 ${
                      purpose === 'rent'
                        ? 'border-[#254D3C] text-[#254D3C]'
                        : 'border-transparent text-[#292D2A]/60 hover:text-[#292D2A]'
                    }`}
                  >
                    Rent Property
                  </button>
                </div>

                <span className="text-[11px] font-mono text-[#899687] hidden sm:inline">
                  Interactive Live Search
                </span>
              </div>

              {/* Functional Search Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
                {/* Location / Keyword (lg:col-span-3) */}
                <div className="lg:col-span-3 space-y-1">
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-[#899687]">
                    Location or Keyword
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#899687] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="e.g. Bandra, Assagao, Pool..."
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] placeholder-[#292D2A]/40 focus:outline-none focus:border-[#254D3C]"
                    />
                  </div>
                </div>

                {/* Property Type (lg:col-span-3) */}
                <div className="lg:col-span-3 space-y-1">
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-[#899687]">
                    Property Type
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#899687] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] focus:outline-none focus:border-[#254D3C]"
                    >
                      <option value="all">All Property Types</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa / Independent Estate</option>
                      <option value="Penthouse">Skyline Penthouse</option>
                      <option value="Townhouse">Townhouse</option>
                      <option value="Family Home">Family Home</option>
                      <option value="Commercial Office">Commercial Office</option>
                      <option value="Retail Space">Retail Flagship</option>
                    </select>
                  </div>
                </div>

                {/* Minimum Bedrooms (lg:col-span-2) */}
                <div className="lg:col-span-2 space-y-1">
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-[#899687]">
                    Bedrooms
                  </label>
                  <div className="relative">
                    <Bed className="w-4 h-4 text-[#899687] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] focus:outline-none focus:border-[#254D3C]"
                    >
                      <option value="all">Any</option>
                      <option value="1">1+ Bed</option>
                      <option value="2">2+ Beds</option>
                      <option value="3">3+ Beds</option>
                      <option value="4">4+ Beds</option>
                      <option value="5">5+ Beds</option>
                    </select>
                  </div>
                </div>

                {/* Max Price (lg:col-span-2) */}
                <div className="lg:col-span-2 space-y-1">
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-[#899687]">
                    Max Budget
                  </label>
                  <div className="relative">
                    <IndianRupee className="w-3.5 h-3.5 text-[#899687] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full pl-8 pr-2 py-2.5 text-xs bg-[#FAF9F5] border border-[#E7DDCE] text-[#292D2A] focus:outline-none focus:border-[#254D3C]"
                    >
                      <option value="">Any Budget</option>
                      <option value="150000">₹1.5 Lakh / mo</option>
                      <option value="50000000">₹5.00 Cr</option>
                      <option value="100000000">₹10.00 Cr</option>
                      <option value="200000000">₹20.00 Cr</option>
                    </select>
                  </div>
                </div>

                {/* Submit Action Button (lg:col-span-2) */}
                <div className="lg:col-span-2 flex items-end">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-3 bg-[#254D3C] text-white text-xs uppercase tracking-[0.16em] font-bold hover:bg-[#1E3F31] transition-all flex items-center justify-center gap-1.5 h-[38px] shadow-xs"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
