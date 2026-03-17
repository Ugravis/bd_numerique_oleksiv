<template>
  <nav>
    <routerLink :to="{ name: 'home' }">Accueil</routerLink>
    <routerLink :to="{ name: 'about' }">A propos</routerLink>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    gap: 12px;
  }
</style>