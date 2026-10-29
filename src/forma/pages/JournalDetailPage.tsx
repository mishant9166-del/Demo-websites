import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FORMA_JOURNAL } from '../data/journal';
import { HairlineDivider } from '../components/common/HairlineDivider';
import { ArrowLeft, Clock, Calendar, Share2, Check } from 'lucide-react';

export const JournalDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = React.useState(false);

  const article = useMemo(() => {
    return FORMA_JOURNAL.find((a) => a.slug === slug);
  }, [slug]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return FORMA_JOURNAL.filter((a) => a.id !== article.id).slice(0, 3);
  }, [article]);

  if (!article) {
    return <Navigate to="/forma/journal" replace />;
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F7F6F2] min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            to="/forma/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#777A62] hover:text-[#292B28] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#777A62]">
            <span className="bg-[#E9E4DA] px-2.5 py-1 text-[#292B28] uppercase tracking-wider font-semibold">
              {article.category}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishedDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#292B28] leading-[1.12]">
            {article.title}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-[#292B28]/85 leading-relaxed italic border-l-2 border-[#777A62] pl-4">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-[#E2DDD5]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E9E4DA] border border-[#D8D2C7] flex items-center justify-center font-serif text-sm font-bold text-[#292B28]">
                {article.author.charAt(0)}
              </div>
              <div className="text-xs">
                <span className="font-semibold text-[#292B28] block">{article.author}</span>
                <span className="text-[#777A62] block">{article.authorRole}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E2DDD5] text-xs font-mono text-[#292B28] hover:bg-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#777A62]" />
                  <span>Share Essay</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Hero Image */}
        <div className="aspect-[16/9] w-full overflow-hidden bg-[#E9E4DA] border border-[#E2DDD5] shadow-sm">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="space-y-12 font-sans text-base text-[#292B28]/85 leading-relaxed">
          {article.content.map((section, idx) => (
            <section key={idx} className="space-y-6">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#292B28] pt-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-[#292B28]/80 font-normal">
                  {para}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-8 p-6 bg-white border-l-4 border-[#777A62] border-y border-r border-[#E2DDD5] font-serif italic text-xl sm:text-2xl text-[#292B28] leading-relaxed">
                  {section.quote}
                </blockquote>
              )}

              {section.image && (
                <figure className="my-8 space-y-2">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#E9E4DA] border border-[#E2DDD5]">
                    <img
                      src={section.image}
                      alt={section.imageCaption || 'Architectural detail'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {section.imageCaption && (
                    <figcaption className="text-xs text-[#292B28]/60 font-mono text-center pt-1">
                      {section.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </section>
          ))}
        </div>

        <HairlineDivider />

        {/* Author Footnote */}
        <div className="p-6 sm:p-8 bg-white border border-[#E2DDD5] flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-[#E9E4DA] border border-[#D8D2C7] flex items-center justify-center font-serif text-xl font-bold text-[#292B28] shrink-0">
            {article.author.charAt(0)}
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <span className="text-[11px] uppercase tracking-widest text-[#777A62] font-mono block">
              About the Author
            </span>
            <h4 className="font-serif font-bold text-xl text-[#292B28]">{article.author}</h4>
            <p className="text-[#292B28]/75 leading-relaxed">
              {article.authorRole} at Forma Studio. Leading material explorations, spatial geometry, and regional masonry crafts across North India.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-2xl text-[#292B28]">
                Further Reading
              </h3>
              <Link
                to="/forma/journal"
                className="text-xs uppercase tracking-widest text-[#777A62] hover:text-[#292B28] font-semibold"
              >
                View all &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/forma/journal/${rel.slug}`}
                  className="bg-white border border-[#E2DDD5] p-4 space-y-3 group hover:border-[#777A62] transition-colors"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#E9E4DA]">
                    <img
                      src={rel.heroImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-[#777A62] block">
                    {rel.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#292B28] line-clamp-2 group-hover:text-[#777A62] transition-colors">
                    {rel.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="p-8 sm:p-12 bg-[#E9E4DA] border border-[#D8D2C7] text-center space-y-4">
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#292B28]">
            Discuss an Architectural Project
          </h3>
          <p className="text-xs sm:text-sm text-[#292B28]/75 max-w-md mx-auto">
            Bring your aspirations, floorplans, or site sketches to our New Delhi atelier for an honest review.
          </p>
          <div className="pt-2">
            <Link
              to="/forma/consultation"
              className="px-6 py-3 bg-[#292B28] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#292B28]/90 transition-all inline-block"
            >
              Initiate Consultation
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default JournalDetailPage;
