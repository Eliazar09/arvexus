'use client';

import dynamic from 'next/dynamic';
import { Reveal } from '@/components/primitives/RevealText';
import { WavePath } from '@/components/ui/wave-path';

const LayeredText = dynamic(
  () => import('@/components/ui/layered-text').then((m) => ({ default: m.LayeredText })),
  { ssr: false, loading: () => null }
);

export function Manifesto() {
  return (
    <section className="section border-b border-white/[0.06]" aria-label="Manifesto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Label */}
          <div className="md:col-span-3">
            <Reveal>
              <p className="section-label">02 / MANIFESTO</p>
            </Reveal>
          </div>

          {/* Texto */}
          <div className="md:col-span-9">
            <Reveal delay={0.15}>
              <blockquote className="font-display font-light italic leading-tight" style={{ fontSize: 'var(--fs-h2)' }}>
                Acreditamos que tecnologia bem-feita é{' '}
                <em
                  className="not-italic"
                  style={{
                    fontStyle: 'italic',
                    fontVariationSettings: '"SOFT" 100, "opsz" 144',
                    color: 'rgb(var(--paper))',
                  }}
                >
                  invisível
                </em>{' '}
                e marca bem-feita é{' '}
                <em
                  className="not-italic"
                  style={{
                    fontStyle: 'italic',
                    fontVariationSettings: '"SOFT" 100, "opsz" 144',
                    color: 'rgb(var(--red))',
                  }}
                >
                  inevitável.
                </em>
                <br />
                Construímos as duas coisas, no mesmo lugar, com o mesmo cuidado.
              </blockquote>
            </Reveal>

            {/* Wave divider interativo */}
            <Reveal delay={0.3}>
              <div className="flex mt-16 text-paper/20">
                <WavePath />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
