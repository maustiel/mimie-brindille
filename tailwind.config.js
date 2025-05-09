/** @type {import('tailwindcss').Config} */
// Configuration Tailwind CSS pour ton projet Nuxt
module.exports = {
  // Fichiers à scanner pour générer les classes CSS utiles (purge des inutiles)
  content: [
    './components/**/*.{vue,js,ts}', // Tous les composants Vue/JS/TS
    './layouts/**/*.vue',            // Tous les layouts Nuxt
    './pages/**/*.vue',              // Toutes les pages Nuxt
    './app.vue',                     // Le fichier racine de ton application
    './nuxt.config.ts'              // Pour détecter d’éventuelles classes dynamiques
  ],

  // Personnalisation du thème Tailwind
  theme: {
    extend: {
      // Tu peux y ajouter des couleurs, polices, breakpoints, etc.
    },
  },

  // Plugins Tailwind (vide ici, mais tu peux y ajouter par exemple forms, typography, etc.)
  plugins: [],
}
