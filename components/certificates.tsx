'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const certificates = [
  {
    title: 'AI-For-Good Students',
    issuer: 'AI SINGAPORE',
    description: 'Awarded for active participation and accomplishments in the AI-For-Good Students Program by AI Singapore, promoting the use of artificial intelligence for social good.',
    image: '/images/Certificates/AI-For-Good-Studenudents_Almazan-Dominic.jpg',
  },
  {
    title: 'PSITE-STUDENT CONGRESS 2026: From code to Confidence',
    issuer: 'Security and AI for the next generation of computing students',
    description: 'Recognized for participating in the PSITE Student Congress 2026: From Code to Confidence, highlighting developments in cybersecurity and artificial intelligence in modern computing education.',
    image: '/images/Certificates/Dominic_Boy_P__Almazan_69a4c8bca457d35eca6259a0_page-0001.jpg',
  },
]

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="certificates" className="py-20 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Certifications & Achievements
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors duration-300 group flex flex-col cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative overflow-hidden bg-muted h-56">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999" font-family="sans-serif" font-size="14"%3ECertificate Image%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-accent mb-3">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm flex-1">{cert.description}</p>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedCert(cert)
                  }}
                  className="mt-4 text-sm text-accent hover:text-accent/80 transition-colors font-medium flex items-center gap-2"
                >
                  View Certificate
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Certificate View */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background border border-border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{selectedCert.title}</h3>
                <p className="text-sm text-accent mt-1">{selectedCert.issuer}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-muted-foreground hover:text-accent transition-colors text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="bg-muted rounded-lg overflow-hidden">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23333" width="800" height="600"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999" font-family="sans-serif" font-size="20"%3ECertificate Image Not Found%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>
              <p className="text-muted-foreground text-sm mt-6">{selectedCert.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
