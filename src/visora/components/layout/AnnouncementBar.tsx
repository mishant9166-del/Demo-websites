import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function AnnouncementBar() {
  return (
    <div className="bg-[#15263B] text-[#F7F5EF] text-xs py-2 px-4 border-b border-white/10 relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Sparkles className="w-3.5 h-3.5 text-[#5C9995] shrink-0" />
          <span className="font-sans text-[11px] sm:text-xs font-normal tracking-wide text-white/90 truncate">
            {siteConfig.announcement}
          </span>
        </div>

        <Link
          to="/visora/book-appointment"
          className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-sans font-medium text-[#5C9995] hover:text-white transition-colors shrink-0"
        >
          <span>Reserve Atelier Consultation</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

export default AnnouncementBar;
