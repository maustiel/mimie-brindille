<template>
  <div>
    <!-- Bannière Contact -->
    <div class="container mx-auto pt-14 pb-4 px-0">
      <!-- Hero avec image de fond et overlay -->
      <div class="relative w-full h-64 mb-0 rounded-lg overflow-hidden">
        <NuxtImg
          src="/images/accueil.webp"
          alt="image de fond de la boutique mimie brindille"
          class="absolute inset-0 w-full h-full object-cover"
          width="1920"
          height="1080"
          format="webp"
          quality="70"
          loading="lazy"
        />
        <!-- Contenu centré de la bannière avec overlay sombre -->

        <div
          class="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-40"
        >
          <!-- Titre principal -->

          <h1
            class="helium text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-md text-center px-4"
            style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)"
          >
            Contactez-moi
          </h1>
          <p
            class="louis mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-white drop-shadow-md text-center px-6"
            style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 1)"
          >
            N’hésitez pas à me contacter par téléphone, par e-mail ou via le
            formulaire ci-dessous.
          </p>
        </div>
      </div>
    </div>
    <!-- SECTION CONTACT PRINCIPALE -->

    <div class="container mx-auto pt-4 pb-10 px-4">
      <!-- Grille à deux colonnes : gauche = infos, droite = formulaire -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <!-- Gauche -->
        <div class="space-y-8">
          <!-- Cartes de contact -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Téléphone -->
            <div
              class="bg-[#E09698] p-6 rounded-lg shadow-lg flex flex-col items-center text-white"
            >
              <img
                src="/icons/phone.svg"
                alt="Icône Téléphone"
                class="w-10 h-10 mb-4"
              />
              <h2 class="text-xl font-semibold mb-2">Téléphone</h2>
              <a href="tel:+32492395590" class="hover:underline"
                >0492 39 55 90</a
              >
            </div>
            <!-- E-mail -->
            <div
              class="bg-[#E09698] p-6 rounded-lg shadow-lg flex flex-col items-center text-white"
            >
              <img
                src="/icons/mail.svg"
                alt="Icône E-mail"
                class="w-10 h-10 mb-4"
              />
              <h2 class="text-xl font-semibold mb-2">E-mail</h2>
              <a
                href="mailto:Mimie.Brindille@hotmail.com"
                class="hover:underline"
                >Mimie.Brindille@hotmail.com</a
              >
            </div>
            <!-- Adresse -->
            <div
              class="bg-[#E09698] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-white"
            >
              <img
                src="/icons/map-pin.svg"
                alt="Icône Adresse"
                class="w-10 h-10 mb-4"
              />
              <h2 class="text-xl font-semibold mb-2">Adresse</h2>
              <p class="text-center">
                Pl. de Liberchies 15<br />
                6238 Pont-à-Celles, Belgique
              </p>
            </div>
            <!-- Horaires -->
            <div
              class="bg-[#E09698] p-6 rounded-lg shadow-lg flex flex-col items-center text-white"
            >
              <img
                src="/icons/clock.svg"
                alt="Icône Horaires"
                class="w-10 h-10 mb-4"
              />
              <h2 class="text-xl font-semibold mb-2">Horaires</h2>
              <ul class="self-stretch list-disc pl-5 space-y-1 text-left">
                <li>Lun-Ven : 9h00 – 18h00</li>
                <li>Mercredi : Fermé</li>
                <li>Samedi : 9h00 – 17h00</li>
                <li>Dimanche : 9h00 – 12h30</li>
              </ul>
            </div>
          </div>

          <!-- Google Maps -->
          <div class="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.1195703749963!2d4.418560075915838!3d50.51334198283429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c22d84a5202c3b%3A0x8853757be974d28c!2sMimie%20Brindille!5e0!3m2!1sen!2sbe!4v1738593263252!5m2!1sen!2sbe"
              class="w-full h-full border-0"
              allowfullscreen
              loading="lazy"
              title="Carte interactive google maps indiquant l'emplacement de la boutique Mimie Brindille à Pont-à-Celles"
            ></iframe>
          </div>
        </div>

        <!-- Droite : Formulaire de contact -->
        <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
          <h2 class="text-3xl font-bold text-[#CB8587] mb-12 text-center">
            Envoyez-moi un message
          </h2>
          <form
            action="https://formspree.io/f/xnnddwvq"
            method="POST"
            class="flex flex-col flex-grow justify-between space-y-6"
          >
            <!-- Prénom -->
            <div>
              <label
                for="firstName"
                class="text-xl font-semibold text-[#CB8587] mb-4"
                >Prénom</label
              >
              <input
                id="firstName"
                name="firstName"
                type="text"
                class="block w-full mt-1 p-2 rounded-lg border-gray-300 shadow-sm focus:ring-[#CB8587] focus:border-[#CB8587]"
                placeholder="Votre prénom"
              />
            </div>

            <!-- Nom -->
            <div>
              <label
                for="lastName"
                class="text-xl font-semibold text-[#CB8587] mb-4"
                >Nom</label
              >
              <input
                id="lastName"
                name="lastName"
                type="text"
                class="block w-full mt-1 p-2 rounded-lg border-gray-300 shadow-sm focus:ring-[#CB8587] focus:border-[#CB8587]"
                placeholder="Votre nom"
              />
            </div>

            <!-- E-mail -->
            <div>
              <label
                for="email"
                class="text-xl font-semibold text-[#CB8587] mb-4"
                >E-mail</label
              >
              <input
                id="email"
                name="email"
                type="email"
                class="block w-full mt-1 p-2 rounded-lg border-gray-300 shadow-sm focus:ring-[#CB8587] focus:border-[#CB8587]"
                placeholder="Votre e-mail"
              />
            </div>

            <!-- Message -->
            <div class="flex-1">
              <label
                for="message"
                class="text-xl font-semibold text-[#CB8587] mb-4"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                rows="4"
                class="block w-full mt-1 p-2 rounded-lg border-gray-300 shadow-sm focus:ring-[#CB8587] focus:border-[#CB8587] h-full"
                placeholder="Votre message…"
              ></textarea>
            </div>

            <!-- Bouton -->
            <button
              type="submit"
              class="bg-[#CB8587] text-white px-4 py-2 rounded-lg hover:bg-[#b06b6d] transition w-full text-lg"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

      <!-- Accès et transport -->
      <div class="py-10 px-4">
        <!-- Titre principal centré -->

        <h2 class="text-3xl font-bold text-[#CB8587] mb-6 text-center">
          Accès et transport
        </h2>
        <!-- Deux blocs côte à côte en desktop, en colonne sur mobile -->
        <div class="flex flex-col md:flex-row justify-between gap-6">
          <!-- Bloc : Accès en voiture -->
          <div class="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
            <h3 class="text-xl font-semibold text-[#CB8587] mb-4">
              Accès en voiture
            </h3>
            <ul class="louis list-disc pl-5 space-y-2">
              <li>
                Le magasin se trouve à <strong>10 minutes</strong> du centre de
                Pont-à-Celles en voiture.
              </li>
              <li>
                Il est accessible en <strong>13 minutes</strong> depuis
                Charleroi via la <strong>E420</strong>.
              </li>
              <li>Un parking public est disponible à proximité immédiate.</li>
            </ul>
          </div>

          <!-- Bloc : Accès en transport en commun -->
          <div class="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
            <h3 class="text-xl font-semibold text-[#CB8587] mb-4">
              Accès en transport en commun
            </h3>
            <ul class="louis list-disc pl-5 space-y-2">
              <li>
                En train, gare de Pont-à-Celles à
                <strong>10 minutes en voiture</strong>.
              </li>
              <li>
                En bus, lignes <strong>50, 64, 65</strong> arrêt Liberchies
                Église à <strong>1 min à pied</strong>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Suivez-Moi -->
  <div class="py-5 px-4">
    <h2 class="text-3xl font-bold text-[#CB8587] mb-4 text-center">
      Suivez-moi !
    </h2>
    <p class="louis text-lg mb-6 text-center">
      N’hésitez pas à me suivre sur les réseaux sociaux pour découvrir les
      dernières créations et les actus de la boutique.
    </p>
    <div class="flex justify-center space-x-6">
      <!-- Facebook -->
      <a
        href="https://www.facebook.com/people/Mimie-Brindille/100091998159115/"
        target="_blank"
        aria-label="Facebook"
        class="text-[#CB8587] hover:text-[#e09698] transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          class="w-8 h-8 fill-current"
        >
          <path
            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
          />
        </svg>
      </a>
      <!-- Instagram -->
      <a
        href="https://www.instagram.com/brindillemimie/"
        target="_blank"
        aria-label="Instagram"
        class="text-[#CB8587] hover:text-[#e09698] transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-8 h-8 fill-current"
        >
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title: "Contact - Mimie Brindille, Fleuriste à Pont-à-Celles",
  meta: [
    {
      name: "description",
      content:
        "Besoin d’un bouquet personnalisé ou d’un renseignement ? Contactez-moi facilement par téléphone, mail ou via le formulaire. Je vous réponds avec plaisir depuis ma boutique à Pont-à-Celles.",
    },
    {
      property: "og:title",
      content: "Contact - Mimie Brindille, Fleuriste à Pont-à-Celles",
    },
    {
      property: "og:description",
      content:
        "Prenez contact avec Mimie Brindille pour toute demande florale, commande personnalisée ou projet événementiel.",
    },
    {
      property: "og:image",
      content: "https://mimiebrindille.be/images/catalogue/events/event3.webp", // à adapter avec une image réelle
    },
    {
      property: "og:url",
      content: "https://mimiebrindille.be/contact",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://mimiebrindille.be/contact",
    },
  ],
});
</script>

<style scoped>
/* Ajoute un espacement vertical entre les éléments de la grille sur petits écrans */
@media (max-width: 640px) {
  .grid-cols-1 > div {
    margin-bottom: 1rem;
  }
}
</style>
