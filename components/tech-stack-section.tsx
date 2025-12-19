"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const technologies = [
  { name: "React", logo: "⚛️", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", logo: "▲", color: "from-gray-700 to-gray-900" },
  { name: "TypeScript", logo: "TS", color: "from-blue-500 to-blue-700" },
  { name: "Python", logo: "🐍", color: "from-yellow-400 to-blue-500" },
  { name: "Node.js", logo: "⬢", color: "from-green-500 to-green-700" },
  { name: "AWS", logo: "☁️", color: "from-orange-400 to-yellow-500" },
  { name: "Docker", logo: "🐳", color: "from-blue-400 to-cyan-500" },
  { name: "PostgreSQL", logo: "🐘", color: "from-blue-600 to-blue-800" },
  { name: "MongoDB", logo: "🍃", color: "from-green-500 to-green-700" },
  { name: "Git", logo: "📦", color: "from-orange-500 to-red-600" },
]

export function TechStackSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tech-stack" ref={sectionRef} className="py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground">Technologies I work with</p>
        </div>

        {/* Floating Tech Logos */}
        <div className="relative h-96 max-w-4xl mx-auto">
          {technologies.map((tech, index) => {
            const angle = (index / technologies.length) * 2 * Math.PI
            const radius = 180
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <div
                key={tech.name}
                className={cn(
                  "absolute left-1/2 top-1/2 transition-all duration-1000 ease-out",
                  inView ? "opacity-100" : "opacity-0",
                )}
                style={{
                  transform: inView ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` : "translate(-50%, -50%)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="group relative">
                  <div
                    className={cn(
                      "w-20 h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center text-3xl",
                      "border border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/30",
                      "hover:scale-110 transition-all duration-300 cursor-pointer",
                      "backdrop-blur-sm bg-card/80",
                      tech.color,
                    )}
                    style={{
                      animation: `float ${3 + index * 0.2}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <span className="filter drop-shadow-lg">{tech.logo}</span>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="px-3 py-1 bg-card/90 backdrop-blur-sm border border-primary/20 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                      {tech.name}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}
