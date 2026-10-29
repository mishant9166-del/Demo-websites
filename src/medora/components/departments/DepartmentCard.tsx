import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  Bone,
  Brain,
  UserCheck,
  Baby,
  Activity,
  ShieldAlert,
  Stethoscope,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import type { Department } from '../../types/medora';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface DepartmentCardProps {
  department: Department;
  showImage?: boolean;
}

// Map icon names to Lucide icons
function getDepartmentIcon(name: string) {
  switch (name) {
    case 'Heart':
      return Heart;
    case 'Bone':
      return Bone;
    case 'Brain':
      return Brain;
    case 'UserCheck':
      return UserCheck;
    case 'Baby':
      return Baby;
    case 'Activity':
      return Activity;
    case 'ShieldAlert':
      return ShieldAlert;
    case 'Stethoscope':
      return Stethoscope;
    case 'Sparkles':
      return Sparkles;
    case 'Layers':
      return Layers;
    case 'ShieldCheck':
      return ShieldCheck;
    default:
      return Stethoscope;
  }
}

export function DepartmentCard({ department, showImage = false }: DepartmentCardProps) {
  const IconComponent = getDepartmentIcon(department.iconName);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl border border-[#E1EAF0] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#1769AA]/40 transition-all flex flex-col h-full group text-left"
    >
      {showImage && (
        <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF5FC] border-b border-[#E1EAF0]">
          <ImageWithFallback
            src={department.heroImage}
            alt={department.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#1769AA] uppercase tracking-wider border border-[#E1EAF0]">
            {department.category}
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        {/* Icon Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#EAF5FC] text-[#1769AA] group-hover:bg-[#1769AA] group-hover:text-white transition-colors duration-300 flex items-center justify-center border border-[#1769AA]/15 shadow-2xs">
            <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
          </div>
          {!showImage && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7E8E] bg-[#F8FBFD] px-2.5 py-1 rounded-md border border-[#E1EAF0]">
              {department.category}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#102B46] group-hover:text-[#1769AA] transition-colors leading-snug mb-2">
          {department.name}
        </h3>

        {/* Short description */}
        <p className="text-xs text-[#6B7E8E] leading-relaxed mb-6 flex-grow line-clamp-3">
          {department.shortDesc}
        </p>

        {/* Action Link */}
        <div className="pt-4 border-t border-[#E1EAF0] mt-auto flex items-center justify-between">
          <Link
            to={`/medora/departments/${department.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769AA] group-hover:text-[#18A9A0] transition-colors"
          >
            <span>Explore Department</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-[11px] font-medium text-[#6B7E8E]">
            {department.services.length} Services
          </span>
        </div>
      </div>
    </motion.div>
  );
}
