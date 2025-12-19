"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const certificates = [
  {
    category: "Machine Learning & Data Science",
    items: [
      {
        title: "Mastering Machine Learning with Python",
        issuer: "FaraDars",
        date: "June 2025",
        image: "/images/mastering-machine-learning.jpg",
        link: "https://faradars.org/verify/0CC3B50C",
      },
      {
        title: "Python Libraries for Machine Learning and Deep Learning",
        issuer: "FaraDars",
        date: "June 2025",
        image: "/images/python-libraries-ml-dl.png",
        link: "https://faradars.org/verify/9039C997",
      },
      {
        title: "Time Series",
        issuer: "Kaggle",
        date: "September 2025",
        image: "/images/time-series.png",
        link: "#",
      },
    ],
  },
  {
    category: "Computer Vision & Image Processing",
    items: [
      {
        title: "OpenCV Bootcamp - Grade 100%",
        issuer: "OpenCV University",
        date: "October 2025",
        image: "/images/opencv-bootcamp.png",
        link: "#",
      },
      {
        title: "Object Detection with Python and Algorithm Implementation",
        issuer: "FaraDars",
        date: "July 2025",
        image: "/images/object-detection.jpg",
        link: "https://faradars.org/verify/4F4757FD",
      },
      {
        title: "Professional Image Processing - Very Good Score",
        issuer: "Quera College",
        date: "July 2025",
        image: "/images/professional-image-processing.jpg",
        link: "https://quera.org/certificate/7y1YCbBA",
      },
    ],
  },
  {
    category: "NLP & Data Analysis",
    items: [
      {
        title: "Natural Language Processing (NLP) - Perfect Score",
        issuer: "Quera College",
        date: "March 2025",
        image: "/images/nlp-perfect.jpg",
        link: "https://quera.org/certificate/4Ptai4Wv",
      },
      {
        title: "Pandas",
        issuer: "Kaggle",
        date: "September 2025",
        image: "/images/pandas.png",
        link: "#",
      },
    ],
  },
]

export function CertificatesSection() {
  const [currentCategory, setCurrentCategory] = useState(0)
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  const nextCategory = () => setCurrentCategory((prev) => (prev + 1) % certificates.length)
  const prevCategory = () => setCurrentCategory((prev) => (prev - 1 + certificates.length) % certificates.length)

  return (
    <section id="certificates" className="py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-muted-foreground">Professional certifications and accomplishments</p>
        </div>

        {/* Certificate Gallery with Images */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentCategory * 100}%)` }}
            >
              {certificates.map((category, categoryIndex) => (
                <div key={category.category} className="w-full flex-shrink-0 px-4">
                  <div
                    className={cn(
                      "transition-all duration-500",
                      categoryIndex === currentCategory ? "scale-100 opacity-100" : "scale-95 opacity-0",
                    )}
                  >
                    <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                      {category.category}
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items.map((cert, index) => (
                        <Card
                          key={cert.title}
                          className={cn(
                            "group overflow-hidden bg-card/70 backdrop-blur-sm border-primary/20",
                            "hover:border-primary/50 hover:scale-105 transition-all duration-300",
                            "hover:shadow-xl hover:shadow-primary/20 cursor-pointer",
                          )}
                          onClick={() => setSelectedCert(categoryIndex * 10 + index)}
                        >
                          {/* Certificate Image */}
                          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                            <img
                              src={cert.image || "/placeholder.svg"}
                              alt={cert.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                            {/* View Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="p-3 rounded-full bg-primary/90 backdrop-blur-sm">
                                <ExternalLink className="w-6 h-6 text-primary-foreground" />
                              </div>
                            </div>
                          </div>

                          {/* Certificate Info */}
                          <div className="p-4">
                            <h4 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {cert.title}
                            </h4>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span className="truncate">{cert.issuer}</span>
                              <span className="ml-2 flex-shrink-0">{cert.date}</span>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevCategory}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 shadow-xl z-10 bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextCategory}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 shadow-xl z-10 bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Category Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCategory(index)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  index === currentCategory
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted",
                )}
              >
                {certificates[index].category}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Modal - Full Size View */}
        {selectedCert !== null &&
          (() => {
            const categoryIdx = Math.floor(selectedCert / 10)
            const certIdx = selectedCert % 10
            const cert = certificates[categoryIdx]?.items[certIdx]

            if (!cert) return null

            return (
              <div
                className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedCert(null)}
              >
                <Card
                  className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card border-primary/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Full Certificate Image */}
                  <div className="relative">
                    <img src={cert.image || "/placeholder.svg"} alt={cert.title} className="w-full h-auto" />
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute top-4 right-4 rounded-full border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-background"
                      onClick={() => setSelectedCert(null)}
                    >
                      <ExternalLink className="w-5 h-5 rotate-45" />
                    </Button>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-2">{cert.title}</h3>
                    <div className="flex items-center gap-3 text-muted-foreground mb-6">
                      <span className="text-lg">{cert.issuer}</span>
                      <span>•</span>
                      <span className="text-lg">{cert.date}</span>
                    </div>

                    {cert.link !== "#" && (
                      <Button
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => window.open(cert.link, "_blank")}
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Verify Certificate
                      </Button>
                    )}
                  </div>
                </Card>
              </div>
            )
          })()}
      </div>
    </section>
  )
}
