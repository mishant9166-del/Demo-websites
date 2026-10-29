import { useState } from 'react';
import { Car } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export function ImageWithFallback({
  src,
  alt = 'Automotive display',
  className = '',
  fallbackText,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div 
        className={`bg-[#171B1E] border border-white/10 flex flex-col items-center justify-center text-[#A0A7AC] relative overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#C8FF45_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />
        <Car className="w-10 h-10 text-white/20 mb-2" />
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#A0A7AC]/60">
          {fallbackText || alt || 'Velocity Showcase'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#101315] ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#171B1E] animate-pulse flex items-center justify-center z-10">
          <div className="w-6 h-6 border-2 border-white/20 border-t-[#C8FF45] rounded-full animate-spin" />
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
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        {...props}
      />
    </div>
  );
}
