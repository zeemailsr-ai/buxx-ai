import React from 'react';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';

const PricingPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-navy-950 transition-colors duration-500">
      <Pricing />
      <div className="bg-cream-50 dark:bg-navy-900 border-t border-gray-100 dark:border-navy-800">
        <FAQ />
      </div>
    </div>
  );
};

export default PricingPage;