'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'AI/ML',
    skills: ['Machine Learning', 'Predictive Analytics', 'Model Training', 'Data Processing', 'NLP', 'LLMs', 'Data Preprocessing'],
  },
  {
    title: 'Programming & Frameworks',
    skills: ['Python','Flask','JavaScript', 'React / Next.js', 'SQL', 'PHP (Laravel)', 'REST APIs', ],
  },
  {
    title: 'Other Skills',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Canvas', 'Git/Github', 'Microsoft Office Suite',],
  },
]

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Skills & Expertise
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 text-accent group-hover:text-accent">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground group/skill"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full group-hover/skill:scale-150 transition-transform" />
                    <span className="group-hover/skill:text-accent transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
