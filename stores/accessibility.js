// stores/accessibility.js
import { defineStore } from 'pinia'

export const useAccessibilityStore = defineStore('accessibility', {
  state: () => ({
    fontSize: 100,
    highContrast: false,
    animationsEnabled: true
  }),
  actions: {
    setFontSize(pct) {
      this.fontSize = pct
      document.documentElement.style.fontSize = pct + '%'
    },
    toggleContrast() {
      this.highContrast = !this.highContrast
    },
    toggleAnimations() {
      this.animationsEnabled = !this.animationsEnabled
      document.body.classList.toggle('no-animations', !this.animationsEnabled)
    }
  }
})
