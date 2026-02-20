'use client'

import { motion } from 'framer-motion'

export function AnimatedBorderGlow({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ boxShadow: '0 0 30px rgba(167, 139, 250, 0.5)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/30 via-transparent to-violet-500/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </motion.div>
  )
}
