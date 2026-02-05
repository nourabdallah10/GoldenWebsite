import { motion } from 'framer-motion'

const SectionDivider = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent w-full max-w-2xl"></div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex-shrink-0"
          >
            <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
          </motion.div>
          <div className="h-px bg-gradient-to-l from-transparent via-amber-600 to-transparent w-full max-w-2xl"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionDivider







