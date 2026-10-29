import { Link } from 'react-router-dom';

interface VisoraLogoProps {
  light?: boolean;
  className?: string;
  showTagline?: boolean;
}

export function VisoraLogo({
  light = false,
  className = '',
  showTagline = true,
}: VisoraLogoProps) {
  return (
    <Link
      to="/visora"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
      aria-label="VISORA Home"
    >
      {/* Precision Optic Aperture / Lens Symbol */}
      <div
        className={`relative w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 ${
          light
            ? 'border-white/30 bg-white/10 text-white'
            : 'border-[#15263B]/20 bg-[#F7F5EF] text-[#15263B]'
        }`}
      >
        {/* Outer lens ring */}
        <div
          className={`w-4 h-4 rounded-full border border-dashed ${
            light ? 'border-white/60' : 'border-[#5C9995]'
          }`}
        />
        {/* Core focal aperture */}
        <div
          className={`absolute w-1.5 h-1.5 rounded-full ${
            light ? 'bg-[#5C9995]' : 'bg-[#15263B]'
          }`}
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-display text-xl sm:text-2xl tracking-[0.08em] font-medium leading-none ${
            light ? 'text-white' : 'text-[#15263B]'
          }`}
        >
          VISORA
        </span>
        {showTagline && (
          <span
            className={`text-[9px] uppercase tracking-[0.24em] font-sans font-medium mt-1 leading-none ${
              light ? 'text-[#5C9995]' : 'text-[#687581]'
            }`}
          >
            Vision &amp; Optical Studio
          </span>
        )}
      </div>
    </Link>
  );
}

export default VisoraLogo;
