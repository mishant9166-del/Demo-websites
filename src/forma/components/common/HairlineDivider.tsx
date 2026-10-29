import React from 'react';

interface HairlineDividerProps {
  className?: string;
  dark?: boolean;
}

export const HairlineDivider: React.FC<HairlineDividerProps> = ({
  className = '',
  dark = false,
}) => {
  return (
    <hr
      className={`border-0 border-t ${
        dark ? 'border-[#292B28]/15' : 'border-[#E2DDD5]'
      } my-0 ${className}`}
    />
  );
};
