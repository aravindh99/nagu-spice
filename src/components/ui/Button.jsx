import React from 'react';
import { motion } from 'framer-motion';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold tracking-wider uppercase transition-all duration-300 rounded-full cursor-pointer relative overflow-hidden group';

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-xs sm:text-sm',
    lg: 'px-9 py-4 text-sm sm:text-base tracking-widest',
  };

  const variantStyles = {
    primary: 'bg-[#3A2417] text-[#F6F1E7] shadow-lg hover:shadow-2xl hover:bg-[#581414] border border-[#3A2417]',
    accent: 'bg-[#D8A230] text-[#3A2417] font-bold shadow-md hover:bg-[#EBB84D] border border-[#D8A230]',
    outline: 'border border-[#3A2417]/40 text-[#3A2417] hover:border-[#3A2417] hover:bg-[#3A2417] hover:text-[#F6F1E7]',
    ghost: 'text-[#3A2417] hover:bg-[#3A2417]/5',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {Icon && (
          <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
      {/* Shimmer sweep effect */}
      <span className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
    </motion.button>
  );
}
