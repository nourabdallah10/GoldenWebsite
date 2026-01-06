import { motion } from 'framer-motion'
import ImageLoader from './ImageLoader'
import { useLocalization } from '../contexts/LocalizationContext'

const AboutUsFeatures = () => {
  const { t } = useLocalization()
  
  const features = [
    {
      icon: '/Images/icons-aboutus/20-years-of-experience.png',
      title: t('aboutUs.20Years'),
    },
    {
      icon: '/Images/icons-aboutus/Over-10000-happy-clients.png',
      title: t('aboutUs.10000Clients'),
    },
    {
      icon: '/Images/icons-aboutus/A-huge-variety-of-raw-materials.png',
      title: t('aboutUs.rawMaterials'),
    },
    {
      icon: '/Images/icons-aboutus/Surprising-designs.png',
      title: t('aboutUs.designs'),
    },
    {
      icon: '/Images/icons-aboutus/Fast-delivery-time.png',
      title: t('aboutUs.fastDelivery'),
    },
    {
      icon: '/Images/icons-aboutus/returning-clients.png',
      title: t('aboutUs.returningClients'),
    },
    {
      icon: '/Images/icons-aboutus/customer-support.png',
      title: t('aboutUs.customerSupport'),
    },
    {
      icon: '/Images/icons-aboutus/high-quality.png',
      title: t('aboutUs.highQuality'),
    },
    {
      icon: '/Images/icons-aboutus/custom-order.png',
      title: t('aboutUs.customOrder'),
    },
    {
      icon: '/Images/icons-aboutus/family-owned-and-operated.png',
      title: t('aboutUs.familyOwned'),
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 dark:text-slate-100 mb-16 text-center uppercase"
        >
          {t('aboutUs.title')}
        </motion.h2>

        {/* Features Grid - Card Style Design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:shadow-lg">
                {/* Icon */}
                <div className="mb-4 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <ImageLoader
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    priority={index < 5}
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-snug">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsFeatures

