<template>
  <LayoutDefault>
    <template #header>
      <Header />
    </template>
    <template #main>
      <section class="match-parameters-section">
        <!-- <router-link class="close-button" to="/">Back</router-link> -->
        <div action="/index.html" class="parameters-container">
          <div class="counters-wrapper">
            <p class="primary-text players-counter-text">PLAYERS (NO SPY)</p>
            <p class="primary-text spies-counter-text">SPY</p>
            <p class="primary-text time-counter-text">MINUTES</p>
            <div class="counter-container players-counter-container">
              <span :style="`background-color: ${color}30`">{{
                playersNoSpiesCount.amount
              }}</span>
              <button
                @click="decreaseCount(playersNoSpiesCount)"
                :class="{
                  transparent:
                    playersNoSpiesCount.amount ===
                    playersNoSpiesCount.lowerLimit
                }"
                class="minus-button"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 0C6.71591 0 0 6.71591 0 15C0 23.2841 6.71591 30 15 30C23.2841 30 30 23.2841 30 15C30 6.71591 23.2841 0 15 0ZM9.54545 13.6364C9.1838 13.6364 8.83695 13.78 8.58122 14.0358C8.32549 14.2915 8.18182 14.6383 8.18182 15C8.18182 15.3617 8.32549 15.7085 8.58122 15.9642C8.83695 16.22 9.1838 16.3636 9.54545 16.3636H20.4545C20.8162 16.3636 21.1631 16.22 21.4188 15.9642C21.6745 15.7085 21.8182 15.3617 21.8182 15C21.8182 14.6383 21.6745 14.2915 21.4188 14.0358C21.1631 13.78 20.8162 13.6364 20.4545 13.6364H9.54545Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </button>
              <button
                @click="increaseCount(playersNoSpiesCount)"
                :class="{
                  transparent:
                    playersNoSpiesCount.amount ===
                    playersNoSpiesCount.upperLimit
                }"
                class="plus-button"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0C6.71652 0 0 6.71652 0 15C0 23.2835 6.71652 30 15 30C23.2835 30 30 23.2835 30 15C30 6.71652 23.2835 0 15 0ZM21.4286 15.8036C21.4286 15.9509 21.308 16.0714 21.1607 16.0714H16.0714V21.1607C16.0714 21.308 15.9509 21.4286 15.8036 21.4286H14.1964C14.0491 21.4286 13.9286 21.308 13.9286 21.1607V16.0714H8.83929C8.69196 16.0714 8.57143 15.9509 8.57143 15.8036V14.1964C8.57143 14.0491 8.69196 13.9286 8.83929 13.9286H13.9286V8.83929C13.9286 8.69196 14.0491 8.57143 14.1964 8.57143H15.8036C15.9509 8.57143 16.0714 8.69196 16.0714 8.83929V13.9286H21.1607C21.308 13.9286 21.4286 14.0491 21.4286 14.1964V15.8036Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </button>
            </div>
            <div class="counter-container spies-counter-container">
              <span :style="`background-color: ${color}30`">{{
                spiesCount.amount
              }}</span>
              <button
                @click="decreaseCount(spiesCount)"
                :class="{
                  transparent: spiesCount.amount === spiesCount.lowerLimit
                }"
                class="minus-button"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 0C6.71591 0 0 6.71591 0 15C0 23.2841 6.71591 30 15 30C23.2841 30 30 23.2841 30 15C30 6.71591 23.2841 0 15 0ZM9.54545 13.6364C9.1838 13.6364 8.83695 13.78 8.58122 14.0358C8.32549 14.2915 8.18182 14.6383 8.18182 15C8.18182 15.3617 8.32549 15.7085 8.58122 15.9642C8.83695 16.22 9.1838 16.3636 9.54545 16.3636H20.4545C20.8162 16.3636 21.1631 16.22 21.4188 15.9642C21.6745 15.7085 21.8182 15.3617 21.8182 15C21.8182 14.6383 21.6745 14.2915 21.4188 14.0358C21.1631 13.78 20.8162 13.6364 20.4545 13.6364H9.54545Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </button>
              <button
                @click="increaseCount(spiesCount)"
                :class="{
                  transparent: spiesCount.amount === spiesCount.upperLimit
                }"
                class="plus-button"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0C6.71652 0 0 6.71652 0 15C0 23.2835 6.71652 30 15 30C23.2835 30 30 23.2835 30 15C30 6.71652 23.2835 0 15 0ZM21.4286 15.8036C21.4286 15.9509 21.308 16.0714 21.1607 16.0714H16.0714V21.1607C16.0714 21.308 15.9509 21.4286 15.8036 21.4286H14.1964C14.0491 21.4286 13.9286 21.308 13.9286 21.1607V16.0714H8.83929C8.69196 16.0714 8.57143 15.9509 8.57143 15.8036V14.1964C8.57143 14.0491 8.69196 13.9286 8.83929 13.9286H13.9286V8.83929C13.9286 8.69196 14.0491 8.57143 14.1964 8.57143H15.8036C15.9509 8.57143 16.0714 8.69196 16.0714 8.83929V13.9286H21.1607C21.308 13.9286 21.4286 14.0491 21.4286 14.1964V15.8036Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </button>
            </div>
            <div class="counter-container time-counter-container">
              <span :style="`background-color: ${color}30`">{{
                timeCount.amount
              }}</span>
              <button
                @click="decreaseCount(timeCount)"
                :class="{
                  transparent: timeCount.amount === timeCount.lowerLimit
                }"
                class="minus-button"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 0C6.71591 0 0 6.71591 0 15C0 23.2841 6.71591 30 15 30C23.2841 30 30 23.2841 30 15C30 6.71591 23.2841 0 15 0ZM9.54545 13.6364C9.1838 13.6364 8.83695 13.78 8.58122 14.0358C8.32549 14.2915 8.18182 14.6383 8.18182 15C8.18182 15.3617 8.32549 15.7085 8.58122 15.9642C8.83695 16.22 9.1838 16.3636 9.54545 16.3636H20.4545C20.8162 16.3636 21.1631 16.22 21.4188 15.9642C21.6745 15.7085 21.8182 15.3617 21.8182 15C21.8182 14.6383 21.6745 14.2915 21.4188 14.0358C21.1631 13.78 20.8162 13.6364 20.4545 13.6364H9.54545Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </button>
              <button
                @click="increaseCount(timeCount)"
                :class="{
                  transparent: timeCount.amount === timeCount.upperLimit
                }"
                class="plus-button"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0C6.71652 0 0 6.71652 0 15C0 23.2835 6.71652 30 15 30C23.2835 30 30 23.2835 30 15C30 6.71652 23.2835 0 15 0ZM21.4286 15.8036C21.4286 15.9509 21.308 16.0714 21.1607 16.0714H16.0714V21.1607C16.0714 21.308 15.9509 21.4286 15.8036 21.4286H14.1964C14.0491 21.4286 13.9286 21.308 13.9286 21.1607V16.0714H8.83929C8.69196 16.0714 8.57143 15.9509 8.57143 15.8036V14.1964C8.57143 14.0491 8.69196 13.9286 8.83929 13.9286H13.9286V8.83929C13.9286 8.69196 14.0491 8.57143 14.1964 8.57143H15.8036C15.9509 8.57143 16.0714 8.69196 16.0714 8.83929V13.9286H21.1607C21.308 13.9286 21.4286 14.0491 21.4286 14.1964V15.8036Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </button>
            </div>
          </div>
          <router-link
            to="/locations"
            :style="`border: 2px solid ${color}`"
            class="secondary-button"
            >LOCATIONS</router-link
          >
        </div>
        <router-link to="/match" class="primary-button">START</router-link>
      </section>
    </template>
  </LayoutDefault>
