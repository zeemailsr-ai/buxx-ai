import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Mail, Palette, Sparkles, Monitor, Clapperboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import { useTheme } from '../../App';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openQuiz } = useTheme();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when location changes
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
    { name: 'Login', href: '/login' },
  ];

  return (
    <header className={`fixed z-[100] transition-all duration-500 ease-in-out top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] ${scrolled ? 'py-0' : 'py-2'}`}>
      <div className={`bg-white/95 backdrop-blur-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] rounded-full px-8 md:px-12 border border-gray-100 flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-20 md:h-22' : 'h-24 md:h-32'}`}>
        
        {/* Brand Logo - Massive & Responsive */}
        <Link to="/" className="flex-shrink-0 transition-all duration-300 hover:scale-110 active:scale-95 py-3">
          <Logo className="h-12 md:h-20 lg:h-24 xl:h-28" variant="color" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-12 h-full">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative h-full flex items-center"
              onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
            >
              <Link 
                to={link.href} 
                className={`text-[17px] font-black uppercase tracking-widest transition-all duration-200 flex items-center gap-2 py-4
                  ${location.pathname === link.href ? 'text-brand' : 'text-gray-900 hover:text-brand'}
                `}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  />
                )}
              </Link>

              {/* Services Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[340px] bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-5 mt-4"
                    >
                      <div className="flex flex-col gap-3">
                        {serviceCategories.map((cat) => (
                          <Link
                            key={cat.name}
                            to={cat.href}
                            className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
                          >
                            <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                              {cat.icon}
                            </div>
                            <div>
                              <p className="text-[16px] font-black text-gray-900 leading-tight uppercase tracking-tight">{cat.name}</p>
                              <p className="text-[13px] text-gray-500 font-bold">{cat.desc}</p>
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

        {/* Action Button */}
        <div className="flex items-center gap-8">
          <button 
            onClick={openQuiz}
            className="hidden lg:block bg-brand hover:bg-brand-dark text-white font-black text-[15px] uppercase tracking-[0.15em] px-12 py-5 rounded-full border-2 border-brand-dark shadow-[0_15px_40px_-10px_rgba(125,24,46,0.4)] transition-all hover:-translate-y-1.5 active:translate-y-0 active:shadow-none"
          >
            FREE TRIAL
          </button>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-4 text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
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
            className="fixed inset-0 w-screen h-screen bg-white z-[110] xl:hidden flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <Logo className="h-14" variant="color" />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-5 bg-gray-100 rounded-full text-gray-900"
              >
                <X size={36} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-3 overflow-y-auto custom-scrollbar">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {link.hasDropdown ? (
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between py-6 text-4xl font-black text-gray-900 uppercase tracking-tighter">
                        {link.name}
                        <ChevronDown size={40} className="opacity-40" />
                      </div>
                      <div className="flex flex-col gap-8 pl-8 border-l-6 border-brand/20 mb-10 py-4">
                        {serviceCategories.map(cat => (
                          <Link 
                            key={cat.name} 
                            to={cat.href} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-2xl font-bold text-gray-500 active:text-brand"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={link.href} 
                      className={`py-6 text-4xl font-black uppercase tracking-tighter ${location.pathname === link.href ? 'text-brand' : 'text-gray-900'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-20 mt-auto">
                <button 
                  onClick={() => { setMobileMenuOpen(false); openQuiz(); }}
                  className="block w-full text-center bg-brand text-white font-black text-[22px] uppercase tracking-widest py-8 rounded-full border-2 border-brand-dark shadow-[15px_15px_0px_0px_rgba(125,24,46,0.1)] active:translate-x-1 active:translate-y-1 active:shadow-none"
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