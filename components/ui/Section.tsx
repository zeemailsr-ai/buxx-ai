import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: 'white' | 'cream' | 'dark' | 'brand';
  pattern?: 'none' | 'dots' | 'grid' | 'noise';
  fullWidth?: boolean;
  maxWidth?: '5xl' | '6xl' | '7xl' | 'full'; 
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '', 
  variant = 'white',
  pattern = 'none',
  fullWidth = false,
  maxWidth = 'full'
}) => {
  
  const getBackground = () => {
    switch(variant) {
      case 'white': return 'bg-white text-gray-900 dark:bg-navy-900 dark:text-gray-100';
      case 'cream': return 'bg-cream-50 text-gray-900 dark:bg-navy-950 dark:text-gray-100';
      case 'dark': return 'bg-charcoal text-white dark:bg-navy-950';
      case 'brand': return 'bg-brand text-white dark:bg-brand-dark';
      default: return 'bg-white text-gray-900 dark:bg-navy-900 dark:text-gray-100';
    }
  };

  const getPattern = () => {
    switch(pattern) {
      case 'dots': return 'bg-dot-pattern opacity-40 dark:opacity-20';
      case 'grid': return 'bg-grid-pattern opacity-40 dark:opacity-10';
      case 'noise': return 'bg-noise opacity-40 dark:opacity-10';
      default: return '';
    }
  };

  const getMaxWidth = () => {
    if (fullWidth) return 'w-full px-4 md:px-6';
    switch(maxWidth) {
        case '5xl': return 'max-w-5xl mx-auto px-4 md:px-8';
        case '6xl': return 'max-w-6xl mx-auto px-4 md:px-8';
        case '7xl': return 'max-w-7xl mx-auto px-4 md:px-8';
        case 'full': return 'max-w-[1920px] mx-auto px-4 md:px-10';
        default: return 'max-w-[1920px] mx-auto px-4 md:px-10';
    }
  };

  return (
    <section 
      id={id} 
      className={`relative py-24 md:py-32 overflow-hidden transition-all duration-500 ${getBackground()} ${className}`}
    >
      {pattern !== 'none' && (
        <div className={`absolute inset-0 pointer-events-none ${getPattern()}`}></div>
      )}
      
      <div className={`${getMaxWidth()} relative z-10`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
              }
            }
          }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;