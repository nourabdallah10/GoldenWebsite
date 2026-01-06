import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useLocalization } from '../contexts/LocalizationContext'

const SmallHeader = () => {
  const [isVisible, setIsVisible] = useState(true)
  const { language, setLanguage } = useLocalization()
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [marqueeWidth, setMarqueeWidth] = useState(0)

  const text = {
    en: "Premium Furniture & Design | Handcrafted Excellence | Custom Design Solutions | Expert Consultation Available | Transform Your Living Space",
    he: "ריהוט פרימיום ועיצוב | איכות מעולה בעבודת יד | פתרונות עיצוב מותאמים אישית | ייעוץ מקצועי זמין | שדרגו את חלל המגורים שלכם"
  }

  const marqueeText = text[language]

  useEffect(() => {
    if (marqueeRef.current) {
      // Calculate the width of one text instance
      const firstChild = marqueeRef.current.firstElementChild as HTMLElement
      if (firstChild) {
        setMarqueeWidth(firstChild.offsetWidth)
      }
    }
  }, [language])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: -32 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 z-50 h-8 bg-black text-white overflow-hidden"
        >
          <div className="flex items-center h-full relative">
            {/* Marquee Container */}
            <div className="flex-1 overflow-hidden">
              <motion.div
                ref={marqueeRef}
                className="flex whitespace-nowrap"
                animate={{
                  x: marqueeWidth ? [0, -marqueeWidth] : 0,
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 20,
                    ease: 'linear',
                  },
                }}
              >
                {/* Duplicate text for seamless loop */}
                {Array.from({ length: 2 }).map((_, i) => (
                  <span key={i} className="px-4 text-sm font-medium inline-block">
                    {marqueeText}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Language Toggle */}
            <AnimatePresence mode="wait">
              <motion.button
                key={language}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLanguage(language === 'en' ? 'he' : 'en')}
                className="px-3 h-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <img
                  src={language === 'en' ? '/Images/israel.png' : '/Images/usa.png'}
                  alt={language === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
                  className="w-5 h-5 object-contain"
                />
              </motion.button>
            </AnimatePresence>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="px-3 h-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Close header"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SmallHeader

