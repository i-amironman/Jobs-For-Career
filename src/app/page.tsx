import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/hero-section';
import JobSearchSection from '@/components/job-search-section';
import FeaturesSection from '@/components/features-section';
import CompaniesSection from '@/components/companies-section';
import TestimonialsSection from '@/components/testimonials-section';

export default function Home() {
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