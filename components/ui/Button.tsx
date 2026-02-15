
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  target,
  rel,
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wider rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 font-display shrink-0";
  
  const variants = {
    primary: "bg-brand hover:bg-brand-dark text-white font-black shadow-lg shadow-brand/20",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
    outline: "border-2 border-white/10 hover:border-brand hover:text-brand text-gray-300 backdrop-blur-md",
    white: "bg-white hover:bg-gray-50 text-brand shadow-xl shadow-black/5",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('http');

    if (isInternal) {
      return (
        <Link 
          to={href}
          className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
        >
          {children}
        </Link>
      );
    }

    return (
      <a 
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
