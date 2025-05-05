<template>
  <div class="container mx-auto py-10 px-4">
    <!-- Hero -->
    <div class="grid grid-cols-1 lg:grid-cols-2 bg-[#FDF0F2] rounded-lg overflow-hidden mb-12">
      <div class="p-8 flex flex-col justify-center">
        <h1 class="text-4xl font-bold text-[#CB8587] mb-4">À propos de Mimie Brindille</h1>
        <p class="text-lg mb-4">
          Bienvenue chez <strong>Mimie Brindille</strong>, votre fleuriste de confiance à Pont-à-Celles !
          Depuis [année], nous créons des compositions florales délicates et personnalisées pour chaque moment de la vie.
        </p>
        <p class="text-lg">
          Notre boutique est un lieu où la nature rencontre la créativité. Nous sélectionnons les fleurs les plus fraîches
          et les plus belles, en privilégiant des fournisseurs locaux et durables. Chez Mimie Brindille, chaque bouquet est
          une œuvre d’art, conçue avec amour, passion et attention aux détails.
        </p>
      </div>
      <div class="h-64 lg:h-auto">
        <img
          src="/images/mimie.webp"
          alt="Boutique Mimie Brindille"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Carousel classique -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-center text-[#CB8587] mb-6">Nos réalisations</h2>
      <div class="relative w-full max-w-3xl mx-auto overflow-hidden">
        <!-- Slides container -->
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(item, idx) in gallery"
            :key="idx"
            class="min-w-full flex-shrink-0 px-4"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              class="rounded-xl shadow-lg w-full h-80 object-cover"
            />
            <p class="mt-2 text-center text-[#CB8587]">{{ item.caption }}</p>
          </div>
        </div>

        <!-- Prev button -->
        <button
          @click="prev"
          class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow"
          aria-label="Précédent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#CB8587]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Next button -->
        <button
          @click="next"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow"
          aria-label="Suivant"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#CB8587]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Notre histoire -->
    <div class="relative mb-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <img
            src="/images/test.jpg"
            alt="Fleurs"
            class="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg relative lg:-ml-16 z-10">
          <h3 class="text-2xl font-semibold text-[#CB8587] mb-4">Notre histoire</h3>
          <p class="text-lg mb-3">
            L’histoire de notre boutique commence il y a plusieurs années, portée par la passion de la fleur et l’amour de
            la nature. Chaque jour, nous travaillons avec soin pour offrir des compositions uniques, inspirées par les
            saisons et les émotions.
          </p>
          <p class="text-lg">
            Aujourd’hui, Mimie Brindille est un lieu de création et de partage, où chaque bouquet raconte une histoire.
            Nous sommes fiers de notre héritage local et de contribuer au bien-être de notre communauté, un bouquet à la fois.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 5 images de ton carousel
const gallery = [
  { src: '/images/mimie.webp',  alt: 'Composition 1', caption: 'Delicate bouquet' },
  { src: '/images/mimie2.webp', alt: 'Composition 2', caption: 'Vibrant colors' },
  { src: '/images/mimie3.webp', alt: 'Composition 3', caption: 'Custom design' },
  { src: '/images/mimie.webp', alt: 'Composition 4', caption: 'Elegant arrangement' },
  { src: '/images/random.jpg', alt: 'Composition 5', caption: 'Floral art' },
]

const currentIndex = ref(0)

function prev() {
  currentIndex.value = (currentIndex.value - 1 + gallery.length) % gallery.length
}
function next() {
  currentIndex.value = (currentIndex.value + 1) % gallery.length
}
</script>

<style scoped>
/* Neutralise le décalage mobile */
@media (max-width: 1024px) {
  .lg\\:-ml-16 {
    margin-left: 0 !important;
  }
}
</style>
