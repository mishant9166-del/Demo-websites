interface RehaboraLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export function RehaboraLogo({ variant = 'dark', size = 'md' }: RehaboraLogoProps) {
  const isLight = variant === 'light';

  return (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Abstract Movement / Kinetic Wave Symbol */}
      <div
        className={`relative flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 border ${
          size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'
        } ${
          isLight
            ? 'bg-[#193D32] border-white/20 text-[#E8F2EC]'
            : 'bg-[#E8F2EC] border-[#D4E5D9] text-[#285A49]'
        }`}
      >
        {/* Kinetic movement curve vector */}
        <svg
          className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 14c2.5-3 5-4.5 8-4.5s5.5 1.5 8 4.5" />
          <path d="M2 18c3-3.5 6-5.5 10-5.5s7 2 10 5.5" />
          <circle cx="12" cy="5" r="2.5" fill="currentColor" />
        </svg>

        {/* Small warm amber dot symbolizing energy / vitality */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#D8A66A]" />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col text-left leading-none">
        <span
          className={`font-heading font-extrabold tracking-tight transition-colors ${
            size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl'
          } ${isLight ? 'text-white' : 'text-[#242C28]'}`}
        >
          REHABORA
        </span>
        <span
          className={`text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-sans font-semibold mt-0.5 ${
            isLight ? 'text-[#E8F2EC]/80' : 'text-[#727C75]'
          }`}
        >
          Physiotherapy & Wellness
        </span>
      </div>
    </div>
  );
}
