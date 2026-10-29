
interface DermoraLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export function DermoraLogo({ variant = 'dark', size = 'md' }: DermoraLogoProps) {
  const isLight = variant === 'light';

  return (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Botanical/Skin-inspired Leaf & Petal Symbol */}
      <div
        className={`relative flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 border ${
          size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'
        } ${
          isLight
            ? 'bg-[#38473A] border-white/20 text-[#FAF7F2]'
            : 'bg-[#F0E9DF] border-[#E4DED4] text-[#38473A]'
        }`}
      >
        {/* Abstract botanical leaf contour */}
        <svg
          className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>

        {/* Terracotta accent dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#B77962]" />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col text-left leading-none">
        <span
          className={`font-serif tracking-widest uppercase transition-colors ${
            size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl'
          } ${isLight ? 'text-white' : 'text-[#292A27]'}`}
        >
          DERMORA
        </span>
        <span
          className={`text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-sans font-medium mt-1 ${
            isLight ? 'text-[#FAF7F2]/75' : 'text-[#77766F]'
          }`}
        >
          Skin & Aesthetic Clinic
        </span>
      </div>
    </div>
  );
}
