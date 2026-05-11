import Image from 'next/image';
import { Marquee } from '@/components/primitives/Marquee';
import { Reveal } from '@/components/primitives/RevealText';
import { testimonials } from '@/content/testimonials';

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[360px] border border-white/[0.06] p-8 mx-4 flex flex-col gap-6">
      {/* Aspas */}
      <span className="font-display text-6xl text-red/30 leading-none font-light">&ldquo;</span>

      {/* Texto */}
      <p className="font-sans text-sm text-paper-dim leading-relaxed flex-1">
        {t.quote}
      </p>

      {/* Rating — 5 traços */}
      <div className="flex gap-1.5" aria-label={`Avaliação: ${t.rating} de 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`block h-0.5 w-5 ${i < t.rating ? 'bg-red' : 'bg-white/10'}`}
          />
        ))}
      </div>

      {/* Autor */}
      <div className="flex items-center gap-3 border-t border-white/[0.08] pt-6">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
          <Image
            src={t.avatar}
            alt={t.author}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="font-sans text-sm font-medium text-paper">{t.author}</p>
          <p className="font-mono text-xs text-paper-soft/60 uppercase tracking-wider">
            {t.role} · {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section className="section border-b border-white/[0.06] overflow-hidden" aria-labelledby="testimonials-title">
      <div className="container mb-12">
        <Reveal>
          <p className="section-label mb-4">06 / O QUE DIZEM</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-display font-light text-paper leading-tight"
            id="testimonials-title"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Quem trabalhou,
            <br />
            <em className="italic text-paper-dim">aprovou.</em>
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6">
        <Marquee speed={120}>
          {row1.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </Marquee>

        <Marquee speed={130} reverse>
          {row2.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
