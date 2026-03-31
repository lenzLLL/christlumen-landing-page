import React from 'react';
import { motion } from 'framer-motion';
import {
  Video,
  MessageSquare,
  Monitor,
  Bot,
  CalendarDays,
  Sparkles } from
'lucide-react';
const UPCOMING_FEATURES = [
{
  title: 'Live Streaming Intégré',
  description:
  'Diffusez vos cultes et événements en direct directement depuis PHOTIZO sans passer par des plateformes tierces.',
  icon: Video,
  color: 'text-red-500',
  bg: 'bg-red-50',
  progress: 60
},
{
  title: 'Messagerie Instantanée',
  description:
  'Discutez en privé ou en groupe avec les membres de votre église de manière sécurisée et fluide.',
  icon: MessageSquare,
  color: 'text-blue-500',
  bg: 'bg-blue-50',
  progress: 75
},
{
  title: 'Intelligence Artificielle',
  description:
  "Générez des résumés de vos prédications, des plans d'études bibliques et des posts sociaux automatiquement.",
  icon: Bot,
  color: 'text-purple-500',
  bg: 'bg-purple-50',
  progress: 45
},
{
  title: 'Application Desktop',
  description:
  'Une application native pour Windows et Mac pour une gestion administrative encore plus rapide et puissante.',
  icon: Monitor,
  color: 'text-gray-700',
  bg: 'bg-gray-100',
  progress: 35
},
{
  title: 'Intégration Calendrier',
  description:
  "Synchronisez automatiquement vos événements d'église avec Google Calendar, Apple Calendar et Outlook.",
  icon: CalendarDays,
  color: 'text-green-500',
  bg: 'bg-green-50',
  progress: 50
}];

export function ComingSoonSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#FF6B35] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#9B59B6] rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: -20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 text-sm font-bold mb-6 border border-purple-100 shadow-sm">
            
            <Sparkles className="w-4 h-4 mr-2 text-[#E91E63]" />
            Bientôt disponible
          </motion.div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            L&apos;avenir de PHOTIZO
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Nous travaillons sans relâche pour vous apporter les meilleurs
            outils. Voici un aperçu de ce qui arrive très prochainement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UPCOMING_FEATURES.map((feature, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5
            }}
            className="relative group">
            
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl transform rotate-1 scale-105 opacity-50 transition-transform group-hover:rotate-2 group-hover:scale-110"></div>
              <div className="relative h-full bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                    En développement
                  </span>
                </div>

                <div
                className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 shadow-inner`}>
                
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>

                {/* Progress bar simulation */}
                <div className="mt-8">
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                    initial={{
                      width: 0
                    }}
                    whileInView={{
                      width: `${feature.progress}%`
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5
                    }}
                    className="h-full bg-gradient-to-r from-gray-300 to-gray-400 rounded-full" />
                  
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Suggestion Card */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: UPCOMING_FEATURES.length * 0.1,
              duration: 0.5
            }}
            className="relative h-full bg-gradient-to-br from-[#FF6B35]/5 to-[#E91E63]/5 border border-dashed border-[#FF6B35]/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-[#FF6B35]/10 transition-colors cursor-pointer">
            
            <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-[#FF6B35]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Une idée de fonctionnalité ?
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Nous construisons PHOTIZO avec vous. Partagez-nous vos besoins !
            </p>
            <a
              href="mailto:contact@photizo.app"
              className="text-sm font-semibold text-[#FF6B35] hover:text-[#E91E63] transition-colors">
              
              Suggérer une idée &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}