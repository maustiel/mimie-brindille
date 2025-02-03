<template>
  <div class="container mx-auto py-10 px-4">
    <h1 class="text-4xl font-bold text-[#CB8587] mb-6 text-center">Contactez-nous</h1>
    
    <div class="flex flex-col lg:flex-row gap-10">
      <!-- Formulaire de contact -->
      <div class="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Formulaire de contact</h2>
        <form class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Nom & Prénom</label>
            <input id="name" type="text" class="block w-full mt-1 p-2 rounded-lg border-gray-300 shadow-sm focus:ring-[#CB8587] focus:border-[#CB8587]" placeholder="Votre nom" />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">E-mail</label>
            <input id="email" type="email" class="block w-full mt-1 p-2 rounded-lg border-gray-300 shadow-sm focus:ring-[#CB8587] focus:border-[#CB8587]" placeholder="Votre e-mail" />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Téléphone</label>
            <input id="phone" type="tel" class="block w-full mt-1 p-2 rounded-lg border-gray-300 shadow-sm focus:ring-[#CB8587] focus:border-[#CB8587]" placeholder="Votre numéro" />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" rows="4" class="block w-full mt-1 p-2 rounded-lg border-gray-300 shadow-sm focus:ring-[#CB8587] focus:border-[#CB8587]" placeholder="Votre message..."></textarea>
          </div>
          <button type="submit" class="bg-[#CB8587] text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition w-full text-lg">Envoyer</button>
        </form>
      </div>
      
      <!-- Informations de contact -->
      <div class="lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">La Fleurerie</h2>
        <p class="text-gray-700">N’hésitez pas à nous contacter par téléphone ou par e-mail.</p>
        <ul class="mt-4 space-y-2">
          <li class="flex items-center"><span class="font-semibold">📍 Adresse :</span> Chaussée de Huy 117A, 1325 Bonlez</li>
          <li class="flex items-center"><span class="font-semibold">📞 Téléphone :</span> +32 (0)484 69 90 39</li>
          <li class="flex items-center"><span class="font-semibold">📧 E-mail :</span> contact@lafleurerie.be</li>
        </ul>
        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold">Horaires</h3>
          <ul class="mt-4 space-y-2">
            <li class="font-semibold">Lun-Ven: 9h00 - 18h00</li>
            <li class="font-semibold">Mercredi: Fermé</li>
            <li class="font-semibold">Samedi: 9h00 - 17h00</li>
            <li class="font-semibold">Dimanche: 9h00 - 12h30</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    
    <!-- Carte Google Maps -->
    <div class="mt-10 text-center">
      <h2 class="text-2xl font-bold text-[#CB8587] mb-4">Où nous trouver ?</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.1195703749963!2d4.418560075915838!3d50.51334198283429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c22d84a5202c3b%3A0x8853757be974d28c!2sMimie%20Brindille!5e0!3m2!1sen!2sbe!4v1738593263252!5m2!1sen!2sbe" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    
    <!-- Accès et transport -->
    <div class="container mx-auto py-10 px-4">
      <h1 class="text-3xl font-bold text-[#CB8587] mb-6">Accès et transport</h1>
      
      <div class="flex flex-col md:flex-row justify-between gap-6">
        <div class="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
          <h2 class="text-xl font-semibold text-[#CB8587] mb-4">Accès en voiture</h2>
          <ul class="list-disc pl-5">
            <li>Le magasin se trouve à <strong>10 minutes</strong> du centre de Pont-à-Celles en voiture.</li>
            <li>Il est accessible en <strong>13 minutes</strong> depuis le centre de Charleroi via la <strong>E420.</strong></li>
            <li>Un parking public est disponible à proximité immédiate du magasin.</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
          <h2 class="text-xl font-semibold text-[#CB8587] mb-4">Accès en transport en commun</h2>
          <ul class="list-disc pl-5">
            <li>En train, la gare de Pont-à-Celles se situe à environ <strong>10 minutes en voiture</strong> du magasin.</li>
            <li>En bus, les lignes <strong>50, 64, et 65</strong> desservent l’arrêt Liberchies Église, qui se trouve à <strong>1 minute à pied</strong> du magasin.</li>
          </ul>
        </div>
      </div>
    </div>

</template>

<script setup>
// Aucune logique supplémentaire requise
</script>

<style>
/* Ajout de styles si besoin */
</style>