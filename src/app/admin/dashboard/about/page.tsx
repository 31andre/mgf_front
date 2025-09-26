"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAboutContent } from "@/hooks/use-content"
import { Save, Plus, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AboutEditor() {
  const { content, updateContent, isLoading } = useAboutContent()
  const { toast } = useToast()
  const [formData, setFormData] = useState(
    content || {
      title: "",
      description: "",
      mission: "",
      vision: "",
      values: [],
    },
  )
  const [newValue, setNewValue] = useState("")

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
      description: "La section À Propos a été mise à jour avec succès.",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addValue = () => {
    if (newValue.trim()) {
      setFormData((prev) => ({
        ...prev,
        values: [...prev.values, newValue.trim()],
      }))
      setNewValue("")
    }
  }

  const removeValue = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      values: prev.values.filter((_, i) => i !== index),
    }))
  }

  if (isLoading) {
    return <div>Chargement...</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Section À Propos</h1>
        <p className="text-muted-foreground">Modifiez les informations sur votre église</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contenu À Propos</CardTitle>
          <CardDescription>Personnalisez la présentation de votre église</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Titre de la section</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="À Propos de MGF"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description générale</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Mission Glorieuse de la Foi est une église chrétienne..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mission">Notre Mission</Label>
              <Textarea
                id="mission"
                value={formData.mission}
                onChange={(e) => handleChange("mission", e.target.value)}
                placeholder="Proclamer l'Évangile de Jésus-Christ..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vision">Notre Vision</Label>
              <Textarea
                id="vision"
                value={formData.vision}
                onChange={(e) => handleChange("vision", e.target.value)}
                placeholder="Être une église qui transforme des vies..."
                rows={3}
              />
            </div>

            <div className="space-y-4">
              <Label>Nos Valeurs</Label>
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.values.map((value, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {value}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-4 w-4 p-0 hover:bg-transparent"
                      onClick={() => removeValue(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  placeholder="Ajouter une valeur"
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addValue())}
                />
                <Button type="button" onClick={addValue}>
                  <Plus className="w-4 h-4" />
                </Button>
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
