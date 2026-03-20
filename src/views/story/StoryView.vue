<script setup lang="ts">
  import { useRoute } from 'vue-router'
  
  const route = useRoute()

  function getCurrentIndex(): number | null {
    const name = route.name as string
    const match = name?.match(/^story_(\d+)$/)
    return match ? parseInt(match[1]!) : null
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
</script>

<template>
  <div class="page-box">
    <div class="bd-full-page-box">
      <div class="bd-full-page-side">
        <routerLink :to="previousPage()">
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
        <routerLink :to="nextPage()">
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
    /* background-color: red; */
  }

  .bd-full-page-box {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  .bd-full-page-side {
    /* background-color: aqua; */
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
  }
  .bd-full-page-side a:hover {
    background-color: #0057B7;
    border: 2px solid #0057B7;
  }
  .bd-full-page-side a:hover span {
    color: #fff;
  }

  .bd-full-page-main {
    height: 100%;
    width: 100%;
    object-fit: contain;
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