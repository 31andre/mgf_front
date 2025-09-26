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
import { Badge } from "@/components/ui/badge"
import { useCommunities } from "@/hooks/use-content"
import { Plus, Edit, Trash2, Users, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { Community } from "@/lib/content-manager"

export default function CommunitiesEditor() {
  const { communities, addCommunity, updateCommunity, deleteCommunity, isLoading } = useCommunities()
  const { toast } = useToast()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCommunity, setEditingCommunity] = useState<Community | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    schedule: "",
    activities: [] as string[],
    icon: "",
  })
  const [newActivity, setNewActivity] = useState("")

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      schedule: "",
      activities: [],
      icon: "",
    })
    setNewActivity("")
    setEditingCommunity(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingCommunity) {
      updateCommunity(editingCommunity.id, { ...editingCommunity, ...formData })
      toast({
        title: "Succès",
        description: "La communauté a été mise à jour avec succès.",
      })
    } else {
      const newCommunity: Community = {
        id: Date.now().toString(),
        ...formData,
      }
      addCommunity(newCommunity)
      toast({
        title: "Succès",
        description: "La communauté a été ajoutée avec succès.",
      })
    }

    resetForm()
    setIsDialogOpen(false)
  }

  const handleEdit = (community: Community) => {
    setEditingCommunity(community)
    setFormData({
      name: community.name,
      description: community.description,
      schedule: community.schedule,
      activities: community.activities,
      icon: community.icon,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    deleteCommunity(id)
    toast({
      title: "Succès",
      description: "La communauté a été supprimée avec succès.",
    })
  }

  const addActivity = () => {
    if (newActivity.trim()) {
      setFormData((prev) => ({
        ...prev,
        activities: [...prev.activities, newActivity.trim()],
      }))
      setNewActivity("")
    }
  }

  const removeActivity = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      activities: prev.activities.filter((_, i) => i !== index),
    }))
  }

  if (isLoading) {
    return <div>Chargement...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Communautés</h1>
          <p className="text-muted-foreground">Gérez les communautés de votre église</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="w-4 h-4 mr-2" />
              Nouvelle communauté
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingCommunity ? "Modifier la communauté" : "Nouvelle communauté"}</DialogTitle>
              <DialogDescription>Remplissez les informations de la communauté</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="schedule">Horaires</Label>
                <Input
                  id="schedule"
                  value={formData.schedule}
                  onChange={(e) => setFormData((prev) => ({ ...prev, schedule: e.target.value }))}
                  placeholder="Dimanche 14h-16h"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="icon">Icône (nom Lucide)</Label>
                <Input
                  id="icon"
                  value={formData.icon}
                  onChange={(e) => setFormData((prev) => ({ ...prev, icon: e.target.value }))}
                  placeholder="Users, Heart, Music, etc."
                />
              </div>

              <div className="space-y-4">
                <Label>Activités</Label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.activities.map((activity, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {activity}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-4 w-4 p-0 hover:bg-transparent"
                        onClick={() => removeActivity(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newActivity}
                    onChange={(e) => setNewActivity(e.target.value)}
                    placeholder="Ajouter une activité"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addActivity())}
                  />
                  <Button type="button" onClick={addActivity}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit">{editingCommunity ? "Mettre à jour" : "Ajouter"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {communities.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Users className="w-12 h-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Aucune communauté</h3>
              <p className="text-muted-foreground text-center mb-4">Commencez par ajouter votre première communauté</p>
              <Button onClick={() => setIsDialogOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Ajouter une communauté
              </Button>
            </CardContent>
          </Card>
        ) : (
          communities.map((community) => (
            <Card key={community.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      {community.name}
                    </CardTitle>
                    <CardDescription className="mt-2">{community.description}</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(community)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(community.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <strong>Horaires:</strong> {community.schedule}
                  </p>
                  {community.activities.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">Activités:</p>
                      <div className="flex flex-wrap gap-1">
                        {community.activities.map((activity, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
