<script setup lang="ts">
</script>

<template>
  <div class="main-box">
    <div class="main">
      <h1>Vinnytsia</h1>

      <p>
        2022, l'Ukraine est en feu. Des installations civiles sont bombardées. Des enfants tombent sous des bombes. Roman Oleksiv est l'un d'eux. Survivant mais impacté à jamais, il vient témoigner au Parlement européen en 2025.
      </p>

      <routerLink :to="{ name: 'story_1' }" class="btn-primary-white">
        Prendre place dans le Parlement
      </routerLink>
    </div>

    <img src="/illustrations/photos.png" alt="home_illustration" class="home-illustration">

    <!-- <div class="background-box">
      <div class="background">
        <div class="background-image"></div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
  .main-box {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: start;
    position: relative;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
  }

  /* h1, p, a {
    color: #fff;
  } */

  h1 {
    font-size: 100px;
    margin: 0px;
    background-color: #fff;
  }

  p {
    text-align: center;
    width: 65%;
    background-color: #fff;
  }

  /* .background-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #342c00;
  }

  .background {
    width: 100%;
    height: 100%;
    filter: blur(10px);
    transform: scale(1.1);
    opacity: 40%;
  }

  .background-image {
    background-image: url('/photos/cover_1.webp');
    background-color: #000;
    background-size: cover;      
    background-position: center; 
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  } */

  .home-illustration {
    width: 100vw;
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
</style>