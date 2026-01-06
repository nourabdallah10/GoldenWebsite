/**
 * Format Israeli currency (₪)
 */
export const formatCurrency = (amount: number, language: 'he' | 'en' = 'en'): string => {
  const formatted = new Intl.NumberFormat('he-IL', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)

  return language === 'he' ? `${formatted} ₪` : `₪${formatted}`
}

/**
 * Format Israeli phone number
 */
export const formatPhone = (phone: string): string => {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '')

  // Format as Israeli phone: 050-123-4567 or 03-123-4567
  if (digits.length === 10) {
    if (digits.startsWith('0')) {
      if (digits.startsWith('05')) {
        // Mobile: 050-123-4567
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
      } else {
        // Landline: 03-123-4567
        return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`
      }
    }
  }

  // International format: +972-50-123-4567
  if (digits.length === 12 && digits.startsWith('972')) {
    return `+${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 8)}-${digits.slice(8)}`
  }

  return phone // Return as-is if format doesn't match
}

/**
 * Format Israeli address
 */
export const formatAddress = (
  street: string,
  city: string,
  language: 'he' | 'en' = 'en'
): string => {
  if (language === 'he') {
    return `${street}, ${city}`
  }
  return `${city}, ${street}`
}

/**
 * Format date in Hebrew/English format
 */
export const formatDate = (date: Date, language: 'he' | 'en' = 'en'): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  if (language === 'he') {
    return new Intl.DateTimeFormat('he-IL', options).format(date)
  }

  return new Intl.DateTimeFormat('en-US', options).format(date)
}







