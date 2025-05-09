<template>
  <div class="container mx-auto py-10 px-4">
    <!-- Hero -->
    <div
      class="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden mb-12"
    >
      <div class="p-8 flex flex-col justify-center">
        <h1 class="helium text-2xl sm:text-3xl md:text-5xl text-[#CB8587] leading-tight">
          l'univers de Mimie Brindille
        </h1>
        <p class=" louis text-lg mb-4">
          Bienvenue chez <strong>Mimie Brindille</strong>, votre fleuriste de
          confiance à Pont-à-Celles ! Depuis [année], nous créons des
          compositions florales délicates et personnalisées pour chaque moment
          de la vie.
        </p>
        <p class=" louis text-lg">
          Notre boutique est un lieu où la nature rencontre la créativité. Nous
          sélectionnons les fleurs les plus fraîches et les plus belles, en
          privilégiant des fournisseurs locaux et durables. Chez Mimie
          Brindille, chaque bouquet est une œuvre d’art, conçue avec amour,
          passion et attention aux détails.
        </p>
      </div>
      <div class="flex justify-center">
        <div
          class="w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square overflow-hidden rounded-lg shadow-lg"
        >
          <NuxtImg
            src="/images/autres/mimie10.webp"
            alt="entrée fleurie Boutique Mimie Brindille"
            class="w-full h-full object-cover"
            width="800"
            height="800"
            quality="70"
            format="webp"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- la boutic -->
    <h2 class="text-2xl sm:text-3xl font-bold text-[#CB8587] mb-8 text-center">
      la boutique
    </h2>
    <section class="relative py-16 mb-8 overflow-hidden">
      <!-- Image de fond -->
      <NuxtImg
        src="/images/fonds/fond1.webp"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover"
        width="1600"
        height="900"
        quality="70"
        format="webp"
        loading="lazy"
      />
      <!-- optionnel : un léger overlay sombre pour extraire le motif -->
      <div class="absolute inset-0 bg-white/20"></div>

      <div class="relative container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <!-- Card 1 -->
          <div
            class="relative aspect-[4/5] rounded-xl overflow-hidden mx-auto w-3/4 sm:w-full shadow-2xl"
          >
            <NuxtImg
              src="/images/autres/mimie4.webp"
              alt="devanture fleurie de la boutique mimie brindille"
              class="absolute inset-0 w-full h-full object-cover"
              width="800"
              height="1000"
              format="webp"
              loading="lazy"
            />

            <div
              class="absolute inset-0 flex items-center justify-center"
            ></div>
          </div>

          <!-- Card 2 -->
          <div
            class="relative aspect-[4/5] rounded-xl overflow-hidden mx-auto w-3/4 sm:w-full shadow-2xl"
          >
            <NuxtImg
              src="/images/autres/mimie7.webp"
              alt="intérieur de la boutique fleurie mimie brindille"
              class="absolute inset-0 w-full h-full object-cover"
              width="800"
              height="1000"
              format="webp"
              quality="70"
              loading="lazy"
            />

            <div
              class="absolute inset-0 flex items-center justify-center"
            ></div>
          </div>

          <!-- Card 3 -->
          <div
            class="relative aspect-[4/5] rounded-xl overflow-hidden mx-auto w-3/4 sm:w-full shadow-2xl"
          >
            <NuxtImg
              src="/images/autres/mimie9.webp"
              alt="intérieur de la boutique fleurie mimie brindille"
              class="absolute inset-0 w-full h-full object-cover"
              width="800"
              height="1000"
              format="webp"
              quality="70"
              loading="lazy"
            />

            <div
              class="absolute inset-0 flex items-center justify-center"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre histoire -->
    <div class="relative mb-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
         <NuxtImg
  src="/images/test.png"
  alt="illustration de Fleur"
  class="w-full h-auto object-cover rounded-lg"
  width="600"
  height="600"
  format="webp"
  quality="70"
  loading="lazy"
/>

        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg relative lg:-ml-16 z-10">
          <h3 class="text-2xl font-semibold text-[#CB8587] mb-4">
            Notre histoire
          </h3>
          <p class="text-lg mb-3">
            L’histoire de notre boutique commence il y a plusieurs années,
            portée par la passion de la fleur et l’amour de la nature. Chaque
            jour, nous travaillons avec soin pour offrir des compositions
            uniques, inspirées par les saisons et les émotions.
          </p>
          <p class="text-lg">
            Aujourd’hui, Mimie Brindille est un lieu de création et de partage,
            où chaque bouquet raconte une histoire. Nous sommes fiers de notre
            héritage local et de contribuer au bien-être de notre communauté, un
            bouquet à la fois.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Neutralise le décalage mobile */
@media (max-width: 1024px) {
  .lg\\:-ml-16 {
    margin-left: 0 !important;
  }
}
</style>
