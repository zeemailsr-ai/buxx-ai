import React from 'react';
import Section from '../ui/Section';
import { MonitorIcon, PenToolIcon, CloudIcon, Star, Constellation, RocketIcon } from '../ui/Illustrations';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Subscribe & Start",
    desc: "Choose your plan. Instant access to your dashboard.",
    icon: <MonitorIcon className="w-full h-full text-brand-dark dark:text-brand-glow" />
  },
  {
    id: "02",
    title: "Get Matched & Create",
    desc: "We match you with the best designer for your specific task.",
    icon: <PenToolIcon className="w-full h-full text-brand-dark dark:text-brand-glow" />
  },
  {
    id: "03",
    title: "Review, Revise, Approve",
    desc: "Love it? Download it. Need tweaks? Unlimited revisions.",
    icon: <CloudIcon className="w-full h-full text-brand-dark dark:text-brand-glow" />
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" variant="white" className="overflow-hidden relative" maxWidth="full">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 text-brand-light opacity-30 animate-pulse pointer-events-none">
        <Star className="w-8 h-8" />
      </div>
      <div className="absolute top-40 right-20 text-brand opacity-20 hidden md:block pointer-events-none">
        <Constellation className="w-32 h-32" />
      </div>

      <div className="relative z-10 text-center mb-24">
        <motion.span variants={itemVariants} className="font-serif italic text-brand dark:text-brand-glow text-xl mb-3 block">Simple process</motion.span>
        <motion.h2 variants={itemVariants} className="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Experience the <span className="text-brand dark:text-brand-glow">future</span> of design
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          From ads to video editing, we’re constantly expanding to keep up with what you need next.
        </motion.p>
      </div>

      <div className="relative w-full max-w-[1600px] mx-auto">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-[110px] left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-navy-700 z-0">
           <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-brand/30 dark:bg-brand-glow/30"
           />
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative flex flex-col items-center text-center group z-10"
            >
              <div className="bg-white dark:bg-navy-800 p-4 rounded-full mb-8 shadow-sm dark:shadow-none transition-colors">
                {/* Illustration Container */}
                <div className="w-40 h-40 md:w-44 md:h-44 relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {step.icon}
                  {/* Floating particles around icon */}
                  <div className="absolute -top-2 -right-2 text-brand dark:text-brand-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-navy-900 px-4 transition-colors">
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                 <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg max-w-xs mx-auto">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;