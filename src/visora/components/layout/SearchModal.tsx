import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Glasses, Stethoscope, User, ArrowRight } from 'lucide-react';
import { eyewearCollection } from '../../data/eyewear';
import { eyeServices } from '../../data/services';
import { doctors } from '../../data/doctors';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        eyewear: eyewearCollection.slice(0, 3),
        services: eyeServices.slice(0, 3),
        doctors: doctors.slice(0, 2),
        isQueryEmpty: true,
      };
    }

    const matchedEyewear = eyewearCollection.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.frameShape.toLowerCase().includes(q) ||
        item.material.toLowerCase().includes(q)
    );

    const matchedServices = eyeServices.filter(
      (srv) =>
        srv.title.toLowerCase().includes(q) ||
        srv.shortDesc.toLowerCase().includes(q) ||
        srv.category.toLowerCase().includes(q)
    );

    const matchedDoctors = doctors.filter(
      (doc) =>
        doc.name.toLowerCase().includes(q) ||
        doc.specialty.toLowerCase().includes(q) ||
        doc.role.toLowerCase().includes(q)
    );

    return {
      eyewear: matchedEyewear,
      services: matchedServices,
      doctors: matchedDoctors,
      isQueryEmpty: false,
    };
  }, [query]);

  const totalMatches =
    searchResults.eyewear.length +
    searchResults.services.length +
    searchResults.doctors.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#15263B]/70 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#FAF7F2] rounded-3xl border border-[#E4E4DE] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Input Header */}
            <div className="p-4 sm:p-5 border-b border-[#E4E4DE] bg-white flex items-center gap-3">
              <Search className="w-5 h-5 text-[#5C9995] shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search eyewear frames, eye examinations, specialists..."
                className="w-full bg-transparent text-sm sm:text-base text-[#15263B] placeholder-[#687581] focus:outline-hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="p-1.5 text-[#687581] hover:text-[#15263B] transition-colors"
                  aria-label="Clear query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-2.5 py-1 text-xs rounded-md bg-[#F7F5EF] text-[#687581] hover:text-[#15263B] font-mono border border-[#E4E4DE]"
              >
                ESC
              </button>
            </div>

            {/* Results Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {searchResults.isQueryEmpty && (
                <div className="flex items-center justify-between text-xs text-[#687581] pb-2 border-b border-[#E4E4DE]">
                  <span>Suggested Searches:</span>
                  <div className="flex gap-2">
                    {['Titanium', 'Comprehensive', 'Dry Eye', 'Polarized'].map(
                      (tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setQuery(tag)}
                          className="px-2 py-0.5 rounded-full bg-white text-[11px] text-[#15263B] border border-[#E4E4DE] hover:border-[#5C9995] transition-colors"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Eyewear Results */}
              {searchResults.eyewear.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5C9995] mb-3">
                    <Glasses className="w-3.5 h-3.5" />
                    <span>Curated Eyewear ({searchResults.eyewear.length})</span>
                  </div>
                  <div className="space-y-2">
                    {searchResults.eyewear.map((frame) => (
                      <Link
                        key={frame.id}
                        to={`/visora/eyewear/${frame.slug}`}
                        onClick={onClose}
                        className="p-3 rounded-2xl bg-white border border-[#E4E4DE] hover:border-[#5C9995] hover:shadow-xs transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={frame.image}
                            alt={frame.name}
                            className="w-12 h-12 rounded-xl object-cover bg-[#F7F5EF] border border-[#E4E4DE]"
                          />
                          <div>
                            <h4 className="font-display text-sm font-medium text-[#15263B] group-hover:text-[#5C9995] transition-colors">
                              {frame.name}
                            </h4>
                            <span className="text-[11px] text-[#687581]">
                              {frame.category} • {frame.frameShape}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-[#15263B]">
                            ₹{frame.priceINR.toLocaleString('en-IN')}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#5C9995] ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Clinical Services */}
              {searchResults.services.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5C9995] mb-3">
                    <Stethoscope className="w-3.5 h-3.5" />
                    <span>Eye Examination Services ({searchResults.services.length})</span>
                  </div>
                  <div className="space-y-2">
                    {searchResults.services.map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/visora/services/${srv.slug}`}
                        onClick={onClose}
                        className="p-3.5 rounded-2xl bg-white border border-[#E4E4DE] hover:border-[#5C9995] hover:shadow-xs transition-all flex items-center justify-between group"
                      >
                        <div>
                          <h4 className="font-display text-sm font-medium text-[#15263B] group-hover:text-[#5C9995] transition-colors">
                            {srv.title}
                          </h4>
                          <span className="text-[11px] text-[#687581]">
                            {srv.category} • {srv.durationMinutes}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#5C9995] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Doctors & Specialists */}
              {searchResults.doctors.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5C9995] mb-3">
                    <User className="w-3.5 h-3.5" />
                    <span>Specialists ({searchResults.doctors.length})</span>
                  </div>
                  <div className="space-y-2">
                    {searchResults.doctors.map((doc) => (
                      <Link
                        key={doc.id}
                        to={`/visora/doctors/${doc.slug}`}
                        onClick={onClose}
                        className="p-3 rounded-2xl bg-white border border-[#E4E4DE] hover:border-[#5C9995] hover:shadow-xs transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={doc.portrait}
                            alt={doc.name}
                            className="w-10 h-10 rounded-full object-cover border border-[#E4E4DE]"
                          />
                          <div>
                            <h4 className="font-display text-sm font-medium text-[#15263B] group-hover:text-[#5C9995] transition-colors">
                              {doc.name}
                            </h4>
                            <span className="text-[11px] text-[#687581]">
                              {doc.specialty}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#5C9995] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {totalMatches === 0 && (
                <div className="py-12 text-center">
                  <p className="font-display text-base text-[#15263B]">
                    No matching optical items found for "{query}"
                  </p>
                  <p className="text-xs text-[#687581] mt-1">
                    Try searching for terms such as 'round', 'acetate', 'dry eye', or 'exam'.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-[#E4E4DE] bg-white text-center text-[11px] text-[#687581]">
              Navigate with your keyboard • Press <kbd className="px-1.5 py-0.5 rounded bg-[#F7F5EF] border border-[#E4E4DE] font-mono">ESC</kbd> to exit
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchModal;
