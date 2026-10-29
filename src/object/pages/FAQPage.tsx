import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { STORE_FAQS } from '../data/faq';

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']);

  const categories = ['All', 'Orders', 'Shipping', 'Returns', 'Materials', 'Payments'];

  const filteredFaqs =
    selectedCategory === 'All'
      ? STORE_FAQS
      : STORE_FAQS.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Header */}
      <section className="bg-[#252525] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-[#FF704F] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Assistance & Store Knowledge</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl leading-relaxed">
            Everything you need to know about our ordering process, shipping timeframes, material integrity, and simulated checkout.
          </p>

          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase font-bold tracking-wider rounded-xs transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#2447E8] text-white'
                    : 'bg-[#1F1F1F] text-white/70 hover:text-white border border-[#383838]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className="border border-[#E5E5E0] rounded-xs overflow-hidden transition-all shadow-xs"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F7F7F4] transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#2447E8] uppercase tracking-widest block">
                    {faq.category}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-[#252525]">
                    {faq.question}
                  </h3>
                </div>
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#F7F7F4] flex items-center justify-center text-[#252525]">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#2447E8]' : 'text-[#777872]'
                    }`}
                  />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#777872] font-light leading-relaxed border-t border-[#E5E5E0] bg-[#F7F7F4]/40 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}

        {/* Demo Notice */}
        <div className="p-4 bg-[#F7F7F4] rounded-xs border border-[#E5E5E0] flex items-start gap-3 text-xs text-[#777872] mt-8">
          <ShieldCheck className="w-4 h-4 text-[#2447E8] shrink-0 mt-0.5" />
          <p>
            This FAQ is part of the OBJECT & FORM frontend demonstration. It models a production lifestyle retail brand’s support center.
          </p>
        </div>

        {/* Need more help CTA */}
        <div className="pt-8 text-center">
          <Link
            to="/object/contact"
            className="inline-flex items-center gap-2 text-xs uppercase font-bold text-[#2447E8] hover:underline"
          >
            <span>Have a specific inquiry? Contact Client Care</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
