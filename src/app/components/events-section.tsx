import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, BookOpen } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel"
export function EventsSection() {
  const events = [
    
    {
      title: "Culte Spéciale",
      date: "22-24 Mars 2024",
      time: "Vendredi 18h - Dimanche 16h",
      location: "Mission Glorieuse de la Foi Cocody Faya",
      description: "Week-end de ressourcement spirituel avec enseignements, prière et communion fraternelle",
      theme: "c'est ta saison",
      image: "/images/IMG2.jpg",
    },
    {
      title: "BEER SHEBA 2025",
      date: "15 Mars 2024",
      time: "19h00 - 21h00",
      location: "Mission Glorieuse de la Foi Cocody Faya",
      description:
        'Une soirée inspirante avec le pasteur invité Dr. Emmanuel Kouassi sur le thème "Marcher dans la destinée de Dieu"',
      theme: "Une nouvelle saison",
      image: "/images/IMG3.jpg",
    },
    {
      title: "VEILLE DE PRIERE",
      date: "5 Avril 2024",
      time: "20h00 - 22h00",
      location: "Mission Glorieuse de la Foi Cocody Faya",
      description: "Soirée de louange et d'adoration avec l'équipe musicale et des invités spéciaux",
      theme: "LA GUERRE DE LA DESTINEE",
      image: "/images/IMG5.jpg",
    },
    {
      title: "CULTE DE DESTINEE",
      date: "20 Avril 2024",
      time: "10h00 - 17h00",
      location: "Mission Glorieuse de la Foi Cocody Faya",
      description: "Pique-nique, jeux et activités pour toute la famille dans une ambiance conviviale",
      theme: "Ma jeunesse pour christ",
      image: "/images/IMG4.jpg",
    },
    {
      title: "Séminaire Mariage",
      date: "10-11 Mai 2024",
      time: "Samedi 9h - Dimanche 16h",
      location: "Mission Glorieuse de la Foi Cocody Faya",
      description: "Formation pour couples mariés et fiancés sur les fondements bibliques du mariage",
      theme: "Inscription requise",
      image: "/marriage-seminar-with-couples-sitting-together-lis.jpg",
    },
    {
      title: "Mission Humanitaire",
      date: "25 Mai 2024",
      time: "8h00 - 18h00",
      location: "Mission Glorieuse de la Foi Cocody Faya",
      description: "Distribution de vivres et vêtements aux familles dans le besoin",
      theme: "Bénévoles recherchés",
      image: "/volunteers-distributing-food-and-clothes-to-famili.jpg",
    },
  ]

  return (
    <section id="evenements" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Événements à Venir
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Rejoignez-nous pour nos prochains événements spéciaux conçus pour enrichir votre vie spirituelle et
            renforcer les liens communautaires.
          </p>
        </div>

        {/* Carousel */}
        <Carousel>
          <CarouselContent className="flex">
            {events.map((event, index) => (
              <CarouselItem
                key={index}
                className="
                  flex-shrink-0
                  basis-full       /* mobile: 1 card */
                  sm:basis-1/2     /* tablette: 2 cards */
                  lg:basis-1/3     /* PC: 3 cards */
                "
              >
                <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                  {/* Image */}
                  <div className="w-full h-96 relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-lg text-balance">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between h-full">
                      <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-2 text-primary" />
                          {event.theme}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-primary" />
                          {event.location}
                        </div>
                        
                      </div>

                      {/* <p className="text-muted-foreground text-sm leading-relaxed text-pretty mb-4">
                        {event.description}
                      </p> */}

                      <Button className="w-full bg-transparent" variant="outline">
                        S&apos;inscrire
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>


          {/* Navigation */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/10 p-2 rounded-full" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/10 p-2 rounded-full" />
        </Carousel>

        {/* Newsletter */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/10">
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-balance">Restez Informé</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty leading-relaxed">
              Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles sur nos événements et activités
              communautaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="px-6 py-2">S&apos;abonner</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
