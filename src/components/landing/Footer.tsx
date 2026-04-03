import React from 'react';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img className='w-auto h-24' src ="/logo-white.png"/>
            </div>
            <p className="text-gray-400 text-sm">
              La plateforme digitale pour propulser votre église vers l&apos;avenir.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
              Produit
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#features"
                  className="text-gray-400 hover:text-white transition-colors">
                  
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-gray-400 hover:text-white transition-colors">
                  
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/coming-soon"
                  className="text-gray-400 hover:text-white transition-colors">
                  
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-gray-400 hover:text-white transition-colors">
                  
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
              Légal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/confidentialite"
                  className="text-gray-400 hover:text-white transition-colors">
                  
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/cgu"
                  className="text-gray-400 hover:text-white transition-colors">
                  
                  CGU
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-gray-400 hover:text-white transition-colors">
                  
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
              Suivez-nous
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FFD700] transition-colors">
                
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#DAA520] transition-colors">
                
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#4A90E2] transition-colors">
                
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors">
                
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CHRISTLUMEN. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>);

}