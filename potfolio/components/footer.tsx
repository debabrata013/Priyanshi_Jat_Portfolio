"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link as ScrollLink } from "react-scroll"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/priyanshijat", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/priyanshi-jat-devops-engineer/", label: "LinkedIn" },
  ]

  return (
    <footer className="py-12 relative">
      <div className="absolute right-6 bottom-24">
        <ScrollLink to="hero" spy={true} smooth={true} duration={800}>
          <Button
            size="icon"
            className="rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <ArrowUp className="h-5 w-5" />
            </motion.div>
          </Button>
        </ScrollLink>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-6">
            {/* <span className="text-primary">Dev</span>Portfolio */}
          </div>

          <div className="flex space-x-4 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ y: -3 }}
                className="p-2 glass rounded-full hover:text-primary transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <div className="text-center text-muted-foreground">
            <p className="mb-2">&copy; {currentYear} Priyanshi Jat. All rights reserved.</p>
            <p className="text-sm">Built with Next.js, Tailwind CSS, and Framer Motion</p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
