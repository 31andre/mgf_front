import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      title: "Conférence Spirituelle",
      date: "15 Mars 2024",
      time: "19h00 - 21h00",
      location: "Sanctuaire principal",
      description:
        'Une soirée inspirante avec le pasteur invité Dr. Emmanuel Kouassi sur le thème "Marcher dans la destinée de Dieu"',
      attendees: "200+ participants attendus",
      image: "/spiritual-conference-with-pastor-speaking-to-congr.jpg",
    },
    {
      title: "Retraite Spirituelle",
      date: "22-24 Mars 2024",
      time: "Vendredi 18h - Dimanche 16h",
      location: "Centre de retraite Les Cèdres",
      description: "Week-end de ressourcement spirituel avec enseignements, prière et communion fraternelle",
      attendees: "80 places disponibles",
      image: "/peaceful-retreat-center-in-nature-with-people-pray.jpg",
    },
    {
      title: "Concert de Louange",
      date: "5 Avril 2024",
      time: "20h00 - 22h00",
      location: "Sanctuaire principal",
      description: "Soirée de louange et d'adoration avec l'équipe musicale et des invités spéciaux",
      attendees: "Entrée libre",
      image: "/worship-concert-with-musicians-and-singers-on-stag.jpg",
    },
    {
      title: "Journée Familiale",
      date: "20 Avril 2024",
      time: "10h00 - 17h00",
      location: "Parc municipal",
      description: "Pique-nique, jeux et activités pour toute la famille dans une ambiance conviviale",
      attendees: "Toutes les familles bienvenues",
      image: "/church-family-picnic-with-children-playing-and-fam.jpg",
    },
    {
      title: "Séminaire Mariage",
      date: "10-11 Mai 2024",
      time: "Samedi 9h - Dimanche 16h",
      location: "Salle de conférence",
      description: "Formation pour couples mariés et fiancés sur les fondements bibliques du mariage",
      attendees: "Inscription requise",
      image: "/marriage-seminar-with-couples-sitting-together-lis.jpg",
    },
    {
      title: "Mission Humanitaire",
      date: "25 Mai 2024",
      time: "8h00 - 18h00",
      location: "Quartier défavorisé",
      description: "Distribution de vivres et vêtements aux familles dans le besoin",
      attendees: "Bénévoles recherchés",
      image: "/volunteers-distributing-food-and-clothes-to-famili.jpg",
    },
  ]

  return (
    <section id="evenements" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Événements à Venir</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Rejoignez-nous pour nos prochains événements spéciaux conçus pour enrichir votre vie spirituelle et
            renforcer les liens communautaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              </div>

              <CardHeader>
                <CardTitle className="text-lg text-balance">{event.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    {event.attendees}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed text-pretty mb-4">{event.description}</p>

                <Button className="w-full bg-transparent" variant="outline">
                  S'inscrire
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

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
              <Button className="px-6 py-2">S'abonner</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
