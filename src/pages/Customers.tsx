import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CustomersHero } from '../components/customers/CustomersHero';
import { DetailedCaseStudies } from '../components/customers/DetailedCaseStudies';
import { ClientLogos } from '../components/customers/ClientLogos';
import { CustomerTestimonials } from '../components/customers/CustomerTestimonials';
import { CustomersCTA } from '../components/customers/CustomersCTA';

export function Customers() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <CustomersHero />
        <DetailedCaseStudies />
        <ClientLogos />
        <CustomerTestimonials />
        <CustomersCTA />
      </main>
      <Footer />
    </div>
  );
}