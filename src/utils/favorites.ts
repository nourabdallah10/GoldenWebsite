import { Product } from './products'
import { getAllProducts } from './products'

const FAVORITES_STORAGE_KEY = 'goldenFurnitureFavorites'

/**
 * Get all favorite product IDs from localStorage
 */
export const getFavoriteIds = (): number[] => {
  if (typeof window === 'undefined') return []
  try {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

/**
 * Save favorite product IDs to localStorage
 */
export const saveFavoriteIds = (ids: number[]): void => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids))
  } catch (error) {
    console.error('Failed to save favorites:', error)
  }
}

/**
 * Add a product to favorites
 */
export const addToFavorites = (productId: number): void => {
  const favorites = getFavoriteIds()
  if (!favorites.includes(productId)) {
    saveFavoriteIds([...favorites, productId])
  }
}

/**
 * Remove a product from favorites
 */
export const removeFromFavorites = (productId: number): void => {
  const favorites = getFavoriteIds()
  saveFavoriteIds(favorites.filter(id => id !== productId))
}

/**
 * Toggle favorite status of a product
 */
export const toggleFavorite = (productId: number): void => {
  const favorites = getFavoriteIds()
  if (favorites.includes(productId)) {
    removeFromFavorites(productId)
  } else {
    addToFavorites(productId)
  }
}

/**
 * Check if a product is favorited
 */
export const isFavorite = (productId: number): boolean => {
  return getFavoriteIds().includes(productId)
}

/**
 * Get all favorite products
 */
export const getFavoriteProducts = (): Product[] => {
  const favoriteIds = getFavoriteIds()
  const allProducts = getAllProducts()
  return allProducts.filter(product => favoriteIds.includes(product.id))
}

