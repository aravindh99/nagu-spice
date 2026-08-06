import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Sparkles, Flame, RefreshCw, PackageCheck, Truck } from 'lucide-react';

const STEPS = [
  { num: '01', title: 'Farm', desc: 'Direct from heirloom farms in Guntur, Byadgi, and the Western Ghats.', icon: Sprout, color: '#5E7D43' },
  { num: '02', title: 'Clean', desc: 'Triple-sifted and hand-sorted on terrace mats under morning sun.', icon: Sparkles, color: '#D8A230' },
  { num: '03', title: 'Roast', desc: 'Slow-stirred in heavy cast-iron kadais over controlled embers.', icon: Flame, color: '#7B1F1F' },
  { num: '04', title: 'Grind', desc: 'Stone-milled at low speed to preserve volatile aromatic oils.', icon: RefreshCw, color: '#3A2417' },
  { num: '05', title: 'Pack', desc: 'Sealed in amber glass jars with parchment seals for freshness.', icon: PackageCheck, color: '#D8A230' },
  { num: '06', title: 'Deliver', desc: 'Dispatched within 48 hours of grinding, direct to your doorstep.', icon: Truck, color: '#5E7D43' },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="py-24 sm:py-36 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24 max-w-xl"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#5E7D43] font-sans font-semibold block mb-3">
            The Craft
          </span>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-[#3A2417] font-light leading-[1.05]">
            From Harvest to <em className="italic text-[#7B1F1F]">Your Table</em>
          </h2>
        </motion.div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 sm:gap-y-16">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Number */}
                <span className="font-serif text-5xl sm:text-6xl font-light text-[#3A2417]/10 block mb-3 leading-none">
                  {step.num}
                </span>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-4 h-4" style={{ color: step.color }} />
                  <h3 className="font-serif text-2xl text-[#3A2417] font-normal">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-[#3A2417]/60 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
