import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type Language = 'he' | 'en'

interface LocalizationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isRTL: boolean
  t: (key: string) => string
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(
  undefined
)

// Translation keys
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.sofas': 'Sofas',
    'nav.beds': 'Beds',
    'nav.tables': 'Tables',
    'nav.tablesBuffet': 'Tables & Sideboards',
    'nav.colors': 'Colors',
    'footer.contact': 'Contact Us',
    'footer.quickLinks': 'Quick Links',
    'footer.newsletter': 'Newsletter',
    'footer.follow': 'Follow Us',
    'footer.payment': 'Payment Methods',
    'footer.copyright': 'All rights reserved',
    'footer.aboutUs': 'About Us',
    'footer.ourCollections': 'Our Collections',
    'footer.designerCollective': 'Designer Collective',
    'footer.contactLink': 'Contact',
    'hero.title': 'Premium Furniture, Unbeatable Prices!',
    'hero.subtitle': 'Be among the first to shop our new collection.',
    'hero.button': 'SHOP NOW',
    'categories.viewAll': 'View All Categories',
    'categories.title': 'Categories',
    'product.quickView': 'Quick View',
    'product.browse': 'Browse Collection',
    'product.customizable': 'This item is fully customizable—choose your fabric, color, and finish.',
    'product.contactForOptions': 'Contact us to view more fabric options.',
    'product.selectSize': 'Select Size',
    'product.chooseOption': 'Choose an option',
    'product.contactWhatsApp': 'Contact on WhatsApp',
    'product.deliveryTime': 'Delivery Time',
    'product.deliveryDays': 'Deliver in 5-7 Business Days',
    'product.share': 'Share',
    'product.reviews': 'Reviews',
    'product.noReviews': 'There are no reviews yet.',
    'product.beFirstReview': 'Be the first to review this product',
    'product.loading': 'Loading...',
    'product.notFound': 'Product Not Found',
    'product.backToHome': 'Back to Home',
    'filter.title': 'Filters',
    'filter.price': 'Price',
    'filter.color': 'Color',
    'filter.material': 'Material',
    'sort.by': 'Sort by',
    'sort.priceLow': 'Price: Low to High',
    'sort.priceHigh': 'Price: High to Low',
    'sort.popular': 'Popular',
    'button.loadMore': 'Load More',
    'button.subscribe': 'Subscribe',
    'exclusive.badge': 'Israel Only',
    'bestSeller.sofas': 'Best Seller Sofas',
    'bestSeller.beds': 'Best Seller Beds',
    'bestSeller.badge': 'BEST SELLER',
    'designerCollective.title': 'The Designer Collective',
    'designerCollective.description1': 'A handpicked roster of independent studios and artists who design our collections.',
    'designerCollective.description2': 'An international talent that is our Designer Collective.',
    'designerCollective.description3': 'Exclusively at Golden Furniture',
    'gfServices.title': 'G.F. Services. How Can We Help?',
    'gfServices.freeDesign.title': 'Free Design Services',
    'gfServices.freeDesign.description': 'Transform your space with the help of our talented designers—from full homes to room refreshes.',
    'gfServices.freeDesign.button': 'Book an Appointment',
    'gfServices.holiday.title': 'Holiday Season',
    'gfServices.holiday.description': 'Transform your home for the holidays with our curated seasonal collections. Perfect pieces to welcome guests and create memorable celebrations.',
    'gfServices.holiday.button': 'Explore Collection',
    'gfServices.wedding.title': 'Wedding Services',
    'gfServices.wedding.description': 'From housewarmings to full home makeovers and every space in between, our furniture collection has you covered.',
    'gfServices.wedding.button': 'Create Your Registry',
    'aboutUs.title': 'Why Choose Golden Furniture',
    'aboutUs.20Years': '20 Years of Experience',
    'aboutUs.10000Clients': 'Over 10,000 Happy Clients',
    'aboutUs.rawMaterials': 'A Huge Variety of Raw Materials',
    'aboutUs.designs': 'Surprising Designs',
    'aboutUs.fastDelivery': 'Fast Delivery Time',
    'aboutUs.returningClients': 'Returning Clients',
    'aboutUs.customerSupport': 'Customer Support',
    'aboutUs.highQuality': 'High Quality',
    'aboutUs.customOrder': 'Custom Order',
    'aboutUs.familyOwned': 'Family Owned and Operated',
    'welcome.title': 'Welcome to Golden Furniture & Design!',
    'welcome.message': 'For inquiries or to customize product size, design, or color, please don\'t hesitate to contact us. We\'re here to help!',
    'welcome.contactWhatsApp': 'Contact on WhatsApp',
    'notFound.title': 'Page Not Found',
    'notFound.message': 'The page you\'re looking for doesn\'t exist. It might have been moved or deleted.',
    'notFound.backToHome': 'Back to Home',
    'notFound.goBack': 'Go Back',
    'cookie.message': 'We use cookies to enhance your experience on our website. By continuing to use our site, you agree to our use of cookies.',
    'cookie.decline': 'Decline',
    'cookie.accept': 'Accept',
    'mobileMenu.categories': 'Categories',
    'mobileMenu.settings': 'Settings',
    'mobileMenu.theme': 'Theme',
    'mobileMenu.language': 'Language',
    'categoryIcons.couches': 'Couches',
    'categoryIcons.beds': 'Beds',
    'categoryIcons.diningRoomSets': 'Dining Room Sets',
    'categoryIcons.kitchenSets': 'Kitchen Sets',
    'categoryIcons.mattresses': 'Mattresses',
    'favorites.title': 'My Favorites',
    'favorites.description': 'View your favorite furniture items',
    'favorites.empty': 'No favorites yet',
    'favorites.emptyTitle': 'Your favorites list is empty',
    'favorites.emptyMessage': 'Start adding items to your favorites by clicking the heart icon on any product.',
    'favorites.remove': 'Remove from favorites',
    'favorites.startShopping': 'Start Shopping',
  },
  he: {
    'nav.home': 'בית',
    'nav.sofas': 'ספות',
    'nav.beds': 'מיטות',
    'nav.tables': 'שולחנות',
    'nav.tablesBuffet': 'שולחנות ומזנון',
    'nav.colors': 'צבעים',
    'footer.contact': 'צור קשר',
    'footer.quickLinks': 'קישורים מהירים',
    'footer.newsletter': 'עלון',
    'footer.follow': 'עקבו אחרינו',
    'footer.payment': 'אמצעי תשלום',
    'footer.copyright': 'כל הזכויות שמורות',
    'footer.aboutUs': 'אודותינו',
    'footer.ourCollections': 'הקולקציות שלנו',
    'footer.designerCollective': 'קולקטיב המעצבים',
    'footer.contactLink': 'צור קשר',
    'hero.title': 'ריהוט פרימיום, מחירים ללא תחרות!',
    'hero.subtitle': 'היו בין הראשונים לקנות את הקולקציה החדשה שלנו.',
    'hero.button': 'קנו עכשיו',
    'categories.viewAll': 'צפה בכל הקטגוריות',
    'categories.title': 'קטגוריות',
    'product.quickView': 'תצוגה מהירה',
    'product.browse': 'עיין באוסף',
    'product.customizable': 'פריט זה ניתן להתאמה אישית מלאה—בחרו את הבד, הצבע והגימור שלכם.',
    'product.contactForOptions': 'צרו איתנו קשר כדי לצפות באפשרויות בד נוספות.',
    'product.selectSize': 'בחר גודל',
    'product.chooseOption': 'בחר אפשרות',
    'product.contactWhatsApp': 'צור קשר בוואטסאפ',
    'product.deliveryTime': 'זמן משלוח',
    'product.deliveryDays': 'משלוח תוך 5-7 ימי עסקים',
    'product.share': 'שתף',
    'product.reviews': 'ביקורות',
    'product.noReviews': 'אין עדיין ביקורות.',
    'product.beFirstReview': 'היה הראשון לכתוב ביקורת',
    'product.loading': 'טוען...',
    'product.notFound': 'מוצר לא נמצא',
    'product.backToHome': 'חזור לעמוד הבית',
    'filter.title': 'מסננים',
    'filter.price': 'מחיר',
    'filter.color': 'צבע',
    'filter.material': 'חומר',
    'sort.by': 'מיין לפי',
    'sort.priceLow': 'מחיר נמוך לגבוה',
    'sort.priceHigh': 'מחיר גבוה לנמוך',
    'sort.popular': 'פופולרי',
    'button.loadMore': 'טען עוד',
    'button.subscribe': 'הירשם',
    'exclusive.badge': 'ישראל בלבד',
    'bestSeller.sofas': 'הספות הנמכרות ביותר',
    'bestSeller.beds': 'המיטות הנמכרות ביותר',
    'bestSeller.badge': 'הנמכר ביותר',
    'designerCollective.title': 'קולקטיב המעצבים',
    'designerCollective.description1': 'רשימת סטודיו ואמנים עצמאיים שנבחרו בקפידה, המעצבים את הקולקציות שלנו.',
    'designerCollective.description2': 'כישרון בינלאומי שמרכיב את קולקטיב המעצבים שלנו.',
    'designerCollective.description3': 'בלעדי ב-Golden Furniture',
    'gfServices.title': 'שירותי G.F. איך נוכל לעזור?',
    'gfServices.freeDesign.title': 'שירותי עיצוב חינם',
    'gfServices.freeDesign.description': 'שדרגו את החלל שלכם בעזרת המעצבים המוכשרים שלנו—מבתים מלאים ועד רענון חדרים.',
    'gfServices.freeDesign.button': 'קבעו פגישה',
    'gfServices.holiday.title': 'עונת החגים',
    'gfServices.holiday.description': 'הכינו את הבית שלכם לחגים עם הקולקציות העונתיות שלנו. פריטים מושלמים לאירוח אורחים וליצירת חגיגות בלתי נשכחות.',
    'gfServices.holiday.button': 'עיינו בקולקציה',
    'gfServices.wedding.title': 'שירותי חתונה',
    'gfServices.wedding.description': 'מבריתות בית ועד שיפוצים מלאים וכל מה שביניהם, הקולקציה שלנו מכסה את כל הצרכים.',
    'gfServices.wedding.button': 'צרו רישום מתנות',
    'aboutUs.title': 'למה לבחור ב-Golden Furniture',
    'aboutUs.20Years': '20 שנות ניסיון',
    'aboutUs.10000Clients': 'מעל 10,000 לקוחות מרוצים',
    'aboutUs.rawMaterials': 'מגוון עצום של חומרי גלם',
    'aboutUs.designs': 'עיצובים מפתיעים',
    'aboutUs.fastDelivery': 'זמני משלוח מהירים',
    'aboutUs.returningClients': 'לקוחות חוזרים',
    'aboutUs.customerSupport': 'תמיכה ללקוחות',
    'aboutUs.highQuality': 'איכות גבוהה',
    'aboutUs.customOrder': 'הזמנה מותאמת אישית',
    'aboutUs.familyOwned': 'משפחתי ועצמאי',
    'welcome.title': 'ברוכים הבאים ל-Golden Furniture & Design!',
    'welcome.message': 'לשאלות או להתאמה אישית של גודל, עיצוב או צבע המוצר, אנא אל תהססו ליצור איתנו קשר. אנחנו כאן כדי לעזור!',
    'welcome.contactWhatsApp': 'צור קשר בוואטסאפ',
    'notFound.title': 'דף לא נמצא',
    'notFound.message': 'הדף שחיפשת לא קיים. אולי הוא הועבר או נמחק.',
    'notFound.backToHome': 'חזור לעמוד הבית',
    'notFound.goBack': 'חזור אחורה',
    'cookie.message': 'אנחנו משתמשים בעוגיות כדי לשפר את החוויה שלך באתר. על ידי המשך השימוש באתר, אתה מסכים לשימוש בעוגיות.',
    'cookie.decline': 'דחה',
    'cookie.accept': 'אשר',
    'mobileMenu.categories': 'קטגוריות',
    'mobileMenu.settings': 'הגדרות',
    'mobileMenu.theme': 'ערכת נושא',
    'mobileMenu.language': 'שפה',
    'categoryIcons.couches': 'ספות',
    'categoryIcons.beds': 'מיטות',
    'categoryIcons.diningRoomSets': 'סטי אוכל',
    'categoryIcons.kitchenSets': 'סטי מטבח',
    'categoryIcons.mattresses': 'מזרנים',
    'favorites.title': 'המועדפים שלי',
    'favorites.description': 'צפה בפריטי הריהוט המועדפים עליך',
    'favorites.empty': 'אין מועדפים עדיין',
    'favorites.emptyTitle': 'רשימת המועדפים שלך ריקה',
    'favorites.emptyMessage': 'התחל להוסיף פריטים למועדפים על ידי לחיצה על אייקון הלב בכל מוצר.',
    'favorites.remove': 'הסר מהמועדפים',
    'favorites.startShopping': 'התחל לקנות',
  },
}

interface LocalizationProviderProps {
  children: ReactNode
}

export const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get from localStorage or default to 'he' (Hebrew)
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language
      if (saved === 'he' || saved === 'en') {
        return saved
      }
    }
    return 'he'
  })

  const isRTL = language === 'he'

  useEffect(() => {
    // Update document direction
    if (typeof window !== 'undefined') {
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
      document.documentElement.lang = language
      // Save to localStorage
      localStorage.setItem('language', language)
    }
  }, [language, isRTL])

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations.en]
    return translation || translations.en[key as keyof typeof translations.en] || key
  }

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LocalizationContext.Provider>
  )
}

export const useLocalization = () => {
  const context = useContext(LocalizationContext)
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider')
  }
  return context
}

