import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const LoadingProgressBar = () => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Reset progress on route change
    setProgress(0)
    setIsVisible(true)

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval)
          return 90
        }
        return prev + 10
      })
    }, 100)

    // Complete on page load
    const handleLoad = () => {
      setProgress(100)
      setTimeout(() => {
        setIsVisible(false)
        setProgress(0)
      }, 300)
    }

    window.addEventListener('load', handleLoad)
    // Also complete if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    }

    return () => {
      clearInterval(interval)
      window.removeEventListener('load', handleLoad)
    }
  }, [location.pathname])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gray-200"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-amber-600 to-amber-800"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingProgressBar









