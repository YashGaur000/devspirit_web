import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PricingHero } from '../components/pricing/PricingHero';
import { PricingPlans } from '../components/pricing/PricingPlans';
import { PricingComparison } from '../components/pricing/PricingComparison';
import { PricingFAQ } from '../components/pricing/PricingFAQ';
import { PricingContact } from '../components/pricing/PricingContact';

export function Pricing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PricingHero />
        <PricingPlans />
        <PricingComparison />
        <PricingFAQ />
        <PricingContact />
      </main>
      <Footer />
    </div>
  );
}