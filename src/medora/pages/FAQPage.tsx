import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronDown, HelpCircle, Layers, Calendar, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';
import { SectionHeading } from '../components/common/SectionHeading';

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const categories = ['All', 'Appointments', 'Departments', 'Facilities', 'Preparation', 'General'];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        selectedCategory === 'All' || faq.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F8FBFD] text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Header */}
        <SectionHeading
          eyebrow="PATIENT KNOWLEDGE BASE"
          title="Frequently Asked"
          highlight="Questions."
          subtitle="Find answers to common inquiries regarding medical appointments, clinical preparation, inpatient facilities, and doctor consultations."
          align="center"
        />

        {/* Search & Category Filter */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E1EAF0] shadow-2xs space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-[#1769AA] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions by keyword (e.g. appointment, fasting, MRI, emergency)..."
              className="w-full pl-12 pr-10 py-3 bg-[#F8FBFD] border border-[#E1EAF0] rounded-xl text-sm text-[#183047] placeholder-[#6B7E8E] focus:outline-hidden focus:border-[#1769AA] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6B7E8E] hover:text-[#183047]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E1EAF0]">
            <span className="text-xs font-bold text-[#6B7E8E] uppercase tracking-wider mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> Topic:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1769AA] text-white shadow-xs'
                    : 'bg-[#F8FBFD] text-[#6B7E8E] hover:bg-[#EAF5FC] hover:text-[#1769AA] border border-[#E1EAF0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-[#6B7E8E]">
          <span>
            Showing <strong className="text-[#102B46]">{filteredFaqs.length}</strong> questions
          </span>
          {selectedCategory !== 'All' && (
            <span className="bg-[#EAF5FC] text-[#1769AA] px-2.5 py-0.5 rounded-md font-semibold">
              Category: {selectedCategory}
            </span>
          )}
        </div>

        {/* Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E1EAF0] overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F8FBFD] transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#EAF5FC] text-[#1769AA] flex items-center justify-center shrink-0 mt-0.5">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#18A9A0] block mb-1">
                          {faq.category}
                        </span>
                        <h3 className="text-base font-bold text-[#102B46] leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full bg-[#F8FBFD] border border-[#E1EAF0] flex items-center justify-center text-[#1769AA] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1769AA] text-white' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-[#E1EAF0]/60 text-xs sm:text-sm text-[#6B7E8E] leading-relaxed pl-16">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-3xl border border-[#E1EAF0] p-8 max-w-lg mx-auto shadow-2xs">
            <HelpCircle className="w-12 h-12 text-[#1769AA] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#102B46] mb-1">No questions found</h3>
            <p className="text-xs text-[#6B7E8E] mb-6">
              We couldn't find any FAQs matching &ldquo;{searchQuery}&rdquo;. Try another question or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-2.5 rounded-full bg-[#1769AA] text-white text-xs font-bold hover:bg-[#125388] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Still Need Assistance CTA Box */}
        <div className="p-8 rounded-3xl bg-white border border-[#E1EAF0] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#102B46] mb-1">
              Have a question not answered here?
            </h4>
            <p className="text-xs text-[#6B7E8E]">
              Our patient help desk is happy to provide guidance on hospital services.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/medora/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EAF5FC] hover:bg-[#1769AA] text-[#1769AA] hover:text-white text-xs font-bold transition-all border border-[#1769AA]/20"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact Desk</span>
            </Link>

            <Link
              to="/medora/appointment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1769AA] hover:bg-[#125388] text-white text-xs font-bold shadow-xs transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Visit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
