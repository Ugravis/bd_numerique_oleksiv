<script setup lang="ts">
  import { useMainStore } from '@/store/store'
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const store = useMainStore()

  function getCurrentIndex(): number | null {
    const name = route.name as string
    const match = name?.match(/^story_(\d+)$/)
    return match ? parseInt(match[1]!) : null
  }

  function getFlashbackId(): 1 | 2 | 3 | null {
    const match = route.path.match(/souvenirs\/(\d+)/)
    if (match) {
      const id = parseInt(match[1]!)
      if (id === 1 || id === 2 || id === 3) return id
    }
    return null
  }

  function previousPage() {
    if (route.path.includes('souvenirs')) return { name: 'story_2' }

    const index = getCurrentIndex()
    if (!index || index <= 1) return { name: 'home' } 
    return { name: `story_${index - 1}` }
  }

  function nextPage() {
    if (route.path.includes('souvenirs')) return { name: 'story_2' }

    const index = getCurrentIndex()
    if (!index || index >= 3) return { name: 'home' } 
    return { name: `story_${index + 1}` }
  }

  function previousIcon() {
    const target = previousPage()
    
    if (target.name === 'home') return 'home'
    if (route.path.includes('souvenirs')) return 'replay'
    return 'arrow_back_ios'
  }

  function nextIcon() {
    const target = nextPage()
    
    if (target.name === 'home') return 'home'
    if (route.path.includes('souvenirs')) return 'replay'
    return 'arrow_forward_ios'
  }

  const isNextDisabled = computed(() => {
    const flashbackId = getFlashbackId()
    
    if (flashbackId) {
      return !store.isFlashBackComplete(flashbackId)
    }
    if (route.path === '/recit/parlement') {
      return !store.canGoAfterParliament
    }
    return false
  })

  const isPreviousDisabled = computed(() => {
    const flashbackId = getFlashbackId()
    
    // Si on est sur une page flashback, désactiver si pas complété
    if (flashbackId) {
      return !store.isFlashBackComplete(flashbackId)
    }
    return false
  })
</script>

<template>
  <div class="page-box">
    <div class="bd-full-page-box">
      <div class="bd-full-page-side">
        <routerLink 
          :to="previousPage()"
          :class="{ disabled: isPreviousDisabled }"
          :style="{ 
            pointerEvents: isPreviousDisabled ? 'none' : 'auto',
            cursor: isPreviousDisabled ? 'not-allowed' : 'pointer'
          }"
        >
          <span class="material-symbols-outlined nav-btn">
            {{ previousIcon() }}
          </span>
        </routerLink>
      </div>

      <div class="bd-full-page-main">
        <transition name="slide" mode="out-in">
          <routerView :key="route.path" />
        </transition>
      </div>

      <div class="bd-full-page-side">
        <routerLink 
          :to="nextPage()"
          :class="{ disabled: isNextDisabled }"
          :style="{ 
            pointerEvents: isNextDisabled ? 'none' : 'auto', 
            cursor: isNextDisabled ? 'not-allowed' : 'pointer'
          }"
        >
          <span class="material-symbols-outlined nav-btn">
            {{ nextIcon() }}
          </span>
        </routerLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .page-box {
    height: calc(100vh - 82px);
  }

  .bd-full-page-box {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  .bd-full-page-side {
    min-width: 90px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .bd-full-page-side a {
    border: 2.5px solid #000;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.1s;
    cursor: pointer;
  }

  .bd-full-page-side a:hover:not(.disabled) {
    background-color: #0057B7;
    border: 2px solid #0057B7;
  }

  .bd-full-page-side a:hover:not(.disabled) span {
    color: #fff;
  }

  .bd-full-page-side a.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .bd-full-page-main {
    height: 100%;
    width: 100%;
    object-fit: contain;
    position: relative;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .bd-full-page-box {
      flex-direction: column;
    }
  }

  .material-symbols-outlined {
    font-variation-settings: 'FILL' 1;
    color: #000;
    transition: 0.15s;
  }

  /* Transitions */

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.2s ease;
  }

  .slide-enter-from {
    opacity: 0;
    transform: translateX(100%);
  }

  .slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
</style>