import React, { useState, useEffect, useRef } from 'react';
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  const serviceCategories = [
    { name: 'Email Marketing', href: '/done-for-you', icon: <Mail size={18} />, desc: 'Klaviyo & Design Systems' },
    { name: 'Branding & Identity', href: '/services', icon: <Palette size={18} />, desc: 'Logos & Brand Guidelines' },
    { name: 'AI Content', href: '/ai-tools', icon: <Sparkles size={18} />, desc: 'Generated Video & Assets' },
    { name: 'Web & App UI', href: '/services', icon: <Monitor size={18} />, desc: 'High-Converting Layouts' },
    { name: 'Video & Motion', href: '/services', icon: <Clapperboard size={18} />, desc: 'Reels & Explainer Videos' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Our Work', href: '/portfolio' },
    { name: 'Done For You', href: '/done-for-you' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <header className={`fixed z-[100] transition-all duration-500 ease-in-out top-2 md:top-6 left-1/2 -translate-x-1/2 w-[98%] max-w-[1400px] ${scrolled ? 'py-0' : 'py-2'}`}>
      <div className={`bg-white/95 dark:bg-navy-800/95 backdrop-blur-md shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] rounded-full px-4 md:px-12 border border-gray-100 dark:border-navy-700 flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16 md:h-22' : 'h-20 md:h-28'}`}>
        
        {/* Brand Logo */}
        <Link to="/" className="flex-shrink-0 transition-all duration-300 hover:scale-105 active:scale-95 py-2">
          <Logo className="h-8 md:h-16 lg:h-20" variant={theme === 'dark' ? 'white' : 'color'} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative h-full flex items-center"
              onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
            >
              <Link 
                to={link.href} 
                className={`text-[13px] font-black uppercase tracking-widest transition-all duration-200 flex items-center gap-2 py-4
                  ${location.pathname === link.href ? 'text-brand dark:text-brand-glow' : 'text-gray-900 dark:text-gray-200 hover:text-brand dark:hover:text-brand-glow'}
                `}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  />
                )}
              </Link>

              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[300px] bg-white dark:bg-navy-800 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-navy-700 p-4 mt-2"
                    >
                      <div className="flex flex-col gap-2">
                        {serviceCategories.map((cat) => (
                          <Link
                            key={cat.name}
                            to={cat.href}
                            className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-navy-700 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-brand/5 dark:bg-brand/20 flex items-center justify-center text-brand dark:text-brand-glow group-hover:bg-brand group-hover:text-white transition-all">
                              {cat.icon}
                            </div>
                            <div>
                              <p className="text-[14px] font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tight">{cat.name}</p>
                              <p className="text-[11px] text-gray-500 dark:text-gray-400 font-bold">{cat.desc}</p>
                            </div>
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
        <div className="flex items-center gap-3 md:gap-6">
          <button 
            onClick={toggleTheme}
            className="p-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-navy-700 rounded-full transition-all border border-transparent dark:border-navy-700"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-brand-glow" /> : <Moon size={20} className="text-brand" />}
          </button>

          <button 
            onClick={openQuiz}
            className="hidden sm:block bg-brand hover:bg-brand-dark text-white font-black text-[12px] md:text-[14px] uppercase tracking-[0.15em] px-6 md:px-10 py-3 md:py-4 rounded-full border border-brand-dark shadow-[0_10px_30px_-10px_rgba(125,24,46,0.4)] transition-all hover:-translate-y-1 active:translate-y-0"
          >
            FREE TRIAL
          </button>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-navy-700 rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-screen h-screen bg-white dark:bg-navy-900 z-[110] xl:hidden flex flex-col p-8 md:p-12"
          >
            <div className="flex justify-between items-center mb-12">
              <Logo className="h-10" variant={theme === 'dark' ? 'white' : 'color'} />
              <div className="flex gap-4">
                <button 
                  onClick={toggleTheme}
                  className="p-4 bg-gray-100 dark:bg-navy-800 rounded-full text-gray-900 dark:text-gray-100"
                >
                  {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                </button>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-4 bg-gray-100 dark:bg-navy-800 rounded-full text-gray-900 dark:text-gray-100"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <nav className="flex flex-col gap-2 overflow-y-auto custom-scrollbar">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {link.hasDropdown ? (
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between py-4 text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
                        {link.name}
                        <ChevronDown size={30} className="opacity-40" />
                      </div>
                      <div className="flex flex-col gap-6 pl-6 border-l-4 border-brand/20 mb-6 py-2">
                        {serviceCategories.map(cat => (
                          <Link 
                            key={cat.name} 
                            to={cat.href} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xl font-bold text-gray-500 dark:text-gray-400 active:text-brand"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={link.href} 
                      className={`py-4 text-3xl font-black uppercase tracking-tighter ${location.pathname === link.href ? 'text-brand dark:text-brand-glow' : 'text-gray-900 dark:text-white'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-12 mt-auto">
                <button 
                  onClick={() => { setMobileMenuOpen(false); openQuiz(); }}
                  className="block w-full text-center bg-brand text-white font-black text-[20px] uppercase tracking-widest py-6 rounded-full border-2 border-brand-dark shadow-xl active:scale-95 transition-all"
                >
                  START FREE TRIAL
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