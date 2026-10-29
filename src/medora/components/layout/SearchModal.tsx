import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Activity, User, ArrowRight, CornerDownLeft } from 'lucide-react';
import { departments } from '../../data/departments';
import { doctors } from '../../data/doctors';

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

  const cleanQuery = query.toLowerCase().trim();

  const matchingDepartments = cleanQuery
    ? departments.filter(
        (d) =>
          d.name.toLowerCase().includes(cleanQuery) ||
          d.shortDesc.toLowerCase().includes(cleanQuery) ||
          d.services.some((s) => s.toLowerCase().includes(cleanQuery)) ||
          d.conditions.some((c) => c.toLowerCase().includes(cleanQuery))
      )
    : [];

  const matchingDoctors = cleanQuery
    ? doctors.filter(
        (doc) =>
          doc.name.toLowerCase().includes(cleanQuery) ||
          doc.specialty.toLowerCase().includes(cleanQuery) ||
          doc.areasOfPractice.some((a) => a.toLowerCase().includes(cleanQuery))
      )
    : [];

  const hasResults = matchingDepartments.length > 0 || matchingDoctors.length > 0;

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
            className="fixed inset-0 bg-[#102B46]/60 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E1EAF0] overflow-hidden z-10 flex flex-col max-h-[80vh]"
          >
            {/* Search Input Bar */}
            <div className="p-4 sm:p-5 border-b border-[#E1EAF0] flex items-center gap-3 bg-[#F8FBFD]">
              <Search className="w-5 h-5 text-[#1769AA] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search departments, specialists, medical conditions..."
                className="w-full bg-transparent text-base sm:text-lg text-[#183047] placeholder-[#6B7E8E] focus:outline-hidden font-medium"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-md text-[#6B7E8E] hover:text-[#183047] hover:bg-[#EAF5FC] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg border border-[#E1EAF0] text-[#6B7E8E] hover:text-[#102B46] hover:bg-white text-xs font-semibold px-2 transition-colors shrink-0"
              >
                ESC
              </button>
            </div>

            {/* Results Area */}
            <div className="overflow-y-auto p-4 sm:p-5 divide-y divide-[#E1EAF0]/60">
              {!cleanQuery ? (
                <div className="py-8 text-center text-[#6B7E8E]">
                  <p className="text-sm">Type a search term to find medical departments or doctor profiles.</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {['Cardiology', 'Neurology', 'Dr. Sarah Khan', 'Pediatrics', 'MRI', 'Orthopedics'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF5FC] text-[#1769AA] hover:bg-[#1769AA] hover:text-white transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : !hasResults ? (
                <div className="py-10 text-center text-[#6B7E8E]">
                  <p className="text-base font-semibold text-[#183047]">No matching results found</p>
                  <p className="text-xs mt-1">We couldn't find anything matching &ldquo;{query}&rdquo;. Try another specialty or doctor name.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Department Matches */}
                  {matchingDepartments.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#6B7E8E] mb-3 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#1769AA]" />
                        Medical Departments ({matchingDepartments.length})
                      </h4>
                      <div className="space-y-2">
                        {matchingDepartments.slice(0, 5).map((dept) => (
                          <div
                            key={dept.id}
                            onClick={() => handleSelect(`/medora/departments/${dept.slug}`)}
                            className="p-3 rounded-xl border border-[#E1EAF0] hover:border-[#1769AA] hover:bg-[#F8FBFD] transition-all flex items-center justify-between cursor-pointer group"
                          >
                            <div className="pr-4">
                              <h5 className="text-sm font-bold text-[#102B46] group-hover:text-[#1769AA] transition-colors">
                                {dept.name}
                              </h5>
                              <p className="text-xs text-[#6B7E8E] line-clamp-1 mt-0.5">{dept.shortDesc}</p>
                            </div>
                            <div className="flex items-center gap-2 text-[#1769AA] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-xs font-semibold hidden sm:inline">Explore</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Doctor Matches */}
                  {matchingDoctors.length > 0 && (
                    <div className="pt-4">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#6B7E8E] mb-3 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#18A9A0]" />
                        Specialist Doctors ({matchingDoctors.length})
                      </h4>
                      <div className="space-y-2">
                        {matchingDoctors.slice(0, 5).map((doc) => (
                          <div
                            key={doc.id}
                            onClick={() => handleSelect(`/medora/doctors/${doc.slug}`)}
                            className="p-3 rounded-xl border border-[#E1EAF0] hover:border-[#18A9A0] hover:bg-[#F8FBFD] transition-all flex items-center justify-between cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={doc.portrait}
                                alt={doc.name}
                                className="w-10 h-10 rounded-full object-cover border border-[#E1EAF0]"
                              />
                              <div>
                                <h5 className="text-sm font-bold text-[#102B46] group-hover:text-[#1769AA] transition-colors">
                                  {doc.name}
                                </h5>
                                <p className="text-xs text-[#6B7E8E]">{doc.specialty} · {doc.experienceYears} yrs exp</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-[#18A9A0] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-xs font-semibold hidden sm:inline">View Profile</span>
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

            {/* Modal Footer */}
            <div className="p-3 bg-[#F8FBFD] border-t border-[#E1EAF0] flex items-center justify-between text-[11px] text-[#6B7E8E]">
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
