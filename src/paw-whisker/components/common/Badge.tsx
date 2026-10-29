import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'terracotta' | 'sage' | 'peach' | 'cream' | 'olive';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'sage',
  size = 'sm',
  className = '',
}) => {
  const styles = {
    terracotta: 'bg-[#C76F52]/10 text-[#C76F52] border-[#C76F52]/20',
    sage: 'bg-[#82947A]/15 text-[#343D30] border-[#82947A]/30',
    peach: 'bg-[#F0D9CA] text-[#343D30] border-[#E8DFD1]',
    cream: 'bg-white text-[#343D30] border-[#E8DFD1]',
    olive: 'bg-[#343D30] text-white border-[#343D30]',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border transition-colors ${styles[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
};
