import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number; // e.g. 4.8
  reviewCount?: number;
  size?: 'sm' | 'md';
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  reviewCount,
  size = 'sm',
}) => {
  const iconSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';

  return (
    <div className="flex items-center gap-1.5 text-xs text-[#777872]">
      <div className="flex items-center text-[#2447E8]">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${iconSize} ${
              star <= Math.round(rating)
                ? 'fill-[#2447E8] text-[#2447E8]'
                : 'fill-transparent text-[#E5E5E0]'
            }`}
          />
        ))}
      </div>
      <span className="font-mono text-[11px] font-semibold text-[#252525]">
        {rating.toFixed(1)}
      </span>
      {reviewCount !== undefined && (
        <span className="text-[10px] text-[#777872]">({reviewCount})</span>
      )}
    </div>
  );
};
