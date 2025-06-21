import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
// Import the SectionTransition component
import SectionTransition from "@/components/section-transition"

// Replace the existing main content with this:
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <SectionTransition id="hero">
          <Hero />
        </SectionTransition>
        <SectionTransition id="about">
          <About />
        </SectionTransition>
        <SectionTransition id="skills">
          <Skills />
        </SectionTransition>
        <SectionTransition id="projects">
          <Projects />
        </SectionTransition>
        <SectionTransition id="contact">
          <Contact />
        </SectionTransition>
        <Footer />
      </div>
    </main>
  )
}
