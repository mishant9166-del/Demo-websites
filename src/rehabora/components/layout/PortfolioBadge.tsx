import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export function PortfolioBadge() {
  return (
    <aside
      aria-label="Portfolio Demo Banner"
      className="bg-[#193D32] border-b border-[#285A49]/40 px-4 py-2 text-xs text-[#FAFBF8]/90 relative z-40 selection:bg-[#72A88A] selection:text-white"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F2EC]/20 text-[#A8D5BC] font-sans font-semibold tracking-wider uppercase text-[10px] border border-[#A8D5BC]/30 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#D8A66A]" />
            Project 05 Live Demo
          </span>
          <span className="hidden sm:inline text-[#FAFBF8]/85 font-medium font-sans">
            REHABORA — Physiotherapy & Rehabilitation Clinic Showcase
          </span>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAFBF8] hover:text-[#A8D5BC] transition-colors group font-sans"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio Dashboard</span>
        </Link>
      </div>
    </aside>
  );
}

export default PortfolioBadge;
