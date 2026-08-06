import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="relative">
      <div className="bg-[#3A2417] text-[#E5DFD3] py-20 sm:py-28 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D8A230] font-sans font-semibold block mb-3">
              Direct Ordering
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,6vw,4rem)] font-light leading-[1.05] mb-8">
              Order Fresh, <em className="italic text-[#D8A230]">Directly via WhatsApp</em>
            </h2>

            {/* Location & Hours Callout */}
            <div className="pt-8 border-t border-[#E5DFD3]/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#E5DFD3]/70 font-sans">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D8A230]" />
                <span>Chennai, Tamil Nadu – 600001</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D8A230]" />
                <a href="tel:+916379592047" className="hover:underline text-[#E5DFD3]">
                  +91 6379592047 (Mon – Sat, 9 AM – 7 PM)
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
