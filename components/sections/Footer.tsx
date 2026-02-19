import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { useTheme } from '../../App';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, BrainCircuit } from 'lucide-react';

const Footer: React.FC = () => {
  const { openQuiz } = useTheme();
  const [aiQuote, setAiQuote] = useState<string>("Scaling brands through precision creative.");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'AI Tools', href: '/ai-tools' },
    { name: 'Done For You', href: '/done-for-you' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const getApiKey = () => {
    return typeof process !== 'undefined' && process.env ? process.env.API_KEY : null;
  };

  const generateDesignQuote = async () => {
    const apiKey = getApiKey();
    if (!apiKey) return;
    
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Write a 1-sentence punchy, ambitious vision statement for a subscription-based design agency that values speed and high ROI. No hashtags.",
        config: { temperature: 0.8, maxOutputTokens: 50 }
      });
      if (response.text) setAiQuote(response.text.replace(/"/g, ''));
    } catch (err) {
      console.error("AI Quote Failed:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    generateDesignQuote();
  }, []);

  const apiKeyExists = !!getApiKey();

  return (
    <footer className="bg-brand dark:bg-navy-950 text-white py-24 md:py-40 border-t border-white/5 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-glow to-transparent opacity-30"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-10 md:mb-14 block hover:scale-105 transition-transform origin-left w-fit">
              <Logo className="h-12 md:h-24 lg:h-32" variant="white" />
            </Link>
            
            <div className="min-h-[60px] md:min-h-[80px]">
               <p className={`text-white/80 dark:text-gray-300 text-xl md:text-3xl max-w-xl leading-snug mb-10 md:mb-12 font-display font-bold transition-opacity duration-500 ${isGenerating ? 'opacity-40' : 'opacity-100'}`}>
                {aiQuote}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-8">
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
                className="text-left text-white font-black uppercase tracking-widest underline decoration-2 underline-offset-8 decoration-white/30 hover:decoration-brand-glow transition-all text-lg md:text-xl"
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
              
              <div className="pt-10 border-t border-white/5 mt-6 group">
                 <p className="text-white/30 group-hover:text-white/50 text-sm md:text-base font-black uppercase tracking-widest italic leading-loose transition-colors">"The speed of a freelancer, <br/> the quality of an agency."</p>
                 {apiKeyExists && (
                   <div 
                    onClick={generateDesignQuote}
                    className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-white/80 hover:bg-white/10 cursor-pointer transition-all"
                   >
                     <BrainCircuit size={12} className={isGenerating ? 'animate-pulse' : ''} /> 
                     {isGenerating ? 'Dreaming...' : 'New Vision'}
                   </div>
                 )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-20 md:mt-32 pt-12 md:pt-16 flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] font-black uppercase tracking-[0.3em] text-center md:text-left gap-8 md:gap-0">
          <div className="flex flex-col gap-1">
            <p>BUXXAI © {new Date().getFullYear()}. All rights reserved.</p>
            {apiKeyExists && (
              <p className="text-[8px] flex items-center justify-center md:justify-start gap-1 opacity-50">
                <Sparkles size={8} /> Augmented by Gemini Intelligence
              </p>
            )}
          </div>
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