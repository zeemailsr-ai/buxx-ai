
import React from 'react';
import Hero from '../sections/Hero';
import ClientLogos from '../sections/ClientLogos';
import Problem from '../sections/Problem';
import Services from '../sections/Services';
import HowItWorks from '../sections/HowItWorks';
import Pricing from '../sections/Pricing';
import Portfolio from '../sections/Portfolio';
import SocialProof from '../sections/SocialProof';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';
import Booking from '../sections/Booking';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Problem />
      <Services />
      <HowItWorks />
      <Pricing />
      <SocialProof />
      <Portfolio />
      <Booking />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
