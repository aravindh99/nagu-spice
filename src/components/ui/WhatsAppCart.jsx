import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export function WhatsAppCart() {
  const { totalItems, totalPrice, clearCart, generateWhatsAppUrl } = useCart();

  if (totalItems === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-5 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 z-50 max-w-md w-[calc(100%-2rem)] sm:w-full bg-[#7B1F1F] text-[#E5DFD3] p-3.5 sm:p-4 rounded-full shadow-2xl border border-[#D8A230]/40 flex items-center justify-between gap-4 backdrop-blur-xl"
      >
        {/* Left: Clear X Button + Items Count + Price */}
        <div className="flex items-center gap-3">
          {/* X Mark to Clear All Items */}
          <button
            onClick={clearCart}
            aria-label="Clear all selected items"
            className="w-7 h-7 rounded-full bg-white/15 text-[#E5DFD3] hover:text-[#7B1F1F] hover:bg-[#E5DFD3] flex items-center justify-center transition-colors cursor-pointer"
            title="Clear All Items"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-8 h-8 rounded-full bg-[#D8A230]/25 text-[#D8A230] flex items-center justify-center font-bold relative">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#E5DFD3] block font-sans leading-tight">
              {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
            </span>
            <span className="text-xs sm:text-sm font-serif font-semibold text-[#D8A230] leading-tight block">
              Total: ₹{totalPrice}
            </span>
          </div>
        </div>

        {/* Right: Send Button in Gold */}
        <a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider bg-[#D8A230] text-[#7B1F1F] px-5 py-2.5 rounded-full hover:bg-[#EBB84D] transition-colors shadow-md whitespace-nowrap"
        >
          Send
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
}
