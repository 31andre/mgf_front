import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import   MapIframe from "./map_iframe_tsx_next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Contactez-Nous</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Nous sommes là pour vous accompagner dans votre cheminement spirituel. N&apos;hésitez pas à nous contacter pour
            toute question ou demande de prière.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Adresse</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Avenue de la Paix
                  <br />
                  75015 Paris, France
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Téléphone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  +33 1 23 45 67 89
                  <br />
                  <span className="text-sm">Lundi - Vendredi: 9h00 - 17h00</span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  contact@mgf-paris.fr
                  <br />
                  pasteur@mgf-paris.fr
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Horaires des Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Dimanche - Culte</span>
                    <span>10h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mercredi - Prière</span>
                    <span>19h00 - 20h30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vendredi - Louange</span>
                    <span>19h30 - 21h00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media 
            <Card>
              <CardHeader>
                <CardTitle>Suivez-nous</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                    <Facebook className="h-4 w-4" />
                    <span>Facebook</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                    <Instagram className="h-4 w-4" />
                    <span>Instagram</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                    <Youtube className="h-4 w-4" />
                    <span>YouTube</span>
                  </Button>
                </div>
              </CardContent>
            </Card>*/}
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envoyez-nous un Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="prayer">Demande de prière</option>
                    <option value="visit">Planifier une visite</option>
                    <option value="baptism">Baptême</option>
                    <option value="marriage">Mariage</option>
                    <option value="counseling">Conseil pastoral</option>
                    <option value="volunteer">Bénévolat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Partagez votre message, vos questions ou vos demandes de prière..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  Envoyer le Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <MapIframe address="Abidjan, Côte d'Ivoire" zoom={15} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
