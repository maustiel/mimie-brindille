<template>
  <div class="relative mt-20">
    <!-- Bloc contenant une image décorative en fond (fleurs au-dessus du footer) -->
    <div class="relative overflow-visible"></div>
    <!-- Image positionnée en haut du footer pour une transition décorative -->
    <div
      class="absolute top-[-60px] left-0 w-full h-[95px] bg-cover bg-center bg-no-repeat"
      style="background-image: url('/images/fleurs-footer.webp')"
    ></div>

    <!-- CONTENU DU FOOTER -->

    <footer class="bg-[#CB8587] text-white py-8 relative z-10">
      <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left"
      >
        <!-- Logo -->
        <div class="flex items-center justify-center flex-col">
          <img
            src="/images/logo.webp"
            alt="Logo Mimie Brindille"
            class="h-40 w-40"
          />
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-lg font-semibold">Menu</h3>
          <ul class="mt-4 space-y-2">
            <li><NuxtLink to="/" class="hover:underline">Accueil</NuxtLink></li>
            <li>
              <NuxtLink to="/catalogue" class="hover:underline"
                >Produits et Services</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/about" class="hover:underline">À propos</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- barre en mobile uniquement -->
        <hr class="block md:hidden border-t border-white my-4 w-16 mx-auto" />

        <!-- Contact -->
        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold">Contact</h3>
          <ul class="mt-4 space-y-2">
            <li class="text-sm font-semibold">
              Pl. de Liberchies 15, 6238 Pont-à-Celles, Belgique
            </li>
            <li class="text-sm font-semibold">
              <a href="tel:+32492395590" class="hover:underline"
                >0492 39 55 90</a
              >
            </li>
            <li class="text-sm font-semibold">
              <a
                href="mailto:Mimie.Brindille@hotmail.com"
                class="hover:underline"
              >
                Mimie.Brindille@hotmail.com
              </a>
            </li>
          </ul>
        </div>

        <!-- barre en mobile uniquement -->
        <hr class="block md:hidden border-t border-white my-4 w-16 mx-auto" />

        <!-- Horaires -->
        <div class="flex flex-col items-center md:items-start pb-6">
          <h3 class="text-lg font-semibold">Horaires</h3>
          <ul class="mt-4 space-y-2">
            <li class="text-sm">Lun-Ven: 9h00 - 18h00</li>
            <li class="text-sm">Mardi & Mercredi: Fermé</li>
            <li class="text-sm">Samedi: 9h00 - 17h00</li>
            <li class="text-sm">Dimanche: 9h00 - 12h30</li>
          </ul>
        </div>
      </div>

      <!-- Réseaux sociaux -->
      <div class="flex justify-center space-x-4 mt-4 pb-4">
        <!-- facebook -->
        <a
          href="https://www.facebook.com/people/Mimie-Brindille/100091998159115/"
          aria-label="Facebook"
          target="_blank"
          class="text-white hover:text-[#EFDFDF]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            class="w-6 h-6 fill-current"
          >
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37
              1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
            />
          </svg>
        </a>
        <!-- instagram -->
        <a
          href="https://www.instagram.com/brindillemimie/"
          aria-label="Instagram"
          target="_blank"
          class="text-white hover:text-[#EFDFDF]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="h-6 w-6 fill-current"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9
              114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1
              0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7
              74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12
              26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8
              26.8-26.8 26.8 12 26.8 26.8zm76.1
              27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9
              0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1
              37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58
              34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9
              93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8
              0-184.8zM398.8 388c-7.8
              19.6-22.9 34.7-42.6 42.6-29.5
              11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7
              9-132.1c7.8-19.6 22.9-34.7 42.6-42.6
              29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6
              7.8 34.7 22.9 42.6 42.6
              11.7 29.5 9 99.5 9 132.1s2.7 102.7-9
              132.1z"
            />
          </svg>
        </a>
      </div>

      <!-- Copyright -->
      <div class="text-center mt-auto text-xs">
        <p>
          &copy; 2025 Mimie Brindille. Tous droits réservés. |
          <NuxtLink to="/politique-confidentialite" class="hover:underline">
            Politique de confidentialité
          </NuxtLink>
          |
          <NuxtLink to="/mentions-legales" class="hover:underline">
            Mentions légales
          </NuxtLink>
        </p>
      </div>
    </footer>
  </div>
</template>
