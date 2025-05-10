<template>
  <div class="relative">
    <!-- Navbar -->
    <nav
      class="louis bg-[#CB8587] text-white p-2 grid grid-cols-5 items-center relative z-20"
    >
      <!-- Liens de gauche -->
      <NuxtLink
        to="/"
        class="text-center hidden md:block px-3 py-2 rounded transition-all duration-300"
        :class="{ 'bg-[#e09698] px-4 py-3': route.path === '/' }"
        @mouseover="hover = '/'"
        @mouseleave="hover = null"
        style="text-shadow: 2px 2px 4px rgba(176, 107, 109, 1)"
      >
        <span :class="{ 'text-lg': hover === '/' }">Accueil</span>
      </NuxtLink>
      <NuxtLink
        to="/catalogue"
        class="text-center hidden md:block px-3 py-2 rounded transition-all duration-300"
        :class="{ 'bg-[#e09698] px-4 py-3': route.path === '/catalogue' }"
        @mouseover="hover = '/catalogue'"
        @mouseleave="hover = null"
        style="text-shadow: 2px 2px 4px rgba(176, 107, 109, 1)"
      >
        <span :class="{ 'text-lg': hover === '/catalogue' }"
          >Produits et Services</span
        >
      </NuxtLink>

      <!-- Logo centré -->
      <NuxtLink to="/" class="flex justify-center col-span-3 md:col-span-1">
        <img
          src="/images/logo.webp"
          alt="Logo Mimie Brindille"
          class="h-[80px]"
        />
      </NuxtLink>

      <!-- Liens de droite -->
      <NuxtLink
        to="/about"
        class="text-center hidden md:block px-3 py-2 rounded transition-all duration-300"
        :class="{ 'bg-[#e09698] px-4 py-3': route.path === '/about' }"
        @mouseover="hover = '/about'"
        @mouseleave="hover = null"
        style="text-shadow: 2px 2px 4px rgba(176, 107, 109, 1)"
      >
        <span :class="{ 'text-lg': hover === '/about' }">À propos</span>
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="text-center hidden md:block px-3 py-2 rounded transition-all duration-300"
        :class="{ 'bg-[#e09698] px-4 py-3': route.path === '/contact' }"
        @mouseover="hover = '/contact'"
        @mouseleave="hover = null"
        style="text-shadow: 2px 2px 4px rgba(176, 107, 109, 1)"
      >
        <span :class="{ 'text-lg': hover === '/contact' }">Contact</span>
      </NuxtLink>

      <!-- Icône du menu burger -->
      <button @click="toggleMenu" class="md:hidden absolute right-6 top-8 z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-9 w-9 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </nav>

    <!-- Image décorative fleurs du bas-->
    <div class="relative overflow-visible">
      <!-- autorise l’overflow vertical -->
      <div
        class="absolute top-[-40px] left-0 w-full h-[100px] bg-cover bg-center bg-no-repeat z-10"
        style="background-image: url('/images/fleurs-navbar.webp')"
      ></div>
    </div>

    <!-- Overlay mobile pour fond gris en ouvrant le menu -->
    <div
      v-if="menuOpen"
      @click="toggleMenu"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
    ></div>

    <!-- DRAWER (menu latéral droit) -->
    <div
      :class="menuOpen ? 'translate-x-0' : 'translate-x-full'"
      class="fixed top-0 right-0 w-64 h-full bg-[#CB8587] shadow-lg z-50 transform transition-transform duration-300 flex flex-col"
    >
      <!-- Bouton fermer -->
      <button
        @click="toggleMenu"
        class="absolute top-8 right-6 text-white hover:text-white focus:outline-none"
        aria-label="Fermer le menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-9 h-9 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Liens de navigation mobile-->
      <ul class="mt-16 text-white text-lg space-y-4 p-6">
        <li>
          <NuxtLink
            to="/"
            @click="toggleMenu"
            class="block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#e09698]"
            :class="{ 'bg-[#e09698]': route.path === '/' }"
          >
            Accueil
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/catalogue"
            @click="toggleMenu"
            class="block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#e09698]"
            :class="{ 'bg-[#e09698]': route.path === '/catalogue' }"
          >
            Produits et Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            @click="toggleMenu"
            class="block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#e09698]"
            :class="{ 'bg-[#e09698]': route.path === '/about' }"
          >
            À propos
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            @click="toggleMenu"
            class="block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#e09698]"
            :class="{ 'bg-[#e09698]': route.path === '/contact' }"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>

      <!-- Icônes réseaux sociaux en bas -->
      <div
        class="mt-auto border-t border-[#e09698] flex justify-center space-x-4 p-6"
      >
        <a
          href="https://www.facebook.com/people/Mimie-Brindille/100091998159115/"
          aria-label="Facebook"
          target="_blank"
          class="text-white hover:text-[#EFDFDF]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            class="w-6 h-6 fill-current"
          >
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/brindillemimie/"
          aria-label="Instagram"
          target="_blank"
          class="text-white hover:text-[#EFDFDF]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-6 h-6 fill-current"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importation de useRoute pour accéder aux informations de la route active
import { useRoute } from "vue-router";

// Importation de ref pour créer des données réactives
import { ref } from "vue";

// Récupération de la route actuelle
const route = useRoute();

// Variable réactive pour suivre l'élément actuellement survolé (par exemple dans un menu)
const hover = ref(null);

// État d’ouverture/fermeture du menu latéral (drawer)
const menuOpen = ref(false);

// Fonction pour basculer l’état du menu (ouvrir/fermer)
function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style scoped>
/* Transition de fondu utilisée avec les composants <transition name="fade"> */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0; /* L'élément commence ou termine avec une opacité à 0 */
}
</style>
