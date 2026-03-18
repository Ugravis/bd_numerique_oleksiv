<script setup lang="ts">
  import { soundManager } from '@/services/SoundManager'
  import { ref } from 'vue'

  const isMuted = ref(false)

  function toggleSound() {
    isMuted.value = !isMuted.value

    if (isMuted.value) {
      soundManager.stopAll()
      soundManager.setMasterVolume(0)
    } else {
      soundManager.setMasterVolume(1)
      soundManager.play('ambience')
    }
  }
</script>

<template>
  <button @click="toggleSound">
    <span class="material-symbols-outlined">
      {{ 
        isMuted 
        ? 'volume_off' 
        : 'volume_up' 
      }}
    </span>
  </button>
</template>

<style scoped>
  span {
    font-size: 14px;
  }
</style>