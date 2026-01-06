import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImageLoader from './ImageLoader'
import { useLocalization } from '../contexts/LocalizationContext'
import { toggleFavorite, isFavorite } from '../utils/favorites'

const BestSellerSofas = () => {
  const { t } = useLocalization()
  const [favoriteStates, setFavoriteStates] = useState<Set<number>>(new Set())

  // Array of 36 sofa images with names
  const sofaData = [
    { "id": 1, "name": "Ribbed Chunky Beige Sofa" },
    { "id": 2, "name": "Sleek Cream Multi-Pillow Sofa" },
    { "id": 3, "name": "Broad Corduroy Beige Sofa" },
    { "id": 4, "name": "Rounded Modular Mist Sofa" },
    { "id": 5, "name": "Boxy White Boucle Sofa" },
    { "id": 6, "name": "Tan Velvet Low-Back Sofa" },
    { "id": 7, "name": "White L-Shaped Modular Sofa" },
    { "id": 8, "name": "Sandy Linen Sofa with Ottoman" },
    { "id": 9, "name": "Deep-Seat Cloud White Sofa" },
    { "id": 10, "name": "Cream Sectional and Ottoman Set" },
    { "id": 11, "name": "Grey Textured L-Shape Sofa" },
    { "id": 12, "name": "Tan Ribbed Grand Sectional" },
    { "id": 13, "name": "Corduroy Beige Legged Sofa" },
    { "id": 14, "name": "Plush Off-White Corner Sofa" },
    { "id": 15, "name": "Modern Beige L-Sofa" },
    { "id": 16, "name": "Chunky Cream Multi-Cushion Sofa" },
    { "id": 17, "name": "Minimalist White Low Sectional" },
    { "id": 18, "name": "Grey Boucle Corner Sofa" },
    { "id": 19, "name": "Grand Beige Texture Sofa" },
    { "id": 20, "name": "Slim Grey Linear Sofa" },
    { "id": 21, "name": "White Rounded Modular Lounger" },
    { "id": 22, "name": "Classic Cream Sofa with Ottoman" },
    { "id": 23, "name": "Long Low-Profile Beige Sofa" },
    { "id": 24, "name": "Deep Square White Modular Sofa" },
    { "id": 25, "name": "Soft-Edge Beige Textured Sofa" },
    { "id": 26, "name": "Sleek Arctic White Modular Sofa" },
    { "id": 27, "name": "Light Grey Corduroy Sofa" },
    { "id": 28, "name": "Chunky Tan Ribbed Sectional" },
    { "id": 29, "name": "Textured Grey Mixed-Pillow Sofa" },
    { "id": 30, "name": "Mist Grey Modular Sectional" },
    { "id": 31, "name": "Oversized Beige Comfort Sectional" },
    { "id": 32, "name": "Windowside Ribbed Off-White Sofa" },
    { "id": 33, "name": "Cream Legged Sofa Set" },
    { "id": 34, "name": "Beige Corduroy Sectional" },
    { "id": 35, "name": "Chunky Grey Textured L-Sofa" },
    { "id": 36, "name": "Slate Grey Minimalist Sectional" },
  ]

  const sofas = sofaData.map((sofa) => ({
    id: sofa.id,
    name: sofa.name,
    image: `/Images/Sofas/${sofa.id}.jpg`,
  }))

  // Load favorite states on mount
  useEffect(() => {
    const favorites = new Set<number>()
    sofas.forEach(sofa => {
      if (isFavorite(sofa.id)) {
        favorites.add(sofa.id)
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
    <section id="best-seller-sofas" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 dark:text-slate-100 mb-12 text-center uppercase"
        >
          {t('bestSeller.sofas')}
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {sofas.map((sofa, index) => (
            <motion.div
              key={sofa.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group"
            >
              <Link to={`/product/${sofa.id}`} className="block">
                <div className="relative w-full aspect-square overflow-hidden">
                  <ImageLoader
                    src={sofa.image}
                    alt={sofa.name}
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
                      handleToggleFavorite(sofa.id)
                    }}
                    className="absolute top-2 right-2 p-2 bg-transparent"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      size={18}
                      fill={favoriteStates.has(sofa.id) ? '#d97706' : 'none'}
                      className={favoriteStates.has(sofa.id) ? 'text-amber-600' : 'text-white'}
                    />
                  </button>
                </div>
                {/* Product Name */}
                <h3 className="mt-2 text-sm text-slate-900 dark:text-slate-100 text-left">
                  {sofa.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellerSofas

