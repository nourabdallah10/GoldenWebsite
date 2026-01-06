import { motion } from 'framer-motion'
import ImageLoader from './ImageLoader'
import { useLocalization } from '../contexts/LocalizationContext'

const GoldenFurnitureServices = () => {
  const { language, t } = useLocalization()

  const handleWhatsAppClick = (serviceType: string) => {
    const phoneNumber = '972512566286'
    const message = language === 'he'
      ? `שלום, אני מעוניין בשירות ${serviceType}`
      : `Hello, I am interested in ${serviceType} service`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handleExploreCollection = () => {
    const element = document.getElementById('best-seller-sofas')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const services = [
    {
      title: t('gfServices.freeDesign.title'),
      description: t('gfServices.freeDesign.description'),
      buttonText: t('gfServices.freeDesign.button'),
      image: '/Images/GoldenFurnitureServices/FreeDesign.jpeg',
      onClick: () => handleWhatsAppClick('Free Design Services'),
    },
    {
      title: t('gfServices.holiday.title'),
      description: t('gfServices.holiday.description'),
      buttonText: t('gfServices.holiday.button'),
      image: '/Images/GoldenFurnitureServices/TradeOpp.jpeg',
      onClick: handleExploreCollection,
    },
    {
      title: t('gfServices.wedding.title'),
      description: t('gfServices.wedding.description'),
      buttonText: t('gfServices.wedding.button'),
      image: '/Images/GoldenFurnitureServices/Wedding.jpeg',
      onClick: () => handleWhatsAppClick('Wedding Registry'),
    },
  ]

  return (
    <section id="gf-services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 dark:text-slate-100 mb-12 text-center uppercase"
        >
          {t('gfServices.title')}
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-[450px] overflow-hidden mb-4">
                <ImageLoader
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full"
                  objectFit="cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center text-center">
                <h3 
                  className="mb-3 uppercase leading-none text-slate-900 dark:text-slate-100"
                  style={{
                    letterSpacing: '0.08em',
                    lineHeight: '1',
                    fontFamily: 'Gotham, Verdana, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontVariant: 'normal',
                    textDecoration: 'inherit',
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-slate-700 dark:text-slate-300 text-sm"
                  style={{ margin: '0.3em 0 0.6em' }}
                >
                  {service.description}
                </p>
                <button
                  onClick={service.onClick}
                  className="underline text-slate-900 dark:text-slate-100 cursor-pointer hover:text-amber-600 transition-colors"
                >
                  {service.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GoldenFurnitureServices

