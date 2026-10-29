import React from 'react';

interface PriceDisplayProps {
  priceINR: number;
  originalPriceINR?: number;
  isSale?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  priceINR,
  originalPriceINR,
  isSale = false,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm font-bold',
    lg: 'text-lg font-bold',
    xl: 'text-2xl sm:text-3xl font-extrabold',
  };

  const discountPercent =
    originalPriceINR && originalPriceINR > priceINR
      ? Math.round(((originalPriceINR - priceINR) / originalPriceINR) * 100)
      : null;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className={`${sizeClasses[size]} text-[#252525] font-mono`}>
        ₹{priceINR.toLocaleString('en-IN')}
      </span>

      {isSale && originalPriceINR && originalPriceINR > priceINR && (
        <>
          <span className="text-xs text-[#777872] line-through font-mono">
            ₹{originalPriceINR.toLocaleString('en-IN')}
          </span>
          {discountPercent && (
            <span className="text-[10px] font-bold text-[#FF704F] uppercase tracking-wider bg-[#FF704F]/10 px-1.5 py-0.5 rounded-xs">
              Save {discountPercent}%
            </span>
          )}
        </>
      )}
    </div>
  );
};
