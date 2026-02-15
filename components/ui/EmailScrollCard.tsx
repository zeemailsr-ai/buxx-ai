import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface EmailScrollCardProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

const EmailScrollCard: React.FC<EmailScrollCardProps> = ({ src, alt, className = "", aspectRatio = "aspect-[9/16]" }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [imgHeight, setImgHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateContainerHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };
    
    updateContainerHeight();
    window.addEventListener('resize', updateContainerHeight);
    return () => window.removeEventListener('resize', updateContainerHeight);
  }, []);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImgHeight(e.currentTarget.offsetHeight);
    if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
    }
  };

  // Calculate scroll distance: (Image Height) - (Visible Window Height)
  const maxScroll = Math.max(0, imgHeight - containerHeight);
  
  // Calculate duration based on length to keep speed consistent (~200px per second)
  const duration = maxScroll / 200; 

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden cursor-pointer bg-gray-100 dark:bg-navy-800 rounded-2xl group border border-gray-200 dark:border-navy-700 ${aspectRatio} ${className}`}
      onClick={() => setIsScrolling(!isScrolling)}
    >
      <motion.img 
        ref={imgRef}
        src={src} 
        alt={alt}
        className="w-full h-auto block"
        initial={{ y: 0 }}
        animate={{ y: isScrolling ? -maxScroll : 0 }}
        transition={{ 
          duration: isScrolling ? Math.max(1, duration) : 0.8, 
          ease: isScrolling ? "linear" : "easeInOut"
        }}
        onLoad={handleImageLoad}
      />
      
      {/* Overlay Hint - Shows when not scrolling */}
      {!isScrolling && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 flex items-end justify-center pb-6">
           <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             <span className="bg-white/90 dark:bg-navy-900/90 text-brand dark:text-brand-glow text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
               Click to scroll
             </span>
           </div>
        </div>
      )}
      
      {/* Scroll indicator overlay (optional, subtle fade at bottom if scrolling is possible) */}
      {!isScrolling && maxScroll > 0 && (
         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-50"></div>
      )}
    </div>
  );
};

export default EmailScrollCard;