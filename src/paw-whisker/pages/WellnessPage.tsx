import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, AlertCircle } from 'lucide-react';
import { WELLNESS_ARTICLES } from '../data/wellness';
import { SectionHeading } from '../components/common/SectionHeading';
import { ArticleCard } from '../components/wellness/ArticleCard';

export const WellnessPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Dogs', 'Cats', 'Preventive Care', 'Senior Pets', 'Nutrition'];

  const filteredArticles = useMemo(() => {
    return WELLNESS_ARTICLES.filter((art) => {
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat =
        selectedCategory === 'All' ||
        art.category.toLowerCase().includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionHeading
            badge="Pet Wellness Library"
            badgeVariant="terracotta"
            title="Trusted pet guidance for everyday companion life."
            subtitle="Explore veterinary-written guides on puppy socialization, feline enrichment, senior comfort, nutrition, and preventive vaccines."
          />

          {/* Educational Disclaimer */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0D9CA]/50 text-xs text-[#343D30]/80 border border-[#E8DFD1]">
            <AlertCircle className="w-4 h-4 text-[#C76F52] shrink-0" />
            <span>General educational content only. Does not replace an in-person veterinary physical exam.</span>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="p-6 rounded-3xl bg-white border border-[#E8DFD1] shadow-xs space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-[#82947A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles (e.g. puppy, indoor cat, vaccines, arthritis, senior)..."
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

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
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

        {/* Counter */}
        <div className="flex items-center justify-between text-xs text-[#82947A] px-1 font-medium">
          <span>Showing {filteredArticles.length} of {WELLNESS_ARTICLES.length} wellness guides</span>
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

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="p-12 rounded-3xl bg-white border border-[#E8DFD1] text-center space-y-4 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#F0D9CA] text-[#C76F52] flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-fraunces text-2xl font-bold text-[#343D30]">
              No articles found
            </h3>
            <p className="text-sm text-[#343D30]/80">
              We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try another topic like nutrition, puppies, or vaccines.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#C76F52] text-white text-xs font-bold hover:bg-[#b05d42] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
