import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { Button } from './Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Artisanal Blends', href: '#masalas' },
    { name: 'Our Heritage', href: '#heritage' },
    { name: 'The Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F6F1E7]/85 backdrop-blur-md py-4 shadow-sm border-b border-[#3A2417]/10'
            : 'bg-transparent py-6 sm:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Logo & Sub-tag */}
          <a href="#" className="group flex flex-col focus:outline-none">
            <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-tight text-[#3A2417] group-hover:text-[#7B1F1F] transition-colors">
              Nagu's <span className="italic font-normal text-[#D8A230]">Spice House</span>
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#3A2417]/70 uppercase font-sans font-medium">
              Purely Homemade • Heirloom Blends
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#3A2417]/80 hover:text-[#7B1F1F] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D8A230] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-5">
            <button
              aria-label="View Cart"
              className="relative p-2.5 rounded-full text-[#3A2417] hover:bg-[#3A2417]/5 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#7B1F1F] text-[#F6F1E7] text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <Button variant="primary" size="sm">
              Explore Craft
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              aria-label="View Cart"
              className="relative p-2 rounded-full text-[#3A2417]"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#7B1F1F] text-[#F6F1E7] text-[9px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-[#3A2417] hover:bg-[#3A2417]/10 rounded-full transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F6F1E7] pt-28 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D8A230] font-bold">
                Navigation
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif-luxury text-3xl text-[#3A2417] hover:text-[#7B1F1F] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-[#3A2417]/10 flex flex-col space-y-4">
              <Button variant="primary" size="md" className="w-full" onClick={() => setMobileOpen(false)}>
                Explore Craft Collection
              </Button>
              <p className="text-xs text-center text-[#3A2417]/60 tracking-wider">
                Crafted in South India • Shipped Fresh Nationwide
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
