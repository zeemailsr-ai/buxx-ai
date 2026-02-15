import React from 'react';
import Section from '../ui/Section';
import Services from '../sections/Services';
import CTA from '../sections/CTA';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <Section className="!pb-0 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
          Comprehensive design and content solutions tailored for growth-focused brands.
        </p>
      </Section>
      <Services />
      <CTA />
    </div>
  );
};

export default ServicesPage;