import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export function ImageWithFallback({ src, alt, className = '', fallbackText = 'Medical Image' }: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div className={`bg-[#EAF5FC] border border-[#E1EAF0] flex flex-col items-center justify-center text-[#6B7E8E] p-6 text-center select-none ${className}`}>
        <Building2 className="w-10 h-10 mb-2 text-[#1769AA]/40" />
        <span className="text-xs font-semibold uppercase tracking-wider text-[#183047]/70">{fallbackText}</span>
        <span className="text-[11px] text-[#6B7E8E] mt-1">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#EAF5FC] animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#1769AA]/20 border-t-[#1769AA] rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}
