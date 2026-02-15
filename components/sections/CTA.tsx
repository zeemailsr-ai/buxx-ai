
import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <Section variant="dark" className="text-center py-32 md:py-48 relative overflow-hidden" maxWidth="full">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand opacity-20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-tight"
        >
          Stop Managing People. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">Start Shipping Work.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Join the founders and brands who switched to BUXXAI for predictable, high-quality output.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center"
        >
          <Button href="/pricing" variant="white" className="text-xl px-12 py-6 shadow-xl shadow-brand/20 hover:scale-105 transition-transform">
            View Pricing Plans
          </Button>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 text-base text-gray-500 font-medium"
        >
          7-day money-back guarantee. No questions asked.
        </motion.p>
      </div>
    </Section>
  );
};

export default CTA;
