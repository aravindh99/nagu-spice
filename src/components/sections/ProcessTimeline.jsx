import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Sparkles, Flame, RefreshCw, PackageCheck, Truck } from 'lucide-react';
import { Badge } from '../ui/Badge';

const STEPS = [
  {
    number: '01',
    title: 'Farm',
    subtitle: 'Direct Farmer Trade',
    description: 'Sourced directly from heirloom organic farms in Guntur, Byadgi, and Western Ghats.',
    icon: Sprout,
    color: '#5E7D43',
  },
  {
    number: '02',
    title: 'Cleaning',
    subtitle: 'Hand-Sorted & Screened',
    description: 'Triple-sifted on terrace mats to eliminate stems, dust, and imperfect pods.',
    icon: Sparkles,
    color: '#D8A230',
  },
  {
    number: '03',
    title: 'Roasting',
    subtitle: 'Cast-Iron Slow Heat',
    description: 'Hand-stirred in heavy iron kadais over controlled embers to unlock essential oils.',
    icon: Flame,
    color: '#7B1F1F',
  },
  {
    number: '04',
    title: 'Grinding',
    subtitle: 'Cold Coarse Ground',
    description: 'Stone-milled at low speeds to prevent thermal degradation of aromatic compounds.',
    icon: RefreshCw,
    color: '#3A2417',
  },
  {
    number: '05',
    title: 'Packing',
    subtitle: 'Amber Glass Jars',
    description: 'Sealed in UV-resistant glass jars with unrefined parchment seals for peak freshness.',
    icon: PackageCheck,
    color: '#7B1F1F',
  },
  {
    number: '06',
    title: 'Delivered',
    subtitle: 'Shipped Fresh Weekly',
    description: 'Dispatched within 48 hours of grinding straight to your doorstep across India.',
    icon: Truck,
    color: '#5E7D43',
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#F6F1E7] border-t border-[#3A2417]/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Badge variant="green" className="mb-4">
            The Craft Journey
          </Badge>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl font-normal text-[#3A2417] leading-tight">
            From Harvest to <span className="italic text-[#7B1F1F]">Your Table</span>
          </h2>
          <p className="text-sm sm:text-base text-[#3A2417]/75 font-sans mt-4 leading-relaxed">
            Six disciplined steps designed to preserve natural aromas, color, and maternal warmth.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-[#3A2417]/15 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.215, 0.61, 0.355, 1] }}
                  className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div>
                    {/* Step Number & Icon Node */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif-luxury text-2xl font-bold text-[#3A2417]/40 group-hover:text-[#7B1F1F] transition-colors">
                        {step.number}
                      </span>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${step.color}15`, color: step.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-serif-luxury text-2xl font-semibold text-[#3A2417] mb-1">
                      {step.title}
                    </h3>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D8A230] block mb-3">
                      {step.subtitle}
                    </span>
                    <p className="text-xs text-[#3A2417]/75 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#3A2417]/10 flex items-center gap-1.5 text-[10px] uppercase font-semibold text-[#3A2417]/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Verified Step
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
