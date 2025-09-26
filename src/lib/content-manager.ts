"use client"

// Types pour les différentes sections
export interface HeroContent {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
}

export interface AboutContent {
  title: string
  description: string
  mission: string
  vision: string
  values: string[]
}

export interface Community {
  id: string
  name: string
  description: string
  schedule: string
  activities: string[]
  icon: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image?: string
}

export interface GalleryImage {
  id: string
  url: string
  title: string
  category: string
  description?: string
}

// Données par défaut
const defaultHeroContent: HeroContent = {
  title: "Bienvenue à Mission Glorieuse de la Foi",
  subtitle: "Une communauté de foi, d'espoir et d'amour",
  description:
    "Rejoignez notre famille spirituelle dans un environnement accueillant où chacun peut grandir dans la foi et servir avec amour.",
  ctaText: "Nous rejoindre",
  ctaLink: "#contact",
}

const defaultAboutContent: AboutContent = {
  title: "À Propos de MGF",
  description:
    "Mission Glorieuse de la Foi est une église chrétienne dédiée à l'évangélisation, à l'édification des croyants et au service communautaire.",
  mission: "Proclamer l'Évangile de Jésus-Christ et faire des disciples dans toutes les nations.",
  vision: "Être une église qui transforme des vies et impacte positivement notre communauté.",
  values: ["Foi", "Amour", "Service", "Intégrité", "Excellence"],
}

// Gestionnaire de contenu
class ContentManager {
  private getStorageKey(section: string): string {
    return `mgf-admin-${section}`
  }

  // Hero Section
  getHeroContent(): HeroContent {
    if (typeof window === "undefined") return defaultHeroContent
    const stored = localStorage.getItem(this.getStorageKey("hero"))
    return stored ? JSON.parse(stored) : defaultHeroContent
  }

  saveHeroContent(content: HeroContent): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.getStorageKey("hero"), JSON.stringify(content))
    }
  }

  // About Section
  getAboutContent(): AboutContent {
    if (typeof window === "undefined") return defaultAboutContent
    const stored = localStorage.getItem(this.getStorageKey("about"))
    return stored ? JSON.parse(stored) : defaultAboutContent
  }

  saveAboutContent(content: AboutContent): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.getStorageKey("about"), JSON.stringify(content))
    }
  }

  // Communities
  getCommunities(): Community[] {
    if (typeof window === "undefined") return []
    const stored = localStorage.getItem(this.getStorageKey("communities"))
    return stored ? JSON.parse(stored) : []
  }

  saveCommunities(communities: Community[]): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.getStorageKey("communities"), JSON.stringify(communities))
    }
  }

  // Events
  getEvents(): Event[] {
    if (typeof window === "undefined") return []
    const stored = localStorage.getItem(this.getStorageKey("events"))
    return stored ? JSON.parse(stored) : []
  }

  saveEvents(events: Event[]): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.getStorageKey("events"), JSON.stringify(events))
    }
  }

  // Testimonials
  getTestimonials(): Testimonial[] {
    if (typeof window === "undefined") return []
    const stored = localStorage.getItem(this.getStorageKey("testimonials"))
    return stored ? JSON.parse(stored) : []
  }

  saveTestimonials(testimonials: Testimonial[]): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.getStorageKey("testimonials"), JSON.stringify(testimonials))
    }
  }

  // Gallery
  getGalleryImages(): GalleryImage[] {
    if (typeof window === "undefined") return []
    const stored = localStorage.getItem(this.getStorageKey("gallery"))
    return stored ? JSON.parse(stored) : []
  }

  saveGalleryImages(images: GalleryImage[]): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.getStorageKey("gallery"), JSON.stringify(images))
    }
  }
}

export const contentManager = new ContentManager()
