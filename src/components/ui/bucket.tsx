'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ShieldCheck, Zap, Users, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const CHIPS = [
  { id: 1, title: 'Sites Premium',    description: 'Design exclusivo, zero template',     Icon: ShieldCheck },
  { id: 2, title: 'Automação',        description: 'WhatsApp e fluxos automáticos',       Icon: Zap        },
  { id: 3, title: 'Sistemas Web',     description: 'Painéis e portais sob medida',        Icon: Users      },
  { id: 4, title: '1–5 dias úteis',   description: 'Entrega com padrão premium',          Icon: Sparkles   },
];

export function Bucket() {
  const [items, setItems] = useState(CHIPS);
  const isMobile = useIsMobile();

  useEffect(() => {
    const id = setInterval(() => {
      setItems((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-fit relative w-full">
      <div className="relative isolate w-full max-w-[560px]" style={{ aspectRatio: '655/352' }}>

        {/* ── Background SVG — funnel shape ── */}
        <svg
          width="100%" height="100%"
          viewBox="0 0 655 352"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 z-0"
        >
          {/* Right ear */}
          <path
            d="M535.59 78.7427L487.973 42.8776L558.738 13.9516C562.902 12.2494 564.984 11.3984 567.143 11.5597C569.301 11.7211 571.233 12.8723 575.098 15.1747L590.22 24.1832C603.923 32.347 610.775 36.4289 610.372 42.0779C609.97 47.7269 602.609 50.7964 587.887 56.9354L535.59 78.7427Z"
            fill="white" fillOpacity="0.06"
          />
          {/* Left ear */}
          <path
            d="M123.116 79.1145L171.548 42.8776L97.2715 12.5164C94.8305 11.5186 93.61 11.0197 92.3446 11.1143C91.0793 11.2089 89.9465 11.8837 87.681 13.2334L56.155 32.0149C48.1832 36.7641 44.1973 39.1386 44.4205 42.4378C44.6438 45.737 48.9132 47.553 57.4522 51.1849L123.116 79.1145Z"
            fill="white" fillOpacity="0.06"
          />
          {/* Top face */}
          <path
            d="M487.973 42.8774L171.548 42.8775L123.116 79.1144L535.59 78.7424L487.973 42.8774Z"
            fill="url(#bucketGrad)" fillOpacity="0.55"
          />
          {/* Left fold highlight */}
          <path
            d="M171.548 78.9088V42.8774L123.116 79.1144L171.548 78.9088Z"
            fill="white" fillOpacity="0.10"
          />
          {/* Right fold highlight */}
          <path
            d="M487.973 78.9088V42.8774L536.404 79.1144L487.973 78.9088Z"
            fill="white" fillOpacity="0.10"
          />
          <defs>
            <linearGradient id="bucketGrad" x1="329.353" y1="42.8774" x2="329.353" y2="79.1144" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.18" />
              <stop offset="1" stopColor="white" stopOpacity="0.07" />
            </linearGradient>
          </defs>
        </svg>

        {/* ── Chips layer ── */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div
            className="relative w-full h-full flex justify-center items-center"
            style={{ paddingBottom: '65%' }}
          >
            <AnimatePresence mode="popLayout">
              {items.map((chip, index) => {
                if (index !== 0) return null;
                return (
                  <motion.div
                    key={chip.id}
                    initial={{ y: isMobile ? -60 : -90, opacity: 0, scale: 0.82 }}
                    animate={{ y: 0, opacity: 1, scale: isMobile ? 1 : 1.18 }}
                    exit={{ y: isMobile ? 90 : 120, opacity: 0, scale: 0.82 }}
                    transition={{ duration: 0.52, ease: [0.455, 0.03, 0.515, 0.955] }}
                    className="absolute pointer-events-auto flex items-center gap-3 rounded-full px-3 py-2 origin-bottom"
                    style={{
                      width: 240,
                      background: 'rgb(10 10 12 / 0.92)',
                      border: '1px solid rgb(255 255 255 / 0.10)',
                      backdropFilter: 'blur(14px)',
                    }}
                  >
                    <div className="flex w-9 h-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-red">
                      <chip.Icon size={15} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-sans text-sm font-medium text-paper leading-none">
                        {chip.title}
                      </span>
                      <span className="font-mono text-[10px] text-paper-soft/50">
                        {chip.description}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Foreground SVG — front face of bucket ── */}
        <svg
          width="100%" height="100%"
          viewBox="0 0 655 352"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
        >
          {/* Main box */}
          <path
            d="M512.766 79.1595L147.766 79.1624C136.453 79.1625 130.796 79.1626 127.281 82.6773C123.766 86.192 123.766 91.8488 123.766 103.162V327.159C123.766 338.473 123.766 344.13 127.281 347.645C130.796 351.159 136.453 351.159 147.766 351.159H512.766C524.08 351.159 529.737 351.159 533.252 347.645C536.766 344.13 536.766 338.473 536.766 327.159V103.159C536.766 91.8457 536.766 86.1888 533.252 82.6741C529.737 79.1594 524.08 79.1594 512.766 79.1595Z"
            fill="#090910"
            stroke="rgb(255 255 255 / 0.06)"
            strokeWidth="1"
          />
          {/* Front lip / funnel face */}
          <path
            d="M74.6011 164.033L123.116 79.1138L535.59 78.7419L581.532 164.469C588.006 176.55 591.243 182.59 588.568 187.06C585.892 191.529 579.039 191.529 565.333 191.529H90.5591C76.4759 191.529 69.4343 191.529 66.7781 186.953C64.1219 182.376 67.615 176.262 74.6011 164.033Z"
            fill="rgb(255 255 255 / 0.04)"
            stroke="rgb(255 255 255 / 0.06)"
            strokeWidth="1"
          />
          {/* Red accent line at funnel bottom */}
          <line x1="124" y1="191" x2="532" y2="191" stroke="rgb(230 57 70 / 0.20)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
