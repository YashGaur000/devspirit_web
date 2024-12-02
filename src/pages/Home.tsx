import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { About } from '../components/sections/About';
import { CaseStudies } from '../components/sections/CaseStudies';
import { Contact } from '../components/sections/Contact';
import { FAQ } from '../components/sections/FAQ';

export function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}