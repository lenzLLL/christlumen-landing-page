'use client'

import { Hero } from '../components/landing/Hero'
import { ComingSoonSection } from '../components/landing/ComingSoonSection'
import { Footer } from '../components/landing/Footer'
import { Button } from '../components/ui/Button'
import { CommunityShowcase } from '@/components/landing/CommunityShowCase'
import { FeatureSection } from '@/components/landing/FeaturedSection'
import { PricingSection } from '@/components/landing/PricingSection'
import { FAQSection } from '@/components/landing/FAQSection'
import { AppDownloadSection } from '@/components/landing/AppDownloadSection'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-22 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-16 w-auto"
              />
      
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
              >
                Accueil
              </a>
              <a
                href="#features"
                className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
              >
                Fonctionnalités
              </a>
              <a
                href="#faq"
                className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
              >
                FAQ
              </a>
              <a
                href="#download"
                className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
              >
                Téléchargement
              </a>
            </div>
            <div className="flex items-center gap-4">
            
              <a href="mailto:contact@christlumen.app">
                <Button className="bg-gradient-to-r from-[#FFD700] to-[#DAA520] border-0 hover:opacity-90">
                  Contacter
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <CommunityShowcase/>
        <FeatureSection />
        <ComingSoonSection />
        <PricingSection/>
        <AppDownloadSection/>
        <FAQSection/>


      </main>

      <Footer />
    </div>
  )
}
