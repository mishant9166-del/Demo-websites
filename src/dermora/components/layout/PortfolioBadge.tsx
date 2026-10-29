import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export function PortfolioBadge() {
  return (
    <aside
      aria-label="Portfolio Demo Banner"
      className="bg-[#292A27] border-b border-[#38473A]/30 px-4 py-2 text-xs text-[#FAF7F2]/80 relative z-40 selection:bg-[#B77962] selection:text-white"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#9BAA96]/20 text-[#9BAA96] font-sans font-semibold tracking-wider uppercase text-[10px] border border-[#9BAA96]/30 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#B77962]" />
            Project 04 Live Demo
          </span>
          <span className="hidden sm:inline text-[#FAF7F2]/85 font-medium font-sans">
            DERMORA — Skin, Hair & Aesthetic Clinic Showcase
          </span>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAF7F2] hover:text-[#9BAA96] transition-colors group font-sans"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio Dashboard</span>
        </Link>
      </div>
    </aside>
  );
}
