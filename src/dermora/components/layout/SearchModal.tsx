import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles, User, HelpCircle, ArrowRight, CornerDownLeft } from 'lucide-react';
import { treatments } from '../../data/treatments';
import { specialists } from '../../data/specialists';
import { faqs } from '../../data/faqs';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Focus input on open
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

  // Escape to close
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

  const matchedTreatments = clean
    ? treatments.filter(
        (t) =>
          t.title.toLowerCase().includes(clean) ||
          t.shortDesc.toLowerCase().includes(clean) ||
          t.category.toLowerCase().includes(clean) ||
          t.commonReasons.some((r) => r.toLowerCase().includes(clean))
      )
    : [];

  const matchedSpecialists = clean
    ? specialists.filter(
        (s) =>
          s.name.toLowerCase().includes(clean) ||
          s.specialty.toLowerCase().includes(clean) ||
          s.areasOfInterest.some((a) => a.toLowerCase().includes(clean))
      )
    : [];

  const matchedFaqs = clean
    ? faqs.filter(
        (f) =>
          f.question.toLowerCase().includes(clean) ||
          f.answer.toLowerCase().includes(clean) ||
          f.category.toLowerCase().includes(clean)
      )
    : [];

  const hasResults =
    matchedTreatments.length > 0 || matchedSpecialists.length > 0 || matchedFaqs.length > 0;

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
            className="fixed inset-0 bg-[#292A27]/70 backdrop-blur-xs"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E4DED4] overflow-hidden z-10 flex flex-col max-h-[82vh]"
          >
            {/* Search Bar Header */}
            <div className="p-4 sm:p-5 border-b border-[#E4DED4] flex items-center gap-3 bg-white">
              <Search className="w-5 h-5 text-[#38473A] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search treatments, skin concerns, dermatologists, FAQs..."
                className="w-full bg-transparent text-base sm:text-lg text-[#292A27] placeholder-[#77766F] focus:outline-hidden font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-md text-[#77766F] hover:text-[#292A27] hover:bg-[#F0E9DF] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="px-2 py-1 rounded-md border border-[#E4DED4] text-[#77766F] hover:text-[#292A27] hover:bg-[#F0E9DF] text-xs font-mono shrink-0 transition-colors"
              >
                ESC
              </button>
            </div>

            {/* Results Body */}
            <div className="overflow-y-auto p-4 sm:p-6 divide-y divide-[#E4DED4]">
              {!clean ? (
                <div className="py-8 text-center text-[#77766F]">
                  <p className="text-sm font-sans">
                    Search through clinical treatments, specialist profiles, and patient FAQs.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {['Acne', 'Pigmentation', 'Dr. Elena Vance', 'Chemical Peels', 'Hair & Scalp', 'Sensitive Skin'].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-[#F0E9DF] text-[#38473A] hover:bg-[#38473A] hover:text-white transition-colors"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : !hasResults ? (
                <div className="py-10 text-center text-[#77766F]">
                  <p className="text-base font-serif text-[#292A27]">No results found</p>
                  <p className="text-xs mt-1">
                    No clinical treatments or profiles matched &ldquo;{query}&rdquo;. Try another term.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Treatments */}
                  {matchedTreatments.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#77766F] mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#B77962]" />
                        Treatments ({matchedTreatments.length})
                      </h4>
                      <div className="space-y-2">
                        {matchedTreatments.slice(0, 4).map((trt) => (
                          <div
                            key={trt.id}
                            onClick={() => handleSelect(`/dermora/treatments/${trt.slug}`)}
                            className="p-3.5 rounded-2xl bg-white border border-[#E4DED4] hover:border-[#38473A] hover:bg-[#F0E9DF]/40 transition-all flex items-center justify-between cursor-pointer group"
                          >
                            <div className="pr-4">
                              <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#B77962]">
                                {trt.category}
                              </span>
                              <h5 className="text-sm font-serif font-bold text-[#292A27] group-hover:text-[#38473A] transition-colors">
                                {trt.title}
                              </h5>
                              <p className="text-xs text-[#77766F] line-clamp-1 mt-0.5">{trt.shortDesc}</p>
                            </div>
                            <div className="flex items-center gap-1.5 text-[#38473A] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-xs font-sans font-medium hidden sm:inline">Explore</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specialists */}
                  {matchedSpecialists.length > 0 && (
                    <div className="pt-4">
                      <h4 className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#77766F] mb-3 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#9BAA96]" />
                        Specialists ({matchedSpecialists.length})
                      </h4>
                      <div className="space-y-2">
                        {matchedSpecialists.map((spec) => (
                          <div
                            key={spec.id}
                            onClick={() => handleSelect(`/dermora/specialists/${spec.slug}`)}
                            className="p-3 rounded-2xl bg-white border border-[#E4DED4] hover:border-[#38473A] hover:bg-[#F0E9DF]/40 transition-all flex items-center justify-between cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={spec.portrait}
                                alt={spec.name}
                                className="w-10 h-10 rounded-full object-cover border border-[#E4DED4]"
                              />
                              <div>
                                <h5 className="text-sm font-serif font-bold text-[#292A27] group-hover:text-[#38473A]">
                                  {spec.name}
                                </h5>
                                <p className="text-xs text-[#77766F]">{spec.specialty}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-[#38473A] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-xs font-sans font-medium hidden sm:inline">Profile</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* FAQs */}
                  {matchedFaqs.length > 0 && (
                    <div className="pt-4">
                      <h4 className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#77766F] mb-3 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-[#38473A]" />
                        Questions & Answers ({matchedFaqs.length})
                      </h4>
                      <div className="space-y-2">
                        {matchedFaqs.slice(0, 3).map((faq) => (
                          <div
                            key={faq.id}
                            onClick={() => handleSelect('/dermora/faq')}
                            className="p-3 rounded-xl bg-white border border-[#E4DED4] hover:border-[#38473A] cursor-pointer group"
                          >
                            <h5 className="text-xs font-sans font-bold text-[#292A27] group-hover:text-[#38473A]">
                              {faq.question}
                            </h5>
                            <p className="text-[11px] text-[#77766F] line-clamp-1 mt-0.5">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-[#F0E9DF] border-t border-[#E4DED4] flex items-center justify-between text-[11px] text-[#77766F] font-sans">
              <span>Quick Search Navigation</span>
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
