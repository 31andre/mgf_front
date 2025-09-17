import { Church, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <Church className="h-8 w-8 text-primary" /> */}
              <img src="/mfg_logo_sans_fond.png" width="50px" height="50px" />
              <span className="font-bold text-2xl">Mission Glorieuse de la Foi</span>
            </div>
            <p className="text-background/80 leading-relaxed text-pretty mb-4">
              Une communauté chrétienne accueillante dédiée à partager l&apos;amour de Dieu, encourager la croissance
              spirituelle et servir notre communauté avec compassion.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-background/80 hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#a-propos" className="text-background/80 hover:text-primary transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#evenements" className="text-background/80 hover:text-primary transition-colors">
                  Événements
                </a>
              </li>
              <li>
                <a href="#temoignages" className="text-background/80 hover:text-primary transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  123 Avenue de la Paix
                  <br />
                  75015 Paris, France
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">contact@mgf-paris.fr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Mission Glorieuse de la Foi. Tous droits réservés. |
            <span className="text-background/80"> Conçu avec ❤️ pour la gloire de Dieu</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
