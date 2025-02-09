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
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import { useHead } from "#imports";

useHead({
  link: [{ rel: "icon", type: "image/png", href: "/images/favicon3.webp" }],
});
</script>

<style>
.bg-primary {
  background-color: #f5edf0;
}
@font-face {
  font-family: 'Helium';
  src: url('/fonts/helium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.helium {
  font-family: 'Helium', sans-serif;
}

@font-face {
  font-family: 'Louis George Cafe';
  src: url('/fonts/Louis\ George\ Cafe.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.louis {
  font-family: 'Louis George Cafe', sans-serif;
}
</style>
