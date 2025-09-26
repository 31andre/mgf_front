"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTestimonials } from "@/hooks/use-content"
import { Plus, Edit, Trash2, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { Testimonial } from "@/lib/content-manager"

export default function TestimonialsEditor() {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial, isLoading } = useTestimonials()
  const { toast } = useToast()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
    image: "",
  })

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      content: "",
      image: "",
    })
    setEditingTestimonial(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingTestimonial) {
      updateTestimonial(editingTestimonial.id, { ...editingTestimonial, ...formData })
      toast({
        title: "Succès",
        description: "Le témoignage a été mis à jour avec succès.",
      })
    } else {
      const newTestimonial: Testimonial = {
        id: Date.now().toString(),
        ...formData,
      }
      addTestimonial(newTestimonial)
      toast({
        title: "Succès",
        description: "Le témoignage a été ajouté avec succès.",
      })
    }

    resetForm()
    setIsDialogOpen(false)
  }

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial)
    setFormData({
      name: testimonial.name,
      role: testimonial.role,
      content: testimonial.content,
      image: testimonial.image || "",
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    deleteTestimonial(id)
    toast({
      title: "Succès",
      description: "Le témoignage a été supprimé avec succès.",
    })
  }

  if (isLoading) {
    return <div>Chargement...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Témoignages</h1>
          <p className="text-muted-foreground">Gérez les témoignages de votre communauté</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="w-4 h-4 mr-2" />
              Nouveau témoignage
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingTestimonial ? "Modifier le témoignage" : "Nouveau témoignage"}</DialogTitle>
              <DialogDescription>Ajoutez un témoignage de membre de votre communauté</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Rôle/Titre</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                    placeholder="Membre, Diacre, etc."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Témoignage</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                  rows={5}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Photo (URL - optionnel)</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit">{editingTestimonial ? "Mettre à jour" : "Ajouter"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {testimonials.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <MessageSquare className="w-12 h-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Aucun témoignage</h3>
              <p className="text-muted-foreground text-center mb-4">Commencez par ajouter votre premier témoignage</p>
              <Button onClick={() => setIsDialogOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Ajouter un témoignage
              </Button>
            </CardContent>
          </Card>
        ) : (
          testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(testimonial)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(testimonial.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
