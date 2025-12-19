"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, BookOpen, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const educationData = [
  {
    icon: GraduationCap,
    year: "2015 - 2019",
    title: "Bachelor's in Computer Engineering",
    institution: "Massachusetts Institute of Technology",
    description: "Specialized in Software Engineering and AI",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    year: "2020",
    title: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    description: "Professional level cloud architecture certification",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: BookOpen,
    year: "2021",
    title: "Full Stack Web Development",
    institution: "freeCodeCamp",
    description: "Comprehensive modern web development curriculum",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    year: "2022",
    title: "Machine Learning Specialization",
    institution: "Stanford University (Coursera)",
    description: "Advanced ML algorithms and neural networks",
    color: "from-purple-500 to-pink-500",
  },
]

export function EducationSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="py-32 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-lg text-muted-foreground">My path of continuous learning and growth</p>
        </div>

        <div className="relative">
          {/* SVG Winding Path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 1000 800"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                <stop offset="50%" stopColor="hsl(188, 100%, 50%)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M 100,100 
                 C 250,100 350,100 450,150 
                 S 650,200 750,150 
                 S 900,100 900,200
                 C 900,300 750,350 600,350
                 S 300,400 200,450
                 S 100,500 100,550
                 C 100,650 300,700 500,700
                 S 800,700 900,650"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="12 8"
              filter="url(#glow)"
              className={cn(
                "transition-all duration-[3000ms]",
                inView ? "stroke-dashoffset-0 opacity-100" : "stroke-dashoffset-[2000] opacity-0",
              )}
              style={{
                strokeDashoffset: inView ? 0 : 2000,
              }}
            />
          </svg>

          {/* Timeline Items in Winding Pattern */}
          <div className="relative grid gap-16 md:gap-24">
            {educationData.map((item, index) => {
              const Icon = item.icon
              // Alternate positions for winding effect
              const positions = [
                "md:ml-0 md:mr-auto md:max-w-md",
                "md:ml-auto md:mr-0 md:max-w-md",
                "md:ml-0 md:mr-auto md:max-w-md md:translate-x-12",
                "md:ml-auto md:mr-0 md:max-w-md md:-translate-x-12",
              ]

              return (
                <div
                  key={item.title}
                  className={cn(
                    "relative transition-all duration-700",
                    positions[index % 4],
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  )}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  {/* Connector Dot */}
                  <div
                    className={cn(
                      "absolute hidden md:flex items-center justify-center",
                      "w-8 h-8 rounded-full bg-gradient-to-br border-4 border-background shadow-lg z-10",
                      item.color,
                      index % 2 === 0 ? "-right-16" : "-left-16",
                      "top-1/2 -translate-y-1/2",
                    )}
                    style={{
                      boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <Card
                    className={cn(
                      "p-6 bg-card/70 backdrop-blur-sm border-primary/20 hover:border-primary/50",
                      "hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500",
                      "hover:scale-105 group relative overflow-hidden",
                    )}
                  >
                    {/* Animated Background Glow */}
                    <div
                      className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                        "bg-gradient-to-br",
                        item.color,
                      )}
                    />

                    <div className="relative flex items-start gap-4">
                      <div
                        className={cn(
                          "p-3 rounded-xl bg-gradient-to-br border border-primary/30 flex-shrink-0",
                          "group-hover:scale-110 transition-transform duration-300",
                          item.color,
                        )}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-primary font-semibold mb-1">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <div className="text-muted-foreground text-sm mb-2">{item.institution}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>

                    {/* Step Number Badge */}
                    <div
                      className={cn(
                        "absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center",
                        "bg-gradient-to-br font-bold text-white text-sm shadow-lg",
                        item.color,
                      )}
                    >
                      {index + 1}
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Animated Traveler Dot */}
          <div
            className={cn(
              "absolute hidden md:block w-4 h-4 rounded-full bg-cyan-400 shadow-lg transition-all duration-[3000ms]",
              inView ? "opacity-100" : "opacity-0",
            )}
            style={{
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.4)",
              top: inView ? "85%" : "10%",
              left: inView ? "85%" : "10%",
              transition: "all 3s ease-in-out",
            }}
          />
        </div>
      </div>
    </section>
  )
}
