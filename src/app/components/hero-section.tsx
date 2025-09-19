import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, BookOpen, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full object-cover scale-105 transition-transform duration-[20s] ease-out hover:scale-100 bg-primary"></div>
        {/* <img
          src="/peaceful-church-interior-with-warm-lighting-and-wo.jpg"
          alt="Intérieur paisible de l'église"
          className="w-full h-full object-cover scale-105 transition-transform duration-[20s] ease-out hover:scale-100"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-primary/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="max-w-5xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance leading-[0.9]">
              Mission Glorieuse
              <span className="block text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                de la Foi
              </span>
            </h1>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto text-pretty leading-relaxed font-light">
              Une communauté chrétienne accueillante où la foi grandit, l'espoir renaît et l'amour unit les cœurs dans
              la paix du Seigneur.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 sm:mb-20">
              <Button
                size="lg"
                className="text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Rejoignez-nous
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto bg-background/80 backdrop-blur-sm border-2 hover:bg-background/90 transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Découvrir nos services
              </Button>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-background/20 backdrop-blur-sm border border-border/20 hover:bg-background/30 hover:border-primary/20 transition-all duration-300">
                <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Amour</h3>
                <p className="text-muted-foreground text-pretty text-sm sm:text-base leading-relaxed">
                  L'amour de Dieu guide chacune de nos actions et unit notre communauté
                </p>
              </div>

              <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-background/20 backdrop-blur-sm border border-border/20 hover:bg-background/30 hover:border-primary/20 transition-all duration-300">
                <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Communauté</h3>
                <p className="text-muted-foreground text-pretty text-sm sm:text-base leading-relaxed">
                  Une famille spirituelle où chacun trouve sa place et grandit dans la foi
                </p>
              </div>

              <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-background/20 backdrop-blur-sm border border-border/20 hover:bg-background/30 hover:border-primary/20 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Enseignement</h3>
                <p className="text-muted-foreground text-pretty text-sm sm:text-base leading-relaxed">
                  La Parole de Dieu enseignée avec passion pour nourrir votre âme
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
