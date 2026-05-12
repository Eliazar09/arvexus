'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface WaveTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function WaveText({ text, className, style }: WaveTextProps) {
  return (
    <motion.span
      className={cn('inline-block cursor-default', className)}
      whileHover="hover"
      initial="initial"
      style={style}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            initial: { y: 0, scale: 1 },
            hover: {
              y: -5,
              scale: 1.18,
              transition: {
                type: 'spring',
                stiffness: 280,
                damping: 14,
                delay: i * 0.025,
              },
            },
          }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
