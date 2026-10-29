import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, UserCheck, MessageSquare, Flame, CheckCircle } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ImageWithFallback from '../common/ImageWithFallback';

export function ApproachSection() {
  const principles = [
    {
      num: '01',
      title: 'Individual Attention',
      desc: 'We take the time to understand your unique lifestyle, daily physical demands, and history before recommending an approach.',
      icon: UserCheck,
    },
    {
      num: '02',
      title: 'Clear Communication',
      desc: 'Transparent explanations of findings, collaborative goal-setting, and practical guidance without clinical jargon.',
      icon: MessageSquare,
    },
    {
      num: '03',
      title: 'Movement-Focused Care',
      desc: 'Active rehabilitation and functional exercises designed to rebuild resilience, coordination, and day-to-day confidence.',
      icon: Flame,
    },
    {
      num: '04',
      title: 'Progress Reviewed Over Time',
      desc: 'Regular check-ins and objective milestones to ensure your program adjusts dynamically as your capabilities develop.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E1E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E1E8E2] aspect-[4/5] bg-[#E8F2EC]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
                alt="Physiotherapist discussing a personalized rehabilitation plan with a patient"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Inset Quote card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 max-w-[280px] bg-[#FAFBF8] border border-[#E1E8E2] rounded-2xl p-5 shadow-xl hidden sm:block">
              <span className="text-2xl text-[#D8A66A] font-serif leading-none">“</span>
              <p className="text-xs italic text-[#242C28] font-medium mt-1">
                True rehabilitation meets you where you are today, building towards tomorrow step-by-step.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#72A88A]" />
                <span className="text-[11px] font-bold text-[#285A49]">Rehabora Practice Ethos</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Approach content and 4 principles */}
          <div className="lg:col-span-7">
            <SectionHeading
              badge="THE REHABORA APPROACH"
              title="Every movement journey is different."
              subtitle="Rehabilitation is never one-size-fits-all. Our clinicians combine hands-on clinical assessment with active, functional guidance tailored to your specific goals and daily routine."
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {principles.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="p-5 rounded-2xl bg-[#FAFBF8] border border-[#E1E8E2] hover:border-[#72A88A] hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#E8F2EC] text-[#285A49] flex items-center justify-center group-hover:bg-[#285A49] group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#72A88A]">{item.num}</span>
                    </div>
                    <h4 className="font-heading text-base font-bold text-[#242C28]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs text-[#727C75] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E1E8E2] flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-[#727C75]">
                Ethical practice: individual care depends on licensed practitioner assessment.
              </span>
              <Link
                to="/rehabora/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors shadow-xs"
              >
                Discover Our Approach
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApproachSection;
