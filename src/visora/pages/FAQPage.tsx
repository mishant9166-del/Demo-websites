import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronDown, HelpCircle, SlidersHorizontal, AlertCircle } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { faqs } from '../data/faqs';

const FAQ_CATEGORIES = [
  'All',
  'Eye Examinations',
  'Eyewear & Lenses',
  'Appointments & Insurance',
  'Clinic Guidance',
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
    <div className="py-12 sm:py-16 bg-[#F7F5EF] min-h-[85vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <SectionHeading
            align="center"
            badge="PATIENT GUIDANCE"
            title="Frequently Asked"
            italicWord="Questions."
            subtitle="Understand our clinical examination protocols, lens materials, appointment scheduling, and optical preparation."
          />
        </div>

        {/* Search & Category Filter */}
        <div className="p-6 rounded-3xl bg-white border border-[#E4E4DE] shadow-xs mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-[#687581] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-10 pr-10 py-3 rounded-full text-xs sm:text-sm bg-[#F7F5EF] border border-[#E4E4DE] focus:outline-hidden focus:border-[#5C9995] text-[#15263B] placeholder-[#687581] transition-colors"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#687581] hover:text-[#15263B]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E4E4DE] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold text-[#687581] mr-2 flex items-center gap-1.5 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#5C9995]" />
              Topic:
            </span>
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#15263B] text-white shadow-xs font-semibold'
                    : 'bg-[#F7F5EF] text-[#687581] hover:text-[#15263B] hover:bg-[#E4E4DE] border border-[#E4E4DE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs text-[#687581]">
            Showing <span className="font-bold text-[#15263B]">{filteredFaqs.length}</span> question{filteredFaqs.length === 1 ? '' : 's'}
          </p>
          {(searchTerm || selectedCategory !== 'All') && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-semibold text-[#15263B] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Accordions */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-[#E4E4DE] bg-white overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4.5 flex items-center justify-between gap-4 text-left font-display text-base text-[#15263B] hover:text-[#5C9995] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#5C9995] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#687581] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#5C9995]' : ''
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
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#687581] leading-relaxed border-t border-[#E4E4DE]/60">
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
          <div className="p-10 text-center rounded-3xl bg-white border border-[#E4E4DE] shadow-xs my-6">
            <div className="w-12 h-12 rounded-full bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display text-base text-[#15263B]">
              No questions found
            </h3>
            <p className="text-xs text-[#687581] mt-1">
              We couldn't locate any questions matching "{searchTerm}".
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995]"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Still have questions */}
        <div className="mt-14 p-6 rounded-3xl bg-white border border-[#E4E4DE] text-center shadow-xs">
          <h4 className="font-display text-base text-[#15263B]">
            Have a question regarding your eye care?
          </h4>
          <p className="text-xs text-[#687581] mt-1 max-w-md mx-auto">
            Our atelier concierge is ready to assist with appointment details, prescription updates, or frame availability.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Link
              to="/visora/contact"
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors"
            >
              Contact Concierge
            </Link>
            <Link
              to="/visora/book-appointment"
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#F7F5EF] text-[#15263B] hover:bg-white border border-[#E4E4DE] transition-colors"
            >
              Book an Eye Test
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
