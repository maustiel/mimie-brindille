<template>
  <div class="container mx-auto py-10">
    <h1 class="text-3xl font-bold text-[#CB8587] mb-5">Produits et Services</h1>
    <p class="text-lg mb-5">
      Chez Mimie Brindille, nous vous proposons une large gamme de créations florales pour chaque occasion. Que ce soit pour un mariage, un anniversaire, un événement spécial, ou simplement pour faire plaisir, nos compositions sont réalisées avec passion et fraîcheur.
    </p>
<br>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in catalogue"
        :key="index"
        class="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition-transform transform hover:scale-105"
      >
        <img 
          :src="item.image" 
          :alt="item.name" 
          class="rounded-xl mb-4 w-full h-96 object-cover"  
        />
        <h2 class="text-lg font-semibold">{{ item.name }}</h2>
        <p class="text-sm text-[#CB8587]">{{ item.description }}</p>
      </div>
    </div>

    <!-- Texte et bouton en bas de la page -->
    <div class="mt-10 text-center">
      <p class="text-lg font-semibold text-[#CB8587]">
        Venez découvrir nos réalisations en boutique ou contactez-nous pour une demande personnalisée ! 🌼
      </p>
      <NuxtLink 
        to="/contact"
        class="mt-4 inline-block bg-[#CB8587] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#b46b6d] transition duration-300"
      >
        Contactez-nous
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const catalogue = [
  {
    name: "Bouquet de roses",
    description: "Un bouquet classique et élégant.",
    image: "/images/bouquet1.jpg",
  },
  {
    name: "Composition florale",
    description: "Une composition parfaite pour les grandes occasions.",
    image: "/images/bouquet2.jpg",
  },
  {
    name: "Bouquets personnalisés",
    description: "Des créations uniques selon vos envies.",
    image: "/images/bouquet3.jpg",
  },
  {
    name: "Plantes d’intérieur & d’extérieur",
    description: "Apportez une touche de nature chez vous.",
    image: "/images/bouquet4.jpg",
  },
  {
    name: "Décorations florales pour événements",
    description: "Mariages, baptêmes, réceptions…",
    image: "/images/bouquet5.jpg",
  },
  {
    name: "Compositions funéraires",
    description: "Pour rendre un dernier hommage avec élégance.",
    image: "/images/bouquet6.jpg",
  },
];
</script>
