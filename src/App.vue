<script setup lang="ts">
  import Navbar from '@/components/layout/Navbar.vue'
  import Footer from '@/components/layout/Footer.vue'
  
  import { soundManager } from './services/SoundManager'
  import { onMounted, onUnmounted } from 'vue'

  onMounted(() => {
    soundManager.play('ambience')

    document.addEventListener('click', (e) => {
      console.log('test')
      soundManager.play('mouse')
    })
  })

  onUnmounted(() => {
    soundManager.destroy()
  })
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