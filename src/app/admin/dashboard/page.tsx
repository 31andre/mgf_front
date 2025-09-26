"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutDashboard, Calendar, ImageIcon, MessageSquare, Edit, Eye, TrendingUp } from "lucide-react"
import { useAnalytics } from "@/hooks/use-analytics"

export default function AdminDashboard() {
  const { analytics, getTopPages } = useAnalytics()

  const stats = [
    {
      title: "Vues totales",
      value: analytics?.totalViews.toLocaleString() || "0",
      description: "Visites du site web",
      icon: Eye,
      color: "text-blue-600",
    },
    {
      title: "Vues aujourd'hui",
      value: analytics?.todayViews.toString() || "0",
      description: "Visites d'aujourd'hui",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Événements",
      value: "12",
      description: "Événements à venir",
      icon: Calendar,
      color: "text-purple-600",
    },
    {
      title: "Photos",
      value: "24",
      description: "Images en galerie",
      icon: ImageIcon,
      color: "text-orange-600",
    },
  ]

  const recentActivity = [
    {
      action: "Modification de la section Hero",
      time: "Il y a 2 heures",
      icon: Edit,
    },
    {
      action: "Ajout d'un nouvel événement",
      time: "Il y a 5 heures",
      icon: Calendar,
    },
    {
      action: "Mise à jour de la galerie",
      time: "Hier",
      icon: ImageIcon,
    },
    {
      action: "Nouveau témoignage publié",
      time: "Il y a 2 jours",
      icon: MessageSquare,
    },
  ]

  const topPages = getTopPages(5)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Vue d'ensemble de l'administration du site MGF</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Actions rapides</CardTitle>
            <CardDescription>Accès direct aux sections les plus utilisées</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-2">
              <a
                href="/admin/dashboard/hero"
                className="flex items-center p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <LayoutDashboard className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <p className="font-medium">Modifier le Hero</p>
                  <p className="text-sm text-muted-foreground">Titre et message principal</p>
                </div>
              </a>
              <a
                href="/admin/dashboard/events"
                className="flex items-center p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <p className="font-medium">Gérer les événements</p>
                  <p className="text-sm text-muted-foreground">Ajouter ou modifier</p>
                </div>
              </a>
              <a
                href="/admin/dashboard/gallery"
                className="flex items-center p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <ImageIcon className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <p className="font-medium">Galerie photos</p>
                  <p className="text-sm text-muted-foreground">Ajouter des images</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pages populaires</CardTitle>
            <CardDescription>Pages les plus visitées</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topPages.length > 0 ? (
                topPages.map((page, index) => (
                  <div key={page.page} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{page.page}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{page.views} vues</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">Aucune donnée disponible</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
            <CardDescription>Dernières modifications effectuées</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <activity.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {analytics && (
        <Card>
          <CardHeader>
            <CardTitle>Statistiques détaillées</CardTitle>
            <CardDescription>Analyse des visites sur différentes périodes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600">{analytics.todayViews}</div>
                <div className="text-sm text-muted-foreground">Aujourd'hui</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{analytics.weekViews}</div>
                <div className="text-sm text-muted-foreground">Cette semaine</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{analytics.monthViews}</div>
                <div className="text-sm text-muted-foreground">Ce mois</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
