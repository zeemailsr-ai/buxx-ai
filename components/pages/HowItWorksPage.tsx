import React from 'react';
import Section from '../ui/Section';
import HowItWorks from '../sections/HowItWorks';
import Booking from '../sections/Booking';
import CTA from '../sections/CTA';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
       <Section className="!pb-0 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          How It Works
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
          A simple, transparent process designed to get you results fast.
        </p>
      </Section>
      <HowItWorks />
      <Booking />
      <CTA />
    </div>
  );
};

export default HowItWorksPage;