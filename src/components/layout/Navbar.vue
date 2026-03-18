<script setup lang="ts">
  import SoundToggle from '../buttons/SoundToggle.vue'
</script>

<template>
  <nav>
    <routerLink :to="{ name: 'home' }">Accueil</routerLink>
    <routerLink :to="{ name: 'about' }">A propos</routerLink>
    
    <SoundToggle />
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    gap: 12px;
  }
</style>