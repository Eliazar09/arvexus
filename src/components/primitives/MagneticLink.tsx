'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

interface MagneticLinkProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticLink({ children, className, strength = 0.3 }: MagneticLinkProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(useTransform(mouseX, (v) => v * strength), {
    stiffness: 150,
    damping: 20,
    mass: 0.1,
  });
  const y = useSpring(useTransform(mouseY, (v) => v * strength), {
    stiffness: 150,
    damping: 20,
    mass: 0.1,
  });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn('inline-block', className)}
    >
      {children}
    </motion.div>
  );
}
