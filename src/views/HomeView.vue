<template>
  <LayoutDefault>
    <template #header>
      <Header />
    </template>
    <template #main>
      <section class="main-section">
        <div class="hero">
          <FigureHero />
        </div>
        <p>
          The game where you can feel like a real detective or a cunning spy
        </p>
        <router-link to="/params" class="primary-button">PLAY</router-link>
      </section>
    </template>
  </LayoutDefault>
</template>

<script setup>
  import LayoutDefault from '../components/layouts/LayoutDefault.vue'
  import Header from '../components/headers/Header.vue'
  import FigureHero from '../components/figures/FigureHero.vue'
</script>

<style scoped>
  .main-section {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 40px;
    height: calc(100vh - 140px);
    z-index: 0;
    transition: all 800ms;
  }
  .main-section .hero {
    min-width: 80%;
    width: 300px;
    height: 300px;
    margin-top: 30px;
  }
  .main-section p {
    font-family: 'Gaegu', cursive;
    font-size: 2rem;
    line-height: 2.2rem;
    text-align: center;
  }
  .primary-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 2.6rem;
    color: var(--black-color);
    text-align: center;
    margin: 50px 0px 20px;
  }
</style>
