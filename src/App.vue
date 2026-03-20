<script setup lang="ts">
  import Navbar from '@/components/layout/Navbar.vue'
  import Footer from '@/components/layout/Footer.vue'
  
  import { soundManager } from './services/SoundManager'
  import { onMounted, onUnmounted } from 'vue'

  onMounted(() => {
    soundManager.play('ambience')

    document.addEventListener('click', (e) => {
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

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap');

  body {
    font-family: 'Source Serif 4';
    overflow-x: hidden;
    margin: 0px;
  }

  .nav-and-main {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .btn-primary-white {
    border: 2px solid black;
    color: #000;
    text-decoration: none;
    padding: 12px 25px;
    font-size: 1.15em;
    cursor: pointer;
    transition: 0.1s;
    background-color: #fff;
  }
  .btn-primary-white:hover {
    background-color: #FFDD00;
    border: 2px solid #FFDD00;
    color: #000;
  }
</style>