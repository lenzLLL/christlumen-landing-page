'use client'

import { Hero } from '../components/landing/Hero'
import { ComingSoonSection } from '../components/landing/ComingSoonSection'
import { Footer } from '../components/landing/Footer'
import { Button } from '../components/ui/Button'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <img
                src="https://cdn.magicpatterns.com/uploads/7PBXp3rY7vZe9XqCaXPcyH/ChatGPT_Image_14_janv._2026,_15_43_53.png"
                alt="Logo"
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] to-[#E91E63]">
                PHOTIZO
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
              >
                Fonctionnalités
              </a>
              <a
                href="#community"
                className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
              >
                Communauté
              </a>
              <a
                href="#pricing"
                className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
              >
                Tarifs
              </a>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" className="hidden sm:inline-flex">
                  Connexion
                </Button>
              <a href="mailto:contact@photizo.app">
                <Button className="bg-gradient-to-r from-[#FF6B35] to-[#E91E63] border-0 hover:opacity-90">
                  Contacter
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <ComingSoonSection />
      </main>

      <Footer />
    </div>
  )
}
