<script setup lang="ts">
// On récupère la prop `error` injectée par Nuxt
const props = defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

// On définit dynamiquement le <head> selon le code d'erreur
import { useHead } from '#imports'
useHead({
  title: `${props.error.statusCode} — Oups, page non trouvée`,
  meta: [
    {
      name: 'description',
      content: `Erreur ${props.error.statusCode} : ${props.error.message}`
    }
  ]
})
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-[#f5edf0] px-4"
  >
    <h1 class="text-8xl font-bold text-[#CB8587] mb-4">
      {{ props.error.statusCode }}
    </h1>
    <p class="text-2xl text-gray-700 mb-8">
      {{ props.error.message }}
    </p>
    <NuxtLink
      to="/"
      class="inline-block bg-[#CB8587] hover:bg-[#b06b6d] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
    >
      Retour à l’accueil
    </NuxtLink>
  </div>
</template>
