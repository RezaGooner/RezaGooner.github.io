"use client"

import { useState, useEffect } from "react"
import { Home, User, FileText, GraduationCap, Award, FolderOpen, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: User, label: "About", href: "#about" },
  { icon: FileText, label: "Resume", href: "#resume" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: Award, label: "Certificates", href: "#certificates" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)

      const sections = navItems.map((item) => item.href.slice(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={cn(
        "fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none",
      )}
    >
      <div className="flex items-center gap-2 bg-card/80 backdrop-blur-xl border border-primary/20 rounded-full px-4 py-3 shadow-xl shadow-primary/10">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.href.slice(1)
          return (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "p-2.5 rounded-full transition-all duration-300 relative group",
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "hover:bg-primary/10 text-muted-foreground hover:text-primary",
              )}
              aria-label={item.label}
            >
              <Icon className="w-4 h-4" />
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-card/90 backdrop-blur-sm border border-primary/20 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
