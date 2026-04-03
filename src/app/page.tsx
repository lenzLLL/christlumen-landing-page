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
import Navbar from '@/components/landing/navbar'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
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
