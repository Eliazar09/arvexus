import { Check, X, Minus } from 'lucide-react';
import { SplitReveal, Reveal } from '@/components/primitives/RevealText';

type Val = 'yes' | 'no' | 'maybe';

const rows: { label: string; arvex: Val; freelancer: Val; agencia: Val; template: Val }[] = [
  { label: 'Design exclusivo',         arvex: 'yes', freelancer: 'maybe', agencia: 'yes', template: 'no'    },
  { label: 'Código limpo e rápido',    arvex: 'yes', freelancer: 'maybe', agencia: 'yes', template: 'no'    },
  { label: 'Prazo garantido',          arvex: 'yes', freelancer: 'no',    agencia: 'maybe', template: 'yes' },
  { label: 'Suporte pós-entrega',      arvex: 'yes', freelancer: 'maybe', agencia: 'yes', template: 'no'    },
  { label: 'Preço acessível',          arvex: 'yes', freelancer: 'yes',   agencia: 'no',  template: 'yes'   },
  { label: 'SEO técnico incluído',     arvex: 'yes', freelancer: 'maybe', agencia: 'yes', template: 'no'    },
  { label: 'Mobile-first',             arvex: 'yes', freelancer: 'maybe', agencia: 'yes', template: 'maybe' },
  { label: 'Automação integrada',      arvex: 'yes', freelancer: 'no',    agencia: 'maybe', template: 'no'  },
];

function Icon({ val }: { val: Val }) {
  if (val === 'yes') return <Check size={16} className="text-red mx-auto" />;
  if (val === 'no')  return <X size={16} className="text-paper-soft/25 mx-auto" />;
  return <Minus size={16} className="text-paper-soft/40 mx-auto" />;
}

export function ComparisonSection() {
  return (
    <section className="section border-b border-white/[0.06]" aria-labelledby="comparison-title">
      <div className="container">
        <div className="mb-16" id="comparison-title">
          <Reveal>
            <p className="section-label mb-4">POR QUE A ARVEX</p>
          </Reveal>
          <SplitReveal
            text="Arvex vs."
            as="h2"
            delay={0.08}
            stagger={0.07}
            className="font-display font-light text-paper leading-tight"
            style={{ fontSize: 'var(--fs-h2)' }}
          />
          <SplitReveal
            text="Alternativas"
            as="h2"
            delay={0.22}
            stagger={0.06}
            className="font-display font-light italic text-paper-dim leading-tight"
            style={{ fontSize: 'var(--fs-h2)' }}
          />
        </div>

        <Reveal delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]" aria-label="Comparação entre Arvex e alternativas">
              {/* Header */}
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left pb-4 pr-8 font-mono text-[10px] uppercase tracking-widest text-paper-soft/40 w-[40%]">
                    Critério
                  </th>
                  <th className="text-center pb-4 px-4 font-mono text-[10px] uppercase tracking-widest text-red">
                    Arvex
                  </th>
                  <th className="text-center pb-4 px-4 font-mono text-[10px] uppercase tracking-widest text-paper-soft/40">
                    Freelancer
                  </th>
                  <th className="text-center pb-4 px-4 font-mono text-[10px] uppercase tracking-widest text-paper-soft/40">
                    Agência trad.
                  </th>
                  <th className="text-center pb-4 px-4 font-mono text-[10px] uppercase tracking-widest text-paper-soft/40">
                    Wix / Template
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 pr-8 font-sans text-sm text-paper-dim">{row.label}</td>
                    <td className="py-4 px-4 text-center">
                      <Icon val={row.arvex} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Icon val={row.freelancer} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Icon val={row.agencia} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Icon val={row.template} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-paper-soft/25">
            <Minus size={10} className="inline mr-1" /> pode variar conforme o profissional ou plataforma
          </p>
        </Reveal>
      </div>
    </section>
  );
}
