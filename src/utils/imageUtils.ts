/**
 * Generate a blur data URL for blur-up effect
 * Creates a tiny 20x20px version of the image as base64
 */
export const generateBlurDataURL = async (imageSrc: string): Promise<string> => {
  try {
    const response = await fetch(imageSrc)
    const blob = await response.blob()
    const bitmap = await createImageBitmap(blob)
    
    // Create a small canvas
    const canvas = document.createElement('canvas')
    canvas.width = 20
    canvas.height = 20
    const ctx = canvas.getContext('2d')
    
    if (!ctx) return ''
    
    // Draw scaled image
    ctx.drawImage(bitmap, 0, 0, 20, 20)
    
    // Convert to base64
    return canvas.toDataURL('image/jpeg', 0.5)
  } catch (error) {
    console.warn('Failed to generate blur data URL:', error)
    return ''
  }
}

/**
 * Check if WebP is supported
 */
export const isWebPSupported = (): boolean => {
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}

/**
 * Get responsive image srcset
 */
export const getResponsiveSrcSet = (
  baseSrc: string,
  sizes: number[] = [400, 800, 1200, 1600]
): string => {
  return sizes
    .map((size) => `${baseSrc}?w=${size} ${size}w`)
    .join(', ')
}

/**
 * Preload image for priority loading
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

/**
 * Convert image to WebP format (for use with image CDN)
 */
export const convertToWebP = (src: string): string => {
  // In production, you'd use a CDN or image service
  // For now, return original src
  // Example: return src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  return src
}







