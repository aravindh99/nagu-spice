import React from 'react';

export function Badge({ children, variant = 'turmeric', className = '' }) {
  const variantStyles = {
    turmeric: 'bg-[#D8A230]/15 text-[#3A2417] border-[#D8A230]/40',
    green: 'bg-[#5E7D43]/15 text-[#3A2417] border-[#5E7D43]/40',
    red: 'bg-[#7B1F1F]/15 text-[#7B1F1F] border-[#7B1F1F]/40',
    neutral: 'bg-[#3A2417]/5 text-[#3A2417]/80 border-[#3A2417]/15',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border backdrop-blur-sm ${variantStyles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 animate-pulse" />
      {children}
    </span>
  );
}
