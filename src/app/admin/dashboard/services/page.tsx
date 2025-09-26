"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Clock, MapPin, Users } from "lucide-react"

const services = [
  {
    title: "Culte Principal",
    time: "Dimanche 10h00",
    location: "Sanctuaire principal",
    description: "Service de louange et prédication",
    attendees: "200-300 personnes",
  },
  {
    title: "École du Dimanche",
    time: "Dimanche 9h00",
    location: "Salles de classe",
    description: "Enseignement biblique par groupes d'âge",
    attendees: "50-80 personnes",
  },
  {
    title: "Prière du Mercredi",
    time: "Mercredi 19h00",
    location: "Salle de prière",
    description: "Temps de prière et intercession",
    attendees: "30-50 personnes",
  },
  {
    title: "Culte des Jeunes",
    time: "Vendredi 19h30",
    location: "Salle jeunesse",
    description: "Service spécialement conçu pour les jeunes",
    attendees: "40-60 personnes",
  },
]

export default function ServicesEditor() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Services</h1>
        <p className="text-muted-foreground">Gérez les services et cultes de votre église</p>
      </div>

      <div className="grid gap-4">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Modifier
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  {service.time}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {service.location}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  {service.attendees}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Settings className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Fonctionnalité en développement</h3>
          <p className="text-muted-foreground text-center mb-4">L'éditeur de services sera bientôt disponible</p>
        </CardContent>
      </Card>
    </div>
  )
}
