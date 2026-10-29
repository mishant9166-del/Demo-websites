import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackText = 'Clinical Photograph',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div
        className={`bg-[#F0E9DF] border border-[#E4DED4] flex flex-col items-center justify-center text-[#77766F] p-6 text-center select-none ${className}`}
      >
        <Sparkles className="w-8 h-8 mb-2 text-[#9BAA96]" />
        <span className="text-xs font-serif uppercase tracking-widest text-[#38473A]">
          {fallbackText}
        </span>
        <span className="text-[11px] text-[#77766F] mt-1 font-sans">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#F0E9DF] ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#F0E9DF] animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#9BAA96]/30 border-t-[#38473A] rounded-full animate-spin" />
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
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}
