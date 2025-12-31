import { ref, watch } from 'vue'

/**
 * Composable para manejar sessionStorage de forma reactiva
 * @param {string} key - Clave del sessionStorage
 * @param {*} defaultValue - Valor por defecto
 * @returns {Object} Valor reactivo y función para actualizar
 */
export function useSessionStorage(key, defaultValue = null) {
  // Función para leer el valor del sessionStorage
  const readFromStorage = () => {
    try {
      const item = sessionStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.warn(`Error reading ${key} from sessionStorage:`, error)
      return defaultValue
    }
  }

  // Estado reactivo
  const storedValue = ref(readFromStorage())

  // Función para escribir en sessionStorage
  const writeToStorage = (value) => {
    try {
      storedValue.value = value
      sessionStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error writing ${key} to sessionStorage:`, error)
    }
  }

  // Función para eliminar del sessionStorage
  const removeFromStorage = () => {
    try {
      storedValue.value = defaultValue
      sessionStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing ${key} from sessionStorage:`, error)
    }
  }

  // Observar cambios y sincronizar con sessionStorage
  watch(
    storedValue,
    (newValue) => {
      try {
        sessionStorage.setItem(key, JSON.stringify(newValue))
      } catch (error) {
        console.error(`Error syncing ${key} to sessionStorage:`, error)
      }
    },
    { deep: true }
  )

  return {
    value: storedValue,
    setValue: writeToStorage,
    removeValue: removeFromStorage
  }
}

/**
 * Composable específico para el manejo del estado del juego
 * @returns {Object} Estados del juego y funciones para manejarlos
 */
export function useGameState() {
  const stage = useSessionStorage('stage', 1)
  const playersNoSpiesAmount = useSessionStorage('playersNoSpiesAmount', 3)
  const spiesAmount = useSessionStorage('spiesAmount', 1)
  const timeAmount = useSessionStorage('timeAmount', 8)
  const currMatchTime = useSessionStorage('currMatchTime', null)

  const resetGameState = () => {
    stage.removeValue()
    playersNoSpiesAmount.removeValue()
    spiesAmount.removeValue()
    timeAmount.removeValue()
    currMatchTime.removeValue()
  }

  return {
    stage: stage.value,
    setStage: stage.setValue,
    playersNoSpiesAmount: playersNoSpiesAmount.value,
    setPlayersNoSpiesAmount: playersNoSpiesAmount.setValue,
    spiesAmount: spiesAmount.value,
    setSpiesAmount: spiesAmount.setValue,
    timeAmount: timeAmount.value,
    setTimeAmount: timeAmount.setValue,
    currMatchTime: currMatchTime.value,
    setCurrMatchTime: currMatchTime.setValue,
    resetGameState
  }
}
