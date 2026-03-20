<script setup lang="ts">
  import SoundToggle from '../buttons/SoundToggle.vue'
</script>

<template>
  <nav>    
    <div>
      <routerLink :to="{ name: 'home' }" class="logo">
        <img src="/logos/vinnytsia.png" alt="vinnytsia_logo">
      </routerLink>

      <routerLink :to="{ name: 'home' }" class="nav-link">Accueil</routerLink>
      <routerLink :to="{ name: 'about' }" class="nav-link">A propos</routerLink>
    </div>
    
    <div>
      <SoundToggle />
    </div>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    margin: 28px;
  }

  nav > div {
    display: flex;
    gap: 30px;
  }

  .nav-link {
    text-decoration: none;
    color: #000;
  }

  .nav-link:hover {
    text-decoration: underline;
  }

  .logo {
    transition: 0.2s;
  }

  .logo img {
    width: 25px;
  }

  .logo:hover {
    transform: rotate(15deg);
  }
</style>