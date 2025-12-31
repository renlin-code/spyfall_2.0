import { ref } from 'vue'

/**
 * Composable para manejar estados de carga y errores
 * @returns {Object} Estados reactivos y funciones utilitarias
 */
export function useAsync() {
  const isLoading = ref(false)
  const error = ref(null)

  /**
   * Ejecuta una función asíncrona y maneja los estados
   * @param {Function} asyncFn - Función asíncrona a ejecutar
   * @returns {Promise} Resultado de la función
   */
  const execute = async (asyncFn) => {
    try {
      isLoading.value = true
      error.value = null
      const result = await asyncFn()
      return result
    } catch (err) {
      error.value = err.message || 'An error occurred'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Limpia el estado de error
   */
  const clearError = () => {
    error.value = null
  }

  return {
    isLoading,
    error,
    execute,
    clearError
  }
}

/**
 * Composable para manejar timeouts y intervalos de forma reactiva
 * @returns {Object} Funciones para manejar timeouts e intervalos
 */
export function useTimeout() {
  const timeouts = new Set()
  const intervals = new Set()

  /**
   * Crea un timeout que se limpia automáticamente
   * @param {Function} callback - Función a ejecutar
   * @param {number} delay - Delay en milisegundos
   * @returns {number} ID del timeout
   */
  const setTimeout = (callback, delay) => {
    const id = window.setTimeout(() => {
      callback()
      timeouts.delete(id)
    }, delay)
    timeouts.add(id)
    return id
  }

  /**
   * Crea un intervalo que se limpia automáticamente
   * @param {Function} callback - Función a ejecutar
   * @param {number} delay - Delay en milisegundos
   * @returns {number} ID del intervalo
   */
  const setInterval = (callback, delay) => {
    const id = window.setInterval(callback, delay)
    intervals.add(id)
    return id
  }

  /**
   * Limpia un timeout específico
   * @param {number} id - ID del timeout
   */
  const clearTimeout = (id) => {
    window.clearTimeout(id)
    timeouts.delete(id)
  }

  /**
   * Limpia un intervalo específico
   * @param {number} id - ID del intervalo
   */
  const clearInterval = (id) => {
    window.clearInterval(id)
    intervals.delete(id)
  }

  /**
   * Limpia todos los timeouts e intervalos
   */
  const clearAll = () => {
    timeouts.forEach((id) => window.clearTimeout(id))
    intervals.forEach((id) => window.clearInterval(id))
    timeouts.clear()
    intervals.clear()
  }

  return {
    setTimeout,
    setInterval,
    clearTimeout,
    clearInterval,
    clearAll
  }
}
