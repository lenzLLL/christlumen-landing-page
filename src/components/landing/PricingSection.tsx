import React from 'react'
import { Check } from 'lucide-react'
import { Button } from '../ui/Button'
const tiers = [
  {
    name: 'FREE',
    price: '0€',
    description: 'Pour démarrer votre digitalisation.',
    features: [
      '1 Église',
      "Jusqu'à 50 membres",
      'Gestion des événements basique',
      'Dons (frais standard)',
    ],
    cta: 'Commencer',
    variant: 'outline' as const,
  },
  {
    name: 'STARTER',
    price: '29€',
    period: '/mois',
    description: 'Pour les églises en croissance.',
    features: [
      '1 Église',
      "Jusqu'à 100 membres",
      'Contenus illimités',
      'Support prioritaire',
      'Statistiques de base',
    ],
    cta: 'Choisir Starter',
    variant: 'secondary' as const,
    highlighted: false,
  },
  {
    name: 'PRO',
    price: '79€',
    period: '/mois',
    description: 'La solution complète pour votre communauté.',
    features: [
      "Jusqu'à 5 Églises",
      '500 membres',
      'Commissions illimitées',
      'Billetterie avancée',
      'Statistiques détaillées',
      'Frais de transaction réduits',
    ],
    cta: 'Choisir Pro',
    variant: 'primary' as const,
    highlighted: true,
  },
  {
    name: 'PREMIUM',
    price: '199€',
    period: '/mois',
    description: "Pour les grands réseaux d'églises.",
    features: [
      'Églises illimitées',
      'Membres illimités',
      'API dédiée',
      'Account Manager dédié',
      'Formation personnalisée',
      'Marque blanche',
    ],
    cta: 'Contacter les ventes',
    variant: 'outline' as const,
  },
]
export function PricingSection() {
  return (
    <div id="pricing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Des tarifs adaptés à votre croissance
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Choisissez le plan qui correspond le mieux à la taille de votre
            communauté.
          </p>
        </div>

        <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`
                relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col
                ${tier.highlighted ? 'border-[#FF6B35] ring-2 ring-[#FF6B35] ring-opacity-50 scale-105 z-10' : 'border-gray-200 hover:border-gray-300'}
              `}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tier.name}
                </h3>
                {tier.highlighted && (
                  <p className="absolute top-0 -translate-y-1/2 bg-[#FF6B35] text-white px-3 py-0.5 text-sm font-semibold rounded-full transform left-1/2 -translate-x-1/2">
                    Populaire
                  </p>
                )}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="ml-1 text-xl font-semibold text-gray-500">
                      {tier.period}
                    </span>
                  )}
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>

                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button variant={tier.variant} className="w-full">
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
