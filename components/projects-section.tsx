"use client"

import { useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A comprehensive analytics platform with ML-driven insights and real-time data visualization.",
    image: "/modern-analytics-dashboard-interface.jpg",
    tags: ["React", "Python", "TensorFlow", "AWS"],
    github: "https://github.com/yourusername/ai-powered-analytics-dashboard",
    demo: "https://yourusername.github.io/ai-powered-analytics-dashboard",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin panel.",
    image: "/modern-ecommerce-website.png",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourusername/e-commerce-platform",
    demo: "https://yourusername.github.io/e-commerce-platform",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Social Media App",
    description: "Real-time social networking application with messaging, posts, and story features.",
    image: "/social-media-mobile-app-interface.jpg",
    tags: ["React Native", "Firebase", "Redux", "WebSockets"],
    github: "https://github.com/yourusername/social-media-app",
    demo: "https://yourusername.github.io/social-media-app",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "DevOps Automation Tool",
    description: "CI/CD pipeline automation tool with containerization and cloud deployment capabilities.",
    image: "/devops-automation-dashboard.jpg",
    tags: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
    github: "https://github.com/yourusername/devops-automation-tool",
    demo: "https://yourusername.github.io/devops-automation-tool",
    color: "from-green-500 to-emerald-500",
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-32 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">Some of my recent work</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden bg-card/70 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t opacity-60 group-hover:opacity-40 transition-opacity",
                    project.color,
                  )}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:border-primary hover:bg-primary/10 bg-transparent"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.github, "_blank")
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.demo, "_blank")
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject !== null && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <Card
              className="max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-card border-primary/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={projects[selectedProject].image || "/placeholder.svg"}
                  alt={projects[selectedProject].title}
                  className="w-full aspect-video object-cover"
                />
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute top-4 right-4 rounded-full border-primary/50 bg-background/80 backdrop-blur-sm"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{projects[selectedProject].title}</h3>
                <p className="text-muted-foreground mb-6">{projects[selectedProject].description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    className="flex-1 bg-transparent"
                    variant="outline"
                    onClick={() => window.open(projects[selectedProject].github, "_blank")}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </Button>
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => window.open(projects[selectedProject].demo, "_blank")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
