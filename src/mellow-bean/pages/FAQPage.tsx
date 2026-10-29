import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  HelpCircle,
  Search,
  X,
  ShieldAlert,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { CAFE_FAQS } from '../data/faqs';

const FAQ_CATEGORIES = [
  'All',
  'Reservations',
  'Dietary & Menu',
  'Pickup Orders',
  'Hours & Space',
] as const;

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<(string | number)[]>([CAFE_FAQS[0].id, CAFE_FAQS[2].id]);

  const toggleAccordion = (id: string | number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = useMemo(() => {
    let result = [...CAFE_FAQS];

    if (selectedCategory !== 'All') {
      result = result.filter((faq) => faq.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (faq) =>
          faq.question.toLowerCase().includes(q) ||
          faq.answer.toLowerCase().includes(q) ||
          faq.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-20 bg-[#F8F2E7] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <SectionHeading
            badge="Guest Guide & Questions"
            title="Frequently Asked Questions"
            subtitle="Everything you might like to know about our single-estate beans, wild sourdough starters, table booking policies, and pickup hatch."
            className="mb-0"
          />
          <p className="font-handwriting text-2xl text-[#B77A4A]">
            “Clear answers for calm visits.”
          </p>
        </div>

        {/* Demo Disclaimer Top Notice */}
        <div className="p-4 rounded-2xl bg-[#F0D27A]/25 border border-[#F0D27A]/50 flex items-start gap-3 text-xs sm:text-sm text-[#382820]">
          <ShieldAlert className="w-5 h-5 text-[#B77A4A] shrink-0 mt-0.5" />
          <p>
            <strong>Showcase Notice:</strong> MELLOW & BEAN is a simulated brand designed for a web development portfolio. The answers reflect our imagined café standards and policies.
          </p>
        </div>

        {/* Search & Category Pills */}
        <div className="space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#B77A4A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. oat milk, dog-friendly, reservations, parking)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-[#FFFEFA] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] placeholder-[#382820]/50 focus:outline-none focus:ring-2 focus:ring-[#382820] shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#382820]/60 hover:text-[#382820]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#382820] text-[#FFFEFA] shadow-md'
                    : 'bg-[#FFFEFA] text-[#382820] border border-[#EADFCF] hover:bg-[#F0D27A] hover:border-[#F0D27A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-[#FFFEFA] rounded-2xl sm:rounded-3xl border border-[#EADFCF] overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1 pr-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B77A4A] block">
                        {faq.category}
                      </span>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#382820]">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full bg-[#F8F2E7] border border-[#EADFCF] flex items-center justify-center text-[#382820] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#F0D27A]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#382820]/80 font-sans leading-relaxed border-t border-[#EADFCF]/60 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-14 px-4 bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] space-y-3">
              <HelpCircle className="w-10 h-10 text-[#B77A4A] mx-auto" />
              <p className="font-serif font-bold text-[#382820]">No questions found</p>
              <p className="text-xs text-[#382820]/70">
                We couldn't find an answer matching "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2 rounded-full bg-[#382820] text-[#FFFEFA] text-xs font-semibold"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions Card */}
        <div className="p-8 rounded-3xl bg-[#FFFEFA] border border-[#EADFCF] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-lg text-[#382820]">
              Still have a question?
            </h4>
            <p className="text-xs sm:text-sm text-[#382820]/75">
              Drop our team a note or stop by our Indiranagar café for a face-to-face chat.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/mellow-bean/contact"
              className="px-5 py-2.5 rounded-full bg-[#382820] text-[#FFFEFA] text-xs font-semibold hover:bg-[#382820]/90 transition-all shadow-sm"
            >
              Contact Us
            </Link>
            <Link
              to="/mellow-bean/reservations"
              className="px-5 py-2.5 rounded-full bg-[#F0D27A] text-[#382820] text-xs font-semibold hover:bg-[#F0D27A]/90 transition-all"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
