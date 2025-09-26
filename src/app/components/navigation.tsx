"use client"

import { Home, Briefcase, Calendar, Mail, Phone } from "lucide-react"
import Image from "next/image";

export function Navigation() {
  // Mobile: icônes (remplace "Contact" par téléphone)
  const mobileNavItems = [
    { href: "#accueil", label: "Accueil", icon: Home },
    { href: "#services", label: "Services", icon: Briefcase },
    { href: "#evenements", label: "Événements", icon: Calendar },
    { href: "tel:+2250758861397", label: "Téléphone", icon: Phone },
  ]

  // Desktop: liens textuels (inclut "Contact")
  const desktopNavItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#a-propos", label: "À Propos" },
    { href: "#services", label: "Services" },
    { href: "#evenements", label: "Événements" },
    { href: "#temoignages", label: "Témoignages" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      {/* Header (Desktop) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
              <Image src="/mfg_logo_sans_fond.png" width={45} height={45} alt="Logo MFG" />
              {/* <img src="/mfg_logo_sans_fond.png" width="45" height="45" /> */}
              <span className="font-bold text-lg sm:text-xl text-foreground">
                MISSION GLORIEUSE DE LA FOI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {desktopNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Numéro affiché à droite */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <a href="tel:+2250758861397">+225 07 58 86 13 97</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation (Mobile) */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 bg-background/70 backdrop-blur-xl border border-border shadow-lg rounded-2xl px-6 py-2 flex justify-around w-[90%] max-w-md md:hidden">
        {mobileNavItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.href}
              href={item.href}
              className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-all duration-200 ease-in-out hover:scale-110 active:scale-90"
            >
              <Icon className="h-7 w-7 mb-1" />
              <span className="text-[11px]">{item.label}</span>
            </a>
          )
        })}
      </div>
    </>
  )
}
