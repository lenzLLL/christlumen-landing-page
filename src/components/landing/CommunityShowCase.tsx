import { motion } from 'framer-motion'
import { Users, Church, Radio } from 'lucide-react'
const STATS = [
  {
    label: 'Églises Connectées',
    value: '500+',
    icon: Church,
    color: 'text-[#FF6B35]',
  },
  {
    label: 'Membres Actifs',
    value: '50k+',
    icon: Users,
    color: 'text-[#E91E63]',
  },
  {
    label: 'Contenus Diffusés',
    value: '10k+',
    icon: Radio,
    color: 'text-[#9B59B6]',
  },
]
const COMMUNITY_IMAGES = [
  'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=400&h=300',
  'https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?auto=format&fit=crop&w=400&h=300',
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&h=300',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&h=300',
]
export function CommunityShowcase() {
  return (
    <section id="community" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Une communauté grandissante
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Rejoignez des centaines d'églises qui transforment leur gestion et
            leur communication avec CHRISTLUMEN.
          </p>
        </div>

        {/* Community Gallery Mosaic */}
        <div className="mb-16 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {COMMUNITY_IMAGES.map((src, index) => (
              <motion.div
                key={index}
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
                  duration: 0.5,
                }}
                className={`relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${index % 2 === 0 ? 'md:translate-y-4' : 'md:-translate-y-4'}`}
              >
                <img
                  src={src}
                  alt={`Communauté ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
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
                delay: index * 0.2,
              }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-white shadow-sm flex items-center justify-center ${stat.color}`}
              >
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-extrabold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Snippet */}
        <div className="mt-20 bg-gradient-to-r from-[#FFD700] to-[#DAA520] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium italic mb-8">
              "CHRISTLUMEN a complètement transformé la façon dont nous
              interagissons avec nos fidèles. C'est bien plus qu'un outil de
              gestion, c'est un véritable réseau social pour notre église."
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                alt="Pasteur"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div className="text-left">
                <div className="font-bold">Pasteur Jean</div>
                <div className="text-white/80 text-sm">
                  Église La Compassion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

