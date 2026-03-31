import React from 'react'
import { motion } from 'framer-motion'
import { QrCode, Smartphone, Download } from 'lucide-react'
import { Button } from '../ui/Button'
export function AppDownloadSection() {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E91E63] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Emportez votre église partout avec vous
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Restez connecté à votre communauté où que vous soyez. Suivez les
              actualités, regardez les prédications en direct, faites vos dons
              et échangez avec les autres membres directement depuis votre
              mobile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="flex items-center bg-white text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center group">
                <svg
                  className="w-8 h-8 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.62 4.37-1.62 1.03.06 2.57.43 3.65 1.58-3.26 1.88-2.57 6.3.72 7.65-.54 1.55-1.33 3.11-2.46 4.62h.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold tracking-wider text-gray-500 group-hover:text-gray-700">
                    Télécharger sur
                  </div>
                  <div className="text-lg font-bold leading-none">
                    App Store
                  </div>
                </div>
              </button>

              <button className="flex items-center bg-transparent border border-gray-600 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
                <svg
                  className="w-8 h-8 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.412-.13L1.53 20.64a.994.994 0 0 1-.03-1.65L9.5 12 1.5 4.01a.994.994 0 0 1 .03-1.65L3.2.396a.996.996 0 0 1 .409.418zM15.208 12L5.026 22.186a.997.997 0 0 0 .124 1.618l1.668 1.112a1 1 0 0 0 1.386-.276l10.824-10.824a1.002 1.002 0 0 0 0-1.416L8.204.6a1 1 0 0 0-1.386-.276L5.15 1.436a.997.997 0 0 0-.124 1.618L15.208 12z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold tracking-wider text-gray-400">
                    DISPONIBLE SUR
                  </div>
                  <div className="text-lg font-bold leading-none">
                    Google Play
                  </div>
                </div>
              </button>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="bg-white p-2 rounded-lg">
                <QrCode className="w-24 h-24 text-gray-900" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">
                  Scannez pour télécharger
                </p>
                <p className="text-sm text-gray-400">
                  Compatible iOS et Android
                </p>
                <div className="mt-2 flex items-center text-[#FF6B35] text-sm font-medium">
                  <Download className="w-4 h-4 mr-1" />
                  Installation gratuite
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative z-10 w-72 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B35] to-[#E91E63] rounded-[3rem] blur-2xl opacity-40 transform rotate-6 scale-105"></div>
              <div className="relative bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=1600"
                  alt="App Interface"
                  className="w-full h-auto opacity-90"
                />

                {/* Overlay UI Elements */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold">
                      P
                    </div>
                    <div>
                      <p className="text-white font-bold">PHOTIZO</p>
                      <p className="text-xs text-gray-300">
                        Votre communauté en poche
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut',
              }}
              className="absolute top-20 -right-4 md:right-10 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl font-bold text-sm z-20"
            >
              🎉 Nouvel événement !
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute bottom-40 -left-4 md:left-0 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl font-bold text-sm z-20 flex items-center gap-2"
            >
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white"></div>
              </div>
              +120 membres
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
