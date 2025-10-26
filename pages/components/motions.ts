import { Transition, Variants } from "framer-motion";

// Easing tokens tuned for smooth, natural feel
export const easeOutCubic: number[] = [0.22, 1, 0.36, 1];
export const easeSnappy: number[] = [0.4, 0, 0.2, 1];

// Duration tokens
export const dur = {
  xs: 0.2,
  s: 0.4,
  m: 0.6,
  l: 0.9,
};

// Shared tween transition (used for opacity)
export const t: Transition = {
  duration: dur.m,
  ease: easeOutCubic as any,
};

// Shared spring transition (used for position)
export const tSpring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.9,
};

// Viewport config for whileInView reveals
// Use amount to stabilize the trigger and avoid flicker
export const viewportOnce = { once: true, amount: 0.2 } as const;

// Stagger container factory
export const staggerContainer = (
  staggerChildren = 0.16,
  delayChildren = 0.04
): Variants => ({
  hidden: { opacity: 0.001 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.01,
      ease: "linear",
      staggerChildren,
      delayChildren,
    },
  },
});

// Simple fade in
export const fadeIn = (override?: Partial<Transition>): Variants => ({
  hidden: { opacity: 0.001 },
  visible: {
    opacity: 1,
    transition: { ...t, ...override },
  },
});

// Slide up + fade (subtle distance, spring position, tween opacity)
export const slideUp = (
  distance = 16,
  override?: Partial<Transition>
): Variants => ({
  hidden: { y: distance, opacity: 0.001 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { ...tSpring, ...override },
      opacity: { ...t, ...override },
    },
  },
});

// Slide in horizontally + fade (subtle distance, spring position, tween opacity)
export const slideInX = (
  distance = 16,
  override?: Partial<Transition>
): Variants => ({
  hidden: { x: distance, opacity: 0.001 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      x: { ...tSpring, ...override },
      opacity: { ...t, ...override },
    },
  },
});
