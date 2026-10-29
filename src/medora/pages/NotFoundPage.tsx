import { Link } from 'react-router-dom';
import { Home, Stethoscope, Search, Calendar } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="py-20 sm:py-32 bg-[#F8FBFD] flex items-center justify-center text-center px-4">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Healthcare Themed 404 Visual Icon */}
        <div className="w-24 h-24 rounded-3xl bg-[#EAF5FC] border border-[#1769AA]/20 text-[#1769AA] flex items-center justify-center mx-auto shadow-md relative">
          <Stethoscope className="w-12 h-12" />
          <span className="absolute -top-2 -right-2 bg-[#18A9A0] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs">
            404
          </span>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#18A9A0] bg-[#EAF5FC] px-3.5 py-1 rounded-full border border-[#1769AA]/15 inline-block mb-3">
            Clinical Record Not Located
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102B46] tracking-tight">
            Page or Department Not Found
          </h1>
          <p className="text-sm sm:text-base text-[#6B7E8E] max-w-md mx-auto mt-3 leading-relaxed">
            The page you requested may have been relocated, renamed, or is currently unavailable. Please verify the URL or explore our medical directory below.
          </p>
        </div>

        {/* Quick Links */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/medora"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1769AA] hover:bg-[#125388] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Hospital Homepage</span>
          </Link>

          <Link
            to="/medora/departments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#EAF5FC] text-[#102B46] hover:text-[#1769AA] text-xs font-bold border border-[#E1EAF0] shadow-2xs transition-colors"
          >
            <Search className="w-4 h-4 text-[#18A9A0]" />
            <span>Explore Departments</span>
          </Link>

          <Link
            to="/medora/appointment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#EAF5FC] text-[#102B46] hover:text-[#1769AA] text-xs font-bold border border-[#E1EAF0] shadow-2xs transition-colors"
          >
            <Calendar className="w-4 h-4 text-[#1769AA]" />
            <span>Book Appointment</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-[#E1EAF0] text-xs text-[#6B7E8E]">
          <span>Need immediate assistance? Contact reception at </span>
          <Link to="/medora/contact" className="font-bold text-[#1769AA] hover:underline">
            Hospital Contact Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
