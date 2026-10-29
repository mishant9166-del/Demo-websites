import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FORMA_JOURNAL } from '../data/journal';
import { HairlineDivider } from '../components/common/HairlineDivider';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Light & Space',
  'Materials',
  'Living Philosophy',
  'Spatial Planning',
] as const;

export const JournalPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = useMemo(() => {
    return FORMA_JOURNAL.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured article (first one)
  const featuredArticle = FORMA_JOURNAL[0];

  return (
    <div className="py-12 sm:py-20 bg-[#F7F6F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#777A62] block">
            The Journal &bull; Architectural Essays & Notes
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#292B28] leading-[1.08] tracking-tight">
            Reflections on light, mineral mass, and human inhabitation.
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-[#292B28]/85 leading-relaxed pt-2">
            Notes from our drawing boards, quarry expeditions, and residential site observations across India.
          </p>
        </div>

        {/* Featured Lead Story */}
        {featuredArticle && selectedCategory === 'All' && searchQuery === '' && (
          <div className="bg-white border border-[#E2DDD5] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#E9E4DA]">
                <img
                  src={featuredArticle.heroImage}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 border border-[#E2DDD5] text-xs font-mono text-[#777A62] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#777A62]" />
                  <span>Featured Essay</span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[#777A62] font-mono">
                    <span className="uppercase tracking-widest">{featuredArticle.category}</span>
                    <span>&bull;</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#292B28] leading-tight hover:text-[#777A62] transition-colors">
                    <Link to={`/forma/journal/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[#292B28]/80 leading-relaxed font-sans">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E2DDD5] flex items-center justify-between">
                  <div className="text-xs text-[#292B28]/80 font-sans">
                    <span className="font-semibold block">{featuredArticle.author}</span>
                    <span className="text-[11px] text-[#777A62]">{featuredArticle.publishedDate}</span>
                  </div>

                  <Link
                    to={`/forma/journal/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-semibold text-[#292B28] hover:text-[#777A62] transition-colors"
                  >
                    <span>Read Essay</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <HairlineDivider />

        {/* Filter Controls and Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium border transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#292B28] text-white border-[#292B28]'
                    : 'bg-white text-[#292B28]/80 border-[#E2DDD5] hover:border-[#292B28]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays, materials..."
              className="w-full px-4 py-2 text-xs font-sans bg-white border border-[#E2DDD5] placeholder-[#292B28]/40 focus:outline-none focus:border-[#292B28]"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white border border-[#E2DDD5] p-12 text-center space-y-4">
            <h3 className="font-serif font-bold text-xl text-[#292B28]">No articles found</h3>
            <p className="text-xs text-[#292B28]/70 max-w-sm mx-auto">
              We couldn’t find any essays matching your filter. Clear your search or browse all categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-[#292B28] text-white text-xs uppercase tracking-widest font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-[#E2DDD5] flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:border-[#777A62]"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#E9E4DA] relative">
                    <img
                      src={article.heroImage}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute top-3 left-3 bg-[#F7F6F2]/95 px-2.5 py-1 text-[11px] font-mono text-[#777A62] border border-[#E2DDD5] uppercase tracking-wider">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#292B28]/60">
                      <Clock className="w-3 h-3 text-[#777A62]" />
                      <span>{article.readTime}</span>
                      <span>&bull;</span>
                      <span>{article.publishedDate}</span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-[#292B28] leading-snug group-hover:text-[#777A62] transition-colors">
                      <Link to={`/forma/journal/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-[#292B28]/75 font-sans leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E2DDD5]/70 mt-4 flex items-center justify-between text-xs">
                  <div className="text-[11px] text-[#292B28]/75 font-sans">
                    <span className="font-medium block">{article.author}</span>
                  </div>

                  <Link
                    to={`/forma/journal/${article.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] font-semibold text-[#292B28] group-hover:text-[#777A62] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Editorial Submissions Note */}
        <div className="p-8 bg-[#E9E4DA] border border-[#D8D2C7] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-xl text-[#292B28]">
              Forma Architectural Monograph (Annual Edition)
            </h4>
            <p className="text-xs sm:text-sm text-[#292B28]/75">
              We compile our material studies, site details, and finished photography into a printed cloth-bound volume for clients each winter.
            </p>
          </div>
          <Link
            to="/forma/consultation"
            className="px-6 py-3 bg-[#292B28] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#292B28]/90 transition-all shrink-0"
          >
            Request Monograph
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
