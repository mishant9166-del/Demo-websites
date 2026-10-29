import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'butter' | 'caramel' | 'olive' | 'espresso' | 'cream' | 'dietary';
  size?: 'xs' | 'sm';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'butter',
  size = 'xs',
  className = '',
}) => {
  const styles = {
    butter: 'bg-[#F0D27A] text-[#382820] border-[#E5C76E]',
    caramel: 'bg-[#B77A4A]/15 text-[#382820] border-[#B77A4A]/30',
    olive: 'bg-[#777B5A]/15 text-[#382820] border-[#777B5A]/30',
    espresso: 'bg-[#382820] text-[#F8F2E7] border-[#382820]',
    cream: 'bg-[#FFFEFA] text-[#382820] border-[#EADFCF]',
    dietary: 'bg-[#777B5A]/15 text-[#382820] border-[#777B5A]/30',
  };

  const sizes = {
    xs: 'px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase',
    sm: 'px-3 py-1 text-xs font-semibold',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border transition-colors ${styles[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
};
