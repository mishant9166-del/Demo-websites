import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, X, Calendar, Sparkles } from 'lucide-react';
import { services } from '../data/services';
import { ServiceCard } from '../components/services/ServiceCard';
import { EmptyState } from '../components/common/EmptyState';

const categories = ['All', 'General', 'Cosmetic', 'Restorative', 'Specialized'] as const;

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      if (activeCategory !== 'All' && service.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matches =
          service.name.toLowerCase().includes(q) ||
          service.shortDescription.toLowerCase().includes(q) ||
          service.overview.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-16 bg-[#FAFCFB] text-[#152B32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#687A80] mb-8">
          <Link to="/dental" className="hover:text-[#0D9488] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[#152B32] font-semibold">Our Services</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D9488] block mb-2">
            CLINICAL EXCELLENCE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Complete Dental Solutions for a Healthier You.
          </h1>
          <p className="text-sm sm:text-base text-[#687A80] mt-3 leading-relaxed">
            From routine checkups and cleanings to complex smile makeovers and digital implantology, explore comprehensive care designed for comfort.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white border border-[#E3ECE9] rounded-2xl p-4 sm:p-5 mb-10 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#0D9488] text-white shadow-xs'
                    : 'bg-[#FAFCFB] text-[#687A80] hover:text-[#152B32] border border-[#E3ECE9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#687A80]" />
            <input
              type="text"
              placeholder="Filter treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAFCFB] border border-[#E3ECE9] rounded-full pl-9 pr-8 py-2 text-xs text-[#152B32] placeholder-[#687A80]/70 focus:outline-none focus:border-[#0D9488] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-[#687A80] hover:text-[#152B32]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Services Grid or Empty State */}
        {filteredServices.length === 0 ? (
          <EmptyState
            icon={Sparkles}
            title="No treatments matched your search"
            description="Try clearing your search query or selecting a different treatment category."
            actionLabel="Reset Filters"
            onActionClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {/* Bottom Booking Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#E6F6F2] border border-[#0D9488]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-[#115E59]">
              Uncertain which treatment is right for your smile?
            </h3>
            <p className="text-xs text-[#115E59]/80">
              Schedule an in-clinic diagnostic assessment with our dental practitioners.
            </p>
          </div>

          <Link
            to="/dental/appointment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] transition-colors shadow-xs shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
