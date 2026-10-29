import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export function PortfolioBadge() {
  return (
    <div className="bg-[#FAF7F2] text-[#15263B] text-[11px] py-1.5 px-4 border-b border-[#E4E4DE] relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 font-bold tracking-wider uppercase text-[10px] bg-[#15263B] text-white px-2 py-0.5 rounded">
            Project 06
          </span>
          <span className="hidden sm:inline text-[#687581]">
            12-Project Frontend Portfolio Demonstration: Eye Clinic &amp; Optical Store
          </span>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-semibold text-[#15263B] hover:text-[#5C9995] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          <span>Agency Dashboard</span>
          <Sparkles className="w-2.5 h-2.5 text-[#5C9995]" />
        </Link>
      </div>
    </div>
  );
}

export default PortfolioBadge;
