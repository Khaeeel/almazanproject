'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedGradientGlow } from './animated-gradient-glow'
import { ArrowRight, Download } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedGradientGlow />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
          variants={itemVariants}
        >
          Dominic Boy
          <span className="block text-accent">Almazan</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
          variants={itemVariants}
        >
         I’m an aspiring AI and Machine Learning engineer passionate about building intelligent, data-driven systems that transform complex problems into practical solutions through thoughtful design and robust engineering.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <Link
            href="#projects"
            className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/resume.pdf"
            download
            className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-muted-foreground rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
