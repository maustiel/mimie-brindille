<template>
  <div>
    <!-- Bouton rond fixe en bas à gauche -->
    <!-- Bascule de l’état ouvert/fermé du panneau -->
    <button
      @click="open = !open"
      class="fixed bottom-4 left-4 w-12 h-12 rounded-full bg-[#381D1C] flex items-center justify-center shadow-lg z-40"
      :aria-expanded="open"
      aria-label="Options d’accessibilité"
    >
      <!-- Icône réglages à l’intérieur du bouton -->
      <img src="/icons/settings.svg" alt="Icone réglages" class="w-6 h-6" />
    </button>

    <!-- Panneau d’options -->
    <transition name="fade">
      <!-- Le panneau n’apparaît que si 'open' est true -->
      <div
        v-if="open"
        class="fixed bottom-20 left-4 flex flex-col gap-2 bg-white p-3 rounded-xl shadow-lg z-[1000]"
      >
        <!-- Bouton pour diminuer la taille du texte -->
        <button @click="decrease" class="px-3 py-1 border rounded">A−</button>
        <!-- Bouton pour augmenter la taille du texte -->
        <button @click="increase" class="px-3 py-1 border rounded">A+</button>
        <!-- Bouton pour activer/désactiver le contraste élevé -->
        <button @click="toggleContrast" class="px-3 py-1 border rounded">
          {{ store.highContrast ? "Contraste normal" : "Contraste élevé" }}
        </button>
        <!-- Bouton pour activer/désactiver les animations -->
        <button @click="toggleAnimations" class="px-3 py-1 border rounded">
          {{ store.animationsEnabled ? "Désactiver anim." : "Réactiver anim." }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
// Importation de la fonction ref pour créer une variable réactive
import { ref } from "vue";

// Importation du store personnalisé dédié à l’accessibilité
import { useAccessibilityStore } from "~/stores/accessibility";

// Initialisation du store (réactif) pour accéder aux paramètres d’accessibilité
const store = useAccessibilityStore();

// État local pour gérer l'ouverture ou fermeture du panneau
const open = ref(false);

// Fonction pour augmenter la taille de police (max 200%)
function increase() {
  store.setFontSize(Math.min(store.fontSize + 10, 200));
}

// Fonction pour diminuer la taille de police (min 50%)
function decrease() {
  store.setFontSize(Math.max(store.fontSize - 10, 50));
}

// Fonction pour activer ou désactiver le contraste élevé
function toggleContrast() {
  store.toggleContrast();
}

// Fonction pour activer ou désactiver les animations sur le site
function toggleAnimations() {
  store.toggleAnimations();
}
</script>

<style scoped>
/* Animation d'apparition/disparition pour le panneau d'accessibilité */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s; /* Durée de transition */
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0; /* État de début/fin (invisible) */
}

/* Classe globale pour désactiver toutes les animations du site */
.no-animations *,               /* Tous les éléments */
.no-animations *::before,       /* Pseudo-éléments ::before */
.no-animations *::after {
  /* Pseudo-éléments ::after */
  animation-duration: 0s !important; /* Désactive les animations */
  transition-duration: 0s !important; /* Désactive les transitions */
}
</style>
