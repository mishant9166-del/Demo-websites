import { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { services } from '../../data/services';
import { faqs } from '../../data/faqs';
import { ToothIcon } from '../common/ToothIcon';

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
      setTimeout(() => inputRef.current?.focus(), 60);
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKey);

      return () => {
        document.body.style.overflow = original;
        window.removeEventListener('keydown', handleKey);
      };
    }
  }, [isOpen, onClose]);

  const matchedServices = useMemo(() => {
    if (!query.trim()) return services.slice(0, 4);
    const q = query.toLowerCase().trim();
    return services.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.shortDescription.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
    );
  }, [query]);

  const matchedFaqs = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return faqs.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelectService = (slug: string) => {
    onClose();
    navigate(`/dental/services/${slug}`);
  };

  const handleSelectFaq = () => {
    onClose();
    navigate('/dental/faq');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#152B32]/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Search Card */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white border border-[#E3ECE9] rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Input Header */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#E3ECE9] gap-3">
              <Search className="w-5 h-5 text-[#0D9488] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search dental treatments, whitening, implants, FAQs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-none text-[#152B32] placeholder-[#687A80]/70 focus:outline-none text-base font-medium"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-full hover:bg-[#F0F8F6] text-[#687A80] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider text-[#687A80] border border-[#E3ECE9] rounded bg-[#FAFCFB]">
                ESC
              </span>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Dental Treatments ({matchedServices.length})</span>
                </div>

                {matchedServices.length === 0 ? (
                  <p className="text-xs text-[#687A80] py-2">No treatments matched your query.</p>
                ) : (
                  <div className="space-y-1.5">
                    {matchedServices.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleSelectService(service.slug)}
                        className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#F0F8F6] transition-all text-left group cursor-pointer border border-transparent hover:border-[#0D9488]/20"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#E6F6F2] flex items-center justify-center text-[#0D9488] shrink-0">
                            <ToothIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-[#152B32] group-hover:text-[#0D9488] transition-colors block">
                              {service.name}
                            </span>
                            <span className="text-xs text-[#687A80] line-clamp-1">
                              {service.shortDescription}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#0D9488] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 shrink-0" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {matchedFaqs.length > 0 && (
                <div className="pt-3 border-t border-[#E3ECE9]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488] mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Frequently Asked Questions ({matchedFaqs.length})</span>
                  </div>

                  <div className="space-y-1.5">
                    {matchedFaqs.slice(0, 3).map((faq) => (
                      <button
                        key={faq.id}
                        onClick={handleSelectFaq}
                        className="w-full p-2.5 rounded-lg hover:bg-[#F0F8F6] text-left text-xs text-[#152B32] font-medium transition-colors block group cursor-pointer"
                      >
                        <span className="group-hover:text-[#0D9488] transition-colors">
                          {faq.question}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 bg-[#FAFCFB] border-t border-[#E3ECE9] flex items-center justify-between text-xs text-[#687A80]">
              <span>Navigate with keyboard or click to view details</span>
              <button
                onClick={() => {
                  onClose();
                  navigate('/dental/services');
                }}
                className="text-[#0D9488] font-bold hover:underline"
              >
                View all services →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
