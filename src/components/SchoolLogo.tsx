import React from 'react';

interface SchoolLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withShadow?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  size = 'md',
  withShadow = false,
}) => {
  // Size map: keeps the original 3:2 aspect ratio of the school crest
  const sizeMap: Record<string, string> = {
    sm: 'w-12 h-8 sm:w-14 sm:h-[37px]',
    md: 'w-20 h-[53px]',
    lg: 'w-32 h-[85px] sm:w-36 sm:h-[96px]',
    xl: 'w-44 h-[117px] sm:w-52 sm:h-[138px]',
  };

  const containerClasses = `relative inline-flex items-center justify-center shrink-0 transition-transform select-none ${
    withShadow ? 'drop-shadow-md' : ''
  } ${sizeMap[size] || sizeMap.md} ${className}`;

  return (
    <div className={containerClasses}>
      <img
        src="/logo.png"
        alt="First Step Higher Secondary School – Chhindwara Logo"
        className="w-full h-full object-contain pointer-events-none rounded-[14%]"
        loading="eager"
        decoding="async"
        style={{ imageRendering: 'auto' }}
      />
    </div>
  );
};
