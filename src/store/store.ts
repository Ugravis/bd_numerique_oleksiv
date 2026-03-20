import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMainStore = defineStore('main', () => {
  // State
  const completeFlashBacks = ref<Record<1 | 2 | 3, boolean>>({
    1: false,
    2: false,
    3: false
  })
  const canGoAfterParliament = ref(false)

  // Getters
  const isFlashBackComplete = computed(() => (id: 1 | 2 | 3) => completeFlashBacks.value[id])

  // Actions
  const completeFlashBack = (id: 1 | 2 | 3) => {
    completeFlashBacks.value[id] = true

    if (Object.values(completeFlashBacks.value).every(v => v)) {
      canGoAfterParliament.value = true
    }
  }

  const resetAll = () => {
    completeFlashBacks.value = { 1: false, 2: false, 3: false }
    canGoAfterParliament.value = false
  }

  return {
    // State
    completeFlashBacks,
    canGoAfterParliament,

    // Getters
    isFlashBackComplete,
    
    // Actions
    completeFlashBack,
    resetAll
  }
})