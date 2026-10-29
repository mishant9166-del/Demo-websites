import { Link } from 'react-router-dom';
import { Gauge, Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="py-24 sm:py-32 bg-[#080A0B] text-[#F5F7F7] flex items-center justify-center min-h-[70vh]">
      <div className="max-w-md mx-auto px-4 text-center">
        {/* Tachometer Speed Icon */}
        <div className="w-20 h-20 rounded-full bg-[#101315] border border-white/10 flex items-center justify-center mx-auto mb-6 text-[#C8FF45] shadow-2xl">
          <Gauge className="w-10 h-10 animate-pulse" />
        </div>

        <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C8FF45] font-bold block mb-2">
          404 ERROR • OUT OF TRACK
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Route Not Found
        </h1>

        <p className="text-xs sm:text-sm text-[#A0A7AC] mb-8 leading-relaxed">
          The vehicle or showroom sector you are looking for has been relocated, sold, or does not exist on this course.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/velocity"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#C8FF45] text-[#080A0B] text-xs font-bold uppercase tracking-wider hover:bg-[#b5eb3b] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Showroom</span>
          </Link>

          <Link
            to="/velocity/inventory"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#171B1E] border border-white/15 text-xs font-bold uppercase tracking-wider text-[#F5F7F7] hover:bg-white/10 transition-colors"
          >
            <span>Browse The Collection</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
