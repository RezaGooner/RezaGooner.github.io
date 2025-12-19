"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Zap, Users, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const stats = [
  { icon: Code, label: "Years of Experience", value: 5, suffix: "+" }, // REPLACE: Your years of experience
  { icon: Zap, label: "Projects Completed", value: 50, suffix: "+" }, // REPLACE: Your project count
  { icon: Users, label: "Happy Clients", value: 30, suffix: "+" }, // REPLACE: Your client count
  { icon: Trophy, label: "Awards Won", value: 12, suffix: "" }, // REPLACE: Your awards count
]

export function AboutSection() {
  const [inView, setInView] = useState(false)
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return

    stats.forEach((stat, index) => {
      const duration = 2000
      const steps = 60
      const increment = stat.value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timer)
        }
        setAnimatedValues((prev) => {
          const newValues = [...prev]
          newValues[index] = Math.floor(current)
          return newValues
        })
      }, duration / steps)
    })
  }, [inView])

  return (
    <section id="about" ref={sectionRef} className="py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          {/* ========================================
              ABOUT TEXT REPLACEMENT:
              ========================================
              Replace the text below with your own bio
              ======================================== */}
          {/* REPLACE: Your personal bio */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Passionate Computer Engineer with expertise in full-stack development, cloud architecture, and cutting-edge
            AI technologies. I transform complex problems into elegant, scalable solutions.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.label}
                className={cn(
                  "p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 text-center",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/30">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {animatedValues[index]}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
