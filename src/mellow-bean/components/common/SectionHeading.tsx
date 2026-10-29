import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  tagline?: string;
  badgeVariant?: 'butter' | 'caramel' | 'olive' | 'espresso';
  title: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
  alignment?: 'left' | 'center';
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  tagline,
  badgeVariant = 'butter',
  title,
  highlight,
  subtitle,
  description,
  alignment,
  align,
  className = '',
}) => {
  const displayBadge = badge || tagline;
  const displaySubtitle = subtitle || description;
  const displayAlign = align || alignment || 'center';

  const badgeStyles = {
    butter: 'bg-[#F0D27A] text-[#382820] border-[#E5C76E]',
    caramel: 'bg-[#B77A4A]/15 text-[#382820] border-[#B77A4A]/30',
    olive: 'bg-[#777B5A]/15 text-[#382820] border-[#777B5A]/30',
    espresso: 'bg-[#382820] text-[#F8F2E7] border-[#382820]',
  };

  const isCenter = displayAlign === 'center';

  return (
    <div
      className={`space-y-3 ${
        isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'
      } ${className}`}
    >
      {displayBadge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border shadow-2xs ${badgeStyles[badgeVariant]}`}
        >
          {displayBadge}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#382820] tracking-tight leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="text-[#B77A4A] italic font-normal font-serif">
            {highlight}
          </span>
        )}
      </h2>

      {displaySubtitle && (
        <p className="text-[#382820]/75 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          {displaySubtitle}
        </p>
      )}
    </div>
  );
};
