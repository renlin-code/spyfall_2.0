# Spyfall 2.0 - Vue 3 Edition 🎲🕵️

Un juego de deducción social donde puedes sentirte como un detective real o un espía astuto. Esta versión ha sido completamente migrada y modernizada usando **Vue 3** con **Composition API**.

## ✨ Características Principales

- 🎮 **Juego multijugador local** - De 3 a 13 jugadores
- 🕐 **Temporizador personalizable** - De 5 a 15 minutos
- 🏢 **Múltiples ubicaciones** - 16 ubicaciones únicas cargadas localmente
- 📱 **Diseño responsive** - Optimizado para móviles y tablets
- 🎨 **Tema personalizable** - Cambia los colores del juego
- ⚡ **Vue 3 Composition API** - Código moderno y mantenible
- 🖼️ **Assets locales** - Imágenes optimizadas y cargadas localmente

## 🚀 Migración a Vue 3

Este proyecto ha sido completamente migrado de Vue 2 a Vue 3 incluyendo:

### ✅ Cambios Realizados

- **Composition API**: Todos los componentes migrados a `<script setup>`
- **Composables**: Mixins convertidos a composables reutilizables
- **Performance**: Mejor gestión de la reactividad con `ref()` y `reactive()`
- **Assets Locales**: Imágenes y recursos optimizados cargados desde assets/
- **TypeScript Ready**: Configuración preparada para TypeScript
- **ESLint & Prettier**: Configuración de linting moderna
- **Vite Optimizado**: Configuración mejorada con code splitting

### 📁 Estructura de Composables

```
src/composables/
├── useColor.js      # Gestión del tema de colores
├── useLocations.js  # Gestión instantánea de ubicaciones
├── useStorage.js    # Manejo reactivo del sessionStorage
└── useUtils.js      # Utilidades async y timeouts
```

## 🛠️ Configuración del Proyecto

### Prerequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```sh
npm install
```

### Desarrollo

```sh
npm run dev
```

### Producción

```sh
npm run build
npm run preview
```

### Linting

```sh
npm run lint
```

## 🎯 Cómo Jugar

1. **Configuración**: Selecciona el número de jugadores y espías
2. **Temporizador**: Elige la duración de la partida (5-15 minutos)
3. **Ubicaciones**: Revisa las ubicaciones disponibles
4. **Juego**: Cada jugador recibe una carta secreta
5. **Deducción**: Los jugadores hacen preguntas para encontrar al espía

## 🏗️ Arquitectura Técnica

### Composables Principales

- **`useColor()`**: Gestión reactiva del tema de colores
- **`useLocations()`**: Carga instantánea de ubicaciones desde assets locales
- **`useStorage()`**: Abstracción reactiva sobre sessionStorage
- **`useAsync()`**: Manejo de estados de carga y errores
- **`useTimeout()`**: Gestión automática de timers e intervalos

### Estructura de Componentes

- **Views**: Páginas principales de la aplicación
- **Components**: Componentes reutilizables organizados por funcionalidad
- **Layouts**: Estructuras base para las páginas
- **Composables**: Lógica reutilizable siguiendo la Composition API

## 📝 Cambios de la Migración

### Antes (Vue 2 + Options API)
```javascript
// Mixin
export const fetchLocations = () => ({
  data: () => ({ locations: [] }),
  methods: { async fetchAllLocations() { /* ... */ } },
  created() { this.fetchAllLocations() }
})

// Componente
export default {
  mixins: [fetchLocations()],
  data: () => ({ showModal: false }),
  methods: { selectImg(src) { /* ... */ } }
}
```

### Después (Vue 3 + Composition API)
```javascript
// Composable
export function useLocations() {
  const locations = ref([])
  const fetchAllLocations = () => {
    locations.value = locationsData // Carga instantánea
    return locationsData
  }
  onMounted(() => fetchAllLocations())
  return { locations, fetchAllLocations }
}

// Componente
<script setup>
import { ref } from 'vue'
import { useLocations } from '../composables/useLocations'

const { locations } = useLocations() // Sin estados de loading
const showModal = ref(false)
const selectImg = (src) => { /* ... */ }
</script>
```

## 🔧 Configuración Avanzada

El proyecto incluye configuraciones optimizadas para:
- **Vite**: Build tool moderno con HMR ultra-rápido
- **ESLint**: Linting con reglas específicas para Vue 3
- **Prettier**: Formateo de código consistente
- **Code Splitting**: Optimización automática de bundles

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ve el archivo `LICENSE` para más detalles.

---

**¡Disfruta del juego y que gane el mejor detective!** 🕵️‍♂️🎉