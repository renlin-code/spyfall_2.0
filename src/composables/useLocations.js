import { ref, onMounted } from 'vue'

// Import de imágenes de forma estática
import circusImg from '../assets/images/circus.png'
import spaceStationImg from '../assets/images/space-station.png'
import northPoleImg from '../assets/images/north-pole.png'
import policeStationImg from '../assets/images/police-station.png'
import mountainPeakImg from '../assets/images/mountain-peak.png'
import desertIslandImg from '../assets/images/desert-island.png'
import conferenceImg from '../assets/images/conference.png'
import spaSalonImg from '../assets/images/spa-salon.png'
import swimmingPoolImg from '../assets/images/swimming-pool.png'
import submarineImg from '../assets/images/submarine.png'
import casinoImg from '../assets/images/casino.png'
import aircraftImg from '../assets/images/aircraft.png'
import schoolImg from '../assets/images/school.png'
import pirateShipImg from '../assets/images/pirate-ship.png'
import graveyardImg from '../assets/images/graveyard.png'
import campingImg from '../assets/images/camping.png'

/**
 * Composable para manejar las ubicaciones del juego
 * @returns {Object} Objeto con locations reactivo y función para obtener ubicaciones
 */
export function useLocations() {
  const locations = ref([])

  // Mapeo de ubicaciones con imágenes importadas
  const locationsData = [
    {
      id: 1,
      name: 'цирк',
      url: circusImg
    },
    {
      id: 2,
      name: 'космическая станция',
      url: spaceStationImg
    },
    {
      id: 3,
      name: 'северный полюс',
      url: northPoleImg
    },
    {
      id: 4,
      name: 'полицейский участок',
      url: policeStationImg
    },
    {
      id: 5,
      name: 'горная вершина',
      url: mountainPeakImg
    },
    {
      id: 6,
      name: 'необитаемый остров',
      url: desertIslandImg
    },
    {
      id: 7,
      name: 'конференция',
      url: conferenceImg
    },
    {
      id: 8,
      name: 'спа-салон',
      url: spaSalonImg
    },
    {
      id: 9,
      name: 'бассейн',
      url: swimmingPoolImg
    },
    {
      id: 10,
      name: 'подводная лодка',
      url: submarineImg
    },
    {
      id: 11,
      name: 'казино',
      url: casinoImg
    },
    {
      id: 12,
      name: 'самолёт',
      url: aircraftImg
    },
    {
      id: 13,
      name: 'школа',
      url: schoolImg
    },
    {
      id: 14,
      name: 'пиратский корабль',
      url: pirateShipImg
    },
    {
      id: 15,
      name: 'кладбище',
      url: graveyardImg
    },
    {
      id: 16,
      name: 'кемпинг',
      url: campingImg
    }
  ]

  /**
   * Obtiene todas las ubicaciones directamente desde los assets locales
   */
  const fetchAllLocations = () => {
    locations.value = locationsData
    return locationsData
  }

  // Cargar ubicaciones inmediatamente al montar el componente
  onMounted(() => {
    fetchAllLocations()
  })

  return {
    locations,
    fetchAllLocations
  }
}
