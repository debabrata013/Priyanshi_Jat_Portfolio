"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Download, ArrowDown } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import { FaDocker, FaAws, FaLinux, FaGitAlt } from "react-icons/fa"
import { SiKubernetes, SiJenkins, SiTerraform, SiAnsible, SiPrometheus } from "react-icons/si"


export default function Hero() {
  return (
    <section id="hero" className="section min-h-screen flex flex-col justify-center relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-medium text-primary">Hello, I&apos;m</h2>
            <h1 className="text-4xl md:text-6xl font-bold">Priyanshi Jat</h1>
            <h3 className="text-2xl md:text-3xl text-muted-foreground">
              DevOps Engineer & Cloud Infrastructure Specialist.
            </h3>
            <p className="text-lg text-muted-foreground max-w-md">
              A lawyer-turned-DevOps enthusiast building scalable cloud infrastructure and automation solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://github.com/priyanshijat" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
  onClick={() => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.setAttribute('download', 'Priyanshi_Jat_Resume.pdf') // You can set any name you want
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }}
  variant="outline"
  size="lg"
  className="border-primary text-primary hover:bg-primary/10"
>
  <Download className="mr-2 h-5 w-5" />
  Download CV
</Button>

            </div>
          </div>
        </motion.div>

        {/* Right side icons animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="h-[400px] lg:h-[500px] flex flex-wrap justify-center items-center gap-6 glass rounded-xl p-6"
        >
          {[FaDocker, SiKubernetes, FaAws, SiJenkins, SiTerraform, SiAnsible, FaLinux, SiPrometheus, FaGitAlt].map((Icon, i) => (
            <motion.div
              key={i}
              className="text-primary text-5xl hover:scale-110 transition-transform"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll down arrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          className="flex flex-col items-center cursor-pointer group"
        >
          <span className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">
            Scroll Down
          </span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown className="h-5 w-5 group-hover:text-primary transition-colors" />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  )
}
