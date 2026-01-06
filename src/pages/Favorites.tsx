import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Home, ChevronRight } from 'lucide-react'
import { useLocalization } from '../contexts/LocalizationContext'
import SEO from '../components/SEO'
import ImageLoader from '../components/ImageLoader'
import { pageTransition } from '../utils/animations'
import { getFavoriteProducts, toggleFavorite } from '../utils/favorites'
import { Product } from '../utils/products'

const Favorites = () => {
  const { t, language } = useLocalization()
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([])
  const [favoriteStates, setFavoriteStates] = useState<Set<number>>(new Set())

  useEffect(() => {
    // Load favorites on mount
    const favorites = getFavoriteProducts()
    setFavoriteProducts(favorites)
    setFavoriteStates(new Set(favorites.map(p => p.id)))
  }, [])

  const handleToggleFavorite = (productId: number) => {
    toggleFavorite(productId)
    const favorites = getFavoriteProducts()
    setFavoriteProducts(favorites)
    setFavoriteStates(new Set(favorites.map(p => p.id)))
  }

  const isHebrew = language === 'he'

  return (
    <>
      <SEO
        title={`${t('favorites.title')} - Golden Furniture`}
        description={t('favorites.description')}
        keywords="favorites, wishlist, furniture, Golden Furniture"
      />
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-white dark:bg-slate-900"
      >
        {/* Hero Section with Background Image */}
        <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/Images/mainBackgroudn.jpeg')",
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
            }} />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Top Breadcrumbs */}
            <div className="pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto w-full">
                <motion.nav
                  className="flex items-center gap-2 text-white/90 mb-6 text-sm font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Link
                    to="/"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1"
                  >
                    <Home size={16} />
                    <span>{t('nav.home')}</span>
                  </Link>
                  <ChevronRight size={16} />
                  <span className="text-amber-400">{t('favorites.title')}</span>
                </motion.nav>
              </div>
            </div>

            {/* Center Title */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-wide"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  {t('favorites.title')}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg sm:text-xl md:text-2xl text-white/90"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  }}
                >
                  {favoriteProducts.length > 0
                    ? isHebrew
                      ? `${favoriteProducts.length} ${favoriteProducts.length === 1 ? 'פריט' : 'פריטים'} במועדפים`
                      : `${favoriteProducts.length} ${favoriteProducts.length === 1 ? 'item' : 'items'} in favorites`
                    : t('favorites.empty')}
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Favorites Grid */}
          {favoriteProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {favoriteProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative group"
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative w-full aspect-square overflow-hidden">
                      <ImageLoader
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        objectFit="cover"
                      />
                      {/* Favorite Icon */}
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          handleToggleFavorite(product.id)
                        }}
                        className="absolute top-2 right-2 p-2 bg-transparent"
                        aria-label={t('favorites.remove')}
                      >
                        <Heart
                          size={18}
                          fill={favoriteStates.has(product.id) ? '#d97706' : 'none'}
                          className={favoriteStates.has(product.id) ? 'text-amber-600' : 'text-white'}
                        />
                      </button>
                    </div>
                    {/* Product Name */}
                    <h3 className="mt-2 text-sm text-slate-900 dark:text-slate-100 text-left">
                      {product.name}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="mb-6">
                <Heart
                  size={64}
                  className="mx-auto text-slate-300 dark:text-slate-600"
                  fill="none"
                />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {t('favorites.emptyTitle')}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                {t('favorites.emptyMessage')}
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
              >
                {t('favorites.startShopping')}
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  )
}

export default Favorites

