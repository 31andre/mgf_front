import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Music, Baby, GraduationCap, Heart } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Culte Dominical",
      time: "Dimanche 10h00",
      description: "Service principal avec louange, prédication et communion fraternelle",
      icon: Users,
      location: "Sanctuaire principal",
    },
    {
      title: "École du Dimanche",
      time: "Dimanche 9h00",
      description: "Enseignement biblique adapté à tous les âges",
      icon: GraduationCap,
      location: "Salles de classe",
    },
    {
      title: "Soirée de Prière",
      time: "Mercredi 19h00",
      description: "Temps de prière collective et intercession",
      icon: Heart,
      location: "Salle de prière",
    },
    {
      title: "Louange & Adoration",
      time: "Vendredi 19h30",
      description: "Soirée dédiée à la louange et à l'adoration",
      icon: Music,
      location: "Sanctuaire principal",
    },
    {
      title: "Ministère Enfants",
      time: "Dimanche 10h00",
      description: "Programme spécialement conçu pour les enfants",
      icon: Baby,
      location: "Salle des enfants",
    },
    {
      title: "Groupe de Jeunes",
      time: "Samedi 18h00",
      description: "Rencontres pour les adolescents et jeunes adultes",
      icon: Users,
      location: "Salle des jeunes",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nos Services & Activités</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Découvrez nos différents services et activités conçus pour nourrir votre foi et renforcer votre relation
            avec Dieu et la communauté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {service.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {service.location}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-balance">Première Visite ?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty leading-relaxed">
              Nous serions ravis de vous accueillir ! N'hésitez pas à venir comme vous êtes. Notre équipe d'accueil sera
              là pour vous guider et répondre à vos questions.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Planifier ma visite
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
