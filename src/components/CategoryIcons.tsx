import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ImageLoader from './ImageLoader'
import { useLocalization } from '../contexts/LocalizationContext'

const CategoryIcons = () => {
  const { t } = useLocalization()
  
  const categories = [
    { name: t('categoryIcons.couches'), icon: '/Images/icons-categories/couches-01.png', path: '/sofas' },
    { name: t('categoryIcons.beds'), icon: '/Images/icons-categories/beds-01.png', path: '/beds' },
    { name: t('categoryIcons.diningRoomSets'), icon: '/Images/icons-categories/Dining-Room-Sets-01.png', path: '/tables' },
    { name: t('categoryIcons.kitchenSets'), icon: '/Images/icons-categories/Kitchen-Sets-01.png', path: '/kitchen' },
    { name: t('categoryIcons.mattresses'), icon: '/Images/icons-categories/Mattresses-01.png', path: '/mattresses' },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center"
            >
              <Link to={category.path} className="flex flex-col items-center group">
                <div className="bg-white dark:bg-slate-800 rounded-full p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700">
                  <ImageLoader
                    src={category.icon}
                    alt={category.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    priority={index < 3}
                  />
                </div>
                <span className="mt-2 text-slate-900 dark:text-slate-100 text-sm md:text-base font-medium uppercase">
                  {category.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CategoryIcons

