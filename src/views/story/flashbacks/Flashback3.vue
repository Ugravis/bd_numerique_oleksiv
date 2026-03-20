<script setup lang="ts">
  import RevealPage from '@/components/bd/RevealPage.vue'
import Helper from '@/components/helpers/Helper.vue';
</script>

<template>
  <div class="canva-subox">
    <div class="canva-box">
      <RevealPage
        baseImageUrl="/drafts/flash_peluche_1.png"
        revealImageUrl="/drafts/flash_peluche_2.png"
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