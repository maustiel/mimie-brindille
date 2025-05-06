<template>
  <!-- on n'affiche que si status===null -->
  <div v-if="status === null" class="cookie-banner">
    <p>🍪 Ce site utilise des cookies pour améliorer votre expérience. Acceptez-vous ?</p>
    <div class="actions">
      <button class="btn-accept" @click="accept">J’accepte</button>
      <button class="btn-refuse" @click="refuse">Je refuse</button>
    </div>
  </div>
</template>

<script setup>
import { useCookieConsent } from '~/composables/useCookieConsent'
const { status, accept, refuse } = useCookieConsent()
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ffe4e6; /* rose clair */
  color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
}
.cookie-banner p {
  margin: 0;
}
.actions {
  display: flex;
  gap: 0.5rem;
}
.actions button {
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
}
.btn-accept {
  background: #e89ca1; /* couleur primaire */
  color: #fff;
}
.btn-refuse {
  background: transparent;
  color: #e89ca1;
  border: 1px solid #e89ca1;
}
</style>
