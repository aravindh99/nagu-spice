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
  const base = 'inline-flex items-center justify-center font-sans font-semibold tracking-wider uppercase transition-all duration-300 rounded-full cursor-pointer';

  const sizes = {
    sm: 'px-5 py-2.5 text-[10px]',
    md: 'px-7 py-3 text-[11px]',
    lg: 'px-8 py-3.5 text-xs',
  };

  const variants = {
    primary: 'bg-[#7B1F1F] text-[#E5DFD3] hover:bg-[#581414] border border-[#7B1F1F]',
    outline: 'border border-[#7B1F1F]/40 text-[#7B1F1F] hover:bg-[#7B1F1F] hover:text-[#E5DFD3]',
    light: 'bg-[#E5DFD3] text-[#231714] hover:bg-[#DDD7CB] border border-[#231714]/10',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-3.5 h-3.5" />}
      </span>
    </motion.button>
  );
}
