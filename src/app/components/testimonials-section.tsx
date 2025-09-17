import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Témoignages de Notre Communauté
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Découvrez comment Dieu transforme des vies à travers notre église et les témoignages inspirants de nos
            membres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mr-2" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">"{testimonial.content}"</p>

                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/10">
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-balance">
              Votre Témoignage Nous Intéresse
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty leading-relaxed">
              Avez-vous vécu une transformation dans votre vie grâce à votre foi ? Nous aimerions entendre votre
              histoire et la partager pour encourager d'autres personnes.
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
