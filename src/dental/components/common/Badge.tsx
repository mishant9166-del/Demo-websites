interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'mint' | 'outline' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'mint',
  size = 'sm',
  className = ''
}: BadgeProps) {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-xs';

  const variantClasses = {
    teal: 'bg-[#0D9488] text-white font-semibold',
    mint: 'bg-[#E6F6F2] text-[#0D9488] border border-[#0D9488]/20 font-semibold',
    outline: 'bg-transparent text-[#687A80] border border-[#E3ECE9] font-medium',
    slate: 'bg-[#F0F8F6] text-[#152B32] border border-[#E3ECE9] font-medium'
  }[variant];

  return (
    <span
      className={`inline-flex items-center tracking-wide rounded-full ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
}
