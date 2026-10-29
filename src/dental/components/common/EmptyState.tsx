import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  onActionClick?: () => void;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionHref,
  onActionClick
}: EmptyStateProps) {
  return (
    <div className="text-center py-16 px-6 bg-white border border-[#E3ECE9] rounded-2xl max-w-xl mx-auto my-8 shadow-sm">
      <div className="w-14 h-14 rounded-full bg-[#E6F6F2] border border-[#0D9488]/20 flex items-center justify-center mx-auto mb-5 text-[#0D9488]">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-[#152B32] mb-2">{title}</h3>
      <p className="text-sm text-[#687A80] max-w-sm mx-auto mb-6 leading-relaxed">
        {description}
      </p>

      {actionLabel && actionHref && (
        <Link
          to={actionHref}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0D9488] text-white font-semibold text-xs tracking-wide hover:bg-[#115E59] transition-colors shadow-sm"
        >
          {actionLabel}
        </Link>
      )}

      {actionLabel && !actionHref && onActionClick && (
        <button
          onClick={onActionClick}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0D9488] text-white font-semibold text-xs tracking-wide hover:bg-[#115E59] transition-colors shadow-sm cursor-pointer"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
