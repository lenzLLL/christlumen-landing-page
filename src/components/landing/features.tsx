import { motion } from 'framer-motion'
import { Users, Settings, HeartHandshake, CalendarDays } from 'lucide-react'
const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Communauté connectée',
    description:
      'Renforcez les liens entre les membres de votre église au-delà des rassemblements dominicaux.',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Gestion simplifiée',
    description:
      'Des outils intuitifs pour administrer votre église, vos groupes et vos ressources efficacement.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Partage & Inspiration',
    description:
      'Un espace sécurisé pour partager des témoignages, des prières et des ressources spirituelles.',
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    title: 'Événements & Cultes',
    description:
      'Organisez et communiquez facilement sur vos prochains cultes, réunions et événements spéciaux.',
  },
]
export const Features: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-christlumen to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
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
            margin: '-100px',
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-christlumen-text mb-4">
            Une plateforme pensée pour vous
          </h2>
          <div className="w-16 h-0.5 bg-christlumen mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
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
                margin: '-50px',
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-christlumen-bg/50 rounded-2xl p-8 border border-christlumen-light/10 hover:border-christlumen-light/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-christlumen-accent flex items-center justify-center text-christlumen mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-christlumen-text mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
