import { defineNuxtConfig } from 'nuxt/config'

// Configuration principale du projet Nuxt
export default defineNuxtConfig({
  // Modules utilisés dans le projet
  modules: [
    '@nuxtjs/tailwindcss',     // Intègre Tailwind CSS
    '@pinia/nuxt',             // Active le store Pinia
    'nuxt-easy-lightbox',      // Permet d’afficher les images en lightbox
    '@nuxt/image',             // Module d’optimisation d’images Nuxt
  ],

  // Fichier CSS global à charger dans tout le projet
  css: ['~/assets/css/main.css'],

  // Permet de figer le comportement du framework à une date donnée (utile pour éviter les breaking changes après mises à jour)
  compatibilityDate: '2025-02-10',

  // Configuration du module Nuxt Image
  image: {
    quality: 60,                         // Qualité par défaut des images optimisées
    formats: ['avif', 'webp', 'jpg'],    // Formats d’images pris en charge
  }
})
