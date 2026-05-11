export const ease = [0.22, 1, 0.36, 1] as const;
export const easeIn = [0.64, 0, 0.78, 0] as const;
export const easeOut = [0.16, 1, 0.3, 1] as const;

export const dur = {
  fast: 0.4,
  base: 0.7,
  slow: 1.1,
  xslow: 1.6,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.base, ease: [...ease] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: dur.base, ease: [...ease] },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: dur.base, ease: [...ease] },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: dur.base, ease: [...ease] },
  },
};

export const stagger = (delay = 0.08) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: delay,
      delayChildren: 0.1,
    },
  },
});

export const revealLine = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: dur.slow, ease: [...ease] },
  },
};

export const spring = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
};

export const springMagnetic = {
  type: 'spring' as const,
  stiffness: 150,
  damping: 20,
  mass: 0.1,
};
