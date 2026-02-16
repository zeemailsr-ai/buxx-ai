import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { useTheme } from '../../App';
import { Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
  const { openQuiz } = useTheme();

  return (
    <Section variant="dark" className="text-center py-32 md:py-48 relative overflow-hidden" maxWidth="full">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand opacity-20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand/20 border border-brand-light/30 text-brand-glow font-black text-xs uppercase tracking-[0.3em] mb-10"
        >
          <Sparkles size={16} /> 7-Day Money-Back Guarantee
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-8xl font-black text-white mb-10 tracking-tight leading-[1.1] uppercase"
        >
          Start Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-glow to-white italic font-serif lowercase tracking-normal">7-day</span> Free Trial.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Put our elite design squad to the test. No risk, no long-term contracts. Just world-class execution.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center"
        >
          <button 
            onClick={openQuiz}
            className="text-xl px-16 py-7 bg-white text-brand font-black uppercase tracking-widest rounded-full shadow-2xl shadow-brand/20 hover:scale-105 transition-all active:scale-95"
          >
            Claim Your Trial
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-8 text-gray-500 font-bold uppercase tracking-widest text-xs"
        >
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-glow"></div> Cancel Anytime</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-glow"></div> No Long-term Commitments</span>
        </motion.div>
      </div>
    </Section>
  );
};

export default CTA;