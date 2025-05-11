import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // — tes modules existants —
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-easy-lightbox',
    '@nuxt/image',
  ],

  // — ton CSS global —
  css: ['~/assets/css/main.css'],

  // — compatibilité Nuxt —
  compatibilityDate: '2025-02-10',

  // — options du module image —
  image: {
    quality: 60,
    formats: ['avif', 'webp', 'jpg'],
  },

  // — NOUVEAU : ta clé GA exposée en public runtimeConfig —
  runtimeConfig: {
    public: {
      // Attention : la variable d’environnement GA_MEASUREMENT_ID doit être définie dans ton .env
      gaMeasurementId: process.env.GA_MEASUREMENT_ID || ''
    }
  }
})
