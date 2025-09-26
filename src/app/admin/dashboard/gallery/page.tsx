"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGallery } from "@/hooks/use-content"
import { Plus, Edit, Trash2, ImageIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { GalleryImage } from "@/lib/content-manager"
import { ImageUpload } from "@/app/components/image-upload"

const categories = ["Cultes", "Événements", "Communauté", "Baptêmes", "Mariages", "Jeunesse", "Autres"]

export default function GalleryEditor() {
  const { images, addImage, updateImage, deleteImage, isLoading } = useGallery()
  const { toast } = useToast()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null)
  const [formData, setFormData] = useState({
    url: "",
    title: "",
    category: "",
    description: "",
  })

  const resetForm = () => {
    setFormData({
      url: "",
      title: "",
      category: "",
      description: "",
    })
    setEditingImage(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingImage) {
      updateImage(editingImage.id, { ...editingImage, ...formData })
      toast({
        title: "Succès",
        description: "L'image a été mise à jour avec succès.",
      })
    } else {
      const newImage: GalleryImage = {
        id: Date.now().toString(),
        ...formData,
      }
      addImage(newImage)
      toast({
        title: "Succès",
        description: "L'image a été ajoutée avec succès.",
      })
    }

    resetForm()
    setIsDialogOpen(false)
  }

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image)
    setFormData({
      url: image.url,
      title: image.title,
      category: image.category,
      description: image.description || "",
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    deleteImage(id)
    toast({
      title: "Succès",
      description: "L'image a été supprimée avec succès.",
    })
  }

  if (isLoading) {
    return <div>Chargement...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Galerie</h1>
          <p className="text-muted-foreground">Gérez les images de votre galerie</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="w-4 h-4 mr-2" />
              Nouvelle image
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingImage ? "Modifier l'image" : "Nouvelle image"}</DialogTitle>
              <DialogDescription>Ajoutez une nouvelle image à votre galerie</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <ImageUpload
                value={formData.url}
                onChange={(url) => setFormData((prev) => ({ ...prev, url }))}
                placeholder="Sélectionner une image pour la galerie"
              />

              <div className="space-y-2">
                <Label htmlFor="title">Titre</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Catégorie</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (optionnel)</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit">{editingImage ? "Mettre à jour" : "Ajouter"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {images.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <ImageIcon className="w-12 h-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Aucune image</h3>
              <p className="text-muted-foreground text-center mb-4">Commencez par ajouter votre première image</p>
              <Button onClick={() => setIsDialogOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Ajouter une image
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <Card key={image.id}>
                <CardHeader className="p-0">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-sm">{image.title}</CardTitle>
                      <CardDescription className="text-xs">{image.category}</CardDescription>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(image)}>
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(image.id)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  {image.description && <p className="text-xs text-muted-foreground">{image.description}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
