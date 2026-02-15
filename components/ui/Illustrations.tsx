import React from 'react';

// Common props for the illustrations
interface IconProps {
  className?: string;
  accent?: string;
}

export const Star: React.FC<IconProps & { fill?: string }> = ({ className = "", fill = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C12 0 14.5 9.5 14.5 9.5C14.5 9.5 24 12 24 12C24 12 14.5 14.5 14.5 14.5C14.5 14.5 12 24 12 24C12 24 9.5 14.5 9.5 14.5C9.5 14.5 0 12 0 12C0 12 9.5 9.5 9.5 9.5C9.5 9.5 12 0 12 0Z" fill={fill} />
  </svg>
);

export const Constellation: React.FC<IconProps & { stroke?: string }> = ({ className = "", stroke = "currentColor" }) => (
  <svg viewBox="0 0 120 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="20" r="3" fill={stroke} />
    <circle cx="45" cy="50" r="3" fill={stroke} />
    <circle cx="90" cy="30" r="3" fill={stroke} />
    <circle cx="30" cy="90" r="3" fill={stroke} />
    <path d="M10 20L45 50L90 30" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" />
    <path d="M10 20L30 90" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" />
  </svg>
);

export const MonitorIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Screen bg splash */}
    <rect x="25" y="20" width="50" height="40" rx="4" fill="#7d182e" fillOpacity="0.2" />
    
    {/* Monitor Outline */}
    <rect x="15" y="15" width="70" height="50" rx="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M15 50H85" stroke="currentColor" strokeWidth="2.5" />
    
    {/* Stand */}
    <path d="M50 65V75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M35 75H65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Cursor */}
    <path d="M60 45L50 35L50 55L54 51L57 58L60 56L57 49L60 45Z" fill="white" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    
    {/* Sparkles */}
    <path d="M80 10L82 15L87 17L82 19L80 24L78 19L73 17L78 15L80 10Z" fill="#7d182e" />
  </svg>
);

export const PenToolIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Splash */}
    <circle cx="50" cy="50" r="25" fill="#7d182e" fillOpacity="0.2" />
    
    {/* Pen Tool Node Points */}
    <rect x="46" y="15" width="8" height="8" stroke="currentColor" strokeWidth="2.5" fill="white" />
    <rect x="20" y="60" width="8" height="8" stroke="currentColor" strokeWidth="2.5" fill="white" />
    <rect x="72" y="60" width="8" height="8" stroke="currentColor" strokeWidth="2.5" fill="white" />
    
    {/* Curve Lines */}
    <path d="M50 23C50 23 24 35 24 60" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" />
    <path d="M50 23C50 23 76 35 76 60" stroke="currentColor" strokeWidth="2.5" />
    
    {/* Pen Nib Center */}
    <path d="M50 40L40 70H60L50 40Z" stroke="currentColor" strokeWidth="2.5" fill="white" strokeLinejoin="round" />
    <path d="M50 40V60" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const CloudIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Splash */}
    <ellipse cx="50" cy="55" rx="30" ry="20" fill="#7d182e" fillOpacity="0.2" />
    
    {/* Cloud Outline */}
    <path d="M25 60C16.7157 60 10 53.2843 10 45C10 36.7157 16.7157 30 25 30C26.5 30 28 30.3 29.5 30.8C31.5 22.5 39 16.5 48 16.5C58.5 16.5 67 25 67 35.5C67 36 67 36.5 66.9 37C72 38 76 42.5 76 48C76 54.6 70.6 60 64 60H25Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0.1" />
    
    {/* Download Arrow */}
    <path d="M48 40V68" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M38 58L48 68L58 58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Rocket Body */}
    <path d="M50 10C50 10 30 30 30 60C30 70 35 80 35 80H65C65 80 70 70 70 60C70 30 50 10 50 10Z" stroke="currentColor" strokeWidth="2.5" fill="white" />
    
    {/* Window */}
    <circle cx="50" cy="45" r="8" stroke="currentColor" strokeWidth="2.5" fill="#7d182e" fillOpacity="0.2" />
    
    {/* Fins */}
    <path d="M30 60L15 75V80H35" stroke="currentColor" strokeWidth="2.5" fill="white" />
    <path d="M70 60L85 75V80H65" stroke="currentColor" strokeWidth="2.5" fill="white" />
    
    {/* Flame */}
    <path d="M40 80C40 80 45 95 50 95C55 95 60 80 60 80" stroke="currentColor" strokeWidth="2.5" fill="#7d182e" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = "", accent = "#7d182e" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="25" width="60" height="40" rx="2" fill={accent} fillOpacity="0.2" transform="rotate(-5 50 50)" />
    <path d="M15 35H85V75H15V35Z" stroke="currentColor" strokeWidth="2.5" fill="white" />
    <path d="M15 35L50 60L85 35" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="75" cy="65" r="8" fill={accent} />
    <path d="M72 65L74 67L78 63" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PaletteIcon: React.FC<IconProps> = ({ className = "", accent = "#7d182e" }) => (
   <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
     <circle cx="50" cy="50" r="30" fill={accent} fillOpacity="0.2" />
     <path d="M25 50C25 36.1929 36.1929 25 50 25C63.8071 25 75 36.1929 75 50C75 54.5 72 56 70 56C68 56 67 57.5 67 60C67 62 68 64 66 68C63.5 73 57.5 75 50 75C36.1929 75 25 63.8071 25 50Z" stroke="currentColor" strokeWidth="2.5" fill="white" />
     <circle cx="40" cy="40" r="4" fill={accent} />
     <circle cx="60" cy="40" r="4" fill="#EAB308" />
     <circle cx="35" cy="55" r="4" fill="#3B82F6" />
     <circle cx="55" cy="65" r="5" stroke="currentColor" strokeWidth="2.5" />
   </svg>
);

export const VideoIcon: React.FC<IconProps> = ({ className = "", accent = "#7d182e" }) => (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="60" height="60" rx="8" fill={accent} fillOpacity="0.2" transform="rotate(10 55 50)" />
      <rect x="20" y="25" width="60" height="50" rx="6" stroke="currentColor" strokeWidth="2.5" fill="white" />
      <path d="M20 40H80" stroke="currentColor" strokeWidth="2.5" />
      <path d="M20 60H80" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="12" fill={accent} />
      <path d="M46 44L56 50L46 56V44Z" fill="white" />
    </svg>
);

export const ChartDownIcon: React.FC<IconProps> = ({ className = "", accent = "#EF4444" }) => (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
       <circle cx="50" cy="50" r="30" fill={accent} fillOpacity="0.1" />
       <path d="M25 35L45 65L60 50L75 75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
       <path d="M75 75H60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
       <path d="M75 75V60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

export const ChartUpIcon: React.FC<IconProps> = ({ className = "", accent = "#22C55E" }) => (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
       <circle cx="50" cy="50" r="30" fill={accent} fillOpacity="0.1" />
       <path d="M25 75L45 55L60 65L75 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
       <path d="M75 35H60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
       <path d="M75 35V50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
       <path d="M50 20L53 25L58 26L54 29L55 34L50 31L45 34L46 29L42 26L47 25L50 20Z" fill={accent} />
    </svg>
);
