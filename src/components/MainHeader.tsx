import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Heart, Sofa, Bed, Table, Box, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { bounce, scaleOnHover } from '../utils/animations'
import { useLocalization } from '../contexts/LocalizationContext'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'
import ImageLoader from './ImageLoader'

const MainHeader = () => {
  const { t } = useLocalization()
  const location = useLocation()
  const [showAddressTooltip, setShowAddressTooltip] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Fade-in on page load
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        // At the top, make it transparent
        setIsScrollingUp(false)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsScrollingUp(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsScrollingUp(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const categoryIcons = {
    sofas: Sofa,
    beds: Bed,
    tables: Table,
    tablesBuffet: Box,
  }

  const categories = [
    { name: t('nav.sofas'), path: '/sofas', key: 'sofas', icon: categoryIcons.sofas },
    { name: t('nav.beds'), path: '/beds', key: 'beds', icon: categoryIcons.beds },
    { name: t('nav.tables'), path: '/tables', key: 'tables', icon: categoryIcons.tables },
    { name: t('nav.tablesBuffet'), path: '/tables-buffet', key: 'tablesBuffet', icon: categoryIcons.tablesBuffet },
  ]

  // Check if there are any favorites to show filled heart
  useEffect(() => {
    const checkFavorites = () => {
      if (typeof window !== 'undefined') {
        try {
          const favorites = localStorage.getItem('goldenFurnitureFavorites')
          const favoriteIds = favorites ? JSON.parse(favorites) : []
          setIsFavorite(favoriteIds.length > 0)
        } catch {
          setIsFavorite(false)
        }
      }
    }
    checkFavorites()
    // Check periodically to update heart state
    const interval = setInterval(checkFavorites, 1000)
    return () => clearInterval(interval)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu()
  }, [location.pathname])

  return (
    <>
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-8 transition-all duration-300 ${
        isMobileMenuOpen ? 'z-30' : 'z-40'
      } ${
        isScrollingUp 
          ? 'bg-white dark:bg-slate-900 shadow-sm' 
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="my-4">
              <ImageLoader
                src="/Images/logo.jpg"
                alt="Golden Furniture Logo"
                className="h-16 w-auto"
                priority
                objectFit="contain"
              />
            </motion.div>
          </Link>

          {/* Categories - Desktop */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-12">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Link
                  key={category.name}
                  to={category.path}
                  className="relative group flex items-center gap-2"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <IconComponent size={18} className="text-slate-900 dark:text-slate-100 group-hover:text-amber-600 transition-colors duration-200" />
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100 transition-colors duration-200 uppercase group-hover:text-amber-600">
                      {category.name}
                    </span>
                  </motion.span>
                  {/* Underline animation on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300" />
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full text-slate-900 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Language Toggle */}
            <LanguageToggle />

            {/* Address Icon with Tooltip */}
            <div
              className="relative"
              onMouseEnter={() => setShowAddressTooltip(true)}
              onMouseLeave={() => setShowAddressTooltip(false)}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full text-slate-900 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Address"
              >
                <MapPin size={20} />
              </motion.button>

              {/* Tooltip */}
              <AnimatePresence>
                {showAddressTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-slate-900 text-white text-sm rounded-md whitespace-nowrap shadow-lg z-50"
                  >
                    חופית 4, אריאל
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Heart Icon with Pulse Animation - Link to Favorites */}
              <Link to="/favorites">
                <motion.button
                  {...scaleOnHover}
                  className="p-2 rounded-full text-slate-900 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
                  aria-label="Favorites"
                >
                  <motion.div variants={bounce} animate={isFavorite ? 'animate' : 'initial'}>
                    <Heart
                      size={20}
                      fill={isFavorite ? 'currentColor' : 'none'}
                      className={isFavorite ? 'text-red-500' : 'text-slate-900 dark:text-slate-100'}
                    />
                  </motion.div>
                </motion.button>
              </Link>

          </div>
        </div>
      </div>
    </motion.header>

    {/* Mobile Menu - Rendered outside header to avoid stacking context issues */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMobileMenu}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998] md:hidden"
          />
          
          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 h-full w-[85vw] max-w-sm bg-gradient-to-br from-white via-slate-50 to-amber-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 shadow-2xl z-[9999] md:hidden overflow-y-auto"
          >
              {/* Decorative Gradient Overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-600/10 to-transparent rounded-tr-full pointer-events-none" />

              <div className="relative p-6 pt-8">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-200/50 dark:border-slate-700/50">
                  <Link to="/" onClick={closeMobileMenu} className="flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ImageLoader
                        src="/Images/logo.jpg"
                        alt="Golden Furniture Logo"
                        className="h-14 w-auto"
                        priority
                        objectFit="contain"
                      />
                    </motion.div>
                  </Link>
                  <motion.button
                    onClick={closeMobileMenu}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors shadow-sm"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Mobile Categories */}
                <nav className="space-y-3 mb-10">
                  <div className="mb-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-2 mb-3">
                      {t('mobileMenu.categories')}
                    </h3>
                  </div>
                  {categories.map((category, index) => {
                    const IconComponent = category.icon
                    return (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.08, 
                          duration: 0.4,
                          type: 'spring',
                          stiffness: 100
                        }}
                      >
                        <Link
                          to={category.path}
                          onClick={closeMobileMenu}
                          className="group relative flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-amber-300 dark:hover:border-amber-700 hover:bg-gradient-to-r hover:from-amber-50/80 hover:to-white/80 dark:hover:from-amber-900/20 dark:hover:to-slate-800/80 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          {/* Icon Container */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-amber-400/20 dark:bg-amber-600/20 rounded-lg blur-sm group-hover:bg-amber-400/30 dark:group-hover:bg-amber-600/30 transition-all duration-300" />
                            <div className="relative p-2.5 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/40 dark:to-amber-800/20 rounded-lg group-hover:from-amber-200 group-hover:to-amber-100 dark:group-hover:from-amber-800/50 dark:group-hover:to-amber-700/30 transition-all duration-300">
                              <IconComponent 
                                size={22} 
                                className="text-amber-700 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300" 
                              />
                            </div>
                          </div>
                          
                          {/* Text */}
                          <span className="flex-1 text-base font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300">
                            {category.name}
                          </span>

                          {/* Arrow Indicator */}
                          <motion.div
                            initial={{ x: 0, opacity: 0.5 }}
                            whileHover={{ x: 4, opacity: 1 }}
                            className="text-amber-600 dark:text-amber-400"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </motion.div>

                          {/* Hover Effect Line */}
                          <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 w-0 group-hover:w-full transition-all duration-300 rounded-full" />
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Mobile Menu Footer Actions */}
                <div className="mt-auto pt-8 border-t border-slate-200/50 dark:border-slate-700/50 space-y-4">
                  <div className="mb-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-2 mb-3">
                      {t('mobileMenu.settings')}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-600 dark:text-slate-300">
                          <circle cx="12" cy="12" r="5"/>
                          <path d="M12 1v6M12 17v6M23 12h-6M7 12H1"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('mobileMenu.theme')}</span>
                    </div>
                    <ThemeToggle />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-600 dark:text-slate-300">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('mobileMenu.language')}</span>
                    </div>
                    <LanguageToggle />
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-amber-50/80 to-white/80 dark:from-amber-900/20 dark:to-slate-800/80 border border-amber-200/50 dark:border-amber-800/50">
                    <div className="p-2.5 bg-amber-100 dark:bg-amber-900/40 rounded-lg">
                      <MapPin size={18} className="text-amber-700 dark:text-amber-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      חופית 4, אריאל
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MainHeader

