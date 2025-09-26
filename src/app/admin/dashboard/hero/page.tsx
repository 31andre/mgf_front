"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useHeroContent } from "@/hooks/use-content"
import { Save, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function HeroEditor() {
  const { content, updateContent, isLoading } = useHeroContent()
  const { toast } = useToast()
  const [formData, setFormData] = useState(
    content || {
      title: "",
      subtitle: "",
      description: "",
      ctaText: "",
      ctaLink: "",
    },
  )

  // Update form when content loads
  useState(() => {
    if (content) {
      setFormData(content)
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateContent(formData)
    toast({
      title: "Succès",
      description: "La section Hero a été mise à jour avec succès.",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isLoading) {
    return <div>Chargement...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Section Hero</h1>
          <p className="text-muted-foreground">Modifiez le contenu de la section principale de votre site</p>
        </div>
        <Button variant="outline" asChild>
          <a href="/" target="_blank" rel="noreferrer">
            <Eye className="w-4 h-4 mr-2" />
            Prévisualiser
          </a>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contenu Hero</CardTitle>
          <CardDescription>Personnalisez le titre, sous-titre et description de votre page d'accueil</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Titre principal</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Bienvenue à Mission Glorieuse de la Foi"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subtitle">Sous-titre</Label>
              <Input
                id="subtitle"
                value={formData.subtitle}
                onChange={(e) => handleChange("subtitle", e.target.value)}
                placeholder="Une communauté de foi, d'espoir et d'amour"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Rejoignez notre famille spirituelle..."
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ctaText">Texte du bouton</Label>
                <Input
                  id="ctaText"
                  value={formData.ctaText}
                  onChange={(e) => handleChange("ctaText", e.target.value)}
                  placeholder="Nous rejoindre"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ctaLink">Lien du bouton</Label>
                <Input
                  id="ctaLink"
                  value={formData.ctaLink}
                  onChange={(e) => handleChange("ctaLink", e.target.value)}
                  placeholder="#contact"
                />
              </div>
            </div>

            <Button type="submit" className="w-full md:w-auto">
              <Save className="w-4 h-4 mr-2" />
              Sauvegarder les modifications
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
