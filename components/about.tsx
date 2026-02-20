'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            About Me
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </motion.div>
        <div className="flex justify-center mb-12">
         <div className="relative">
            <div className="w-56 h-56 rounded-full border-2 border-accent/50 overflow-hidden bg-card/50 backdrop-blur-sm flex items-center justify-center">
              <img
                src="/1x1 (2).png"
                alt="Dominic Almazan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 w-56 h-56 rounded-full bg-gradient-to-r from-accent/0 via-accent/10 to-primary/0 animate-pulse" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a graduating IT student with a strong focus on Artificial Intelligence and Machine Learning. Throughout my academic journey, I have developed and experimented with predictive models, natural language processing applications such as sentiment analysis, summarization, and named entity recognition, and AI-powered automation systems integrating OCR and Large Language Models.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
             I enjoy building intelligent systems that solve real-world problems  from classification models to end-to-end AI pipelines that transform raw data into meaningful insights. My experience combines machine learning experimentation, backend development using Laravel, and database structuring for analytics-driven applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As I prepare to enter the industry, I am eager to contribute to innovative AI-driven projects, continuously improve my technical skills, and grow as a machine learning engineer who builds practical and impactful solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-lg p-8 font-mono text-sm overflow-x-auto">
              <div className="text-foreground">
                <span className="text-muted-foreground">const</span> <span className="text-accent">developer</span> <span className="text-muted-foreground">=</span> {'{'}
              </div>
              <div className="ml-4 text-foreground mt-2 space-y-2">
                <div>
                  <span className="text-blue-400">name</span><span className="text-muted-foreground">:</span> <span className="text-green-400">"Dominic Almazan"</span><span className="text-muted-foreground">,</span>
                </div>
                <div>
                  <span className="text-blue-400">role</span><span className="text-muted-foreground">:</span> <span className="text-green-400">"AI/Machine Learning Engineer"</span><span className="text-muted-foreground">,</span>
                </div>
                <div>
                  <span className="text-blue-400">stack</span><span className="text-muted-foreground">:</span> {' ['}
                </div>
                <div className="ml-4 space-y-1">
                  {['Python', 'Deep Learning','Machine Learning', 'NLP'].map((tech, idx, arr) => (
                    <div key={tech}>
                      <span className="text-green-400">"{tech}"</span><span className="text-muted-foreground">{idx < arr.length - 1 ? ',' : ''}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <span className="text-muted-foreground">{'],'}</span>
                </div>
      
                <div>
                  <span className="text-blue-400">passionate</span><span className="text-muted-foreground">:</span> <span className="text-orange-400">true</span><span className="text-muted-foreground">,</span>
                </div>
                <div>
                  <span className="text-blue-400">coffee</span><span className="text-muted-foreground">:</span> <span className="text-orange-400">Infinity</span>
                </div>
              </div>
              <div className="text-foreground mt-2">
                {'}'}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
         
        </motion.div>
      </div>
    </section>
  )
}
