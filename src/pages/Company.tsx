import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CompanyHero } from '../components/company/CompanyHero';
import { AboutSection } from '../components/company/AboutSection';
import { CareersSection } from '../components/company/CareersSection';
import { PartnerSection } from '../components/company/PartnerSection';
import { CompanyContact } from '../components/company/CompanyContact';

export function Company() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <CompanyHero />
        <AboutSection />
        <CareersSection />
        <PartnerSection />
        <CompanyContact />
      </main>
      <Footer />
    </div>
  );
}