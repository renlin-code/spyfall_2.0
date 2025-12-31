import { ref, onMounted } from 'vue'

/**
 * Composable para manejar el color del tema de la aplicación
 * @returns {Object} Objeto con color reactivo y funciones para manejarlo
 */
export function useColor() {
  const color = ref('#C6FF00') // Color por defecto

  /**
   * Obtiene el color guardado en localStorage
   */
  const getColorFromLS = () => {
    try {
      const colorFromLS = JSON.parse(localStorage.getItem('color'))
      if (colorFromLS) {
        color.value = colorFromLS
      }
    } catch (error) {
      console.warn('Error parsing color from localStorage:', error)
      // Mantiene el color por defecto si hay error
    }
  }

  /**
   * Guarda el color en localStorage
   * @param {string} newColor - El nuevo color a guardar
   */
  const saveColor = (newColor) => {
    try {
      color.value = newColor
      localStorage.setItem('color', JSON.stringify(newColor))
    } catch (error) {
      console.error('Error saving color to localStorage:', error)
    }
  }

  /**
   * Resetea el color al valor por defecto
   */
  const resetColor = () => {
    const defaultColor = '#C6FF00'
    saveColor(defaultColor)
  }

  // Obtener color del localStorage al montar
  onMounted(() => {
    getColorFromLS()
  })

  return {
    color,
    getColorFromLS,
    saveColor,
    resetColor
  }
}
