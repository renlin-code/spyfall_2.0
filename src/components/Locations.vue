<template>
  <div>
    <h6 class="locations-title">Локации</h6>

    <div class="locations-wrapper">
      <div
        @click="selectImg(item.url)"
        v-for="item in locations"
        class="location-card"
        :key="item.id"
      >
        <figure class="location-card__figure">
          <img :src="item.url" alt="location" class="location-card--image" />
        </figure>
        <p :style="`background-color: ${color}30`" class="location-card--name">
          {{ item.name.toUpperCase() }}
        </p>
      </div>
    </div>

    <teleport to="body">
      <transition name="view">
        <div
          @click="showModal = false"
          v-if="showModal"
          class="locations-modal"
        >
          <img :src="modalSrc" alt="location" />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useColor } from '../composables/useColor'
  import { useLocations } from '../composables/useLocations'

  // Composables
  const { color } = useColor()
  const { locations } = useLocations()

  // Estado local del modal
  const modalSrc = ref('')
  const showModal = ref(false)

  // Métodos
  const selectImg = (src) => {
    modalSrc.value = src
    showModal.value = true
  }
</script>

<style scoped>
  .locations-title {
    position: absolute;
    top: 10px;
    left: 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
    position: absolute;
  }
  .locations-wrapper {
    width: 100%;
    height: calc(100vh - 160px);
    overflow-y: scroll;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 10px;
  }
  .locations-wrapper .location-card {
    width: 135px;
    height: auto;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .locations-wrapper .location-card .location-card__figure {
    width: 135px;
    height: 135px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    z-index: 0;
  }
  .locations-wrapper .location-card .location-card--image {
    width: 100%;
    height: 100%;
  }

  .locations-wrapper .location-card .location-card--name {
    display: inline-block;
    width: 90%;
    text-align: center;
    font-size: 1.35rem;
    font-weight: 700;
    margin: 10px auto 8px;
    padding: 8px 0 7px 0;
    border-radius: 8px;
    color: #222;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    letter-spacing: 0.03em;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    transition:
      background 0.2s,
      color 0.2s;
  }

  .locations-modal {
    position: absolute;
    display: grid;
    place-content: center;
    cursor: pointer;
    left: calc(50% - 205px);
    top: 0;
    width: 410px;
    height: 100vh;
    background-color: rgba(56, 55, 55, 0.8);
  }
  .locations-modal img {
    width: 300px;
    height: auto;
    border: 4px solid var(--white-color);
    border-radius: 8px;
  }
  .locations-modal svg {
    position: absolute;
    right: 35px;
    top: 60px;
  }
</style>
