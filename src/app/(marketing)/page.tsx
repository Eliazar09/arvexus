import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { ServicesRibbon } from '@/components/sections/ServicesRibbon';
import { Manifesto } from '@/components/sections/Manifesto';
import { ServicesFlow } from '@/components/sections/ServicesFlow';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';

// Lazy — carregam só quando chegam na viewport
const BenefitsSection   = dynamic(() => import('@/components/sections/BenefitsSection').then(m => ({ default: m.BenefitsSection })));
const StackSection      = dynamic(() => import('@/components/sections/StackSection').then(m => ({ default: m.StackSection })));
const ComparisonSection = dynamic(() => import('@/components/sections/ComparisonSection').then(m => ({ default: m.ComparisonSection })));
const Process           = dynamic(() => import('@/components/sections/Process').then(m => ({ default: m.Process })));
const Testimonials      = dynamic(() => import('@/components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const SocialConnect     = dynamic(() => import('@/components/sections/SocialConnect').then(m => ({ default: m.SocialConnect })));
const FAQ               = dynamic(() => import('@/components/sections/FAQ').then(m => ({ default: m.FAQ })));
const CTAFinal          = dynamic(() => import('@/components/sections/CTAFinal').then(m => ({ default: m.CTAFinal })));

const CircularRevealHeading = dynamic(
  () => import('@/components/ui/circular-reveal-heading').then(m => ({ default: m.CircularRevealHeading })),
  { ssr: false, loading: () => null }
);

const LayeredText = dynamic(
  () => import('@/components/ui/layered-text').then(m => ({ default: m.LayeredText })),
  { ssr: false, loading: () => null }
);

export const metadata: Metadata = {
  title: 'Arvex Agency — Sites, Sistemas e Automação',
  description:
    'Boutique de tecnologia e criação em Boa Vista–RR. Sites em 1–5 dias, sistemas web e automação WhatsApp sob medida.',
  alternates: { canonical: 'https://arvexbr.com' },
};

const CRH_ITEMS = [
  { text: 'SITES PREMIUM', image: '/projects/toka-restaurante.png' },
  { text: 'AUTOMAÇÃO',     image: '/projects/financa-br.png'       },
  { text: 'SISTEMAS WEB',  image: '/projects/hospital-vet.png'     },
  { text: 'RESULTADOS',    image: '/projects/nova-store.png'       },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesRibbon />
      <Manifesto />

      {/* CircularRevealHeading — hover para ver projetos */}
      <section className="section border-b border-white/[0.06]" aria-label="Serviços em destaque">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1">
              <p className="section-label mb-6">03 / ESPECIALIDADES</p>
              <h2
                className="font-display font-light text-paper leading-tight"
                style={{ fontSize: 'var(--fs-h2)' }}
              >
                Cada projeto,<br />
                <span style={{ color: 'rgb(var(--red))' }}>uma entrega.</span>
              </h2>
              <p className="font-sans text-paper-dim mt-6 max-w-[38ch]" style={{ fontSize: 'var(--fs-lead)' }}>
                Passe o mouse sobre as especialidades para ver exemplos reais do nosso trabalho.
              </p>
            </div>
            <div className="flex justify-center">
              <CircularRevealHeading
                size="lg"
                items={CRH_ITEMS}
                centerText={
                  <div className="text-center">
                    <p className="font-display font-extrabold text-4xl text-paper tracking-tight">ARVEX</p>
                    <p className="font-mono text-[9px] text-paper-soft/50 uppercase tracking-[0.2em] mt-1">boutique tech</p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesFlow />
      <ProjectsGrid />
      <BenefitsSection />
      <StackSection />
      <ComparisonSection />
      <Process />
      <Testimonials />
      <SocialConnect />
      <FAQ />
      <CTAFinal />
    </>
  );
}
