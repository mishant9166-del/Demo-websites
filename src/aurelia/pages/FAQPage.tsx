import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, Shield, CalendarCheck } from 'lucide-react';
import { AURELIA_FAQS } from '../data/faq';

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const categories = [
    'All',
    'Booking & Reservations',
    'Check-in & Stays',
    'Dining & Wellness',
    'Policies',
  ];

  const filteredFaqs =
    selectedCategory === 'All'
      ? AURELIA_FAQS
      : AURELIA_FAQS.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* Editorial Header */}
      <section className="bg-[#173D32] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5BE91] mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Guest Information & Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F8F5EF] leading-tight max-w-3xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#F8F5EF]/80 font-light max-w-2xl leading-relaxed">
            Essential information regarding our booking journey, sanctuary amenities, dining programs, and demonstration terms.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 pt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#D5BE91] text-[#173D32]'
                    : 'bg-white/10 hover:bg-white/20 text-[#F8F5EF] border border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordions */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white rounded-xs border border-[#D5BE91]/35 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F8F5EF]/40 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-semibold text-[#D5BE91] tracking-widest block">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#173D32]">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#173D32]/5 flex items-center justify-center text-[#173D32]">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#173D32]' : 'text-[#B8B0A2]'
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#D5BE91]/20 text-xs sm:text-sm text-[#292B27]/80 font-light leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Demo Disclaimer Box */}
        <div className="mt-16 p-6 bg-white rounded-xs border border-[#D5BE91]/40 shadow-xs flex items-start gap-4">
          <Shield className="w-5 h-5 text-[#173D32] shrink-0 mt-0.5" />
          <div className="text-xs text-[#292B27]/75 font-light leading-relaxed space-y-2">
            <p className="font-semibold text-[#173D32]">Demonstration Content Notice:</p>
            <p>
              AURELIA RETREATS is a portfolio demonstration website. All FAQs, check-in instructions, and cancellation policies are fictional models created to showcase high-fidelity hospitality UI/UX design.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/aurelia/booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-[0.2em] font-semibold rounded-xs shadow-md transition-all"
          >
            <CalendarCheck className="w-4 h-4 text-[#D5BE91]" />
            <span>Try The Demo Booking Console</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
