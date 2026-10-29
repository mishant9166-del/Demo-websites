import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Calendar, Target } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ImageWithFallback from '../common/ImageWithFallback';
import { programs } from '../../data/programs';

export function ProgramsFeature() {
  const topPrograms = programs.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#E1E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="REHABILITATION PROGRAMS"
            title="Progress starts with the right support."
            subtitle="Explore our structured rehabilitation pathways created to guide recovery over progressive weeks with milestone reviews and tailored guidance."
          />

          <Link
            to="/rehabora/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-all self-start md:self-auto shrink-0 shadow-xs"
          >
            Explore All 6 Programs
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Wide Featured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Hero Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl bg-[#FAFBF8] border border-[#E1E8E2] overflow-hidden flex flex-col justify-between p-8 sm:p-10 shadow-sm"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F2EC] text-[#285A49] mb-4">
                <Target className="w-3.5 h-3.5 text-[#72A88A]" />
                Featured Rehabilitation Pathway
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#242C28]">
                Sports Injury &amp; Functional Recovery
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#727C75] leading-relaxed">
                Structured for athletes and active individuals recovering from tendon, ligament, or muscular strain. Emphasizes graded movement loading, stability, and sport-specific return-to-play criteria.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs text-[#242C28]">
                  <CheckCircle2 className="w-4 h-4 text-[#285A49] shrink-0" />
                  <span>8 to 12 Week Structured Plan</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#242C28]">
                  <CheckCircle2 className="w-4 h-4 text-[#285A49] shrink-0" />
                  <span>Bi-weekly Objective Milestones</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#242C28]">
                  <CheckCircle2 className="w-4 h-4 text-[#285A49] shrink-0" />
                  <span>Graded Load Progression</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#242C28]">
                  <CheckCircle2 className="w-4 h-4 text-[#285A49] shrink-0" />
                  <span>Home Exercise Guidance</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E1E8E2] flex items-center justify-between">
              <span className="text-xs text-[#727C75]">
                Tailored around your target sport &amp; activity
              </span>
              <Link
                to="/rehabora/programs/sports-recovery-program"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#285A49] hover:text-[#193D32]"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Supervised Exercise Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-sm border border-[#E1E8E2] bg-[#E8F2EC] min-h-[300px]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
              alt="Physiotherapist supporting patient with supervised movement exercise"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#285A49]/90 text-white backdrop-blur-xs mb-1">
                Clinical Studio
              </span>
              <p className="font-heading text-lg font-bold">
                Supervised One-on-One Sessions
              </p>
              <p className="text-xs text-white/80 mt-1">
                Ensuring safe movement patterns and calibrated loading at every stage.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3 Secondary Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPrograms.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#FAFBF8] border border-[#E1E8E2] hover:border-[#72A88A] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#72A88A]">
                    {prog.durationWeeks}
                  </span>
                  <Calendar className="w-3.5 h-3.5 text-[#285A49]" />
                </div>
                <h4 className="font-heading text-base font-bold text-[#242C28] line-clamp-1">
                  {prog.title}
                </h4>
                <p className="mt-2 text-xs text-[#727C75] line-clamp-2 leading-relaxed">
                  {prog.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E1E8E2] flex items-center justify-between">
                <span className="text-[11px] text-[#727C75]">{prog.targetAudience}</span>
                <Link
                  to={`/rehabora/programs/${prog.slug}`}
                  className="text-xs font-bold text-[#285A49] hover:underline"
                >
                  View
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsFeature;
