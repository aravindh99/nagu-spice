import React from 'react';
import { motion } from 'framer-motion';

export function StorySection() {
  const words = 'Our recipes are prepared exactly the way they have been made for generations'.split(' ');

  return (
    <section id="story" className="relative py-24 sm:py-36 lg:py-44 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Editorial Quote — word-by-word reveal */}
        <div className="max-w-4xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="font-serif text-[clamp(1.8rem,5vw,4rem)] leading-[1.15] text-[#3A2417] font-light"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0.15 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.5, delay: i * 0.04 },
                  },
                }}
                className="inline-block mr-[0.3em]"
              >
                {word === 'exactly' ? (
                  <em className="text-[#7B1F1F] italic">{word}</em>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Subtitle + Divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12"
        >
          <div className="w-16 h-px bg-[#D8A230]" />
          <p className="text-sm sm:text-base text-[#3A2417]/65 font-sans max-w-md leading-relaxed">
            Started in Nagu Amma's kitchen in Chennai, every jar carries four decades of uncompromised tradition.
            Whole spices from single-origin farms, sun-dried on terrace mats, slow-roasted in cast iron.
          </p>
        </motion.div>

        {/* Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[2.2/1] bg-gradient-to-br from-[#3A2417] via-[#5C4033] to-[#7B1F1F] relative group"
        >
          {/* Texture pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E5DFD3_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Placeholder label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-[#E5DFD3]">
              <p className="font-serif text-3xl sm:text-5xl italic font-light mb-3">
                The Kitchen
              </p>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D8A230] font-sans font-medium">
                Photo Placeholder — Swap With Your Image
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
