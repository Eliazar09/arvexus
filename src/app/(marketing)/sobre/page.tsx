import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/primitives/RevealText';
import { MagneticLink } from '@/components/primitives/MagneticLink';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Arvex — a technology and creative boutique based in New York, NY. Our story, principles, and the people behind the work.',
};

const principles = [
  {
    number: '01',
    title: 'Obsession with quality',
    description: 'Every detail matters. A wrong pixel, an unnecessary line of code, a color not in the system — it all matters. Our standard doesn\'t have a bad day.',
  },
  {
    number: '02',
    title: 'Total transparency',
    description: 'You know what is being done, why, and when it will be ready. No scope surprises, no promises we don\'t deliver.',
  },
  {
    number: '03',
    title: 'Technology serving the business',
    description: 'We don\'t use technology because it\'s new or cool. We use it because it solves a real problem for your business with the least possible friction.',
  },
  {
    number: '04',
    title: 'Long-term relationship',
    description: 'We prefer fewer clients with more depth over many superficial projects. We grow when our clients grow.',
  },
];

const timeline = [
  { year: '2019', event: 'First project — website for a medical clinic in New York' },
  { year: '2020', event: 'Expansion into visual identity design and first e-commerce sites' },
  { year: '2021', event: 'Launch of automation and systems projects with n8n' },
  { year: '2022', event: 'First clients from other regions in the USA and globally' },
  { year: '2023', event: 'Added video editing and social design services' },
  { year: '2024', event: 'Agency rebranding and launch of this new website' },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[55vh] flex items-end border-b border-white/[0.06]">
        <div className="container pb-16 pt-[120px]">
          <Reveal>
            <p className="section-label mb-6">ABOUT</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-light leading-tight" style={{ fontSize: 'var(--fs-h1)' }}>
              One boutique.
              <br />
              <em className="italic text-paper-dim">Six disciplines.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Manifesto longo */}
      <section className="section border-b border-white/[0.06]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="section-label mb-6">WHO WE ARE</p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="font-sans text-paper-dim leading-relaxed mb-6" style={{ fontSize: 'var(--fs-lead)' }}>
                  Arvex was born in New York, NY — not by accident, but out of conviction that quality of execution has no address. We are proof that it is possible to deliver internationally benchmarked work.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="font-sans text-paper-dim leading-relaxed mb-6" style={{ fontSize: 'var(--fs-lead)' }}>
                  We are not a 50-person agency with massive accounts and rigid processes. We are a boutique — small by choice, meticulous by principle. Every project goes through a lean team that deeply understands your business.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-sans text-paper-dim leading-relaxed" style={{ fontSize: 'var(--fs-lead)' }}>
                  We integrate the six disciplines — websites, automation, e-commerce, identity, video, and social — because we believe the best digital brand is built with consistency across all touchpoints, not outsourced in pieces to different agencies.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section className="section border-b border-white/[0.06]">
        <div className="container">
          <Reveal>
            <p className="section-label mb-12">OUR PRINCIPLES</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
            {principles.map((p, i) => (
              <Reveal key={p.number} delay={i * 0.08}>
                <div className="bg-ink p-8">
                  <span className="font-mono text-xs text-paper-soft/30 block mb-4">{p.number}</span>
                  <h3 className="font-display text-2xl font-light text-paper mb-4">{p.title}</h3>
                  <p className="font-sans text-sm text-paper-dim leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="section border-b border-white/[0.06]">
        <div className="container">
          <Reveal>
            <p className="section-label mb-12">TIMELINE</p>
          </Reveal>
          <div className="flex flex-col gap-0">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.06}>
                <div className="grid grid-cols-12 gap-8 border-t border-white/[0.06] py-6">
                  <span className="col-span-3 md:col-span-2 font-mono text-sm text-red">{item.year}</span>
                  <p className="col-span-9 md:col-span-10 font-sans text-paper-dim">{item.event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-display font-light text-paper mb-6" style={{ fontSize: 'var(--fs-h2)' }}>
              Let's work together?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <MagneticLink>
              <Link
                href="/contato"
                className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest bg-red text-paper px-8 py-4 hover:bg-red-deep transition-colors"
              >
                Schedule a talk →
              </Link>
            </MagneticLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
