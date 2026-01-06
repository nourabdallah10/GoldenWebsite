import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImageLoader from './ImageLoader'
import { toggleFavorite, isFavorite } from '../utils/favorites'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    setIsFav(isFavorite(product.id))
  }, [product.id])

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleFavorite(product.id)
    setIsFav(!isFav)
  }

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative w-full aspect-square overflow-hidden">
          <ImageLoader
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            objectFit="cover"
          />
          {/* Favorite Icon */}
          <button
            onClick={handleToggleFavorite}
            className="absolute top-2 right-2 p-2 bg-transparent"
            aria-label="Add to favorites"
          >
            <Heart
              size={18}
              fill={isFav ? '#d97706' : 'none'}
              className={isFav ? 'text-amber-600' : 'text-white'}
            />
          </button>
        </div>
        {/* Product Name */}
        <h3 className="mt-2 text-sm text-slate-900 dark:text-slate-100 text-left">
          {product.name}
        </h3>
      </Link>
    </motion.div>
  )
}

export default ProductCard

