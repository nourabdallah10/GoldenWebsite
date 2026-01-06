import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import cn from 'classnames'

interface FilterSidebarProps {
  isOpen: boolean
  onClose: () => void
  filters: {
    price: { min: number; max: number }
    colors: string[]
    materials: string[]
  }
  onFilterChange: (filters: any) => void
}

const FilterSidebar = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
}: FilterSidebarProps) => {
  const [priceRange, setPriceRange] = useState({
    min: filters.price.min,
    max: filters.price.max,
  })
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])

  const colors = ['Black', 'White', 'Brown', 'Gray', 'Beige', 'Navy']
  const materials = ['Leather', 'Fabric', 'Wood', 'Metal', 'Glass']

  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    const newRange = { ...priceRange, [type]: value }
    setPriceRange(newRange)
    onFilterChange({ ...filters, price: newRange })
  }

  const toggleColor = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color]
    setSelectedColors(newColors)
    onFilterChange({ ...filters, colors: newColors })
  }

  const toggleMaterial = (material: string) => {
    const newMaterials = selectedMaterials.includes(material)
      ? selectedMaterials.filter((m) => m !== material)
      : [...selectedMaterials, material]
    setSelectedMaterials(newMaterials)
    onFilterChange({ ...filters, materials: newMaterials })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-slate-800 shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Filters</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-slate-900 dark:text-slate-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Price</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-600 mb-2">
                      Min: ₪{priceRange.min.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min={filters.price.min}
                      max={filters.price.max}
                      value={priceRange.min}
                      onChange={(e) =>
                        handlePriceChange('min', Number(e.target.value))
                      }
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 mb-2">
                      Max: ₪{priceRange.max.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min={filters.price.min}
                      max={filters.price.max}
                      value={priceRange.max}
                      onChange={(e) =>
                        handlePriceChange('max', Number(e.target.value))
                      }
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-slate-900 mb-4">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={cn(
                        'px-4 py-2 rounded-md border-2 transition-colors',
                        selectedColors.includes(color)
                          ? 'border-amber-600 bg-amber-50 text-amber-900'
                          : 'border-gray-300 bg-white text-slate-700 hover:border-amber-600'
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-slate-900 mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <label
                      key={material}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(material)}
                        onChange={() => toggleMaterial(material)}
                        className="w-4 h-4 text-amber-600 rounded"
                      />
                      <span className="text-slate-700">{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default FilterSidebar


