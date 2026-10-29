import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Activity, User, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';
import { services } from '../../data/services';
import { programs } from '../../data/programs';
import { practitioners } from '../../data/practitioners';
import { faqs } from '../../data/faqs';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const clean = query.toLowerCase().trim();

  const matchedServices = clean
    ? services.filter(
        (s) =>
          s.title.toLowerCase().includes(clean) ||
          s.shortDesc.toLowerCase().includes(clean) ||
          s.category.toLowerCase().includes(clean) ||
          s.commonReasons.some((r) => r.toLowerCase().includes(clean))
      )
    : [];

  const matchedPrograms = clean
    ? programs.filter(
        (p) =>
          p.title.toLowerCase().includes(clean) ||
          p.shortDesc.toLowerCase().includes(clean) ||
          p.goals.some((g) => g.toLowerCase().includes(clean))
      )
    : [];

  const matchedPractitioners = clean
    ? practitioners.filter(
        (p) =>
          p.name.toLowerCase().includes(clean) ||
          p.specialty.toLowerCase().includes(clean) ||
          p.areasOfInterest.some((a) => a.toLowerCase().includes(clean))
      )
    : [];

  const matchedFaqs = clean
    ? faqs.filter(
        (f) =>
          f.question.toLowerCase().includes(clean) ||
          f.answer.toLowerCase().includes(clean)
      )
    : [];

  const hasResults =
    matchedServices.length > 0 ||
    matchedPrograms.length > 0 ||
    matchedPractitioners.length > 0 ||
    matchedFaqs.length > 0;

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#193D32]/70 backdrop-blur-xs"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-[#FAFBF8] rounded-3xl shadow-2xl border border-[#E1E8E2] overflow-hidden z-10 flex flex-col max-h-[82vh]"
          >
            {/* Search Header */}
            <div className="p-4 sm:p-5 border-b border-[#E1E8E2] flex items-center gap-3 bg-white">
              <Search className="w-5 h-5 text-[#285A49] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search rehabilitation services, programs, team, FAQs..."
                className="w-full bg-transparent text-base sm:text-lg text-[#242C28] placeholder-[#727C75] focus:outline-hidden font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-md text-[#727C75] hover:text-[#242C28] hover:bg-[#E8F2EC] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="px-2 py-1 rounded-md border border-[#E1E8E2] text-[#727C75] hover:text-[#242C28] hover:bg-[#E8F2EC] text-xs font-mono shrink-0 transition-colors"
              >
                ESC
              </button>
            </div>

            {/* Results Body */}
            <div className="overflow-y-auto p-4 sm:p-6 divide-y divide-[#E1E8E2]">
              {!clean ? (
                <div className="py-8 text-center text-[#727C75]">
                  <p className="text-sm font-sans">
                    Search through physiotherapy treatments, recovery programs, and specialist practitioners.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {['Spine Care', 'Sports Recovery', 'Gait Analysis', 'Post-Op Knee', 'Marcus Thorne', 'Balance'].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#E8F2EC] text-[#285A49] hover:bg-[#285A49] hover:text-white transition-colors"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : !hasResults ? (
                <div className="py-10 text-center text-[#727C75]">
                  <p className="text-base font-heading font-semibold text-[#242C28]">No results found</p>
                  <p className="text-xs mt-1">
                    No clinical services or programs matched &ldquo;{query}&rdquo;. Try another search term.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Services */}
                  {matchedServices.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#727C75] mb-3 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#285A49]" />
                        Services ({matchedServices.length})
                      </h4>
                      <div className="space-y-2">
                        {matchedServices.slice(0, 3).map((srv) => (
                          <div
                            key={srv.id}
                            onClick={() => handleSelect(`/rehabora/services/${srv.slug}`)}
                            className="p-3.5 rounded-2xl bg-white border border-[#E1E8E2] hover:border-[#285A49] hover:bg-[#E8F2EC]/40 transition-all flex items-center justify-between cursor-pointer group"
                          >
                            <div className="pr-4">
                              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#285A49]">
                                {srv.category}
                              </span>
                              <h5 className="text-sm font-heading font-bold text-[#242C28] group-hover:text-[#285A49] transition-colors">
                                {srv.title}
                              </h5>
                              <p className="text-xs text-[#727C75] line-clamp-1 mt-0.5">{srv.shortDesc}</p>
                            </div>
                            <div className="flex items-center gap-1.5 text-[#285A49] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-xs font-sans font-medium hidden sm:inline">Explore</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Programs */}
                  {matchedPrograms.length > 0 && (
                    <div className="pt-4">
                      <h4 className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#727C75] mb-3 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#D8A66A]" />
                        Rehabilitation Programs ({matchedPrograms.length})
                      </h4>
                      <div className="space-y-2">
                        {matchedPrograms.slice(0, 3).map((prg) => (
                          <div
                            key={prg.id}
                            onClick={() => handleSelect(`/rehabora/programs/${prg.slug}`)}
                            className="p-3.5 rounded-2xl bg-white border border-[#E1E8E2] hover:border-[#285A49] hover:bg-[#E8F2EC]/40 transition-all flex items-center justify-between cursor-pointer group"
                          >
                            <div className="pr-4">
                              <span className="text-[10px] font-sans font-semibold text-[#D8A66A] uppercase tracking-wider">
                                {prg.durationWeeks}
                              </span>
                              <h5 className="text-sm font-heading font-bold text-[#242C28] group-hover:text-[#285A49] transition-colors">
                                {prg.title}
                              </h5>
                              <p className="text-xs text-[#727C75] line-clamp-1 mt-0.5">{prg.shortDesc}</p>
                            </div>
                            <div className="flex items-center gap-1.5 text-[#285A49] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-xs font-sans font-medium hidden sm:inline">Details</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Practitioners */}
                  {matchedPractitioners.length > 0 && (
                    <div className="pt-4">
                      <h4 className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#727C75] mb-3 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#285A49]" />
                        Practitioners ({matchedPractitioners.length})
                      </h4>
                      <div className="space-y-2">
                        {matchedPractitioners.map((prac) => (
                          <div
                            key={prac.id}
                            onClick={() => handleSelect(`/rehabora/practitioners/${prac.slug}`)}
                            className="p-3 rounded-2xl bg-white border border-[#E1E8E2] hover:border-[#285A49] hover:bg-[#E8F2EC]/40 transition-all flex items-center justify-between cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={prac.portrait}
                                alt={prac.name}
                                className="w-10 h-10 rounded-full object-cover border border-[#E1E8E2]"
                              />
                              <div>
                                <h5 className="text-sm font-heading font-bold text-[#242C28] group-hover:text-[#285A49]">
                                  {prac.name}
                                </h5>
                                <p className="text-xs text-[#727C75]">{prac.specialty}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-[#285A49] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-xs font-sans font-medium hidden sm:inline">Profile</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-[#E8F2EC] border-t border-[#E1E8E2] flex items-center justify-between text-[11px] text-[#727C75] font-sans">
              <span>Quick Navigation Search</span>
              <span className="flex items-center gap-1">
                Press <CornerDownLeft className="w-3 h-3 inline" /> to select
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default SearchModal;
