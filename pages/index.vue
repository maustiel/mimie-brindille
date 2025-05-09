<template>
  <!-- HERO -->
  <section class="relative">
    <div
      class="w-full h-[80vh] sm:h-screen bg-cover bg-center"
      style="background-image: url('/images/accueil.webp')"
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div
        class="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-4"
      >
        <h1
          class="helium text-4xl sm:text-5xl md:text-6xl text-white leading-snug"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)"
        >
          Bienvenue chez Mimie Brindille
        </h1>
        <p
          class="louis mt-4 text-lg sm:text-xl md:text-2xl text-white max-w-md mx-auto"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 1)"
        >
          Votre fleuriste à Pont-à-Celles.
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

  <!-- PRÉSENTATION CARRÉS AMÉLIORÉE -->
  <section class="py-12 px-4 sm:px-6">
    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4"
    >
      <!-- Cadre photo avec offset clair -->
      <div class="relative w-full md:w-1/2 max-w-md">
        <!-- fond offset derrière la photo -->
        <div
          class="absolute inset-0 bg-[#FDEEF0] rounded-lg translate-x-3 translate-y-3"
        ></div>
        <!-- photo -->
        <NuxtImg
          src="/images/autres/mimie8.webp"
          alt="Mimie Brindille dans sa boutique tenant une composition florale"
          class="relative z-10 rounded-lg shadow-lg w-full h-80 object-cover"
          quality="80"
          lazy
        />
      </div>

      <!-- Cadre texte avec offset brand pink -->
      <div class="relative w-full md:w-1/2 max-w-md">
        <!-- bloc principal -->
        <div
          class="relative z-10 bg-white rounded-lg p-6 shadow-lg flex flex-col justify-center"
        >
          <h2 class="text-2xl sm:text-3xl font-bold text-[#CB8587] mb-4">
            Qui est Mimie Brindille ?
          </h2>
          <p class="louis text-base text-gray-700 mb-6">
            Artisan fleuriste passionnée depuis plus de 10 ans, je mets tout mon
            cœur à sélectionner des fleurs de saison, toujours fraîches et de
            provenance locale. Chaque composition est pensée comme une œuvre
            unique, reflet de vos émotions et de l’occasion : mariage,
            anniversaire, remerciement ou simplement envie d’émerveiller.
          </p>
          <NuxtLink
            to="/about"
            class="inline-block bg-[#CB8587] hover:bg-[#b06b6d] text-white font-medium text-lg px-4 py-2 rounded-lg transition self-start"
          >
            En savoir plus
          </NuxtLink>
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
      <NuxtLink to="/catalogue" key="compo37">
        <NuxtImg
          src="/images/catalogue/compo/compo37.webp"
          alt="composition florale dans un vase pour pâques"
          class="rounded-lg shadow-md hover:scale-105 transition"
          width="400"
          height="400"
          quality="75"
          loading="lazy"
        />
      </NuxtLink>

      <NuxtLink to="/catalogue" key="compo17">
        <NuxtImg
          src="/images/catalogue/compo/compo17.webp"
          alt="composition florale sur une buche d'arbre"
          class="rounded-lg shadow-md hover:scale-105 transition"
          width="400"
          height="400"
          quality="75"
          loading="lazy"
        />
      </NuxtLink>

      <NuxtLink to="/catalogue" key="compo18">
        <NuxtImg
          src="/images/catalogue/compo/compo18.webp"
          alt="composition florale ronde dans les tons rouge"
          class="rounded-lg shadow-md hover:scale-105 transition"
          width="400"
          height="400"
          quality="75"
          loading="lazy"
        />
      </NuxtLink>

      <NuxtLink to="/catalogue" key="bouquet1">
        <NuxtImg
          src="/images/catalogue/bouquet/bouquet1.webp"
          alt="Bouquet de fleurs dans les tons rose et mauve"
          class="rounded-lg shadow-md hover:scale-105 transition"
          width="400"
          height="400"
          quality="75"
          loading="lazy"
        />
      </NuxtLink>

      <NuxtLink to="/catalogue" key="bouquet2">
        <NuxtImg
          src="/images/catalogue/bouquet/bouquet2.webp"
          alt="Bouquet de fleurs dans les tons orange"
          class="rounded-lg shadow-md hover:scale-105 transition"
          width="400"
          height="400"
          quality="75"
          loading="lazy"
        />
      </NuxtLink>

      <NuxtLink to="/catalogue" key="bouquet12">
        <NuxtImg
          src="/images/catalogue/bouquet/bouquet12.webp"
          alt="Bouquet de fleurs dans les tons rose et rouge"
          class="rounded-lg shadow-md hover:scale-105 transition"
          width="400"
          height="400"
          quality="75"
          loading="lazy"
        />
      </NuxtLink>
    </div>
  </div>
