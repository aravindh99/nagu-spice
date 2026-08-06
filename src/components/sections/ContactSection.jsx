import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PhoneCall, Send, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    selectedSpice: 'Idly Podi (250g)',
    quantity: '1',
    deliveryAddress: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        selectedSpice: 'Idly Podi (250g)',
        quantity: '1',
        deliveryAddress: '',
      });
    }, 4000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Nagu's Spice House! I would like to place an order for artisanal masalas.`
  );

  return (
    <section id="contact" className="py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#F6F1E7] border-t border-[#3A2417]/10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Direct WhatsApp & Call Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          <Badge variant="red" className="mb-4">
            Direct Kitchen Contact
          </Badge>
          
          <h2 className="font-serif-luxury text-4xl sm:text-6xl font-normal text-[#3A2417] leading-tight mb-6">
            Order Fresh <span className="italic text-[#7B1F1F]">Directly From Us</span>
          </h2>

          <p className="text-base text-[#3A2417]/80 font-sans leading-relaxed mb-8">
            Prefer chatting on WhatsApp or calling our kitchen? We take custom small-batch orders and ship fresh across India.
          </p>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col space-y-4 w-full mb-10">
            <a
              href={`https://wa.me/919876543210?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl flex items-center justify-between border-emerald-600/30 hover:border-emerald-600 hover:bg-emerald-600/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600/15 flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#3A2417]">Chat on WhatsApp</h4>
                  <span className="text-xs text-[#3A2417]/60">+91 98765 43210</span>
                </div>
              </div>
              <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
                Instant Chat →
              </span>
            </a>

            <a
              href="tel:+919876543210"
              className="glass-panel p-5 rounded-2xl flex items-center justify-between hover:border-[#3A2417]/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3A2417]/10 flex items-center justify-center text-[#3A2417] group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#3A2417]">Call Kitchen Direct</h4>
                  <span className="text-xs text-[#3A2417]/60">Mon - Sat: 9 AM - 7 PM</span>
                </div>
              </div>
              <span className="text-xs uppercase font-bold text-[#3A2417]/80 tracking-wider">
                Call Now →
              </span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#3A2417]/70 border-t border-[#3A2417]/10 pt-6 w-full">
            <MapPin className="w-4 h-4 text-[#D8A230]" />
            <span>Nagu Amma's Kitchen, Malleshwaram, Bengaluru - 560003</span>
          </div>
        </motion.div>

        {/* Right Column: Order Form (Local React State) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
          className="lg:col-span-7 glass-panel p-8 sm:p-12 rounded-3xl shadow-2xl border border-[#3A2417]/15 relative"
        >
          <div className="mb-8">
            <h3 className="font-serif-luxury text-3xl font-semibold text-[#3A2417] mb-2">
              Reserve Your Fresh Batch
            </h3>
            <p className="text-xs sm:text-sm text-[#3A2417]/70 font-sans">
              Fill in your details to reserve fresh grinding for this week's dispatch.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center flex flex-col items-center justify-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-600/15 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif-luxury text-3xl font-semibold text-[#3A2417]">
                Order Reservation Received!
              </h4>
              <p className="text-sm text-[#3A2417]/80 max-w-md font-sans">
                Thank you! We'll confirm your fresh batch order via WhatsApp/SMS shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#3A2417]/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lakshmi Narayan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/70 border border-[#3A2417]/15 text-[#3A2417] placeholder-[#3A2417]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#D8A230]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#3A2417]/80 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/70 border border-[#3A2417]/15 text-[#3A2417] placeholder-[#3A2417]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#D8A230]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#3A2417]/80 mb-2">
                    Select Spice / Masala *
                  </label>
                  <select
                    value={formData.selectedSpice}
                    onChange={(e) => setFormData({ ...formData, selectedSpice: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/70 border border-[#3A2417]/15 text-[#3A2417] text-sm focus:outline-none focus:ring-2 focus:ring-[#D8A230]"
                  >
                    <option>Idly Podi (250g Glass Jar) - ₹345</option>
                    <option>Garam Masala (100g Glass Jar) - ₹290</option>
                    <option>Thanjavur Sambar Powder (250g Glass Jar) - ₹265</option>
                    <option>Royal Biriyani Masala (150g Glass Jar) - ₹380</option>
                    <option>Assorted Heirloom Sample Pack - ₹890</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#3A2417]/80 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/70 border border-[#3A2417]/15 text-[#3A2417] text-sm focus:outline-none focus:ring-2 focus:ring-[#D8A230]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-[#3A2417]/80 mb-2">
                  Delivery Address &amp; Custom Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="Enter city, pincode, or spice customisation requests..."
                  value={formData.deliveryAddress}
                  onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/70 border border-[#3A2417]/15 text-[#3A2417] placeholder-[#3A2417]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#D8A230]"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full" icon={Send}>
                Submit Batch Order
              </Button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