</template>

<script setup>
  import { reactive, onMounted } from 'vue'
  import { useColor } from '../composables/useColor'
  import { useSessionStorage } from '../composables/useStorage'
  import LayoutDefault from '../components/layouts/LayoutDefault.vue'
  import Header from '../components/headers/Header.vue'

  // Composables
  const { color } = useColor()

  // Estado reactivo para los contadores
  const playersNoSpiesCount = reactive({
    amount: null,
    lowerLimit: 2,
    upperLimit: 10
  })

  const spiesCount = reactive({
    amount: null,
    lowerLimit: 1,
    upperLimit: 3
  })

  const timeCount = reactive({
    amount: null,
    lowerLimit: 5,
    upperLimit: 15
  })

  // Session storage reactivo
  const { value: playersNoSpiesAmount, setValue: setPlayersNoSpiesAmount } =
    useSessionStorage('playersNoSpiesAmount', playersNoSpiesCount.lowerLimit)
  const { value: spiesAmount, setValue: setSpiesAmount } = useSessionStorage(
    'spiesAmount',
    spiesCount.lowerLimit
  )
  const { value: timeAmount, setValue: setTimeAmount } = useSessionStorage(
    'timeAmount',
    timeCount.lowerLimit
  )

  // Métodos
  const decreaseCount = (count) => {
    if (count.amount > count.lowerLimit) {
      count.amount = count.amount - 1
      save()
    }
  }

  const increaseCount = (count) => {
    if (count.amount < count.upperLimit) {
      count.amount = count.amount + 1
      save()
    }
  }

  const save = () => {
    setPlayersNoSpiesAmount(playersNoSpiesCount.amount)
    setSpiesAmount(spiesCount.amount)
    setTimeAmount(timeCount.amount)
  }

  // Inicializar valores al montar el componente
  onMounted(() => {
    playersNoSpiesCount.amount =
      playersNoSpiesAmount.value || playersNoSpiesCount.lowerLimit
    spiesCount.amount = spiesAmount.value || spiesCount.lowerLimit
    timeCount.amount = timeAmount.value || timeCount.lowerLimit
    save()
  })
