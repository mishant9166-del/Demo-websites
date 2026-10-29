interface SectionHeadingProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  badge,
  title,
  italicWord,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const label = badge || eyebrow;
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-8 sm:mb-12 ${
        isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'
      } ${className}`}
    >
      {label && (
        <div className="mb-3.5">
          <span
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-medium tracking-[0.16em] uppercase ${
              light
                ? 'bg-white/10 text-[#5C9995] border border-white/10'
                : 'bg-[#F7F5EF] text-[#15263B] border border-[#E4E4DE]'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C9995]" />
            <span>{label}</span>
          </span>
        </div>
      )}

      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-tight ${
          light ? 'text-white' : 'text-[#15263B]'
        }`}
      >
        {title}{' '}
        {italicWord && (
          <span className="italic font-normal text-[#5C9995]">{italicWord}</span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base font-sans leading-relaxed ${
            light ? 'text-[#F7F5EF]/80' : 'text-[#687581]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
