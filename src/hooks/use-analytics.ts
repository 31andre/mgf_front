"use client"

import { useState, useEffect } from "react"
import { analyticsManager, type Analytics } from "@/lib/analytics"

export function useAnalytics() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null)

  useEffect(() => {
    setAnalytics(analyticsManager.getAnalytics())
  }, [])

  const trackPageView = (page: string) => {
    analyticsManager.trackPageView(page)
    setAnalytics(analyticsManager.getAnalytics())
  }

  const getTopPages = (limit?: number) => {
    return analyticsManager.getTopPages(limit)
  }

  return {
    analytics,
    trackPageView,
    getTopPages,
  }
}