</section>

  <!-- SYMBOLIQUE DES FLEURS (responsive amélioré) -->
  <section class="relative py-12 bg-white text-center overflow-hidden">
    <!-- Fond transparent -->
    <div
      class="absolute inset-0 bg-cover bg-center opacity-20"
      style="background-image: url('/images/fonds/fond6.webp')"
    ></div>

    <div class="relative w-full mx-auto px-2 sm:px-4 lg:px-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-[#CB8587] mb-8">
        La symbolique des fleurs
      </h2>

      <div class="relative overflow-hidden -mx-2 sm:-mx-4">
        <!-- Slides -->
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentSymbolIndex * 100}%)` }"
        >
          <div
            v-for="(fleur, idx) in symbolique"
            :key="idx"
            class="w-full flex-shrink-0 px-2 sm:px-4"
          >
            <img
              :src="fleur.image"
              :alt="fleur.name"
              class="mx-auto w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full mb-4 shadow-lg"
            />
            <h3 class="text-xl font-semibold text-[#CB8587] mb-2">
              {{ fleur.name }}
            </h3>
            <p class="louis text-gray-700 mb-1">{{ fleur.meaning }}</p>
            <p class="louis text-gray-500 italic text-sm">
              {{ fleur.context }}
            </p>
          </div>
        </div>

        <!-- Flèche gauche -->
        <button
          @click="prevSymbol"
          class="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#CB8587] bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow"
          aria-label="Précédent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <!-- Flèche droite -->
        <button
          @click="nextSymbol"
          class="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#CB8587] bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow"
          aria-label="Suivant"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
  <!-- AVIS GOOGLE -->
  <section class="py-12 bg-[#CB8587] px-4 sm:px-6 relative overflow-hidden">
   <NuxtImg
  src="/images/fonds/petales.webp"
  alt="motif de fond pétales"
  loading="lazy"
  class="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
  width="1920"
  height="1080"
  quality="70"
/>

    <div class="relative container mx-auto">
      <h2
        class="text-2xl sm:text-3xl font-bold text-[#ffffff] text-center mb-8"
      >
        Ils parlent de nous
      </h2>

      <!-- 5 étoiles remplies -->

      <div class="flex justify-center space-x-1 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="w-6 h-6"
        >
          <path
            fill="#FFD43B"
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 
        21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 
        128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 
        11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="w-6 h-6"
        >
          <path
            fill="#FFD43B"
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 
        21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 
        128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 
        11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="w-6 h-6"
        >
          <path
            fill="#FFD43B"
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 
        21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 
        128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 
        11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="w-6 h-6"
        >
          <path
            fill="#FFD43B"
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 
        21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 
        128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 
        11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="w-6 h-6"
        >
          <path
            fill="#FFD43B"
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 
        21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 
        128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 
        11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
          />
        </svg>
      </div>

      <div class="max-w-4xl mx-auto space-y-12">
        <div
          v-for="(rev, i) in reviews"
          :key="i"
          class="flex items-center"
          :class="i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
        >
          <!-- Avatar -->
          <img
            :src="rev.avatar"
            alt="Photo de {{ rev.name }}"
            class="w-16 h-16 rounded-full border-2 border-white shadow-lg"
          />

          <!-- Bulle de texte -->
          <div class="bg-white p-6 rounded-lg shadow-lg mx-4 relative flex-1">
            <p class="text-gray-800">{{ rev.text }}</p>
            <p class="mt-4 font-semibold text-gray-900">— {{ rev.name }}</p>
          </div>
        </div>
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
        <!-- 1) Créations uniques -->
        <div
          class="p-6 bg-white shadow-md rounded-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/icons/fleur.png"
            alt="Icône fleur"
            class="w-10 h-10 mb-4"
          />
          <h3 class="text-xl sm:text-2xl font-bold text-[#CB8587]">
            Créations uniques
          </h3>
          <p class="mt-2 text-sm sm:text-base text-gray-600">
            Chaque bouquet est conçu avec soin pour un rendu unique et
            personnalisé.
          </p>
        </div>

        <!-- 2) Bouquet anti-gaspi tous les lundis -->
        <div
          class="p-6 bg-white shadow-md rounded-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
        >
          <!-- Pictogramme calendrier FontAwesome -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-10 h-10 mb-4"
          >
            <path
              fill="#CB8587"
              d="M152 24c0-13.3-10.7-24-24-24s-24 
                   10.7-24 24l0 40L64 64C28.7 64 0 92.7 
                   0 128l0 16 0 48L0 448c0 35.3 28.7 64 
                   64 64l320 0c35.3 0 64-28.7 64-64l0-256 
                   0-48 0-16c0-35.3-28.7-64-64-64l-40 
                   0 0-40c0-13.3-10.7-24-24-24s-24 
                   10.7-24 24l0 40L152 64l0-40zM48 
                   192l352 0 0 256c0 8.8-7.2 16-16 
                   16L64 464c-8.8 0-16-7.2-16-16l0-256z"
            />
          </svg>
          <h3 class="text-xl sm:text-2xl font-bold text-[#CB8587]">
            Bouquet anti-gaspi tous les lundis
          </h3>
          <p class="mt-2 text-sm sm:text-base text-gray-600">
            Profitez chaque lundi d’un bouquet composé des fins de stock à -30%.
          </p>
        </div>

        <!-- 3) Les fleurs dans la peau -->
        <div
          class="p-6 bg-white shadow-md rounded-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
        >
          <!-- Pictogramme cœur FontAwesome -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-10 h-10 mb-4"
          >
            <path
              fill="#CB8587"
              d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 
                   0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 
                   119.2-144C158.6 37.9 198.9 47 231 69.6c9 
                   6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 
                   13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 
                   0 0 0 0 0C313.1 47 353.4 37.9 392.8 
                   45.4C462 58.6 512 119.1 512 
                   189.5l0 3.3c0 41.9-17.4 81.9-48.1 
                   110.4L288.7 465.9l-2.5 2.3c-8.2 
                   7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 
                   145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 
                   0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 
                   101.5 48 142.1 48 189.5l0 3.3c0 
                   28.5 11.9 55.8 32.8 75.2L256 
                   430.7 431.2 268c20.9-19.4 32.8-46.7 
                   32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34
                   -6.5-69 5.4-92 31.2c0 0 0 0-
                   .1 .1s0 0-.1 .1l-17.8 20c-.3 
                   .4-.7 .7-1 1.1c-4.5 4.5-10.6 
                   7-16.9 7s-12.4-2.5-16.9-7z"
            />
          </svg>
          <h3 class="text-xl sm:text-2xl font-bold text-[#CB8587]">
            Les fleurs dans la peau
          </h3>
          <p class="mt-2 text-sm sm:text-base text-gray-600">
            Une passion des fleurs depuis toujours, venez découvrir mon univers
            créatif !
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import { ref } from "vue";

// Définis ici ta liste de fleurs et leurs symboliques
const symbolique = [
  {
    name: "Rose",
    image: "/images/fleurs/rose.webp",
    meaning: "Amour et passion",
    context: "Offerte pour déclarations ou anniversaires de rencontre.",
  },
  {
    name: "Lys",
    image: "/images/fleurs/lys.webp",
    meaning: "Pureté et élégance",
    context: "Idéal pour les mariages et cérémonies religieuses.",
  },
  {
    name: "Tournesol",
    image: "/images/fleurs/tournesol.webp",
    meaning: "Joie et optimisme",
    context: "Parfait pour encourager ou féliciter.",
  },
  {
    name: "Tulipe",
    image: "/images/fleurs/tulipe.webp",
    meaning: "Amour parfait, déclaration sincère",
    context:
      "Idéale pour la Saint‐Valentin ou une première déclaration d’amour.",
  },
  {
    name: "Pivoine",
    image: "/images/fleurs/pivoine.webp",
    meaning: "Prospérité, romance, bonheur conjugal",
    context:
      "Souvent offerte aux jeunes mariés ou pour un anniversaire de mariage.",
  },
  {
    name: "Dahlia",
    image: "/images/fleurs/dahlia.webp",
    meaning: "Élégance, dignité, engagement",
    context:
      "Parfait pour féliciter une réussite ou exprimer une profonde reconnaissance.",
  },
];

const currentSymbolIndex = ref(0);

function prevSymbol() {
  currentSymbolIndex.value =
    (currentSymbolIndex.value - 1 + symbolique.length) % symbolique.length;
}
function nextSymbol() {
  currentSymbolIndex.value = (currentSymbolIndex.value + 1) % symbolique.length;
}
// Exemples d'avis Google
const reviews = ref([
  {
    name: "Coraline",
    avatar: "/images/avatars/1.webp",
    text: "Une fleuriste plus qu’extraordinaire ! Nous l’avons choisie pour réaliser nos montages de fleurs pour notre mariage, et nous n’avons aucun regret. Un travail au top : les compositions étaient vraiment magnifiques, même mieux que ce que nous avions imaginé. Et pour sublimer tout ça, une gentillesse incroyable — nous avons été mis dans un petit cocon. Nous la recommandons à 100 % et nous continuerons à aller chez elle sans aucun doute. Merci pour tout, Mimie Brindille 😍",
  },
  {
    name: "Quentin",
    avatar: "/images/avatars/2.webp",
    text: "Une fleuriste qui aime son métier, qui aime donner des conseils et qui propose des produits de SUPER qualité. Ses fleurs tiennent toujours très longtemps, et le choix en magasin est toujours varié. Je lui fais toujours 100 % confiance :) Merci Mimie !",
  },
  {
    name: "Isabelle",
    avatar: "/images/avatars/3.webp",
    text: "Très chouette fleuriste. Des fleurs et plantes toujours très fraîches, un choix qui varie de jour en jour, et également de jolies décorations. Le tout à des prix très abordables. Une fleuriste vraiment à l’écoute du client, qui vous reçoit toujours avec le sourire. Alors allez lui rendre visite, je vous la conseille vivement !",
  },
]);
</script>

<style scoped>
/* Assure un bon cover pour tous les bg-cover */
.bg-cover {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
