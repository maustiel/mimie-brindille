<template>
  <div class="relative">
    <!-- Navbar -->
    <nav class=" louis bg-[#CB8587]  text-white p-2 grid grid-cols-5 items-center relative z-20">
      <!-- Liens de gauche -->
      <NuxtLink to="/" 
        class="text-center hidden md:block px-3 py-2 rounded transition-all duration-300"
        :class="{ 'bg-[#e09698] px-4 py-3': route.path === '/' }"
        @mouseover="hover = '/'"
        @mouseleave="hover = null">
        <span :class="{ 'text-lg': hover === '/' }">Accueil</span>
      </NuxtLink>

      <NuxtLink to="/catalogue" 
        class="text-center hidden md:block px-3 py-2 rounded transition-all duration-300"
        :class="{ 'bg-[#e09698] px-4 py-3': route.path === '/catalogue' }"
        @mouseover="hover = '/catalogue'"
        @mouseleave="hover = null">
        <span :class="{ 'text-lg': hover === '/catalogue' }">Produits et Services</span>
      </NuxtLink>

      <!-- Logo centré -->
      <div class="flex justify-center col-span-3 md:col-span-1">
        <img src="/images/logo.webp" alt="Logo Mimie Brindille" class="h-[80px]" />
      </div>

      <!-- Liens de droite -->
      <NuxtLink to="/about" 
        class="text-center hidden md:block px-3 py-2 rounded transition-all duration-300"
        :class="{ 'bg-[#e09698] px-4 py-3': route.path === '/about' }"
        @mouseover="hover = '/about'"
        @mouseleave="hover = null">
        <span :class="{ 'text-lg': hover === '/about' }">À propos</span>
      </NuxtLink>

      <NuxtLink to="/contact" 
        class="text-center hidden md:block px-3 py-2 rounded transition-all duration-300"
        :class="{ 'bg-[#e09698] px-4 py-3': route.path === '/contact' }"
        @mouseover="hover = '/contact'"
        @mouseleave="hover = null">
        <span :class="{ 'text-lg': hover === '/contact' }">Contact</span>
      </NuxtLink>

      <!-- Icône du menu burger -->
      <button @click="toggleMenu" class="md:hidden absolute right-4 top-3 z-30">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </nav>

    <!-- Image décorative en dessous de la navbar -->
    <div class="relative">
      <div class="absolute top-[-25px] left-0 w-full h-[65px] bg-cover bg-center bg-no-repeat z-10"
           style="background-image: url('/images/fleurs-navbar.webp');"></div>
    </div>

    <!-- Menu coulissant -->
    <div class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
         v-if="menuOpen"
         @click="toggleMenu">
    </div>

    <div class="fixed top-0 right-0 w-64 h-full bg-[#CB8587] shadow-lg z-50 transform transition-transform duration-300"
         :class="menuOpen ? 'translate-x-0' : 'translate-x-full'">
      <button @click="toggleMenu" class="absolute top-4 right-4 text-white">
        ✖
      </button>
      <ul class="mt-16 text-white text-lg space-y-4 p-6">
        <li>
          <NuxtLink to="/" class="block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#e09698]" @click="toggleMenu">
            Accueil
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/catalogue" class="block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#e09698]" @click="toggleMenu">
            Produits et Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#e09698]" @click="toggleMenu">
            À propos
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#e09698]" @click="toggleMenu">
            Contact
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const hover = ref(null);
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
