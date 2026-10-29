import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, ArrowRight, Sparkles } from 'lucide-react';

export const ReservationCta: React.FC = () => {
  return (
    <section className="py-20 bg-[#F0D27A] text-[#382820] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFFEFA]/30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#B77A4A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#382820] text-[#F0D27A] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Save Your Spot</span>
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#382820] max-w-3xl mx-auto leading-tight">
          Reserve your table for slow weekend mornings and lively evening catch-ups.
        </h2>

        <p className="text-base sm:text-lg text-[#382820]/80 max-w-2xl mx-auto font-sans leading-relaxed">
          Whether it is a solo coffee ritual with your favourite novel or a brunch spread with eight close friends, we will make sure your table is waiting.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/mellow-bean/reservations"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#382820] text-[#FFFEFA] hover:bg-[#382820]/90 transition-all font-medium text-base shadow-xl group"
          >
            <Calendar className="w-5 h-5 text-[#F0D27A]" />
            <span>Find Your Table</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/mellow-bean/events"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#FFFEFA] text-[#382820] hover:bg-[#FFFEFA]/90 border border-[#382820]/15 transition-all font-medium text-base shadow-md"
          >
            <Users className="w-5 h-5 text-[#B77A4A]" />
            <span>Private Gatherings & Tastings</span>
          </Link>
        </div>

        <p className="text-xs text-[#382820]/60 pt-4">
          * Demo reservation flow with instant interactive confirmation. No real bookings are finalized.
        </p>
      </div>
    </section>
  );
};
