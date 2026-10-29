import { motion } from 'framer-motion';
import { UserCheck, Stethoscope, Sparkles, Coffee } from 'lucide-react';

const trustItems = [
  {
    icon: UserCheck,
    title: 'Patient-Focused Care',
    description: 'We listen carefully to your goals and tailor every procedure around your individual comfort.'
  },
  {
    icon: Stethoscope,
    title: 'Experienced Dental Team',
    description: 'Licensed practitioners with postgraduate training across cosmetic and restorative disciplines.'
  },
  {
    icon: Sparkles,
    title: 'Modern Clinical Equipment',
    description: 'Low-radiation 3D imaging, digital optical scanners, and ultrasonic cleaning systems.'
  },
  {
    icon: Coffee,
    title: 'Comfortable Environment',
    description: 'A serene clinic atmosphere designed to alleviate dental anxiety and support peaceful visits.'
  }
];

export function TrustStrip() {
  return (
    <section className="bg-white border-y border-[#E3ECE9] py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E3ECE9]">
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
                <div className="w-11 h-11 rounded-xl bg-[#E6F6F2] border border-[#0D9488]/20 flex items-center justify-center text-[#0D9488] shrink-0 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#152B32] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#687A80] leading-relaxed">
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
