<script setup lang="ts">
import { ref } from 'vue'

  const props = defineProps<{
    text: string
  }>()

  const toggleVisible = ref(false)
</script>

<template>
  <div class="box">
    <span 
      class="material-symbols-outlined icon"
      @click="toggleVisible = !toggleVisible"
    >
      question_mark
    </span>
    
    <div v-if="toggleVisible" class="text-box">
      <span class="text">{{ text }}</span>
    </div>
  </div>
</template>

<style scoped>
  .box {
    position: absolute;
    bottom: 3%;
    left: 3%;
    display: flex;
    gap: 10px;
    opacity: 0.65;
  }

  .icon {
    font-size: 20px;
    border-radius: 999px;
    padding: 4px;
    cursor: pointer;
    border: 2px solid #000;
    background-color: #000;
    color: #fff;
    transition: 0.1s;
  }
  .icon:hover {
    transform: scale(1.1);
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text {
    border: 2px solid #000;
    padding: 3px 15px;
    border-radius: 999px;
    background-color: #000;
    color: #fff;
  }
</style>