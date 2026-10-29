import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Heart, Sparkles } from 'lucide-react';

export const HomeCta: React.FC = () => {
  return (
    <section className="py-20 bg-[#C76F52] text-white relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#343D30]/20 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs sm:text-sm font-semibold text-[#FBF5EA]">
          <Sparkles className="w-4 h-4 text-[#F0D9CA]" />
          <span>Compassionate care tailored to your pet&apos;s tempo</span>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Your pet&apos;s next chapter starts with good care.
          </h2>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
            Whether your companion needs their regular booster, a gentle dental check, or advice on senior agility, our doctors are ready with open arms and warm treats.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/paw-whisker/book-visit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-[#C76F52] font-bold text-base shadow-lg hover:bg-[#FBF5EA] transition-all active:scale-[0.98]"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Visit</span>
          </Link>
          <Link
            to="/paw-whisker/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white/10 border border-white/30 text-white font-semibold text-base hover:bg-white/20 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call (555) 729-9447</span>
          </Link>
        </div>

        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-white/80">
          <Heart className="w-4 h-4 text-[#F0D9CA] fill-current" />
          <span>Urgent consultation slots reserved every morning. Never hesitate to call.</span>
        </div>
      </div>
    </section>
  );
};
