import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export function PortfolioBadge() {
  return (
    <aside
      aria-label="Portfolio Demo Banner"
      className="bg-[#E6F6F2] border-b border-[#0D9488]/20 px-4 py-2 text-xs text-[#115E59] relative z-40"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white text-[#0D9488] font-bold tracking-wider uppercase text-[10px] border border-[#0D9488]/30 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#0D9488]" />
            Project 02 Live Demo
          </span>
          <span className="hidden sm:inline text-[#115E59]/90 font-medium">
            SmileCare Dental Clinic — Healthcare Frontend Showcase
          </span>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#115E59] hover:text-[#0D9488] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio Dashboard</span>
        </Link>
      </div>
    </aside>
  );
}
