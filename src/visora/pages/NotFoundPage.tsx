import { Link } from 'react-router-dom';
import { EyeOff, ArrowLeft, Home, Glasses } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="py-24 sm:py-32 bg-[#F7F5EF] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-3xl bg-white text-[#5C9995] border border-[#E4E4DE] flex items-center justify-center mx-auto mb-6 shadow-xs">
          <EyeOff className="w-8 h-8 stroke-[1.5]" />
        </div>

        <span className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#5C9995]">
          404 Out of Focus
        </span>

        <h1 className="font-display text-3xl sm:text-4xl text-[#15263B] mt-2">
          Page Not Located
        </h1>

        <p className="mt-3 text-xs sm:text-sm text-[#687581] leading-relaxed">
          The optical consultation or eyewear item you are searching for has moved or does not exist in our catalog.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/visora"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Studio Home</span>
          </Link>
          <Link
            to="/visora/eyewear"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-white text-[#15263B] hover:text-[#5C9995] border border-[#E4E4DE] transition-colors"
          >
            <Glasses className="w-3.5 h-3.5" />
            <span>Browse Eyewear</span>
          </Link>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E4E4DE]">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#687581] hover:text-[#15263B]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to 12-Project Portfolio Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
