import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle, Filter, ShieldAlert } from 'lucide-react';
import { faqs } from '../data/faqs';
import { SectionHeading } from '../components/common/SectionHeading';

const CATEGORIES = [
  'All Questions',
  'Consultations & Prep',
  'Care & Treatments',
  'Hair & Scalp',
  'Appointments & Policies',
];

export const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Questions');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']); // First one open by default

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
        selectedCategory === 'All Questions' || faq.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading
          eyebrow="PATIENT QUESTIONS"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Clear answers about preparing for your visit, what to expect during a consultation, and how we tailor our dermatology approach."
          align="center"
        />

        {/* Responsible medical education banner */}
        <div className="mt-8 bg-[#F0E9DF] border border-[#E4DED4] rounded-2xl p-4 md:p-5 flex items-start gap-3.5 max-w-2xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-[#B77962] shrink-0 mt-0.5" />
          <p className="text-xs text-[#292A27] leading-relaxed">
            <strong>Medical Notice:</strong> Information provided here is general guidance for educational purposes only. Treatment decisions, diagnosis, and medical advice require evaluation by a qualified healthcare professional.
          </p>
        </div>

        {/* Search bar */}
        <div className="mt-8 bg-white p-3 rounded-2xl border border-[#E4DED4] shadow-sm flex items-center gap-3">
          <Search className="w-4 h-4 text-[#77766F] ml-2 shrink-0" />
          <input
            type="text"
            placeholder="Search questions or keywords (e.g. preparation, scalp, peels)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-1.5 bg-transparent text-sm text-[#292A27] placeholder:text-[#77766F] focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-[#77766F] hover:text-[#292A27] px-2 py-1"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#38473A] text-white shadow-sm'
                  : 'bg-white text-[#292A27] border border-[#E4DED4] hover:bg-[#F0E9DF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E4DED4] overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none group"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#9BAA96] shrink-0" />
                      <span className="font-serif text-base sm:text-lg text-[#292A27] group-hover:text-[#38473A] transition">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 text-[#292A27] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#38473A] text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#E4DED4]/60 text-xs sm:text-sm text-[#77766F] leading-relaxed font-light">
                          {faq.answer}
                          <div className="mt-3">
                            <span className="inline-block text-[10px] uppercase tracking-wider font-semibold text-[#B77962] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E4DED4]">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl border border-[#E4DED4] p-12 text-center max-w-md mx-auto">
              <Filter className="w-8 h-8 text-[#77766F] mx-auto mb-3 stroke-[1.5]" />
              <h4 className="font-serif text-lg text-[#292A27] mb-1">No matching questions found</h4>
              <p className="text-xs text-[#77766F] mb-4">
                Try searching for broader keywords or choose "All Questions".
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Questions');
                }}
                className="px-4 py-2 bg-[#38473A] text-white text-xs rounded-full hover:bg-[#292A27] transition"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
