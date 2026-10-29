interface SectionHeadingProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  badge,
  title,
  highlight,
  subtitle,
  align = 'left',
  theme = 'light',
  className = '',
}: SectionHeadingProps) {
  const label = badge || eyebrow;
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={`mb-8 sm:mb-12 ${
        isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'
      } ${className}`}
    >
      {label && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-sans font-bold tracking-[0.16em] uppercase mb-3.5 ${
            isDark
              ? 'bg-white/10 text-[#A8D5BC] border border-white/10'
              : 'bg-[#E8F2EC] text-[#285A49] border border-[#D4E5D9]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D8A66A]" />
          <span>{label}</span>
        </div>
      )}

      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight ${
          isDark ? 'text-white' : 'text-[#242C28]'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="text-[#285A49] dark:text-[#A8D5BC] font-extrabold">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base font-sans leading-relaxed ${
            isDark ? 'text-[#FAFBF8]/80' : 'text-[#727C75]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
