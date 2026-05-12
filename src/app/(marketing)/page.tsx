import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { ServicesRibbon } from '@/components/sections/ServicesRibbon';
import { Manifesto } from '@/components/sections/Manifesto';
import { ServicesFlow } from '@/components/sections/ServicesFlow';
import { LogoStrip } from '@/components/sections/LogoStrip';

// Lazy — carregam só quando chegam na viewport
const BenefitsSection   = dynamic(() => import('@/components/sections/BenefitsSection').then(m => ({ default: m.BenefitsSection })));
const StackSection      = dynamic(() => import('@/components/sections/StackSection').then(m => ({ default: m.StackSection })));
const ComparisonSection = dynamic(() => import('@/components/sections/ComparisonSection').then(m => ({ default: m.ComparisonSection })));
const PricingSection    = dynamic(() => import('@/components/sections/PricingSection').then(m => ({ default: m.PricingSection })));
const Process           = dynamic(() => import('@/components/sections/Process').then(m => ({ default: m.Process })));
const Testimonials      = dynamic(() => import('@/components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const SocialConnect     = dynamic(() => import('@/components/sections/SocialConnect').then(m => ({ default: m.SocialConnect })));
const FAQ               = dynamic(() => import('@/components/sections/FAQ').then(m => ({ default: m.FAQ })));
const CTAFinal          = dynamic(() => import('@/components/sections/CTAFinal').then(m => ({ default: m.CTAFinal })));

const CircularRevealHeading = dynamic(
  () => import('@/components/ui/circular-reveal-heading').then(m => ({ default: m.CircularRevealHeading })),
  { ssr: false, loading: () => null }
);

const CardStack = dynamic(
  () => import('@/components/ui/card-stack').then(m => ({ default: m.CardStack })),
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

const PROJECT_CARDS = [
  {
    id: 1,
    title: 'Toka Restaurante',
    description: 'Site institucional com cardápio digital e reservas online.',
    imageSrc: '/projects/toka-restaurante.png',
    href: 'https://tokarestaurante.vercel.app/',
    tag: 'Sites · 2025',
  },
  {
    id: 2,
    title: 'Hospital Vet',
    description: 'Clínica veterinária com agendamento e serviços.',
    imageSrc: '/projects/hospital-vet.png',
    href: 'https://hospitalvet.vercel.app/',
    tag: 'Sites · 2025',
  },
  {
    id: 3,
    title: 'Nova Living',
    description: 'Loja online com catálogo de produtos e checkout.',
    imageSrc: '/projects/nova-store.png',
    href: 'https://novastore-br.vercel.app/',
    tag: 'E-commerce · 2025',
  },
  {
    id: 4,
    title: 'Meridian',
    description: 'Plataforma financeira com dashboard e controle.',
    imageSrc: '/projects/financa-br.png',
    href: 'https://finan-a-br.vercel.app/',
    tag: 'Dashboard · 2025',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
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
                <span className="hidden md:inline">Passe o mouse sobre as especialidades para ver exemplos reais do nosso trabalho.</span>
                <span className="md:hidden">Toque nas especialidades para ver exemplos reais do nosso trabalho.</span>
              </p>
            </div>
            {/* Wrapper responsivo */}
            <div className="flex justify-center w-[298px] h-[298px] sm:w-[374px] sm:h-[374px] lg:w-[480px] lg:h-[480px] overflow-hidden shrink-0">
              <div className="scale-[0.62] sm:scale-[0.78] lg:scale-100 origin-top-left shrink-0">
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
        </div>
      </section>

      <ServicesFlow />

      {/* Projetos — CardStack */}
      <section className="section border-b border-white/[0.06]" aria-label="Projetos">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end mb-12">
            <div className="md:col-span-3">
              <p className="section-label">04 / PROJETOS</p>
            </div>
            <div className="md:col-span-9">
              <h2
                className="font-display font-light text-paper leading-tight"
                style={{ fontSize: 'var(--fs-h2)' }}
              >
                Trabalho<br />
                <span style={{ color: 'rgb(var(--red))' }}>selecionado.</span>
              </h2>
            </div>
          </div>
          <CardStack
            items={PROJECT_CARDS}
            initialIndex={0}
            autoAdvance
            intervalMs={3000}
            pauseOnHover
            showDots
            cardWidth={480}
            cardHeight={300}
            overlap={0.45}
            spreadDeg={42}
          />
        </div>
      </section>

      <BenefitsSection />
      <StackSection />
      <ComparisonSection />
      <PricingSection />
      <Process />
      <Testimonials />
      <SocialConnect />
      <FAQ />
      <CTAFinal />
    </>
  );
}
