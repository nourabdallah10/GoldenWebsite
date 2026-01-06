import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { staggeredChildren, staggeredItem, scaleOnHover } from '../utils/animations'
import { useLocalization } from '../contexts/LocalizationContext'
import ImageLoader from './ImageLoader'

interface Category {
  name: string
  path: string
  image: string
}

const CategoriesGrid = () => {
  const { t } = useLocalization()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const categories: Category[] = [
    { name: t('nav.sofas'), path: '/sofas', image: '/Images/SofaCategory.jpg' },
    { name: t('nav.beds'), path: '/beds', image: '/Images/BedCategory.jpg' },
    { name: t('nav.tables'), path: '/tables', image: '/Images/Tables/1.jpg' },
    { name: t('nav.tablesBuffet'), path: '/tables-buffet', image: '/Images/Tables & buffet/1.jpg' },
  ]

  return (
    <section id="collections" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-12"
          variants={staggeredChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={staggeredItem}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <Link to={category.path} className="block">
                {/* Card Container */}
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="relative w-full h-[250px] md:h-[400px] overflow-hidden shadow-md group-hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <ImageLoader
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full"
                      objectFit="cover"
                      aspectRatio="1/1"
                    />
                  </motion.div>

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredIndex === index ? 0 : 20,
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="px-6 py-3 bg-amber-600 text-slate-900 font-bold rounded-md hover:bg-amber-700 transition-colors"
                    >
                      Browse Collection
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Category Name */}
                <h3 className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-100 text-left uppercase clear-both whitespace-normal" style={{ letterSpacing: '1px' }}>
                  {category.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Categories Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center"
        >
          <Link to="/categories">
            <motion.button
              {...scaleOnHover}
              className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-md hover:bg-slate-800 transition-colors group"
            >
              <span>{t('categories.viewAll')}</span>
              <motion.div
                className="transition-transform duration-300 group-hover:translate-x-2"
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CategoriesGrid

