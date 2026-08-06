import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Flame, Check } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SpiceDustCanvas } from '../ui/SpiceDustCanvas';

const PRODUCTS = [
  {
    id: 'idly-podi',
    name: 'Idly Podi',
    tagline: 'Signature Gunpowder Spice Blend',
    price: '₹345',
    weight: '250g Glass Jar',
    description: 'Slow-roasted split chana dal, Guntur red chillies, white sesame, and aromatic curry leaves ground with pure rock salt.',
    accentColor: '#D8A230',
    badge: 'Amma’s Top Seller',
    gridSpan: 'md:col-span-7 lg:col-span-8', // Asymmetric wide hero card
    isDark: false,
    ingredients: ['Guntur Chillies', 'Chana Dal', 'Sesame Seeds', 'Asafoetida'],
  },
  {
    id: 'garam-masala',
    name: 'Garam Masala',
    tagline: 'Whole-Spice Warmth Blend',
    price: '₹290',
    weight: '100g Glass Jar',
    description: '14 hand-selected whole spices including stone-ground mace, black cardamom, and toasted Ceylon cinnamon.',
    accentColor: '#7B1F1F',
    badge: 'Aromatic Reserve',
    gridSpan: 'md:col-span-5 lg:col-span-4', // Asymmetric tall card
    isDark: false,
    ingredients: ['Green Cardamom', 'Mace', 'Cloves', 'Star Anise'],
  },
  {
    id: 'sambar-powder',
    name: 'Sambar Powder',
    tagline: 'Heritage Thanjavur Recipe',
    price: '₹265',
    weight: '250g Glass Jar',
    description: 'Sun-dried Byadgi chillies, coriander seeds, fenugreek, and native turmeric for deep golden broth and rich aroma.',
    accentColor: '#5E7D43',
    badge: 'Sun-Dried Special',
    gridSpan: 'md:col-span-5 lg:col-span-5', // Asymmetric medium card
    isDark: false,
    ingredients: ['Byadgi Chillies', 'Coriander', 'Fenugreek', 'Turmeric'],
  },
  {
    id: 'biriyani-masala',
    name: 'Biriyani Masala',
    tagline: 'Royal Nizam Heirloom Grind',
    price: '₹380',
    weight: '150g Glass Jar',
    description: 'Artisanal royal spice blend with toasted nutmeg, Kashmiri saffron strands, kalpasi (stone flower), and shahi jeera.',
    accentColor: '#D8A230',
    badge: 'Limited Harvest',
    gridSpan: 'md:col-span-7 lg:col-span-7', // Asymmetric dark glass card
    isDark: true,
    ingredients: ['Kashmiri Saffron', 'Kalpasi', 'Shahi Jeera', 'Nutmeg'],
  },
];

export function ProductsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [addedItem, setAddedItem] = useState(null);

  const handleAdd = (id) => {
    setAddedItem(id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <section id="masalas" className="py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#F6F1E7] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Asymmetric Title Alignment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Badge variant="turmeric" className="mb-4">
              Artisanal Pantry
            </Badge>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl font-normal text-[#3A2417] leading-none tracking-tight">
              Small-Batch <span className="italic text-[#7B1F1F] font-light">Masalas &amp; Podis</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#3A2417]/70 max-w-md font-sans leading-relaxed">
            Freshly ground every Monday. No bulk warehousing, no stale shelf life — delivered straight from our kitchen to yours.
          </p>
        </div>

        {/* ASYMMETRIC NON-TEMPLATED GRID (Bento Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {PRODUCTS.map((product, idx) => {
            const isHovered = hoveredCard === product.id;
            const isAdded = addedItem === product.id;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`${product.gridSpan} relative group flex flex-col justify-between p-8 sm:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                  product.isDark
                    ? 'glass-panel-dark text-[#F6F1E7] shadow-2xl hover:shadow-[0_20px_50px_rgba(58,36,23,0.4)]'
                    : 'glass-panel text-[#3A2417] shadow-lg hover:shadow-2xl'
                }`}
              >
                {/* Micro Particle Dust Effect Canvas on Hover */}
                <SpiceDustCanvas active={isHovered} color={product.accentColor} />

                {/* Top Badge Tag & Accent Indicator */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <span
                    className={`text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 rounded-full border ${
                      product.isDark
                        ? 'border-[#D8A230]/30 text-[#D8A230] bg-[#D8A230]/10'
                        : 'border-[#3A2417]/15 text-[#3A2417] bg-[#3A2417]/5'
                    }`}
                  >
                    {product.badge}
                  </span>
                  <span
                    className="w-3 h-3 rounded-full shadow-inner"
                    style={{ backgroundColor: product.accentColor }}
                  />
                </div>

                {/* Content Block */}
                <div className="relative z-10 mb-8">
                  <span
                    className={`text-xs uppercase font-semibold tracking-widest block mb-1 ${
                      product.isDark ? 'text-[#D8A230]' : 'text-[#7B1F1F]'
                    }`}
                  >
                    {product.tagline}
                  </span>
                  <h3
                    className={`font-serif-luxury text-3xl sm:text-4xl font-semibold mb-3 ${
                      product.isDark ? 'text-[#F6F1E7]' : 'text-[#3A2417]'
                    }`}
                  >
                    {product.name}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 font-sans ${
                      product.isDark ? 'text-[#F6F1E7]/80' : 'text-[#3A2417]/80'
                    }`}
                  >
                    {product.description}
                  </p>

                  {/* Ingredient Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {product.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className={`text-[10px] px-2.5 py-1 rounded-md tracking-wider font-medium uppercase ${
                          product.isDark
                            ? 'bg-[#F6F1E7]/10 text-[#F6F1E7]/90'
                            : 'bg-[#3A2417]/5 text-[#3A2417]/70'
                        }`}
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Price & Add CTA */}
                <div className="relative z-10 pt-6 border-t border-current/10 flex items-center justify-between mt-auto">
                  <div>
                    <span
                      className={`text-[10px] uppercase tracking-wider block ${
                        product.isDark ? 'text-[#F6F1E7]/60' : 'text-[#3A2417]/60'
                      }`}
                    >
                      {product.weight}
                    </span>
                    <span
                      className={`text-xl sm:text-2xl font-bold font-serif-luxury ${
                        product.isDark ? 'text-[#D8A230]' : 'text-[#7B1F1F]'
                      }`}
                    >
                      {product.price}
                    </span>
                  </div>

                  <Button
                    variant={product.isDark ? 'accent' : 'primary'}
                    size="sm"
                    onClick={() => handleAdd(product.id)}
                    className="text-xs"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add Jar
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
