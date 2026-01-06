import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseUrl = process.env.VITE_BASE_URL || 'https://www.goldenfurniture.com'
const currentDate = new Date().toISOString().split('T')[0]

const routes = [
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

const distDir = path.join(__dirname, '../dist')
const sitemapPath = path.join(distDir, 'sitemap.xml')

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

fs.writeFileSync(sitemapPath, sitemap, 'utf8')
console.log('✅ Sitemap generated successfully at:', sitemapPath)

