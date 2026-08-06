import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'nagus_spice_cart_v1';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Error loading cart from localStorage:', e);
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart to localStorage:', e);
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev[product.id];
      const count = existing ? existing.count + 1 : 1;
      return {
        ...prev,
        [product.id]: { product, count },
      };
    });
  };

  const updateCount = (productId, delta) => {
    setCart((prev) => {
      const existing = prev[productId];
      if (!existing) return prev;

      const newCount = existing.count + delta;
      if (newCount <= 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }

      return {
        ...prev,
        [productId]: { ...existing, count: newCount },
      };
    });
  };

  const clearCart = () => setCart({});

  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.count, 0);

  const totalPrice = Object.values(cart).reduce((sum, item) => {
    const numericPrice = parseInt(item.product.price.replace(/[^\d]/g, ''), 10) || 0;
    return sum + numericPrice * item.count;
  }, 0);

  const generateWhatsAppUrl = (customMessage = '') => {
    const phone = '916379592047';
    const items = Object.values(cart);

    if (items.length === 0) {
      const msg = customMessage || "Hello Nagu's Spice House! I would like to place an order.";
      return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    }

    let text = `Nagu's Spice House - Order Details:\n\n`;
    items.forEach(({ product, count }) => {
      const priceNum = parseInt(product.price.replace(/[^\d]/g, ''), 10) || 0;
      text += `${product.name} (${product.weight}) x ${count} - Rs.${priceNum * count}\n`;
    });

    text += `\nTotal Amount: Rs.${totalPrice}\n\nPlease confirm availability and delivery details. Thank you!`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCount,
        clearCart,
        totalItems,
        totalPrice,
        generateWhatsAppUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
