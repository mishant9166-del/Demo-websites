import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { WELLNESS_ARTICLES } from '../../data/wellness';
import { SectionHeading } from '../common/SectionHeading';
import { ArticleCard } from '../wellness/ArticleCard';

export const WellnessSpotlight: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            badge="Pet Wellness Library"
            badgeVariant="terracotta"
            alignment="left"
            title="Guidance for a long, joyful companion journey."
            subtitle="Explore our veterinary team's educational articles on puppy milestones, indoor feline enrichment, senior wellness, and proactive healthcare."
          />
          <Link
            to="/paw-whisker/pet-wellness"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-[#E8DFD1] text-sm font-semibold text-[#343D30] hover:bg-[#F0D9CA]/40 transition-colors shadow-xs shrink-0 self-start md:self-auto"
          >
            <BookOpen className="w-4 h-4 text-[#82947A]" />
            <span>Browse Library</span>
            <ArrowRight className="w-4 h-4 text-[#C76F52]" />
          </Link>
        </div>

        {/* 4 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WELLNESS_ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};
