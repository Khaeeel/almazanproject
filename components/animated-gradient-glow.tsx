'use client'

import { motion } from 'framer-motion'

export function AnimatedGradientGlow() {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-transparent to-violet-500/20 blur-3xl"
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        background: 'radial-gradient(ellipse at center, rgba(167, 139, 250, 0.2) 0%, transparent 70%)',
      }}
    />
  )
}
