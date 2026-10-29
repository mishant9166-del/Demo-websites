interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'left',
  theme = 'light',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`mb-10 sm:mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
          isDark
            ? 'bg-white/10 text-[#18A9A0] border border-white/10'
            : 'bg-[#EAF5FC] text-[#1769AA] border border-[#1769AA]/15'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#18A9A0]"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
        isDark ? 'text-white' : 'text-[#102B46]'
      }`}>
        {title}{' '}
        {highlight && (
          <span className="text-[#18A9A0] relative inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed ${
          isDark ? 'text-[#EAF5FC]/80' : 'text-[#6B7E8E]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
