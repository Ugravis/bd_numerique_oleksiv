<template>
  <footer>
    <h4>Vinnytsia 🇺🇦</h4>
    <p>Réalisé par <a href="https://www.linkedin.com/in/ulysse-pennetier/">Ulysse Pennetier</a> <span class="material-symbols-outlined nav-btn">arrow_outward</span>, <a href="#">Mush Biega</a> <span class="material-symbols-outlined nav-btn">arrow_outward</span>, <a href="https://www.linkedin.com/in/valentin-babic/">Valentin Babic</a> <span class="material-symbols-outlined nav-btn">arrow_outward</span> et <a href="#">Thomas Hervet</a> <span class="material-symbols-outlined nav-btn">arrow_outward</span>.</p>
    <p>IUT de Troyes - 2026</p>
  </footer>
</template>

<style scoped>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #15273a;
    color: #fff;
    padding: 50px 0px;
    gap: 20px;
  }

  h4, p {
    margin: 0px;
    letter-spacing: 0.01em;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  .material-symbols-outlined {
    font-size: 14px;
  }
</style>