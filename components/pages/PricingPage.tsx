import React from 'react';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';

const PricingPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#1c050a]">
      <Pricing />
      <FAQ />
    </div>
  );
};

export default PricingPage;