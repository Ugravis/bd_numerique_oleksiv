<script setup lang="ts">
  import { useRoute } from 'vue-router'
  
  const route = useRoute()

  function getCurrentIndex(): number | null {
    const name = route.name as string
    const match = name?.match(/^story_(\d+)$/)
    return match ? parseInt(match[1]!) : null
  }

  function previousPage() {
    const index = getCurrentIndex()
    if (!index || index <= 1) return { name: 'home' } 
    return { name: `story_${index - 1}` }
  }

  function nextPage() {
    const index = getCurrentIndex()
    if (!index || index >= 3) return { name: 'home' } 
    return { name: `story_${index + 1}` }
  }
</script>

<template>
  <div class="page-box">
    <div class="bd-full-page-box">
      <div class="bd-full-page-side">
        <routerLink :to="previousPage()">
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </routerLink>
      </div>

      <div class="bd-full-page-main">
        <routerView />
      </div>

      <div class="bd-full-page-side">
        <routerLink :to="nextPage()">
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </routerLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .page-box {
    height: calc(100vh - 30px);
    background-color: red;
  }

  .bd-full-page-box {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  .bd-full-page-side {
    background-color: aqua;
    min-width: 90px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .bd-full-page-side a {
    border: 2.5px solid #000;
    border-radius: 9999px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .bd-full-page-main {
    height: 100%;
    max-width: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    .bd-full-page-box {
      flex-direction: column;
    }
  }
</style>