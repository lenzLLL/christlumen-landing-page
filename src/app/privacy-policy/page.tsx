import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '../../components/landing/Footer'
import { Button } from '../../components/ui/Button'

export default function PrivacyPolicyPage() {
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
            Politique de Confidentialité
          </h1>
          <p className="text-gray-400 mb-10">
            Dernière mise à jour : 1er janvier 2026
          </p>

          <div className="prose prose-orange max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p>
                La présente politique de confidentialité décrit comment CHRISTLUMEN SAS
                (« nous », « notre » ou « nos ») collecte, utilise, divulgue et protège
                les informations personnelles des utilisateurs (« vous » ou « vos ») de
                notre plateforme CHRISTLUMEN.
              </p>
              <p className="mt-2">
                Nous nous engageons à protéger votre vie privée et à traiter vos données
                personnelles de manière responsable, transparente et conforme au Règlement
                Général sur la Protection des Données (RGPD) et à la législation française
                applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Données personnelles collectées
              </h2>
              <p>
                Nous collectons les données personnelles suivantes :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Informations d'identification :</strong> nom, prénom, adresse email,
                  numéro de téléphone
                </li>
                <li>
                  <strong>Informations de compte :</strong> nom d'utilisateur, mot de passe
                  (chiffré), préférences utilisateur
                </li>
                <li>
                  <strong>Informations de profil :</strong> photo de profil, biographie,
                  informations sur l'église
                </li>
                <li>
                  <strong>Contenu utilisateur :</strong> publications, commentaires, messages,
                  médias partagés
                </li>
                <li>
                  <strong>Données techniques :</strong> adresse IP, type d'appareil,
                  navigateur utilisé, cookies
                </li>
                <li>
                  <strong>Données de paiement :</strong> informations de carte bancaire
                  (traitées par nos prestataires de paiement sécurisés)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Finalités du traitement
              </h2>
              <p>
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Fournir et améliorer nos services</li>
                <li>Gérer votre compte utilisateur</li>
                <li>Traiter vos paiements et dons</li>
                <li>Communiquer avec vous</li>
                <li>Assurer la sécurité de la plateforme</li>
                <li>Respecter nos obligations légales</li>
                <li>Analyser l'utilisation de nos services pour les améliorer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Base légale du traitement
              </h2>
              <p>
                Le traitement de vos données personnelles est fondé sur :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>L'exécution du contrat :</strong> pour fournir les services
                  CHRISTLUMEN que vous avez demandés
                </li>
                <li>
                  <strong>Le consentement :</strong> pour les communications marketing
                  (que vous pouvez retirer à tout moment)
                </li>
                <li>
                  <strong>L'intérêt légitime :</strong> pour améliorer nos services
                  et assurer la sécurité
                </li>
                <li>
                  <strong>L'obligation légale :</strong> pour nous conformer à la loi
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Partage des données
              </h2>
              <p>
                Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers.
                Nous pouvons partager vos données dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Prestataires de services :</strong> hébergement, paiement,
                  analyse (sous contrat de confidentialité)
                </li>
                <li>
                  <strong>Obligations légales :</strong> sur demande judiciaire ou
                  administrative
                </li>
                <li>
                  <strong>Protection des droits :</strong> pour défendre nos droits
                  ou ceux de nos utilisateurs
                </li>
                <li>
                  <strong>Avec votre consentement :</strong> uniquement si vous
                  l'avez explicitement autorisé
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Sécurité des données
              </h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
                pour protéger vos données personnelles contre l'accès non autorisé, la perte,
                l'altération ou la divulgation :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Chiffrement des données sensibles</li>
                <li>Contrôles d'accès stricts</li>
                <li>Surveillance continue de la sécurité</li>
                <li>Sauvegardes régulières</li>
                <li>Formation du personnel</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Conservation des données
              </h2>
              <p>
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire
                aux finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Données de compte :</strong> pendant la durée de votre
                  inscription, plus 3 ans après suppression
                </li>
                <li>
                  <strong>Données de paiement :</strong> le temps nécessaire au
                  traitement des transactions
                </li>
                <li>
                  <strong>Cookies :</strong> selon les durées spécifiées dans
                  notre politique de cookies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Vos droits
              </h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Droit d'accès :</strong> connaître les données que nous détenons sur vous
                </li>
                <li>
                  <strong>Droit de rectification :</strong> corriger vos données inexactes
                </li>
                <li>
                  <strong>Droit à l'effacement :</strong> supprimer vos données
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré
                </li>
                <li>
                  <strong>Droit d'opposition :</strong> vous opposer au traitement de vos données
                </li>
                <li>
                  <strong>Droit à la limitation :</strong> limiter le traitement de vos données
                </li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à :{' '}
                <a
                  href="mailto:contact@christlumen.app"
                  className="text-[#FFD700] hover:underline"
                >
                  contact@christlumen.app
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Cookies et technologies similaires
              </h2>
              <p>
                Nous utilisons des cookies et technologies similaires pour améliorer votre
                expérience utilisateur :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site
                </li>
                <li>
                  <strong>Cookies de performance :</strong> pour analyser l'utilisation du site
                </li>
                <li>
                  <strong>Cookies fonctionnels :</strong> pour mémoriser vos préférences
                </li>
                <li>
                  <strong>Cookies marketing :</strong> pour vous proposer du contenu pertinent
                </li>
              </ul>
              <p className="mt-4">
                Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Modifications de la politique
              </h2>
              <p>
                Nous pouvons modifier cette politique de confidentialité à tout moment.
                Les modifications substantielles vous seront notifiées par email ou via
                la plateforme. La poursuite de l'utilisation de CHRISTLUMEN après modification
                vaut acceptation de la nouvelle politique.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Contact
              </h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou
                l'utilisation de vos données personnelles, contactez notre Délégué
                à la Protection des Données :
              </p>
              <p className="mt-4">
                Email :{' '}
                <a
                  href="mailto:privacy@christlumen.app"
                  className="text-[#FFD700] hover:underline"
                >
                  privacy@christlumen.app
                </a>
                <br />
                Adresse : CHRISTLUMEN SAS, 123 Avenue de l'Innovation, 75001 Paris, France
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}