"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Camera } from "lucide-react"
import Link from "next/link"

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/church-worship-service-with-people-praying.jpg",
      alt: "Service de culte dominical",
      title: "Culte Dominical",
    },
    {
      src: "/church-community-gathering-with-families.jpg",
      alt: "Rassemblement communautaire",
      title: "Vie Communautaire",
    },
    {
      src: "/church-baptism-ceremony-in-water.jpg",
      alt: "Cérémonie de baptême",
      title: "Baptêmes",
    },
    {
      src: "/placeholder-d7nwg.png",
      alt: "Activités des jeunes",
      title: "Jeunesse",
    },
    {
      src: "/placeholder-cpcy5.png",
      alt: "Chorale de l'église",
      title: "Ministère Musical",
    },
    {
      src: "/placeholder-5elpr.png",
      alt: "Service communautaire",
      title: "Service",
    },
  ]

  return (
    <section id="galerie" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-foreground">Galerie</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez la vie de notre communauté à travers ces moments précieux partagés ensemble
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
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
                  <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/galerie">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Voir toute la galerie
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
