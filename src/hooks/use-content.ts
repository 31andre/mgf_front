"use client"

import { useState, useEffect } from "react"
import {
  contentManager,
  type HeroContent,
  type AboutContent,
  type Community,
  type Event,
  type Testimonial,
  type GalleryImage,
} from "@/lib/content-manager"

// Hook pour le contenu Hero
export function useHeroContent() {
  const [content, setContent] = useState<HeroContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadContent = () => {
      const heroContent = contentManager.getHeroContent()
      setContent(heroContent)
      setIsLoading(false)
    }
    loadContent()
  }, [])

  const updateContent = (newContent: HeroContent) => {
    contentManager.saveHeroContent(newContent)
    setContent(newContent)
  }

  return { content, updateContent, isLoading }
}

// Hook pour le contenu About
export function useAboutContent() {
  const [content, setContent] = useState<AboutContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadContent = () => {
      const aboutContent = contentManager.getAboutContent()
      setContent(aboutContent)
      setIsLoading(false)
    }
    loadContent()
  }, [])

  const updateContent = (newContent: AboutContent) => {
    contentManager.saveAboutContent(newContent)
    setContent(newContent)
  }

  return { content, updateContent, isLoading }
}

// Hook pour les communautés
export function useCommunities() {
  const [communities, setCommunities] = useState<Community[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadCommunities = () => {
      const data = contentManager.getCommunities()
      setCommunities(data)
      setIsLoading(false)
    }
    loadCommunities()
  }, [])

  const updateCommunities = (newCommunities: Community[]) => {
    contentManager.saveCommunities(newCommunities)
    setCommunities(newCommunities)
  }

  const addCommunity = (community: Community) => {
    const updated = [...communities, community]
    updateCommunities(updated)
  }

  const updateCommunity = (id: string, updatedCommunity: Community) => {
    const updated = communities.map((c) => (c.id === id ? updatedCommunity : c))
    updateCommunities(updated)
  }

  const deleteCommunity = (id: string) => {
    const updated = communities.filter((c) => c.id !== id)
    updateCommunities(updated)
  }

  return {
    communities,
    updateCommunities,
    addCommunity,
    updateCommunity,
    deleteCommunity,
    isLoading,
  }
}

// Hook pour les événements
export function useEvents() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadEvents = () => {
      const data = contentManager.getEvents()
      setEvents(data)
      setIsLoading(false)
    }
    loadEvents()
  }, [])

  const updateEvents = (newEvents: Event[]) => {
    contentManager.saveEvents(newEvents)
    setEvents(newEvents)
  }

  const addEvent = (event: Event) => {
    const updated = [...events, event]
    updateEvents(updated)
  }

  const updateEvent = (id: string, updatedEvent: Event) => {
    const updated = events.map((e) => (e.id === id ? updatedEvent : e))
    updateEvents(updated)
  }

  const deleteEvent = (id: string) => {
    const updated = events.filter((e) => e.id !== id)
    updateEvents(updated)
  }

  return {
    events,
    updateEvents,
    addEvent,
    updateEvent,
    deleteEvent,
    isLoading,
  }
}

// Hook pour les témoignages
export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadTestimonials = () => {
      const data = contentManager.getTestimonials()
      setTestimonials(data)
      setIsLoading(false)
    }
    loadTestimonials()
  }, [])

  const updateTestimonials = (newTestimonials: Testimonial[]) => {
    contentManager.saveTestimonials(newTestimonials)
    setTestimonials(newTestimonials)
  }

  const addTestimonial = (testimonial: Testimonial) => {
    const updated = [...testimonials, testimonial]
    updateTestimonials(updated)
  }

  const updateTestimonial = (id: string, updatedTestimonial: Testimonial) => {
    const updated = testimonials.map((t) => (t.id === id ? updatedTestimonial : t))
    updateTestimonials(updated)
  }

  const deleteTestimonial = (id: string) => {
    const updated = testimonials.filter((t) => t.id !== id)
    updateTestimonials(updated)
  }

  return {
    testimonials,
    updateTestimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    isLoading,
  }
}

// Hook pour la galerie
export function useGallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadImages = () => {
      const data = contentManager.getGalleryImages()
      setImages(data)
      setIsLoading(false)
    }
    loadImages()
  }, [])

  const updateImages = (newImages: GalleryImage[]) => {
    contentManager.saveGalleryImages(newImages)
    setImages(newImages)
  }

  const addImage = (image: GalleryImage) => {
    const updated = [...images, image]
    updateImages(updated)
  }

  const updateImage = (id: string, updatedImage: GalleryImage) => {
    const updated = images.map((i) => (i.id === id ? updatedImage : i))
    updateImages(updated)
  }

  const deleteImage = (id: string) => {
    const updated = images.filter((i) => i.id !== id)
    updateImages(updated)
  }

  return {
    images,
    updateImages,
    addImage,
    updateImage,
    deleteImage,
    isLoading,
  }
}
