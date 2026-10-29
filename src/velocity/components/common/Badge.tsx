interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lime' | 'dark' | 'outline' | 'amber';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'dark', 
  size = 'sm', 
  className = '' 
}: BadgeProps) {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs';

  const variantClasses = {
    lime: 'bg-[#C8FF45] text-[#080A0B] font-bold tracking-wider shadow-sm',
    dark: 'bg-[#171B1E] text-[#F5F7F7] border border-white/10 font-semibold',
    outline: 'bg-transparent text-[#A0A7AC] border border-white/15 font-medium',
    amber: 'bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold'
  }[variant];

  return (
    <span 
      className={`inline-flex items-center uppercase tracking-widest rounded-sm ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
}
