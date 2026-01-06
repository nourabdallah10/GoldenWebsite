import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'
import { scrollRevealLeft, textRevealStagger, textReveal } from '../utils/animations'
import { useLocalization } from '../contexts/LocalizationContext'

interface Testimonial {
  id: number
  quote: string
  quoteHebrew: string
  author: string
  role: string
  roleHebrew: string
}

const DesignerCollective = () => {
  const { t, language } = useLocalization()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const isHebrew = language === 'he'

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        'Working with Golden Furniture has been an incredible journey. Their commitment to quality and design excellence is unmatched.',
      quoteHebrew:
        'עבודה עם Golden Furniture הייתה מסע מדהים. המחויבות שלהם לאיכות ולמצוינות עיצובית היא ללא תחרות.',
      author: 'Sarah Chen',
      role: 'Interior Designer, Studio Modern',
      roleHebrew: 'מעצבת פנים, Studio Modern',
    },
    {
      id: 2,
      quote:
        'The Designer Collective represents the best of international design talent. It\'s an honor to be part of this community.',
      quoteHebrew:
        'קולקטיב המעצבים מייצג את הטוב ביותר בכישרון העיצוב הבינלאומי. זה כבוד להיות חלק מהקהילה הזו.',
      author: 'Marco Rossi',
      role: 'Furniture Designer, Milano Atelier',
      roleHebrew: 'מעצב ריהוט, Milano Atelier',
    },
    {
      id: 3,
      quote:
        'Golden Furniture understands that great design comes from collaboration. The collective approach brings out the best in everyone.',
      quoteHebrew:
        'Golden Furniture מבינים שעיצוב מעולה נוצר משיתוף פעולה. הגישה הקולקטיבית מביאה את הטוב ביותר בכל אחד.',
      author: 'Emma Thompson',
      role: 'Art Director, Nordic Design Co.',
      roleHebrew: 'מנהלת אמנותית, Nordic Design Co.',
    },
  ]

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="designer-collective" className="relative w-full min-h-[500px] sm:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Images/designers.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating Designer Photos (Background Elements) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1 }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
            className="absolute w-24 h-24 rounded-full bg-white/10 blur-sm"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h2
            variants={scrollRevealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 text-center uppercase"
          >
            {t('designerCollective.title')}
          </motion.h2>

          {/* Description Text with Staggered Animation */}
          <motion.div
            variants={textRevealStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 text-center px-2 sm:px-0"
          >
            {[
              t('designerCollective.description1'),
              t('designerCollective.description2'),
              t('designerCollective.description3'),
            ].map((sentence, index) => (
              <motion.p
                key={index}
                variants={textReveal}
                transition={{ delay: index * 0.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed"
              >
                {sentence}
              </motion.p>
            ))}
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 sm:mt-12 md:mt-16"
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 border border-white/20 mx-2 sm:mx-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <Quote
                    size={24}
                    className="mx-auto mb-3 sm:mb-4 text-amber-600 sm:w-8 sm:h-8"
                  />
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-3 sm:mb-4 italic px-2 sm:px-0">
                    "{isHebrew ? testimonials[currentTestimonial].quoteHebrew : testimonials[currentTestimonial].quote}"
                  </p>
                  <div className="text-white/80">
                    <p className="font-semibold text-sm sm:text-base">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-xs sm:text-sm">
                      {isHebrew ? testimonials[currentTestimonial].roleHebrew : testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'w-8 bg-amber-600'
                        : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DesignerCollective

