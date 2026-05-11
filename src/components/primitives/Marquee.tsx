'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: number;
}

export function Marquee({ children, className, reverse = false, speed = 40 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    // Wait for layout to measure
    const frame = requestAnimationFrame(() => {
      const totalWidth = track.scrollWidth / 2; // We duplicate children, so half is the real width
      
      gsap.set(track, { x: reverse ? -totalWidth : 0 });

      const tween = gsap.to(track, {
        x: reverse ? 0 : -totalWidth,
        duration: speed,
        ease: 'none',
        repeat: -1,
      });

      return () => tween.kill();
    });

    return () => cancelAnimationFrame(frame);
  }, [reverse, speed]);

  return (
    <div
      className={cn('overflow-hidden', className)}
      style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <div
        ref={trackRef}
        className="flex w-max"
        aria-hidden="true"
      >
        {children}
        {children}
      </div>
    </div>
  );
}
