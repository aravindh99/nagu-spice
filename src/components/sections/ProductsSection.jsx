import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CATEGORIES = [
  'All',
  'Traditional Podis',
  'Herbal & Keerai',
  'Masalas & Curries',
  'Rice & Speciality',
  'Health & Wellness',
];

const ALL_PRODUCTS = [
  // Traditional Podis
  { id: '1', name: 'Idly Podi', category: 'Traditional Podis', price: '₹100', weight: '200g', desc: 'Classic roasted lentil & chilli podi for idli & dosa.' },
  { id: '2', name: 'Rasam Podi', category: 'Traditional Podis', price: '₹100', weight: '200g', desc: 'Aromatic pepper & cumin blend for traditional spicy rasam.' },
  { id: '3', name: 'Soup Podi', category: 'Traditional Podis', price: '₹100', weight: '200g', desc: 'Warm herbal soup spice mix for soothing digestion.' },
  { id: '4', name: 'Parupu Podi', category: 'Traditional Podis', price: '₹120', weight: '200g', desc: 'Rich roasted toor dal & ghee rice mix podi.' },
  { id: '5', name: 'Kollu Parupu Podi', category: 'Traditional Podis', price: '₹120', weight: '200g', desc: 'Nutritious roasted horsegram lentil powder.' },
  { id: '7', name: 'Verkadalai Podi', category: 'Traditional Podis', price: '₹120', weight: '200g', desc: 'Crunchy roasted peanut podi with red chillies.' },
  { id: '21', name: 'Karuvapilai Podi', category: 'Traditional Podis', price: '₹100', weight: '200g', desc: 'Iron-rich roasted curry leaf podi for rice & tiffin.' },
  { id: '22', name: 'Pudina Podi', category: 'Traditional Podis', price: '₹100', weight: '200g', desc: 'Refreshing sun-dried mint leaf spice podi.' },
  { id: '25', name: 'Pirandai Nellikai Podi', category: 'Traditional Podis', price: '₹100', weight: '200g', desc: 'Traditional bone-health Cissus & Amla herbal podi.' },

  // Herbal & Keerai Podis
  { id: '6', name: 'Murungai Keerai Sundaka Podi', category: 'Herbal & Keerai', price: '₹120', weight: '200g', desc: 'Moringa & turkey berry medicinal herbal rice podi.' },
  { id: '26', name: 'Palak Keerai Podi', category: 'Herbal & Keerai', price: '₹100', weight: '200g', desc: 'Nutritious spinach leaf & spice rice podi.' },
  { id: '27', name: 'Vallarai Keerai Podi', category: 'Herbal & Keerai', price: '₹100', weight: '200g', desc: 'Gotu Kola memory-boosting herbal rice mix podi.' },
  { id: '28', name: 'Thuduvalai Podi', category: 'Herbal & Keerai', price: '₹100', weight: '200g', desc: 'Traditional climbing brinjal herb podi for immunity.' },
  { id: '29', name: 'Modakathan Podi', category: 'Herbal & Keerai', price: '₹100', weight: '200g', desc: 'Balloon vine joint-care herbal rice podi.' },
  { id: '31', name: 'Manathakali Keerai Podi', category: 'Herbal & Keerai', price: '₹100', weight: '200g', desc: 'Black nightshade leaf soothing herbal podi.' },
  { id: '32', name: 'Modavattukal Soup Podi', category: 'Herbal & Keerai', price: '₹100', weight: '200g', desc: 'Fern-root herbal joint wellness soup powder.' },
  { id: '33', name: 'Valaipoo Soup Podi', category: 'Herbal & Keerai', price: '₹100', weight: '200g', desc: 'Nutritional banana flower herbal soup powder.' },

  // Masalas & Curries
  { id: '8', name: 'Garam Masala', category: 'Masalas & Curries', price: '₹140', weight: '200g', desc: 'Hand-roasted whole 14 spice aromatic garam masala.' },
  { id: '9', name: 'Biriyani Masala', category: 'Masalas & Curries', price: '₹140', weight: '200g', desc: 'Royal Nizam fragrant whole spice biriyani blend.' },
  { id: '10', name: 'Pulao Masala', category: 'Masalas & Curries', price: '₹140', weight: '200g', desc: 'Subtle aromatic mild spice mix for ghee pulao.' },
  { id: '11', name: 'Veg Kabab 65 Masala', category: 'Masalas & Curries', price: '₹70', weight: '100g', desc: 'Crispy South-Indian style Kabab 65 fry masala.' },
  { id: '12', name: 'Pav Bhaji Masala', category: 'Masalas & Curries', price: '₹70', weight: '100g', desc: 'Tangy roasted whole spice Pav Bhaji masala.' },
  { id: '13', name: 'Chole Masala', category: 'Masalas & Curries', price: '₹70', weight: '100g', desc: 'Rich North-Indian style chickpea curry masala.' },
  { id: '16', name: 'Sambar Powder', category: 'Masalas & Curries', price: '₹150', weight: '200g', desc: 'Authentic Byadgi chilli & coriander sambar powder.' },
  { id: '17', name: 'Tifin Sambar Powder', category: 'Masalas & Curries', price: '₹150', weight: '200g', desc: 'Hotel-style fragrant tiffin sambar powder.' },
  { id: '18', name: 'Kara Kuzlambu Powder', category: 'Masalas & Curries', price: '₹150', weight: '200g', desc: 'Spicy tangy Chettinad Kara Kuzhambu masala.' },
  { id: '19', name: 'Kurma Kuzlambu Powder', category: 'Masalas & Curries', price: '₹150', weight: '200g', desc: 'Aromatic coconut & poppy seed kurma masala.' },

  // Rice & Speciality Mixes
  { id: '14', name: 'Bisibelebath Powder', category: 'Rice & Speciality', price: '₹70', weight: '100g', desc: 'Karnataka style roasted spice Bisibelebath powder.' },
  { id: '15', name: 'Vangi Bath Powder', category: 'Rice & Speciality', price: '₹70', weight: '100g', desc: 'Aromatic brinjal rice Vangi Bath spice powder.' },
  { id: '20', name: 'Puliyogare Powder', category: 'Rice & Speciality', price: '₹120', weight: '200g', desc: 'Tangy tamarind & sesame temple-style rice mix.' },
  { id: '23', name: 'Thenga Sadam Podi', category: 'Rice & Speciality', price: '₹100', weight: '200g', desc: 'Roasted coconut & dal spiced rice podi.' },
  { id: '24', name: 'Raw Manga Sadam Podi', category: 'Rice & Speciality', price: '₹100', weight: '200g', desc: 'Tangy dry green mango spiced rice podi.' },
  { id: '30', name: 'Vendaya Sadam Podi', category: 'Rice & Speciality', price: '₹100', weight: '200g', desc: 'Cooling roasted fenugreek rice podi.' },
  { id: '35', name: 'Vepam Poo Sadam Podi', category: 'Rice & Speciality', price: '₹100', weight: '200g', desc: 'Medicinal neem flower digestive rice podi.' },
  { id: '36', name: 'Senakilangu Kola Urundai Podi', category: 'Rice & Speciality', price: '₹100', weight: '200g', desc: 'Yam kola urundai spice fry powder.' },

  // Health & Wellness
  { id: '34', name: 'Avarampoo Chai Masala Podi', category: 'Health & Wellness', price: '₹100', weight: '200g', desc: 'Tanner cassia flower herbal tea masala powder.' },
  { id: '37', name: 'Multigrain Millets Dosa Mix', category: 'Health & Wellness', price: '₹100', weight: '200g', desc: 'Healthy 9-millet & pulse instant dosa batter mix.' },
  { id: '38', name: 'Health Kanji Mix', category: 'Health & Wellness', price: '₹100', weight: '200g', desc: 'Traditional 24-ingredient sprouted health drink mix.' },
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { cart, addToCart, updateCount, generateWhatsAppUrl } = useCart();

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 sm:py-36 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D8A230] font-sans font-semibold block mb-3">
            Purely Homemade Price List
          </span>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-[#231714] font-light leading-[1.05]">
            Nagu’s <em className="italic text-[#7B1F1F]">Podi &amp; Masala</em> Collection
          </h2>
          <p className="text-xs sm:text-sm text-[#231714]/65 font-sans mt-3 max-w-xl leading-relaxed">
            38 artisanal, small-batch homemade podis, medicinal herbal mixes, rice powders &amp; gourmet masalas.
          </p>
        </motion.div>

        {/* Search & Category Filter Controls */}
        <div className="mb-12 space-y-6">
          {/* Search Input */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-[#231714]/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by podi name (e.g. Vallarai, Keerai, Garam)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#231714]/[0.04] border border-[#231714]/15 rounded-full text-xs font-sans text-[#231714] placeholder-[#231714]/40 focus:outline-none focus:border-[#7B1F1F] transition-colors"
            />
          </div>

          {/* Category Tabs — Deep Red Royal Theme */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] uppercase tracking-wider font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    active
                      ? 'bg-[#7B1F1F] text-[#E5DFD3] shadow-md'
                      : 'bg-[#7B1F1F]/[0.06] text-[#231714]/75 hover:bg-[#7B1F1F]/15 hover:text-[#7B1F1F]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Count Indicator */}
        <div className="text-xs text-[#231714]/50 font-sans mb-6 tracking-wider">
          Showing {filteredProducts.length} of {ALL_PRODUCTS.length} Homemade Products
        </div>

        {/* Product List — Editorial Vertical Items */}
        <div className="space-y-0 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => {
              const cartItem = cart[product.id];
              const count = cartItem ? cartItem.count : 0;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.03, 0.3) }}
                  className="group border-t border-[#231714]/10 py-6 sm:py-8 cursor-pointer transition-colors duration-300 hover:bg-[#7B1F1F]/[0.025] -mx-6 sm:-mx-8 px-6 sm:px-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8">
                    {/* Left: Number + Name + Category Tag */}
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-xs text-[#231714]/30 font-sans font-medium tabular-nums min-w-[24px]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-serif text-xl sm:text-3xl text-[#231714] font-normal group-hover:text-[#7B1F1F] transition-colors duration-300">
                            {product.name}
                          </h3>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#D8A230] block mt-1">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Center: Description */}
                    <p className="hidden md:block text-xs sm:text-sm text-[#231714]/60 font-sans max-w-sm leading-relaxed flex-1">
                      {product.desc}
                    </p>

                    {/* Right: Price + Weight + '+ Add' or Deep Red Quantity Controls */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8">
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-xl sm:text-2xl font-medium text-[#231714]">
                          {product.price}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-[#231714]/50 font-sans">
                          / {product.weight}
                        </span>
                      </div>

                      {count > 0 ? (
                        /* Deep Red Quantity Control Pill */
                        <div className="inline-flex items-center bg-[#7B1F1F] text-[#E5DFD3] rounded-full px-2 py-1 shadow-md">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateCount(product.id, -1);
                            }}
                            aria-label="Decrease quantity"
                            className="w-6 h-6 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-bold font-sans tabular-nums text-[#D8A230]">
                            {count}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateCount(product.id, 1);
                            }}
                            aria-label="Increase quantity"
                            className="w-6 h-6 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        /* Deep Red Outline + ADD Button */
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                          }}
                          aria-label={`Add ${product.name} to cart`}
                          className="inline-flex items-center gap-1 text-[11px] uppercase font-bold tracking-wider rounded-full px-4 py-2 border border-[#7B1F1F]/40 text-[#7B1F1F] hover:bg-[#7B1F1F] hover:text-[#E5DFD3] transition-all duration-300 shadow-xs"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Add
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Mobile Description */}
                  <p className="md:hidden mt-2 text-xs text-[#231714]/60 font-sans leading-relaxed pl-10">
                    {product.desc}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Bottom border */}
          <div className="border-t border-[#231714]/10" />
        </div>

        {/* Footer Order Callout */}
        <div className="mt-12 p-8 rounded-2xl bg-[#7B1F1F]/[0.04] border border-[#7B1F1F]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl font-semibold text-[#231714]">
              Need a Custom Bulk Pack or Specific Spice Blend?
            </h4>
            <p className="text-xs text-[#231714]/70 font-sans mt-1">
              Contact Nagu's Kitchen directly at <strong className="text-[#7B1F1F]">6379592047</strong> for fresh batch customization.
            </p>
          </div>
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#E5DFD3] bg-[#7B1F1F] hover:bg-[#581414] rounded-full px-6 py-3 transition-colors duration-300 whitespace-nowrap shadow-md"
          >
            Order via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
