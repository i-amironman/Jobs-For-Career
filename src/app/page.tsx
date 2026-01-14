'use client';

import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/hero-section';
import JobSearchSection from '@/components/job-search-section';
import FeaturesSection from '@/components/features-section';
import CompaniesSection from '@/components/companies-section';
import TestimonialsSection from '@/components/testimonials-section';

export default function Home() {
  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash;
    if (hash === '#top-companies') {
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        const element = document.getElementById('top-companies');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <JobSearchSection />
        <FeaturesSection />
        <CompaniesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}