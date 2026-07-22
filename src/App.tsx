import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SloganTicker } from './components/SloganTicker';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PricingSection } from './components/PricingSection';
import { SpeedCalculator } from './components/SpeedCalculator';
import { HowToSubscribe } from './components/HowToSubscribe';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-200 selection:text-sky-900 font-sans">
      {/* Navigation Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Brand Slogan Marquee */}
        <SloganTicker />

        {/* Why Choose Us & Fiber Advantages */}
        <WhyChooseUs />

        {/* Subscription Pricing Cards (Regular & Heboh) */}
        <PricingSection />

        {/* Interactive Speed Requirement Calculator */}
        <SpeedCalculator />

        {/* How to Subscribe 5-Step Timeline */}
        <HowToSubscribe />

        {/* Verified User Testimonials */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Final Conversion CTA */}
        <CtaSection />
      </main>

      {/* Footer & Floating WhatsApp Widget */}
      <Footer />
    </div>
  );
}
