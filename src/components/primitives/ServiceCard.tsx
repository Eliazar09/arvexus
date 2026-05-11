'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Service } from '@/content/services';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Link
      href={`/servicos/${service.slug}`}
      className={cn(
        'group relative flex flex-col border border-white/[0.06] p-8 transition-all duration-500 hover:border-red-deep/50',
        className
      )}
      data-cursor-label="ver serviço"
    >
      {/* Número */}
      <span className="font-mono text-5xl font-light text-paper-soft/10 group-hover:text-red/20 transition-colors duration-500 leading-none mb-8 select-none">
        {service.number}
      </span>

      {/* Título */}
      <h3 className="font-display text-2xl md:text-3xl font-light text-paper mb-3 leading-tight">
        {service.title}
      </h3>

      {/* Tagline */}
      <p className="font-sans text-sm text-paper-soft leading-relaxed mb-6 flex-1">
        {service.tagline}
      </p>

      {/* Sub-itens */}
      <ul className="flex flex-col gap-2 mb-8">
        {service.deliverables.slice(0, 3).map((d) => (
          <li key={d} className="flex items-center gap-2 font-sans text-xs text-paper-dim">
            <span className="w-3 h-px bg-red/40 shrink-0" />
            {d}
          </li>
        ))}
      </ul>

      {/* Link */}
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-red group-hover:gap-3 transition-all duration-300">
        Saber mais
        <ArrowRight size={12} />
      </div>

      {/* Border accent hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-red"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </Link>
  );
}
