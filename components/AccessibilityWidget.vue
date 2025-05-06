<template>
  <div>
    <!-- Bouton rond fixe en bas à gauche -->
    <button
      @click="open = !open"
      class="fixed bottom-4 left-4 w-12 h-12 rounded-full bg-[#381D1C] flex items-center justify-center shadow-lg z-10"

      :aria-expanded="open"
      aria-label="Options d’accessibilité"
    >
      <img 
        src="/icons/settings.svg" 
        alt="Icone réglages" 
        class="w-6 h-6" 
      />
    </button>

    <!-- Panneau d’options -->
    <transition name="fade">
      <div
        v-if="open"
        class="fixed bottom-20 left-4 flex flex-col gap-2 bg-white p-3 rounded-xl shadow-lg z-[1000]"
      >
        <button @click="decrease" class="px-3 py-1 border rounded">A−</button>
        <button @click="increase" class="px-3 py-1 border rounded">A+</button>
        <button @click="toggleContrast" class="px-3 py-1 border rounded">
          {{ store.highContrast ? 'Contraste normal' : 'Contraste élevé' }}
        </button>
        <button @click="toggleAnimations" class="px-3 py-1 border rounded">
          {{ store.animationsEnabled ? 'Désactiver anim.' : 'Réactiver anim.' }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAccessibilityStore } from '~/stores/accessibility'

const store = useAccessibilityStore()
const open = ref(false)

function increase() {
  store.setFontSize(Math.min(store.fontSize + 10, 200))
}
function decrease() {
  store.setFontSize(Math.max(store.fontSize - 10, 50))
}
function toggleContrast() {
  store.toggleContrast()
}
function toggleAnimations() {
  store.toggleAnimations()
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Pour désactiver les animations globalement */
.no-animations *,
.no-animations *::before,
.no-animations *::after {
  animation-duration: 0s !important;
  transition-duration: 0s !important;
}
</style>
