import { AdminHeader } from "@/app/components/admin/admin-header"
import { AdminSidebar } from "@/app/components/admin/admin-sidebar"
import { AuthGuard } from "@/app/components/admin/auth-guard"
import type React from "react"


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <AdminSidebar />
        <div className="lg:pl-64">
          <AdminHeader />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </AuthGuard>
  )
}
