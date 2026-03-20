<template>
  <div class="box">
    <div>
      <h2>Equipe</h2>

      <p>Projet réalisé par <a href="https://www.linkedin.com/in/ulysse-pennetier/">Ulysse Pennetier</a> <span class="material-symbols-outlined nav-btn">arrow_outward</span>, <a href="#">Mush Biega</a> <span class="material-symbols-outlined nav-btn">arrow_outward</span>, <a href="https://www.linkedin.com/in/valentin-babic/">Valentin Babic</a> <span class="material-symbols-outlined nav-btn">arrow_outward</span> et <a href="#">Thomas Hervet</a> <span class="material-symbols-outlined nav-btn">arrow_outward</span>.</p>
    </div>

    <div>
      <h2>Outils</h2>

      <p>Illustrations réalisées avec Procreate et Adobe Illustrator.</p>
      <p>Site développé avec Vuejs | <a href="https://github.com/Ugravis/bd_numerique_oleksiv">Github</a>.</p>
    </div>

    <div>
      <h2>Contexte</h2>

      <p>Projet réalisé dans le cadre d'un module de cours à l'IUT de Troyes, département MMI.</p>
      <p>Encadré Anthony Rageul, Marine Riguet.</p>
    </div>

    <div>
      <h2>Crédits photos</h2>

      <p>Les photographies de la page d'accueil proviennent de sources de presse.</p>
      
      <p>
        Olivier Corsan via 
        <a href="https://www.leparisien.fr/international/ukraine/jai-compris-que-je-touchais-les-coeurs-roman-11-ans-symbole-du-martyre-de-lukraine-21-02-2026-3P76TFPE5JG27ICI5Q6SBUVGWE.php">
          Le Parisien
        </a>, 
        Luxmy Gopal via 
        <a href="https://www.bbc.com/news/articles/cdxe10kgvq4o">
          BBC
        </a>, 
        EFREM LUKATSKY/AP/SIPA, 
        Genya SAVILOV/AFP via 
        <a href="https://www.lesechos.fr/monde/europe/lukraine-visee-par-des-frappes-russes-dune-ampleur-inedite-2044166">
          Les Echos
        </a>,
        VITALIY KLITSCHKO / AFP via
        <a href="https://english.elpais.com/international/2022-03-12/video-how-to-tell-the-difference-between-a-missile-and-a-rocket-and-other-questions-about-the-weapons-being-used-in-ukraine.html">
          El Pais 50
        </a>,
        <a href="https://www.rts.ch/info/monde/13180921-la-commission-europeenne-soutient-la-candidature-de-lukraine-a-lue.html">
          RTS
        </a>,
        <a href="https://ig.ft.com/mariupol/">
          The Financial Times
        </a>.
      </p>
    </div>

    <div>
      <h2>Témoignage</h2>

      <p>Basé sur des faits réels. Retrouver une partie du témoignage de Roman Oleksiv sur <a href="https://www.franceinfo.fr/monde/europe/manifestations-en-ukraine/c-est-la-derniere-fois-que-j-ai-vu-ma-mere-une-interprete-du-parlement-europeen-emue-aux-larmes-en-traduisant-le-recit-d-un-enfant-ukrainien_7674532.html">France Info</a>.</p>
    </div>

    <div>
      <h2>Extrait du storyboard</h2>

      <div class="img-box">
        <img src="/illustrations/storyboard.png" alt="storyboard">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .box {
    margin: 0px 100px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 50px;
  }

  h1, h2, h3, h4, p {
    text-align: center;
  }

  a {
    color: #000000;
  }

  .material-symbols-outlined {
    font-size: 14px;
  }

  .img-box {
    display: flex;
    justify-content: center;
  }

  img {
    width: 75%;
  }
</style>