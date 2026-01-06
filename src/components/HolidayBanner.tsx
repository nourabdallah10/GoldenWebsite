import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useLocalization } from '../contexts/LocalizationContext'

interface Holiday {
  id: string
  name: { en: string; he: string }
  startDate: Date
  endDate: Date
  color: string
  bgColor: string
}

const holidays: Holiday[] = [
  {
    id: 'passover',
    name: { en: 'Passover Sale', he: 'מבצע פסח' },
    startDate: new Date(new Date().getFullYear(), 2, 15), // March 15
    endDate: new Date(new Date().getFullYear(), 3, 15), // April 15
    color: 'text-white',
    bgColor: 'bg-gradient-to-r from-blue-600 to-blue-800',
  },
  {
    id: 'rosh-hashanah',
    name: { en: 'Rosh Hashanah Sale', he: 'מבצע ראש השנה' },
    startDate: new Date(new Date().getFullYear(), 8, 1), // September 1
    endDate: new Date(new Date().getFullYear(), 8, 30), // September 30
    color: 'text-white',
    bgColor: 'bg-gradient-to-r from-amber-600 to-amber-800',
  },
]

const HolidayBanner = () => {
  const { language } = useLocalization()
  const [currentHoliday, setCurrentHoliday] = useState<Holiday | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const activeHoliday = holidays.find((holiday) => {
      const start = new Date(holiday.startDate)
      start.setHours(0, 0, 0, 0)
      const end = new Date(holiday.endDate)
      end.setHours(23, 59, 59, 999)

      return today >= start && today <= end
    })

    setCurrentHoliday(activeHoliday || null)
  }, [])

  if (!currentHoliday) return null

  const holidayName =
    language === 'he' ? currentHoliday.name.he : currentHoliday.name.en

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`fixed top-8 left-0 right-0 z-50 ${currentHoliday.bgColor} ${currentHoliday.color} shadow-lg`}
          style={{ top: '32px' }} // Account for SmallHeader height
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="text-2xl"
                >
                  ✡️
                </motion.div>
                <div>
                  <p className="font-bold text-lg">{holidayName}</p>
                  <p className="text-sm opacity-90">
                    {language === 'he'
                      ? 'עד 30% הנחה על כל הקולקציה'
                      : 'Up to 30% off on entire collection'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close banner"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default HolidayBanner

