import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, ShieldAlert, BookOpen } from 'lucide-react';
import { skinConcerns } from '../data/skinConcerns';
import { treatments } from '../data/treatments';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

const CATEGORIES = ['All Concerns', 'Inflammatory Skin', 'Pigmentary Concerns', 'Barrier Health', 'Trichology'];

export const SkinConcernsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Concerns');

  const filteredConcerns = skinConcerns.filter((c) => {
    if (selectedCategory === 'All Concerns') return true;
    return c.category === selectedCategory;
  });

  return (
    <div className="pt-8 pb-20">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-6xl mb-14">
        <SectionHeading
          eyebrow="EDUCATIONAL GUIDE"
          title="Understanding Common"
          highlight="Skin & Scalp Concerns"
          subtitle="Explore general educational insights into various conditions. Clear understanding helps foster productive conversations with your dermatologist."
          align="center"
        />

        {/* Responsible medical education banner */}
        <div className="mt-8 bg-[#F0E9DF] border border-[#E4DED4] rounded-2xl p-4 md:p-6 flex items-start gap-3.5 max-w-3xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-[#B77962] shrink-0 mt-0.5" />
          <p className="text-xs text-[#292A27] leading-relaxed">
            <strong>Educational Disclaimer:</strong> The information provided here is for general health literacy and informational awareness only. Skin conditions can present similarly while requiring very distinct clinical management. Always consult a qualified dermatologist for personal assessment, diagnosis, and care plans.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#38473A] text-white shadow-sm'
                  : 'bg-white text-[#292A27] border border-[#E4DED4] hover:bg-[#F0E9DF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Concerns List / Alternating Editorial Cards */}
      <section className="container mx-auto px-6 max-w-6xl space-y-12">
        {filteredConcerns.map((concern, index) => {
          const isReversed = index % 2 === 1;
          const relatedTreatment =
            treatments.find((t) => concern.relatedTreatmentSlugs.includes(t.slug)) || treatments[0];

          return (
            <motion.div
              key={concern.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-[#E4DED4] overflow-hidden shadow-sm hover:border-[#38473A]/30 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Image side */}
                <div className={`lg:col-span-5 h-64 lg:h-96 w-full ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ImageWithFallback
                    src={concern.image}
                    alt={concern.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content side */}
                <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#B77962] block mb-2">
                    {concern.category}
                  </span>

                  <h3 className="font-serif text-2xl md:text-3xl text-[#292A27] font-normal mb-3">
                    {concern.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#77766F] leading-relaxed mb-6 font-light">
                    {concern.description}
                  </p>

                  {/* Common Signs */}
                  <div className="mb-6 bg-[#FAF7F2] rounded-2xl p-4 border border-[#E4DED4]">
                    <h4 className="text-xs font-bold text-[#292A27] uppercase tracking-wider mb-2">
                      Common Characteristics
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {concern.commonSigns.map((sign, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#292A27]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#9BAA96] shrink-0" />
                          <span>{sign}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Guidance Tip */}
                  <div className="mb-6 flex items-start gap-2.5 text-xs text-[#38473A] bg-[#9BAA96]/15 p-3 rounded-xl border border-[#9BAA96]/30">
                    <Sparkles className="w-4 h-4 text-[#38473A] shrink-0 mt-0.5" />
                    <span><strong>Clinical Perspective:</strong> {concern.summary}</span>
                  </div>

                  {/* Treatment Link */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#E4DED4]">
                    <span className="text-xs text-[#77766F]">
                      Related Care Option: <strong className="text-[#292A27]">{relatedTreatment.title}</strong>
                    </span>
                    <Link
                      to={`/dermora/treatments/${relatedTreatment.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38473A] hover:text-[#B77962] group"
                    >
                      Explore consultation details
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Questions to prepare banner */}
      <section className="container mx-auto px-6 max-w-4xl mt-20 text-center">
        <div className="bg-[#38473A] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <BookOpen className="w-12 h-12 text-[#9BAA96] mx-auto mb-4 stroke-[1.5]" />
          <h3 className="font-serif text-3xl font-normal mb-3">
            Preparing for Your Consultation
          </h3>
          <p className="text-xs md:text-sm text-[#F0E9DF]/80 max-w-xl mx-auto leading-relaxed mb-6 font-light">
            Bring a list of current skincare products, medications, and notes on how your skin responds to seasons, stress, or sun exposure. Our dermatologists will walk through everything during your visit.
          </p>
          <Link
            to="/dermora/appointment"
            className="inline-flex items-center gap-2 py-3 px-8 bg-[#FAF7F2] text-[#292A27] text-xs font-semibold rounded-full hover:bg-white transition shadow-sm"
          >
            Request a Consultation
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SkinConcernsPage;
