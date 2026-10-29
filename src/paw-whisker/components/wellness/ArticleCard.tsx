import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import type { WellnessArticle } from '../../types/vet';

interface ArticleCardProps {
  article: WellnessArticle;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-[#E8DFD1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div className="relative h-48 overflow-hidden bg-[#F0D9CA]/30">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#343D30] shadow-sm flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-[#C76F52]" />
          <span>{article.category}</span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#82947A]">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
            <span>•</span>
            <span>{article.publishedDate}</span>
          </div>

          <h3 className="font-fraunces text-xl font-bold text-[#343D30] group-hover:text-[#C76F52] transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#343D30]/80 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-[#E8DFD1] flex items-center justify-between">
          <span className="text-xs text-[#82947A] font-medium">
            Written by {article.author.name}
          </span>
          <Link
            to={`/paw-whisker/pet-wellness/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#C76F52] group-hover:translate-x-0.5 transition-transform"
          >
            Read Article
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
