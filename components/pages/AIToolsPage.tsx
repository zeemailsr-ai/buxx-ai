
import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AIToolsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300 flex items-center justify-center">
      <Section className="text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand dark:text-brand-glow font-black text-[10px] uppercase tracking-[0.3em] mb-8">
            <Sparkles size={14} /> buXXai Creative Labs
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Lab Tools <span className="text-brand dark:text-brand-glow font-serif italic">Restructuring.</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
            We're currently updating our suite of AI production tools. 
            Check back shortly for the next generation of creative intelligence.
          </p>
        </motion.div>
      </Section>
    </div>
  );
};

export default AIToolsPage;
