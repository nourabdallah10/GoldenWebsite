/**
 * Generate sitemap.xml for SEO
 */

interface SitemapEntry {
  url: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

const baseUrl = process.env.VITE_BASE_URL || 'https://www.goldenfurniture.com'

const routes: SitemapEntry[] = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1.0,
  },
  {
    url: '/sofas',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: '/beds',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: '/tables',
    changefreq: 'weekly',
    priority: 0.9,
  },
]

export const generateSitemap = (): string => {
  const currentDate = new Date().toISOString().split('T')[0]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod || currentDate}</lastmod>
    <changefreq>${route.changefreq || 'weekly'}</changefreq>
    <priority>${route.priority || 0.8}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return sitemap
}







