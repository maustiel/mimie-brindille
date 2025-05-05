<template>
  <!-- 1) Wrapper racine pour interdire le scroll horizontal -->
  <div class="overflow-x-hidden">
    <!-- 2) Navbar et contenu filtré -->
    <div :class="['bg-primary flex flex-col', { 'high-contrast': store.highContrast }]">
      <Navbar />

      <main class="flex-1 container mx-auto px-6">
        <NuxtPage />
      </main>

      <Footer />
      <CookieBanner />
    </div>

    <!-- 3) Widget en fixed hors du wrapper filtré -->
    <AccessibilityWidget />
  </div>
</template>

<script setup>
import { useAccessibilityStore } from '~/stores/accessibility'
const store = useAccessibilityStore()

import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import CookieBanner from '~/components/CookieBanner.vue'
import AccessibilityWidget from '~/components/AccessibilityWidget.vue'
</script>

<style>
.bg-primary {
  background-color: #f5edf0;
}

/* Supprime le padding de <main> uniquement sur la page d'accueil */
.index main {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* Fonts */
@font-face {
  font-family: 'Helium';
  src: url('/fonts/helium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.helium {
  font-family: 'Helium', sans-serif;
}

@font-face {
  font-family: 'Louis George Cafe';
  src: url('/fonts/Louis\ George\ Cafe.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.louis {
  font-family: 'Louis George Cafe', sans-serif;
}
</style>
