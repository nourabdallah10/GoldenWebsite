import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'
import { useLocalization } from '../contexts/LocalizationContext'

const CookieConsent = () => {
  const { language, t } = useLocalization()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  const isHebrew = language === 'he'

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
          dir={isHebrew ? 'rtl' : 'ltr'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-4">
              <Cookie className="text-amber-600 flex-shrink-0" size={24} />
              <div className="flex-1">
                <p className="text-sm text-slate-700">
                  {t('cookie.message')}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {t('cookie.decline')}
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-amber-600 text-white text-sm font-semibold rounded-md hover:bg-amber-700 transition-colors"
                >
                  {t('cookie.accept')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent






