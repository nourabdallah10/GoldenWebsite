import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  type?: string
}

const SEO = ({
  title = 'Golden Furniture',
  description = 'Discover premium furniture collections including sofas, beds, and tables. Exclusive designs from our Designer Collective. Shop now!',
  keywords = 'furniture, sofas, beds, tables, Tel Aviv, Israel, premium furniture',
  image = '/Images/logo.jpg',
  type = 'website',
}: SEOProps) => {
  const location = useLocation()

  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)

    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', `${window.location.origin}${image}`, true)
    updateMetaTag('og:url', `${window.location.origin}${location.pathname}`, true)
    updateMetaTag('og:type', type, true)

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', `${window.location.origin}${image}`)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${window.location.origin}${location.pathname}`)
  }, [title, description, keywords, image, type, location.pathname])

  return null
}

export default SEO






