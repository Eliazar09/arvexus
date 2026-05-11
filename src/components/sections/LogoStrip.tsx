'use client';

const clients = [
  { name: 'Toka Restaurante', tag: 'Site' },
  { name: 'Hospital Vet', tag: 'Site' },
  { name: 'Nova Living', tag: 'Site' },
  { name: 'Meridian', tag: 'Site' },
];

export function LogoStrip() {
  return (
    <section className="border-y border-white/[0.06] overflow-hidden py-6" aria-label="Clientes">
      <div
        className="marquee-track flex items-center gap-0"
        style={{ animationDuration: '30s' }}
      >
        {[...clients, ...clients, ...clients].map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-10 border-r border-white/[0.06] shrink-0"
          >
            <span className="font-sans text-sm text-paper-soft/50 hover:text-paper-soft transition-colors whitespace-nowrap">
              {c.name}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-paper-soft/20 border border-white/[0.07] px-2 py-0.5 rounded-full shrink-0">
              {c.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
