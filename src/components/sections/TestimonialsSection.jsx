import React from 'react';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    quote: 'The Gunpowder Podi took me straight back to my grandmother\'s kitchen in Mysuru. The sesame aroma is unlike anything from stores.',
    author: 'Priya Ramachandran',
    location: 'Chennai',
  },
  {
    quote: 'You can tell their Garam Masala is stone-milled. A single pinch elevates our Sunday mutton curry with deep warmth instead of harsh heat.',
    author: 'Chef Vikram Menon',
    location: 'Chennai',
  },
  {
    quote: 'Unbelievably fresh Sambar powder. My children ask for seconds every morning. A permanent spot in our pantry.',
    author: 'Ananya Deshmukh',
    location: 'Mumbai',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D8A230] font-sans font-semibold block mb-3">
            Kind Words
          </span>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-[#3A2417] font-light leading-[1.05]">
            Trusted by <em className="italic text-[#7B1F1F]">Home Cooks</em>
          </h2>
        </motion.div>

        {/* Quotes */}
        <div className="space-y-16 sm:space-y-20">
          {REVIEWS.map((rev, idx) => (
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <p className="font-serif text-xl sm:text-3xl lg:text-4xl text-[#3A2417] italic font-light leading-snug">
                "{rev.quote}"
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <div className="w-8 h-px bg-[#D8A230]" />
                <span className="text-xs font-sans font-medium text-[#3A2417]/80">
                  {rev.author}
                </span>
                <span className="text-xs font-sans text-[#3A2417]/40">
                  {rev.location}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>

      </div>
    </section>
  );
}
