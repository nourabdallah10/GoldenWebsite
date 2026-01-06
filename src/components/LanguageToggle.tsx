import { motion, AnimatePresence } from 'framer-motion'
import { useLocalization } from '../contexts/LocalizationContext'

const LanguageToggle = () => {
  const { language, setLanguage } = useLocalization()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          <img
            src={language === 'en' ? '/Images/israel.png' : '/Images/usa.png'}
            alt={language === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
            className="w-5 h-5 object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}

export default LanguageToggle



