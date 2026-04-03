import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { FeedPreview } from './FeedPreview';
import { motion } from 'framer-motion';
const AVATARS = [
'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&h=50',
'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&h=50',
'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=50&h=50',
'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=50&h=50'];

const FLOATING_IMAGES = [
{
  src: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=400',
  className: 'top-10 -left-12 w-40 h-28',
  delay: 0.5
},
{
  src: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=400',
  className: 'bottom-20 -right-8 w-36 h-36',
  delay: 0.8
},
{
  src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=400',
  className: 'top-1/2 -right-16 w-32 h-32',
  delay: 1.1
}];

export function Hero() {
  return (
    <div id="home" className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#87CEEB] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#FFB347] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5
              }}>
              
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 text-[#FFD700] text-sm font-medium mb-6 border border-yellow-200">
                <span className="flex h-2 w-2 rounded-full bg-[#FFD700] mr-2 animate-pulse"></span>
                La plateforme #1 pour les églises connectées
              </div>

              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
                <span className="block">Plus qu&apos;un outil,</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#FFB347]">
                  votre réseau social
                </span>
              </h1>

              <p className="mt-4 max-w-md mx-auto lg:mx-0 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl leading-relaxed">
                Créez une véritable communauté digitale. Partagez des moments,
                diffusez vos cultes, et gardez le lien avec vos membres comme
                sur vos réseaux préférés, mais dédié à votre église.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#download" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto px-8"
                    leftIcon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.62 4.37-1.62 1.03.06 2.57.43 3.65 1.58-3.26 1.88-2.57 6.3.72 7.65-.54 1.55-1.33 3.11-2.46 4.62h.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>}>
                    App Store
                  </Button>
                </a>
                <a href="#download" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                    leftIcon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.412-.13L1.53 20.64a.994.994 0 0 1-.03-1.65L9.5 12 1.5 4.01a.994.994 0 0 1 .03-1.65L3.2.396a.996.996 0 0 1 .409.418zM15.208 12L5.026 22.186a.997.997 0 0 0 .124 1.618l1.668 1.112a1 1 0 0 0 1.386-.276l10.824-10.824a1.002 1.002 0 0 0 0-1.416L8.204.6a1 1 0 0 0-1.386-.276L5.15 1.436a.997.997 0 0 0-.124 1.618L15.208 12z"/></svg>}>
                    Google Play
                  </Button>
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  {AVATARS.map((url, i) =>
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    
                      <img
                      src={url}
                      alt={`Membre ${i + 1}`}
                      className="w-full h-full object-cover" />
                    
                    </div>
                  )}
                </div>
                <p>Rejoint par +500 églises</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Feed Preview with Floating Images */}
          <div className="relative lg:h-[700px] flex items-center justify-center">
            <motion.div
              initial={{
                opacity: 0,
                x: 50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.2
              }}
              className="relative z-10">
              
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/20 to-[#DAA520]/20 rounded-full filter blur-3xl transform scale-75 -z-10"></div>
              <FeedPreview />
            </motion.div>

            {/* Floating Community Images */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              {FLOATING_IMAGES.map((img, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0]
                }}
                transition={{
                  opacity: {
                    delay: img.delay,
                    duration: 0.5
                  },
                  scale: {
                    delay: img.delay,
                    duration: 0.5
                  },
                  y: {
                    repeat: Infinity,
                    duration: 4 + index,
                    ease: 'easeInOut',
                    delay: img.delay
                  }
                }}
                className={`absolute ${img.className} rounded-2xl shadow-xl overflow-hidden border-4 border-white z-20`}>
                
                  <img
                  src={img.src}
                  alt="Community Moment"
                  className="w-full h-full object-cover" />
                
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>);

}