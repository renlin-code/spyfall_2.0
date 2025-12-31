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
      name: 'circus',
      url: circusImg
    },
    {
      id: 2,
      name: 'space station',
      url: spaceStationImg
    },
    {
      id: 3,
      name: 'north pole',
      url: northPoleImg
    },
    {
      id: 4,
      name: 'police station',
      url: policeStationImg
    },
    {
      id: 5,
      name: 'mountain peak',
      url: mountainPeakImg
    },
    {
      id: 6,
      name: 'desert island',
      url: desertIslandImg
    },
    {
      id: 7,
      name: 'conference',
      url: conferenceImg
    },
    {
      id: 8,
      name: 'spa salon',
      url: spaSalonImg
    },
    {
      id: 9,
      name: 'swimming pool',
      url: swimmingPoolImg
    },
    {
      id: 10,
      name: 'submarine',
      url: submarineImg
    },
    {
      id: 11,
      name: 'casino',
      url: casinoImg
    },
    {
      id: 12,
      name: 'aircraft',
      url: aircraftImg
    },
    {
      id: 13,
      name: 'school',
      url: schoolImg
    },
    {
      id: 14,
      name: 'pirate ship',
      url: pirateShipImg
    },
    {
      id: 15,
      name: 'graveyard',
      url: graveyardImg
    },
    {
      id: 16,
      name: 'camping',
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
