import { useState } from 'react';
import { Activity } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  aspectRatio,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`w-full h-full bg-[#E8F2EC] flex flex-col items-center justify-center p-6 text-center text-[#285A49] border border-[#D4E5D9] ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center mb-3 text-[#285A49]">
          <Activity className="w-6 h-6 stroke-[1.75]" />
        </div>
        <span className="text-xs font-heading font-semibold text-[#242C28]">{alt}</span>
        <span className="text-[10px] text-[#727C75] mt-1">Rehabilitation Care Environment</span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-[#E8F2EC] ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#E8F2EC] via-[#D4E5D9]/40 to-[#E8F2EC] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
}

export default ImageWithFallback;
