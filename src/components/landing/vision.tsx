"use client"
import { motion } from 'framer-motion'
export const Vision: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-christlumen-light/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-christlumen-light/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="bg-white p-10 md:p-16 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-christlumen-light/10"
        >
          <div className="mb-8 flex justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-christlumen opacity-50"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif text-christlumen-text mb-6 leading-relaxed">
            Notre Vision
          </h2>

          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed italic">
            "CHRISTLUMEN se positionne comme le réseau social des églises — un
            outil qui va au-delà de la simple gestion administrative pour créer
            de véritables communautés digitales engagées."
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-christlumen-light/50" />
            <span className="text-sm font-medium text-christlumen uppercase tracking-widest">
              L'équipe ChristLumen
            </span>
            <div className="h-[1px] w-12 bg-christlumen-light/50" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
