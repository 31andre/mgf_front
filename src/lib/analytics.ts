export interface PageView {
  page: string
  timestamp: number
  userAgent?: string
}

export interface Analytics {
  totalViews: number
  todayViews: number
  weekViews: number
  monthViews: number
  pageViews: Record<string, number>
  recentViews: PageView[]
}

class AnalyticsManager {
  private storageKey = "mgf-analytics"

  getAnalytics(): Analytics {
    if (typeof window === "undefined") {
      return this.getDefaultAnalytics()
    }

    const stored = localStorage.getItem(this.storageKey)
    if (!stored) {
      return this.getDefaultAnalytics()
    }

    try {
      return JSON.parse(stored)
    } catch {
      return this.getDefaultAnalytics()
    }
  }

  private getDefaultAnalytics(): Analytics {
    return {
      totalViews: 0,
      todayViews: 0,
      weekViews: 0,
      monthViews: 0,
      pageViews: {},
      recentViews: [],
    }
  }

  trackPageView(page: string) {
    if (typeof window === "undefined") return

    const analytics = this.getAnalytics()
    const now = Date.now()
    const today = new Date().toDateString()
    const weekAgo = now - 7 * 24 * 60 * 60 * 1000
    const monthAgo = now - 30 * 24 * 60 * 60 * 1000

    // Add new view
    const newView: PageView = {
      page,
      timestamp: now,
      userAgent: navigator.userAgent,
    }

    analytics.recentViews.unshift(newView)
    analytics.recentViews = analytics.recentViews.slice(0, 100) // Keep last 100 views

    // Update counters
    analytics.totalViews++
    analytics.pageViews[page] = (analytics.pageViews[page] || 0) + 1

    // Calculate time-based views
    analytics.todayViews = analytics.recentViews.filter(
      (view) => new Date(view.timestamp).toDateString() === today,
    ).length

    analytics.weekViews = analytics.recentViews.filter((view) => view.timestamp > weekAgo).length

    analytics.monthViews = analytics.recentViews.filter((view) => view.timestamp > monthAgo).length

    localStorage.setItem(this.storageKey, JSON.stringify(analytics))
  }

  getTopPages(limit = 5): Array<{ page: string; views: number }> {
    const analytics = this.getAnalytics()
    return Object.entries(analytics.pageViews)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, limit)
  }
}

export const analyticsManager = new AnalyticsManager()
