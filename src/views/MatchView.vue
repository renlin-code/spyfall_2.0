<template>
  <LayoutDefault>
    <template #header>
      <HeaderWithoutBurger />
    </template>
    <template #main>
      <transition name="view">
        <CardsParade @closeParade="setStage(2)" v-if="stage === 1" />
      </transition>
      <transition name="view">
        <div v-if="stage === 2">
          <Locations />
          <Timer @openPopUp="showPopUp = true" />
          <PopUp @closePopUp="showPopUp = false" v-if="showPopUp" />
        </div>
      </transition>
    </template>
  </LayoutDefault>
</template>

<script setup>
  import { ref, watch, onMounted, onUnmounted } from 'vue'
  import { useSessionStorage } from '../composables/useStorage'
  import LayoutDefault from '../components/layouts/LayoutDefault.vue'
  import HeaderWithoutBurger from '../components/headers/HeaderWithoutBurger.vue'
  import CardsParade from '../components/CardsParade.vue'
  import Locations from '../components/Locations.vue'
  import Timer from '../components/Timer.vue'
  import PopUp from '../components/PopUp.vue'

  // Estado reactivo
  const showPopUp = ref(false)

  // Session storage para el stage
  const { value: stage, setValue: setStage } = useSessionStorage('stage', 1)

  // Watchers
  watch(
    stage,
    (newStage) => {
      setStage(newStage)
    },
    { immediate: true }
  )

  // Lifecycle
  onMounted(() => {
    // El stage ya se inicializa automáticamente con useSessionStorage
  })

  onUnmounted(() => {
    setStage(1) // Reset stage when leaving the match
  })
</script>

<style scoped>
  div :deep() .locations-title {
    top: -32px;
  }
  div :deep() .locations-wrapper {
    height: 70vh;
  }
</style>
