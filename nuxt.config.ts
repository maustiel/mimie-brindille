import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-easy-lightbox',
    '@nuxt/image',
  ],

  
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-02-10',

   image: {
    // qualité par défaut
    quality: 60,
    // formats possibles
    formats: ['avif','webp','jpg'],
  }
})