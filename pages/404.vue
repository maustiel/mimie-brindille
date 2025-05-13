<!-- pages/404.vue -->
<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: '404 — Oups, page introuvable | Mimie Brindille',
  meta: [
    {
      name: 'description',
      content: 'Désolée, la page que vous cherchez n’existe pas. Retournez à l’accueil pour découvrir mes bouquets.'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-[#f5edf0] px-4">
    <h1 class="text-8xl font-bold text-[#CB8587] mb-4">404</h1>
    <p class="text-2xl text-gray-700 mb-8">
      Désolée, cette page n’existe pas.
    </p>
    <NuxtLink
      to="/"
      class="inline-block bg-[#CB8587] hover:bg-[#b06b6d] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
    >
      Retour à l’accueil
    </NuxtLink>
  </div>
</template>
