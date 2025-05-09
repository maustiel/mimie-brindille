// stores/accessibility.js

import { defineStore } from 'pinia'

// Définition du store Pinia nommé "accessibility"
export const useAccessibilityStore = defineStore('accessibility', {
  // État global du store
  state: () => ({
    fontSize: 100,              // Taille de la police (en %) — 100% par défaut
    highContrast: false,        // Mode contraste élevé activé ou non
    animationsEnabled: true     // Animations activées ou désactivées
  }),

  // Méthodes pour modifier l’état
  actions: {
    // Définit la taille de la police et l’applique au <html>
    setFontSize(pct) {
      this.fontSize = pct
      document.documentElement.style.fontSize = pct + '%'
    },

    // Active ou désactive le contraste élevé
    toggleContrast() {
      this.highContrast = !this.highContrast
    },

    // Active ou désactive toutes les animations CSS du site
    toggleAnimations() {
      this.animationsEnabled = !this.animationsEnabled
      // Ajoute ou retire la classe CSS .no-animations sur le <body>
      document.body.classList.toggle('no-animations', !this.animationsEnabled)
    }
  }
})
