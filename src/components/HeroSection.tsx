import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { textReveal } from '../utils/animations'
import { useLocalization } from '../contexts/LocalizationContext'

const HeroSection = () => {
  const { t } = useLocalization()
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        const rate = scrolled * 0.5
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
      }
    }

    // Use requestAnimationFrame for smoother performance
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleShopNow = () => {
    const element = document.getElementById('best-seller-sofas')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/Images/mainBackgroudn.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              letterSpacing: '0.02em',
              lineHeight: '1.1',
            }}
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={textReveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              letterSpacing: '0.05em',
              lineHeight: '1.6',
              fontStyle: 'italic',
            }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <motion.button
              onClick={handleShopNow}
              className="group relative px-10 py-4 bg-transparent border-2 border-white text-white font-semibold text-base uppercase tracking-wider overflow-hidden transition-all duration-300 hover:border-amber-400"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                letterSpacing: '0.15em',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                initial={false}
              />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-3">
                <span>{t('hero.button')}</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <ArrowRight size={20} className="group-hover:text-slate-900 transition-colors duration-300" />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

