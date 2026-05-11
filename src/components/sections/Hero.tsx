'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { MagneticLink } from '@/components/primitives/MagneticLink';
import { Bucket } from '@/components/ui/bucket';

const LineWaves = dynamic(() => import('@/components/LineWaves'), {
  ssr: false,
  loading: () => null,
});

const ease = [0.16, 1, 0.3, 1] as const;

function HeroWord({
  word,
  delay,
  className = '',
  style,
}: {
  word: string;
  delay: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span className="overflow-hidden inline-block">
      <motion.span
        className={`inline-block ${className}`}
        style={style}
        initial={{ y: '110%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 1.0, delay, ease }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-ink"
      aria-label="Seção principal"
    >
      {/* LineWaves — fundo WebGL */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.18}
          color1="#ffffff"
          color2="#f70808"
          color3="#8f0505"
          enableMouseInteraction
          mouseInfluence={2}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgb(8 8 9 / 0.65) 0%, rgb(8 8 9 / 0.38) 50%, rgb(8 8 9 / 0.78) 100%)',
        }}
      />

      <div className="container relative z-10 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">

          {/* ── Left: copy ── */}
          <div>
            {/* Label */}
            <motion.p
              className="section-label text-paper-soft/45 mb-10"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease }}
            >
              Boutique tech — Boa Vista, RR
            </motion.p>

            {/* ── Headline: serviços em cores ── */}
            <h1 className="leading-[0.88] tracking-tight mb-3">
              {/* SITES — vermelho, enorme */}
              <div
                className="flex flex-wrap gap-x-[0.15em]"
                style={{ fontSize: 'clamp(2.5rem, 9vw, 9.5rem)' }}
              >
                <HeroWord
                  word="SITES"
                  delay={0.2}
                  className="font-display font-extrabold"
                  style={{ color: '#e63946' }}
                />
              </div>

              {/* AUTOMAÇÃO — branco, menor */}
              <div
                className="flex flex-wrap gap-x-[0.15em]"
                style={{ fontSize: 'clamp(1.4rem, 4.5vw, 4.8rem)' }}
              >
                <HeroWord
                  word="AUTOMAÇÃO"
                  delay={0.3}
                  className="font-display font-light"
                  style={{ color: '#f5f3ee' }}
                />
              </div>

              {/* SISTEMAS — preto fosco (outline) */}
              <div
                className="flex flex-wrap gap-x-[0.15em]"
                style={{ fontSize: 'clamp(1.6rem, 5.5vw, 6.2rem)' }}
              >
                <HeroWord
                  word="SISTEMAS"
                  delay={0.4}
                  className="font-display font-extrabold"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1.5px rgb(245 243 238 / 0.28)',
                  }}
                />
              </div>

              {/* que vendem. */}
              <div
                className="flex flex-wrap gap-x-[0.22em] mt-1"
                style={{ fontSize: 'clamp(1.2rem, 3.5vw, 3.8rem)' }}
              >
                <HeroWord word="que" delay={0.5} className="font-display font-light text-paper" />
                <HeroWord
                  word="vendem."
                  delay={0.58}
                  className="font-display font-extrabold"
                  style={{ color: '#e63946' }}
                />
              </div>
            </h1>

            {/* Linha de apoio */}
            <motion.div
              className="flex flex-wrap gap-x-[0.2em] mb-10"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.8 }}
            >
              {['Construídos', 'com', 'cuidado', 'obsessivo.'].map((w, i) => (
                <HeroWord
                  key={w}
                  word={w}
                  delay={0.88 + i * 0.07}
                  className="font-display font-light text-paper-soft/50"
                />
              ))}
            </motion.div>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-paper-dim leading-relaxed mb-12 max-w-[50ch]"
              style={{ fontSize: 'var(--fs-lead)' }}
            >
              Sites profissionais, automação inteligente e sistemas web
              entregados com padrão premium em Boa Vista — RR.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.14, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-5"
            >
              <MagneticLink>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest bg-red text-paper px-10 py-5 hover:bg-red-deep transition-colors duration-300 active:scale-[0.98]"
                  data-cursor-label="agendar"
                >
                  Agendar conversa
                  <ArrowRight size={14} />
                </Link>
              </MagneticLink>

              <Link
                href="/projetos"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper-soft hover:text-paper transition-colors duration-300"
              >
                Ver projetos
                <span className="block w-0 h-px bg-paper group-hover:w-8 transition-all duration-500" />
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Bucket ── */}
          <div className="hidden lg:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: 48, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Bucket />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-paper-soft/40"
        />
        <span className="section-label text-paper-soft/40 text-[9px]">ROLE</span>
      </motion.div>
    </section>
  );
}
