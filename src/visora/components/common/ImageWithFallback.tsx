import { useState } from 'react';
import { Eye } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#F7F5EF] text-[#687581] border border-[#E4E4DE] p-6 text-center ${className}`}
      >
        <Eye className="w-8 h-8 text-[#5C9995] mb-2 stroke-[1.5]" />
        <span className="text-xs font-sans font-medium text-[#15263B]">
          VISORA Optical Archive
        </span>
        <span className="text-[10px] text-[#687581] mt-0.5 max-w-[180px] line-clamp-1">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#F7F5EF] ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#F7F5EF] animate-pulse flex items-center justify-center">
          <Eye className="w-5 h-5 text-[#5C9995]/50 animate-bounce" />
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

export default ImageWithFallback;
