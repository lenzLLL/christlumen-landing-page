import React from 'react'
import {
  Church,
  Radio,
  Calendar,
  Heart,
  Users,
  CreditCard,
  MessageCircle,
  Share2,
} from 'lucide-react'
import { motion } from 'framer-motion'
const features = [
  {
    name: "Fil d'Actualité Social",
    description:
      'Partagez des photos, vidéos et textes. Vos membres peuvent liker, commenter et partager.',
    icon: MessageCircle,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    name: 'Gestion Multi-Églises',
    description:
      'Gérez une ou plusieurs églises et sous-églises depuis un tableau de bord unique.',
    icon: Church,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    name: 'Contenus Spirituels',
    description:
      'Publiez et diffusez vos prédications, podcasts et articles à toute votre communauté.',
    icon: Radio,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Événements & Billetterie',
    description:
      'Créez des événements, gérez les inscriptions et vendez des billets facilement.',
    icon: Calendar,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    name: 'Dons & Finances',
    description:
      'Recevez des dons via Mobile Money et Carte Bancaire avec traçabilité complète.',
    icon: Heart,
    color: 'bg-red-100 text-red-600',
  },
  {
    name: 'Groupes & Partage',
    description:
      "Créez des groupes de discussion et favorisez l'échange entre les membres.",
    icon: Share2,
    color: 'bg-green-100 text-green-600',
  },
]
export function FeatureSection() {
  return (
    <div id="features" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-[#FF6B35] font-semibold tracking-wide uppercase">
            Fonctionnalités
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tout pour votre communauté
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Une suite d'outils puissants combinant gestion administrative et
            engagement social.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="pt-6"
              >
                <div className="flow-root bg-white rounded-2xl px-6 pb-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className="-mt-6">
                    <div>
                      <span
                        className={`inline-flex items-center justify-center p-3 rounded-xl shadow-lg ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-bold text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
