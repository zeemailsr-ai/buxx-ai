import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail, Palette, Sparkles, Monitor, Clapperboard, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import { useTheme } from '../../App';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openQuiz, theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Our Work', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const serviceCategories = [
    { name: 'Email Marketing', href: '/done-for-you', icon: <Mail size={16} /> },
    { name: 'Branding & Design', href: '/services', icon: <Palette size={16} /> },
    { name: 'AI Content', href: '/ai-tools', icon: <Sparkles size={16} /> },
  ];

  return (
    <header className={`fixed z-[100] transition-all duration-500 ease-in-out top-0 left-0 w-full flex justify-center pt-2 md:pt-6 px-4`}>
      <div 
        className={`w-full max-w-[1400px] flex items-center justify-between transition-all duration-500 rounded-full px-6 md:px-12 
          ${scrolled 
            ? 'bg-white/80 dark:bg-navy-900/80 backdrop-blur-xl h-16 md:h-20 shadow-lg border border-gray-200/20 dark:border-white/5' 
            : 'bg-transparent h-20 md:h-28 border border-transparent'
          }`}
      >
        {/* Brand Logo */}
        <Link to="/" className="flex-shrink-0 transition-all duration-300 hover:scale-105 py-2">
          <Logo className="h-8 md:h-12 lg:h-16" variant={theme === 'dark' ? 'white' : 'color'} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-10 h-full">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative h-full flex items-center"
              onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
            >
              <Link 
                to={link.href} 
                className={`text-[12px] font-black uppercase tracking-[0.2em] transition-all duration-200 flex items-center gap-2 py-4
                  ${location.pathname === link.href ? 'text-brand dark:text-brand-glow' : 'text-gray-900 dark:text-gray-100 hover:text-brand dark:hover:text-brand-glow'}
                `}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />}
              </Link>

              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[260px] bg-white dark:bg-navy-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 p-4 mt-1 backdrop-blur-xl"
                    >
                      <div className="flex flex-col gap-1">
                        {serviceCategories.map((cat) => (
                          <Link
                            key={cat.name}
                            to={cat.href}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand-glow transition-all"
                          >
                            <span className="text-brand dark:text-brand-glow">{cat.icon}</span>
                            <span className="text-[13px] font-bold uppercase tracking-tight">{cat.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-brand" />}
          </button>

          <button 
            onClick={openQuiz}
            className="hidden sm:block bg-brand hover:bg-brand-light text-white font-black text-[12px] uppercase tracking-widest px-8 py-3.5 rounded-full shadow-xl shadow-brand/10 transition-all hover:-translate-y-1 active:scale-95"
          >
            Start Free Trial
          </button>

          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden p-3 text-gray-900 dark:text-gray-100"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-white/95 dark:bg-navy-900/95 backdrop-blur-2xl flex flex-col p-8 xl:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <Logo className="h-10" variant={theme === 'dark' ? 'white' : 'color'} />
              <button onClick={() => setMobileMenuOpen(false)} className="p-4 text-gray-900 dark:text-gray-100">
                <X size={28} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`text-4xl font-black uppercase tracking-tighter ${location.pathname === link.href ? 'text-brand dark:text-brand-glow' : 'text-gray-900 dark:text-white'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-12">
                <button 
                  onClick={() => { setMobileMenuOpen(false); openQuiz(); }}
                  className="w-full bg-brand text-white font-black text-xl uppercase tracking-widest py-6 rounded-3xl shadow-2xl"
                >
                  Start Free Trial
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;