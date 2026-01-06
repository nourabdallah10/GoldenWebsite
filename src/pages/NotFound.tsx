import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { useLocalization } from '../contexts/LocalizationContext'
import SEO from '../components/SEO'

const NotFound = () => {
  const { language, t } = useLocalization()
  const isHebrew = language === 'he'

  // Animated furniture illustration using CSS
  return (
    <>
      <SEO
        title="404 - Page Not Found | Golden Furniture"
        description="The page you're looking for doesn't exist."
      />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated Furniture Illustration */}
        <div className="mb-8 relative h-64">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Sofa */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute left-1/2 -translate-x-1/2"
            >
              <div className="w-32 h-20 bg-amber-600 rounded-lg relative">
                <div className="absolute -top-4 left-4 w-8 h-8 bg-amber-700 rounded-full"></div>
                <div className="absolute -top-4 right-4 w-8 h-8 bg-amber-700 rounded-full"></div>
              </div>
            </motion.div>

            {/* Table */}
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute left-1/2 -translate-x-1/2 top-1/2"
            >
              <div className="w-24 h-24 bg-slate-800 rounded-lg"></div>
            </motion.div>

            {/* 404 Text */}
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-amber-600 opacity-20"
            >
              404
            </motion.h1>
          </motion.div>
        </div>

        {/* Error Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
        >
          {t('notFound.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-slate-600 dark:text-slate-400 mb-8"
        >
          {t('notFound.message')}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition-colors"
            >
              <Home size={20} />
              <span>{t('notFound.backToHome')}</span>
            </motion.button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold rounded-md hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t('notFound.goBack')}</span>
          </button>
        </motion.div>
      </div>
      </div>
    </>
  )
}

export default NotFound

