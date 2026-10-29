import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export function PortfolioBadge() {
  return (
    <aside
      aria-label="Portfolio Demo Banner"
      className="bg-[#102B46] border-b border-white/10 px-4 py-2 text-xs text-[#EAF5FC]/80 relative z-40 selection:bg-[#18A9A0] selection:text-white"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#18A9A0]/20 text-[#18A9A0] font-bold tracking-wider uppercase text-[10px] border border-[#18A9A0]/30 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#18A9A0]" />
            Project 03 Live Demo
          </span>
          <span className="hidden sm:inline text-[#EAF5FC]/90 font-medium">
            Medora Multispecialty Hospital — Healthcare Platform Showcase
          </span>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#18A9A0] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio Dashboard</span>
        </Link>
      </div>
    </aside>
  );
}
