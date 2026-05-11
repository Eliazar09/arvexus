'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';

/* ── RevealText: máscara de clip com slide-up por linha ── */
interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function RevealText({ children, className, delay = 0 }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div
        initial={{ y: '105%', opacity: 0 }}
        animate={isInView ? { y: '0%', opacity: 1 } : { y: '105%', opacity: 0 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ── Reveal: fade+slide genérico ── */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'none';
}

export function Reveal({ children, className, delay = 0, direction = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' });

  const initial =
    direction === 'up'
      ? { opacity: 0, y: 32 }
      : direction === 'left'
      ? { opacity: 0, x: 32 }
      : { opacity: 0 };

  const animate =
    direction === 'up'
      ? { opacity: 1, y: 0 }
      : direction === 'left'
      ? { opacity: 1, x: 0 }
      : { opacity: 1 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── SplitReveal: animação palavra por palavra com stagger ── */
interface SplitRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function SplitReveal({
  text,
  className,
  style,
  delay = 0,
  stagger = 0.06,
  as: Tag = 'span',
}: SplitRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });
  const words = text.split(' ');

  return (
    <div ref={ref}>
      <Tag className={cn('flex flex-wrap gap-x-[0.26em] gap-y-0', className)} style={style}>
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: '110%', opacity: 0 }}
              animate={isInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{ duration: 0.9, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}

/* ── CharReveal: letra por letra (para títulos curtos e impactantes) ── */
interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'span';
}

export function CharReveal({
  text,
  className,
  delay = 0,
  stagger = 0.03,
  as: Tag = 'span',
}: CharRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });
  const chars = text.split('');

  return (
    <div ref={ref} className={className}>
      <Tag className="inline-flex flex-wrap">
        {chars.map((char, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: '110%' }}
              animate={isInView ? { y: '0%' } : { y: '110%' }}
              transition={{
                duration: 0.7,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
