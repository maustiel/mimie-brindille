<template>
  <div>
    <!-- Bannière Contact -->
    <div class="container mx-auto py-10 px-4">
      <!-- Hero avec image de fond et overlay -->
      <div class="relative w-full h-64 mb-2 rounded-lg overflow-hidden">
        <img
          src="/images/accueil.webp"
          alt="Contactez-nous"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div
          class="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-40"
        >
          <h1
            class="helium text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-md text-center px-4"
          >
            Contactez-nous
          </h1>
          <p
            class="louis mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-white drop-shadow-md text-center px-6"
          >
            N’hésitez pas à nous contacter par téléphone, par e-mail ou via le
            formulaire ci-dessous.
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto pt-4 pb-10 px-4">
      <!-- 2 colonnes : cartes+map à gauche, formulaire à droite -->
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
              <h3 class="text-xl font-semibold mb-2">Téléphone</h3>
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
              <h3 class="text-xl font-semibold mb-2">E-mail</h3>
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
              <h3 class="text-xl font-semibold mb-2">Adresse</h3>
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
              <h3 class="text-xl font-semibold mb-2">Horaires</h3>
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
            ></iframe>
          </div>
        </div>

        <!-- Droite : Formulaire de contact -->
        <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
          <h2 class="text-3xl font-bold text-[#CB8587] mb-12 text-center">
            Envoyez-nous un message
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
              class="bg-[#CB8587] text-white px-4 py-2 rounded-lg hover:bg-[#e09698] transition w-full text-lg"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

      <!-- Accès et transport -->
      <div class="py-10 px-4">
        <h2 class="text-3xl font-bold text-[#CB8587] mb-6 text-center">
          Accès et transport
        </h2>
        <div class="flex flex-col md:flex-row justify-between gap-6">
          <div class="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
            <h3 class="text-xl font-semibold text-[#CB8587] mb-4">
              Accès en voiture
            </h3>
            <ul class="list-disc pl-5 space-y-2">
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
          <div class="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
            <h3 class="text-xl font-semibold text-[#CB8587] mb-4">
              Accès en transport en commun
            </h3>
            <ul class="list-disc pl-5 space-y-2">
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
</template>

<script setup>
// Aucun JS supplémentaire nécessaire
</script>

<style scoped>
@media (max-width: 640px) {
  .grid-cols-1 > div {
    margin-bottom: 1rem;
  }
}
</style>
