"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useAnalytics } from "@/hooks/use-analytics"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"

export default function GalleriePage() {
  const { trackPageView } = useAnalytics()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    trackPageView("Galerie")
  }, [trackPageView])

  const allImages = [
    {
      src: "/placeholder-je6qk.png",
      alt: "Service de culte dominical",
      title: "Culte Dominical",
      category: "Cultes",
    },
    {
      src: "/placeholder-5g5oh.png",
      alt: "Rassemblement communautaire",
      title: "Repas Communautaire",
      category: "Communauté",
    },
    {
      src: "/placeholder-lzr7m.png",
      alt: "Cérémonie de baptême",
      title: "Baptême",
      category: "Sacrements",
    },
    {
      src: "/placeholder-pm7qi.png",
      alt: "Activités des jeunes",
      title: "Groupe de Jeunes",
      category: "Jeunesse",
    },
    {
      src: "/placeholder-h9m6a.png",
      alt: "Chorale de l'église",
      title: "Ministère Musical",
      category: "Musique",
    },
    {
      src: "/placeholder-21yi9.png",
      alt: "Service communautaire",
      title: "Action Sociale",
      category: "Service",
    },
    {
      src: "/placeholder-ajhky.png",
      alt: "Réunion de prière",
      title: "Intercession",
      category: "Prière",
    },
    {
      src: "/placeholder-maawe.png",
      alt: "École du dimanche",
      title: "École du Dimanche",
      category: "Enfants",
    },
    {
      src: "/placeholder-qioeb.png",
      alt: "Cérémonie de mariage",
      title: "Mariage",
      category: "Sacrements",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Conférence spirituelle",
      title: "Conférence",
      category: "Événements",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Pique-nique familial",
      title: "Sortie Familiale",
      category: "Communauté",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Célébration de Noël",
      title: "Fête de Noël",
      category: "Événements",
    },
  ]

  const categories = ["Tous", ...Array.from(new Set(allImages.map((img) => img.category)))]
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const filteredImages =
    selectedCategory === "Tous" ? allImages : allImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Camera className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-5xl font-bold text-foreground">Galerie Photo</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revivez les moments forts de notre communauté à travers ces images qui témoignent de la vie spirituelle et
            fraternelle de l'église Mission Glorieuse de la Foi
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div
                    className={`absolute bottom-4 left-4 right-4 transform transition-all duration-300 ${
                      hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    <span className="inline-block bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={filteredImages[selectedImage].src || "/placeholder.svg"}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">{filteredImages[selectedImage].title}</h3>
              <span className="inline-block bg-primary/80 text-primary-foreground text-sm px-3 py-1 rounded-full">
                {filteredImages[selectedImage].category}
              </span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      )}

      <Footer />
    </main>
  )
}
