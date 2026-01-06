import { getAllProducts } from './products'

export interface Review {
  id: number
  productId: number
  name: string
  nameHebrew: string
  rating: number
  comment: string
  commentHebrew: string
  date: string
}

// Pool of Hebrew names
const hebrewNames = [
  { en: 'David Cohen', he: 'דוד כהן' },
  { en: 'Sarah Levi', he: 'שרה לוי' },
  { en: 'Yossi Mizrahi', he: 'יוסי מזרחי' },
  { en: 'Rachel Avraham', he: 'רחל אברהם' },
  { en: 'Moshe Ben-David', he: 'משה בן-דוד' },
  { en: 'Eli Shalom', he: 'אלי שלום' },
  { en: 'Tamar Goldstein', he: 'תמר גולדשטיין' },
  { en: 'Avi Rosen', he: 'אבי רוזן' },
  { en: 'Rina Katz', he: 'רינה כץ' },
  { en: 'Daniel Baruch', he: 'דניאל ברוך' },
  { en: 'Michal Dahan', he: 'מיכל דהן' },
  { en: 'Shlomo Yitzhak', he: 'שלמה יצחק' },
  { en: 'Nava Biton', he: 'נאוה ביטון' },
  { en: 'Oded Peretz', he: 'עודד פרץ' },
  { en: 'Lior Ashkenazi', he: 'ליאור אשכנזי' },
  { en: 'Noa Cohen', he: 'נועה כהן' },
  { en: 'Itamar Levi', he: 'איתמר לוי' },
  { en: 'Maya Shalom', he: 'מאיה שלום' },
  { en: 'Ron Ben-Shimon', he: 'רון בן-imon' },
  { en: 'Tali Golan', he: 'טלי גולן' },
  { en: 'Yaron Dayan', he: 'ירון דיין' },
  { en: 'Hila Barak', he: 'הילה ברק' },
  { en: 'Guy Meir', he: 'גיא מאיר' },
  { en: 'Shira Avrahami', he: 'שירה אברהמי' },
  { en: 'Erez Cohen', he: 'ארז כהן' },
  { en: 'Adi Levy', he: 'עדי לוי' },
  { en: 'Nir Shalev', he: 'ניר שלו' },
  { en: 'Orly Ben-Ari', he: 'אורלי בן-ארי' },
  { en: 'Tal Mor', he: 'טל מור' },
  { en: 'Ido Katz', he: 'עידו כץ' },
  { en: 'Ruth Dayan', he: 'רות דיין' },
  { en: 'Amir Cohen', he: 'אמיר כהן' },
  { en: 'Sharon Levi', he: 'שרון לוי' },
  { en: 'Yael Mizrahi', he: 'יעל מזרחי' },
  { en: 'Ben Avraham', he: 'בן אברהם' },
  { en: 'Dana Shalom', he: 'דנה שלום' },
  { en: 'Gal Goldstein', he: 'גל גולדשטיין' },
  { en: 'Keren Rosen', he: 'קרן רוזן' },
  { en: 'Liran Katz', he: 'לירן כץ' },
  { en: 'Mor Baruch', he: 'מור ברוך' },
]

// Comment templates
const commentTemplates = [
  { en: 'Absolutely stunning! The quality is exceptional and it looks exactly like the pictures. Very comfortable and perfect for our home.', he: 'מדהים לחלוטין! האיכות יוצאת דופן וזה נראה בדיוק כמו בתמונות. מאוד נוח ומושלם לבית שלנו.' },
  { en: 'Beautiful design and excellent craftsmanship. The delivery was fast and the customer service was outstanding. Highly recommend!', he: 'עיצוב יפה ואומנות מעולה. המשלוח היה מהיר והשירות היה מצוין. ממליץ בחום!' },
  { en: 'This exceeded all my expectations. The fabric/material is luxurious and the comfort level is amazing. Worth every penny!', he: 'זה עלה על כל הציפיות שלי. הבד/החומר יוקרתי ורמת הנוחות מדהימה. שווה כל שקל!' },
  { en: 'Perfect addition to our home! The design is modern and elegant. Our guests always compliment it.', he: 'תוספת מושלמת לבית שלנו! העיצוב מודרני ואלגנטי. האורחים שלנו תמיד משבחים את זה.' },
  { en: 'Excellent quality and beautiful finish. Very comfortable for daily use. Great value for money.', he: 'איכות מעולה וגימור יפה. מאוד נוח לשימוש יומיומי. ערך מעולה לכסף.' },
  { en: 'Amazing piece! The quality is outstanding and it looks luxurious. Delivery was on time and installation was easy.', he: 'פריט מדהים! האיכות יוצאת דופן וזה נראה יוקרתי. המשלוח היה בזמן וההתקנה הייתה קלה.' },
  { en: 'Love this! The design is contemporary and the quality is top-notch. It\'s the centerpiece of our room.', he: 'אוהב את זה! העיצוב עכשווי והאיכות מהמעלה הראשונה. זה המוקד של החדר שלנו.' },
  { en: 'Stunning piece! The design is unique and elegant. It adds a sophisticated touch to our space.', he: 'פריט מדהים! העיצוב ייחודי ואלגנטי. זה מוסיף מגע מתוחכם למרחב שלנו.' },
  { en: 'Very satisfied with this purchase! The craftsmanship is excellent and the design fits perfectly with our decor.', he: 'מאוד מרוצים מהרכישה הזו! האומנות מעולה והעיצוב מתאים בצורה מושלמת לעיצוב שלנו.' },
  { en: 'Outstanding quality! The attention to detail is impressive. This is exactly what we were looking for.', he: 'איכות יוצאת דופן! תשומת הלב לפרטים מרשימה. זה בדיוק מה שחיפשנו.' },
  { en: 'Fantastic product! The build quality is excellent and it has transformed our space beautifully.', he: 'מוצר פנטסטי! איכות הבנייה מעולה וזה שינה את המרחב שלנו בצורה יפה.' },
  { en: 'Highly recommend! The quality is superb and the design is exactly what we needed. Very happy with our purchase.', he: 'ממליץ בחום! האיכות מעולה והעיצוב בדיוק מה שהיינו צריכים. מאוד מרוצים מהרכישה שלנו.' },
]

// Generate reviews for all products
function generateReviews(): Review[] {
  const allProducts = getAllProducts()
  const reviews: Review[] = []
  let reviewId = 1

  allProducts.forEach((product, index) => {
    const nameIndex = index % hebrewNames.length
    const commentIndex = index % commentTemplates.length
    const name = hebrewNames[nameIndex]
    const comment = commentTemplates[commentIndex]
    
    // Generate date (spread over 2024)
    const month = Math.floor((index % 12) + 1)
    const day = Math.floor((index % 28) + 1)
    const date = `2024-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    
    reviews.push({
      id: reviewId++,
      productId: product.id,
      name: name.en,
      nameHebrew: name.he,
      rating: Math.random() > 0.15 ? 5 : 4, // Mostly 5 stars, some 4 stars
      comment: comment.en,
      commentHebrew: comment.he,
      date,
    })
  })

  return reviews
}

// Reviews for all products
const reviews: Review[] = generateReviews()

// Function to get reviews by product ID
export const getReviewsByProductId = (productId: number): Review[] => {
  return reviews.filter(review => review.productId === productId)
}

// Function to get all reviews
export const getAllReviews = (): Review[] => {
  return reviews
}
