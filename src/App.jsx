import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { StorySection } from './components/sections/StorySection';
import { ProductsSection } from './components/sections/ProductsSection';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { WhatsAppCart } from './components/ui/WhatsAppCart';
import { MapPin, Phone } from 'lucide-react';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#E5DFD3] text-[#231714]">
        <Navbar />

        <main>
          <HeroSection />

          <div className="section-divider" />
          <StorySection />

          <div className="section-divider" />
          <ProductsSection />

          <div className="section-divider" />
          <ProcessTimeline />

          <div className="section-divider" />
          <TestimonialsSection />
        </main>

        {/* Floating WhatsApp Cart Widget (Only visible when items are added) */}
        <WhatsAppCart />

        {/* Single Minimal Luxury Footer */}
        <footer id="footer" className="bg-[#EBE6DC] text-[#231714] py-16 px-6 sm:px-8 border-t border-[#231714]/10 pb-28 sm:pb-16">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

            {/* Nagu's Spice House Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#231714] mb-3">
              Nagu's <span className="italic text-[#7B1F1F]">Spice House</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#231714]/65 font-sans max-w-md leading-relaxed mb-8">
              Purely Homemade Masalas &amp; Podis · Handcrafted in Chennai, Tamil Nadu
            </p>

            {/* Location & Kitchen Phone Callout */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#231714]/75 font-sans mb-10 pb-8 border-b border-[#231714]/10 w-full max-w-xl">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D8A230]" />
                <span>Chennai, Tamil Nadu – 600001</span>
              </div>
              <span className="hidden sm:inline text-[#231714]/30">•</span>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D8A230]" />
                <a href="tel:+916379592047" className="font-bold text-[#7B1F1F] hover:underline">
                  +91 6379592047 (Mon – Sat, 9 AM – 7 PM)
                </a>
              </div>
            </div>

            {/* Copyright Line */}
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#231714]/45 font-sans">
              © {new Date().getFullYear()} Nagu's Spice House · All Rights Reserved
            </p>

          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
