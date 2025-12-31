<template>
  <LayoutDefault>
    <template #header>
      <Header />
    </template>
    <template #main>
      <section class="locations-section">
        <router-link class="close-button" to="/params">Back</router-link>
        <Locations />
      </section>
    </template>
  </LayoutDefault>
</template>

<script setup>
  import LayoutDefault from '../components/layouts/LayoutDefault.vue'
  import Header from '../components/headers/Header.vue'
  import Locations from '../components/Locations.vue'
  // Nota: Countdown no se usa en este componente
</script>

<style scoped>
  .locations-section {
    width: 100%;
    max-width: 450px;
    height: calc(100vh - 140px);
    flex-direction: column;
    justify-content: start;
    background-color: var(--white-color);
    position: absolute;
    left: 0;
    top: 0;
    transition: all 800ms;
  }
</style>
