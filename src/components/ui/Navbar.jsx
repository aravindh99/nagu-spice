import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { SocialShare } from './SocialShare';

const NAV_LINKS = [
  { name: 'Blends', href: '#products' },
  { name: 'Heritage', href: '#story' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#footer' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, generateWhatsAppUrl } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#E5DFD3]/85 backdrop-blur-xl border-b border-[#231714]/8'
            : 'py-5 sm:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group relative z-10">
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#231714]">
              Nagu's <span className="italic font-normal text-[#7B1F1F]">Spice House</span>
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#231714]/70 hover:text-[#231714] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Cart Badge */}
          <div className="hidden md:flex items-center gap-4">
            <SocialShare variant="button" />

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-[#231714] hover:opacity-80 transition-opacity"
              aria-label="View Cart on WhatsApp"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#7B1F1F] text-[#E5DFD3] text-[9px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </a>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-[11px] uppercase tracking-[0.18em] font-semibold text-[#231714] border border-[#231714]/30 rounded-full px-5 py-2 hover:bg-[#231714] hover:text-[#E5DFD3] transition-all duration-300"
            >
              {totalItems > 0 ? `WhatsApp Order (${totalItems})` : 'Order Now'}
            </a>
          </div>

          {/* Mobile Toggle & Cart Icon */}
          <div className="flex items-center gap-3 md:hidden relative z-10">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-[#231714]"
              aria-label="View Cart on WhatsApp"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#7B1F1F] text-[#E5DFD3] text-[9px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
              className="p-2 text-[#231714]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#E5DFD3] flex flex-col justify-center items-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="font-serif text-4xl text-[#231714] hover:text-[#7B1F1F] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="mt-8">
              <SocialShare variant="inline" />
            </div>

            <motion.a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-xs uppercase tracking-[0.2em] font-semibold text-[#E5DFD3] bg-[#231714] rounded-full px-8 py-3.5 shadow-lg"
            >
              {totalItems > 0 ? `WhatsApp Order (${totalItems})` : 'Order via WhatsApp'}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
