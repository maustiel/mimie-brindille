<template>
  <nav class="bg-[#CB8587] text-white p-4 grid grid-cols-5 items-center">
    <!-- Liens de gauche -->
    <NuxtLink to="/" class="text-center">Accueil</NuxtLink>
    <NuxtLink to="/catalogue" class="text-center">Produits et Services</NuxtLink>

    <!-- Logo centré -->
    <div class="flex justify-center">
      <img src="/public/images/logo.png" alt=" logo Mimie Brindille" class="h-[100px]" />
    </div>

    <!-- Liens de droite -->
    <NuxtLink to="/about" class="text-center">À propos</NuxtLink>
    <NuxtLink to="/contact" class="text-center">Contact</NuxtLink>
  </nav>
</template>
