import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="py-24 sm:py-32 bg-[#FAFBF8] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-3xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center mx-auto mb-6 shadow-xs">
          <Compass className="w-8 h-8 text-[#285A49]" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-[#72A88A]">
          404 Page Not Found
        </span>

        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#242C28] mt-2">
          Page Not Located
        </h1>

        <p className="mt-3 text-xs sm:text-sm text-[#727C75] leading-relaxed">
          The rehabilitation resource or page you are looking for may have moved or is unavailable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/rehabora"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            Rehabora Home
          </Link>
          <Link
            to="/rehabora/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white text-[#242C28] hover:text-[#285A49] border border-[#E1E8E2] transition-colors"
          >
            Browse Services
          </Link>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E1E8E2]">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#727C75] hover:text-[#285A49]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to 12-Project Portfolio Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
