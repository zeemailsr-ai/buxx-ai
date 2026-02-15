
import React, { useEffect } from 'react';
import Section from '../ui/Section';
import { PauseCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Booking: React.FC = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('type', 'text/javascript');
    script.async = true;
    head?.appendChild(script);

    return () => {
      head?.removeChild(script);
    };
  }, []);

  return (
    <Section id="book-call" variant="dark" className="py-24 md:py-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-start max-w-[1400px] mx-auto">
        
        <div className="relative z-10 flex flex-col justify-center lg:pt-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="bg-brand/10 p-2 rounded-lg">
              <Sparkles className="text-brand-glow" size={24} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">Book Your 15-Min Tour</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight"
          >
            Stop guessing. <br/>
            <span className="text-brand-glow">See how it works.</span>
          </motion.h2>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-lg leading-relaxed">
            Choose a time to meet with a strategist. We'll show you the exact dashboard we use to manage <span className="text-white font-medium">unlimited requests</span> for our partners.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6 mb-16 max-w-xl"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <PauseCircle className="text-brand-glow group-hover:rotate-90 transition-transform duration-500" size={32} />
                <h4 className="font-bold text-white text-xl">Flexibility First</h4>
              </div>
              <p className="text-gray-400 leading-relaxed font-medium">
                No long-term contracts. Pause or cancel anytime with a single click.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="text-brand-glow group-hover:scale-110 transition-transform duration-500" size={32} />
                <h4 className="font-bold text-white text-xl">Risk-Free Trial</h4>
              </div>
              <p className="text-gray-400 leading-relaxed font-medium">
                100% satisfaction guarantee or we'll make it right. No hidden fees or exit terms.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-20 w-full"
        >
          <div className="bg-[#020617] rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(125,24,46,0.05)] overflow-hidden min-h-[750px] w-full relative">
             <div className="absolute top-0 left-0 right-0 h-16 bg-white/5 border-b border-white/10 z-10 flex items-center px-8">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-brand/50"></div>
                   <div className="w-3 h-3 rounded-full bg-brand-light/50"></div>
                   <div className="w-3 h-3 rounded-full bg-brand-glow/50"></div>
                </div>
                <div className="flex-1 text-center">
                   <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Official Booking Calendar</span>
                </div>
             </div>

             <div 
               className="calendly-inline-widget pt-16" 
               data-url="https://calendly.com/zeemailsr/buxxai-demo-call?background_color=020617&text_color=ffffff&primary_color=7d182e" 
               style={{ minWidth: '320px', height: '700px' }}
             />
          </div>
        </motion.div>

      </div>
    </Section>
  );
};

export default Booking;
