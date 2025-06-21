"use client"

import { type ReactNode, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { Events } from "react-scroll"

interface SectionTransitionProps {
  children: ReactNode
  id: string
  className?: string
}

export default function SectionTransition({ children, id, className = "" }: SectionTransitionProps) {
  const pathname = usePathname()

  useEffect(() => {
    const handleSetActive = (to: string) => {
      if (to === id) {
        // Update URL without page reload
        window.history.pushState({}, "", `${pathname}#${id}`)
      }
    }

    const handleSetInactive = () => {
      // Handle inactive state if needed
    }

    const handleEnter = () => {
      // Handle enter state if needed
    }

    const handleLeave = () => {
      // Handle leave state if needed
    }

    Events.scrollEvent.register("begin", handleSetInactive)
    Events.scrollEvent.register("end", handleSetActive)
    Events.scrollEvent.register("enter", handleEnter)
    Events.scrollEvent.register("leave", handleLeave)

    // Check if this section is in view on initial load
    const hash = window.location.hash.replace("#", "")
    if (hash === id) {
      // Scroll to this section on initial load if it matches the hash
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }

    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
      Events.scrollEvent.remove("enter")
      Events.scrollEvent.remove("leave")
    }
  }, [id, pathname])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section id={id} className={`section ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={variants}
          viewport={{ once: true, amount: 0.25 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
