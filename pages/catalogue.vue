<template>
  <div>
    <!-- BANNIÈRE PRODUITS ET SERVICES -->
    <div class="container mx-auto pt-14 pb-4 px-0">
      <!-- Hero avec image de fond fixe + overlay noir transparent -->
      <div class="relative w-full h-64 mb-0 rounded-lg overflow-hidden">
        <!-- Image de fond -->
        <NuxtImg
          src="/images/fonds/fond2.webp"
          alt="image de fond de la boutique mimie brindille"
          class="absolute inset-0 w-full h-full object-cover"
          width="1920"
          height="1080"
          format="webp"
          quality="70"
          loading="lazy"
        />
        <!-- Overlay avec texte centré -->
        <div
          class="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-40"
        >
          <!-- Titre principal -->
          <h1
            class="helium text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-md text-center px-4"
            style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)"
          >
            Produits et Services
          </h1>
          <!-- Sous-titre ou slogan -->
          <p
            class="louis mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-white drop-shadow-md text-center px-6"
            style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 1)"
          >
            Des créations florales pour toutes les occasions, faites avec
            passion et toujours fraîches.
          </p>
        </div>
      </div>
    </div>
  </div>

  <br />

  <!-- GRILLE DE PRODUITS / SERVICES -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Chaque item correspond à une carte cliquable du catalogue -->
    <div
      v-for="(item, index) in catalogue"
      :key="index"
      class="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
      @click="openGallery(item)"
    >
      <!-- Image du produit / service -->
      <img
        :src="item.image"
        :alt="item.name"
        class="rounded-xl mb-4 w-full h-96 object-cover"
      />
      <!-- Nom du produit -->
      <h2 class="louis text-lg font-semibold">{{ item.name }}</h2>
      <!-- Description du produit -->
      <p class=" louis text-sm text-[#CB8587]">{{ item.description }}</p>
    </div>
  </div>

  <!-- APPEL À L’ACTION EN BAS DE PAGE -->
  <div class="mt-10 text-center">
    <!-- Message d’invitation -->
    <p class="text-lg font-semibold text-[#CB8587]">
      Venez découvrir mes réalisations en boutique ou contactez-moi pour une
      demande personnalisée ! 🌼
    </p>
    <!-- Bouton vers la page de contact -->
    <NuxtLink
      to="/contact"
      class="mt-4 inline-block bg-[#CB8587] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#b46b6d] transition duration-300"
    >
      Contactez-moi
    </NuxtLink>
  </div>

  <!-- MODALE GALERIE -->
  <div
    v-if="gallery.visible"
    @click.self="gallery.visible = false"
    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-auto"
  >
    <!-- Conteneur blanc de la modale (avec scroll si le contenu dépasse) -->
    <div
      ref="modalContent"
      class="bg-white rounded-lg shadow-xl w-full max-w-5xl p-6 relative h-[90vh] sm:max-h-[calc(100vh-2rem)] overflow-y-auto"
    >
      <!-- Bouton de fermeture (croix en haut à droite), désormais en fixed -->
      <button
        @click="gallery.visible = false"
        class="fixed top-4 right-4 w-12 h-12 bg-[#CB8587] rounded-full flex items-center justify-center text-white hover:bg-[#e09698] transition-shadow shadow-lg z-50"
        aria-label="Fermer la galerie"
      >
        <span class="text-4xl leading-none transform -translate-y-1">×</span>
      </button>

      <!-- Grille responsive contenant les images -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img
          v-for="(src, idx) in gallery.images"
          :key="idx"
          :src="src"
          class="rounded-md object-cover w-full h-48"
          :alt="`Image ${idx + 1}`"
        />
      </div>

      <!-- Bouton pour revenir en haut de la gallerie modale -->
      <div class="flex justify-center w-full mt-6">
        <button
          @click="scrollToModalTop"
          class="bg-[#CB8587] text-white px-6 py-2 rounded-lg hover:bg-[#e09698] transition"
        >
          Retour en haut
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  title: "Produits & Services - Mimie Brindille",
  meta: [
    {
      name: "description",
      content: "Je vous propose des fleurs coupées, des compositions florales, des plantes d’intérieur et des décorations florales, le tout avec un service personnalisé depuis ma boutique à Pont-à-Celles.",
    },
    { property: "og:title", content: "Produits & Services - Mimie Brindille" },
    {
      property: "og:description",
      content: "Des bouquets sur mesure, des plantes et des décorations florales pour chaque occasion. Visitez la boutique à Pont-à-Celles.",
    },
    {
      property: "og:image",
      content: "https://mimiebrindille.be/images/catalogue/bouquet/bouquet12.webp", // remplace avec l’URL de ton image réelle
    },
    { property: "og:url", content: "https://mimiebrindille.be/catalogue" },
    { name: "robots", content: "index, follow" }
  ],
  link: [
    { rel: "canonical", href: "https://mimiebrindille.be/catalogue" }
  ]
})

