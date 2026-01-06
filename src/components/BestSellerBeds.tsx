import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImageLoader from './ImageLoader'
import { getAllProducts } from '../utils/products'
import { useLocalization } from '../contexts/LocalizationContext'
import { toggleFavorite, isFavorite } from '../utils/favorites'

const BestSellerBeds = () => {
  const { t } = useLocalization()
  const [favoriteStates, setFavoriteStates] = useState<Set<number>>(new Set())
  // Array of 24 bed images with names
  const bedData = [
    { "id": 1, "product_name": "Wave-Contour Bouclé Bed Frame" },
    { "id": 2, "product_name": "Low-Profile Minimalist Bouclé Bed" },
    { "id": 3, "product_name": "Vertical-Stitch Upholstered Bed Frame" },
    { "id": 5, "product_name": "Classic Rectangular Bouclé Bed Frame" },
    { "id": 6, "product_name": "Square-Grid Tufted Bouclé Bed" },
    { "id": 7, "product_name": "Vertical Panel Beige Upholstered Bed" },
    { "id": 8, "product_name": "Teal Velvet Wingback Paneled Bed" },
    { "id": 9, "product_name": "Modern Bouclé Platform Bed Frame" },
    { "id": 10, "product_name": "Straight-Edge Bouclé Bed Frame" },
    { "id": 11, "product_name": "Wave-Contour Bouclé Bed Frame" },
    { "id": 12, "product_name": "Vertical Panel Bed with Gold Accents" },
    { "id": 13, "product_name": "Horizontal Channel-Tufted Bouclé Bed" },
    { "id": 14, "product_name": "Marshmallow Segmented Bouclé Bed" },
    { "id": 15, "product_name": "Split-Panel Upholstered Platform Bed" },
    { "id": 16, "product_name": "Segmented Tier-Headboard Bed Frame" },
    { "id": 17, "product_name": "Slate Grey Minimalist Fabric Bed" },
    { "id": 19, "product_name": "Cloud-Style Segmented Bouclé Bed" },
    { "id": 20, "product_name": "Silver Velvet Slim Wingback Bed" },
    { "id": 21, "product_name": "Marshmallow Segmented Bouclé Bed" },
    { "id": 22, "product_name": "Padded Wide-Rail Platform Bed" },
    { "id": 23, "product_name": "Twin-Pillow Headboard Bed Frame" },
    { "id": 24, "product_name": "Wave-Contour Bouclé Bed Frame" },
    { "id": 25, "product_name": "Marshmallow Segmented Bouclé Bed" },
    { "id": 37, "product_name": "Arch-Style Upholstered Bed Frame" },
  ]

  // Get all products to find the correct product IDs
  const allProducts = getAllProducts()
  
  const beds = bedData.map((bed) => {
    const imagePath = `/Images/Beds/${bed.id}.jpg`
    // Find the product that matches this image path
    const product = allProducts.find(p => p.image === imagePath)
    return {
      id: product?.id || bed.id, // Use product ID if found, otherwise fallback to image number
      name: bed.product_name,
      image: imagePath,
    }
  })

  // Load favorite states on mount
  useEffect(() => {
    const favorites = new Set<number>()
    beds.forEach(bed => {
      if (isFavorite(bed.id)) {
        favorites.add(bed.id)
      }
    })
    setFavoriteStates(favorites)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleToggleFavorite = (id: number) => {
    toggleFavorite(id)
    setFavoriteStates((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 dark:text-slate-100 mb-12 text-center uppercase"
        >
          {t('bestSeller.beds')}
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {beds.map((bed, index) => (
            <motion.div
              key={bed.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group"
            >
              <Link to={`/product/${bed.id}`} className="block">
                <div className="relative w-full aspect-square overflow-hidden">
                  <ImageLoader
                    src={bed.image}
                    alt={bed.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    objectFit="cover"
                  />
                  {/* BEST SELLER Badge */}
                  <div 
                    className="absolute top-2 left-2 text-slate-900 text-xs px-2 py-1"
                    style={{ backgroundColor: 'rgba(255,255,255,.7)' }}
                  >
                    {t('bestSeller.badge')}
                  </div>
                  {/* Favorite Icon */}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      handleToggleFavorite(bed.id)
                    }}
                    className="absolute top-2 right-2 p-2 bg-transparent"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      size={18}
                      fill={favoriteStates.has(bed.id) ? '#d97706' : 'none'}
                      className={favoriteStates.has(bed.id) ? 'text-amber-600' : 'text-white'}
                    />
                  </button>
                </div>
                {/* Product Name */}
                <h3 className="mt-2 text-sm text-slate-900 dark:text-slate-100 text-left">
                  {bed.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellerBeds

