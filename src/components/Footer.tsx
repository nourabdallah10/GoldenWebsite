import { motion } from 'framer-motion'
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
import { floating } from '../utils/animations'
import { useLocalization } from '../contexts/LocalizationContext'
import { formatPhone, formatAddress } from '../utils/formatting'
import ImageLoader from './ImageLoader'

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const Footer = () => {
  const { language, t } = useLocalization()

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com' },
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com' },
    { icon: WhatsAppIcon, name: 'WhatsApp', url: 'https://api.whatsapp.com/send?phone=972512566286' },
  ]


  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <motion.div variants={floating} animate="animate" className="inline-block">
            <ImageLoader
              src="/Images/logo.jpg"
              alt="Golden Furniture"
              className="h-16 w-auto mx-auto"
              priority
              objectFit="contain"
            />
          </motion.div>
          <h2 className="text-2xl font-bold mt-4">Golden Furniture</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3 text-sm">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <MapPin size={18} className="mt-1 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-white/80">
                    {formatAddress('חופית 4', 'אריאל', language)}
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <Phone size={18} className="text-amber-600 flex-shrink-0" />
                <a
                  href="tel:+972512566286"
                  className="text-white/80 hover:text-amber-600 transition-colors"
                >
                  {formatPhone('+972 51-256-6286')}
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <Mail size={18} className="text-amber-600 flex-shrink-0" />
                <a
                  href="mailto:info@goldenfurniture.com"
                  className="text-white/80 hover:text-amber-600 transition-colors"
                >
                  info@goldenfurniture.com
                </a>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <a
                  href="/#gf-services"
                  className="text-white/80 hover:text-amber-600 transition-colors"
                >
                  {t('footer.aboutUs')}
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="/#collections"
                  className="text-white/80 hover:text-amber-600 transition-colors"
                >
                  {t('footer.ourCollections')}
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="/#designer-collective"
                  className="text-white/80 hover:text-amber-600 transition-colors"
                >
                  {t('footer.designerCollective')}
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=972512566286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-amber-600 transition-colors"
                >
                  {t('footer.contactLink')}
                </a>
              </motion.li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.follow')}</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.2 }}
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors group"
                    aria-label={social.name}
                  >
                    <Icon
                      size={24}
                      className="text-white group-hover:text-amber-600 transition-colors"
                    />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-white/60"
          >
            © {new Date().getFullYear()} Golden Furniture. {t('footer.copyright')}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

