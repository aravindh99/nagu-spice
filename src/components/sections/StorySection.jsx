import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sun, HeartHandshake } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function StorySection() {
  return (
    <section id="story" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#F6F1E7] border-t border-[#3A2417]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Large Editorial Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#3A2417]/15 bg-[#3A2417]/5 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] flex items-center justify-center group">
            {/* Elegant CSS / Visual Photo Placeholder with Spice Palette Warmth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3A2417] via-[#7B1F1F]/80 to-[#D8A230]/40 opacity-90 transition-transform duration-700 group-hover:scale-105" />
            
            {/* Soft decorative texture pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F6F1E7_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 p-8 sm:p-12 text-center text-[#F6F1E7] flex flex-col items-center">
              <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#D8A230] mb-3">
                Heirloom Heritage
              </span>
              <p className="font-serif-luxury text-3xl sm:text-4xl italic font-light max-w-md leading-relaxed text-[#F6F1E7]">
                "Hand-roasted in iron radais under the morning sun."
              </p>
              <div className="w-12 h-[1px] bg-[#D8A230] my-6" />
              <span className="text-xs uppercase tracking-widest text-[#F6F1E7]/70 font-sans">
                Nagu Amma's Original Recipe Book • 1984
              </span>
            </div>

            {/* Corner Badge Tag */}
            <div className="absolute bottom-6 left-6 glass-panel-dark px-4 py-2 rounded-full text-xs text-[#D8A230] uppercase font-bold tracking-wider">
              Photo Placeholder • Authentic Kitchen
            </div>
          </div>
        </motion.div>

        {/* Right Column: Editorial Quote & Heritage Narrative */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          <Badge variant="green" className="mb-6">
            Our Heritage Story
          </Badge>

          {/* Core Required Quote Line */}
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-[#3A2417] leading-[1.08] mb-8">
            "Our recipes are prepared <span className="italic text-[#7B1F1F] font-light">exactly</span> the way they've been made for generations."
          </h2>

          <p className="text-base sm:text-lg text-[#3A2417]/80 font-normal leading-relaxed mb-6">
            Started in Nagu Amma's kitchen in Bengaluru, every pouch and glass jar carries four decades of uncompromised tradition. We source whole spices directly from single-origin farms, sun-dry them on clean terrace mats, and slow-roast them to release trapped essential oils.
          </p>

          <p className="text-sm sm:text-base text-[#3A2417]/70 font-normal leading-relaxed mb-10">
            Unlike commercial factories that use high-speed steel mills that burn volatile aromas, we stick to slow cold-grinding. No artificial colors, zero added MSG, and zero anti-caking chemicals — just pure warmth.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-6 border-t border-[#3A2417]/15">
            <div>
              <Sun className="w-5 h-5 text-[#D8A230] mb-2" />
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#3A2417]">Sun-Dried</h4>
              <p className="text-xs text-[#3A2417]/60 mt-1">Natural moisture reduction</p>
            </div>
            <div>
              <Award className="w-5 h-5 text-[#5E7D43] mb-2" />
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#3A2417]">Heirloom Ratio</h4>
              <p className="text-xs text-[#3A2417]/60 mt-1">Passed down 3 generations</p>
            </div>
            <div>
              <HeartHandshake className="w-5 h-5 text-[#7B1F1F] mb-2" />
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#3A2417]">Direct Trade</h4>
              <p className="text-xs text-[#3A2417]/60 mt-1">Ethical small farmers</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
