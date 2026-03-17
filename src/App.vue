<script setup lang="ts">
  import Navbar from '@/components/layout/Navbar.vue'
  import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="nav-and-main">
    <Navbar />

    <main>
      <routerView />
    </main>
  </div>

  <Footer />
</template>

<style scoped>
  .nav-and-main {
    min-height: 100vh;
  }
</style>