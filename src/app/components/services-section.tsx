"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Music, Baby, GraduationCap, Heart } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "PRIERE D’INTERCESSION",
      time: "TOUS LES MERCREDI DE 19H-20H",
      description: "NOUS T’INVITONS À PARTICIPER A SES DIFFÉRENTS PROGRAMMES",
      icon: Users,
      location: "AU TEMPLE DE LA MISSION GLORIEUSE DE LA FOI, A COCODY FAYA",
    },
    {
      title: "CULTE DU SOIR",
      time: "TOUS LES VENDREDI DE 19H-21H",
      description: "NOUS T’INVITONS À PARTICIPER A SES DIFFÉRENTS PROGRAMMES",
      icon: GraduationCap,
      location: "AU TEMPLE DE LA MISSION GLORIEUSE DE LA FOI, A COCODY FAYA",
    },
    {
      title: "CULTE D’ADORATION & LOUANGE",
      time: "TOUS LES DIMANCHE DE 9H00-12H",
      description: "NOUS T’INVITONS À PARTICIPER A SES DIFFÉRENTS PROGRAMMES",
      icon: Heart,
      location: "AU TEMPLE DE LA MISSION GLORIEUSE DE LA FOI, A COCODY FAYA",
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
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Nos Services & Activités
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Découvrez nos différents services et activités conçus pour nourrir votre foi et renforcer votre relation avec Dieu et la communauté.
          </p>
        </div>

        {/* Carousel responsive */}
        <Carousel>
          <CarouselContent className="flex">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <CarouselItem
                  key={index}
                  className="
                    flex-shrink-0
                    basis-full    
                    sm:basis-1/2  
                    lg:basis-1/3       
                  "
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-md">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          {service.time}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-6 mr-2" />
                          {service.location}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed text-pretty lowercase">
                          {service.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>

          {/* Navigation */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/10 p-2 rounded-full" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/10 p-2 rounded-full" />
        </Carousel>

        {/* Bloc bas */}
        <div className="text-center mt-12">
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-balance">
              Première Visite ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty leading-relaxed">
              Nous serions ravis de vous accueillir ! N&apos;hésitez pas à venir comme vous êtes. Notre équipe d&apos;accueil sera là pour vous guider et répondre à vos questions.
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
