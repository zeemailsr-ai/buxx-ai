
import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Sparkles } from 'lucide-react';

const workItems = [
  "https://lh3.googleusercontent.com/d/11cFmW_mmHeDKaX2HkUhA_Lnqx03DXwtp", // Donuts/Email
  "https://lh3.googleusercontent.com/d/1CqbfzzxL-L5l7ZDLnW-c_Tb1Xc7Tpn1H", // Branding
  "https://lh3.googleusercontent.com/d/1Zu4Jrk9eCM5wjZpZ_1rXYqw2Xl2G1Ytv", // Reddit/Social
  "https://lh3.googleusercontent.com/d/1WTaGDpOLPWdVYSJ0WqrLuH5-bLG1roWx", // Microsoft/Web
  "https://lh3.googleusercontent.com/d/15Mf1_WZaWdM_fBNjpKgWhidiML45w7BG", // Otto/Product
  "https://lh3.googleusercontent.com/d/1gVbaalFGYLidru1FOuBrMrlAmMqWRXIm", // Sublime/Books
  "https://lh3.googleusercontent.com/d/1rrF4WBQ-CXRAZnE91mEtWrj0RJ_8vuHz", // Campaign
  "https://lh3.googleusercontent.com/d/1mSZ6jWmKAsxr18_CNlxWtu241WVkx-kh", // Video/Thumbnail
];

const WorkGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[120%] h-[120%] -rotate-12 -translate-x-10 -translate-y-20 origin-center">
      {workItems.concat(workItems).map((src, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 1 }}
          className={`relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}
        >
          <img src={src} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        </motion.div>
      ))}
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/80 to-navy-900 z-10"></div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-navy-900 text-white pt-32 pb-20">
      
      {/* Visual Background Grid */}
      <WorkGrid />

      {/* Lighting & Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand opacity-20 blur-[180px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-glow opacity-10 blur-[200px] rounded-full pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-2xl"
        >
           <Sparkles className="text-brand-glow" size={14} />
           <span className="text-[10px] md:text-xs font-black text-white tracking-[0.3em] uppercase font-display">Unlimited Creative Engineering</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter mb-10 text-white uppercase max-w-5xl mx-auto"
        >
          Unlimited Design <br/>
          for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-glow via-white to-brand-glow">scaling</span> brands
        </motion.h1>

        {/* Sub-text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed font-sans"
        >
          Ditch the freelancers. Fire the expensive agencies. 
          Get a dedicated creative squad for one <span className="text-white font-bold">fixed monthly price.</span>
        </motion.p>

        {/* Buttons Aligned */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button 
            href="/pricing" 
            className="w-full sm:w-auto text-lg px-16 py-6 shadow-[0_20px_50px_rgba(125,24,46,0.3)] hover:scale-105 transition-transform"
          >
            See Pricing
          </Button>
          
          <Button 
            href="/portfolio" 
            variant="outline"
            className="w-full sm:w-auto text-lg px-12 py-6 backdrop-blur-md hover:bg-white/10 group"
          >
            <span className="flex items-center gap-3">
               <Play size={18} fill="currentColor" className="group-hover:text-brand-glow transition-colors" />
               View Our Work
            </span>
          </Button>
        </motion.div>

        {/* Trust Markers */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.25em] font-display"
        >
           <div className="flex items-center gap-3 group">
              <CheckCircle2 size={18} className="text-brand-glow group-hover:scale-110 transition-transform" />
              <span>Full Money Back Guarantee</span>
           </div>
           <div className="flex items-center gap-3 group">
              <CheckCircle2 size={18} className="text-brand-glow group-hover:scale-110 transition-transform" />
              <span>24-48h Turnaround</span>
           </div>
           <div className="flex items-center gap-3 group">
              <CheckCircle2 size={18} className="text-brand-glow group-hover:scale-110 transition-transform" />
              <span>Unlimited Revisions</span>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
