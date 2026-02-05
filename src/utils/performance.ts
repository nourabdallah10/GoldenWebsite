/**
 * Performance monitoring utilities
 */

interface PerformanceMetrics {
  loadTime: number
  domContentLoaded: number
  firstPaint: number
  firstContentfulPaint: number
  timeToInteractive: number
}

export const measurePerformance = (): PerformanceMetrics | null => {
  if (typeof window === 'undefined' || !window.performance) {
    return null
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  const paint = performance.getEntriesByType('paint')

  const firstPaint = paint.find((entry) => entry.name === 'first-paint')
  const firstContentfulPaint = paint.find((entry) => entry.name === 'first-contentful-paint')

  return {
    loadTime: navigation.loadEventEnd - navigation.fetchStart,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
    firstPaint: firstPaint ? firstPaint.startTime : 0,
    firstContentfulPaint: firstContentfulPaint ? firstContentfulPaint.startTime : 0,
    timeToInteractive: navigation.domInteractive - navigation.fetchStart,
  }
}

export const logPerformanceBadge = () => {
  const metrics = measurePerformance()
  if (!metrics) return

  const styles = {
    loadTime: metrics.loadTime < 2000 ? 'color: #10b981' : metrics.loadTime < 4000 ? 'color: #f59e0b' : 'color: #ef4444',
    fcp: metrics.firstContentfulPaint < 1800 ? 'color: #10b981' : metrics.firstContentfulPaint < 3000 ? 'color: #f59e0b' : 'color: #ef4444',
  }

  console.log(
    '%c🚀 Golden Furniture Performance',
    'font-size: 16px; font-weight: bold; color: #d97706; padding: 4px 0;'
  )
  console.log(
    `%cLoad Time: ${metrics.loadTime.toFixed(0)}ms`,
    `font-size: 12px; ${styles.loadTime}; padding: 2px 0;`
  )
  console.log(
    `%cDOM Content Loaded: ${metrics.domContentLoaded.toFixed(0)}ms`,
    'font-size: 12px; color: #6366f1; padding: 2px 0;'
  )
  console.log(
    `%cFirst Contentful Paint: ${metrics.firstContentfulPaint.toFixed(0)}ms`,
    `font-size: 12px; ${styles.fcp}; padding: 2px 0;`
  )
  console.log(
    `%cTime to Interactive: ${metrics.timeToInteractive.toFixed(0)}ms`,
    'font-size: 12px; color: #8b5cf6; padding: 2px 0;'
  )
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #d97706;')
}

export const logBuildInfo = () => {
  console.log(
    '%c✨ Golden Furniture',
    'font-size: 20px; font-weight: bold; color: #d97706; padding: 8px 0;'
  )
  console.log(
    '%cBuilt with React + TypeScript + Vite',
    'font-size: 12px; color: #6366f1; padding: 2px 0;'
  )
  console.log(
    '%cPowered by Framer Motion & Tailwind CSS',
    'font-size: 12px; color: #10b981; padding: 2px 0;'
  )
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #d97706;')
}









