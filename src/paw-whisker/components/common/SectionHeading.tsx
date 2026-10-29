import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'terracotta' | 'sage' | 'peach' | 'cream';
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = 'sage',
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) => {
  const badgeStyles = {
    terracotta: 'bg-[#C76F52]/10 text-[#C76F52] border-[#C76F52]/20',
    sage: 'bg-[#82947A]/15 text-[#343D30] border-[#82947A]/30',
    peach: 'bg-[#F0D9CA] text-[#343D30] border-[#E8DFD1]',
    cream: 'bg-[#FFFFFF] text-[#343D30] border-[#E8DFD1]',
  };

  const isCenter = alignment === 'center';

  return (
    <div className={`space-y-3 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border ${badgeStyles[badgeVariant]}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
          {badge}
        </span>
      )}
      <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#343D30] leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-[#343D30]/80 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
