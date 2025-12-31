<template>
  <section class="showing-cards-section">
    <h1 class="primary-title player-numb">PLAYER {{ currentPlayer }}</h1>
    <div @click="revealCard" class="card-container">
      <div
        class="card-side card-back"
        :style="{ backgroundImage: `url(${currentCardJSON.url})` }"
      ></div>
      <div
        class="card-side card-front"
        :class="{ 'card-front--hidden': showingCard }"
        :style="`
                background: -moz-linear-gradient(45deg, rgba(56,55,55,1) 0%, ${color} 100%);
                background: -webkit-linear-gradient(45deg, rgba(56,55,55,1) 0%, ${color} 100%);
                background: linear-gradient(45deg, rgba(56,55,55,1) 0%, ${color} 100%);
            `"
      >
        REVEAL
      </div>
    </div>
    <p
      v-if="locations.length !== 0"
      :class="{ 'subject-name--visible': showRole }"
      class="primary-text subject-name"
    >
      {{ currentCardJSON.name.toUpperCase() }}
    </p>
    <transition name="view">
      <button v-if="showRole" @click="nextCard" class="primary-button">
        NEXT
      </button>
    </transition>
  </section>
</template>

<script setup>
  import { ref, reactive, computed, watch } from 'vue'
  import { useColor } from '../composables/useColor'
  import { useLocations } from '../composables/useLocations'
  import { useSessionStorage } from '../composables/useStorage'
  import spyImage from '../assets/images/spy.png'

  // Props y Emits
  const emit = defineEmits(['closeParade'])

  // Composables
  const { color } = useColor()
  const { locations } = useLocations()
  const { value: playersNoSpiesAmount } = useSessionStorage(
    'playersNoSpiesAmount',
    3
  )
  const { value: spiesAmount } = useSessionStorage('spiesAmount', 1)

  // Estado reactivo
  const spyJSON = reactive({
    id: '-',
    name: 'you are spy!',
    url: spyImage
  })

  const currentCardJSON = ref({
    id: '',
    name: '',
    url: ''
  })

  const currentPlayer = ref(1)
  const showingCard = ref(false)
  const showRole = ref(false)

  // Computed properties
  const matchLocation = computed(() => {
    if (locations.value.length === 0) return null
    const locationIndex = Math.floor(Math.random() * locations.value.length)
    return locations.value[locationIndex]
  })

  const matchRoles = computed(() => {
    const roles = []
    let noSpies = playersNoSpiesAmount.value
    let spies = spiesAmount.value
    const total = noSpies + spies

    for (let i = 0; i < total; i++) {
      switch (true) {
        case spies > 0 && noSpies > 0: {
          const role = Math.floor(Math.random() * 2)
          if (role === 0) {
            roles.push(spyJSON)
            spies--
          } else {
            roles.push(matchLocation.value)
            noSpies--
          }
          break
        }

        case spies === 0 && noSpies > 0:
          roles.push(matchLocation.value)
          noSpies--
          break

        case noSpies === 0 && spies > 0:
          roles.push(spyJSON)
          spies--
          break
      }
    }
    return roles
  })

  // Métodos
  const revealCard = () => {
    showingCard.value = true
    setTimeout(() => {
      showRole.value = true
    }, 800)
  }

  const nextCard = () => {
    if (currentPlayer.value < matchRoles.value.length) {
      showRole.value = false
      showingCard.value = false
      setTimeout(() => {
        currentCardJSON.value = matchRoles.value[currentPlayer.value]
        currentPlayer.value++
      }, 800)
    } else {
      emit('closeParade')
    }
  }

  // Watchers
  watch(
    locations,
    (value) => {
      if (value.length !== 0) {
        currentCardJSON.value = matchRoles.value[0]
      }
    },
    { immediate: true }
  )
</script>

<style scoped>
  .showing-cards-section {
    display: flex;
    width: 100%;
    max-width: 450px;
    height: calc(100vh - 140px);
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: var(--white-color);
    position: absolute;
    left: 0;
    top: 0;
  }
  .showing-cards-section .player-numb {
    margin-top: 80px;
    transition: all 800ms;
  }
  .showing-cards-section .card-container {
    position: relative;
    width: 240px;
    height: 240px;
    border-radius: 5px;
    transition: all 1000ms;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .showing-cards-section .card-container .card-side {
    position: absolute;
    width: 240px;
    height: 240px;
    border-radius: 5px;
  }
  .showing-cards-section .card-container .card-front {
    display: grid;
    place-content: center;
    color: var(--white-color);
    font-size: 18px;
    font-weight: bold;
    opacity: 1;
    transition: opacity 800ms ease-in-out;
  }
  .card-front--hidden {
    opacity: 0 !important;
  }

  .showing-cards-section .card-container .card-back {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .showing-cards-section .subject-name {
    margin-top: 20px;
    transition: all 800ms;
    opacity: 0;
  }
  .showing-cards-section .subject-name--visible {
    opacity: 1 !important;
  }
  .showing-cards-section .primary-button {
    width: 40%;
    transition: all 800ms;
  }
</style>
