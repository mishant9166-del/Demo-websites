import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Users, Target } from 'lucide-react';
import type { Program } from '../../types/rehabora';
import ImageWithFallback from '../common/ImageWithFallback';

interface ProgramCardProps {
  program: Program;
  featured?: boolean;
  index?: number;
}

export function ProgramCard({ program, featured = false, index = 0 }: ProgramCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group relative grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-white border border-[#E1E8E2] overflow-hidden shadow-sm hover:shadow-md hover:border-[#72A88A]/60 transition-all duration-300"
      >
        <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#E8F2EC]">
          <ImageWithFallback
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#285A49] text-white shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-[#D8A66A]" />
              {program.durationWeeks}
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 p-7 lg:p-9 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#72A88A] mb-2">
              <Users className="w-3.5 h-3.5 text-[#285A49]" />
              {program.targetAudience}
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#242C28] group-hover:text-[#285A49] transition-colors">
              {program.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#727C75] leading-relaxed">
              {program.shortDesc}
            </p>

            <div className="mt-5 pt-4 border-t border-[#E1E8E2]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#242C28] mb-2 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-[#285A49]" />
                Primary Program Goals
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {program.goals.slice(0, 3).map((goal, i) => (
                  <li key={i} className="text-xs text-[#727C75] flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#72A88A] mt-1 shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E1E8E2] flex items-center justify-between">
            <span className="text-xs text-[#727C75]">
              Structured recovery milestones
            </span>
            <Link
              to={`/rehabora/programs/${program.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors shadow-xs"
            >
              Explore Program
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative flex flex-col rounded-2xl bg-white border border-[#E1E8E2] overflow-hidden shadow-sm hover:shadow-md hover:border-[#72A88A]/60 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E8F2EC]">
        <ImageWithFallback
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#285A49] text-white">
            <Calendar className="w-3 h-3 text-[#D8A66A]" />
            {program.durationWeeks}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-[#72A88A] uppercase tracking-wider block mb-1">
            {program.targetAudience}
          </span>
          <h3 className="font-heading text-lg font-bold text-[#242C28] group-hover:text-[#285A49] transition-colors line-clamp-1">
            {program.title}
          </h3>
          <p className="mt-2 text-sm text-[#727C75] line-clamp-2 leading-relaxed">
            {program.shortDesc}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-[#E1E8E2]/80 flex items-center justify-between">
          <span className="text-xs text-[#727C75]">Personalized pace</span>
          <Link
            to={`/rehabora/programs/${program.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#285A49] group-hover:text-[#193D32] transition-colors"
          >
            Explore Program
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProgramCard;
