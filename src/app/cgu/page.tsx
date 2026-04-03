import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '../../components/landing/Footer'
import { Button } from '../../components/ui/Button'
export default function CGUPage() {
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
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-gray-400 mb-10">
            Dernière mise à jour : 1er janvier 2026
          </p>

          <div className="prose prose-orange max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Objet
              </h2>
              <p>
                Les présentes Conditions Générales d'Utilisation (ci-après « CGU
                ») ont pour objet de définir les modalités et conditions
                d'utilisation de la plateforme CHRISTLUMEN, accessible via le site
                web et les applications mobiles, éditée par CHRISTLUMEN SAS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Accès au service
              </h2>
              <p>
                La plateforme CHRISTLUMEN est accessible gratuitement à tout
                utilisateur disposant d'un accès à Internet. Certaines
                fonctionnalités avancées sont réservées aux utilisateurs ayant
                souscrit à un abonnement payant.
              </p>
              <p className="mt-2">
                CHRISTLUMEN SAS se réserve le droit de suspendre ou d'interrompre
                l'accès au service pour des raisons de maintenance, de mise à
                jour ou en cas de force majeure, sans que cela ne puisse donner
                lieu à une quelconque indemnisation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Inscription et compte
              </h2>
              <p>
                L'utilisation de certaines fonctionnalités de CHRISTLUMEN nécessite
                la création d'un compte utilisateur. L'utilisateur s'engage à
                fournir des informations exactes et à jour lors de son
                inscription.
              </p>
              <p className="mt-2">
                Chaque utilisateur est responsable de la confidentialité de ses
                identifiants de connexion et de toutes les actions effectuées
                depuis son compte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Utilisation du service
              </h2>
              <p>
                L'utilisateur s'engage à utiliser la plateforme de manière
                conforme à sa destination et à ne pas :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  Publier du contenu illicite, diffamatoire, injurieux ou
                  contraire à l'ordre public
                </li>
                <li>
                  Porter atteinte aux droits de tiers, notamment aux droits de
                  propriété intellectuelle
                </li>
                <li>
                  Utiliser la plateforme à des fins commerciales non autorisées
                </li>
                <li>
                  Tenter de compromettre la sécurité ou le fonctionnement de la
                  plateforme
                </li>
                <li>
                  Collecter des données personnelles d'autres utilisateurs sans
                  leur consentement
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble des éléments composant la plateforme CHRISTLUMEN (textes,
                images, logiciels, base de données, marques, logos) sont
                protégés par les lois relatives à la propriété intellectuelle et
                sont la propriété exclusive de CHRISTLUMEN SAS.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation ou exploitation non autorisée
                de ces éléments est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Responsabilité
              </h2>
              <p>
                CHRISTLUMEN SAS met tout en œuvre pour assurer la disponibilité et
                le bon fonctionnement de la plateforme. Toutefois, CHRISTLUMEN SAS
                ne saurait être tenue responsable des interruptions de service,
                des pertes de données ou de tout dommage indirect résultant de
                l'utilisation de la plateforme.
              </p>
              <p className="mt-2">
                L'utilisateur est seul responsable du contenu qu'il publie sur
                la plateforme.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Données personnelles
              </h2>
              <p>
                Le traitement des données personnelles des utilisateurs est régi
                par notre{' '}
                <Link
                  href="/confidentialite"
                  className="text-[#FFD700] hover:underline"
                >
                  Politique de Confidentialité
                </Link>
                , qui fait partie intégrante des présentes CGU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Modification des CGU
              </h2>
              <p>
                CHRISTLUMEN SAS se réserve le droit de modifier les présentes CGU à
                tout moment. Les utilisateurs seront informés de toute
                modification substantielle par notification sur la plateforme ou
                par email. La poursuite de l'utilisation du service après
                modification vaut acceptation des nouvelles CGU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Droit applicable et juridiction
              </h2>
              <p>
                Les présentes CGU sont régies par le droit français. En cas de
                litige relatif à l'interprétation ou à l'exécution des
                présentes, les parties s'efforceront de trouver une solution
                amiable. À défaut, le litige sera soumis aux tribunaux
                compétents de Paris.
              </p>
              <p className="mt-4">
                Pour toute question relative aux présentes CGU, vous pouvez nous
                contacter à :{' '}
                <a
                  href="mailto:contact@christlumen.app"
                  className="text-[#FFD700] hover:underline"
                >
                  contact@christlumen.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
