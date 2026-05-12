'use client';

import { useState, useEffect, useRef } from 'react';
import NextImage from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface TextItem {
  text: string;
  image: string;
}

interface CircularRevealHeadingProps {
  items: TextItem[];
  centerText: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeConfig = {
  sm: { container: 'h-[280px] w-[280px]', fontSize: 'text-[10px]', tracking: 'tracking-[0.25em]', radius: 130, gap: 45, imageSize: 'w-[70%] h-[70%]', textStyle: 'font-medium' },
  md: { container: 'h-[380px] w-[380px]', fontSize: 'text-xs',     tracking: 'tracking-[0.3em]',  radius: 155, gap: 32, imageSize: 'w-[72%] h-[72%]', textStyle: 'font-medium' },
  lg: { container: 'h-[480px] w-[480px]', fontSize: 'text-sm',     tracking: 'tracking-[0.35em]', radius: 180, gap: 22, imageSize: 'w-[74%] h-[74%]', textStyle: 'font-medium' },
};

const usePreloadImages = (images: string[]) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Promise.all(
      images.map(
        (url) =>
          new Promise<void>((res, rej) => {
            const img = new Image();
            img.src = url;
            img.onload = () => res();
            img.onerror = rej;
          })
      )
    )
      .then(() => setLoaded(true))
      .catch(() => {});
  }, [images]);
  return loaded;
};

const imagePx = { sm: 196, md: 274, lg: 355 };

function ImageOverlay({ image, size = 'md' }: { image: string; size?: 'sm' | 'md' | 'lg' }) {
  const px = imagePx[size];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
    >
      <div
        className="relative rounded-full overflow-hidden"
        style={{ width: px, height: px, filter: 'brightness(0.7)' }}
      >
        <NextImage src={image} alt="" fill className="object-cover" />
      </div>
    </motion.div>
  );
}

export function CircularRevealHeading({ items, centerText, className, size = 'md' }: CircularRevealHeadingProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const config = sizeConfig[size];
  const imagesLoaded = usePreloadImages(items.map((i) => i.image));
  const rotatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rotatingRef.current) return;
    const tween = gsap.to(rotatingRef.current, {
      rotation: 360,
      duration: 28,
      ease: 'none',
      repeat: -1,
    });
    return () => { tween.kill(); };
  }, []);

  const createTextSegments = () => {
    const totalItems = items.length;
    const totalGapDegrees = config.gap * totalItems;
    const availableDegrees = 360 - totalGapDegrees;
    const segmentDegrees = availableDegrees / totalItems;

    return items.map((item, index) => {
      const startPosition = index * (segmentDegrees + config.gap);
      const startOffset = `${(startPosition / 360) * 100}%`;
      return (
        <g key={index}>
          <text
            className={cn(config.fontSize, config.tracking, config.textStyle, 'uppercase cursor-pointer')}
            onMouseEnter={() => imagesLoaded && setActiveImage(item.image)}
            onMouseLeave={() => setActiveImage(null)}
          >
            <textPath
              href="#crh-curve"
              fill="url(#crh-textGradient)"
              startOffset={startOffset}
              textLength={`${segmentDegrees * 1.8}`}
              lengthAdjust="spacingAndGlyphs"
            >
              {item.text}
            </textPath>
          </text>
        </g>
      );
    });
  };

  return (
    <div
      className={cn('relative overflow-hidden rounded-full', config.container, className)}
      style={{
        background: 'radial-gradient(circle at 40% 30%, rgb(var(--ink-2)), rgb(var(--ink)))',
        border: '1px solid rgb(255 255 255 / 0.07)',
        boxShadow: '0 0 80px rgb(230 57 70 / 0.06), inset 0 0 40px rgb(0 0 0 / 0.4)',
        animation: 'crh-float 6s ease-in-out infinite',
      }}
    >
      {/* Image overlay on hover */}
      <AnimatePresence>
        {activeImage && imagesLoaded && <ImageOverlay image={activeImage} size={size} />}
      </AnimatePresence>

      {/* Inner ring */}
      <div
        className="absolute inset-[10px] rounded-full"
        style={{ border: '1px solid rgb(255 255 255 / 0.04)' }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <AnimatePresence>
          {!activeImage && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {centerText}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Rotating SVG text — GSAP */}
      <div
        ref={rotatingRef}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="crh-textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(var(--paper-soft))" stopOpacity="0.7" />
              <stop offset="100%" stopColor="rgb(var(--paper))" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            id="crh-curve"
            fill="none"
            d={`M 200,200 m -${config.radius},0 a ${config.radius},${config.radius} 0 1,1 ${config.radius * 2},0 a ${config.radius},${config.radius} 0 1,1 -${config.radius * 2},0`}
          />
          {createTextSegments()}
        </svg>
      </div>
    </div>
  );
}
