'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SplitReveal, Reveal } from '@/components/primitives/RevealText';
import { projects } from '@/content/projects';

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseY(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between border-b border-white/[0.06] py-6 md:py-7 relative overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Linha vermelha hover */}
        <motion.span
          className="absolute left-0 top-0 w-px bg-red"
          initial={{ height: 0 }}
          animate={{ height: hovered ? '100%' : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Número */}
        <span className="font-mono text-[11px] text-paper-soft/25 w-10 shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Título */}
        <div className="flex-1 flex items-center gap-6">
          <motion.h3
            className="font-display font-light text-paper leading-none"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2.5rem)' }}
            animate={{ x: hovered ? 12 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.title}
          </motion.h3>

          {/* Tags */}
          <div className="hidden md:flex items-center gap-2 ml-4">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] uppercase tracking-widest border border-white/[0.08] px-2 py-1 text-paper-soft/30 group-hover:border-white/[0.16] group-hover:text-paper-soft/50 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Ano + ícone */}
        <div className="flex items-center gap-4 shrink-0">
          <span className="font-mono text-[11px] text-paper-soft/25">{project.year}</span>
          <motion.div
            className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-paper-soft/30 group-hover:border-red/40 group-hover:text-red transition-all duration-300"
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.35 }}
          >
            <ArrowUpRight size={14} />
          </motion.div>
        </div>

        {/* Preview image — aparece no hover */}
        <motion.div
          className="absolute right-16 pointer-events-none z-20 w-[220px] aspect-video overflow-hidden rounded-sm shadow-[0_20px_60px_rgb(0_0_0_/_0.6)]"
          style={{ top: Math.min(Math.max(mouseY - 60, 0), 40) }}
          initial={{ opacity: 0, scale: 0.88, y: 10 }}
          animate={{
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1 : 0.88,
            y: hovered ? 0 : 10,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={project.cover}
            alt={project.title}
            fill
            unoptimized
            className="object-cover"
            sizes="220px"
          />
        </motion.div>
      </a>
    </motion.div>
  );
}

export function ProjectsGrid() {
  return (
    <section className="section border-b border-white/[0.06]" aria-labelledby="projects-title">
      <div className="container">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 gap-8">
          <div>
            <Reveal>
              <p className="section-label mb-4">04 / PROJETOS</p>
            </Reveal>
            <SplitReveal
              text="Trabalho selecionado."
              as="h2"
              delay={0.1}
              stagger={0.05}
              className="font-display font-light text-paper leading-tight"
              style={{ fontSize: 'var(--fs-h2)' } as React.CSSProperties}
            />
          </div>
          <Reveal delay={0.2} className="shrink-0 hidden md:block">
            <Link
              href="/projetos"
              className="font-mono text-xs uppercase tracking-widest text-paper-soft/40 hover:text-paper transition-colors duration-300 flex items-center gap-2"
            >
              Ver todos <ArrowUpRight size={12} />
            </Link>
          </Reveal>
        </div>

        {/* Lista de projetos */}
        <div>
          <div className="border-t border-white/[0.06]" />
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Mobile CTA */}
        <Reveal className="mt-10 md:hidden">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper-soft/40 hover:text-paper transition-colors"
          >
            Ver todos os projetos <ArrowUpRight size={12} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
