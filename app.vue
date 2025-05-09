<template>
  <!-- 1) Wrapper racine pour interdire le scroll horizontal -->
  <div class="overflow-x-hidden">
    <!-- 2) Navbar et contenu filtré -->
    <div
      :class="[
        'bg-primary flex flex-col',
        { 'high-contrast': store.highContrast },
      ]"
    >
      <Navbar />

      <!-- main adapte son container selon la route -->
      <main
        class="flex-1"
        :class="
          route.name === 'index'
            ? 'w-full px-0' // plein écran, sans padding
            : route.name === 'contact'
            ? 'container mx-auto px-2 sm:px-4 lg:px-6' /* Contact : padding réduit */
            : 'container mx-auto px-6' // max-width + padding sur les autres pages
        "
      >
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
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import CookieBanner from "~/components/CookieBanner.vue";
import AccessibilityWidget from "~/components/AccessibilityWidget.vue";
import { NuxtImg } from "#components";

import { useAccessibilityStore } from "~/stores/accessibility";
import { useRoute } from "vue-router";

const store = useAccessibilityStore();
const route = useRoute();
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
