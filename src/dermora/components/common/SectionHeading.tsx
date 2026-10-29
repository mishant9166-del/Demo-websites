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
    <div
      className={`mb-10 sm:mb-14 ${
        isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-semibold tracking-[0.2em] uppercase mb-4 ${
            isDark
              ? 'bg-white/10 text-[#9BAA96] border border-white/10'
              : 'bg-[#F0E9DF] text-[#38473A] border border-[#E4DED4]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B77962]" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight ${
          isDark ? 'text-white' : 'text-[#292A27]'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="italic font-serif text-[#B77962] font-medium">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base font-sans leading-relaxed ${
            isDark ? 'text-[#FAF7F2]/80' : 'text-[#77766F]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
