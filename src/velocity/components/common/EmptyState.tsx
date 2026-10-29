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
    <div className="text-center py-20 px-6 bg-[#101315] border border-white/10 rounded-lg max-w-2xl mx-auto my-8">
      <div className="w-16 h-16 rounded-full bg-[#171B1E] border border-white/10 flex items-center justify-center mx-auto mb-6 text-[#C8FF45]">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-[#F5F7F7] mb-2">{title}</h3>
      <p className="text-sm text-[#A0A7AC] max-w-md mx-auto mb-8 leading-relaxed">
        {description}
      </p>

      {actionLabel && actionHref && (
        <Link
          to={actionHref}
          className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-[#C8FF45] text-[#080A0B] font-bold text-sm tracking-wide hover:bg-[#b5eb3b] transition-colors"
        >
          {actionLabel}
        </Link>
      )}

      {actionLabel && !actionHref && onActionClick && (
        <button
          onClick={onActionClick}
          className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-[#C8FF45] text-[#080A0B] font-bold text-sm tracking-wide hover:bg-[#b5eb3b] transition-colors cursor-pointer"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
