import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronDown, HelpCircle, SlidersHorizontal, AlertCircle } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { faqs } from '../data/faqs';

const FAQ_CATEGORIES = [
  'All',
  'Consultation & Prep',
  'Services & Recovery',
  'Programs',
  'Appointments & Clinic',
];

export function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIds, setOpenIds] = useState<string[]>([faqs[0]?.id || '']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat =
        selectedCategory === 'All' || faq.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <div className="py-12 sm:py-16 bg-[#FAFBF8] min-h-[85vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <SectionHeading
            align="center"
            badge="HELP &amp; INFORMATION"
            title="Frequently Asked Questions."
            subtitle="Find clear answers regarding initial evaluations, appointment scheduling, program structure, and preparing for your visit."
          />
        </div>

        {/* Search & Filter Controls */}
        <div className="p-6 rounded-3xl bg-white border border-[#E1E8E2] shadow-xs mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-[#727C75] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-10 pr-10 py-3 rounded-full text-xs sm:text-sm bg-[#FAFBF8] border border-[#E1E8E2] focus:outline-hidden focus:border-[#285A49] transition-colors text-[#242C28] placeholder-[#727C75]"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#727C75] hover:text-[#242C28]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E1E8E2] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-[#727C75] mr-2 flex items-center gap-1.5 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#285A49]" />
              Topic:
            </span>
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#285A49] text-white shadow-xs font-bold'
                    : 'bg-[#FAFBF8] text-[#727C75] hover:text-[#242C28] hover:bg-[#E8F2EC] border border-[#E1E8E2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs text-[#727C75]">
            Showing <span className="font-bold text-[#242C28]">{filteredFaqs.length}</span> question{filteredFaqs.length === 1 ? '' : 's'}
          </p>
          {(searchTerm || selectedCategory !== 'All') && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-bold text-[#285A49] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* FAQs Accordion */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-[#E1E8E2] bg-white overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4.5 flex items-center justify-between gap-4 text-left font-heading text-sm sm:text-base font-bold text-[#242C28] hover:text-[#285A49] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#72A88A] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#727C75] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#285A49]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#727C75] leading-relaxed border-t border-[#E1E8E2]/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="p-10 text-center rounded-3xl bg-white border border-[#E1E8E2] shadow-xs my-6">
            <div className="w-12 h-12 rounded-full bg-[#E8F2EC] text-[#285A49] flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#242C28]">
              No questions found
            </h3>
            <p className="text-xs text-[#727C75] mt-1">
              We couldn't find any questions matching "{searchTerm}".
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 px-4 py-2 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32]"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Still have questions card */}
        <div className="mt-14 p-6 rounded-3xl bg-[#E8F2EC] border border-[#D4E5D9] text-center">
          <h4 className="font-heading text-base font-bold text-[#285A49]">
            Have a question not addressed here?
          </h4>
          <p className="text-xs text-[#285A49]/80 mt-1 max-w-md mx-auto">
            Our clinic team is available to assist with practical details prior to your visit.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="/rehabora/contact"
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors"
            >
              Contact Clinic
            </a>
            <a
              href="/rehabora/appointment"
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-white text-[#285A49] hover:bg-[#FAFBF8] border border-[#D4E5D9] transition-colors"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
