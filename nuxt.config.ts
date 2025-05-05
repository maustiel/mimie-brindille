import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-easy-lightbox'
  ],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-02-10'
})