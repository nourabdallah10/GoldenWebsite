import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useLocalization } from '../contexts/LocalizationContext'

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

const WelcomePopup = () => {
  const { language, t } = useLocalization()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    console.log('WelcomePopup component mounted')
    
    // Check if we're in development mode or if user wants to test
    const isTestMode = import.meta.env.DEV || window.location.search.includes('test-popup=true')
    const hasSeenWelcome = localStorage.getItem('welcomePopupSeen')
    
    console.log('WelcomePopup: hasSeenWelcome =', hasSeenWelcome, 'isTestMode =', isTestMode)
    
    if (!hasSeenWelcome || isTestMode) {
      // Small delay to ensure smooth page load
      const timer = setTimeout(() => {
        console.log('WelcomePopup: Setting isVisible to true')
        setIsVisible(true)
      }, 1000) // Increased delay to ensure everything is loaded
      
      return () => clearTimeout(timer)
    } else {
      console.log('WelcomePopup: User has already seen the popup')
    }
  }, [])

  const handleClose = () => {
    localStorage.setItem('welcomePopupSeen', 'true')
    setIsVisible(false)
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '972512566286'
    const message = language === 'he' 
      ? 'שלום, אני מעוניין במידע נוסף על המוצרים שלכם'
      : 'Hello, I am interested in more information about your products'
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const isHebrew = language === 'he'

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[9999]"
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none"
            onClick={handleClose}
            dir={isHebrew ? 'rtl' : 'ltr'}
          >
            <div 
              className="relative bg-white dark:bg-slate-900 rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-1 rounded-none text-white hover:opacity-80 transition-opacity flex items-center justify-center"
                style={{ backgroundColor: '#9E866A' }}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Top Section - Image Only */}
              <div
                className="w-full h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/Images/welcomepopup.jpg')",
                }}
              />

              {/* Bottom Section - Text and Buttons */}
              <div className="p-8 bg-white dark:bg-slate-900">
                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-5"
                  style={{
                    color: '#a68d71',
                    fontSize: '20px',
                    fontWeight: 500,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('welcome.title')}
                </motion.h2>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center mb-8 mx-auto text-slate-900 dark:text-slate-100"
                  style={{
                    fontSize: '18px',
                    lineHeight: 1.6,
                    fontWeight: 400,
                    letterSpacing: '0.5px',
                    maxWidth: '600px',
                  }}
                >
                  {t('welcome.message')}
                </motion.p>

                {/* WhatsApp Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppClick}
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <WhatsAppIcon size={20} />
                    <span>
                      {t('welcome.contactWhatsApp')}
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default WelcomePopup

