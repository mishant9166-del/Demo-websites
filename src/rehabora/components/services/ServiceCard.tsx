import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Activity } from 'lucide-react';
import type { Service } from '../../types/rehabora';
import ImageWithFallback from '../common/ImageWithFallback';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative flex flex-col rounded-2xl bg-white border border-[#E1E8E2] overflow-hidden shadow-sm hover:shadow-md hover:border-[#72A88A]/60 transition-all duration-300"
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E8F2EC]">
        <ImageWithFallback
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#285A49] backdrop-blur-sm shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#72A88A]" />
            {service.category}
          </span>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-black/60 text-white backdrop-blur-sm">
            <Clock className="w-3 h-3 text-[#D8A66A]" />
            {service.durationMinutes}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-lg font-bold text-[#242C28] group-hover:text-[#285A49] transition-colors line-clamp-1">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-[#727C75] line-clamp-2 leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-[#E1E8E2]/80 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs text-[#727C75] font-medium">
            <Activity className="w-3.5 h-3.5 text-[#285A49]" />
            {service.sessionFormat}
          </span>

          <Link
            to={`/rehabora/services/${service.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#285A49] group-hover:text-[#193D32] transition-colors"
          >
            Explore Service
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
