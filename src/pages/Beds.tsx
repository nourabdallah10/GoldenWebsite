import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { pageTransition, staggeredChildren, staggeredItem, scaleOnHover } from '../utils/animations'
import { useLocalization } from '../contexts/LocalizationContext'
import SEO from '../components/SEO'
import { getProductsByCategory, Product } from '../utils/products'

const Beds = () => {
  const { language } = useLocalization()
  const [displayedProducts, setDisplayedProducts] = useState(12)
  const [isLoading, setIsLoading] = useState(false)

  // Products data
  const [products] = useState<Product[]>(getProductsByCategory('beds'))

  // Display products
  const visibleProducts = products.slice(0, displayedProducts)

  const loadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setDisplayedProducts((prev) => prev + 50)
      setIsLoading(false)
    }, 500)
  }

  const hasMore = displayedProducts < products.length

  return (
    <>
      <SEO
        title="Beds - Golden Furniture"
        description="Premium bed collection. King size, queen size, and designer beds. Free delivery in Tel Aviv."
        keywords="beds, mattresses, bedroom furniture, Tel Aviv"
      />
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-white dark:bg-slate-900"
      >
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Images/BedBackground.jpg')",
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
                  className="flex items-center gap-1 hover:text-amber-400 transition-colors group"
                >
                  <Home size={18} className="group-hover:scale-110 transition-transform" />
                  <span>{language === 'he' ? 'בית' : 'Home'}</span>
                </Link>
                <ChevronRight size={16} className="text-white/60" />
                <span className="text-amber-400 font-semibold">
                  {language === 'he' ? 'מיטות' : 'Beds'}
                </span>
              </motion.nav>
            </div>
          </div>

          {/* Main Title Section - Centered */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                {/* Decorative Line */}
                <motion.div
                  className="flex items-center justify-center gap-4 mb-4"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="h-px w-16 bg-amber-400" />
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <div className="h-px w-16 bg-amber-400" />
                </motion.div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                  <span 
                    className="block mb-2"
                    style={{ 
                      fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                      fontStyle: 'normal'
                    }}
                  >
                    {language === 'he' ? 'מיטות' : 'Beds'}
                  </span>
                  <span className="text-amber-400 text-4xl md:text-5xl lg:text-6xl font-light">
                    {language === 'he' ? 'מנוחה ורגיעה' : 'Rest & Relaxation'}
                  </span>
                </h1>

                {/* Subtitle */}
                <motion.p
                  className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {language === 'he'
                    ? 'גלה את אוסף המיטות היוקרתי שלנו, מעוצב לנוחות וסגנון מושלמים'
                    : 'Discover our premium bed collection, designed for ultimate comfort and style'}
                </motion.p>

                {/* Bottom Decorative Line */}
                <motion.div
                  className="flex items-center justify-center gap-4 mt-6"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <div className="h-px w-16 bg-amber-400" />
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <div className="h-px w-16 bg-amber-400" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col">
          {/* Products Section */}
          <div className="flex-1">
            {/* Products Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-12"
              variants={staggeredChildren}
              initial="hidden"
              animate="visible"
            >
              {visibleProducts.map((product) => (
                <motion.div key={product.id} variants={staggeredItem}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            {hasMore && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <motion.button
                  onClick={loadMore}
                  disabled={isLoading}
                  {...scaleOnHover}
                  className="px-8 py-4 bg-amber-600 text-slate-900 font-bold rounded-md hover:bg-amber-700 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Loading...' : 'Load More'}
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default Beds

