import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export function PortfolioBadge() {
  return (
    <aside 
      aria-label="Portfolio Demo Banner"
      className="bg-[#101315] border-b border-white/10 px-4 py-2 text-xs text-[#A0A7AC] relative z-40"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#C8FF45]/10 text-[#C8FF45] font-semibold tracking-wider uppercase text-[10px] border border-[#C8FF45]/20">
            <Sparkles className="w-3 h-3" />
            Project 01 Live Demo
          </span>
          <span className="hidden sm:inline text-[#A0A7AC]/80">
            Automotive Dealership Frontend Showcase
          </span>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F7F7] hover:text-[#C8FF45] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio Dashboard</span>
        </Link>
      </div>
    </aside>
  );
}
