import React from 'react';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { StorySection } from './components/sections/StorySection';
import { ProductsSection } from './components/sections/ProductsSection';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-[#F6F1E7] text-[#3A2417] selection:bg-[#D8A230] selection:text-[#3A2417]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <HeroSection />
        <StorySection />
        <ProductsSection />
        <ProcessTimeline />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer Branding Bar */}
      <footer className="py-12 border-t border-[#3A2417]/10 bg-[#F6F1E7] text-center px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-left">
            <span className="font-serif-luxury text-2xl font-bold text-[#3A2417]">
              Nagu's <span className="italic text-[#D8A230]">Spice House</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#3A2417]/60">
              Heirloom Homemade Masalas • Malleshwaram, Bengaluru
            </span>
          </div>

          <p className="text-xs tracking-wider text-[#3A2417]/60">
            © {new Date().getFullYear()} Nagu's Spice House. All rights reserved. Crafted with maternal warmth.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
