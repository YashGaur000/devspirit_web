import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SolutionsHero } from '../components/solutions/SolutionsHero';
import { IndustrySolutions } from '../components/solutions/IndustrySolutions';
import { SolutionsCaseStudies } from '../components/solutions/SolutionsCaseStudies';
import { SolutionsTestimonials } from '../components/solutions/SolutionsTestimonials';
import { SolutionsCTA } from '../components/solutions/SolutionsCTA';

export function Solutions() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <SolutionsHero />
        <IndustrySolutions />
        <SolutionsCaseStudies />
        <SolutionsTestimonials />
        <SolutionsCTA />
      </main>
      <Footer />
    </div>
  );
}