import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '../../components/landing/Footer'
import { Button } from '../../components/ui/Button'
export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#DAA520]">
                CHRISTLUMEN
              </span>
            </Link>
            <div>
                
              <a href="/contact">
                <Button className="bg-gradient-to-r from-[#FFD700] to-[#DAA520] border-0 hover:opacity-90">
                  Contacter
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
            Mentions Légales
          </h1>

          <div className="prose prose-orange max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Éditeur du site
              </h2>
              <p>
                Le site CHRISTLUMEN est édité par la société CHRISTLUMEN SAS, Société
                par Actions Simplifiée au capital de 10 000 euros, dont le siège
                social est situé au :<br />
                123 Avenue de l'Innovation
                <br />
                75001 Paris, France
                <br />
                Immatriculée au Registre du Commerce et des Sociétés de Paris
                sous le numéro : 123 456 789
                <br />
                Numéro de TVA intracommunautaire : FR 12 345678901
              </p>
              <p className="mt-2">
                Email :{' '}
                <a
                  href="mailto:contact@christlumen.app"
                  className="text-[#FFD700] hover:underline"
                >
                  contact@christlumen.app
                </a>
                <br />
                Téléphone : +33 (0)1 23 45 67 89
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Directeur de la publication
              </h2>
              <p>
                Le Directeur de la publication est Monsieur Jean Dupont, en sa
                qualité de Président de CHRISTLUMEN SAS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Hébergement
              </h2>
              <p>
                Le site est hébergé par :<br />
                Amazon Web Services EMEA SARL
                <br />
                38 Avenue John F. Kennedy, L-1855 Luxembourg
                <br />
                Téléphone : +352 2789 0057
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble de ce site relève de la législation française et
                internationale sur le droit d'auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
              <p className="mt-2">
                La reproduction de tout ou partie de ce site sur un support
                électronique quel qu'il soit est formellement interdite sauf
                autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Limitation de responsabilité
              </h2>
              <p>
                CHRISTLUMEN SAS s'efforce d'assurer au mieux de ses possibilités,
                l'exactitude et la mise à jour des informations diffusées sur ce
                site, dont elle se réserve le droit de corriger, à tout moment
                et sans préavis, le contenu.
              </p>
              <p className="mt-2">
                Toutefois, CHRISTLUMEN SAS ne peut garantir l'exactitude, la
                précision ou l'exhaustivité des informations mises à la
                disposition sur ce site. En conséquence, CHRISTLUMEN SAS décline
                toute responsabilité pour toute imprécision, inexactitude ou
                omission portant sur des informations disponibles sur le site.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
