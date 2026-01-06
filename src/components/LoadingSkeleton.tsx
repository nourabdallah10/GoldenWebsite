import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
}

const Skeleton = ({ className = '', variant = 'rectangular' }: SkeletonProps) => {
  const baseClasses = 'bg-gray-200 rounded'
  const variantClasses = {
    text: 'h-4',
    circular: 'rounded-full aspect-square',
    rectangular: 'h-full',
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className} relative overflow-hidden`}
    >
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
    </div>
  )
}

// Product Card Skeleton
export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white overflow-hidden shadow-md">
      <Skeleton variant="rectangular" className="h-[300px] w-full" />
      <div className="p-4 space-y-3">
        <Skeleton variant="text" className="w-3/4" />
        <Skeleton variant="text" className="w-1/2 h-6" />
      </div>
    </div>
  )
}

// Grid Skeleton
export const GridSkeleton = ({ count = 8 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  )
}

// Text Skeleton
export const TextSkeleton = ({ lines = 3 }: { lines?: number }) => {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          className={index === lines - 1 ? 'w-3/4' : 'w-full'}
        />
      ))}
    </div>
  )
}

// Hero Skeleton
export const HeroSkeleton = () => {
  return (
    <div className="relative h-[85vh] overflow-hidden">
      <Skeleton variant="rectangular" className="h-full w-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4 w-full max-w-4xl px-4">
          <Skeleton variant="text" className="h-12 w-3/4 mx-auto" />
          <Skeleton variant="text" className="h-6 w-1/2 mx-auto" />
          <Skeleton variant="text" className="h-10 w-48 mx-auto" />
        </div>
      </div>
    </div>
  )
}

export default Skeleton



