// Reusable framer-motion variants + helpers for consistent, smooth reveals.

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

// Parent container that staggers its children's reveals.
export const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

// A smooth, slightly springy transition used for most reveals.
export const smooth = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

// Props you can spread onto a motion element for a scroll-triggered reveal.
export const reveal = (variants = fadeUp, transition = smooth) => ({
  variants,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.2 },
  transition,
});
