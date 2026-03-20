<script setup lang="ts">
  import RevealPage from '@/components/bd/RevealPage.vue'
import Helper from '@/components/helpers/Helper.vue';
</script>

<template>
  <div class="canva-subox">
    <div class="canva-box">
      <RevealPage
        baseImageUrl="/drawings/flash_peluche_1.jpg"
        revealImageUrl="/drawings/flash_peluche_1.jpg"
        :id="3"
      />

      <Helper
        text="Déplacez le cadre afin de révéler la réalité"
      />
    </div>
  </div>
</template>

<style scoped>
  .canva-subox {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .canva-box {
    aspect-ratio: 16/9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
</style>