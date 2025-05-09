<template>
  <!-- Bannière affichée uniquement si l'utilisateur n'a pas encore donné son choix -->
  <div v-if="status === null" class="cookie-banner">
    <p>
      🍪 Ce site utilise des cookies pour améliorer votre expérience.
      Acceptez-vous ?
    </p>

    <!-- Boutons d'action : accepter ou refuser -->
    <div class="actions">
      <button class="btn-accept" @click="accept">J’accepte</button>
      <button class="btn-refuse" @click="refuse">Je refuse</button>
    </div>
  </div>
</template>

<script setup>
// Import du composable personnalisé qui gère le consentement aux cookies
import { useCookieConsent } from "~/composables/useCookieConsent";

// Extraction des variables et fonctions du composable :
// - status : null, true ou false selon le choix
// - accept : fonction qui enregistre un consentement
// - refuse : fonction qui enregistre un refus
const { status, accept, refuse } = useCookieConsent();
</script>

<style scoped>
/* Bannière de cookie fixe en bas de page */
.cookie-banner {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ffe4e6; /* fond rose clair */
  color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50; /* au-dessus des éléments standards */
}

/* Supprime les marges du paragraphe */
.cookie-banner p {
  margin: 0;
}

/* Conteneur des boutons */
.actions {
  display: flex;
  gap: 0.5rem;
}

/* Style commun aux boutons */
.actions button {
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
}

/* Bouton "j’accepte" en rose plein */
.btn-accept {
  background: #e89ca1;
  color: #fff;
}

/* Bouton "je refuse" en style outline */
.btn-refuse {
  background: transparent;
  color: #e89ca1;
  border: 1px solid #e89ca1;
}
</style>
