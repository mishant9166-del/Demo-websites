interface ToothIconProps {
  className?: string;
  size?: number;
}

export function ToothIcon({ className = 'w-6 h-6', size = 24 }: ToothIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Friendly, modern anatomical tooth silhouette */}
      <path d="M7 2.5C4.8 2.5 3 4.5 3 7.5C3 11 4.5 14 5.5 17C6.5 20 7.5 22 9 22C10.5 22 10.8 19 12 19C13.2 19 13.5 22 15 22C16.5 22 17.5 20 18.5 17C19.5 14 21 11 21 7.5C21 4.5 19.2 2.5 17 2.5C14.8 2.5 13.2 4 12 4C10.8 4 9.2 2.5 7 2.5Z" />
      {/* Gentle interior shine reflection */}
      <path d="M7 6C6 6.5 5.5 8 5.5 9.5" strokeOpacity="0.7" strokeWidth="1.5" />
    </svg>
  );
}