</script>

<style scoped>
  .match-parameters-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 450px;
    height: calc(100vh - 140px);
    background-color: var(--white-color);
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 8px;
  }
  .match-parameters-section .parameters-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    align-items: center;
    width: 100%;
    max-width: 340px;
  }
  .match-parameters-section .parameters-container .counters-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    row-gap: 28px;
    column-gap: 16px;
    width: 100%;
    align-items: center;
  }
  .players-counter-text,
  .spies-counter-text,
  .time-counter-text {
    grid-column: 1/2;
    font-size: 1.7rem;
    font-weight: 700;
    color: var(--dark-gray);
    letter-spacing: 0.2px;
    margin-bottom: 0;
    padding-left: 2px;
  }
  .players-counter-container {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  .spies-counter-container {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  .time-counter-container {
    grid-column: 2/3;
    grid-row: 3/4;
  }
  .match-parameters-section
    .parameters-container
    .counters-wrapper
    .counter-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 18px;
    background: rgba(0, 0, 0, 0.03);
    padding: 10px 18px;
    border-radius: 18px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
  .match-parameters-section
    .parameters-container
    .counters-wrapper
    .counter-container
    span {
    display: grid;
    place-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    text-align: center;
    font-size: 2.1rem;
    font-weight: 700;
    color: var(--black-color);
    border: 2px solid rgba(0, 0, 0, 0.08);
    background: var(--white-color);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
    margin: 0 2px;
  }
  .match-parameters-section
    .parameters-container
    .counters-wrapper
    .counter-container
    .minus-button,
  .match-parameters-section
    .parameters-container
    .counters-wrapper
    .counter-container
    .plus-button {
    width: 38px;
    height: 38px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.18s cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    font-size: 2.2rem;
    color: var(--dark-gray);
    border: 2px solid transparent;
  }
  .match-parameters-section
    .parameters-container
    .counters-wrapper
    .counter-container
    .minus-button:active,
  .match-parameters-section
    .parameters-container
    .counters-wrapper
    .counter-container
    .plus-button:active {
    transform: scale(0.93);
    background: #e0e0e0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
  }
  .match-parameters-section
    .parameters-container
    .counters-wrapper
    .counter-container
    .minus-button:hover:not(.transparent),
  .match-parameters-section
    .parameters-container
    .counters-wrapper
    .counter-container
    .plus-button:hover:not(.transparent) {
    background: linear-gradient(135deg, #e0e0e0 0%, #c6ff00 100%);
    color: var(--black-color);
    border-color: var(--main-color);
    box-shadow: 0 4px 12px rgba(198, 255, 0, 0.1);
    transform: translateY(-2px) scale(1.05);
  }
  .transparent {
    opacity: 0.35;
    cursor: not-allowed;
    pointer-events: none;
  }
</style>
