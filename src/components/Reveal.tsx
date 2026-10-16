import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

// Opacity never starts at zero: content stays readable while entering the viewport.
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0.9, y: 7 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: reduced ? 0 : 0.3, ease: 'easeOut' }}>{children}</motion.div>;
}
