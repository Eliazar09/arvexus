'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LocalClockProps {
  className?: string;
  showCity?: boolean;
}

export function LocalClock({ className, showCity = true }: LocalClockProps) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const format = () => {
      const now = new Date();
      const t = now.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Boa_Vista',
      });
      setTime(t);
    };

    format();
    const id = setInterval(format, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span className={cn('font-mono text-xs uppercase tracking-widest', className)}>
      {showCity && 'BOA VISTA, BR · '}
      {time}
    </span>
  );
}
