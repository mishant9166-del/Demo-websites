import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  HelpCircle, 
  X, 
  Calendar, 
  MessageSquare, 
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';
import { EmptyState } from '../components/common/EmptyState';

const CATEGORIES = ['All', 'General', 'Treatments', 'Care', 'Appointments'] as const;

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['faq-01']));

  const toggleFAQ = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(faqs.map(f => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        faq.question.toLowerCase().includes(q) || 
        faq.answer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F6F2] text-[#0D9488] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            PATIENT INFORMATION
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#152B32] tracking-tight mb-4"
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#687A80] max-w-2xl mx-auto leading-relaxed"
          >
            Find clear answers to common questions about routine visits, dental treatments, hygiene habits, and appointment scheduling.
          </motion.p>
        </div>

        {/* Clinical Disclaimer Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="mb-8 p-4 rounded-2xl bg-[#E6F6F2]/70 border border-[#0D9488]/20 flex items-start gap-3.5 text-xs text-[#115E59]"
        >
          <AlertCircle className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Clinical Note:</strong> Answers provided here are for general informational guidance. Dental requirements vary by individual oral anatomy; suitability and definitive treatment plans must always be assessed in person by a qualified dental professional.
          </p>
        </motion.div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3ECE9] shadow-sm mb-10 space-y-6">
          
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#687A80] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords (e.g., whitening, aligners, cleaning, checkup)..."
              className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-[#FAFCFB] border border-[#E3ECE9] text-sm text-[#152B32] placeholder-[#687A80]/70 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#687A80] hover:text-[#152B32] p-1 rounded-full hover:bg-[#E3ECE9]/50 transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Chips & Bulk toggle */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0D9488] text-white shadow-sm'
                      : 'bg-[#FAFCFB] text-[#687A80] hover:bg-[#E6F6F2] hover:text-[#0D9488] border border-[#E3ECE9]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-[#687A80]">
              <button
                onClick={expandAll}
                className="hover:text-[#0D9488] font-medium transition-colors cursor-pointer"
              >
                Expand All
              </button>
              <span>•</span>
              <button
                onClick={collapseAll}
                className="hover:text-[#0D9488] font-medium transition-colors cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIds.has(faq.id);
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#0D9488]/40 shadow-sm' : 'border-[#E3ECE9] hover:border-[#0D9488]/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#F0F8F6] text-[#0D9488] border border-[#E3ECE9]">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#152B32]">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-[#FAFCFB] flex items-center justify-center shrink-0 border border-[#E3ECE9] text-[#687A80] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0D9488] bg-[#E6F6F2] border-[#0D9488]/30' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-[#687A80] leading-relaxed border-t border-[#FAFCFB]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <EmptyState
              icon={HelpCircle}
              title="No Matching Questions Found"
              description={`We couldn't find any FAQs matching "${searchQuery}". Please try adjusting your search terms or select another category.`}
              actionLabel="Clear Filters"
              onActionClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            />
          )}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-16 bg-gradient-to-br from-[#E6F6F2] to-[#F0F8F6] rounded-3xl p-8 border border-[#0D9488]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-[#152B32]">
              Still have questions about your dental health?
            </h3>
            <p className="text-sm text-[#687A80] mt-1 max-w-lg">
              Our clinic team is available to assist you with inquiries, scheduling, and treatment planning.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              to="/dental/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#152B32] text-xs font-semibold hover:text-[#0D9488] border border-[#E3ECE9] transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#0D9488]" />
              Contact Clinic
            </Link>
            <Link
              to="/dental/appointment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D9488] text-white text-xs font-semibold hover:bg-[#115E59] transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
