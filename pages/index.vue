<template>
  <!-- HERO -->
  <section class="relative">
    <!-- image de fond plein écran / plein viewport -->
    <div
      class="w-full h-[80vh] sm:h-screen bg-cover bg-center"
      style="background-image: url('/images/accueil.webp')"
    >
      <!-- overlay sombre -->
      <div class="absolute inset-0 bg-black/50"></div>
      <!-- contenu centré -->
      <div
        class="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-4"
      >
        <h1
          class="helium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
        >
          Bienvenue chez Mimie Brindille
        </h1>
        <p
          class="louis mt-4 text-base sm:text-lg md:text-xl text-white max-w-lg"
        >
          Votre artisan fleuriste à Pont-à-Celles.
        </p>
        <NuxtLink
          to="/catalogue"
          class="mt-8 inline-block bg-[#CB8587] hover:bg-[#b06b6d] text-white font-medium text-lg px-6 py-3 rounded-lg shadow-lg transition"
        >
          Découvrez nos Produits et Services
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- POURQUOI NOUS CHOISIR -->
  <section class="py-12 bg-[#f5edf0] px-4 sm:px-6">
    <div class="container mx-auto text-center">
      <h2 class="text-2xl sm:text-3xl font-bold text-[#CB8587] mb-8">
        Pourquoi choisir Mimie Brindille ?
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-xl sm:text-2xl font-bold text-[#CB8587]">
            Créations uniques
          </h3>
          <p class="mt-2 text-sm sm:text-base text-gray-600">
            Chaque bouquet est conçu avec soin pour un rendu unique et
            personnalisé.
          </p>
        </div>
        <div class="p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-xl sm:text-2xl font-bold text-[#CB8587]">
            Produits locaux
          </h3>
          <p class="mt-2 text-sm sm:text-base text-gray-600">
            Nous travaillons avec des fleurs fraîches et locales pour garantir
            la qualité.
          </p>
        </div>
        <div class="p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-xl sm:text-2xl font-bold text-[#CB8587]">
            Livraison rapide
          </h3>
          <p class="mt-2 text-sm sm:text-base text-gray-600">
            Faites livrer vos bouquets directement chez vous ou à vos proches.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- GALERIE -->
  <section class="py-12 px-4 sm:px-6">
    <div class="container mx-auto text-center">
      <h2 class="text-2xl sm:text-3xl font-bold text-[#CB8587] mb-8">
        Découvrez nos réalisations
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <img
          src="/images/bouquet1.webp"
          alt="Bouquet 1"
          loading="lazy"
          class="rounded-lg shadow-md hover:scale-105 transition"
        />
        <img
          src="/images/bouquet2.webp"
          alt="Bouquet 2"
          loading="lazy"
          class="rounded-lg shadow-md hover:scale-105 transition"
        />
        <img
          src="/images/bouquet3.webp"
          alt="Bouquet 3"
          loading="lazy"
          class="rounded-lg shadow-md hover:scale-105 transition"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// pas de JS supplémentaire nécessaire ici
</script>

<style scoped>
/* pour s'assurer que le background-cover fonctionne bien */
.bg-cover {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
