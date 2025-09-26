import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Membre depuis 5 ans",
      content:
        "Cette église a transformé ma vie. J'ai trouvé une famille spirituelle qui m'accompagne dans tous les moments de ma vie. Les enseignements sont profonds et applicables au quotidien.",
      rating: 5,
    },
    {
      name: "Jean-Pierre Martin",
      role: "Nouveau converti",
      content:
        "L'accueil chaleureux et la bienveillance de cette communauté m'ont touché dès ma première visite. J'ai découvert l'amour de Dieu à travers l'amour de ses enfants.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Responsable jeunesse",
      content:
        "Servir dans cette église est un privilège. Voir les jeunes grandir dans la foi et développer leur relation avec Dieu est une source de joie constante.",
      rating: 5,
    },
    {
      name: "Paul Lefebvre",
      role: "Membre fondateur",
      content:
        "Depuis 20 ans, j'ai vu cette église grandir et impacter positivement notre communauté. C'est un lieu où la foi se vit authentiquement.",
      rating: 5,
    },
    {
      name: "Fatima Al-Rashid",
      role: "Nouvelle membre",
      content:
        "Malgré mes origines différentes, j'ai été accueillie avec un amour inconditionnel. Cette église prône vraiment l'unité dans la diversité.",
      rating: 5,
    },
    {
      name: "Michel Rousseau",
      role: "Ancien de l'église",
      content:
        "La sagesse pastorale et l'enseignement biblique solide font de cette église un phare spirituel dans notre région.",
      rating: 5,
    },
  ]

  return (
    <section id="temoignages" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Témoignages de Notre Communauté
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Découvrez comment Dieu transforme des vies à travers notre église et les témoignages inspirants de nos membres.
          </p>
        </div>

        {/* Carousel */}
        <Carousel>
          <CarouselContent className="flex">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="
                  flex-shrink-0
                  basis-full       
                  sm:basis-1/2     
                  lg:basis-1/3     
                "
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col justify-between h-full min-h-[350px]">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center mb-2">
                        <Quote className="h-8 w-8 text-primary/30 mr-2" />
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-pretty flex-1">
                        &quot;{testimonial.content}&quot;
                      </p>
                    </div>

                    <div className="border-t border-border pt-4 mt-4">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>


          {/* Navigation */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/10 p-2 rounded-full" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/10 p-2 rounded-full" />
        </Carousel>

        {/* Bloc bas */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/10">
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-balance">
              Votre Témoignage Nous Intéresse
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty leading-relaxed">
              Avez-vous vécu une transformation dans votre vie grâce à votre foi ? Nous aimerions entendre votre histoire et la partager pour encourager d&apos;autres personnes.
            </p>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Partager mon témoignage
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
