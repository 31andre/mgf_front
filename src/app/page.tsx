"use client"

import { ConfettiFireworks } from "./components/confetti-fireworks";

import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { EventsSection } from "./components/events-section";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";
import { ServicesSection } from "./components/services-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { MonthlyTermToast } from "./components/monthly-term-toast";

 
export default function Home() { 

    const monthlyTerm = "2025 ANNEE DU CIEL OUVERT";


  return (
    <main className="min-h-screen"> 
    <ConfettiFireworks />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <MonthlyTermToast term={monthlyTerm} />
    </main>
  )
}
