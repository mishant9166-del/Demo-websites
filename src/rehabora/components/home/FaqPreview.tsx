import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { faqs } from '../../data/faqs';

export function FaqPreview() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const previewFaqs = faqs.slice(0, 4);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#E1E8E2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionHeading
            align="center"
            badge="COMMON INQUIRIES"
            title="Frequently asked questions."
            subtitle="Understand what to expect before attending your initial consultation and how our rehabilitation pathways work."
          />
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {previewFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#E1E8E2] bg-[#FAFBF8] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-heading text-base sm:text-lg font-bold text-[#242C28] hover:text-[#285A49] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#72A88A] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#727C75] shrink-0 transition-transform duration-300 ${
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
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#727C75] leading-relaxed border-t border-[#E1E8E2]/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Link to all FAQs */}
        <div className="mt-10 text-center">
          <Link
            to="/rehabora/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#E8F2EC] text-[#285A49] hover:bg-[#285A49] hover:text-white transition-all shadow-xs"
          >
            Browse All Questions &amp; Answers
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FaqPreview;
