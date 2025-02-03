<template>
  <div class="bg-primary min-h-screen flex flex-col">
    <!-- Navbar -->
    <Navbar />
    
    <!-- Contenu principal -->
    <main class="flex-grow py-12 container mx-auto px-6">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import { useHead } from '#imports'

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/images/favicon3.png' }
  ]
})
</script>

<style>
.bg-primary {
  background-color: #F5EDF0;
}
</style>