import { ref } from "vue";
// ❶ ref vers le conteneur scrollable
const modalContent = ref(null);

// ❷ nouvelle fonction qui remonte ce conteneur
function scrollToModalTop() {
  if (modalContent.value) {
    modalContent.value.scrollTo({ top: 0, behavior: "smooth" });
  }
}
// 1) Le catalogue enrichi d'un tableau gallery
const catalogue = [
  {
    name: "Bouquet de fleurs",
    description:
      "Des fleurs choisies avec soin, assemblées avec amour, pour un bouquet plein de vie.",
    image: "/images/catalogue/bouquet/bouquet17.webp",
    gallery: [
      "/images/catalogue/bouquet/bouquet1.webp",
      "/images/catalogue/bouquet/bouquet2.webp",
      "/images/catalogue/bouquet/bouquet3.webp",
      "/images/catalogue/bouquet/bouquet4.webp",
      "/images/catalogue/bouquet/bouquet5.webp",
      "/images/catalogue/bouquet/bouquet6.webp",
      "/images/catalogue/bouquet/bouquet7.webp",
      "/images/catalogue/bouquet/bouquet8.webp",
      "/images/catalogue/bouquet/bouquet9.webp",
      "/images/catalogue/bouquet/bouquet10.webp",
      "/images/catalogue/bouquet/bouquet11.webp",
      "/images/catalogue/bouquet/bouquet12.webp",
      "/images/catalogue/bouquet/bouquet13.webp",
      "/images/catalogue/bouquet/bouquet14.webp",
      "/images/catalogue/bouquet/bouquet15.webp",
      "/images/catalogue/bouquet/bouquet16.webp",
      "/images/catalogue/bouquet/bouquet17.webp",
      "/images/catalogue/bouquet/bouquet18.webp",
      "/images/catalogue/bouquet/bouquet19.webp",
      "/images/catalogue/bouquet/bouquet20.webp",
      "/images/catalogue/bouquet/bouquet21.webp",
    ],
  },
  {
    name: "Composition florale",
    description:
      "Une composition parfaite pour faire plaisir en toute occasion.",
    image: "/images/catalogue/compo/compo4.webp",
    gallery: [
      "/images/catalogue/compo/compo1.webp",
      "/images/catalogue/compo/compo2.webp",
      "/images/catalogue/compo/compo3.webp",
      "/images/catalogue/compo/compo4.webp",
      "/images/catalogue/compo/compo5.webp",
      "/images/catalogue/compo/compo6.webp",
      "/images/catalogue/compo/compo7.webp",
      "/images/catalogue/compo/compo8.webp",
      "/images/catalogue/compo/compo9.webp",
      "/images/catalogue/compo/compo10.webp",
      "/images/catalogue/compo/compo11.webp",
      "/images/catalogue/compo/compo12.webp",
      "/images/catalogue/compo/compo13.webp",
      "/images/catalogue/compo/compo14.webp",
      "/images/catalogue/compo/compo15.webp",
      "/images/catalogue/compo/compo16.webp",
      "/images/catalogue/compo/compo17.webp",
      "/images/catalogue/compo/compo18.webp",
      "/images/catalogue/compo/compo19.webp",
      "/images/catalogue/compo/compo20.webp",
      "/images/catalogue/compo/compo21.webp",
      "/images/catalogue/compo/compo22.webp",
      "/images/catalogue/compo/compo23.webp",
      "/images/catalogue/compo/compo24.webp",
      "/images/catalogue/compo/compo25.webp",
      "/images/catalogue/compo/compo26.webp",
      "/images/catalogue/compo/compo27.webp",
      "/images/catalogue/compo/compo28.webp",
      "/images/catalogue/compo/compo29.webp",
      "/images/catalogue/compo/compo30.webp",
      "/images/catalogue/compo/compo31.webp",
      "/images/catalogue/compo/compo32.webp",
      "/images/catalogue/compo/compo33.webp",
      "/images/catalogue/compo/compo34.webp",
      "/images/catalogue/compo/compo35.webp",
      "/images/catalogue/compo/compo36.webp",
      "/images/catalogue/compo/compo37.webp",
      "/images/catalogue/compo/compo38.webp",
      "/images/catalogue/compo/compo39.webp",
      "/images/catalogue/compo/compo40.webp",
      "/images/catalogue/compo/compo41.webp",
      "/images/catalogue/compo/compo42.webp",
    ],
  },
  {
    name: "Bouquets personnalisés",
    description:
      "Composez votre bouquet sur mesure en choisissant parmi nos fleurs en vrac.",
    image: "/images/catalogue/vrac/vrac8.webp",
    gallery: [
      "/images/catalogue/vrac/vrac1.webp",
      "/images/catalogue/vrac/vrac2.webp",
      "/images/catalogue/vrac/vrac3.webp",
      "/images/catalogue/vrac/vrac4.webp",
      "/images/catalogue/vrac/vrac5.webp",
      "/images/catalogue/vrac/vrac6.webp",
      "/images/catalogue/vrac/vrac7.webp",
      "/images/catalogue/vrac/vrac8.webp",
      "/images/catalogue/vrac/vrac9.webp",
    ],
  },
  {
    name: "Plantes d’intérieur & d’extérieur",
    description: "Apportez une touche de nature chez vous.",
    image: "/images/catalogue/plante/plante1.webp",
    gallery: [
      "/images/catalogue/plante/plante1.webp",
      "/images/catalogue/plante/plante2.webp",
      "/images/catalogue/plante/plante3.webp",
      "/images/catalogue/plante/plante4.webp",
      "/images/catalogue/plante/plante5.webp",
      "/images/catalogue/plante/plante6.webp",
      "/images/catalogue/plante/plante7.webp",
      "/images/catalogue/plante/plante8.webp",
      "/images/catalogue/plante/plante9.webp",
      "/images/catalogue/plante/plante10.webp",
      "/images/catalogue/plante/plante11.webp",
      "/images/catalogue/plante/plante12.webp",
      "/images/catalogue/plante/plante13.webp",
    ],
  },
  {
    name: "Décorations florales pour événements",
    description:
      "Mariages, baptêmes, réceptions… fleurissez vos moments précieux",
    image: "/images/catalogue/events/event3.webp",
    gallery: [
      "/images/catalogue/events/event1.webp",
      "/images/catalogue/events/event2.webp",
      "/images/catalogue/events/event3.webp",
      "/images/catalogue/events/event4.webp",
      "/images/catalogue/events/event5.webp",
      "/images/catalogue/events/event6.webp",
      "/images/catalogue/events/event7.webp",
      "/images/catalogue/events/event8.webp",
      "/images/catalogue/events/event9.webp",
      "/images/catalogue/events/event10.webp",
      "/images/catalogue/events/event11.webp",
      "/images/catalogue/events/event12.webp",
      "/images/catalogue/events/event13.webp",
      "/images/catalogue/events/event14.webp",
      "/images/catalogue/events/event15.webp",
      "/images/catalogue/events/event16.webp",
      "/images/catalogue/events/event17.webp",
      "/images/catalogue/events/event18.webp",
      "/images/catalogue/events/event19.webp",
      "/images/catalogue/events/event20.webp",
      "/images/catalogue/events/event21.webp",
      "/images/catalogue/events/event22.webp",
      "/images/catalogue/events/event23.webp",
      "/images/catalogue/events/event24.webp",
      "/images/catalogue/events/event25.webp",
      "/images/catalogue/events/event26.webp",
      "/images/catalogue/events/event27.webp",
      "/images/catalogue/events/event28.webp",
      "/images/catalogue/events/event29.webp",
      "/images/catalogue/events/event30.webp",
      "/images/catalogue/events/event31.webp",
      "/images/catalogue/events/event32.webp",
      "/images/catalogue/events/event33.webp",
      "/images/catalogue/events/event34.webp",
      "/images/catalogue/events/event35.webp",
    ],
  },
  {
    name: "Compositions funéraires",
    description: "Pour rendre un dernier hommage avec élégance.",
    image: "/images/catalogue/deuil/deuil7.webp",
    gallery: [
      "/images/catalogue/deuil/deuil1.webp",
      "/images/catalogue/deuil/deuil2.webp",
      "/images/catalogue/deuil/deuil3.webp",
      "/images/catalogue/deuil/deuil4.webp",
      "/images/catalogue/deuil/deuil5.webp",
      "/images/catalogue/deuil/deuil6.webp",
      "/images/catalogue/deuil/deuil7.webp",
      "/images/catalogue/deuil/deuil8.webp",
      "/images/catalogue/deuil/deuil9.webp",
    ],
  },
];

// 2) État de la modal galerie
const gallery = ref({
  visible: false,
  images: [],
});

// 3) Ouvre la modal avec toutes les images de l'item
function openGallery(item) {
  gallery.value.images = item.gallery;
  gallery.value.visible = true;
}
</script>

<style scoped></style>
