<template>
  <div class="container mx-auto py-10 px-4">
    <!-- Hero avec image de fond et overlay -->
    <div class="relative w-full h-64 mb-8">
      <img
        src="/images/accueil.webp"
        alt="Contactez-nous"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div
        class="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-40"
      >
        <h1 class="text-4xl font-bold text-white">Contactez-nous</h1>
        <p class="text-lg text-white mt-2">
          N’hésitez pas à nous contacter par téléphone, par e-mail ou via le
          formulaire ci-dessous.
        </p>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-10">
      <!-- Gauche : cartes de contact + carte Google Maps -->
      <div class="lg:w-1/2 space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <!-- Téléphone -->
          <div
            class="w-full md:max-w-lg bg-[#E09698] p-8 rounded-lg shadow-lg flex items-start text-white"
          >
            <img src="/icons/phone.svg" alt="Icone téléphone" class="w-6 h-6" />

            <div class="ml-4">
              <h3 class="font-semibold">Téléphone</h3>
              <p>0492 39 55 90</p>
            </div>
          </div>
          <!-- E-mail -->
          <div
            class="bg-[#E09698] p-6 rounded-lg shadow-lg flex items-center text-white"
          >
            <img src="/icons/mail.svg" alt="Icone enveloppe" class="w-6 h-6" />

            <div class="ml-4">
              <h3 class="font-semibold">E-mail</h3>
              <p>Mimie.Brindille@hotmail.com</p>
            </div>
          </div>
          <!-- Adresse -->
          <div
            class="bg-[#E09698] p-6 rounded-lg shadow-lg flex items-center text-white"
          >
            <img
              src="/icons/map-pin.svg"
              alt="Icone localisation"
              class="w-6 h-6"
            />
            <div class="ml-4">
              <h3 class="font-semibold">Adresse</h3>
              <p>Pl. de Liberchies 15, 6238 Pont-à-Celles, Belgique</p>
            </div>
          </div>
          <!-- Horaires -->
          <div
            class="bg-[#E09698] p-6 rounded-lg shadow-lg flex items-center text-white"
          >
            <img src="/icons/clock.svg" alt="Icone horloge" class="w-6 h-6" />
            <div class="ml-4">
              <h3 class="font-semibold">Horaires</h3>
              <ul class="list-none p-0 m-0">
                <li>Lun-Ven : 9h00 – 18h00</li>
                <li>Mercredi : Fermé</li>
                <li>Samedi : 9h00 – 17h00</li>
                <li>Dimanche : 9h00 – 12h30</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Carte Google Maps -->
        <div class="w-full h-64 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.1195703749963!2d4.418560075915838!3d50.51334198283429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c22d84a5202c3b%3A0x8853757be974d28c!2sMimie%20Brindille!5e0!3m2!1sen!2sbe!4v1738593263252!5m2!1sen!2sbe"
            class="w-full h-full border-0"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <!-- Droite : Formulaire de contact -->
      <div class="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          Formulaire de contact
        </h2>
        <form class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Nom & Prénom</label
            >
            <input
              id="name"
              type="text"
              class="block w-full mt-1 p-2 rounded-lg border-gray-300 shadow-sm focus:ring-[#CB8587] focus:border-[#CB8587]"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >E-mail</label
            >
            <input
              id="email"
              type="email"
              class="block w-full mt-1 p-2 rounded-lg border-gray-300 shadow-sm focus:ring-[#CB8587] focus:border-[#CB8587]"
              placeholder="Votre e-mail"
            />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700"
              >Téléphone</label
            >
            <input
              id="phone"
              type="tel"
              class="block w-full mt-1 p-2 rounded-lg border-gray-300 shadow-sm focus:ring-[#CB8587] focus:border-[#CB8587]"
              placeholder="Votre numéro"
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700"
              >Message</label
            >
            <textarea
              id="message"
              rows="4"
              class="block w-full mt-1 p-2 rounded-lg border-gray-300 shadow-sm focus:ring-[#CB8587] focus:border-[#CB8587]"
              placeholder="Votre message…"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-[#CB8587] text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition w-full text-lg"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>

    <!-- Section Accès et transport (inchangée) -->
    <div class="mt-16">
      <h1 class="text-3xl font-bold text-[#CB8587] mb-6">Accès et transport</h1>
      <div class="flex flex-col md:flex-row justify-between gap-6">
        <div class="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
          <h2 class="text-xl font-semibold text-[#CB8587] mb-4">
            Accès en voiture
          </h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>
              Le magasin se trouve à <strong>10 minutes</strong> du centre de
              Pont-à-Celles en voiture.
            </li>
            <li>
              Il est accessible en <strong>13 minutes</strong> depuis le centre
              de Charleroi via la <strong>E420</strong>.
            </li>
            <li>
              Un parking public est disponible à proximité immédiate du magasin.
            </li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
          <h2 class="text-xl font-semibold text-[#CB8587] mb-4">
            Accès en transport en commun
          </h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>
              En train, la gare de Pont-à-Celles se situe à environ
              <strong>10 minutes en voiture</strong> du magasin.
            </li>
            <li>
              En bus, les lignes <strong>50, 64 et 65</strong> desservent
              l’arrêt Liberchies Église, qui se trouve à
              <strong>1 minute à pied</strong> du magasin.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pas de JS additionnel nécessaire
</script>

<style scoped>
/* Si tu veux ajuster l’opacité ou la position de l’overlay, fais-le ici */
</style>
