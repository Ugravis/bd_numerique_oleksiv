<script setup lang="ts">
  import RevealPage from '@/components/bd/RevealPage.vue'
</script>

<template>
  <div class="canva-subox">
    <div class="canva-box">
      <RevealPage
        baseImageUrl="/drafts/flash_assemblee_1.png"
        revealImageUrl="/drafts/flash_assemblee_2.png"
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