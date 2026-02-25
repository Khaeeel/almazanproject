'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Github, Linkedin, Facebook } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:dmncalmzn@gmail.com',
      label: 'Email',
    },
    {
      icon: Github,
      href: 'https://github.com/Khaeeel',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/dominic-almazan-58b387397/',
      label: 'LinkedIn',
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/dominicalmazan77/',
      label: 'Facebook',
    },
  ]

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Connect with me!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">Or connect with me on social media</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
