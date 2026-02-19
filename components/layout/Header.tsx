import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail, Palette, Sparkles, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Done For You', href: '/done-for-you' }, // Restored tab
    { name: 'Our Work', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const serviceCategories = [
    { name: 'Email Marketing', href: '/done-for-you', icon: <Mail size={16} /> },
    { name: 'Branding & Design', href: '/services', icon: <Palette size={16} /> },
    { name: 'AI Content', href: '/ai-tools', icon: <Sparkles size={16} /> },
  ];

  return (
    <header className={`fixed z-[100] transition-all duration-500 ease-in-out top-0 left-0 w-full flex justify-center pt-0 px-0`}>
      <div 
        className={`w-full flex items-center justify-between transition-all duration-500 px-6 md:px-16 lg:px-20 
          ${scrolled 
            ? 'bg-brand dark:bg-navy-950 h-20 md:h-24 shadow-2xl border-b border-white/10' 
            : 'bg-brand dark:bg-navy-900 h-24 md:h-32 border-b border-transparent'
          }`}
      >
        {/* Brand Logo - Made larger as requested */}
        <Link to="/" className="flex-shrink-0 transition-all duration-300 hover:scale-105 py-2">
          <Logo className="h-12 md:h-18 lg:h-22" variant="white" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 lg:gap-10 h-full">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative h-full flex items-center"
              onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
            >
              <Link 
                to={link.href} 
                className={`text-[12px] font-black uppercase tracking-[0.22em] transition-all duration-200 flex items-center gap-2 py-4 text-white hover:text-white/80
                  ${location.pathname === link.href ? 'opacity-100' : 'opacity-60'}
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
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-white dark:bg-navy-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 p-4 mt-0 overflow-hidden"
                    >
                      <div className="flex flex-col gap-1">
                        {serviceCategories.map((cat) => (
                          <Link
                            key={cat.name}
                            to={cat.href}
                            className="flex items-center gap-3 p-4 rounded-xl hover:bg-brand/5 dark:hover:bg-white/5 text-gray-800 dark:text-gray-200 hover:text-brand dark:hover:text-brand-glow transition-all"
                          >
                            <span className="text-brand dark:text-brand-glow">{cat.icon}</span>
                            <span className="text-[13px] font-black uppercase tracking-tight">{cat.name}</span>
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
        <div className="flex items-center gap-4 lg:gap-6">
          <button 
            onClick={toggleTheme}
            className="p-3 text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} className="text-white" />}
          </button>

          <button 
            onClick={openQuiz}
            className="hidden sm:block bg-white text-brand hover:bg-gray-50 font-black text-[12px] uppercase tracking-widest px-8 lg:px-10 py-4 rounded-full shadow-xl transition-all active:scale-95"
          >
            Start Free Trial
          </button>

          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden p-3 text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[110] bg-brand dark:bg-navy-900 flex flex-col p-8 xl:hidden shadow-2xl"
          >
            <div className="flex justify-between items-center mb-16">
              <Logo className="h-10" variant="white" />
              <button onClick={() => setMobileMenuOpen(false)} className="p-4 text-white">
                <X size={32} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`text-4xl font-black uppercase tracking-tighter text-white ${location.pathname === link.href ? 'opacity-100' : 'opacity-40'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-12">
                <button 
                  onClick={() => { setMobileMenuOpen(false); openQuiz(); }}
                  className="w-full bg-white text-brand font-black text-2xl uppercase tracking-widest py-8 rounded-[2rem] shadow-2xl"
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