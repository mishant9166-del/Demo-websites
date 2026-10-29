import { useState } from 'react';
import { ToothIcon } from './ToothIcon';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export function ImageWithFallback({
  src,
  alt = 'SmileCare Dental Clinic',
  className = '',
  fallbackText,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`bg-[#E6F6F2] border border-[#0D9488]/20 flex flex-col items-center justify-center text-[#115E59] relative overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#0D9488_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
        <ToothIcon className="w-8 h-8 text-[#0D9488] mb-2" />
        <span className="text-[11px] font-medium tracking-wide uppercase text-[#115E59]/80">
          {fallbackText || alt || 'SmileCare Clinical Photography'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#F0F8F6] ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#E6F6F2] animate-pulse flex items-center justify-center z-10">
          <div className="w-6 h-6 border-2 border-[#0D9488]/30 border-t-[#0D9488] rounded-full animate-spin" />
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
        } ${className}`}
        {...props}
      />
    </div>
  );
}
