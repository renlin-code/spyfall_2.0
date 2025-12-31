<template>
  <div class="countdown-container">
    <div
      :style="`background: linear-gradient(to bottom left, var(--black-color), ${color})`"
      class="countdown"
    >
      <p>{{ timeToShow }}</p>
    </div>
    <button @click="$emit('openPopUp')" class="stop-button countdown-button">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 15.3516 4.64844 19.6875 10 19.6875C15.3516 19.6875 19.6875 15.3516 19.6875 10ZM2.1875 10C2.1875 5.68359 5.68359 2.1875 10 2.1875C14.3164 2.1875 17.8125 5.68359 17.8125 10C17.8125 14.3164 14.3164 17.8125 10 17.8125C5.68359 17.8125 2.1875 14.3164 2.1875 10ZM13.75 6.875V13.125C13.75 13.4688 13.4688 13.75 13.125 13.75H6.875C6.53125 13.75 6.25 13.4688 6.25 13.125V6.875C6.25 6.53125 6.53125 6.25 6.875 6.25H13.125C13.4688 6.25 13.75 6.53125 13.75 6.875Z"
          fill="#F15454"
        />
      </svg>
    </button>
    <button
      @click="pauseTimer = !pauseTimer"
      class="start-pause-button primary-button countdown-button"
    >
      {{ buttonPauseWord }}
    </button>
  </div>
</template>

<script setup>
  import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useColor } from '../composables/useColor'
  import { useSessionStorage } from '../composables/useStorage'
  import { useTimeout } from '../composables/useUtils'

  // Props y Emits
  defineEmits(['openPopUp'])

  // Router
  const router = useRouter()

  // Composables
  const { color } = useColor()
  const { value: currMatchTime, setValue: setCurrMatchTime } =
    useSessionStorage('currMatchTime', null)
  const { value: timeAmount } = useSessionStorage('timeAmount', 8)
  const { setInterval, clearInterval, clearAll } = useTimeout()

  // Estado reactivo
  const pauseTimer = ref(false)
  const timeInSeconds = ref(false)
  let countdownInterval = null

  // Computed properties
  const timeToShow = computed(() => {
    let minutes = Math.floor(timeInSeconds.value / 60)
    let seconds = timeInSeconds.value % 60

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    return `${minutes}:${seconds}`
  })

  const buttonPauseWord = computed(() => {
    return pauseTimer.value ? 'PLAY' : 'PAUSE'
  })

  // Métodos
  const countDown = () => {
    if (countdownInterval) {
      clearInterval(countdownInterval)
    }

    countdownInterval = setInterval(() => {
      if (!pauseTimer.value && timeInSeconds.value > 0) {
        timeInSeconds.value--
        setCurrMatchTime(timeInSeconds.value)
      }
    }, 1000)
  }

  const resetMatch = () => {
    pauseTimer.value = true
    timeInSeconds.value = false
    setCurrMatchTime(null)

    if (countdownInterval) {
      clearInterval(countdownInterval)
      countdownInterval = null
    }
  }

  // Watchers
  watch(timeInSeconds, (value) => {
    if (value === 0) {
      console.log('Timer finished:', value)
      router.push('/')
      resetMatch()
    }
  })

  // Lifecycle
  onMounted(() => {
    const savedTime = currMatchTime.value
    timeInSeconds.value = savedTime ? savedTime : timeAmount.value * 60
    countDown()
  })

  onUnmounted(() => {
    clearAll() // Limpia todos los timeouts/intervals automáticamente
    resetMatch()
  })
</script>

<style scoped>
  .countdown-container {
    display: flex;
    width: 100%;
    height: auto;
    margin: 10px auto;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: var(--white-color);
    transition: all 800ms;
  }
  .countdown-container .countdown {
    display: grid;
    place-content: center;
    width: 30%;
    height: 56px;
    border-radius: 4px;
  }
  .countdown-container .countdown p {
    font-family: 'Dejavu Serif';
    font-weight: 700;
    font-size: 1.8rem;
    color: var(--white-color);
  }
  .countdown-container .start-pause-button {
    width: 30%;
    margin: 0;
  }
  .countdown-container .stop-button {
    width: 50px;
    height: 50px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    align-self: center;
    transition: all 800ms;
  }
</style>
