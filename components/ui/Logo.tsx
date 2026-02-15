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
        className="h-full w-auto object-contain transition-transform duration-500"
        style={{ 
          filter: variant === 'white' 
            ? 'brightness(0) invert(1) drop-shadow(0 4px 8px rgba(255,255,255,0.2)) contrast(1.1)' 
            : 'drop-shadow(0 8px 16px rgba(125,24,46,0.15)) contrast(1.05) saturate(1.1)' 
        }}
      />
    </div>
  );
};

export default Logo;