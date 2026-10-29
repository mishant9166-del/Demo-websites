import React from 'react';
import { Star, Shield, Quote } from 'lucide-react';
import { STORE_REVIEWS } from '../../data/reviews';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F7F7F4] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.25em] text-[#2447E8] font-bold mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span>Customer Perspectives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#252525]">
            Loved in everyday routines.
          </h2>
          <p className="text-xs text-[#777872] mt-2 font-light">
            * Curated demonstration reviews showcasing verified purchaser feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-xs border border-[#E5E5E0] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#2447E8] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#2447E8]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#E5E5E0] mb-3 stroke-1" />

                <h4 className="text-base font-bold text-[#252525] mb-2 leading-snug">
                  &ldquo;{rev.quote}&rdquo;
                </h4>

                <p className="text-xs text-[#777872] font-light leading-relaxed mb-6">
                  {rev.story}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E5E0] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#252525] block">{rev.name}</span>
                  <span className="text-[11px] text-[#777872]">{rev.location}</span>
                </div>
                <span className="text-[10px] text-[#777872] font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
