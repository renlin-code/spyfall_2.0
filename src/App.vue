<template>
  <Header />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="view">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style scoped>
.view-enter-active,
.view-leave-active {
  transition: opacity 400ms ease;
}

.view-enter-from,
.view-leave-to {
    opacity: 0;
}
</style>
