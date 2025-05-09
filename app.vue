<template>
  <!-- 1) Wrapper racine pour interdire le scroll horizontal -->
  <div class="overflow-x-hidden">

    <!-- 2) Bloc principal contenant Navbar, contenu et Footer -->
    <div
      :class="[
        'bg-primary flex flex-col',
        { 'high-contrast': store.highContrast }, // Active une classe supplémentaire si contraste élevé
      ]"
    >
      <!-- Barre de navigation en haut de page -->
      <Navbar />

      <!-- Zone principale : s’adapte en fonction de la route -->
      <main
        class="flex-1" 
        :class="
          route.name === 'index'
            ? 'w-full px-0' // Page d’accueil : plein écran sans padding
            : route.name === 'contact'
            ? 'container mx-auto px-2 sm:px-4 lg:px-6' // Contact : container avec padding léger
            : route.name === 'catalogue'
            ? 'container mx-auto px-2 sm:px-4 lg:px-6' // Catalogue : même traitement
            : 'container mx-auto px-6' // Autres pages : container classique avec padding généreux
        "
      >
        <!-- Nuxt affiche ici le composant de la page courante -->
        <NuxtPage />
      </main>

      <!-- Pied de page + bannière cookie -->
      <Footer />
      <CookieBanner />
    </div>

    <!-- 3) Composants fixés indépendamment du flux principal -->

    <!-- Widget d’accessibilité (flottant) -->
    <AccessibilityWidget />

    <!-- Bouton retour en haut, sous la bannière cookies -->
    <button
      @click="scrollToTop"
      class="fixed bottom-4 right-4 w-12 h-12 bg-[#CB8587] rounded-full shadow-lg flex items-center justify-center hover:bg-[#b06b6d] transition z-10"
      aria-label="Retour en haut"
    >
      <!-- Icône flèche vers le haut -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-6 h-6 fill-white">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>
    </button>

  </div>
</template>


<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import CookieBanner from "~/components/CookieBanner.vue";
import AccessibilityWidget from "~/components/AccessibilityWidget.vue";
import { NuxtImg } from "#components";

import { useAccessibilityStore } from "~/stores/accessibility";
import { useRoute } from "vue-router";

const store = useAccessibilityStore();
const route = useRoute();

// Fonction de défilement fluide vers le haut
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style>
.bg-primary {
  background-color: #f5edf0;
}

/* Tes @font-face ici… */
@font-face {
  font-family: "Helium";
  src: url("/fonts/helium.ttf") format("truetype");
}
.helium {
  font-family: "Helium", sans-serif;
}

@font-face {
  font-family: "Louis George Cafe";
  src: url("/fonts/Louis George Cafe.ttf") format("truetype");
}
.louis {
  font-family: "Louis George Cafe", sans-serif;
}
</style>
