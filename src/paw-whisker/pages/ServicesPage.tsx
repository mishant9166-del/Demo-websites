import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Calendar, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { VET_SERVICES } from '../data/services';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/services/ServiceCard';

export const ServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories list
  const categories = ['All', 'Consultation', 'Preventive', 'Diagnostics', 'Dental', 'Senior Care', 'Wellness'];

  // Filtered services
  const filteredServices = useMemo(() => {
    return VET_SERVICES.filter((svc) => {
      const matchesSearch =
        svc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat =
        selectedCategory === 'All' || svc.category.toLowerCase().includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionHeading
            badge="Care Services"
            badgeVariant="terracotta"
            title="Thoughtful veterinary medicine, nose to tail."
            subtitle="Every consultation is conducted with gentle handling, clear explanations, and no rush. Explore our full spectrum of preventive, diagnostic, and wellness services."
          />

          {/* Honest Demo notice */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0D9CA]/50 text-xs text-[#343D30]/80 border border-[#E8DFD1]">
            <Sparkles className="w-3.5 h-3.5 text-[#C76F52]" />
            <span>Demonstration services directory. Specific procedures represent fictional sample offerings.</span>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="p-6 rounded-3xl bg-white border border-[#E8DFD1] shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-[#82947A] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services (e.g. dental, bloodwork, puppy, senior)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-2xl bg-[#FBF5EA] border border-[#E8DFD1] text-sm text-[#343D30] placeholder-[#343D30]/50 focus:outline-none focus:ring-2 focus:ring-[#C76F52]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-[#343D30]/60 hover:text-[#343D30]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Book Quick CTA */}
            <Link
              to="/paw-whisker/book-visit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#C76F52] text-white text-sm font-semibold hover:bg-[#b05d42] transition-colors shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                    active
                      ? 'bg-[#343D30] text-white border-[#343D30]'
                      : 'bg-[#FBF5EA] text-[#343D30]/80 border-[#E8DFD1] hover:bg-[#F0D9CA]/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#82947A] px-1 font-medium">
          <span>Showing {filteredServices.length} of {VET_SERVICES.length} veterinary services</span>
          {(searchQuery || selectedCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-[#C76F52] hover:underline font-semibold"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} variant="detailed" />
            ))}
          </div>
        ) : (
          <div className="p-12 rounded-3xl bg-white border border-[#E8DFD1] text-center space-y-4 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#F0D9CA] text-[#C76F52] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-fraunces text-2xl font-bold text-[#343D30]">
              No services matched your query
            </h3>
            <p className="text-sm text-[#343D30]/80">
              We couldn&apos;t find anything matching &ldquo;{searchQuery}&rdquo;. Try another keyword or browse all our available care programs.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#C76F52] text-white text-xs font-bold hover:bg-[#b05d42] transition-colors"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* Urgent Emergency Callout */}
        <div className="p-8 rounded-3xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-amber-200 text-amber-900 shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-fraunces text-lg font-bold text-amber-950">
                Is your companion showing urgent distress signs?
              </h4>
              <p className="text-xs sm:text-sm text-amber-900/80 mt-1 max-w-xl">
                Do not wait for a routine consultation if your pet is straining to breathe, having seizures, or suspected to have eaten toxic plants or medications.
              </p>
            </div>
          </div>
          <Link
            to="/paw-whisker/emergency-care"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-amber-900 text-white text-xs font-semibold hover:bg-amber-950 transition-colors flex items-center gap-2"
          >
            <span>Emergency Guidelines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
