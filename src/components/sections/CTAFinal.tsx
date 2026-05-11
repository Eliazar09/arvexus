'use client';

import Link from 'next/link';
import { MagneticLink } from '@/components/primitives/MagneticLink';
import { Reveal } from '@/components/primitives/RevealText';

export function CTAFinal() {
  return (
    <section
      className="section relative overflow-hidden bg-ink"
      aria-label="Chamada para ação"
    >
      {/* Grain pesado */}
      <div aria-hidden="true" className="noise-heavy" />

      {/* Red glow aura atrás do botão */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgb(var(--red-glow) / 0.2) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10 text-center">
        <Reveal>
          <h2
            className="font-display font-light text-paper leading-[0.88] tracking-tight mb-12"
            style={{ fontSize: 'var(--fs-mega)' }}
          >
            Vamos construir
            <br />
            algo{' '}
            <em
              className="not-italic italic text-red"
              style={{ fontVariationSettings: '"SOFT" 100' }}
            >
              memorável.
            </em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <MagneticLink strength={0.4}>
            <Link
              href="/contato"
              className="relative inline-flex items-center gap-4 font-mono text-base uppercase tracking-widest bg-red text-paper px-12 py-6 hover:bg-red-deep transition-colors duration-300 active:scale-[0.98]"
              data-cursor-label="agendar"
            >
              <span>Agendar conversa →</span>
              {/* Red glow */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 blur-[80px] bg-red-glow/30"
              />
            </Link>
          </MagneticLink>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="mt-8 font-mono text-xs text-paper-soft/40 uppercase tracking-widest">
            Conversa gratuita · Sem compromisso · Resposta em até 24h
          </p>
        </Reveal>
      </div>
    </section>
  );
}
