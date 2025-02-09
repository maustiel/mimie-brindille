<template>
  <div>
    <!-- Hero Section -->
    <div 
      class="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" 
      style="background-image: url('/images/accueil.webp');"
    >
      <!-- Couche semi-transparente -->
      <div class="absolute inset-0 bg-black/50"></div>

      <!-- Contenu principal -->
      <div class="relative z-10">
        <h1 class="helium text-5xl text-white drop-shadow-md">Bienvenue chez Mimie Brindille</h1>
        <p class=" louis mt-4 text-xl text-white drop-shadow-md">Votre artisan fleuriste à Pont-à-Celles.</p>
        
        <!-- Section de Call to Action -->
        <div class="mt-8 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center">
          <NuxtLink 
            to="/catalogue" 
            class="mt-8 px-6 py-3 bg-[#CB8587] text-white font-medium text-lg rounded-lg shadow-lg hover:bg-[#b06b6d] transition mx-auto"
          >
            Découvrez nos Produits et Services
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Avantages Section -->
    <div class="py-12 text-center">
      <h2 class="text-3xl font-bold text-[#CB8587] mb-6">Pourquoi choisir Mimie Brindille ?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div class="p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-2xl font-bold text-[#CB8587]">Créations uniques</h3>
          <p class="mt-4 text-gray-600">Chaque bouquet est conçu avec soin pour un rendu unique et personnalisé.</p>
        </div>
        <div class="p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-2xl font-bold text-[#CB8587]">Produits locaux</h3>
          <p class="mt-4 text-gray-600">Nous travaillons avec des fleurs fraîches et locales pour garantir la qualité.</p>
        </div>
        <div class="p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-2xl font-bold text-[#CB8587]">Livraison rapide</h3>
          <p class="mt-4 text-gray-600">Faites livrer vos bouquets directement chez vous ou à vos proches.</p>
        </div>
      </div>
    </div>

    <!-- Galerie Section -->
    <div class="py-12 bg-white text-center">
      <h2 class="text-3xl font-bold text-[#CB8587] mb-6">Découvrez nos réalisations</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <img src="/public/images/bouquet1.webp" alt="Bouquet 1" loading="lazy" class="rounded-lg shadow-md hover:scale-105 transition">
        <img src="/public/images/bouquet2.webp" alt="Bouquet 2" loading="lazy"class="rounded-lg shadow-md hover:scale-105 transition">
        <img src="/public/images/bouquet3.webp" alt="Bouquet 3" loading="lazy"class="rounded-lg shadow-md hover:scale-105 transition">
      </div>
    </div>
  </div>
</template>
