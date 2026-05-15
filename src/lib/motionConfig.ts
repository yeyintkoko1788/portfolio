import type { Variants, Transition } from 'framer-motion'

// ── Spring physics ──────────────────────────────────────────────────────────

// Editorial: slow, deliberate, cinematic (section reveals)
export const editorialSpring: Transition = {
  type: 'spring',
  stiffness: 55,
  damping: 20,
  mass: 1,
}

// Paper: weighted, tactile (card hover/lift)
export const paperSpring: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 22,
  mass: 1.2,
}

// Stamp: firm descent with soft overshoot (process steps)
export const stampSpring: Transition = {
  type: 'spring',
  stiffness: 130,
  damping: 16,
  mass: 0.9,
}

// ── Scroll-reveal variants ───────────────────────────────────────────────────

// Fade + rise from below — max 16 px, no drama
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: editorialSpring },
}

// Pure opacity reveal — for elements that shouldn't move
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Clip-path wipe from left — newspaper printing effect
export const wipeReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] },
  },
}

// Editorial stamp: descends from slightly above, settles with spring
export const stampReveal: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: stampSpring },
}

// ── Stagger containers ───────────────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
}

// ── Viewport config ──────────────────────────────────────────────────────────

// Reveal when 20 % of the element is visible; animate only once
export const viewportOnce = { once: true, amount: 0.2 } as const
