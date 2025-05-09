<template>
  <div class="container mx-auto py-10 px-4">
    <!-- SECTION HERO : Présentation mimie -->
    <div
      class="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden mb-12"
    >
      <!-- Texte de présentation (colonne gauche sur desktop) -->
      <div class="p-8 flex flex-col justify-center">
        <!-- Titre principal -->
        <h1
          class="helium text-2xl sm:text-3xl md:text-5xl text-[#CB8587] leading-tight mb-4"
        >
          l'univers de Mimie Brindille
        </h1>

        <!-- Premier paragraphe : présentation générale -->
        <p class="louis text-lg mb-4">
          Bienvenue chez Mimie Brindille, fleuriste passionnée à Pont-à-Celles.
          Depuis 2 ans , je crée des compositions florales délicates et
          personnalisées pour accompagner vos moments de vie, petits et grands.
        </p>

        <!-- Deuxième paragraphe : philosophie et valeurs -->
        <p class="louis text-lg">
          Dans ma boutique, la nature s’exprime avec créativité. Chaque fleur
          est choisie avec soin, en privilégiant la fraîcheur et la qualité.
          Chaque bouquet est pensé comme une création unique, façonnée avec
          amour, sensibilité et souci du détail.
        </p>
      </div>

      <!-- Image illustrative (colonne droite sur desktop) -->
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
      La boutique
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
      <!-- Un léger overlay blanc pour adoucir le fond/motif -->
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

    <!-- histoire -->
    <div class="relative mb-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <!-- Illustration à gauche -->
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
        <!-- Texte à droite avec fond blanc et ombre -->
        <div class="bg-white p-8 rounded-lg shadow-lg relative lg:-ml-16 z-10">
          <h3 class="text-2xl font-semibold text-[#CB8587] mb-4">
            Mon histoire
          </h3>
          <p class="text-lg mb-3">
            C’est l’amour des fleurs et le respect du rythme de la nature qui
            ont donné naissance à la boutique. Depuis, chaque jour est une
            nouvelle occasion de créer des compositions florales empreintes de
            douceur, d’élégance et d’émotion. Inspirée par les saisons et les
            envies de chacun, chaque création raconte une histoire unique.
          </p>
          <p class="text-lg">
            Aujourd’hui, Mimie Brindille est un espace d’inspiration et de
            générosité, où chaque bouquet porte un message. Fière de mes racines
            locales, je m’attache à fleurir le quotidien de ma communauté, avec
            authenticité et bienveillance, un bouquet à la fois.
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
