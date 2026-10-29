import React from 'react';

interface PriceTagProps {
  amount?: number | string;
  price?: number | string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  suffix?: string;
  className?: string;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  amount,
  price,
  size = 'md',
  suffix,
  className = '',
}) => {
  const displayVal = price !== undefined ? price : amount ?? 0;

  const sizeStyles = {
    sm: 'text-sm font-semibold',
    md: 'text-base sm:text-lg font-bold',
    lg: 'text-xl sm:text-2xl font-bold font-serif',
    xl: 'text-2xl sm:text-3xl font-bold font-serif',
  };

  return (
    <span className={`inline-flex items-baseline text-[#382820] ${sizeStyles[size]} ${className}`}>
      <span className="text-xs font-semibold mr-0.5 opacity-80">₹</span>
      <span>{displayVal}</span>
      {suffix && <span className="text-xs font-normal text-[#382820]/70 ml-1">{suffix}</span>}
    </span>
  );
};
