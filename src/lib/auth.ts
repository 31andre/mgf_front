"use client"

export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false
  return localStorage.getItem("mgf-admin-token") === "authenticated"
}

export const logout = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("mgf-admin-token")
    window.location.href = "/admin/login"
  }
}

export const requireAuth = (): boolean => {
  const authenticated = isAuthenticated()
  if (!authenticated && typeof window !== "undefined") {
    window.location.href = "/admin/login"
    return false
  }
  return authenticated
}
