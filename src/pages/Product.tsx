import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ChevronRight, Home, Plus, Minus, ChevronDown, Instagram, Star } from 'lucide-react'
import { useLocalization } from '../contexts/LocalizationContext'
import SEO from '../components/SEO'
import ImageLoader from '../components/ImageLoader'
import { pageTransition } from '../utils/animations'
import { getProductById, Product as ProductType } from '../utils/products'
import { getReviewsByProductId, Review } from '../utils/reviews'

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const Product = () => {
  const { id } = useParams<{ id: string }>()
  const { language, t } = useLocalization()
  const navigate = useNavigate()
  const [selectedSize, setSelectedSize] = useState('')
  const [isDeliveryTimeOpen, setIsDeliveryTimeOpen] = useState(true)
  const [product, setProduct] = useState<ProductType | null>(null)
  const [loading, setLoading] = useState(true)
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    if (id) {
      const productData = getProductById(Number(id))
      if (productData) {
        setProduct(productData)
        // Get reviews for this product
        const productReviews = getReviewsByProductId(Number(id))
        setReviews(productReviews)
      } else {
        // Product not found, redirect to 404 or home
        navigate('/')
      }
      setLoading(false)
    }
  }, [id, navigate])

  const sizes = [
    '80/190cm',
    '90/190cm',
    '100/190cm',
    '110/190cm',
    '120/190cm',
    '130/190cm',
    '80/200cm',
    '90/200cm',
    '100/200cm',
    '110/200cm',
    '120/200cm',
    '130/200cm',
  ]

  const handleWhatsAppClick = () => {
    const phoneNumber = '972512566286'
    const message = language === 'he'
      ? 'שלום, אני מעוניין במידע נוסף על המוצר'
      : 'Hello, I am interested in more information about this product'
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const isHebrew = language === 'he'

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t('product.loading')}</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {t('product.notFound')}
          </h1>
          <Link
            to="/"
            className="text-amber-600 hover:text-amber-700 underline"
          >
            {t('product.backToHome')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={`${product.name} - Golden Furniture`}
        description={`${product.name} - Premium furniture from Golden Furniture`}
        keywords={`${product.name}, furniture, ${product.category}`}
      />
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-8 text-sm">
            <Link to="/" className="hover:text-amber-600 transition-colors flex items-center gap-1">
              <Home size={16} />
              <span>{t('nav.home')}</span>
            </Link>
            <ChevronRight size={16} />
            <span className="text-slate-900 dark:text-slate-100 capitalize">{product.category}</span>
            <ChevronRight size={16} />
            <span className="text-slate-900 dark:text-slate-100">{product.name}</span>
          </nav>

          {/* Product Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Left Side - Image */}
            <div className="w-full">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <ImageLoader
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="flex flex-col">
              {/* Product Name */}
              <h1
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: '#9E866A' }}
              >
                {product.name}
              </h1>

              {/* Separator Line */}
              <div className="h-px bg-slate-300 dark:bg-slate-700 mb-6" />

              {/* Customization Message */}
              <div className="mb-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                  {t('product.customizable')}
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t('product.contactForOptions')}
                </p>
              </div>

              {/* Size Dropdown */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t('product.selectSize')}
                </label>
                <div className="relative">
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full px-4 py-3 pr-10 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none cursor-pointer"
                    style={{ borderRadius: '9999px' }}
                  >
                    <option value="">{t('product.chooseOption')}</option>
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown size={20} className="text-slate-600 dark:text-slate-400" />
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="w-full text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-start gap-3 mb-8"
                style={{ backgroundColor: '#2db742' }}
              >
                <WhatsAppIcon size={24} />
                <div className="text-left flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">Eric</span>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                      </span>
                      <span className="text-xs font-normal opacity-90">Online</span>
                    </div>
                  </div>
                  <div className="text-base">
                    {t('product.contactWhatsApp')}
                  </div>
                </div>
              </motion.button>

              {/* Delivery Time Section */}
              <div className="bg-slate-200 dark:bg-slate-700 rounded-t-lg mb-4" style={{ borderRadius: '8px 8px 0 0' }}>
                <button
                  onClick={() => setIsDeliveryTimeOpen(!isDeliveryTimeOpen)}
                  className="w-full p-4 flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  {isDeliveryTimeOpen ? (
                    <Minus size={20} className="text-slate-900 dark:text-slate-100" />
                  ) : (
                    <Plus size={20} className="text-slate-900 dark:text-slate-100" />
                  )}
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide text-sm">
                    {t('product.deliveryTime')}
                  </h3>
                </button>
                <AnimatePresence>
                  {isDeliveryTimeOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          {t('product.deliveryDays')}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Share Section */}
              <div className="rounded-lg p-4 flex items-center justify-between mb-8" style={{ backgroundColor: '#D9D1C6' }}>
                <span className="text-slate-700 dark:text-slate-900 font-medium">
                  {t('product.share')}
                </span>
                <div className="flex items-center gap-2">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61582086908609"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  >
                    <span className="text-sm font-bold">f</span>
                  </a>
                  {/* WhatsApp */}
                  <a
                    href={`https://api.whatsapp.com/send?phone=972512566286&text=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/goldenfurniture.shop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              {t('product.reviews')}
            </h2>
            {reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-200 dark:bg-slate-700 rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                          {isHebrew ? review.nameHebrew : review.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < review.rating
                                  ? 'text-amber-500 fill-amber-500'
                                  : 'text-slate-300 dark:text-slate-600'
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {new Date(review.date).toLocaleDateString(
                          isHebrew ? 'he-IL' : 'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {isHebrew ? review.commentHebrew : review.comment}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-slate-200 dark:bg-slate-700 rounded-lg p-6 text-center">
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  {t('product.noReviews')}
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  {t('product.beFirstReview')}
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Product

