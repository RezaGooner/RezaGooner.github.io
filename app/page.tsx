"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { ResumeSection } from "@/components/resume-section"
import { EducationSection } from "@/components/education-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingNav } from "@/components/floating-nav"
import { ParticleBackground } from "@/components/particle-background"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <FloatingNav />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <TechStackSection />
        <EducationSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
