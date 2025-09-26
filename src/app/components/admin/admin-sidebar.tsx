"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LayoutDashboard,
  Home,
  Users,
  Calendar,
  ImageIcon,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
  Church,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Section Hero", href: "/admin/dashboard/hero", icon: Home },
  { name: "À Propos", href: "/admin/dashboard/about", icon: Church },
  { name: "Communautés", href: "/admin/dashboard/communities", icon: Users },
  { name: "Services", href: "/admin/dashboard/services", icon: Settings },
  { name: "Galerie", href: "/admin/dashboard/gallery", icon: ImageIcon },
  { name: "Événements", href: "/admin/dashboard/events", icon: Calendar },
  { name: "Témoignages", href: "/admin/dashboard/testimonials", icon: MessageSquare },
]

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 bg-card border-r border-border transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-border">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <Church className="w-8 h-8 text-primary" />
              <span className="font-bold text-lg">MGF Admin</span>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8 p-0">
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn("w-full justify-start", collapsed ? "px-2" : "px-3")}
                  >
                    <item.icon className={cn("h-4 w-4", collapsed ? "" : "mr-3")} />
                    {!collapsed && <span>{item.name}</span>}
                  </Button>
                </Link>
              )
            })}
          </nav>
        </ScrollArea>
      </div>
    </div>
  )
}
