'use client';

import { motion } from 'motion/react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function WhatsAppButton() {
  const pulseRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!pulseRef.current) return;
    const tween = gsap.to(pulseRef.current, {
      scale: 1.35,
      opacity: 0,
      duration: 1.8,
      ease: 'power2.out',
      repeat: -1,
    });
    return () => { tween.kill(); };
  }, []);

  return (
    <motion.a
      href="https://wa.me/5595981075842"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 group"
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
    >
      {/* Label que aparece no hover */}
      <motion.span
        initial={{ opacity: 0, x: 8 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden md:block font-mono text-[10px] uppercase tracking-widest text-paper bg-ink/90 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none"
      >
        Falar agora
      </motion.span>

      {/* Botão círculo verde */}
      <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgb(37_211_102_/_0.4)]">
        {/* Pulse ring — GSAP */}
        <span
          ref={pulseRef}
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-50"
        />
        {/* WhatsApp SVG */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="white"
          aria-hidden="true"
          className="relative z-10"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.67 4.784 1.836 6.773L2 30l7.418-1.808A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 01-5.898-1.612l-.424-.25-4.4 1.072 1.1-4.28-.278-.44A11.558 11.558 0 014.4 16c0-6.396 5.204-11.6 11.6-11.6S27.6 9.604 27.6 16 22.396 27.6 16 27.6zm6.354-8.668c-.348-.174-2.058-1.016-2.378-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.102 1.364-.202.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.062-1.934-2.41-.202-.348-.022-.536.152-.708.156-.156.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.086-.174-.784-1.888-1.074-2.588-.282-.68-.57-.588-.784-.598l-.668-.012c-.232 0-.61.086-.928.434-.32.348-1.218 1.19-1.218 2.9s1.246 3.364 1.42 3.596c.174.232 2.452 3.744 5.942 5.252.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.058-.842 2.348-1.654.29-.812.29-1.508.204-1.654-.086-.146-.32-.232-.668-.406z" />
        </svg>
      </div>
    </motion.a>
  );
}

