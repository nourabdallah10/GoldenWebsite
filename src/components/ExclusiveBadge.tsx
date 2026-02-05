import { motion } from 'framer-motion'
import { useLocalization } from '../contexts/LocalizationContext'
import { Star } from 'lucide-react'

interface ExclusiveBadgeProps {
  className?: string
}

const ExclusiveBadge = ({ className = '' }: ExclusiveBadgeProps) => {
  const { t } = useLocalization()

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }}
      className={`inline-flex items-center gap-1.5 px-3 py-1 bg-amber-600 text-slate-900 text-xs font-bold rounded-full ${className}`}
    >
      <Star size={12} fill="currentColor" />
      <span>{t('exclusive.badge')}</span>
    </motion.div>
  )
}

export default ExclusiveBadge









