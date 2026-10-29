import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Calendar,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { WELLNESS_ARTICLES } from '../data/wellness';
import { ArticleCard } from '../components/wellness/ArticleCard';

export const WellnessDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = WELLNESS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4 space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#F0D9CA] text-[#C76F52] flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="font-fraunces text-3xl font-bold text-[#343D30]">
          Article Not Found
        </h1>
        <p className="text-sm text-[#343D30]/80">
          The wellness guide you were looking for does not exist or has been relocated.
        </p>
        <Link
          to="/paw-whisker/pet-wellness"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#C76F52] text-white text-sm font-semibold hover:bg-[#b05d42] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Wellness Library</span>
        </Link>
      </div>
    );
  }

  // Related articles (matching or other)
  const related = WELLNESS_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <article className="py-12 sm:py-16 lg:py-20 space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Back Link & Category */}
        <div className="flex items-center justify-between">
          <Link
            to="/paw-whisker/pet-wellness"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#82947A] hover:text-[#343D30] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Wellness Library</span>
          </Link>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#82947A]/15 text-[#343D30] border border-[#82947A]/30">
            {article.category}
          </span>
        </div>

        {/* Title & Metadata */}
        <div className="space-y-4">
          <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-[#343D30] leading-[1.15]">
            {article.title}
          </h1>
          <p className="text-base sm:text-lg text-[#343D30]/80 leading-relaxed font-normal">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E8DFD1] text-xs text-[#82947A]">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-[#E8DFD1]"
              />
              <div>
                <div className="font-bold text-[#343D30]">{article.author.name}</div>
                <div>{article.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishedDate}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Photo */}
        <div className="rounded-3xl overflow-hidden aspect-[16/9] bg-[#F0D9CA]/30 border-2 border-white shadow-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Takeaways Box */}
        {article.keyTakeaways && (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F0D9CA]/40 border border-[#E8DFD1] space-y-4">
            <h3 className="font-fraunces text-xl font-bold text-[#343D30] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C76F52]" />
              Key Takeaways
            </h3>
            <ul className="space-y-2 text-sm text-[#343D30]/85">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C76F52] shrink-0 mt-2" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Sections */}
        <div className="space-y-10 py-4 font-sans text-base text-[#343D30]/90 leading-relaxed">
          {article.content.map((sec, i) => (
            <div key={i} className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD1]">
              <h2 className="font-fraunces text-2xl font-bold text-[#343D30]">
                {sec.heading}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#343D30]/85">
                {sec.body}
              </p>
              {sec.tips && sec.tips.length > 0 && (
                <div className="p-4 rounded-2xl bg-[#FBF5EA] border border-[#E8DFD1] space-y-2 mt-4">
                  <div className="text-xs font-bold text-[#82947A] uppercase tracking-wider">
                    Practical Tips
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#343D30]/80">
                    {sec.tips.map((tip, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="text-[#C76F52] font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Medical & Demo Disclaimer */}
        <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#E8DFD1] text-xs text-[#343D30]/75 space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#C76F52]">
            <AlertCircle className="w-4 h-4" />
            <span>Veterinary Medical Notice</span>
          </div>
          <p>
            The educational material on this website is for general companion care guidance only and should never substitute for a personalized clinical examination by a licensed veterinarian. If your pet is showing acute pain or illness, seek immediate veterinary assessment.
          </p>
        </div>

        {/* Book Visit Action */}
        <div className="p-8 rounded-3xl bg-[#343D30] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-fraunces text-2xl font-bold">
              Have questions about your companion?
            </h4>
            <p className="text-xs sm:text-sm text-[#FBF5EA]/80">
              Schedule a consultation with our team to discuss tailored wellness protocols.
            </p>
          </div>
          <Link
            to="/paw-whisker/book-visit"
            className="shrink-0 px-6 py-3 rounded-2xl bg-[#C76F52] text-white font-bold text-sm hover:bg-[#b05d42] transition-colors"
          >
            Book a Visit
          </Link>
        </div>

        {/* Related Guides */}
        <div className="pt-8 border-t border-[#E8DFD1] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-fraunces text-2xl font-bold text-[#343D30]">
              More From the Wellness Library
            </h3>
            <Link
              to="/paw-whisker/pet-wellness"
              className="text-xs font-bold text-[#C76F52] flex items-center gap-1 hover:underline"
            >
              <span>View all guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
