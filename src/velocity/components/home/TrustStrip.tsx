import { motion } from 'framer-motion';
import { Award, Layers, Scale, Sparkles } from 'lucide-react';

const trustItems = [
  {
    icon: Award,
    title: 'Carefully Selected Roster',
    description: 'Every vehicle passes strict mechanical and electronic pedigree verification.'
  },
  {
    icon: Layers,
    title: 'Multiple Vehicle Classes',
    description: 'From pure track sports coupes to bespoke electric grand tourers and luxury SUVs.'
  },
  {
    icon: Scale,
    title: 'Transparent Pricing Details',
    description: 'Clearly itemized illustrative valuation with zero concealed acquisition fees.'
  },
  {
    icon: Sparkles,
    title: 'Personalized Assistance',
    description: 'Bespoke concierge consultations tailored to individual driving preferences.'
  }
];

export function TrustStrip() {
  return (
    <section className="bg-[#101315] border-y border-white/10 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 lg:px-6 first:pl-0 last:pr-0"
              >
                <div className="w-10 h-10 rounded-sm bg-[#171B1E] border border-white/10 flex items-center justify-center text-[#C8FF45] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5F7F7] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A0A7AC] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
