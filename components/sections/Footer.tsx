import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { useTheme } from '../../App';

const Footer: React.FC = () => {
  const { openQuiz, theme } = useTheme();
  
  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'AI Tools', href: '/ai-tools' },
    { name: 'Done For You', href: '/done-for-you' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <footer className="bg-brand dark:bg-navy-950 text-white py-24 md:py-40 border-t border-white/5 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-10 md:mb-14 block hover:scale-110 transition-transform origin-left w-fit">
              <Logo className="h-16 md:h-28 lg:h-36" variant="white" />
            </Link>
            <p className="text-white/70 dark:text-gray-300 text-lg md:text-2xl max-w-lg leading-relaxed mb-10 md:mb-12 font-medium">
              Your unlimited design & content partner. 
              Execution-focused, founder-led, and reliable.
              We scale brands through precision creative.
            </p>
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
               <button 
                onClick={openQuiz}
                className="w-full sm:w-auto bg-white text-brand px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest shadow-2xl hover:scale-105 transition-all active:scale-95"
               >
                 7-Day Free Trial
               </button>
               <div className="flex items-center gap-4 md:gap-6">
                 <a href="https://upwork.com/agencies/buxxai" target="_blank" rel="noopener noreferrer" className="text-[11px] font-black uppercase tracking-[0.2em] border-2 border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-brand transition-all">Upwork</a>
                 <a href="https://fiverr.com/buxxai" target="_blank" rel="noopener noreferrer" className="text-[11px] font-black uppercase tracking-[0.2em] border-2 border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-brand transition-all">Fiverr</a>
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/30 mb-8 md:mb-12">Navigation</h4>
            <div className="flex flex-col space-y-4 md:space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-white/70 hover:text-white transition-colors text-lg md:text-xl font-bold uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={openQuiz}
                className="text-left text-white font-black uppercase tracking-widest underline decoration-2 underline-offset-8 decoration-white/30 hover:decoration-white transition-all text-lg md:text-xl"
              >
                Start Trial
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/30 mb-8 md:mb-12">Contact</h4>
            <div className="flex flex-col space-y-4 md:space-y-6">
              <a href="mailto:hello@buxxai.com" className="text-white/70 hover:text-white transition-colors text-lg md:text-xl font-bold">hello@buxxai.com</a>
              <Link to="/#book-call" className="text-white/70 hover:text-white transition-colors text-lg md:text-xl font-bold">Book a Demo</Link>
              <div className="pt-10 border-t border-white/5 mt-6">
                 <p className="text-white/30 text-sm md:text-base font-black uppercase tracking-widest italic leading-loose">"The speed of a freelancer, <br/> the quality of an agency."</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-20 md:mt-32 pt-12 md:pt-16 flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] font-black uppercase tracking-[0.3em] text-center md:text-left gap-8 md:gap-0">
          <p>BUXXAI © {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex gap-8 md:gap-12">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;