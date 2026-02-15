import React from 'react';
import Section from '../ui/Section';
import { ChartDownIcon, ChartUpIcon } from '../ui/Illustrations';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Problem: React.FC = () => {
  return (
    <Section variant="cream" pattern="dots" className="text-center" maxWidth="full">
      <div className="max-w-3xl mx-auto mb-20">
        <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          You’re Not Lacking Tools. <br/> <span className="text-brand dark:text-brand-glow">You’re Leaking Revenue.</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
          Most brands already have traffic. Revenue gets lost through weak email design, 
          inconsistent branding, and slow execution gaps. 
          buXXai fixes these leaks quietly and consistently.
        </motion.p>
      </div>

      <motion.div 
        variants={itemVariants}
        className="relative max-w-[1400px] mx-auto bg-white dark:bg-navy-900 rounded-3xl shadow-xl p-10 md:p-16 border border-gray-100 dark:border-navy-700 overflow-hidden"
      >
        {/* Diagram Background Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 dark:bg-navy-700 -translate-y-1/2 hidden md:block z-0"></div>

        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          
          {/* Step 1: The Leak */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4 } }
            }}
            className="flex flex-col items-center group"
          >
            <div className="w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-300">
              <ChartDownIcon className="w-full h-full text-red-600" accent="#EF4444" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">The Leak</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">Ugly emails & off-brand assets kill conversion rates.</p>
          </motion.div>

          {/* Step 2: The Fix */}
          <motion.div 
             variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.5, delay: 0.2 } }
            }}
            className="flex flex-col items-center group"
          >
            <div className="w-32 h-32 bg-white dark:bg-navy-800 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform overflow-hidden relative border-4 border-brand-light dark:border-brand-glow z-20 p-2">
              <span className="font-display font-black text-xl text-brand">buXXai</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">The Fix</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">Premium design & content injected instantly.</p>
          </motion.div>

          {/* Step 3: The Result */}
          <motion.div 
             variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4, delay: 0.4 } }
            }}
            className="flex flex-col items-center group"
          >
            <div className="w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-300">
              <ChartUpIcon className="w-full h-full text-green-600" accent="#22C55E" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">The Growth</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">Consistent brand experience drives LTV.</p>
          </motion.div>

        </div>
      </motion.div>
    </Section>
  );
};

export default Problem;