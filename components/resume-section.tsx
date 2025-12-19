"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Code2, Database, Cloud, Cpu } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const resumeCards = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    percentage: 95,
    color: "text-cyan-400",
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    percentage: 90,
    color: "text-purple-400",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    percentage: 85,
    color: "text-blue-400",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    percentage: 80,
    color: "text-pink-400",
  },
]

export function ResumeSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % resumeCards.length)
  const prevCard = () => setCurrentIndex((prev) => (prev - 1 + resumeCards.length) % resumeCards.length)

  return (
    <section id="resume" ref={sectionRef} className="py-32 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities
          </p>
        </div>

        {/* Card Carousel */}
        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {resumeCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <div key={card.title} className="w-full flex-shrink-0 px-4">
                    <Card
                      className={cn(
                        "p-8 bg-card/70 backdrop-blur-sm border-primary/20 transition-all duration-500",
                        index === currentIndex ? "scale-100 opacity-100" : "scale-95 opacity-50",
                      )}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={cn(
                            "p-4 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 border border-primary/30",
                            card.color,
                          )}
                        >
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold">{card.title}</h3>
                      </div>

                      {/* Skills */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {card.skills.map((skill) => (
                          <div
                            key={skill}
                            className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>

                      {/* Proficiency Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Proficiency</span>
                          <span className={cn("font-bold", card.color)}>{card.percentage}%</span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className={cn(
                              "h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-1000",
                              inView ? "w-full" : "w-0",
                            )}
                            style={{ width: inView ? `${card.percentage}%` : "0%" }}
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevCard}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 shadow-xl bg-transparent"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextCard}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 shadow-xl bg-transparent"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {resumeCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
