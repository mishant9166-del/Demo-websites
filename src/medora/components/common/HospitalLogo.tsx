import { Activity } from 'lucide-react';

interface HospitalLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export function HospitalLogo({ variant = 'dark', size = 'md' }: HospitalLogoProps) {
  const isLight = variant === 'light';

  return (
    <div className="flex items-center gap-2.5 group">
      {/* Medical Cross / Plus Emblem */}
      <div className={`relative flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-xs ${
        size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'
      } ${
        isLight ? 'bg-white text-[#1769AA]' : 'bg-[#1769AA] text-white'
      }`}>
        <Activity className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
        {/* Subtle decorative dot */}
        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#18A9A0] animate-pulse"></span>
      </div>

      <div className="flex flex-col text-left leading-none">
        <span className={`font-bold tracking-tight font-sans ${
          size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl'
        } ${
          isLight ? 'text-white' : 'text-[#102B46]'
        }`}>
          Medora
        </span>
        <span className={`text-[10px] font-semibold tracking-wider uppercase mt-0.5 ${
          isLight ? 'text-[#EAF5FC]/80' : 'text-[#6B7E8E]'
        }`}>
          Multispecialty Hospital
        </span>
      </div>
    </div>
  );
}
