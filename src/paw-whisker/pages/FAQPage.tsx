import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, X, HelpCircle, Phone, Calendar } from 'lucide-react';
import { VET_FAQS } from '../data/faqs';
import { SectionHeading } from '../components/common/SectionHeading';

export const FAQPage: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1, 2]); // default first 2 open
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'First Visits', 'Vaccinations', 'Fear-Free Handling', 'Emergency', 'Payments', 'Routine Care'];

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = useMemo(() => {
    return VET_FAQS.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        selectedCategory === 'All' ||
        faq.category.toLowerCase().includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <SectionHeading
            badge="Frequently Asked Questions"
            badgeVariant="terracotta"
            title="Answers to common veterinary questions."
            subtitle="Learn about preparing your pet for their first appointment, vaccination protocols, Fear-Free techniques, and upfront treatment estimates."
          />
        </div>

        {/* Search & Category Filter */}
        <div className="p-6 rounded-3xl bg-white border border-[#E8DFD1] shadow-xs space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-[#82947A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions (e.g. vaccine, anxious, payment)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-2xl bg-[#FBF5EA] border border-[#E8DFD1] text-sm text-[#343D30] placeholder-[#343D30]/50 focus:outline-none focus:ring-2 focus:ring-[#C76F52]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-[#343D30]/60 hover:text-[#343D30]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                    active
                      ? 'bg-[#343D30] text-white border-[#343D30]'
                      : 'bg-[#FBF5EA] text-[#343D30]/80 border-[#E8DFD1] hover:bg-[#F0D9CA]/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E8DFD1] overflow-hidden transition-colors shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-[#FBF5EA]/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#82947A]">
                        {faq.category}
                      </span>
                      <h3 className="font-fraunces text-lg sm:text-xl font-bold text-[#343D30]">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full bg-[#FBF5EA] border border-[#E8DFD1] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#F0D9CA] text-[#C76F52]' : 'text-[#343D30]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#343D30]/85 leading-relaxed border-t border-[#E8DFD1]/50 bg-[#FBF5EA]/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-12 rounded-3xl bg-white border border-[#E8DFD1] text-center space-y-4">
              <HelpCircle className="w-8 h-8 text-[#C76F52] mx-auto" />
              <h4 className="font-fraunces text-xl font-bold text-[#343D30]">
                No questions found
              </h4>
              <p className="text-xs sm:text-sm text-[#343D30]/80">
                We couldn&apos;t find any FAQs matching &ldquo;{searchQuery}&rdquo;. Try another term or contact our front desk directly.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 rounded-xl bg-[#C76F52] text-white text-xs font-bold hover:bg-[#b05d42]"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F0D9CA]/50 border border-[#E8DFD1] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-fraunces text-2xl font-bold text-[#343D30]">
              Still have questions about your pet?
            </h4>
            <p className="text-xs sm:text-sm text-[#343D30]/80">
              Our front desk is always happy to answer questions or discuss specific handling requests.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/paw-whisker/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-[#E8DFD1] text-xs font-bold text-[#343D30] hover:bg-[#FBF5EA]"
            >
              <Phone className="w-4 h-4 text-[#82947A]" />
              <span>Contact Us</span>
            </Link>
            <Link
              to="/paw-whisker/book-visit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#C76F52] text-white text-xs font-bold hover:bg-[#b05d42]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Visit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
