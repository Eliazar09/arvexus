'use client';

const clients = [
  { name: 'Toka Restaurante',       tag: 'Site'      },
  { name: 'Hospital Veterinário',   tag: 'Site'      },
  { name: 'Nova Living',            tag: 'E-commerce' },
  { name: 'Meridian',               tag: 'Dashboard' },
  { name: 'Clínica Lumina',         tag: 'Site'      },
  { name: 'Roraima Distribuidora',  tag: 'Automação' },
  { name: 'Imobiliária Panorama',   tag: 'Sistema'   },
  { name: 'Studio JK Moda',         tag: 'Site'      },
];

export function LogoStrip() {
  const items = [...clients, ...clients, ...clients];

  return (
    <section className="border-b border-white/[0.06] overflow-hidden py-5" aria-label="Clientes atendidos">
      <div className="container mb-4">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-paper-soft/25 text-center">
          Empresas que confiam na Arvex
        </p>
      </div>

      <div
        className="flex items-center gap-0"
        style={{
          width: 'max-content',
          animation: 'marquee 36s linear infinite',
        }}
      >
        {items.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-8 border-r border-white/[0.05] shrink-0"
          >
            {/* Initials circle */}
            <div className="w-7 h-7 rounded-full border border-white/[0.08] flex items-center justify-center shrink-0">
              <span className="font-mono text-[9px] text-paper-soft/40 uppercase leading-none">
                {c.name.split(' ').slice(0, 2).map(w => w[0]).join('')}
              </span>
            </div>
            <span className="font-sans text-sm text-paper-soft/45 hover:text-paper-soft/70 transition-colors whitespace-nowrap">
              {c.name}
            </span>
            <span className="font-mono text-[8px] uppercase tracking-widest text-paper-soft/20 border border-white/[0.06] px-2 py-0.5 shrink-0">
              {c.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
