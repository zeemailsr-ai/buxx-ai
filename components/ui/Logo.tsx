import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = 'h-14', variant = 'color' }) => {
  // Direct link to the image provided by the user
  const logoUrl = "https://lh3.googleusercontent.com/d/18JTw9gb46PD5JHjkY-pTpqgA0fYpPbbT";
  
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img 
        src={logoUrl} 
        alt="buXXai Logo" 
        className="h-full w-auto object-contain transition-all duration-500"
        style={{ 
          filter: variant === 'white' 
            ? 'brightness(0) invert(1)' 
            : 'none' 
        }}
      />
    </div>
  );
};

export default Logo;