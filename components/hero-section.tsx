"use client"

import { useState, useEffect } from "react"
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div
        className="absolute w-96 h-96 rounded-full bg-primary/30 blur-3xl"
        style={{
          top: "20%",
          left: mousePosition.x * 0.02 + "%",
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"
        style={{
          bottom: "20%",
          right: mousePosition.x * 0.015 + "%",
          transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      <div className="container mx-auto px-4 z-10 text-center">
        {/* ========================================
            PROFILE IMAGE:
            Replace the src with your own photo path
            Put your photo in: public/images/photo.jpg
            ======================================== */}
        <div className="mb-8 inline-block">
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-primary animate-spin-slow blur-md"
              style={{ animationDuration: "3s" }}
            />
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img src="/images/photo.jpg" alt="Reza Asadi" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* ========================================
            NAME: Replace with your name
            ======================================== */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient">
          Reza Asadi
        </h1>

        {/* ========================================
            TITLE: Replace with your job title
            ======================================== */}
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">Computer Engineer</h2>

        {/* ========================================
            TAGLINE: Replace with your tagline
            ======================================== */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          Building the future, one line of code at a time
        </p>

        <div className="flex justify-center mb-12">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Connect with Me
          </Button>
        </div>

        {/* ========================================
            SOCIAL LINKS: Replace # with your actual URLs
            ======================================== */}
        <div className="flex gap-4 justify-center">
          {[
            { icon: Github, href: "#", label: "GitHub" }, // REPLACE: Your GitHub URL
            { icon: Linkedin, href: "#", label: "LinkedIn" }, // REPLACE: Your LinkedIn URL
          ].map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary/30"
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
