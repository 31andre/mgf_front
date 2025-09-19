import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Star, Globe, BookOpen } from "lucide-react"

export function AboutSection2() {
  return (
    <section id="a-propos" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">À Propos de Notre Église</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Depuis plus de 20 ans, la Mission Glorieuse de la Foi accompagne les fidèles dans leur cheminement spirituel
            avec bienveillance et authenticité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground text-balance">Notre Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Nous sommes une communauté chrétienne dédiée à partager l&apos;amour de Dieu, à encourager la croissance
              spirituelle et à servir notre communauté locale avec compassion et intégrité.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Notre église est un lieu de refuge, de guérison et de transformation où chaque personne peut découvrir sa
              valeur aux yeux de Dieu et développer une relation personnelle avec Jésus-Christ.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Accueil Chaleureux</h4>
                  <p className="text-muted-foreground text-sm">
                    Chaque visiteur est accueilli comme un membre de la famille
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Enseignement Biblique</h4>
                  <p className="text-muted-foreground text-sm">Messages inspirants basés sur la Parole de Dieu</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Vie Communautaire</h4>
                  <p className="text-muted-foreground text-sm">Des relations authentiques et un soutien mutuel</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/IMG009.png"
              alt="Congrégation diverse priant ensemble"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Statistics */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Membres</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">20+</div>
              <div className="text-sm text-muted-foreground">Années</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">15</div>
              <div className="text-sm text-muted-foreground">Ministères</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">3</div>
              <div className="text-sm text-muted-foreground">Missions</div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  )
}
