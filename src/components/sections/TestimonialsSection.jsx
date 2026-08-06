import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Badge } from '../ui/Badge';

const REVIEWS = [
  {
    id: 1,
    quote: "The Gunpowder Podi took me straight back to my grandmother’s kitchen in Mysuru. The sesame aroma and slow-roasted lentil crunch are unlike anything bought in stores.",
    author: "Priya Ramachandran",
    location: "Bengaluru, KA",
    product: "Gunpowder Podi",
    rating: 5,
    rotateAngle: -2,
  },
  {
    id: 2,
    quote: "You can immediately tell their Garam Masala is stone-milled. A single pinch elevates our Sunday mutton curry with rich whole-spice warmth instead of harsh heat.",
    author: "Chef Vikram Menon",
    location: "Chennai, TN",
    product: "Garam Masala",
    rating: 5,
    rotateAngle: 2,
  },
  {
    id: 3,
    quote: "Unbelievably fresh Sambar powder. My children ask for seconds every morning. Nagu’s Spice House has earned a permanent spot in our pantry.",
    author: "Ananya Deshmukh",
    location: "Mumbai, MH",
    product: "Thanjavur Sambar Powder",
    rating: 5,
    rotateAngle: -1.5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#F6F1E7] border-t border-[#3A2417]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Badge variant="turmeric" className="mb-4">
            Words of Warmth
          </Badge>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl font-normal text-[#3A2417] leading-tight">
            Treasured by <span className="italic text-[#7B1F1F]">Home Cooks</span>
          </h2>
          <p className="text-sm sm:text-base text-[#3A2417]/75 font-sans mt-4 leading-relaxed">
            Real stories from families across India who cherish authentic, unadulterated flavor.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 50, rotate: rev.rotateAngle * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: rev.rotateAngle }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
              className="glass-panel p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-500 hover:rotate-0 hover:-translate-y-2 relative group"
            >
              <Quote className="w-10 h-10 text-[#D8A230]/30 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D8A230] text-[#D8A230]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif-luxury text-xl sm:text-2xl text-[#3A2417] italic leading-relaxed mb-8">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-[#3A2417]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#3A2417]">{rev.author}</h4>
                  <span className="text-xs text-[#3A2417]/60 block">{rev.location}</span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#7B1F1F] bg-[#7B1F1F]/10 px-3 py-1 rounded-full">
                  {rev.product}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
