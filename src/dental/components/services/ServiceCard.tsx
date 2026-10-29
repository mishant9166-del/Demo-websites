import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, Sun, Maximize2, Anchor, Activity, Smile, HeartPulse } from 'lucide-react';
import type { Service } from '../../types/dental';

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Sparkles,
  Sun,
  Maximize2,
  Anchor,
  Activity,
  Smile,
  HeartPulse
};

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Sparkles;

  return (
    <motion.article
      layout
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group bg-white border border-[#E3ECE9] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#0D9488]/40 hover:shadow-[0_15px_30px_rgba(13,148,136,0.08)] transition-all duration-300 relative"
    >
      <div>
        {/* Icon & Category Pill */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300 shadow-xs">
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAFCFB] border border-[#E3ECE9] text-[#687A80]">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <Link to={`/dental/services/${service.slug}`} className="block mb-2.5">
          <h3 className="text-lg font-bold text-[#152B32] group-hover:text-[#0D9488] transition-colors leading-snug">
            {service.name}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#687A80] leading-relaxed mb-6 font-normal">
          {service.shortDescription}
        </p>
      </div>

      {/* Learn More Action */}
      <div className="pt-4 border-t border-[#E3ECE9]/60 flex items-center justify-between">
        <Link
          to={`/dental/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D9488] group-hover:text-[#115E59] transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>

        {service.duration && (
          <span className="text-[11px] text-[#687A80]/70 font-medium">
            {service.duration}
          </span>
        )}
      </div>
    </motion.article>
  );
}
