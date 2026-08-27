import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandMarquee } from './components/BrandMarquee';
import { FunnelLeaksSection } from './components/FunnelLeaksSection';
import { MethodologyTimeline } from './components/MethodologyTimeline';
import { PortfolioSection } from './components/PortfolioSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { PortfolioItem, PricingPlan } from './types';

export default function App() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioItem | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setIsEstimatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#040507] text-[#e2e8f0] selection:bg-[#39d6ce]/30 selection:text-[#39d6ce] relative">
      {/* Background Subtle Noise and Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onOpenInquiry={() => scrollToSection('inquiry')}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          onGetInTouch={() => scrollToSection('inquiry')}
          onStartBuild={() => setIsEstimatorOpen(true)}
          onExploreMethodology={() => scrollToSection('methodology')}
        />

        {/* Brand Logos Marquee */}
        <BrandMarquee />

        {/* Remove Invisible Leaks in Your Funnel */}
        <FunnelLeaksSection
          onStartBuild={() => setIsEstimatorOpen(true)}
          onExploreProcess={() => scrollToSection('methodology')}
        />

        {/* The Architecture of Flawless Execution (Sprint Methodology) */}
        <MethodologyTimeline
          onInitiateProject={() => setIsEstimatorOpen(true)}
        />

        {/* Portfolio & Case Studies */}
        <PortfolioSection
          onSelectProject={(project) => setSelectedCaseStudy(project)}
        />

        {/* Pricing Plans & FAQs */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
        />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Direct Technical Inquiry Form */}
        <InquirySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Scope & Build Estimator Modal */}
      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />

      {/* Portfolio Deep Dive Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartBuild={() => {
          setSelectedCaseStudy(null);
          setIsEstimatorOpen(true);
        }}
      />
    </div>
  );
}
