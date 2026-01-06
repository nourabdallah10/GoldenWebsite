import { useState, useEffect, useRef, ImgHTMLAttributes } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw, Image as ImageIcon } from 'lucide-react'

interface ImageLoaderProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string
  alt: string
  className?: string
  priority?: boolean
  blurDataURL?: string
  aspectRatio?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  sizes?: string
  srcSet?: string
}

const ImageLoader = ({
  src,
  alt,
  className = '',
  priority = false,
  blurDataURL,
  aspectRatio,
  objectFit = 'cover',
  sizes,
  srcSet,
  ...props
}: ImageLoaderProps) => {
  const [imageSrc, setImageSrc] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [retryCount, setRetryCount] = useState(0)
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Convert image to WebP format
  const getWebPSrc = (originalSrc: string): string => {
    // If already WebP, return as-is
    if (originalSrc.endsWith('.webp') || originalSrc.includes('.webp')) {
      return originalSrc
    }
    
    // For development, return original. In production, you'd use a CDN or image service
    // that converts to WebP automatically (e.g., Cloudinary, Imgix, etc.)
    return originalSrc
  }

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [priority, isInView])

  // Load image when in view
  useEffect(() => {
    if (!isInView) return

    setIsLoading(true)
    setHasError(false)

    const img = new Image()
    const webpSrc = getWebPSrc(src)

    img.onload = () => {
      setImageSrc(webpSrc)
      setIsLoading(false)
      setHasError(false)
    }

    img.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }

    img.src = webpSrc
  }, [src, isInView])

  const handleRetry = () => {
    if (retryCount >= 3) return // Max 3 retries
    setRetryCount((prev) => prev + 1)
    setHasError(false)
    setIsLoading(true)
    setIsInView(true) // Force reload
  }

  const containerStyle: React.CSSProperties = {
    aspectRatio: aspectRatio || undefined,
    position: 'relative',
    overflow: 'hidden',
  }

  return (
    <div ref={containerRef} className={`relative ${className}`} style={containerStyle}>
      <AnimatePresence mode="wait">
        {/* Loading Skeleton */}
        {isLoading && !hasError && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-200"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                width: '50%',
              }}
            />
          </motion.div>
        )}

        {/* Blur-up Placeholder */}
        {blurDataURL && isLoading && !hasError && (
          <motion.div
            key="blur"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${blurDataURL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(20px)',
            }}
          />
        )}

        {/* Actual Image */}
        {imageSrc && !hasError && (
          <motion.div
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <img
              ref={imgRef}
              src={imageSrc}
              srcSet={srcSet}
              sizes={sizes}
              alt={alt}
              className="w-full h-full"
              style={{
                objectFit,
              }}
              {...props}
            />
          </motion.div>
        )}

        {/* Error Fallback */}
        {hasError && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 p-4"
          >
            <ImageIcon size={48} className="text-gray-400 mb-4" />
            <p className="text-sm text-gray-600 mb-4 text-center">
              {retryCount >= 3
                ? 'Failed to load image'
                : 'Unable to load image'}
            </p>
            {retryCount < 3 && (
              <motion.button
                onClick={handleRetry}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              >
                <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
                <span>Retry</span>
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ImageLoader

