"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
const FAQS = [
  {
    question:
      "Comment CHRISTLUMEN diffère-t-il d'un logiciel de gestion d'église classique ?",
    answer:
      "CHRISTLUMEN combine la puissance d'un outil de gestion complet (membres, dons, événements) avec l'engagement d'un réseau social privé dédié à votre église. Vos membres ne sont plus de simples lignes dans une base de données, ils interagissent activement avec votre contenu.",
  },
  {
    question: 'Puis-je gérer plusieurs églises ou campus avec un seul compte ?',
    answer:
      'Oui, notre architecture multi-églises permet aux réseaux et dénominations de gérer plusieurs campus depuis un tableau de bord centralisé, tout en donnant une autonomie locale à chaque église.',
  },
  {
    question: 'Comment fonctionne le système de dons ?',
    answer:
      "Nous intégrons les paiements par carte bancaire et Mobile Money. Les membres peuvent faire des dons ponctuels ou récurrents directement depuis l'application mobile ou web. Vous disposez d'une traçabilité complète et de rapports financiers détaillés.",
  },
  {
    question:
      "L'application mobile est-elle disponible pour tous les membres ?",
    answer:
      "Absolument. Vos membres peuvent télécharger gratuitement l'application CHRISTLUMEN sur iOS et Android pour suivre vos actualités, regarder vos cultes en direct et interagir avec la communauté.",
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer:
      "La sécurité et la confidentialité sont nos priorités absolues. Vos données sont chiffrées de bout en bout, hébergées sur des serveurs sécurisés, et nous respectons strictement les normes de protection des données (RGPD). Vous restez l'unique propriétaire de vos données.",
  },
  {
    question: 'Proposez-vous un accompagnement pour la mise en place ?',
    answer:
      'Oui, notre équipe dédiée vous accompagne pas à pas lors de la migration de vos données existantes et la configuration de votre espace. Nous proposons également des formations pour vos équipes administratives.',
  },
]
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section id="faq" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gradient-to-br from-[#FFD700]/10 to-[#DAA520]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-gradient-to-tr from-[#4A90E2]/10 to-[#9B59B6]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm text-[#FFD700] mb-6">
            <div className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Tout ce que vous devez savoir sur CHRISTLUMEN.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
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
              }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${openIndex === index ? 'bg-yellow-50 text-[#FFD700]' : 'bg-gray-50 text-gray-400'}`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

 
      </div>
    </section>
  )
}

