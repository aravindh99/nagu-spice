import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Flame, ShieldCheck } from 'lucide-react';
import { SpiceJar } from '../3d/SpiceJar';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center pt-28 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-10 lg:px-16 bg-[#F6F1E7] overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10">
        
        {/* Left Column: Stacked Confident Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <Badge variant="turmeric">
              <Sparkles className="w-3.5 h-3.5 text-[#D8A230]" />
              Purely Homemade • Small Batch
            </Badge>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#3A2417]/60 border-l border-[#3A2417]/20 pl-3">
              Est. 1984
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.92] text-[#3A2417] tracking-tight mb-8"
          >
            <span className="block italic text-[#3A2417]/85 font-light">
              Purely Homemade
            </span>
            <span className="block font-medium tracking-tight text-[#3A2417] mt-1 sm:mt-3">
              Masalas &amp; <span className="text-[#7B1F1F] underline decoration-[#D8A230]/60 decoration-wavy decoration-1 underline-offset-8">Podis</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-[#3A2417]/80 font-normal leading-relaxed max-w-xl mb-10 tracking-wide"
          >
            Hand-roasted heirloom spice blends, slow-ground in small batches. Unadulterated warmth, sun-dried ingredients, and zero artificial preservatives.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Button variant="primary" size="lg" icon={ArrowRight} onClick={() => {
              const el = document.getElementById('products');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore Blends
            </Button>
            <Button variant="outline" size="lg" onClick={() => {
              const el = document.getElementById('story');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Our Heritage
            </Button>
          </motion.div>

          {/* Key Callouts */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-[#3A2417]/15 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D8A230]/20 flex items-center justify-center text-[#D8A230]">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-bold text-[#3A2417]">Cast-Iron Roasted</h4>
                <p className="text-[11px] text-[#3A2417]/60">Aromatic Depth</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5E7D43]/20 flex items-center justify-center text-[#5E7D43]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-bold text-[#3A2417]">100% Sun-Dried</h4>
                <p className="text-[11px] text-[#3A2417]/60">No Additives</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Centered 3D Spline / R3F Glass SpiceJar Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          <SpiceJar />
        </motion.div>

      </div>
    </section>
  );
}
