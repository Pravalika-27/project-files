import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import ShippingCalculator from '../components/home/ShippingCalculator';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ShippingCalculator />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;