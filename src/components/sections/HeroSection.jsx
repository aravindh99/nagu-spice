import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, []);

  return (
    <section className="relative w-full bg-[#E5DFD3] pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      {/* 100% Full-Width Clean Video Player (Zero text overlay) */}
      <div className="relative w-full h-[60vh] sm:h-[75vh] min-h-[420px] max-h-[750px] overflow-hidden bg-[#E5DFD3]">
        <video
          ref={videoRef}
          src="/nagu_spicemix.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Below Video — Purely Homemade */}
      <div className="max-w-4xl mx-auto px-6 pt-10 sm:pt-14 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] tracking-tight text-[#231714]"
        >
          <span className="block font-normal text-[#231714]">Purely</span>
          <span className="block italic text-[#7B1F1F]">Homemade</span>
        </motion.h1>
      </div>
    </section>
  );
}
