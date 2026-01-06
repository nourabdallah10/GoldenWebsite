import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { LocalizationProvider } from './contexts/LocalizationContext'
import { ThemeProvider } from './contexts/ThemeContext'
import SmallHeader from './components/SmallHeader'
import MainHeader from './components/MainHeader'
import Footer from './components/Footer'
import HolidayBanner from './components/HolidayBanner'
import LoadingProgressBar from './components/LoadingProgressBar'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'
import CookieConsent from './components/CookieConsent'
import WelcomePopup from './components/WelcomePopup'
import Analytics, { initAnalytics } from './components/Analytics'
import { pageTransitionFade } from './utils/animations'
import Home from './pages/Home'
import Sofas from './pages/Sofas'
import Beds from './pages/Beds'
import Tables from './pages/Tables'
import TablesBuffet from './pages/TablesBuffet'
import Product from './pages/Product'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()

  useEffect(() => {
    console.log('App mounted successfully')
    // Initialize analytics
    const trackingId = import.meta.env.VITE_GA_TRACKING_ID
    if (trackingId) {
      initAnalytics(trackingId)
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <ThemeProvider>
      <LocalizationProvider>
        <Analytics trackingId={import.meta.env.VITE_GA_TRACKING_ID} />
      <LoadingProgressBar />
      <HolidayBanner />
      <SmallHeader />
      <MainHeader />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransitionFade}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/sofas" element={<Sofas />} />
            <Route path="/beds" element={<Beds />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/tables-buffet" element={<TablesBuffet />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <CookieConsent />
      <WelcomePopup />
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
