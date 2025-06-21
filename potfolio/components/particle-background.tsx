"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25

        // Purple particles with varying opacity
        const purpleHue = 265 + Math.random() * 20 - 10 // 255-275 range for purple hues
        const saturation = 70 + Math.random() * 20 // 70-90% saturation
        const lightness = 60 + Math.random() * 20 // 60-80% lightness
        const opacity = Math.random() * 0.15 + 0.05 // 0.05-0.2 opacity

        this.color = `hsla(${purpleHue}, ${saturation}%, ${lightness}%, ${opacity})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (canvas && this.x > canvas.width) this.x = 0
        else if (this.x < 0 && canvas) this.x = canvas.width

        if (canvas && this.y > canvas.height) this.y = 0
        else if (this.y < 0 && canvas) this.y = canvas.height
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 8000), 150)

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const connectParticles = () => {
      const maxDistance = 150
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(138, 43, 226, ${opacity * 0.15})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (const particle of particles) {
          particle.update()
          particle.draw()
        }
      }

      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0a0a0c]" />
}
